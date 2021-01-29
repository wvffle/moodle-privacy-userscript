// ==UserScript==
// @name     Moodle Privacy UserScript
// @version  1.1.0
// @run-at   document-start
// @include  /^https?://cez(2|e)?\.wi\.pb\.edu\.pl/.*$/
// @grant    none
// ==/UserScript==

const events = ['visibilitychange', 'msvisibilitychange', 'webkitvisibilitychange', 'blur', 'focus']

for (const target of [window, document]) {
  for (const event of events) {
    target.addEventListener(event, e => e.stopImmediatePropagation(), true)
  }
}

for (const prop of ['visibilityState', 'msvisibilitychange', 'webkitvisibilitychange']) {
  Object.defineProperty(document, prop, {
    get (target) {
      return 'visible'
    }
  })
}

for (const prop of ['hidden', 'msHidden', 'webkitHidden']) {
  Object.defineProperty(document, prop, {
    get () {
      return false
    }
  })
}
