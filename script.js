// 1) Select the section with an id of container without using querySelector.
document.getElementById("container");
// 2) Select the section with an id of container using querySelector.
const x = document.querySelector("#container");
console.log(x)
// 3) Select all of the list items with a class of "second".
document.getElementsByClassName('second');
// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.getElementsByClassName('second').innerHTML;
// 5) Give the section with an id of container the text "Hello!".
const hello = document.querySelector("container")
const subHello = document.createElement("h1")
console.log(subHello)
subHello.textContent = "Hello!"
subHello.innerText = "Hello!"
// 6) Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer")
footer.classList.add("main")
// 7) Remove the class main on the div with a class of footer.
footer.classList.remove("main")
// 8) Create a new li element.
document.getElementById(container)
const li = document.createElement("li")
// 9) Give the li the text "four".
li.appendChild(document.createTextNode("test question 9"))
console.log(li)
// 10) Append the li to the ul element.
const ul = document.getElementsByTagName("ul")
ul.appendChild(li)
// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
var ol = x.getElementsByTagName("ol")
var items = ol.getElementsByTagName("li")
for (var i = 0; i < items.length; ++i) {
    items[i].style.backgroundColor = rgb(0,128,0);
  }
// 13) Remove the div with a class of footer.
footer.removeChild("div")