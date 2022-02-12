/**
 * Generates Li tag with image link
 * @param {*} href
 * @param {*} linkText
 * @param {*} imageSrc
 * @returns HTMLElement
 */
const linkItem = (href, linkText, imageSrc) => {
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

// 親のul要素に差し込み
const ul = document.getElementById("app");
ul.appendChild(linkItem("a1.html", "a1", "/img/bookmark.png"));
ul.appendChild(linkItem("a2.html", "a2", "/img/message.png"));
