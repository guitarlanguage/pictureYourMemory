import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import hockeyPlayers from "./hockeyPlayers.json";
import "./App.css";

class App extends Component {
  // Setting this.state.hockeyPlayers to the hockeyPlayers json array
  state = {
    hockeyPlayers
  };

  removeFriend = id => {
    // Filter this.state.hockeyPlayers for hockeyPlayers with an id not equal to the id being removed
    const hockeyPlayers = this.state.hockeyPlayers.filter(friend => friend.id !== id);
    // Set this.state.hockeyPlayers equal to the new hockeyPlayers array
    this.setState({ hockeyPlayers });
  };

  // Map over this.state.hockeyPlayers and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Picture Your Memory</Title>
        {this.state.hockeyPlayers.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
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
