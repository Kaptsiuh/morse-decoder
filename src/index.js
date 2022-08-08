const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const entries = Object.entries(MORSE_TABLE)
    const oneSimbol = expr.match(/.{1,10}/g);
    let twoSimbol = '';
    let morseArr = [];   
    for(let i = 0; i < oneSimbol.length; i++) {
        if (oneSimbol[i] === '**********') {
            oneSimbol[i] = ' ';
        }

        twoSimbol = oneSimbol[i].match(/.{1,2}/g);
        for(let j = 0; j < oneSimbol[i].length; j++) {
            if (twoSimbol[j] === '10') {
                twoSimbol[j] = '.';
            } else if (twoSimbol[j] === '11') {
                twoSimbol[j] = '-';
            } else if (twoSimbol[j] === '00') {
                twoSimbol[j] = '';
            }
        }
        morseArr.push(twoSimbol.join(''));
    }

    for(let i = 0; i < morseArr.length; i++) {
        for(let j = 0; j < entries.length; j++) {
            if (morseArr[i] === entries[j][0]) {
                morseArr[i] = entries[j][1];
            }
        }  
    }
    return String(morseArr.join(''));
}

module.exports = {
    decode
}