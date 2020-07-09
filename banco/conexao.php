<?php 
    function getConexao(){
        $host = 'localHost';
        $usuario = 'root';
        $senha = '';
        $db = 'find';

        $con = mysqli_connect($host, $usuario, $senha, $db);

        if(!$con){
            return 0;
        }
        return $con;
    }
?>