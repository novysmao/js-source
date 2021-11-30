// proto: 新创建对象的原型对象。
Object.create = function (proto) {
    if (proto !== null && !/^(object|function)$/.test(typeof proto)) {
        throw new TypeError(`${proto} is not proto`);
    }

    function F() {}

    F.prototype = proto;

    return new F;
}

let dog = {
    name: 'dog'
};
let dog1 = Object.create(dog);
let empty = Object.create(null)
console.log(dog1.name);
console.log(empty)