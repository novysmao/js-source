Function.prototype.apply = function(context) {
    if (typeof this !== 'function') throw TypeError('this is not a function');

    let args = arguments[1];
    let result = null;
    context = context || window;
    context.fn = this;
    if (args) {
        result = context.fn(...args);
    } else {
        result = context.fn();
    }
    
    delete context.fn;
    return result;
}

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2