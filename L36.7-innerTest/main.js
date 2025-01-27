let elm = document.getElementById("demo");

// textContent
console.log("textContent: ");
console.log(elm.textContent);

// innerText
console.log("innerText: ");
console.log(elm.innerText);

// innerHTML
console.log("innerHTML");
console.log(elm.innerHTML);

let elm2 = document.getElementById("demo2");
elm2.innerHTML = "<p><i>Blue Archive</i></p>";
elm2.innerText = "<p><i>Blue Archive</i></p>";
elm2.textContent = "<p><i>Blue Archive</i></p>";