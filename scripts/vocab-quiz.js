// Menu: Vocab Quiz
// Description: Quiz on random vocab words
// Author: John Lindquist
// Twitter: @johnlindquist

await npm("wordnet-db")
let randomWord = await npm("random-word")
let { WordNet } = await npm("natural")

let wordNet = new WordNet()
let words = []

while (true) {
  setPlaceholder(`Finding random word and definitions...`)

  while (words.length < 4) {
    let quizWord = randomWord()
    let results = await new Promise(resolve => {
      wordNet.lookup(quizWord, resolve)
    })
    if (results.length) {
      let [{ lemma, def }] = results
      words.push({ name: def, value: lemma })
    }
  }

  let word = words[0]
  let result = await arg(
    `What does "${word.value}" mean?`,
    _.shuffle(words)
  )

  let correct = word.value === result
  setPlaceholder(
    `${correct ? "✅" : "🚫"} ${word.value}: ${word.name}`
  )
  words = []

  await wait(2000)
}
