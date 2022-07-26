import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck/';

export default class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
    this.setState({ deck: deck.data });
  }

  async getCard() {
    // make request using deck id
    let deck_id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      // console.log(cardRes.data.success);
      if (!cardRes.data.success) {
        throw new Error('No card remaining!');
      }
      // set state using new card info from api
      let card = cardRes.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }

  render() {
    const cards = this.state.drawn.map((c) => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div className="Deck">
        <h1 className="Deck-title">♦ Card Dealer ♥</h1>
        <h2 className="Deck-title subtitle">♣ Demo Made With React ♠</h2>
        <button className="Deck-btn" onClick={this.getCard}>
          Get Card!
        </button>
        <div className="CardArea">{cards}</div>
      </div>
    );
  }
}
