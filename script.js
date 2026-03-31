const details = []

const userTitle = document.getElementById("userTitle")
const userDescription = document.getElementById("userDescription")
const date = new Date

const targetDate = document.getElementById("targetDate")
const errMsg = document.getElementById("errMsg")

const addSchedule = () => {
    userSchedule.innerHTML = ""
    if (userTitle.value == "" || userDescription.value == "" || targetDate.value == "") {
        alert("Input cannot be empty")
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
        <div class="container col-lg-6 col-md-5 col-sm-6 col-10 px-4 py-4 text-white rounded-4 mb-5 shadow-sm" style="border-left: 3px solid #8b6830; background: rgba(255, 185, 185, 0.08);
    backdrop-filter: blur(4px);">

                    <div class="d-flex justify-content-between">
                        <h5 class="fw-bold" style="color:#da9932;">${details[i].title}</h5>
                        <div class="d-flex gap-3">
                            <p>edit</p>
                            <p>delete</p>
                        </div>
                    </div>
                    <p>${details[i].description}</p>

                    <div class="d-flex gap-3 col-10 justify-content-between ">
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