<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css2?family=Arimo&family=ZCOOL+KuaiLe&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="Style.css">
	<title>Встеча</title>
</head>
<body>

</здесь идет то, что доступно, если ты не авторизован />
	<?php 
		if ($_COOKIE['user'] == ''):
	?>
		<a name="top"></a> </скролл наверх/>
		<header class="header">
			<div class="container">
				<div class="header__inner">
					Вам назначена встреча!
					<nav class="nav">
						<a class="nav__link" href="#top">Описание</a>
						<a class="nav__link" href="#sintro">Встреча</a>		
						<a class="nav__link" href="about.php">Авторизация</a>		
					</nav>
				</div>
			</div>
		</header>
		<div class="intro">
			<div class="intro__head">
				<h1>
					ВАМ НАЗНАЧЕНА ВСТРЕЧА:
				</h1>
				<div class="intro__text">
					<h2>
						ДОСТУП К УТОЧНЯЮЩЕЙ ИНФОРМАЦИИ ЗАПРЕЩЕН, ВЫ НЕ ИДЕНТИФИЦИРОВАНЫ.
					</h2>
					<h2>
						Для того, чтобы узнать подробности встречи вам необходимо авторизоваться на данном сайте,
						т. е. зарегистрироваться или войти в уже зарегистрированный ранее аккаунт.
					</h2>
				</div>
			</div>
		<div class="container">
			<div class="center-verbs ">
				<a class="btn  btn--green" href="about.php">АВТОРИЗОВАТЬСЯ</a>
			</div>
		</div>
		</div>

	
	<?php
		else:
	?>
	
</далее то, что выводится после auth (авторизации) />

	<a name="top"></a> </скролл наверх/>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				Вам назначена встреча!
				<nav class="nav">
					<a class="nav__link" href="#top">Описание</a>
					<a class="nav__link" href="#sintro">Встреча</a>
					<a class="nav__link" href="exit.php">Выход</a>								
				</nav>
			</div>
		</div>
	</header>
	<div class="intro">
		<div class="intro__head">
			<h1>
				ПОДРОБНОСТИ ВСТРЕЧИ:
			</h1>
		<div class="intro__text">
			<h2>
				Время: 19:00
			</h2>
			<h2>
				Место: возле твоего подъезда
			</h2>
			<h2>
				Куда пойдем: на твое усмотрение
			</h2>
			<h2>
				Стиль одежды: свободный, овер-сайз
			</h2>
			<h2>
				Настроение: позитивное
			</h2>
			<h2>
				С собой: ничего
			</h2>
		</div>
		</div>
	</div>
	
	<div class="intro__second">
		<div class="container">
			<h1>Для того, чтобы принять предложение нажмите на данную кнопку:</h1>
		</div>
		<div class="container">
			<a class="btn  btn--blue" href="https://vk.com/im?sel=157712125">СОГЛАСИТЬСЯ</a>
		</div>
	</div>
	<a name="sintro"></a> </скролл сюда/>
	
	<?php
		endif;
	?>
	
</body>
</html>