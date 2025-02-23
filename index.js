const array = ['HELLO', 122, -10, 'Java', 'JavaScript', 500, 'Nodejs'];

function compNumStr(e1, e2) {
    let result;
    const isNum1 = typeof e1 == 'number';
    const isNum2 = typeof e2 == 'number';

    if (isNum1 && isNum2) {
        result = e2 - e1;
    } else if (!isNum1 && !isNum2) {
        result = e1.localeCompare(e2);
    } else {
        result = isNum1 ? -1 : 1;
    }
    return result;
}

function orderedList(arr) {
    const listItems = arr
        .map(item => {
            let li;
            if (typeof item == 'number') {
                li = `<li class="item item_number">${item}</li>`;
            } else {
                li = `<li class="item">${item}</li>`;
            }
            return li;
        })
        .join('');
    const result = `<ol>${listItems}</ol>`;
    return result;
}

const bodyElement = document.querySelector('body');
bodyElement.innerHTML = orderedList(["Hello", 300, "Java", "Nodejs", 100]);

const sortedArray = array.sort(compNumStr);
console.log(sortedArray);
