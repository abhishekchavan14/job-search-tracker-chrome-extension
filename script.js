// localStorage.clear()

let myArray = []

if(localStorage.getItem("myData")){
    myArray = JSON.parse(localStorage.getItem("myData"))
    dislayLocalStorage()
}
const submitEl = document.getElementById("submit-btn")
submitEl.addEventListener("click", formToTable)


function formToTable(){
    const orgName = document.getElementById("org-name")
    const jobUrl = document.getElementById("job-url")
    const startDt = document.getElementById("start-dt")
    const duration = document.getElementById("duration")
    const payPerMonth = document.getElementById("pay")
    const notes = document.getElementById("notes")
    let applied = document.getElementById("applied").checked ? "Yes" : "No"
    
    let formData = {
        name: orgName.value,
        url: jobUrl.value,
        stdt: startDt.value,
        dur: duration.value,
        payment: payPerMonth.value,
        impNotes: notes.value,
        applyCheck: applied
    };
    
    myArray.push(formData)
    console.log(myArray)
    localStorage.setItem("myData", JSON.stringify(myArray))
    myTable.innerHTML = ""
    dislayLocalStorage()
    // document.getElementById("myForm").reset()
}


//display local storage in table
function dislayLocalStorage(){    
    let myTable = document.getElementById("myTable")

    for(let i=0; i<myArray.length; i++){
        let newRow = myTable.insertRow(-1)
        let cell0 = newRow.insertCell(0)
        let cell1 = newRow.insertCell(1)
        let cell2 = newRow.insertCell(2)
        let cell3 = newRow.insertCell(3)
        let cell4 = newRow.insertCell(4)
        let cell5 = newRow.insertCell(5)
        let cell6 = newRow.insertCell(6)
        cell0.innerHTML = myArray[i].name
        let urlValue = myArray[i].url
        cell1.innerHTML = `<a href="${urlValue}" target="_blank">${urlValue}</a>`
        cell2.innerHTML = myArray[i].stdt
        cell3.innerHTML = myArray[i].dur
        cell4.innerHTML = myArray[i].payment
        cell5.innerHTML = myArray[i].impNotes
        cell6.innerHTML = myArray[i].applyCheck
        if(myArray[i].applyCheck === "Yes"){
            cell6.style.backgroundColor = "lightgreen"
        }
        else{
            cell6.style.backgroundColor = "tomato"
        }
    }
}
