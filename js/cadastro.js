$(document).ready(function() {
    $("body").on("submit", "form", function(e) {
        e.preventDefault();
        $.ajax({
            url: "http://localhost/PRJ/banco/cadastro.php",
            method: "POST",
            data: $(this).serialize(),
            
        });
        console.log($(this).serializeArray());
        $(this).trigger("reset");
    });
});