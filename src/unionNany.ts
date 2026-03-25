
//! union types
let union: (string | number)[] = [1, "hello"]
let apiReqStatus: "loading" | "success" | "error" = "loading"

apiReqStatus = "success"

let airlineSeat: "window" | "aisle" | "middle" = "aisle"
airlineSeat = "window"


let size: "small" | "medium" | "large" = "small"
size = "large"

const orders = [ "1" , "29",'7']
// let currentOrder: any //! any type
// let currentOrder: string //! can't 
let currentOrder: string | undefined

for (let order of orders) {
    if (order  === "29") {
        currentOrder = order
        break
    }
}

console.log(currentOrder)



