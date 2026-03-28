let response: any = "hello"

let numericLength: number = (response as string).length


type Book = {
    title: string,
    pages: number
}

let bookString = `{"title":"hello","pages":100}`
let bookOnject = JSON.parse(bookString) as Book

console.log(bookOnject.title)


const inputElement = document.getElementById("username") as HTMLInputElement
console.log(inputElement.value)

 
// any vs unknown
let value:any
value = "hello"
value = 1
value = true
value = [1,2,3]
value = {a:1,b:2}
value.toUpperCase()


let newValue: unknown
newValue = "hello"
newValue = 1
newValue = true
newValue = [1,2,3]
newValue = {a:1,b:2}
// newValue.toUpperCase() //! error in ts
if(typeof newValue === "string") {
    newValue.toUpperCase()
}


if(error instanceof Error){
    console.log(error.message)
}else {
    console.log("error",error)
}

const data: unknown = "chai aur code"
const strData:string = data as string


type Role = "admin" | "guest" | "super-admin"
function redirectBasedOnRole(role:Role): void {
    if(role === "admin") {
        console.log("redirect to admin dashboard")
        return
    }
    if(role === "guest") {
        console.log("redirect to guest dashboard")
        return
    }
    // if(role === "super-admin") {
    //     console.log("redirect to super admin dashboard")
    //     return
    // }
    role
}

