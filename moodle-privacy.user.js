// ==UserScript==
// @name     Moodle Privacy UserScript
// @version  1.0.0
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
