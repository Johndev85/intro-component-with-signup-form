
// <--------------------------VALIDATION -------------------->

function validation() {
    var value = document.getElementById("name").value;
    if( value == null || value.length == 0 || /^\s+$/.test(value) ) {
        document.getElementById("text_vali").style.display="inline"
        document.getElementById("name").style.backgroundImage="url(./images/icon-error.svg)"

    } else
    var value2 = document.getElementById("lname").value;
    if( value2 == null || value2.length == 0 || /^\s+$/.test(value2) ) {
        document.getElementById("last_vali").style.display="inline"
        document.getElementById("lname").style.backgroundImage="url(./images/icon-error.svg)"

    } else
    var value3 = document.getElementById("mail").value
    var re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if ( value3 == null || value3.length == 0 || !re.exec(value3)) {
        document.getElementById("email_vali").style.display="inline"
        document.getElementById("mail").style.backgroundImage="url(./images/icon-error.svg)"

    } else
    var value4 = document.getElementById("password").value;
    if ( value4 == null || value4.length == 0 || /^\s+$/.test(value4)) {
        document.getElementById("pass_vali").style.display="inline"
        document.getElementById("password").style.backgroundImage="url(./images/icon-error.svg)"
        console.log('validation failed')
        return false
    }

    alert('Approved validation, WELCOME!!')
    return true
}

if (validation) {
    console.log('registration pending')
} else {
    console.log('approved validation')
}
