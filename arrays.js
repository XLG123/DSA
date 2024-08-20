// This file will be used to practice array questions/**


// 91
/*
 * @param {string} s
 * @return {number}
*/
var numDecodings = function(s) {
    let keys = {};
    const letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 26; ++i) {
        keys[i+1] = letters[i].toUpperCase(); 
    }

    if (s[0] === "0") {
        return 0;
    } else if (s.includes("0") && parseInt(s[s.indexOf("0")-1]) > 2) {
        return 0;
    } else {
        let i = 0;
        let increment = 0;
        let count = 0;
        // while ()
    }

};