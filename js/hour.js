    const date = new Date();
    const hour = document.querySelector('.hour p');
    const minute = document.querySelector('.minute p');
    const second = document.querySelector('.second p');
    const pointers = document.querySelectorAll('.pointers p');
    hour.textContent = (date.getHours() < 10 ? '0' : '') + date.getHours();
    minute.textContent = (date.getMinutes() < 10 ? '0' :'') + date.getMinutes();
    second.textContent = (date.getSeconds() < 10 ? '0' :'') + date.getSeconds();

    setInterval(function(){
        
        let date = new Date();
        hour.textContent = (date.getHours() < 10 ? '0' : '') + date.getHours();
        minute.textContent = (date.getMinutes() < 10 ? '0' :'') + date.getMinutes();
        second.textContent = (date.getSeconds() < 10 ? '0' :'') + date.getSeconds();

    },1000);
