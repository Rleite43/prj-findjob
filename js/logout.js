$(document).ready(function(){
    $('#sair').click(function(){
        console.log('Entrou')
        window.localStorage.removeItem('user_id')
        window.location.href='http://localhost/prj/login.html'
    })
})