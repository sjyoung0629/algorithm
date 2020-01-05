/*
Using one of the languages from {Go, Python, Java, C++},
implement a function/method that is given two strings and returns whether one can be obtained by the other after removing exactly one character. 
Specifically, given two strings x and y, return true if and only if (1) x can be obtained by removing one character from y and/or (2) if y can be obtained by removing one character from x.

Assume that both strings only contain English alphabets and that neither is an empty string.
Note that x and y can be quite long (each containing millions of characters).

*Please avoid solutions that would run in O(|x| * |y|) time in worst case as those solutions would be too inefficient if the given strings are long.
*/

/*
The following inputs should return False:
equalsWhenOneCharRemoved("x", "y")
equalsWhenOneCharRemoved("x", "XX")
equalsWhenOneCharRemoved("yy", "yx")

The following inputs should return True:
equalsWhenOneCharRemoved("abcd", "abxcd")
equalsWhenOneCharRemoved("xyz", "xz")
*/

function equalsWhenOneCharRemoved (x, y) {
    const xLen = x.length;
    const yLen = y.length;
    let result = false;

    if (xLen - yLen === 1) {
        result = removeOneChar(x, y);
    } else if (yLen - xLen === 1) {
        result = removeOneChar(y, x);
    }

    return result;
}

function removeOneChar (b, s) {
    const bLen = b.length;
    let result = false;

    for (let i = 0; i < bLen; i++) {
        let rmStr = splice(b, i, 1);
        if (rmStr === s) {
            result = true;
            break;
        }
    }

    return result;
}

function splice (str, st, cnt) {
    const newStrArr = str.split('');
    newStrArr.splice(st, cnt);
    return newStrArr.join('');
}