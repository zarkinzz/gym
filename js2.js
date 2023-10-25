let x = new URL (location.href)
let month = 0
let day = 0
let days = x.search.split('&')
for (const iterator of days) {
    let numbers = iterator.split('=')
    if (numbers[0] == "?month"){
        month = numbers[1]
    }
    if (numbers[0] == "day"){
        day = numbers[1]
    }
    console.log(iterator.split('='))
}
