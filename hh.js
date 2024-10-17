// Aadd button

const button = document.createElement('button');
button.textContent = 'Add item';
button.addEventListener('click', () => {
  const input = document.getElementById('itemInput');
  const list = document.getElementById('itemList');

  const item = document.createElement('li');
  item.textContent = input.value;

  list.appendChild(item);
  input.value = '';
});