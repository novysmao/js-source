function curry(fn, ...args) {
    let fnLen = fn.length;
    args = [...args];
    return function() {
        let _args = [...args, ...arguments]

        // 原函数需要的参数个数 <= curry后的函数参数个数
        if (fnLen <= _args.length) {
            return fn.apply(this, _args)
        }
        return curry(fn, ..._args)
    }
}

function fn(a, b, c) {
    console.log(a + b + c)
    return a + b + c;
}
var curried = curry(fn);
curried(1, 2, 3); // 6
curried(1, 2)(3); // 6
curried(1)(2, 3); // 6
curried(1)(2)(3); // 6
curried(7)(8)(9); // 24