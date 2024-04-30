// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const red_text = document.createElement("p");
red_text.textContent = "Hey I'm red";
red_text.style.color = "red";
container.appendChild(red_text);

const blue_header = document.createElement("h3");
blue_header.textContent = "I'm a blue h3!";
blue_header.style.color = "blue";
container.appendChild(blue_header);

const div_section = document.createElement("div");
div_section.style.border = "2px solid black";

const div_header = document.createElement("h1");
div_header.textContent = "I'm in a div";
div_section.appendChild(div_header);

const p_div = document.createElement("p");
p_div.textContent = "ME TOO!";
div_section.appendChild(p_div);

container.appendChild(div_section);


// the JavaScript file
const btn = document.querySelector("#btn");
btn.textContent = "Click Me - mod qext";

btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
  });