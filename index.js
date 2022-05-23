/* Helper to convert collection in to Array if collection is an Object. */
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

/* myFind */
function myFind(collection, predicate) {
    // debugger
    /* Convert to array if object. */
    const arr =  checkIfArray(collection)
    // Loop through the collection and pass each value to the predicate.
    for (let i = 0; i < arr.length; i++) {
        const value = predicate(arr[i])
        // If the return value from the predicate callback is true return that 
        // value from the array collection.
        if (value) {
            console.log(value)
            return arr[i]
        }    
    }
    return undefined
}
/* Tests. */
// myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2

// myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; });
// => 4

/* myFilter */
function myFilter(collection, predicate) {
    // debugger
    /* Convert to array if object. */
    const arr =  checkIfArray(collection)
    let newArr = []
    // Loop through array collection. Pass each 
    // value from array to callback.
    // If value that pass test in callback 
    // push it to a new array.
    for (let i = 0; i < arr.length; i++) {
        const value = predicate(arr[i])
        console.log(value)
        if (value) {
            console.log(arr[i])
            newArr.push(arr[i])
            console.log(newArr)
        }
    }

    return newArr
}
/* Tests. */
// myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]

// myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })
// => []

/* mySize.
   Return the number of values in the collection. */
function mySize(collection) {
    // debugger
    /* Convert to array if object. */
    const arr =  checkIfArray(collection)
    // Loop through array collection and return the 
    // the number of values in the collection as an integer.
    const numValues = arr.length

    return numValues
}
/* Tests. */
// mySize({one: 1, two: 2, three: 3});
// => 3

// mySize([]);
// => 0

/* myFirst 
   Returns the first element of an array. 
   Passing n will return the first n elements of the array.*/
function myFirst(array, n) {
    // debugger
    // console.log(n)
    // console.log(array)
    let newArr = []

    if (n === undefined) {
        return array[0]
    }
    for (let i = 0; i < n; i++) {
        console.log(array[i])
        newArr.push(array[i]) 
    }
    return newArr
}
/* Tests. */
// myFirst([5, 4, 3, 2, 1]);
// => 5

// myFirst([5, 4, 3, 2, 1], 3);
// => [5, 4, 3]

/* myLast 
   Returns the last element of an array. 
   Passing n will return the last n elements of the array.
*/
function myLast(array, n) {
    // debugger
    // console.log(n)
    // console.log(array)

    let newArr = []

    // If no optional n argument is provided. 
    if (n === undefined) {
        return array[array.length - 1]
    }
    // If optional n argument is provided.
    for (let i = array.length - n; i < array.length; i++) {
        console.log(array[i])
        newArr.push(array[i])
    }
    return newArr
}
/* Tests. */
// myLast([5, 4, 3, 2, 1]);
// => 1

// myLast([5, 4, 3, 2, 1], 3);
// => [3, 2, 1]

/* myKeys 
   Retrieve all the names of the object's 
   enumerable properties into an array.
*/
function myKeys(obj) {
    // debugger
    let newArr = []

    for (const element in obj) {
        console.log(element)
        newArr.push(element)
    }
    return newArr
}
/* Tests */
// myKeys({one: 1, two: 2, three: 3});
// => ["one", "two", "three"]

/* myValues */
function myValues(obj) {
    // debugger
    let newArr = []

    for (const element in obj) {
        // console.log(obj[element])
        newArr.push(obj[element])
    }
    // console.log(newArr)
    return newArr
}

/* Tests */
// myValues({one: 1, two: 2, three: 3});
// => [1, 2, 3]