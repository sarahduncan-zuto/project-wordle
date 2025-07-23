import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import NumberOfTriesInput from "../NumberOfTriesInput/NumberOfTriesInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [numberOfTries, setNumberOfTries] = React.useState(6);

  return (
    <div className="game">
      <div className="game-child">
        <GuessInput
          className="guess-input"
          numberOfTries={numberOfTries}
          setNumberOfTries={setNumberOfTries}
        />
      </div>
      <div className="game-child">
        <NumberOfTriesInput
          className="number-of-tries-input"
          numberOfTries={numberOfTries}
          setNumberOfTries={setNumberOfTries}
        />
      </div>
    </div>
  );
}

export default Game;
