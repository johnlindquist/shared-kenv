// Menu: New Journal Entry
// Description: Generate a file using the current date in a specified folder
// Author: John Lindquist
// Twitter: @johnlindquist
let { format } = await npm("date-fns")

let date = format(new Date(), "yyyy-MM-dd")

let journalPath = await env("JOURNAL_PATH")
if (!(await isDir(journalPath))) {
  mkdir("-p", journalPath)
}

let journalFile = path.join(journalPath, date + ".md")
if (!(await isFile(journalFile))) {
  let journalPrompt = `How are you feeling today?`
  await writeFile(journalFile, journalPrompt)
}

edit(journalFile, env?.JOURNAL_PATH)
