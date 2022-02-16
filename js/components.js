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