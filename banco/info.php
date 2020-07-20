<?php
    header('Content-Type: application/json', true); 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: POST");
    include_once 'conexao.php';
    $dados = array("descri"=>$_POST['descri'], "skills"=>$_POST['skills'], "pref"=>$_POST['pref'], "exp"=>$_POST['exp'], "more"=>$_POST['more']);

    $conexao = getConexao();

    $sql = "update informacao SET descri = ?, skills = ?, pref = ?, exp = ? more = ?;

    $stmt = mysqli_stmt_init($conexao);

    if(mysqli_stmt_prepare($stmt, $sql)){
        mysqli_stmt_bind_param($stmt, 'issss', $dados['descri'], $dados['skills'], $dados['pref'], $dados['exp'], $dados['more']);

        mysqli_execute($stmt);

        mysqli_stmt_close($stmt);
    }

    mysqli_close($conexao);
?>