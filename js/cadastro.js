function getAttributes(data){
    var dados = {
        "tipo":data[0].value,
        "nome":data[1].value,
        "dt_nasc":data[2].value,
        "email":data[3].value,
        "senha":data[4].value,
        "resenha":data[5].value
    }

    return dados
}

$(document).ready(function() {
    $("body").on("submit", "form", function(e) {
        e.preventDefault();

        var dados = $(this).serializeArray();
        
        var data = getAttributes(dados)
        $.ajax({
            url: "http://localhost:3333/users",
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            data: JSON.stringify(data),
            
        });
        console.log($(this).serializeArray());
        $(this).trigger("reset");
    });
});