var BtnShows = document.querySelectorAll('.content button')


BtnShows.forEach(button => {
    button.addEventListener('click', (e) => {
        createToast(e.target.getAttribute('class'))
    })
}) 

function createToast(input, timeout) {
    let iconToast = ''

    switch(input) {
        case 'success':
            iconToast = `<i class="fa-solid fa-circle-check"></i>`
            break;
        case 'warning':
            iconToast = `<i class="fa-solid fa-circle-exclamation"></i>`
            break;
        case 'error':
            iconToast = `<i class="fa-solid fa-triangle-exclamation"></i>`
            break;
    }

    let toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(input)
    toast.innerHTML = `
        ${iconToast}
        <span class="message">This is a ${input} message!</span>
        <div class="countdown"></div>
    `
    document.getElementById('toasts').appendChild(toast)

    timeout = timeout || 4000
    setTimeout(function() {
        toast.style.animation = `hideShow 2s ease forwards`
    }, timeout)

    setTimeout(function(){
        toast.remove()
    }, timeout + 2000)

}