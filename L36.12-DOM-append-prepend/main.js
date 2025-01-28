//  Bước 1: create element
// Cú pháp: document.createElement("element") // "element": tên thẻ cần tạo.
const newImg = document.createElement("img");
console.log(newImg);

// Kiểm tra toàn bộ thuộc tính và phương thức newImg
console.dir(newImg);

// Bước 2. set attribute
newImg.setAttribute("src", "./assets/img/106563846_p0_master1200.jpg");
// Cách 2
newImg.src = "./assets/img/106563846_p0_master1200.jpg";

// Bước 3: append. Thêm vào 1 phần tử đã có sẵn.
// document.body.append(newImg); 
// newImg.style.width = "100vw";

// Thêm vào 1 phần tử khác.
const p = document.querySelector(".hero__desc");
p.append(" Công cha như núi thái sơn, nghĩa mẹ như nước trong nguồn chảy ra");

const elm1 = document.createElement("p");
elm1.textContent = "Đây là đoạn văn bản mới thêm";

const elm2 = document.createElement("span");
elm2.textContent = "Đây là thẻ span";

let container = document.querySelector(".hero__heading");
container.append(elm1, elm2);

