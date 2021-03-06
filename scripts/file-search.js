// Menu: Search for a File
// Description: File Search
// Author: John Lindquist
// Twitter: @johnlindquist

/** Note: This is a very basic search implementation based on "mdfind".
 * File search will be a _big_ focus in future versions of Script Kit
 */

let selectedFile = await arg(
  "Search a file:",
  async input => {
    if (input?.length < 4) return []
    let files = await fileSearch(input)

    return files.map(path => {
      return {
        name: path.split("/").pop(),
        description: path,
        value: path,
      }
    })
  }
)

exec(`open ${selectedFile}`)
