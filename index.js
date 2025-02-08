// A variable is a Dabba which is used to store data and can be used later in Program;

// Variable declaration
let a

// Varibale Assignment
a = 12;

// Variable can be declared using let and const

let b = 13;
const c = 17; 

b = 16
// c = 24  ---- NOT ALLOWED ----

// Variable declared by let can be updated but Variable declared by Const remain same in entire program





// Data Types
// There are mainly two types of Data type:
// 1. Primitive Data Type
        // 1. String
            let ss = "Hello World"  // String can created using single quotes or Double quotes
        // 2. Number
            let nn = 12
        // 3. Float
            let ff = 12.03
        // 4. Boolean
            let bb = true
        // 5. Null
            let nnn = null
// 2. Non-primitive Data Type
        // 1. Array
            let arr = [
                "English",
                "PLT",
                "CFA",
                "Maths",
                "DL"
            ] // Collection of data is called array

            let arr2 = arr

            arr2[1] = 2
            console.log(arr2,arr)
        
        // 2. Object
            let obj = {
                name : "JavaScript",
                age : 12,
                gender :"Language"
            } // Collection of data in key value pair is object

