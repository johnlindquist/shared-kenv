// Menu: Center App
// Description: Center the frontmost app
// Author: John Lindquist
// Twitter: @johnlindquist

let { workArea, bounds } = await getActiveScreen()

let { width, height } = workArea
let { x, y } = bounds
let padding = 100

let top = y + padding
let left = x + padding
let right = x + width - padding
let bottom = y + height - padding

setActiveAppBounds({
  top,
  left,
  right,
  bottom,
})
