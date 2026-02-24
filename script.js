const details = []

const userTitle = document.getElementById("userTitle")
const userDescription = document.getElementById("userDescription")
const date = new Date



const addSchedule = () => {
    userSchedule.innerHTML = ""
    if (userTitle.value == "" || userDescription.value == "") {
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

    
}

function displaySchedule() {
    const targetDate = document.getElementById("targetDate").value
    const userSchedule = document.getElementById("userSchedule")
    for (let i = 0; i < details.length; i++) {
        userSchedule.innerHTML += `
        <div class="container col-lg-6 col-md-5 col-sm-6 col-10 px-4 py-4 rounded-4 mb-5 shadow-sm bg-white" style="border-left: 3px solid #050531;">

                    <div class="d-flex justify-content-between">
                        <h5 class="fw-bold">${details[i].title}</h5>
                        <div class="d-flex gap-3">
                            <p>edit</p>
                            <p>delete</p>
                        </div>
                    </div>
                    <p>${details[i].description}</p>

                    <div class="d-flex gap-3 col-10">
                        <span class="fw-bold text-primary">Created:</span><p>${date.toDateString()}</p>

                        <span class="fw-bold text-primary">Target Date:</span><p>${targetDate}</p>
                    </div>
                </div>
        `
    }
}
displaySchedule()