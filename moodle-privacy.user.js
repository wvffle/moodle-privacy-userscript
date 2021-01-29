// ==UserScript==
// @name     Moodle Privacy UserScript
// @version  1.1.0
// @run-at   document-start
// @include  /^https?://cez(2|e)?\.wi\.pb\.edu\.pl/.*$/
// @grant    none
// ==/UserScript==

const events = ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focus']

for (const target of [window, document]) {
  for (const event of events) {
    target.addEventListener(event, e => e.stopImmediatePropagation(), true)
  }
}

Object.defineProperty(document, 'visibilityState', {
  get () {
    return 'visible'
  }
})


Object.defineProperty(document, 'hidden', {
  get () {
    return false
  }
})
