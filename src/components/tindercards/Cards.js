import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";
import axios from "../../axios";

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/tinder/card');
      setPeople(req.data);
    }
    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {};

  const outOfScreen = name => {};

  return (
    <div className="cards">
      <div className="cards__container">
        {people.map((person, index) => (
          <TinderCard
            className="swipe"
            key={person.name + index}
            preventSwipe={["up", "down"]}
            onSwipe={direction => swiped(direction, person.name)}
            onCardLeftScreen={() => outOfScreen(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
