
$(document).ready(function() {
    $("body").on("submit", "form", function(e) {
        e.preventDefault();
        
        const dados = $(this).serializeArray()
        let data = {
            email:dados[0]['value'],
            senha:dados[1]['value']
        };
        $.ajax({
            url:'http://localhost:3333/users/login',
            method:'POST',
            data:JSON.stringify(data),
            headers:{
                'Content-Type':'application/json'
            },
            success:function(data){
                localStorage.setItem('user_id', data.id)
                window.location.href='http://localhost/prj/home.html'

            }
        })
        // fetch('http://localhost:3333/users/login', {
        //     method:"POST",
        //     headers:{
        //         'Content-Type':'application/json'
        //     },
        //     body:JSON.stringify(data)
        // }).then(function(res){
        //     console.log(res)
        // })

        $(this).trigger("reset");
    });
});