var t=[];document.querySelectorAll(".population").forEach(function(e){t.push(+e.textContent.replaceAll(",",""))});var e=t.reduce(function(t,e){return t+e});document.querySelector(".total-population").textContent=e.toLocaleString("en-US"),document.querySelector(".average-population").textContent=(e/t.length).toLocaleString("en-US");
//# sourceMappingURL=index.a1c83f54.js.map
