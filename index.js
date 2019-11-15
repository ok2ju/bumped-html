const fs = require('fs').promises
const path = require('path')
const jsdom = require('jsdom')

const { JSDOM } = jsdom

module.exports = async (bumped, plugin, cb) => {
  const { files } = plugin.opts
  const { _version } = bumped

  for (let i = 0; i < files.length; i++) {
    try {
      const filePath = path.join(process.cwd(), path.normalize(files[i]))
      const html = await fs.readFile(filePath, 'utf8')
      const dom = new JSDOM(html)
      const field = dom.window.document.head.querySelector('[name="version"]')

      if (field) {
        field.content = _version
      } else {
        const metaTag = dom.window.document.createElement('meta')
        metaTag.name = 'version'
        metaTag.content = _version
        dom.window.document.head.appendChild(metaTag)
      }

      await fs.writeFile(filePath, dom.serialize())
    } catch (error) {
      throw error
    }
  }

  cb()
}
