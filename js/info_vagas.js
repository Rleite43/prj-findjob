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
            'descricao':dado[0].value,
            'skills':skills
        }
    return  dados
}
function verificaUsuario(){
    $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id"), function(data){
        if(data.tipo == 1){
            window.location.href = "http://localhost/prj/curriculum.html"
        }
    })
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
    $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id")+"/info_vagas", function(data){
        if(data){
            console.log(data)
            $("#descricao").val(data.descricao)
            data.skills.map(s=>{
                $("#"+s.id).prop("checked", true)
            })
            $("#info_vagas_id").val(data.id)
        }
    })
    $('form').on("submit", function(e){
        e.preventDefault()
        
        const data = $(this).serializeArray();
        console.log(data)
        const dados = getData(data)
        const curriculo_id = $("#info_vagas_id").val()
        let url
        let method
        console.log(dados)
        if(curriculo_id != ""){
            url = "http://localhost:3333/users/"+localStorage.getItem('user_id')+"/info_vagas/"+curriculo_id
            method = "PUT"
        }else{
            url = "http://localhost:3333/users/"+localStorage.getItem('user_id')+"/info_vagas"
            method = "POST"
        }
        console.log(url, method, dados)
        $.ajax({
            url:url,
            method:method,
            headers:{
                "Content-Type":"application/json"
            },
            data:JSON.stringify(dados)
        })
    })
})