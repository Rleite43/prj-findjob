<?php
    header('Content-Type: application/json', true); 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: POST");
    include_once 'conexao.php';
    $dados = array("tipo"=>$_POST['tipo'], "nome"=>$_POST['nome'], "email"=>$_POST['email'], "senha"=>$_POST['senha'], "nasci"=>$_POST['nasci']);

    $conexao = getConexao();

    $sql = "insert into usuario(tipo, nome, email, senha, nasci) VALUES(?,?,?,?,?)";

    $stmt = mysqli_stmt_init($conexao);

    if(mysqli_stmt_prepare($stmt, $sql)){
        mysqli_stmt_bind_param($stmt, 'issss', $dados['tipo'], $dados['nome'], $dados['email'], $dados['senha'], $dados['nasci']);

        mysqli_execute($stmt);

        mysqli_stmt_close($stmt);
    }

    mysqli_close($conexao);
?>