
$(document).ready(function() {
    $("body").on("submit", "form", function(e) {
        e.preventDefault();
        console.log($(this).serialize());
        $.ajax({
            url: "http://localhost/prj/banco/alogin.php",
            method: "POST",
            data: $(this).serialize(), 
            success: function(data){
                if(data.user_id){
                    localStorage.setItem('user_id', data.user_id)
                    window.location.href='http://localhost/prj/home.html'
                }
            }
        });

        $(this).trigger("reset");
    });
});