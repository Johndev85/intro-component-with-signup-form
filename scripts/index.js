


const  form = document.querySelector(".submit")
         form.addEventListener("click", function () {
            if ("submit") {
                document.querySelector("input").value === " "
                console.log('is empty')
            } else {
                console.log('fully inputs')
            }
         }, true)

