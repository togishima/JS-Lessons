/**
 * Generates Li tag with image link
 * @param {string} href
 * @param {string} linkText
 * @param {string} imageSrc
 * @returns HTMLElement
 */
const listItem = (href, linkText, imageSrc) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = href;
    a.text = linkText;

    const img = document.createElement("img");
    img.src = imageSrc;

    a.appendChild(img);
    li.appendChild(a);

    return li;
}

// build ul > li*2
const ul = document.createElement("ul");
ul.appendChild(listItem("a1.html", "a1", "/img/bookmark.png"));
ul.appendChild(listItem("a2.html", "a2", "/img/message.png"));

// append list to app
document.getElementById("app")
.appendChild(ul);
