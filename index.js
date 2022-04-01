
let emailCollectorForm = document.getElementById("Email-Collector")
let mainContent = document.getElementById("Main-Content")

emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()

    let formData = new FormData(event.target)
    let firstName = formData.get("firstName")
    let email = formData.get("emailAddress")

    let newHtml = `
        <h2>Congratulations, ${firstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>
        <p class="fine-print">We'll never share your information without your permission</p>
    `
    mainContent.innerHTML = newHtml
})