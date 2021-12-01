Function.prototype.bind = function(context) {
    if (typeof this !== 'function') throw TypeError('this is not a function');
    let self = this;
    let args = [...arguments].slice(1);
    return function Fn() {
        return self.apply(this instanceof Fn ? this : context, args.concat([...arguments]))
    }
}

const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
  const unboundGetX = module.getX;
  console.log(unboundGetX()); // The function gets invoked at the global scope
  // expected output: undefined
  
  const boundGetX = unboundGetX.bind(module);
  console.log(boundGetX());
  // expected output: 42
  