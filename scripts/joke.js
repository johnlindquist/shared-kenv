// Menu: Dad Joke
// Description: Logs out a Dad Joke from icanhazdadjoke.com
// Author: John Lindquist
// Twitter: @johnlindquist

let response = await get(`https://icanhazdadjoke.com/`, {
  headers: {
    Accept: "text/plain",
  },
})

let joke = response.data
setPanel(joke)
say(joke)
