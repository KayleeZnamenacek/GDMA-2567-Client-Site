// JavaScript Document

!function(){function t(t){var e=parseInt(t,10);return e>s?s:e}function e(t){return t.hasAttribute("data-no-resize")||(0===t.offsetWidth&&0===t.offsetHeight?(t.setAttribute("width",t.naturalWidth),t.setAttribute("height",t.naturalHeight)):(t.setAttribute("width",t.offsetWidth),t.setAttribute("height",t.offsetHeight))),t}function r(t,r){var n=t.nodeName.toLowerCase(),i=document.createElement("img");i.addEventListener("load",function(){"img"===n?e(t).setAttribute("src",r):t.style.backgroundImage="url("+r+")"}),i.setAttribute("src",r)}function n(e,n){var i=arguments.length<=2||void 0===arguments[2]?1:arguments[2],o=t(i);if(n&&o>1){var a=n.replace(f,"@"+o+"x$1");r(e,a)}}function i(t,e,n){s>1&&r(t,n)}function o(){return"undefined"!=typeof document?Array.prototype.slice.call(document.querySelectorAll(l)):[]}function a(t){return t.style.backgroundImage.replace(c,"$2")}function u(){o().forEach(function(t){var e="img"===t.nodeName.toLowerCase(),r=e?t.getAttribute("src"):a(t),o=t.getAttribute("data-rjs"),u=!isNaN(parseInt(o,10));u?n(t,r,o):i(t,r,o)})}"undefined"==typeof exports&&(exports={}),Object.defineProperty(exports,"__esModule",{value:!0});var d="undefined"!=typeof window,s=d?window.devicePixelRatio||1:1,f=/(\.[A-z]{3,4}\/?(\?.*)?)$/,c=/url\(('|")?([^\)'"]+)('|")?\)/i,l="[data-rjs]";d&&(window.addEventListener("load",u),window.retinajs=u),exports["default"]=u}();

// hamburger navigation 
        $('#hamb-nav').click(function() {
            $('header nav').toggleClass('display');

            if( $(this).text() == 'Hide' ) {

                $(this).text('Show');

            } else {
                $(this).text('Hide');

            }
        });

//map 
  var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
      }
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCNJpZgUofyIMmPM5oY1miRstxmF0Uj_E0'
});

