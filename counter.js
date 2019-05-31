const counter = {
    count: 0,
    step: 1,
    set: function(newStep) {
        this.step = newStep;
    },
    inc: function() {
      this.count += this.step;
      return this.count;
    },
    dec: function() {
        this.count -= this.step;
        return this.count;
    },
    now: function() {
      return this.count;
    }
  }
  
  const counterCopy = Object.assign({}, counter);
  console.log(counterCopy.inc()); // 1
  counterCopy.set(2);
  console.log(counterCopy.inc()); // 3
  console.log(counterCopy.inc()); // 5
  console.log(counterCopy.now()); // 5
  console.log(counterCopy.dec()); // 3
  counterCopy.set(1);
  console.log(counterCopy.dec()); // 2
  console.log(counterCopy.dec()); // 1
