/* Helper for myEach and MyMap. */
function checkIfArray(collection) {
    let newArray = collection
    /* If collection is not an Array convert into an Array. */
    console.log(!Array.isArray(newArray))
    if (!Array.isArray(newArray)) {
        newArray = Object.values(newArray)
        // console.log(newArray)
    }
    return newArray
}

/* myEach
   Iterates over the collection of elements, 
   passing each element in turn to the callback 
   function. Returns the original, unmodified, collection. */
function myEach(collection, callback) {
    // debugger
    // console.log(Array.isArray(collection))
    /* If collection is not an Array convert into an Array. */
    let newArray = checkIfArray(collection)
    /* If collection is not an Array convert into an Array. */
    // console.log(!Array.isArray(newArray))
    // if (!Array.isArray(newArray)) {
    //     newArray = Object.values(newArray)
    //     // console.log(newArray)
    // }
    for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i])
    }
    return collection
}
// myEach([1, 2, 3], alert);
// => alerts each number in turn and returns the original collection

// myEach({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn and returns the original collection

/* myMap
   Produces a new array of values by mapping each value in collection 
   through a transformation function, callback. Returns the new array 
   without modifying the original. */

function myMap(collection, callback) {
    // debugger
    // console.log(Array.isArray(collection))
    let newCollection = [] 
    const newArray = checkIfArray(collection)
    // let newArray = collection
    // /* If collection is not an Array convert into an Array. */
    // console.log(!Array.isArray(newArray))
    // if (!Array.isArray(newArray)) {
    //     newArray = Object.values(newArray)
    //     // console.log(newArray)
    // }
    for (let i = 0; i < newArray.length; i++) {
        const modified = callback(newArray[i])
        newCollection.push(modified)
    }
    return newCollection
}
/* Tests */
//    myMap([1, 2, 3], function(num){ return num * 3; });
//    => [3, 6, 9]
   
//    myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
//    => [3, 6, 9]

function myReduce(collection, callback, acc) {
    // debugger
    /* acc = starting value.
       val = current value in collection iterating through.
       collection = reference to entire collection. */

    /* If collection is not an Array convert into an Array. */
    let newArr = checkIfArray(collection)
    let counter
    
    if (acc === undefined) {
        acc = newArr[0]
        for (let i = 1; i < newArr.length; i++) {
            acc = callback(acc, newArr[i], collection)

        }
    } else {
        for (let i = 0; i < newArr.length; i++) {
            acc = callback(acc, newArr[i], collection)
        }
    }
    return acc
}

// myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
// => 16

// myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });
// => 6