/**
 * Generates Li tag with image link
 * @param {string} href
 * @param {string} linkText
 * @param {string} imageSrc
 * @param {string} altText
 * @returns HTMLElement
 */
const linkItem = (href, linkText, imageSrc, altText) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = href;
    a.text = linkText;

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = altText;

    a.appendChild(img);
    li.appendChild(a);

    return li;
}

const promiseMock = new Promise((resolve) => {
    resolve([
        {
            to: "bookmark.html",
            img: "1.png",
            alt: "画像1",
            text: "ブックマーク"
        },
        {
            to: "message.html",
            img: "2.png",
            alt: "画像2",
            text: "メッセージ"
        }
    ])
});

const ul = document.getElementById("app");
promiseMock.then((list) => {
    list.forEach(data => {
        link = linkItem(data.to, data.text, data.img, data.alt);
        ul.appendChild(link);
    });
});