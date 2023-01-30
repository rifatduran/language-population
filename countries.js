const popbtn = document.querySelector("#popbtn")
const langbtn = document.querySelector("#langbtn")
const statistics = document.querySelector(".statistics")
const url = 'https://restcountries.com/v2/all'
const ul = document.createElement("ul")
const countdiv = document.createElement("div")
const body = document.querySelector("body")
const info = document.querySelector("#inf")

fetch(url)
    .then(response => response.json())
    .then(data => {

        popbtn.addEventListener("click", e => {

            statistics.appendChild(ul)
            countdiv.remove()
            info.textContent = "10 Most Spoken languages in the world"

            let popcount = []
            let sum = 0
            for (let i = 0; i < data.length; i++) {

                popcount.push(data[i].population)
                popcount.sort(function (x, y) {
                    return y - x
                })

                sum = sum + data[i].population

            }


            //   world
            const li = document.createElement("li")
            const name = document.createElement("div")
            const number = document.createElement("div")
            const percent = document.createElement("div")

            li.style.height = "50px"
            li.style.display = "flex"
            li.style.flexDirection = "row"
            li.style.justifyContent = "flex-start"
            li.style.margin = "10px"
            li.id = "world"
            name.textContent = `world`
            name.style.alignItems = "center"
            name.style.justifyContent = "center"
            name.style.justifyItems = "center"
            percent.style.marginLeft = "73px"
            percent.style.minWidth = "80%"
            percent.style.backgroundColor = "rgb(252, 135, 51)"
            number.textContent = `${sum}`
            number.style.marginLeft = "auto"
            number.style.marginRight = "20px"
            number.style.paddingTop = "17px"

            ul.appendChild(li)
            li.appendChild(name)
            li.appendChild(percent)
            li.appendChild(number)

            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < data.length; j++) {

                    if (data[j].population == popcount[i]) {

                        const li = document.createElement("li")
                        const name = document.createElement("div")
                        const number = document.createElement("div")
                        const percent = document.createElement("div")

                        li.style.height = "50px"
                        li.style.display = "flex"
                        li.style.flexDirection = "row"
                        li.style.justifyContent = "flex-start"
                        li.style.margin = "10px"
                        name.textContent = `${data[j].name}`
                        name.style.width = "100px"
                        name.style.marginRight = "10px"
                        percent.style.width = `${data[j].population / sum * 100}%`
                        percent.style.backgroundColor = "rgb(252, 135, 51)"
                        percent.style.marginLeft = "0px"
                        percent.style.paddingRight = "100px"
                        number.textContent = `${data[j].population}`
                        number.style.width = "100px"
                        number.style.marginLeft = "auto"
                        number.style.paddingTop = "17px"

                        ul.appendChild(li)
                        li.appendChild(name)
                        li.appendChild(percent)
                        li.appendChild(number)

                    }
                }
            }
            statistics.style.height = "665px"
            statistics.style.overflow = "hidden"
            statistics.appendChild(ul)
        })
        langbtn.addEventListener("click", e => {

            ul.remove()
            info.textContent = "10 Most Poulated countries in the world"

            let langarr = []
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].languages.length; j++) {

                    if (langarr.includes == 0) {
                        langarr.push(0)
                    } else {
                        langarr.push((1, data[i].languages[j].name))
                    }
                    langarr.sort()
                }
            }

            let count = [{ country: "wessex", number: 0 }]

            for (let i = 0; i < langarr.length; i++) {
                let index = langarr.indexOf(langarr[i])
                let lst = langarr.lastIndexOf(langarr[i])
                let hwmny = lst - index
                if (count[count.length - 1].country != langarr[i]) {
                    count.push({ country: `${langarr[i]}`, number: hwmny + 1 })
                }
            }

            statistics.appendChild(countdiv)

            count.sort(function (x, y) {
                return y.number - x.number
            })
            for (let i = 0; i < 10; i++) {
                const langdiv = document.createElement("div")
                const frstlanguage = document.createElement("div")
                const scndpersed = document.createElement("div")
                const thirdnumb = document.createElement("div")
                langdiv.appendChild(frstlanguage)
                langdiv.appendChild(scndpersed)
                langdiv.appendChild(thirdnumb)
                langdiv.style.height = "50px"
                langdiv.style.display = "flex"
                langdiv.style.flexDirection = "row"
                langdiv.style.justifyContent = "flex-start"
                langdiv.style.margin = "10px"
                langdiv.style.marginLeft = "50px"
                frstlanguage.textContent = `${count[i].country}`
                frstlanguage.style.width = "100px"
                scndpersed.style.backgroundColor = "rgb(252, 135, 51)"
                scndpersed.style.marginRight = "50px"
                scndpersed.style.width = `${count[i].number}%`
                thirdnumb.style.marginLeft = "auto"
                thirdnumb.textContent = `${count[i].number}`
                thirdnumb.style.paddingTop = "17px"
                countdiv.appendChild(langdiv)
            }

            statistics.style.height = "600px"
            statistics.style.overflow = "hidden"

        })
    }).catch(error => console.error(error))

