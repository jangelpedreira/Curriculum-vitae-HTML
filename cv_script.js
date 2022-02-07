var email = 'jangel.pedreira@gmail.com';
var subject = 'Interés en Curriculum-VITAE';

document.getElementById("contact-button").addEventListener("click", sendEmail);

function sendEmail () {
    console.log("Entra en sendEmail");
    var mailto_link = 'mailto:' + email + '?subject=' + subject;

    window.open(mailto_link, 'emailWindow');  
}
    