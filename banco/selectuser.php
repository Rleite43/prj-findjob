<?php
    header('Content-Type: application/json', true); 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET");
    include_once "conexao.php";
    $conexao = getConexao();

    $id = $_GET['user_id'];

    $consulta = "select nome, nasci from usuario where id = ".$id;

    

    if($result = mysqli_query($conexao, $consulta)){
        if($l = mysqli_fetch_assoc($result)){
             
            $dados = array("nome"=>$l['nome'], "nasci"=>$l['nasci']);
        }
    }

    mysqli_close($conexao);
    echo json_encode ($dados);
?>