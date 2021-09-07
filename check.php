<?php
	$login =  filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
	$name =  filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
	$pass =  filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

	if(mb_strlen($login) < 4 || mb_strlen($login) > 30) {
		header('Location: /invalidvalue.html');
		exit ();
	}	else if(mb_strlen($name) < 2 || mb_strlen($login) > 30) {
		header('Location: /invalidvalue.html');
		exit ();
	} 	else if(mb_strlen($pass) < 3 || mb_strlen($login) > 10) {
		header('Location: /invalidvalue.html');
		exit ();
	}
	
	$mysql = new mysqli('localhost', 'root', '', 'register-bd');
	$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`) VALUES('$login', '$pass', '$name')");
	
	$mysql->close();
	header('Location: /');
?>