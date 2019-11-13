const fs = require('fs')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

module.exports = function (bumped, plugin, cb) {
  const { files } = plugin.opts
  const cwd = process.cwd()
  files.forEach(filePath => {
    const filename = require.resolve(`${cwd}/${filePath}`)
    const file = fs.readFileSync(filename, 'utf8');
    const dom = new JSDOM(file)
    const field = dom.window.document.head.querySelector('[name="version"]')
    field.content = bumped._version
    fs.writeFileSync(filename, dom.serialize())
  })
  cb()
}