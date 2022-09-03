# ReactJS-Projects

This repository contains the exercises that I made to sharpen my React.js skills. Each folder is a different small project.

## Projects List

- ### Cards-API Exercise

  Build an app that displays a deck of cards, one card at a time. When the page loads, send a request to https://deckofcardsapi.com/api/deck/new/shuffle to create a new deck. Store the Deck ID it gives you, so you can make further requests to retreive each card image. Add a button to your app that allows a user to draw a new card.

  Every time the user clicks, the app should display a new card until the deck is empty. Make sure to tell the user there are no cards left!

- ### Dad-Jokes Exercise

  It's an app that lets people view and vote on joke posts. To generate jokes, I used the [ICanHazDadJoke](https://icanhazdadjoke.com/api) API.

  Application lists the jokes, along with a “vote-up” button, a “vote-down” button, and the net score for each joke. Users can vote, and the net score updates.

  There are no duplicate jokes shown.

  Jokes sorted by net score, and updated as the scores change.

  Stored the list of jokes, with votes in local storage. When users visit the app, it should show saved jokes, rather than fetching new jokes. However, the user still be able to generate new jokes via the button, and these new jokes should replace the ones in local storage.

- ### Hangman Exercise

  A React hangman game exercise.

- ### Lights-Out Exercise

  This exercise works with React events where the state and events happen in different classes.

  Lights Out is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. The puzzle is won when when all of the lights are turned off.

- ### Pokedex Exercise

  In this exercise I praticed using React components and properties.

- ### Todo-Class Exercise ***[Live](todo-class-ozan.netlify.app)***

  Class component based Todo App that allows users to see, add, edit, and remove todos.

- ### Todo-Hooks Exercise ***[Live](https://todo-hooks-exercise-ozan.netlify.app/)***

  Funtion component based Todo App that allows users to see, add, edit, and remove todos.

- ### React-Router@6 Exercise ***[Live](https://ozanyasin-homework-4.netlify.app/dogs)***

  React Router is a fully-featured client-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs.

  This exercise is an app that allows a user to browse between different dogs (different URLs).
  
- ### Coctails-API Exercise ***[Live](https://cocktail-exercise.netlify.app)***

  ContextAPI exercise that contains singleItem page and search input to filter fetched data. Used react-router-dom@6 libary to switch between pages as client side. 


- ### Redux-Toolkit Exercise ***[Live](https://redux-toolkit-exercise-ozan.netlify.app/)***

  This is a very basic E-Commerce App that I made to understand fundamentals of Redux-Toolkit libary.
  
---

## Local Installation

Install the dependencies and devDependencies and start the app.

```
$ git clone https://github.com/OzanYasin/ReactJS-Projects.git
$ cd <project-name>
$ npm install && npm start
```
