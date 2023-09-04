function submitData() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (!name) {
        return;
    }

    let emailReciever = "keypassroot@gmail.com";

    let a = document.createElement('a');
    a.href = `mailto:${emailReciever}?subject${subject}&body=Hello, my name is ${name},${message} and this is my phone number ${phone}, thank you!`;
    a.click();
}

    let btn = document.getElementById('btn-alert');
    btn.click();


// function showAlert() {
//     alert("Hello there");
// }