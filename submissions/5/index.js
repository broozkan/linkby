for (let i = 0; i < 5; i++) {
    setTimeout(
        (function () {
            console.log(i);
        })
        , i * 1000);
}

// first, there is a hoisting issue while declaring i variable in loop. Second, due to event loop
// we need to call console.log function with IIFE to get the correct result.