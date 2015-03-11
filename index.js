/*
 * Adapted from http://codepen.io/chriscoyier/pen/yIgqi.js
 */
(function() {
  function runScripts() {
    var bodyScripts = 'body script:not([src])';
    Array.prototype.forEach.call(document.querySelectorAll(bodyScripts), function setJSXType(element) {
      babel.run(element.innerText);
    });
  };

  if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', runScripts, false);
  } else {
    window.attachEvent('onload', runScripts);
  }
})();