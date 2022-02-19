// index.html

// Работа с popup элементом

let closePopupBtn = document.getElementById('close-popup-btn')

function closePopup() {
    document.getElementById('popup').remove()
    alert('Спасибо!')
}

closePopupBtn.onclick = closePopup;

let popupYes = document.getElementById('popup-yes')
let popupNo = document.getElementById('popup-no')
let popupResult;

popupYes.onclick = function popupYesBtn() {
    popupResult = true;
    closePopup()
    console.log('Пользователь выбрал: ',popupResult)
}

popupNo.onclick = function popupNoBtn() {
    popupResult = false;
    closePopup()
    console.log('Пользователь выбрал: ',popupResult)
}