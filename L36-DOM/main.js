// 10. hasAttribute()
// const item1 = document.querySelector(".list");

// console.log(item1.hasAttribute("class"));

const item2 = document.querySelector(".heading-title");

// 11. removeAttribute()
// to check existence of that attribute.
console.log(item2.hasAttribute("style"));

item2.removeAttribute("style");

console.log(item2.hasAttribute("style"));

// Assignment: remove all the "href" attributes of tag "a".

const item3 = document.querySelectorAll("ul a");

item3.forEach((singleLink) => {
    singleLink.removeAttribute("href");
});




