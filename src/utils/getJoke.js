const API_URL = "https://icanhazdadjoke.com/";

async function getJoke() {
  const jokeResponse = await fetch(API_URL, {
    headers: { Accept: "application/json" },
  }).then((res) => res.json());
  return jokeResponse.joke;
}

export { getJoke };
