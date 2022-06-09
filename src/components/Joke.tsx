import React from "react";
import PropTypes from "prop-types";

type JokeProps = {
  joke: string;
};

function Joke({ joke }: JokeProps) {
  return <p>{joke}</p>;
}

Joke.propTypes = {
  joke: PropTypes.string.isRequired,
};

export default Joke;
