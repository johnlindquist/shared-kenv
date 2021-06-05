// Menu: Share Selected File
// Description: Select a file in Finder. Creates tunnel and copies link to clipboard.
// Author: John Lindquist
// Twitter: @johnlindquistt
// Background: true

let ngrok = await npm("ngrok")
let handler = await npm("serve-handler")
let exitHook = await npm("exit-hook")
let http = await import("http")

let filePath = await getSelectedFile()

let symLinkName = _.last(
  filePath.split(path.sep)
).replaceAll(" ", "-")
let symLinkPath = tmp(symLinkName)

console.log(`Creating temporary symlink: ${symLinkPath}`)
ln(filePath, symLinkPath)

let port = 3033

const server = http.createServer(handler)

cd(tmp())

server.listen(port, async () => {
  let tunnel = await ngrok.connect(port)
  let shareLink = tunnel + "/" + symLinkName
  console.log(
    chalk`{yellow ${shareLink}} copied to clipboard`
  )
  copy(shareLink)
})

exitHook(() => {
  server.close()
  if (test("-f", symLinkPath)) {
    console.log(
      `Removing temporary symlink: ${symLinkPath}`
    )
    exec(`rm ${symLinkPath}`)
  }
})
