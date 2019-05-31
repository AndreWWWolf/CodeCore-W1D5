const counter =  {
    count: 0,
    step: 1,
    set: function(newStep) {
        this.step = newStep;
        return this;
    },
    inc: function() {
      this.count += this.step;
      
      return this;
    },
    dec: function() {
        this.count -= this.step;
        return this;
    },
    now: function() {
      return this.count;
    }
  }
  const counterCopy = Object.assign({}, counter);
  console.log(counterCopy.set(2).inc().inc().dec().now()); 
  // count was originally 0. 
  //step gets set to 2 instead of 1, 
  //then inc of 2 added to 0, 
  //inc of 2 was added to 2, 
  //dec of 2 was subbed from 4, 
  //now is 2.