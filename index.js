class SortedList {
  constructor() {
    this.items= []
    this.length = this.items.length
  }

  add(item) {

    this.items.push(item)
    this.items.sort(function(a,b) {
      return a-b;
    });
    
    return this.items
   
  }

  get(pos) {
  
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos]
      } 
    }


  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items)
    }
  
  }

  min() {
    let Maxvalue = Math.min(...this.items)
    return Maxvalue

  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
