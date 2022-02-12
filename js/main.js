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

const promiseMock = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('エラー発生')
        // resolve([
        //     {
        //         to: "1.html",
        //         img: "img/bookmark.png",
        //         alt: "画像1",
        //         text: "ブックマーク"
        //     },
        //     {
        //         to: "2.html",
        //         img: "img/message.png",
        //         alt: "画像2",
        //         text: "メッセージ"
        //     }
        // ])
    }, 3000);
});

const ul = document.getElementById("app");
promiseMock.then((list) => {
    document.querySelectorAll(".loading-icon").forEach((icon) => {
        icon.remove();
    });

    list.forEach(data => {
        link = linkItem(data.to, data.text, data.img, data.alt);
        ul.appendChild(link);
    });
}).catch((error) => {
    console.log(error);
});