// Menu: Paste URL
// Description: Copy the current URL from your browser. Paste it at cursor.
// Author: John Lindquist
// Twitter: @johnlindquist

let url = await getActiveTab()
await setSelectedText(url)
