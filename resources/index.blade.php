<!DOCTYPE html>
<html lang="en" ng-app="roleplayWebsite">
	<head>
		<base href="/">
		<title>{{ $website }} - Login or Join Today!</title>
		<meta charset="utf-8">
		<meta https-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="To do at a later time" />
		<meta name="keywords" content="habbo hotel, habbo hotel, habbo retro, fun, make friends, <%= website.website_name %> hotel, free habbo credits " />
		<meta name="author" content="Chris Pettyjohn">
		<meta name="robots" content="index, follow">
		<meta name="revisit-after" content="7 days">
		<!-- habbo hotel, roleplay, habbo roleplay -->
		<link rel="shortcut icon" href="https://swfs.ihabbo.pw/assets/web-gallery/images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link href="https://swfs.ihabbo.pw/assets/css/index/landing.css" rel="stylesheet">
		<link rel="stylesheet" href="httpss://fonts.googleapis.com/css?family=Ubuntu:400,700,400italic,700italic|Ubuntu+Condensed">
    <header>
      <div id="border-left"></div>
      <div id="border-right"></div>
			@if(Session::has('message'))
				<div id="login-errors">{{ Session::get('message') }}</div>
			@endif
      <div id="login-form-container">
        <a id="habbo-logo"></a>
        <form method="post" style="transition: all 950ms ease-in-out; opacity: 1;">
          <div id="login-columns" style="margin-left:25px;">
            <div id="login-column-1">
                <label for="credentials-email">Username</label>
                <input tabindex="2" type="text" name="username" id="credentials-email" class="focus">
            </div>
            <div id="login-column-2">
                <label for="credentials-password">Password</label>
                <input tabindex="3" type="password" name="password" id="credentials-password">
            </div>
            <div id="login-column-3">
							<input type="hidden" name="_token" value="{!! csrf_token() !!}">
              <input type="submit" value="Login" name="credentials_submit" style="margin: -10000px; position: absolute;">
              <button type="submit" tabindex="4" class="button" id="credentials-submit" style="padding:.5%;"><b></b><span>Login</span></button>
            </div>
    			</form>
          <div id="login-column-4">
              <font style="font-size:15.3px;"><b>{{ $online }}</b> User(s) Online!</font>
          </div>
        </div>
      </div>
      <div id="top-bar-triangle"></div>
      <div id="top-bar-triangle-border"></div>
    </header>
    <div id="content">
      <ul>
        <li id="home-anchor" class="home-anchor-day" >
          <div id="welcome">
            <a href="/register" class="button large" id="join-now-button">
              <b></b><span>Join TODAY</span><span class="sub">(It's free)</span>
            </a>
            <div id="slogan">
              <h1>Welcome to {{ $website }},</h1>
              <p>A stange place, with awesome people.</p>
            </div>
          </div>
          <div id="carousel">
            <div id="image1" style="background-image: url(https://swfs.ihabbo.pw/assets/img/index/1.png);"></div>
            <div id="image2" style="background-image: url(https://swfs.ihabbo.pw/assets/img/index/2.png);"></div>
            <div id="image3" style="background-image: url(https://swfs.ihabbo.pw/assets/img/index/3.png);"></div>
          </div>
          <div id="floaters"></div>
        </li>
      </div>
			<footer>
			  <div style="font-size:12px;padding:2.5%;position:relative;">
			    <div style="position:absolute;left:2.5%;top:40%;">
			      Powered by <b>iHabbo</b><br>
			      Proudly built on Laravel
			    </div>
			  </div>
			</footer>
