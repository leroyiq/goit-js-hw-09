!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");t.addEventListener("click",(function(){timerId=setInterval((function(){d.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),t.removeAttribute("disabled"),e.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.8ea4dcbf.js.map
