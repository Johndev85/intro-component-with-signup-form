

function validation() {
    var value = document.getElementById("name").value;
    if( value == null || value.length == 0 || /^\s+$/.test(value) ) {
        document.getElementById("text_vali").style.display="inline"
        document.getElementById("name").style.backgroundImage="url(../images/icon-error.svg)"
    } else
    var value2 = document.getElementById("lname").value;
    if( value2 == null || value2.length == 0 || /^\s+$/.test(value2) ) {
        document.getElementById("last_vali").style.display="inline"
        document.getElementById("lname").style.backgroundImage="url(../images/icon-error.svg)"
    } else

    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        document.getElementById("mail").value)) {
        document.getElementById("email_vali").style.display="inline"
        document.getElementById("mail").style.backgroundImage="url(../images/icon-error.svg)"
    } else
    var value4 = document.getElementById("password").value;
    if (isNaN(value4)) {
        document.getElementById("pass_vali").style.display="inline"
        document.getElementById("password").style.backgroundImage="url(../images/icon-error.svg)"
        return false
    }
    return true
}

if (validation) {
    alert('Submit realiced')
}
