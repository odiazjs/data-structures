/**
 * LIFO
 * the last item added
 * is the first one taken out.
 */

var Stack = function () {
    this.storage = '';
}

Stack.prototype.push = function ( value ) {
    this.storage += value + ',';
}

Stack.prototype.pop = function () {
    // remove last comma from array
    var list = this.storage.split(',')
    list = list.slice(0, list.length - 1)

    // remove element from array and return it
    var lastItem = list.splice(list.length - 1)[0]
    this.storage = list.length > 0 ? list.join('') + ',' : list.join(',')
    return lastItem
}

Stack.prototype.size = function () {
    var list = this.storage.split(',')
    list = list.slice(0, list.length - 1)
    return list.length
}

//test
var myWeeklyMenu = new Stack();
myWeeklyMenu.push('RedBeans');