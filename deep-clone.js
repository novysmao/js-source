/**
 * 方法一：stringify
 * 弊端：
 * 1.不允许循环引用
 * 2.属性值不能是BigInt Uncaught TypeError: Do not know how to serialize a BigInt
 * 3.会丢失一些属性：Symbol、undefined、function
 * 4.信息不准确：正则会变成空对象，Error对象变成空对象、日期对象变成字符串
 * 
    function deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
 */

function deepClone(obj) {
    if (obj === null) return null;

    if (obj instanceof Date) return new Date(obj);

    if (obj instanceof RegExp) return new RegExp(obj);

    if (obj instanceof Error) return new Error(obj.message);

    if (obj instanceof Symbol) return Object(obj);

    if (obj instanceof Function) {
        return function () {
            return obj.apply(this, [...arguments])
        }
    }

    if (!/^(object|array)/.test(typeof obj)) return obj;


    let result = new obj.constructor();

    for(let key in obj) {
        result[key] = deepClone(obj[key]);
    }

    return result;
}