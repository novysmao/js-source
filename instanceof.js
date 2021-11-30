function _instanceof(obj, target) {
    var targetPrototype = target.prototype,
        proto = obj.__proto__;

    if (!proto) return false;

    if (targetPrototype === proto) {
        return true;
    }
    return _instanceof(proto, target);
}

function Dog() {}

function Cat() {}

let dog = new Dog();

let cat = new Cat();

console.log(_instanceof(dog, Dog));
console.log(_instanceof(dog, Object));
console.log(_instanceof(dog, Cat));