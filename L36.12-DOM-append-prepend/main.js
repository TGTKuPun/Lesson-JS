const parent = document.getElementById("container");

for (let i = 1; i <= 100; i++) {
    let btn = document.createElement("button");
    btn.textContent = "Button " + i;
    btn.style.margin = "3px";
    
    parent.append(btn);
}
