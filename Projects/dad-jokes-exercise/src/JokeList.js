import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './JokeList.css';

export default class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 5,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      // JSON.parse either whatever you get in the local storage under jokes, and if you don't find anything, then parse '[]' this string. Which is an empty array
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((j) => j.text));
    // A Set() is a data structure that contains only unique values, and it is very fast to check if a given value is container in that set already or not. Because of the way sets work, our code isn't going to have to check every single part of that set to see if there's a match.
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    try {
      let jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' },
        });
        // console.log(res.data.joke);
        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) {
          jokes.push({ id: uuidv4(), text: newJoke, votes: 0 });
        } else {
          console.log('FOUNDED A DUPLICATE');
          console.log(newJoke);
        }
      }
      this.setState(
        (st) => ({
          loading: false,
          jokes: [...st.jokes, ...jokes],
        }),
        () =>
          window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }

  handleVote(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      () =>
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    );
  }

  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="fa-8x fa-solid fa-face-laugh-beam fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt=""
          />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            <span style={{ color: 'rgb(240, 98, 146)' }}>New</span>
            <span style={{ color: 'rgb(179, 229, 252)' }}> Jokes</span>
          </button>
        </div>
        <div className="JokeList-jokes">
          {jokes.map((j) => (
            <Joke
              key={j.id}
              votes={j.votes}
              text={j.text}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}
