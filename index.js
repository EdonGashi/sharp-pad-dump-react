const React = require('react')
const ReactDOMServer = require('react-dom/server')
const old = Object.prototype.$getJSON
Object.defineProperty(Object.prototype, '$getJSON', {
  value: function () {
    if (React.isValidElement(this)) {
      return {
        $type: 'html',
        $html: ReactDOMServer.renderToStaticMarkup(this)
      }
    }

    return old ? old.apply(this) : undefined
  },
  writable: true,
  configurable: true,
  enumerable: false
})
