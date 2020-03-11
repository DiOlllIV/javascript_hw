function finishList() {
    const list = document.querySelector('ul');
    const special = document.querySelector('.special');

    const li1 = document.createElement('li');
    li1.innerText = '1';

    const li4 = document.createElement('li');
    li4.innerText = '4';


    const li6 = document.createElement('li');
    li6.innerText = '6';

    const li8 = document.createElement('li');
    li8.innerText = '8';

    list.prepend(li1);
    special.before(li4)
    special.after(li6)
    list.append(li8);

};




export { finishList };