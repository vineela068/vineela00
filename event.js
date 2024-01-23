document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // You can add further logic here for handling form submission, like sending data to a server.
    // For simplicity, let's just log the submitted data for now.
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    console.log(Name: ${name}, Email: ${email});
});
