(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.sayHello = void 0;
var sayHello = function sayHello(name) {
    return "Hello from " + name;
};
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var greet_1 = require("./greet");
var showHello = function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = (0, greet_1.sayHello)(name);
};
showHello("greeting", "TypeScript");

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBTyxJQUFNLFdBQVcsU0FBWCxRQUFXLENBQUMsSUFBRCxFQUFhO0FBQ25DLFdBQU8sZ0JBQWMsSUFBckI7QUFDRCxDQUZNO0FBQU0sUUFBQSxRQUFBLEdBQVEsUUFBUjs7Ozs7O0FDQWIsSUFBQSxVQUFBLFFBQUEsU0FBQSxDQUFBO0FBRUEsSUFBTSxZQUFZLFNBQVosU0FBWSxDQUFDLE9BQUQsRUFBa0IsSUFBbEIsRUFBOEI7QUFDOUMsUUFBTSxNQUFNLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBQ0EsUUFBSSxTQUFKLEdBQWdCLENBQUEsR0FBQSxRQUFBLFFBQUEsRUFBUyxJQUFULENBQWhCO0FBQ0QsQ0FIRDtBQUtBLFVBQVUsVUFBVixFQUFzQixZQUF0QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBzYXlIZWxsbyA9IChuYW1lOiBzdHJpbmcpID0+IHtcclxuICByZXR1cm4gYEhlbGxvIGZyb20gJHtuYW1lfWA7XHJcbn0iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XHJcblxyXG5jb25zdCBzaG93SGVsbG8gPSAoZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcclxuICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XHJcbn1cclxuXHJcbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsIFwiVHlwZVNjcmlwdFwiKTsiXX0=
