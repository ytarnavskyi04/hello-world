function showMessage() {

    var userName = prompt('Будь ласка, введіть ваше імʼя:', '');

    var greetingMessage = 'Hello, ' + (userName || 'World') + '!';

    alert(greetingMessage);
}

window.onload = showMessage;
