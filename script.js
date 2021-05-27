console.log('Its working');

let theme = localStorage.getItem('theme');
if(theme == null) {
    setTheme('blue')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot');

for(let val of themeDots) {
    val.addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    else if(mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }
    else if(mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    else if(mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode);
}


