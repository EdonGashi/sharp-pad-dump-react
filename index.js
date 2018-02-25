const React = require('react')
const ReactDOMServer = require('react-dom/server')
const old = Object.prototype.$getJSON
Object.prototype.$getJSON = function () {
  if (React.isValidElement(this)) {
    return {
      $type: 'html',
      $html: ReactDOMServer.renderToStaticMarkup(this)
    }
  }

  return old ? old.apply(this) : undefined
}
