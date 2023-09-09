// // 1. task

// function add(a, b) {
//     return a + b
// }

// let result = add(2, 5)
// let anotherResult = add(6, 7)

// console.log(result)
// console.log(anotherResult)

// // 2. task 

// function getAvailableBooks(books) {
//     let availableBooksTitles = ""
//     for (const book of books) {
//         if (book.stock > 0) {
//             availableBooksTitles += `${book.title}`
//         }
//     }
//     return `The following books are available: ${availableBooksTitles}`
// }

// const books = [
//     { title: "The great Gatsby", author: "F. Scott Fitzgerald", stock: 0 },
//     { title: "To kill a mickingbird", author: "Harper Lee", stock: 5 },
//     { title: "1984", author: "George Orwell", stock: 3 },
//     { title: "Pride and Prejudice", author: "Jane Austen", stock: 2 }
// ]

// const availableBooksMessage = getAvailableBooks(books)

// console.log(availableBooksMessage)

// // functions as arguments 

// function greet(name, callback) {
//     console.log(`Ciao, ${name}!`)
//     callback()
// }

// function sayGoodBye() {
//     console.log("Goodbye!")
// }

// greet("David", sayGoodBye)

// // same location check, other teams solution

// function locationCheck(data) {
//     let location = {}

//     for (let i = 0; i < data.members.length; i++) {
//         if (location[data.members[i].location.city]) {
//             location[data.members[i].location.city].push(data.members[i].name)
//         } else {
//             location[data.members[i].location.city] = [data.members[i].name]
//         }
//     }
//     return location
// }

// // remove keys with delete function

// function removeKeys(data) {
//     for (let i = 0; i < data.members.length; i++) {
//         for (let j = 0; j = data.members[i].favorites.favMovies.length; j++) {
//             delete data.members[i].favorites.favMovies[j].description
//         }
//         for (let j = 0; j = data.members[i].favorites.favBooks.length; j++) {
//             delete data.members[i].favorites.favBooks[j].isNewerThan2000
//             delete data.members[i].favorites.favBooks[j].age
//         }
//     }
// }

// // Average age with function

// let averageAge = functions.age(ourTeam)

// function averageAge(ourTeam) {
//     let averageAge = 0
//     let thisYear = 2023
//     for (const member of ourTeam.members) {
//         averageAge += thisYear - member.birthday.year
//     }
//     return averageAge /= ourTeam.members.length
// }

// // Average Coding level

// let averageCodingLevel = functions.CodingLevel(ourTeam)

// function averageCodingLevel(ourTeam) {
//     let averageCodingLevel = 0
//     for (const member of ourTeam.members) {
//         averageCodingLevel += member.codingLevel.level
//     }
//     return averageCodingLevel /= ourTeam.members.length
// }

// // youngest and oldest member

// youngestMemberYear = ourTeam.members[0].birthday.year
// youngestMember = ourTeam.members[0].name
// oldestMemberYear = ourTeam.members[0].birthday.year
// oldestMember = ourTeam.members[0].name

// for (const member of ourTeam.members)
// if (youngestMemberYear < member.birthday.year) {
//     youngestMemberYear = member.birthday.year
//     youngestMember = member.name
// }
// if (oldestMemberYear < member.birthday.year) {
//     oldestMemberYear = member.birthday.year
//     oldestMember = member.name
// }

// // same genres

// let commonGenres = {}

// for (const member of ourTeam.members) {
//     for (const song of member.favorites.favSongs) {
//         for (cosnt genre of song.genres) {
//             if (commonGenres[genre]) += 1
//         } else { 
//             commonGenres[genre] = 1
//         }
//     }
// }

function sayHello(player) {
    return 'hello ' + player
}

const helloJoe = sayHello("Joe")
const helloJack = sayHello("Jack")
const helloJane = sayHello("Jane")

console.log(helloJoe)
console.log(helloJack)
console.log(helloJane)