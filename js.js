let month = document.querySelectorAll('.month-grid div')
month.forEach((element)=>{
    element.addEventListener('click', (evt)=>{
        console.log(evt.target)
        cat = evt.target.innerHTML
        let links = ""
        for (let index = 1; index < 31; index++) {
            links += `<a href = 'month.html?month=${cat}&day=${index}'>${index}</a>`
        }
    
        const myPopup = new Popup({
            id: "my-popup",
            title: element.innerHTML ,
            content: "<div class = 'numbers'>" + links+"</div>",
            showImmediately: true

        });
    })
})
