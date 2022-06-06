import React from "react";
import PropTypes from "prop-types";

function Joke({ joke }) {
  return <p>{joke}</p>;
}

Joke.propTypes = {
  joke: PropTypes.string.isRequired,
};

export default Joke;
