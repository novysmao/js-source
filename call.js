/**
 * call 函数的实现步骤：

    判断调用对象是否为函数，即使我们是定义在函数的原型上的，但是可能出现使用 call 等方式调用的情况。
    判断传入上下文对象是否存在，如果不存在，则设置为 window 。
    处理传入的参数，截取第一个参数后的所有参数。
    将函数作为上下文对象的一个属性。
    使用上下文对象来调用这个方法，并保存返回结果。
    删除刚才新增的属性。
    返回结果。
 */

Function.prototype.call = function (context) {
    if (typeof this !== 'function') {
        throw TypeError('this is not a function');
    }

    let result = null;
    let args = [...arguments].slice(1);
    context = context || window;
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"