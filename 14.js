/* ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false. */

function validatePIN (pin) {
    str = pin.toString(),
    length = str.length;
    pin.maxLength = 6
    if(str.includes(".") || str.includes("-") || str.includes("+") || str.includes(' ') || (/\s/.test(str))){
      return false
    }else if((isNaN(pin) === false) && (length === 4 || length === 6)){
       return true
      }else if(pin == Math.floor(pin)){
        return false
      }else{
        return false
      }
  }
  