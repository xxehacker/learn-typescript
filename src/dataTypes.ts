let country = "india"

const grt = (name: string) => {
    return `hello ${name} from ${country}`
}

console.log(grt("world"))

//! type annotation
let myName: string = "world"
console.log(grt(myName))

//! cant change type
// myName = 1
// console.log(grt(myName))

//! data types in TS
let a: number = 1
let b: string = "hello"
let c: boolean = true

//! array
let arr: number[] = [1, 2, 3]
let arr2: string[] = ["hello", "world"]
let arr3: (string | number)[] = [1, "hello"]

//! tuple
let tup: [number, string, boolean] = [1, "hello", true]

//! enum
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Green

//! any
let anything: any = 1
anything = "hello"
anything = true

//! void : returns nothing
const log = (message: string): void => {
    console.log(message)
}

//! never : returns nothing
const error = (message: string): never => {
    throw new Error(message)
}

//! null and undefined
let u: undefined = undefined
let n: null = null

