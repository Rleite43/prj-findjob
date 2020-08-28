$.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id"), d=>{
    $("#nome").text(d.nome)
    $("#profile_pic").css('background-image', "url(http://localhost:3333/files/"+d.profile_pic+")")  
    if(d.tipo === 1){    
        $.getJSON("http://localhost:3333/users/"+localStorage.getItem("user_id")+"/curriculo", data=>{
            console.log(data);
            var skills = ""
            
            data.skills.map(s => {
                if(skills === ""){
                    skills+=s.nome
                }else{
                    skills+=', '+s.nome
                }
                
            })
            $("#skills").text(skills)
            $("#experiencia").text(data.experiencia_profissional)
        })
    }
    
})