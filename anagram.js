export function isAnagram(string, anagram) {
    const Obj1 = {};
    const Obj2 = {};
    
    fillObj(string, Obj1);
    fillObj(anagram, Obj2);
    
    const arr1 = getResArray(Obj1);
    const arr2 = getResArray(Obj2);
    arr1.sort();
    arr2.sort();
    
    if (arr1.length !== arr2.length) return false;
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }   
    return true;
}

function fillObj(str, resObj) {
    str.split('').forEach(char => {
        if (resObj[char] === undefined) {
            resObj[char] = 0;
        }
        resObj[char]++;
    });
}

function getResArray(resObj) {
    const res = [];
    for (const key in resObj) {
        res.push(`${key}=>${resObj[key]}`);
    }
    return res;
}