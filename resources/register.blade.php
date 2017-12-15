<!DOCTYPE html>
<html lang="en" ng-app="roleplayWebsite">
	<head>
		<base href="/">
		<title>{{ $website }} - Registration</title>
		<meta charset="utf-8">
		<meta https-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="To do at a later time" />
		<meta name="keywords" content="habbo hotel, habbo hotel, habbo retro, fun, make friends, {{ $website }} hotel, free habbo credits " />
		<meta name="author" content="Chris Pettyjohn">
		<meta name="robots" content="index, follow">
		<meta name="revisit-after" content="7 days">
		<!-- habbo hotel, roleplay, habbo roleplay -->
		<link rel="shortcut icon" href="https://swfs.ihabbo.pw/assets/web-gallery/images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link href="https://swfs.ihabbo.pw/assets/css/grid.css" rel="stylesheet">
    <link href="https://swfs.ihabbo.pw/assets/css/index/landing.css" rel="stylesheet">
		<link rel="stylesheet" href="httpss://fonts.googleapis.com/css?family=Ubuntu:400,700,400italic,700italic|Ubuntu+Condensed">
    <header>
      <div id="border-left"></div>
      <div id="border-right"></div>
			<div id="login-form-container">
				<a href="#home" id="habbo-logo"></a>
			</div>
			@if(Session::has('message'))
				<div id="login-errors">{{ Session::get('message') }}</div>
			@endif

      <div id="top-bar-triangle"></div>
      <div id="top-bar-triangle-border"></div>
    </header>
    <div id="content">
			<ul style="background-color: rgb(10, 51, 68);">
				<li id="registration-anchor" style="top: 0px; background-position: 800px 124px;">
					<div id="registration-form" style="visibility: visible;">
						<div id="registration-form-header">
							<h2>User ID</h2>
							<p>Fill in these details to begin:</p>
						</div>
						<div id="registration-form-main">
							<form method="post" id="register-new-user" autocomplete="off">
								<input type="hidden" name="next" value="">
								<div id="registration-form-main-left">
									<span>
										<label for="registration-username">Username</label>
										<label for="registration-username" class="details">You'll need this <b>username</b> to login!</label>
										<input type="hidden" name="_token" value="{!! csrf_token() !!}">
										<input type="text" name="username" id="registration-username" value="">
									</span>
									<span>
										<label for="registration-email">Email</label>
										<label for="registration-email" class="details">You'll need this <b>email address for future reference</b>. Please use a valid address.</label>
										<input type="email" name="mail" id="registration-email" value="">
									</span>
								</div>
								<div id="registration-form-main-right">
									<span id="password-field-container">
										<label for="registration-password">Password</label>
										<label for="registration-password" class="details">Must be at least <b>6 characters </b>long.</b></label>
										<input type="password" name="password" id="registration-password" maxlength="32" value="">
									</span>
									<span id="password-field-container">
										<label for="registration-password-confirm">Password Confirmation</label>
										<label for="registration-password-confirm" class="details">Just to be safe, please enter your chosen password again!</label>
										<input type="password" name="password_confirmation" id="registration-password-confirm" maxlength="32" value="">
									</span>
									<div class="submit-button-wrapper">
										<button type ="submit" class="button large not-so-large register-submit"><b></b><span>Done</span></button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div id="sail" style="transition: all 1450ms ease-in-out; top: 21px;"></div>
					<div id="baggage" style="transition: all 1450ms ease-in-out; top: 550px;"></div>
				</li>
			</ul>
		</div>
		<footer>
			<div style="font-size:12px;padding:2.5%;position:relative;">
				<div style="position:absolute;left:2.5%;top:40%;">
					Powered by <b>iHabbo</b><br>
					Proudly built on Laravel
				</div>
			</div>
		</footer>
