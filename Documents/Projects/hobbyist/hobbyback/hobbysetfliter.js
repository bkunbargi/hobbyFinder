class HobbySet extends Set{
 isSuperset(subset) {
    for (let elem of subset) {
        if (!this.has(elem)) {
            return false
        }
    }
    return true
}

 union(setB) {
    let _union = new Set(this)
    for (let elem of setB) {
        _union.add(elem)
    }
    return _union
}

 intersection(setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (this.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}

 symmetricDifference(setB) {
    let _difference = new Set(this)
    for (let elem of setB) {
        if (_difference.has(elem)) {
            _difference.delete(elem)
        } else {
            _difference.add(elem)
        }
    }
    return _difference
}

 difference(setB) {
    let _difference = new Set(this)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}
}


// Examples
let setA = new HobbySet([1, 2, 3, 4])
let setB = new HobbySet([2, 3])
let setC = new HobbySet([3, 4, 5, 6])
let emptySet = new HobbySet()


console.log(setA.difference(setC))          // => Set [1, 2]
console.log(setA.intersection(setC))