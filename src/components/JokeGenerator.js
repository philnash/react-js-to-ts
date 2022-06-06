import React, { useState } from "react";
import { getJoke } from "../utils/getJoke";
import Joke from "./Joke";

function JokeGenerator() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateJoke = async () => {
    setJoke(null);
    setLoading(true);
    const joke = await getJoke();
    setLoading(false);
    setJoke(joke);
  };

  return (
    <>
      <h1>React Jokes</h1>
      {loading && <p>Fetching new hilarious joke</p>}
      {joke && <Joke joke={joke} />}
      <button onClick={generateJoke}>Generate!</button>
    </>
  );
}

export default JokeGenerator;
