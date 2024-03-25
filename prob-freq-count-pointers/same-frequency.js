// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length!== str2.length) {
        return false;
    }

    let cnt1 = {};
    let cnt2 = {};

    for (let i = 0; i < str1.length; i++) {
        cnt1[str1[i] = (cnt1[str1[i]] || 0) + 1];
    }

    for (let i = 0; i < str2.length; i++) {
        cnt2[str2[i] = (cnt2[str2[i]] || 0) + 1];
    }

    for (let key in cnt1) {
        if (cnt1[key]!== cnt2[key]) {
            return false;
        }
    }
    return true;

}
