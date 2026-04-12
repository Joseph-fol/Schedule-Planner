const details = []

const userTitle = document.getElementById("userTitle")
const userDescription = document.getElementById("userDescription")
const date = new Date

const targetDate = document.getElementById("targetDate")
const errMsg = document.getElementById("errMsg")

const addSchedule = () => {
    userSchedule.innerHTML = ""
    if (userTitle.value == "" || userDescription.value == "" || targetDate.value == "") {
        errMsg.style.display = 'block'
        displaySchedule()
        
        setInterval(() => {
            errMsg.style.display = 'none'
        }, 4000);

    } else {
        const inputs = {
            title: userTitle.value,
            description: userDescription.value
        }

        details.push(inputs)
        userSchedule.style.display = "block"
        displaySchedule()
    }

    document.getElementById("userTitle").value = ""
    document.getElementById("userDescription").value = ""
    document.getElementById("targetDate").value = ""
}

function displaySchedule() {
    const targetDate = document.getElementById("targetDate").value
    const userSchedule = document.getElementById("userSchedule")
    for (let i = 0; i < details.length; i++) {
        userSchedule.innerHTML += `
        <div class="container col-lg-6 col-md-8 col-sm-6 col-10 px-4 py-4 text-white rounded-4 mb-5 shadow-sm" style="border-left: 3px solid #8b6830; background: rgba(255, 185, 185, 0.08); backdrop-filter: blur(4px);">

                    <div class="d-flex justify-content-between">
                        <h5 class="fw-bold" style="color:#da9932;">${details[i].title}</h5>
                        <div class="d-flex gap-3">
                            <button class="btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="44" stroke-dashoffset="44" d="M7 17v-4l10 -10l4 4l-10 10h-4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.5s" to="0"/></path><path stroke-dasharray="20" d="M3 21h18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" to="0"/></path></g></svg>
                            </button>

                            <button class="btn" onclick="deleteItem(${i})">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="m18.412 6.5l-.801 13.617A2 2 0 0 1 15.614 22H8.386a2 2 0 0 1-1.997-1.883L5.59 6.5H3.5v-1A.5.5 0 0 1 4 5h16a.5.5 0 0 1 .5.5v1zM10 2.5h4a.5.5 0 0 1 .5.5v1h-5V3a.5.5 0 0 1 .5-.5M9 9l.5 9H11l-.4-9zm4.5 0l-.5 9h1.5l.5-9z"/></svg>
                            </button>
                        </div>
                    </div>
                    <p>${details[i].description}</p>

                    <div class="d-flex gap-3 col-10 justify-content-between">
                        <div>
                            <span class="fw-bold" style="color: #da9932;">Created:</span>
                            <span>${date.toDateString()}</span>
                        </div>

                        <div>
                            <span class="fw-bold" style="color: #da9932;">Target Date:</span>
                            <span>${targetDate}</span>
                        </div>
                    </div>
                </div>
        `
    }
}
displaySchedule()

function deleteItem(index){
    details.splice(index, 1)
    console.log(index);
    userSchedule.innerHTML = ""
    displaySchedule()
    window.confirm("Are you sure you want to delete this schedule")
}
// deleteItem()