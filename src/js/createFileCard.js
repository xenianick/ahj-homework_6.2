import createNewElement from './createNewElement.js';

export default function createFileCard(file) {
  const fileCard = createNewElement('div', 'file');
  const fileImg = createNewElement('img', 'file-img preview');
  const fileCardDeleteBtn = createNewElement('div', 'file-delete-btn', '&times');

  fileImg.src = URL.createObjectURL(file);
  fileImg.addEventListener('load', () => {
    URL.revokeObjectURL(fileImg.src);
  });

  fileCard.appendChild(fileImg);
  fileCard.appendChild(fileCardDeleteBtn);

  fileCardDeleteBtn.addEventListener('click', () => {
    fileCard.remove();
  });
  return fileCard;
}
