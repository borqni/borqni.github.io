function extractCapitalCaseWords(arr) {
    let text = arr.join(",");
    let words = text.split(/\W+/);
    let nonEmptyWords = words.filter(w => w.length > 0);
    let upWords = nonEmptyWords.filter(isUppercase);
    console.log(upWords.join(", "));

    function isUppercase(str) {
        return str === str.toUpperCase();
    }

    // вар.2
    // console.log(
    //     arr
    //     .join(",")
    //     .split(/\W+/)
    //     .filter(t => t !== '' && t.length > 0 && t === t.toUpperCase())
    //     .join(", "));

}