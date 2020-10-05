module.exports = function toReadable (number) {
    let a = [
        'zero', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
      ];
    let b = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
      ];
    let c = [
       '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
      ];
    let arr;
    
    if (number >= 0 && number < 10) {
      return a[number];
    }
    if (number >= 10 && number < 20) {
      return b[number-10];
    }
    arr = String(number).split('');
    if ((number > 19) && (number < 100)) {
      if (arr[1] == 0) {
        return`${c[arr[0]]}`;
      } else {
        return `${c[arr[0]]} ${a[arr[1]]}`;
      }
    }
    if ((number > 99) && (number < 1000)) {
      if (arr[1] == 0 && arr[2] == 0) {
        return `${a[arr[0]]} hundred`;
      } else if (arr[1] == 0) {
        return `${a[arr[0]]} hundred ${a[arr[2]]}`;
      } else if (arr[1] == 1) {
        return `${a[arr[0]]} hundred ${b[arr[2]]}`;
      } else if (arr[2] == 0) {
        return `${a[arr[0]]} hundred ${c[arr[1]]}`;
      } else {
        return `${a[arr[0]]} hundred ${c[arr[1]]} ${a[arr[2]]}`;
      }
    }
}
