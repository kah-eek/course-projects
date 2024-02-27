let openRange = 0...10
let halfOpenRange = 0..<10 // ...9.

var chosenOption = 20

switch chosenOption {
case 0...10: print("The number is between 0 and 10.")
case 0..<21: print("The number is between 0 and 20.")
default : print("The number is greater than 20.")
}

let animal = "Cat"

switch animal {
case "Cat", "Dog": print("It's a domestic animal.")
default: print("It's a wild animal.")
}

let randomNumber = Int.random(in: 0...1000)

switch randomNumber {
case 
    let tempVerifiedNumber
    where tempVerifiedNumber % 2 == 0:
    print("The given number (\(tempVerifiedNumber)) is even.")
case
    _ where randomNumber % 2 != 0:
    print("The given number (\(randomNumber)) is odd.")
default : break
}
