// 1. getElementsByTagName
console.log("getElementsByTagName: ");
let li_item = document.getElementsByTagName("li"); // 2. return an array of li elements
console.log(li_item); // To check the number of elements in an array.

li_item[0].innerHTML = "aaaaaa"; // 3. To retrieve and adjust a specific element.

// 4. getElementsByClassName
console.log("getElementsByClassName");
let li_class_item = document.getElementsByClassName("list");
console.log(li_class_item);

// 5. 
console.log("getElementById");
let li_id_item = document.getElementById("list_about3");
console.log(li_id_item);