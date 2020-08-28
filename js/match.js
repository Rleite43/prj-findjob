var socket = io('http://localhost:3333', {
    query:{user_id:localStorage.getItem("user_id")}
});

function preencherDados(contato){
    var ul = $(".contacts")
    var li = $("<li>").addClass("users");
    li.attr("id", contato.match_id)
    var div1 = $("<div>").addClass("d-flex bd-highlight person");
    var div2 = $("<div>").addClass("img_cont")
    var img = $("<img>").addClass("rounded-circle user_img")
    if(contato.profile_pic){
        img.attr("src", "http://localhost:3333/files/"+contato.profile_pic)
    }else{
        img.attr("src", "data:image/png;base64,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")
    }
    var icon = $("<span>")
    var divInfo = $("<div>").addClass("user_info")
    divInfo.attr("id", contato.id)
    var span = $("<span>").text(contato.nome)
    span.addClass("personName");
    var p = $("<p>")
    icon.addClass(contato.status+"_icon")
    var divUserId = $("<div>").attr("id", contato.id )
    divUserId.addClass("userId")
    p.text(contato.status)
    divInfo.append(span)
    divInfo.append(p)
    div2.append(img)
    div2.append(icon)
    div1.append(div2)
    div1.append(divInfo)
    li.append(div1)
    li.append(divUserId)
    ul.append(li)
}
function selectMatchs(){
    var user_id = localStorage.getItem("user_id")
    $.getJSON("http://localhost:3333/users/"+user_id+"/matchs", data =>{
        console.log(data)      
        if(data.length > 0){
            data.map(e=>{
                if(user_id == e.m.userF.id){
                    var d = {
                        match_id: e.m.id,
                        nome:e.m.userJ.nome,
                        id:e.m.userJ.id,
                        status:e.status,
                        profile_pic:e.m.userJ.profile_pic
                    }                

                    preencherDados(d)
                }else{
                    var d = {
                        match_id: e.m.id,
                        nome:e.m.userF.nome,
                        id:e.m.userF.id,
                        status:e.status,
                        profile_pic:e.m.userF.profile_pic
                    }
                    preencherDados(d)
                }
            })
        }else{
            $(".contacts").append("<li><p>Não possui nenhum match</p></li>")
        }
    })
}

function newMessage(data){
    const user_id = localStorage.getItem("user_id")
    if(data.user_send != user_id){
        var first_div_received = $("<div>").addClass("d-flex justify-content-start mb-4")
        var received_image = $("<div>").addClass("img_cont_msg")
        var container_received = $("<div>").addClass("msg_cotainer")
        var time_received = $("<span>").addClass("msg_time")
        container_received.append(data.message)
        container_received.append(time_received)
        received_image.append("<img src='https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg' class='rounded-circle user_img_msg'>")
        first_div_received.append(received_image)
        first_div_received.append(container_received)

        $(".chat-message").append(first_div_received)
    }else{
        var first_div_send = $("<div>").addClass("d-flex justify-content-end mb-4")
        var send_image = $("<div>").addClass("img_cont_msg")
        var container_send = $("<div>").addClass("msg_cotainer_send")
        var time_send = $("<span>").addClass("msg_time")
        
        container_send.append(data.message)
        send_image.append("<img src='https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg' class='rounded-circle user_img_msg'>")
        container_send.append(time_send)
        first_div_send.append(container_send)
        first_div_send.append(send_image)
        

        $(".chat-message").append(first_div_send)
    }
}
function loadChat(match_id){
    const user_id = localStorage.getItem("user_id")
    $.getJSON("http://localhost:3333/users/"+user_id+"/matchs/"+match_id, dados =>{
        dados.map(d =>{
            newMessage(d)
        })
    })
}
function sendMessage(data){
    $.ajax({
        url:"http://localhost:3333/users/"+localStorage.getItem("user_id")+"/matchs/"+data.match_id,
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        data:JSON.stringify(data)
    })
}
socket.on("newMessage", data=>{
      newMessage(data)
})
selectMatchs()

$(document).ready(function(){
    $("li").click(function(){
        $(".active").removeClass("active")
        $(this).addClass("active")
        var name = $(this).children("div").children(".user_info").children(".personName").text()
        var pic = $(this).children("div").children(".img_cont").children(".user_img").attr("src")
        $(".chat_head").children(".user_info").children().remove()
        $(".chat_head").children(".user_info").append($("<span>").text(name))
        console.log(pic)
        $(".chat_head").children(".img_cont").children(".user_img").attr("src", pic)
        $(".chat-message").children().remove()
        loadChat($(this).attr("id"))
    })

    $("#btn-enviar").click(function(){
        var message = $("#message").val()
        var user_id = localStorage.getItem("user_id")
        var user_received = $(".active").children(".userId").attr("id")
        var match_id = $(".active").attr("id")
        var dt = {
            user_send:user_id, 
            message,
            user_received,
            match_id
        }
        newMessage(dt)
        sendMessage(dt)
        $("#message").val("")
    })
})