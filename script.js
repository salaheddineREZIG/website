addEventListener("DOMContentLoaded", function() {
    document.querySelector('form').addEventListener('submit', function(event) {
        let username = document.querySelector('#username').value;
        let password = document.querySelector('#password').value;
        if (username === 'salah' && password === 'salah123') {

            document.write('hello salah');
        } else {
            alert('shutup idiot');
        }
        event.preventDefault();
    });
});