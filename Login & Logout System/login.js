const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username, password)

    if (authenticated) {
        window.location.href = "logout.html"
    } else {
        alert("enter your correct username and password ! ")
    }
})



function authentication(username, password) {
    if (username === "sagar" && password === "1234") {
        return true
    } else {
        return false
    }
}