module.exports = function check(str, bracketsConfig) {

    let a = bracketsConfig.map((e) => e.join(""));

    for (let index = 0; index < a.length; index++) {
        if (str.includes(a[index])) {
            str = str.replace(a[index], "");
            index = -1;
        }
    }

    if (str.length == 0) {
        return true;
    } else return false;
}
