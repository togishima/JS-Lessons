const parent = document.querySelector('#js-target-ul');
const child = document.createElement('li');

child.textContent = 'これです';

parent.appendChild(child);
