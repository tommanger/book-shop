var gCurrLang = chackLocalLang();


    function chackLocalLang() {
        if (getFromStorage('lang')) {
            return getFromStorage('lang');
        } else return 'en';
    }

var gTrans = {
    title: {
        'en': 'Books shop',
        'he': 'חנות ספרים',
    },
    idTrans: {
        'en': 'Id',
        'he': 'מק"ט',
    },
    tableTitleTrans: {
        'en': 'Title',
        'he': 'כותרת',
    },
    tablePriceTrans: {
        'en': 'Price',
        'he': 'מחיר',
    },
    tableActionsTrans: {
        'en': 'Actions',
        'he': 'פעולות'
    },
    tableImagesTrans: {
        'en': 'Image',
        'he': 'תמונה',
    },
    buttonLangTrans: {
        'en': 'Language',
        'he': 'שפה'
    },
    buttonNewTrans: {
        'en': 'Create New Book',
        'he': 'הוסף ספר חדש'
    },
    buttonSaveTrans: {
        'en': 'Save',
        'he': 'שמור'
    },
    buttonReadTrans: {
        'en': 'Read',
        'he': 'קרא'
    },
    buttonUpdateTrans: {
        'en': 'Update',
        'he': 'עדכן'
    },
    buttonDeleteTrans: {
        'en': 'Delete',
        'he': 'מחק'
    },
    newBookModalTitleTrans: {
        'en': 'New BOOK',
        'he': 'ספר חדש'
    },
    newBookModalTitleNewTrans: {
        'en': 'Title Name:',
        'he': 'שם הספר:'
    },
    newBookModalPriceNewTrans: {
        'en': 'Price:',
        'he': 'מחיר:'
    },
    closeModalTrans: {
        'en': 'Close',
        'he': 'סגור'
    },
    addModalTrans: {
        'en': 'Add Book',
        'he': 'הוסף ספר'
    },
    modalReadTitleTrans: {
        'en': 'Read Book',
        'he': 'קרא ספר'
    },
    modalReadSaveTrans: {
        'en': 'Save changes',
        'he': 'שמור שינויים'
    }
}


function changeLang(lang) {
    gCurrLang = lang;
    saveToStorage('lang', lang);
    
    doTrans();
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];

        var transKey = el.getAttribute('data-trans');
        var txt = getTrans(transKey);
        el.innerText = txt;
    }
    if (gCurrLang === 'he') {
        document.body.classList.add('rtl')
    } else {
        document.body.classList.remove('rtl')
    }
}


function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}
