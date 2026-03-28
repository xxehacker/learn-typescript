function getChai(kind: string | number) {
   if(typeof kind === "string") {
    return kind + " chai"
   }
   return kind + " chai"
}


//! Question mark operator ? : is used for optional chaining
function serveChai(msg?: string) {
    if(msg) {
        console.log(msg)
    }
    return `Serving default chai`
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if(size === "small") {
        return "Serving small chai"
    }
    if(size === "medium" || size === "large") {
        return "make extra chai"
    }
    return `chai order ${size} `
}

class KulhadChai{
    serve(){
        return "kulhad chai"
    }
}

class CuttingChai{
    serve(){
        return "kulhad chai"
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if(chai instanceof KulhadChai) {
        return chai.serve()
    }
    return chai.serve()
}

type ChaiOrder = {
    type: string
    sugar: number
    quantity: number
    addOn?: string
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" &&
        typeof obj.quantity === "number"
    )
}



type MasakaChai  = {type: "masaka" ; spicelevel:number};
type GiagerChai  = {type: "giager" ; spicelevel:number};
type ElaichiChai  = {type: "elaichi" ; spicelevel:number};


type chai = MasakaChai | GiagerChai | ElaichiChai

function MakeChai(order: chai) {
    switch (order.type) {
        case "masaka":
            return order.spicelevel
        case "giager":
            return order.spicelevel
        case "elaichi":
            return order.spicelevel
    }
}