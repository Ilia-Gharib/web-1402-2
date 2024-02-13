console.log("input",process.argv);

let inpute = [];

function x (val , index ){
    if (index > 1){
        inpute [ index - 2 ] = val;

    }
}

process.argv.forEach(x);

console.log("inpute", inpute)