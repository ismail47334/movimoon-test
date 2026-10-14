/* Shared presentational helper only; application, analytics and advertising code is unchanged. */
(function () {
  'use strict';
  var year = String(new Date().getFullYear());
  document.querySelectorAll('[data-mm-year]').forEach(function (node) {
    node.textContent = year;
  });
})();
