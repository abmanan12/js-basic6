let originalText = new Date()

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let input = document.getElementById('inputHere').value

function telltime() {
    let hr = originalText.getHours()
    let mnt = originalText.getMinutes()
    let scd = originalText.getSeconds()
    let time = hr + ":" + mnt + ":" + scd
    document.getElementById('output').innerHTML += "<br>" + "<br>" + '<span style= "font-weight: bolder;">' + 'You Clicked the Button @ ' + '</span>' + time
}

function clearbtn1() {
    document.getElementById("inputHere").value = ""
}


function clearOutput() {
    document.getElementById("output").innerHTML = ""
}

// ..............................................................................................................

document.getElementById("statement").innerHTML = originalText

function getNameToday() {
    document.getElementById('output').innerHTML = ""

    let getTodayName = days[originalText.getDay()]
    // let getTodayName1 = originalText.getDate()
    // let getTodayName2 = originalText.getFullYear()
    // let getTodayName3 = originalText.getHours()
    // let getTodayName4 = originalText.getMilliseconds()
    // document.getElementById('output').innerHTML = getTodayName + " " + getTodayName1 + " " + getTodayName2 + " " + getTodayName3 + " " + getTodayName4 

    document.getElementById('output').innerHTML += '<span style= "color: darkcyan; font-weight: bolder;">' + getTodayName + '</span>'
    telltime()
}

function calculatePassedTime() {

    let input = document.getElementById('inputHere').value


    if (!input) {
        alert("Please Enter Your Birth Date")
    }
    else {
        let bornDate = new Date(input)
        bornDate = originalText - bornDate
        bornDate = (bornDate) / (1000 * 24 * 60 * 60)
        bornDate = Math.floor(bornDate)

        document.getElementById('output').innerHTML = '<span style= "color: red; font-weight: bolder;">' + bornDate + '</span>' + ' days passed since you born'
        telltime()

    }

}

function birthday() {

    let input = document.getElementById('inputHere').value

    if (!input) {
        alert("Please Enter your Birthday")
    }
    else {
        let nxtBirthday = new Date(input)
        nxtBirthday = nxtBirthday - originalText
        nxtBirthday = (nxtBirthday) / (1000 * 24 * 60 * 60)
        nxtBirthday = Math.floor(nxtBirthday)

        let day = new Date(input)
        day = days[day.getDay()]
        console.log(day)

        document.getElementById('output').innerHTML = '<span style= "color: green; font-weight: bolder;">' + nxtBirthday + '</span>' + " days remain to your next Birthday and Day on " + '<span style = "color: green; font-weight: bolder">' + day + '</span>'
        telltime()
    }
}

function greetUser() {

    let name = prompt("Enter Your Name here")

    if (!name) {
        alert("Please Enter your Name to Continue")
        return
    }

    let time = originalText.getHours()
    // document.getElementById('output').innerHTML = time

    if (time >= 4 && time <= 12) {
        document.getElementById('output').innerHTML = 'Good Morning ' + name
    }
    else if (time >= 13 && time <= 17) {
        document.getElementById('output').innerHTML = 'Good Afternoon ' + name
    }
    else if (time >= 18 && time <= 19) {
        document.getElementById('output').innerHTML = 'Good Evening ' + name
    }
    else {
        document.getElementById('output').innerHTML = 'Good Night ' + name
    }

    telltime()
}


function tellTime1() {
    // document.getElementById('inputHere').value = ""
    telltime()
}

// function tellTime2() {
//     document.getElementById('inputHere').value = ""
//     telltime()
// }

// function tellTime3() {
//     document.getElementById('inputHere').value = ""
//     telltime()
// }


function calculateTax() {
    let cost = +prompt("Enter your Cost")
    if (!cost) {
        alert("Please Enter your Cost to Continue")
        return
    }

    let tax = +prompt("Please Enter your Tax Rate")
    if (!tax) {
        alert("Please Enter your Tax Rate to Continue")
        return
    }

    let html = (cost * tax) / 100
    html = Math.floor(html)
    document.getElementById("output").innerHTML = 'Your Cost: ' + cost + '<br>' + 'Your Tax Rate: ' + tax + '<br>' + '..........................................' + '<br>' + 'Total Tax: ' + " " + html + '<br>' + '..........................................'
    tellTime1()
}


function calculateTotal() {
    let price = +prompt("Enter your Price")
    if (!price) {
        alert("Please Enter your Price to Continue")
        return
    }


    if (price <= 500) {
        tax = 10
        html = (10 * price) / 100
        html = html + price
    }
    else if (price <= 1000) {
        tax = 12
        html = (12 * price) / 100
        html = html + price
    }
    else if (price <= 1500) {
        tax = 14
        html = (14 * price) / 100
        html = html + price
    }
    else if (price <= 2200) {
        tax = 14
        html = (17 * price) / 100
        html = html + price
    }
    else {
        tax = 14
        html = (20 * price) / 100
        html = html + price
    }

    // html = Math.floor(html)
    document.getElementById("output").innerHTML = 'Your Price: ' + price + '<br>' + 'Your Tax Rate: ' + tax + '<br>' + '..........................................' + '<br>' + 'Total Price: ' + " " + html + '<br>' + '..........................................'
    tellTime1()

}