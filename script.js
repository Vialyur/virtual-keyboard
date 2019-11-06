let arrayCharCode = [
    '96', '49', '50', '51', '52', '53', '54', '55', '56', '57', '48', '45', '61', 'BackSpace',
    'Tab', '113', '119', '101', '114', '116', '121', '117', '105', '111', '112', '91', '93', '92', 'Del',
    'Caps Lock', '97', '115', '100', '102', '103', '104', '106', '107', '108', '59', '39', 'Enter',
    'Shift', '122', '120', '99', '118', '98', '110', '109', '44', '46', '47', 'Shift ',
    'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl'

];

const arrayEnKey = [
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "BackSpace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "&#92", "Del",
    "Caps Lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift ",
    "Ctrl", "En", "Alt", "Space", "Alt", "Ctrl"        
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
    

let textAreaProperties = {
    value: "",
    capsLock: false,
    shift: false,
    lang: 'ru'
};

let textInputArea;
let mainDiv;
let keyboardDiv;

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

        
        if(textAreaProperties.lang === 'ru' && textAreaProperties.capsLock === false) {
            createKeyboard(arrayKey);
        } else if(textAreaProperties.lang === 'ru' && textAreaProperties.capsLock === true){
            createKeyboard(arrayShiftKey);
        } else if (textAreaProperties.lang === 'en' && textAreaProperties.capsLock === false) {
            createKeyboard(arrayEnKey);
        } else if(textAreaProperties.lang === 'en' && textAreaProperties.capsLock === true){
            createKeyboard(arrayShiftEnKey);
        }

};

init();

function createKeyboard (tempArray) {
    for (let i = 0; i < tempArray.length; i++) {
        
        keyButton = document.createElement('button');
        keyButton.setAttribute('type', 'button');
        keyButton.classList.add('key');
        keyButton.setAttribute('data', arrayCharCode[i]);
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
                    textInputArea.value += '\t';
                    });
                break;

            case 'Caps Lock':
                keyButton.classList.add('capslock', 'darkerColorKey');
                keyButton.addEventListener('click', () => {
                    textAreaProperties.capslock === false ? textAreaProperties.capslock = true : textAreaProperties.capslock = false;
                    
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
                    console.log(textAreaProperties.lang);
                keyButton.classList.add('darkerColorKey');
                keyButton.addEventListener('click', () => {
                    textAreaProperties.lang === 'ru' ? textAreaProperties.lang = 'en' : textAreaProperties.lang = 'ru';
                    });
                    console.log(textAreaProperties.lang)
                break;
            default :
                keyButton.addEventListener('click', (event) => {
                    textInputArea.value += event.target.textContent;
                    
            });

            
        }
    }  

};

document.body.addEventListener('keydown', (event) => {
    
    document.querySelector('.key[data = "' + event.keyCode + '"]').classList.add('active');
    }
);





