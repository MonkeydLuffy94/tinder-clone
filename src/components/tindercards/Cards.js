import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Rik",
      url:
        "https://www.scienceabc.com/wp-content/uploads/2016/01/shutterstock_338992685.jpg",
    },
    {
      name: "Rik",
      url:
        "https://www.scienceabc.com/wp-content/uploads/2016/01/shutterstock_338992685.jpg",
    },
    {
      name: "Rik",
      url:
        "https://www.scienceabc.com/wp-content/uploads/2016/01/shutterstock_338992685.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {};

  const outOfScreen = name => {};

  return (
    <div className="cards">
        <div className="cards__container">
      {people.map(person => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={direction => swiped(direction, person.name)}
          onCardLeftScreen={() => outOfScreen(person.name)}
        >
          <div style={{ backgroundImage: `url(${person.url})` }} className="card">
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
      </div>
    </div>
  );
}

export default Cards;
