const postNames = document.querySelectorAll(".post-name")
console.log(postNames)

let votes = {
    Mona: 4,
    Tenley: 6,
    Maxwell: 7,
}

let voteTexts = {
    Mona: "mona-votes",
    Tenley: "tenley-votes",
    Maxwell: "maxwell-votes",
}

let pick = ""

const dropdown = document.getElementById('dropdown')
dropdown.addEventListener('change', function() {    
    Array.from(this.selectedOptions).forEach(option => {
        let newPick = option.value

        if (newPick === pick) {
            console.log("nothing changed.")
            return
        }

        votes[newPick] += 1
        document.getElementById(voteTexts[newPick]).textContent = `${newPick}: ${votes[newPick]}`

        if (pick !== "" && pick !== " ") {
            votes[pick] -= 1
            document.getElementById(voteTexts[pick]).textContent = `${pick}: ${votes[pick]}`
        }

        console.log(votes)
        pick = newPick
    })
})