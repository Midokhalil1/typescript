// console.log("Hello typescript")

function debug(message: any): void {
    console.log(message)
}

let firstName: string = "Mido";
let age: number = 37;
let good: boolean = true


console.log(`
First Name: ${firstName}
Your Age:  ${age}
you have many ${good}

`)

enum taxForm {
    standard = "1040",
    childcredit = "1065",
    sCorp = "1121",
    cCorp = "1120s"
}

console.log(`
you need form ${taxForm.childcredit}
`)

let fruits: string[] = [
    "banana",
    "apple"
]


function getFruit(index: number): string {

    return fruits[0]
}


debug("OMG No return")

console.log(` you choose an ${getFruit(0)}`)