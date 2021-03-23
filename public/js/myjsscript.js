
function Confirm_Buttons() {
    var txtconf;
    if (confirm("Confirm to continue!")) {
        txtconf = "OK!";
    } else {
        txtconf = "Cancel!";
    }

    alert(txtconf);
}


/*function getPackage_Button() {

    const pressed = document.getElementById('subp');

    pressed.addEventListener("click", function () {
        console.log('button was clicked');

        fetch('/clicked', { method: 'GET' })
            .then(function (response) {
                if (response.ok) {
                    console.log('click was recorded');
                    return;
                }
                throw new Error('Request failed.');
            })
            .catch(function (error) {
                console.log(error);
            });
    });
}*/


function mouseDescFocus(desc) {
    if (desc.children.length < 3) return;
    if (desc.children[2].tagName === 'SMALL')
        desc.children[2].style.display = ''
}

function mouseDescBlur(desc) {
    if (desc.children.length < 3) return;
    if (desc.children[2].tagName === 'SMALL')
        desc.children[2].style.display = 'none'
}

function LoadthePage() {
    let divs = document.getElementsByClassName("form-group");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("focusin", () => mouseDescFocus(divs[i]));
        divs[i].addEventListener("focusout", () => mouseDescBlur(divs[i]));

    }
}

