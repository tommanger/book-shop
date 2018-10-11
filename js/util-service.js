function makeId() {
    var length = 6;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function getFromStorage(key) {
    var val = localStorage.getItem(key);
    return JSON.parse(val)
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}


function getItemByID(id, items) {
    return items.find(function (item) {
        return item.id === id;
    })
}

function sortByTxt(a, b) {
    var aName = a.name.toLowerCase();
    var bName = b.name.toLowerCase();
    if (aName > bName) return 1;
    else if (aName < bName) return -1;
    else return 0;
}

function sortByNum(n1,n2){
    return n1.price - n2.price;
}