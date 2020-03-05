const tasks = [];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    listElem.innerHTML = '';

    const listItemsElems = listItems
        .sort((a, b) => a.date - b.date)
        .sort((a, b) => a.done - b.done)
        .sort((a, b) => a.dateDone - b.dateDone)
        .map(({ text, done, date }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');

            listItemElem.append(checkboxElem, text);

            return listItemElem;
        });
    listElem.append(...listItemsElems);
};

renderListItems(tasks);

const attachBtn = document.querySelector('.create-task-btn');
const createEvent = () => {
    const input = document.querySelector('.task-input');
    if (!input.value) return false;
    tasks.unshift({ text: input.value, done: false, date: new Date(), dateComplited: undefined });
    input.value = '';

    renderListItems(tasks);
};
attachBtn.addEventListener('click', createEvent);

const confirmEvent = document.querySelector('.list');
const confirmItem = event => {
    const confirmItem = tasks.find(item =>
        item.text === event.target.parentNode.textContent);
    confirmItem.done = event.target.checked
    confirmItem.dateDone = confirmItem.done ? new Date() : undefined;
    renderListItems(tasks);
};
confirmEvent.addEventListener('click', confirmItem);