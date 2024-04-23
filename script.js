var r = 90;
var darkmode = false;
function changemod() {
    console.log("mode changed");
    const rootStyles = document.documentElement.style;

    // Change the value of the CSS variable --main-color

    document.querySelector(".mode").style.transform = `rotate(${r}deg)`;
    if (!darkmode) {
        document.querySelector(".user img").classList.toggle('mix-blend-mode-screen');;

        darkmode = true;
        rootStyles.setProperty('--clr1', '#212431');
    } else {
        darkmode = false;
        rootStyles.setProperty('--clr1', '#f4f3f7');
    }

    r += 90;
}


function createdir() {

    fetch('/createdir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ dirname }) // You can include data if needed
    })
        .then(response => {
            if (response.ok) {
                console.log('Directory created successfully');
            } else {
                console.error('Failed to create directory:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error creating directory:', error);
        });

}
function goto() {
    const url = window.location.href;
    const trimmedUrl = url.substring(0, url.lastIndexOf("/"));
    window.location.href = `${trimmedUrl}`;
}

