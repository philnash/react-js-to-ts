import superagent from "superagent";

const API_URL = "https://icanhazdadjoke.com/";

type DadJoke = {
  id: string;
  status: number;
  joke: string;
};

const getJoke = async () => {
  try {
    const result = await superagent.get(API_URL).accept("json");
    const dadJoke: DadJoke = result.body;
    return dadJoke.joke;
  } catch (error) {
    console.error(error);
  }
};

export { getJoke };
