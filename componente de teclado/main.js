const keys = [
  [
    ['1', '!'],
    ['2', '@'],
    ['3', '#'],
    ['4', '$'],
    ['5', '%'],
    ['6', '&'],
    ['7', '/'],
    ['8', '('],
    ['9', ')'],
    ['0', '='],
    ["'", '?'],
    ['¿', '¡'],
  ], //first row
  [
    ['q', 'Q'],
    ['w', 'W'],
    ['e', 'E'],
    ['r', 'R'],
    ['t', 'T'],
    ['y', 'Y'],
    ['u', 'U'],
    ['i', 'I'],
    ['o', 'O'],
    ['p', 'P'],
    ['´´', '¨¨'],
    ['+', '*'],
    ['}', ']'],
  ],
  [
    ['MAYUS', 'MAYUS'],
    ['a', 'A'],
    ['s', 'S'],
    ['d', 'D'],
    ['f', 'F'],
    ['g', 'G'],
    ['h', 'H'],
    ['j', 'J'],
    ['k', 'K'],
    ['l', 'L'],
    ['ñ', 'Ñ'],
    ['{', '['],
  ],
  [
    ['SHIFT', 'SHIFT'],
    ['<', '>'],
    ['z', 'Z'],
    ['x', 'X'],
    ['c', 'C'],
    ['v', 'V'],
    ['b', 'B'],
    ['n', 'N'],
    ['m', 'M'],
    [',', ';'],
    ['.', ':'],
    ['-', '_'],
  ],
  [['SPACE', 'SPACE']], // last row
];

let mayus = false;
let shit = false;

function renderKeyboard() {
  const keyboardContainer = document.querySelector('#keyboardContainer');
  let empty = `<div class="key-empty"></div>`;

  const layers = keys.map((layer) => {
      return layer.map((key) => {
        
    });
  });
}
