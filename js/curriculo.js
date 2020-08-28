function getData(data){
    const skills = []
        const dado = []
        data.map(d=>{
            if(d.name == "skills"){
                skills.push(d.value)
            }else{
                dado.push({"name":d.name,"value":d.value})
            }
        })

        const dados = {
            'formacao':dado[0].value,
            'objetivo':dado[1].value,
            'experiencia':dado[2].value,
            'informacao_extra':dado[3].value,
            'skills':skills
        }
    return  dados
}

function verificaUsuario(){
    $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id"), function(data){
        if(data.tipo == 2){
            window.location.href = "http://localhost/prj/emp.html"
        }
    })
}

function preencherDados(data){
    console.log(data)
    // $("#formacao").val(data)
}

function preencherCheckBox(){
    $.getJSON("http://localhost:3333/skills",data=>{
    
        data.map(d=>{
            $("#skills").append("<div class='form-check'> <input class='form-check-input' name = 'skills' type='checkbox' id='"+d.id+"' value='"+d.id+"' id='l1'> <label class='form-check-label' for='defaultCheck1'>"+d.nome+"</label></div>")
        })
    })
}

$(document).ready(function (){
    verificaUsuario()
    preencherCheckBox()
    $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id")+"/curriculo", function(data){
        if(data){
            console.log(data)
            $("#formacao").val(data.formacao)
            $("#objetivo").val(data.objetivo)
            $("#experiencia").val(data.experiencia_profissional)
            $("#mais_info").val(data.informacao_extra)
            data.skills.map(s=>{
                $("#"+s.id).prop("checked", true)
            })
            $("#curriculo_id").val(data.id)
        }
    })
    $('form').on("submit", function(e){
        e.preventDefault()
        const data = $(this).serializeArray();
        
        const dados = getData(data)
        const curriculo_id = $("#curriculo_id").val()
        let url
        let method
        if(curriculo_id != ""){
            url = "http://localhost:3333/users/"+localStorage.getItem('user_id')+"/curriculo/"+curriculo_id
            method = "PUT"
        }else{
            url = "http://localhost:3333/users/"+localStorage.getItem('user_id')+"/curriculo"
            method = "POST"
        }
        $.ajax({
            url:url,
            method:method,
            headers:{
                "Content-Type":"application/json"
            },
            data:JSON.stringify(dados),
            success: function(){
                alert("Dados atualizados com sucesso!")
            }
        })
    })
})