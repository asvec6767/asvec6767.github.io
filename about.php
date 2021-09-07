<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/css2?family=Arimo&family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="Style.css">
	<title>Встеча</title>
</head>
<body>
	<a name="top"></a> </скролл наверх/>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				Вам назначена встреча!
				<nav class="nav">
					<a class="nav__link" href="index.php">Описание</a>
					<a class="nav__link" href="index.php">Встреча</a>		
				</nav>
			</div>
		</div>
	</header>
	
	<div class="intro">
		<div class="container">
			<div class="row align-items-start">
				<div class="col">
					<h3>Форма регистрации</h3>
					<form action="check.php" method="post">
						<input type="text" class="form-control" name="login" id="login" placeholder="Введите ваш логин"><br>
						<input type="text" class="form-control" name="name" id="name" placeholder="Введите ваше имя"><br>
						<input type="password" class="form-control" name="pass" id="pass" placeholder="Введите ваш пароль">
						<button class="btn btn-success" type="sumbit">Зарегистрироваться</button>	
					</form>
					<h3>Форма входа</h3>
					<form action="auth.php" method="post">
						<input type="text" class="form-control" name="login" id="login" placeholder="Введите ваш логин"><br>
						<input type="password" class="form-control" name="pass" id="pass" placeholder="Введите ваш пароль">
						<button class="btn btn-success" type="sumbit">Войти</button>	
					</form>
				</div>
			</div>
		</div>
	</div>
</body>
</html>