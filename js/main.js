// build ul > li*2
const ul = document.createElement("ul");
ul.appendChild(listItem("a1.html", "a1", "/image/bookmark.png"));
ul.appendChild(listItem("a2.html", "a2", "/image/message.png"));

// append list to app
document.getElementById("app")
.appendChild(ul);
