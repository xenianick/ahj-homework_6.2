import createNewElement from './createNewElement.js';
import createFileCard from './createFileCard.js';

const bodyEl = document.querySelector('body');

const mainContainer = createNewElement('div', 'main-container');
const dndContainer = createNewElement('div', 'dnd-container', '<p>Drag and Drop files here or Click to Select</p>');
const filesContainer = createNewElement('div', 'files-container');
const inputFiles = createNewElement('input', 'files-input');
inputFiles.type = 'file';
inputFiles.accept = 'image/*';
inputFiles.multiple = true;

dndContainer.appendChild(inputFiles);
mainContainer.appendChild(dndContainer);
mainContainer.appendChild(filesContainer);

bodyEl.insertBefore(mainContainer, bodyEl.firstChild);

inputFiles.addEventListener('change', (event) => {
  const files = Array.from(event.currentTarget.files);
  if (event.currentTarget.files.length > 0) {
    files.forEach((file) => {
      if (file.type.match('image.*')) {
        const newFileCard = createFileCard(file);
        filesContainer.appendChild(newFileCard);
      }
    });
  }
  inputFiles.value = '';
});
