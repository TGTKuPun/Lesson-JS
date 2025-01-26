// 8. getAttribute
// Sử dụng querySelector để chọn thẻ a đầu tiên.
const firstLink = document.querySelector("a");
// console.log (firstLink);

if (firstLink) {
    const linkHref = firstLink.getAttribute("href");
    console.log(linkHref); 
}
else {
    console.log("Không tìm thấy thẻ a");
}

// 9. setAttribute
// "target", "_blank": dùng để mở trang mới.
firstLink.setAttribute("target", "_blank");

// Sử dụng querySelectorAll để chọn tất cả các thẻ a trong ul.
const links = document.querySelectorAll("ul a");
console.log(links);
// Lập qua mỗi thẻ a và sử dụng setAttribute
// để thêm thuộc tính target="_blank"
links.forEach((singleLink) => {
    singleLink.setAttribute("target", "_blank");
});

// Bài tập đổi red thành blue.
const firstStyle = document.querySelector("h1");
// console.log(firstStyle);

// const firstColor = firstStyle.getAttribute("style");
// console.log(firstColor);

firstStyle.setAttribute("style", "color: blue;");