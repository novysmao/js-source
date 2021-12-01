function getType(value) {
    if (value === null) return 'null';

    if (typeof value === 'object') {
        let objectTypeString = Object.prototype.toString.call(value);
        let arr = objectTypeString.split(' ')[1].split('');
        arr.pop();
        return arr.join('').toLowerCase();
    }
    return typeof value;
}

console.log(getType(() => {}))
console.log(getType(Promise.resolve(1)))
console.log(getType(1))
console.log(getType(null))