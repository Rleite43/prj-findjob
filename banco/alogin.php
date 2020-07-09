<?php
   session_start();
   header('Content-Type: application/json', true); 
   header('Access-Control-Allow-Origin: *');
   header("Access-Control-Allow-Methods: POST");
   include_once "conexao.php";
   $conexao = getConexao();

if(empty($_POST['email']) || empty($_POST['senha'])) {
	header('Location: http://localhost/login.html');
	exit();
}

$email = mysqli_real_escape_string($conexao, $_POST['email']);
$senha = mysqli_real_escape_string($conexao, $_POST['senha']);

$query = "select id from usuario where email = '{$email}' and senha = '{$senha}'";


$result = mysqli_query($conexao, $query);

$id = mysqli_fetch_assoc($result);
if($id) {
	$_SESSION['usuario'] = $id['id'];
	echo json_encode(array("user_id"=>$id['id']));
} else {
	echo json_encode(array("status"=>'error'));
}

?>