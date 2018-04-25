import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import hockeyPlayers from "./hockeyPlayers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.hockeyPlayers to the hockeyPlayers json array
  state = {
    hockeyPlayers,
    goal: 0,
    highScore: 0,
    feedback: "Hit a player to begin, but don't hit them twice.",
    hit: []
  };

  hitPlayer = id => {
    if(this.state.hit.indexOf(id) === -1) {
      this.state.hit.push(id);
      this.scoreKeeper();
      this.shuffleCards();
    } else if (this.state.goal === 12) {
        this.scoreKeeper();
        this.resetHandler();
    } else {
      this.setState({feedback: "You hit the same player twice.  Hope you've got iron fists."});
      this.resetHandler();
    }
  };

  scoreKeeper = () => {
    const newScore = this.state.goal + 1;
    this.setState({goal: newScore});
    if (this.state.score === 12) {
      this.setState({feedback: "You've moved on to the playoffs"});
    } else {
      this.setState({feedback: "No memory issues yet. "});
    } 
    if (newScore >= this.state.highScore) {
      this.setState({highScore: newScore});
    }
  };

  lineChange = () => {
    let arr = this.state.hockeyPlayers;
    arr.forEach(function(elem, item) {
      let j = Math.floor(Math.random() * (item + 1));
      [arr[item], arr[j] = arr[j], arr[item]];
    });
    return arr;
  };

  resetLineUp = () => {
    this.setState({
    goal: 0,
    highScore: this.state.highScore,
    hit: []
    });
    this.lineChange();
  }
  // Map over this.state.hockeyPlayers and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Picture Your Memory</Title>
        {this.state.hockeyPlayers.map(friend => (
          <FriendCard
            hitPlayer={this.hitPlayer}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
