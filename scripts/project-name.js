// Menu: Project Name
// Description: Generate an alliteraive, dashed project name, copies it to the clipboard, and shows a notification
// Author: John Lindquist
// Twitter: @johnlindquist

let { generate } = await npm("project-name-generator")

const name = generate({
  word: 2,
  alliterative: true,
}).dashed

await setSelectedText(name)
