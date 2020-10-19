module.exports = function check(str, bracketsConfig) {
   let brackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
      brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }
    let anotherSTR = str;
    while (true) {
        for (let i = 0; i < brackets.length; i++) {
            str = str.replace(brackets[i], '');
        }
        if (str.length === 0) {
            return true;
        }
        if (anotherSTR === str) {
            return false;
        }
        
        anotherSTR = str;
    }
}
