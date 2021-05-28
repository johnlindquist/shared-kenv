// Menu: Detect Image Width and Height
// Description: Show the metadata of an image
// Author: John Lindquist
// Twitter: @johnlindquist

let sharp = await npm("sharp")

let image = await arg("Search an image:", async input => {
  if (input.length < 3) return []
  let files = await fileSearch(input, { kind: "image" })

  return files.map(path => {
    return {
      name: path.split("/").pop(),
      value: path,
      description: path,
    }
  })
})

let { width, height } = await sharp(image).metadata()

console.log({ width, height })
await arg(`Width: ${width} Height: ${height}`)
