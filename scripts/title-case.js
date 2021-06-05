// Menu: Title Case
// Description: Converts the selected text to title case
// Author: John Lindquist
// Twitter: @johnlindquist

let { titleCase } = await npm("title-case")

let text = await getSelectedText()
let titleText = titleCase(text)
await setSelectedText(titleText)
