import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
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
    if (this.state.hit.indexOf(id) === -1) {
      this.state.hit.push(id);
      this.scoreKeeper();
      this.lineChange();
    } else if (this.state.goal === 12) {
      this.scoreKeeper();
      this.resetLineUp();
    } else {
      this.setState({
        feedback: "You hit the same player twice.  Hope you've got iron fists."
      });
      this.resetLineUp();
    }
  };

  scoreKeeper = () => {
    const newScore = this.state.goal + 1;
    this.setState({ goal: newScore });
    if (this.state.goal === 12) {
      this.setState({ feedback: "You've moved on to the playoffs" });
    } else {
      this.setState({ feedback: "No memory issues yet. " });
    }
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
  };

  lineChange = () => {
    let arr = this.state.hockeyPlayers;
    for (let i = arr.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  resetLineUp = () => {
    this.setState({
      goal: 0,
      highScore: this.state.highScore,
      hit: []
    });
    this.lineChange();
  };

  render() {
    return (
      <Wrapper>
        <Title>
          Picture Your Memory
          <h4>{this.state.feedback}</h4>
          <h5>Goals: {this.state.goal}</h5>
          <h5>High Score: {this.state.highScore}</h5>
        </Title>
        {/* Map over this.state.hockeyPlayers and render a PlayerCard component for each Player object*/}
        {this.state.hockeyPlayers.map(player => (
          <PlayerCard
            hitPlayer={this.hitPlayer}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            occupation={player.occupation}
            location={player.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
