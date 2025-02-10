// A variable is a Dabba which is used to store data and can be used later in Program;

// Variable declaration
let a

// Varibale Assignment
a = 0;

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
                11,12,13,14
            ] // Collection of data is called array

            let arr2 = arr

            arr2[1] = 2
            // Changes both array becuase of non-primtive properties
        
        // 2. Object
            let obj = {
                name : "JavaScript",
                age : 12,
                gender :"Language"
            } // Collection of data in key value pair is object

            let obj2 = obj
            obj2.age = 24



// Loop 
// Execution of block of code in repetative manner is called loop.

// while
while(a<10){
    console.log(a)
    a++
}


for(let i = 1; i<=100;i++){
    console.log(i)
}


let arr3 = [
    11,12,13,14
] // Collection of data is called array


// For-IN loop
for(i in obj){
    console.log(obj[i]) // Gets arrays index in every iteration
}

// For-Of loop
for(i of arr3){
    console.log(i) //Gets arrays value in every iteration
}

do{
    console.log(a)
    a++
}while(a<10)




