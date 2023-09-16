const firstName = prompt("Write your name"),
    secondName = prompt("Write your partner's name")

const randomNumber = (Math.floor(Math.random() * 100))


if(randomNumber < 33 && firstName != null && secondName!= null) {
    alert(`The result of name compatibility ${firstName} and ${secondName} is ${randomNumber} You don't have a very good compatibility, but the main thing is love!`)
} else if (randomNumber >= 33 && randomNumber < 66 && firstName != null && secondName!= null) {
    alert(`The result of name compatibility ${firstName} and ${secondName} is ${randomNumber} You have good compatibility`)
} else if (randomNumber >=66 && firstName != null && secondName!= null) {
    alert(`The result of name compatibility ${firstName} and ${secondName} is ${randomNumber} Congratulations! You are the perfect couple!`)
} else {
    alert ("Oops...Some strange number turned out, try again.")
}





