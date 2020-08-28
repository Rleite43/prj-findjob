
function preencherDados(empresa){
    console.log(empresa)
    if(typeof empresa === "undefined"){
        $("#nomeEmpresa").text("Não possui mais empresas pra você no momento")
        $("#skills").text("")
        $("#descricao").text("")
        $("#localizacao").text("")
    }else{
        let skills = "Skills desejadas: "
        var nomeEmpresa = $("<h1>").attr("id", empresa.user.id)
        nomeEmpresa.addClass("emp_id");
        var pSkills = $("<p>").attr("id", "skills")
        var descricao = $("<p>").attr("id", "descricao")
        var localizacao = $("<p>").attr("id", "localizacao")
        if(empresa.user.profile_pic){
            var img = $("<img>").attr("src", "http://localhost:3333/files/"+empresa.user.profile_pic)
        }
        nomeEmpresa.text(empresa.user.nome)
        empresa.skills.map(e=>{
            skills += e.nome + ", "
        })
        
        pSkills.text(skills)
        descricao.text("Descrição: "+empresa.descricao)
        if(empresa.user.localizacao){
            localizacao.text("Localização: "+empresa.user.cidade)
        }else{
            localizacao.text("Localização: Não Informada")
        }
        
        $("#board").append(nomeEmpresa)
        $("#board").append(pSkills)
        $("#board").append(descricao)
        $("#board").append(localizacao)
    }
}

function preencherDadosLikes(data){
    console.log(data)
    if(data==null){
        $("#nomeEmpresa").text("Não possui mais empresas pra você no momento")
        $("#skills").text("")
        $("#descricao").text("")
        $("#localizacao").text("")
    }else{
        $.getJSON("http://localhost:3333/users/"+data.user_like.id+"/curriculo",d=>{
            console.log(d)
            if(d){
                var nomeUsuario = $("<h1>").attr("id", d.user.id)
                nomeUsuario.addClass("emp_id");
                nomeUsuario.append("Nome: "+d.user.nome)
                var pSkills = $("<p>").attr("id", "skills")
                var experiencia = $("<p>").attr("id", "experiencia")
                var formacao = $("<p>").attr("id", "formacao")
                var objetivo = $("<p>").attr("id", "objetivo")
                var info_extra = $("<p>").attr("id", "info_extra")
                if(d.profile_pic){
                    var img = $("<img>").attr("src", "http://localhost:3333/files/"+d.user.profile_pic)
                }else{
                    var img = $("<img>").attr("src", "data:image/png;base64,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")
                }
                var skills = "Skills: "
                d.skills.map(e=>{
                    skills += e.nome + ", "
                })
                pSkills.text(skills)
                experiencia.text("Experiencia: "+d.experiencia_profissional)
                formacao.text("Formação: "+d.formacao)
                objetivo.text("Objetivo: "+d.objetivo)
                info_extra.text("Informação Extra: "+d.info_extra)

                $("#board").append(img)
                $("#board").append(nomeUsuario)
                $("#board").append(formacao)
                $("#board").append(objetivo)
                $("#board").append(skills)
                $("#board").append(experiencia)
                $("#board").append(info_extra)
            }
        })
    }
}
$(document).ready(function(){
    let index = 0;
    $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id"),user => {
        if(user.tipo == 1){
            $.getJSON("http://localhost:3333/info_vagas",data=>{
                preencherDados(data[index])
                $('#like').on('click', function(){
                    like = {
                        user_liked_id:data[index].user_id
                    }

                    $.ajax({
                        url:"http://localhost:3333/users/"+localStorage.getItem("user_id")+"/like",
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        data:JSON.stringify(like)
                    })
                    index+=1
                    preencherDados(data[index])
                })
                $('#deslike').on('click', function(){
                    console.log("deu deslike");
                    index+=1
                    if(data[index]==='undefined'){
                        console.log(data[index])
                    }else{
                        preencherDados(data[index])
                    }
                })
            })
        }else{
            $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id")+"/like", likes =>{
                if(likes.length <= 0){
                    $("#board").empty()
                    var h1 = $("<h1>").text("Não possui mais likes")
                    $("#board").append(h1)
                }else{
                    preencherDadosLikes(likes[index])
                    $('#like').on('click', function(){
                        like = {
                            user_liked_id:likes[index].user_id
                        }

                        $.ajax({
                            url:"http://localhost:3333/users/"+localStorage.getItem("user_id")+"/like",
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            data:JSON.stringify(like)
                        })
                        index+=1
                        preencherDados(like[index])
                    })
                    $('#deslike').on('click', function(){
                        index+=1
                        if(index >= likes.length){
                            console.log("entrou")
                            
                        }else{
                            $.ajax("http://localhost:3333/users/"+localStorage.getItem("user_id")+"/like",{
                                method:"PUT",
                                headers:{
                                    "Content-Type":"application/json"
                                },
                                data: JSON.stringify({like_id:likes[index].id})
                            })
                            $("#board").empty()
                            preencherDadosLikes(likes[index])
                        }
                    })
                }
            })
        }
    })
})