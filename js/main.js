window.addEventListener('load', () => {
    const parent = document.querySelector('#js-target-ul');
    const child = createElementWithText('li', 'これです');

    parent.appendChild(child);
});

/**
 * @param {string} tagName
 * @param {string} text
 * @returns HTMLElement
 */
const createElementWithText = (tagName, text) => {
    element = document.createElement(tagName);
    element.textContent = text;

    return element;
}
