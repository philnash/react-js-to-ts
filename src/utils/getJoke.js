import superagent from "superagent";

const API_URL = "https://icanhazdadjoke.com/";

const getJoke = async () => {
  try {
    const result = await superagent.get(API_URL).accept("json");
    const dadJoke = result.body;
    return dadJoke.joke;
  } catch (error) {
    console.error(error);
  }
};

export { getJoke };
