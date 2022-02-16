const dataList = [
    {
        to: "bookmark.html",
        img: "/image/bookmark.png",
        alt: "画像1",
        text: "ブックマーク"
    },
    {
        to: "message.html",
        img: "/image/message.png",
        alt: "画像2",
        text: "メッセージ"
    }
];

// build ul > li*2
const ul = document.createElement("ul");
dataList.forEach((data) =>  {
    ul.appendChild(listItem(data.to, data.text, data.img, data.alt));
});

// append list to app
document.getElementById("app")
.appendChild(ul);
