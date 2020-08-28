function preencherUser(){
    $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id"), function(data){
        $("#userPic").attr("src", "http://localhost:3333/files/"+data.profile_pic)
        $("#city").val(data.cidade)
        $("#uf").val(data.estado)
    })
}

$(document).ready(function(){
    preencherUser()
    $("form").on("submit", function(e){
        e.preventDefault()

        var form = $('form')[0];
                // crie um FormData {Object}
        var data = new FormData(form);
        console.log(data)   
        if(data.senha === data.resenha){
            $.ajax({
                url:"http://localhost:3333/users/"+localStorage.getItem("user_id"),
                method:"PUT",
                enctype: 'multipart/form-data',
                data: data,
                processData: false, // impedir que o jQuery tranforma a "data" em querystring
                contentType: false, // desabilitar o cabeçalho "Content-Type"
                cache: false, // desabilitar o "cache"
                timeout: 600000,
                success: function(){
                    alert("Perfil atualizado com sucesso!")
                }
            })
        }
    })
})