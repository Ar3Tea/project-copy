const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/core/Dev/total-recall/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/404.js"))),
  "component---src-pages-bedford-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/bedford.js"))),
  "component---src-pages-bretton-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/bretton.js"))),
  "component---src-pages-dogsthorpe-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/dogsthorpe.js"))),
  "component---src-pages-eastcentre-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/eastcentre.js"))),
  "component---src-pages-eyecentre-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/eyecentre.js"))),
  "component---src-pages-honeyhill-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/honeyhill.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/index.js"))),
  "component---src-pages-petetown-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/petetown.js"))),
  "component---src-pages-stluke-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/stluke.js"))),
  "component---src-pages-thebull-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/thebull.js"))),
  "component---src-pages-werrington-js": hot(preferDefault(require("/home/core/Dev/total-recall/src/pages/werrington.js")))
}

