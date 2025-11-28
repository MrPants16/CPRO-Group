const postNames = document.querySelectorAll(".post-name")
console.log(postNames)

let votes = {
    Mona: 4,
    Tenley: 6,
    Maxwell: 7,
}

const monaVotes = document.getElementById("mona-votes")
const tenleyVotes = document.getElementById("tenley-votes")
const maxwellVotes = document.getElementById("maxwell-votes")

let pick = ""

const dropdown = document.getElementById('dropdown')
dropdown.addEventListener('change', function() {    
    Array.from(this.selectedOptions).forEach(option => {
        let newPick = option.value

        if (newPick === pick) { // really this isnt necessary but i did this anyway to make it clearer for me
            console.log("nothing changed.")
        } else if (newPick !== pick) {
            votes[newPick] += 1
            votes[pick] -= 1
        }

        console.log(votes)
        pick = newPick
    })
})