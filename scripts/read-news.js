// Menu: Read News
// Description: Scrape headlines from news.google.com then pick headline to read
// Author: John Lindquist
// Twitter: @johnlindquist

let headlines = await scrapeSelector(
  "https://news.google.com",
  "h3",
  el => ({
    name: el.innerText,
    value: el.firstChild.href,
  })
)

let url = await arg("What do you want to read?", headlines)

exec(`open "${url}"`)
