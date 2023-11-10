for _ in 0...9 {
    print("Hello, World!")
}

while Int.random(in: 0...9) != 5 {
    print("Number is still not 5.")
}

let two = 2
repeat {
    print("I'll print at leats once.")
} while two != 2

// For testing the graph feature for debugging.
var total = 1

for i in 0...9 {
    total += i
}
print("Total: \(total)")


var count = 1

while count <= 10 {
    count += 1
    
    if count == 6 { break }
    if count == 5 { continue }
    print(count)
}

