function _new(ctor, ...params) {
    let ctorType = typeof ctor,
        ctorProto = ctor.prototype;

    if (ctor === Symbol ||
        ctor === BigInt ||
        ctorType !== 'function' ||
        !ctorProto
    ) {
        throw TypeError(`${ctor} is not a constructor`);
    }
    let obj = {};

    obj.__proto__ = ctor.prototype;

    let result = ctor.call(obj, ...params);

    if (result !== null && /^(object|function)$/.test(typeof result)) {
        return result;
    }

    return obj;
}

function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function() { console.log('汪汪汪')}

let dog = _new(Dog, '狗子');
dog.bark();