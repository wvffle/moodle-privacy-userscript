// ==UserScript==
// @name     Moodle Privacy UserScript
// @version  1.3.1
// @run-at   document-start
// @namespace https://wvffle.net/
// @include  /^https?://cez(2|e)?\.wi\.pb\.edu\.pl/.*$/
// @include  /^https?:\/\/(moodle|ekursy)?\.put\.poznan\.pl\/.*$/
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

const start = +new Date
let call = start

window.requestAnimationFrame = window.msRequestAnimationFrame = window.mozRequestAnimationFrame = window.webkitRequestAnimationFrame = cb => {
  const now = +new Date
  const timeout = Math.min(call - now + 100 / 6)
  call = now + timeout

  return setTimeout(() => cb(now - start), timeout)
}

window.cancelAnimationFrame = window.mozCancelAnimationFrame = window.webkitCancelAnimationFrame = window.cancelRequestAnimationFrame = 
window.msCancelRequestAnimationFrame = window.mozCancelRequestAnimationFrame = window.webkitCancelRequestAnimationFrame = i => {
  return clearTimeout(i)
}
