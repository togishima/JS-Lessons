/**
 * Generates Li tag with image link
 * @param {string} href
 * @param {string} linkText
 * @param {string} imageSrc
 * @param {string} imageAlt
 * @returns HTMLElement
 */
const listItem = (href, linkText, imageSrc, imageAlt) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = href;
    a.text = linkText;

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = imageAlt;

    a.appendChild(img);
    li.appendChild(a);

    return li;
}