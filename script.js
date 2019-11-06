let arrayCodeOfKey = [
    "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
    "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",
    "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
    "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight",
    "ControlLeft", "Fn", "AltLeft", "Space", "AltRight", "ControlRight"

];

const arrayEnKey = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BackSpace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "&#92", "Del",
    "Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift ",
    "Ctrl", "Lang", "Alt", "Space", "Alt", "Ctrl"        
    ];

const arrayShiftEnKey = [
    "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "BackSpace",
    "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del",
    "Caps Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter",
    "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "Shift ",
    "Ctrl", "Lang", "Alt", "Space", "Alt", "Ctrl"        
    ];

const arrayKey = [
    "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BackSpace",
    "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "&#92", "Del",
    "Caps Lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
    "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift ",
    "Ctrl", "Lang", "Alt", "Space", "Alt", "Ctrl"        
    ];
    
const arrayShiftKey = [
    "Ё", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "BackSpace",
    "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del",
    "Caps Lock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter",
    "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "Shift ",
    "Ctrl", "Lang", "Alt", "Space", "Alt", "Ctrl"        
    ];
    



localStorage.lang = (localStorage.lang.length === 0) ? 'ru' : localStorage.lang;
localStorage.capsLock = 'false';



function init() {
        

        textInputArea = document.createElement('textarea');
        textInputArea.setAttribute('placeholder', 'Enter your text here...');
        textInputArea.setAttribute('capsLock', 'false');
        textInputArea.setAttribute('shift', 'false');
        document.body.append(textInputArea);
        function setFocus() {
            textInputArea.focus();            
        }
        setFocus();
        

        mainDiv = document.createElement('div');
        mainDiv.className = 'keyboard';
        document.body.append(mainDiv);

        keyboardDiv = document.createElement('div');
        keyboardDiv.className = 'keys';
        mainDiv.append(keyboardDiv);

        changeLang();

};

init();

function changeLang() {
 
        if(localStorage.lang === 'ru' && localStorage.capsLock === 'false') {
            createKeyboard(arrayKey);
        } else if(localStorage.lang === 'ru' && localStorage.capsLock === 'true'){
            createKeyboard(arrayShiftKey);
        } else if (localStorage.lang === 'en' && localStorage.capsLock === 'false') {
            createKeyboard(arrayEnKey);
        } else if(localStorage.lang === 'en' && localStorage.capsLock === 'true'){
            createKeyboard(arrayShiftEnKey);
}}

function removeKeyboard() {
    let keys = document.querySelectorAll('.key');
    [...keys].forEach(el => el.remove());
    let brs = document.querySelectorAll('br');
    [...brs].forEach(el => el.remove());
}

function createKeyboard (tempArray) {
    
    for (let i = 0; i < tempArray.length; i++) {
        
        keyButton = document.createElement('button');
        keyButton.setAttribute('type', 'button');
        keyButton.classList.add('key');
        keyButton.setAttribute('data', arrayCodeOfKey[i]);
        keyboardDiv.append(keyButton);
        keyButton.innerHTML = tempArray[i];

        
        

        if(tempArray[i] === 'BackSpace' || tempArray[i] === 'Del' || tempArray[i] === 'Enter' || tempArray[i] === 'Shift ') {
            keyboardDiv.append(document.createElement('br'));
        };
        switch (tempArray[i]) {
            case 'BackSpace':
                keyButton.classList.add('backspace', 'darkerColorKey');
                keyButton.addEventListener('click', () => {
                    textInputArea.value = textInputArea.value.substring(0, textInputArea.value.length - 1);
                    });
                break;

            case 'Tab':
                keyButton.classList.add('tab', 'darkerColorKey');
                keyButton.addEventListener('click', (event) => {
                    textInputArea.value += '    ';
                    });
                break;

            case 'Caps Lock':
                keyButton.classList.add('capslock', 'darkerColorKey');
                keyButton.addEventListener('click', () => {
                    localStorage.capsLock === 'false' ? localStorage.capsLock = 'true' : localStorage.capsLock = 'false';
                    removeKeyboard();
                    changeLang();
                    console.log(localStorage.capsLock)                    
                });

                break;

            case 'Enter':
                keyButton.classList.add('enter', 'darkerColorKey');
                keyButton.addEventListener('click', (event) => {
                    textInputArea.value += '\n';
                    });
                break;

            case ('Shift'):
                keyButton.classList.add('shift', 'darkerColorKey');
                break;

                case ('Shift '):
                keyButton.classList.add('shift', 'darkerColorKey');
                break;

            case 'Ctrl':
                keyButton.classList.add('ctrl', 'darkerColorKey');
                break;

            case 'Space':
                keyButton.classList.add('space');
                keyButton.addEventListener('click', () => {
                    textInputArea.value += ' ';
                    });
                break;

            case 'Alt':
                keyButton.classList.add('alt', 'darkerColorKey');
                break;

            case 'Del':
                keyButton.classList.add('del', 'darkerColorKey');
                keyButton.addEventListener('click', () => {
                    textInputArea.value = ' ';
                    });
                break;

            case 'Lang':
                keyButton.classList.add('darkerColorKey');
                keyButton.addEventListener('click', () => {
                    localStorage.lang === 'ru' ? localStorage.lang = 'en' : localStorage.lang = 'ru';
                    removeKeyboard();
                    changeLang();
                    });
                break;
                
            default :
                keyButton.addEventListener('click', (event) => {
                    textInputArea.value += event.target.textContent;
            });

        }
        
    }  

};

document.addEventListener('keydown', (event) => {
    let elem = document.querySelector(`.key[data = '${event.code}']`);
    elem.classList.add('keyPress');
    document.getElementsByTagName('textarea').focus();
});

document.addEventListener('keyup', (event) => {
    document.querySelector(`.key[data = '${event.code}']`).classList.remove('keyPress');
});

document.addEventListener('mousedown', (event) => {
    if(event.target.type === 'button')
    {event.target.classList.add('keyPress')};
});

document.addEventListener('mouseup', (event) => {
    event.target.classList.remove('keyPress');
});

document.addEventListener('mouseover', () => {
    if(event.target.type === 'button') {event.target.classList.add('keyBacklight')};
});
document.addEventListener('mouseout', () => {
    if(event.target.type === 'button') {event.target.classList.remove('keyBacklight')};
});
/*let arr1 = [];
document.addEventListener('keyup', (event) => {
    console.log(event.code);
    arr1.push(event.code);
    console.log(arr1);})
*/


