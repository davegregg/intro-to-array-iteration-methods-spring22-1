// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users);

// Append the katas to this element:
const main = document.querySelector("main");


let staffMembers = [
    { name: "Jalal", subscriptionDate: 1208532934 },
    { name: "Kristine", subscriptionDate: 23498797263 },
    { name: "Trevor", subscriptionDate: 23457854454 },
]


const createGreetings = function (originalArray) {
    const copy = JSON.parse(JSON.stringify(originalArray))
    for (let index = 0; index < originalArray.length; index += 1) {
        const user = copy[index]

        copy[index] = `Good morning, ${user.name}`
        delete user.name
    }

    return copy
}

createGreetings(staffMembers)

const greetings = staffMembers.map(user => `Good morning, ${user.name}`)

console.log(greetings)
// createGreetings(studentNames)


const printKata = function  (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

{ // KATA 0
    const greenEyes1 = users.filter(user => user.eyeColor === "green")
    // OR...
    const greenEyes2 = users.filter(function (user) {
        return user.eyeColor === "green"
    })
    printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.
}


{ // KATA 1

    const activeUsers1 = users.filter((user) => user.isActive)
    const activeUsers2 = filter(users, (user) => user.isActive)

    function filter (originalArray, callback) {
        const newArrayOfFilteredItems = []
        for (const item of originalArray) {
            if (callback(item)) {
                newArrayOfFilteredItems.push(item)
            }
        }

        return newArrayOfFilteredItems
    }

    printKata(1, activeUsers1)

}

{ // KATA 2

    const toEmails1 = function (user) { return user.email }
    const toEmails2 = user => user.email
    const emailAddresses = users.map(toEmails2)

    printKata(2, emailAddresses)

}

{ // KATA 3

    const ovationUserFound = users.some(user => user.company.toLocaleUpperCase() === "OVATION")

    printKata(3, ovationUserFound)

}

{ // KATA 5

    const sampleMiddleAgedActiveUser1 = users
        .filter(user => user.isActive)
        .find(user => user.age > 28)

    const sampleMiddleAgedActiveUser2 = users
        .filter(user => user.age > 28)
        .find(user => user.isActive)

    const sampleMiddleAgedActiveUser3 = users
        .find(user => user.isActive && user.age > 28)

    printKata(5, sampleMiddleAgedActiveUser3)
}

{ // KATA 6

    const zencoUserBalances = users
        .filter(user => user.company.toLocaleUpperCase() === "ZENCO")
        .map(user => user.balance)

    printKata(6, zencoUserBalances)
}

{ // KATA 7
    const agesOfEscapeTagUsers = users
        .filter(user => user.tags.includes("fugiat"))
        .map(user => user.age)

    printKata(7, agesOfEscapeTagUsers)
}