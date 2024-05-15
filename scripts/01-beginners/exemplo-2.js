const list = document.createElement('ul');
const info = document.createElement('p');
const div = document.querySelector('.atividade-2');

info.textContent = 'Below is a dynamic list. Click anywhere on this box to add a new list item. Click an existing list item to change its text to something else.';

div.appendChild(info);
div.appendChild(list);

div.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
}