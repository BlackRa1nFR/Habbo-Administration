<html xmlns="httpss://www.w3.org/1999/xhtml" xml:lang="en" lang="en" xmlns:og="httpss://opengraphprotocol.org/schema/" xmlns:fb="httpss://www.facebook.com/2008/fbml">
<head>
    <meta https-equiv="content-type" content="text/html; charset=utf-8" />
    <title>{{ $website }} - Quick Login</title>
    <link rel="shortcut icon" href="https://swfs.ihabbo.pw/assets/web-gallery/images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/static/styles/common.css" type="text/css" />
    <script src="https://swfs.ihabbo.pw/assets/web-gallery/static/js/visual.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/banman.css" type="text/css" />
    <style type="text/css">h1 a{height:76px!important;width:237px!important;background-image:url(https://swfs.ihabbo.pw/assets/img/logo.gif)!important}</style>
</head>
<body id="landing" class="process-template">
  <div id="overlay"></div>
  <div id="container">
    <div class="cbb process-template-box clearfix">
      <div id="content">
        <div id="header" class="clearfix">
          <h1><a></a></h1>
          <ul class="stats">
            <li class="stats-online"><span class="stats-fig">{{ $online }}</span> user(s) online now</li>
					  <li class="stats-visited"><img src="http://dev.r35.habox.org/web-gallery/v2/images/online.gif" alt="offline" border="0"></li>
				  </ul>
        </div>
        <div id="process-content">
          <div id="column1" class="column">
            <div class="habblet-container " id="create-habbo">
              <div id="create-habbo-flash">
                <div id="create-habbo-nonflash" style="background-image: url(http://dev.r35.habox.org/web-gallery/v2/images/landing/landing_group.png)">
                  <div id="landing-register-text"><a href="/register"><span>Join now, it's free &raquo;</span></a></div>
                </div>
              </div>
            </div>
				      <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
            </div>
            <div id="column2" class="column">
              <div class="habblet-container ">
                <div class="cbb loginbox clearfix">
                  <h2 class="title">Sign in</h2>
                  <div class="box-content clearfix" id="login-habblet">
                    <form action="/index" method="post" class="login-habblet">
                      <ul>
                        <li>
                          <label for="login-username" class="login-text">Username</label>
                          <input tabindex="1" type="text" class="login-field" name="username" id="login-username" value=""/>
                        </li>
                        <li>
                          <label for="login-password" class="login-text">Password</label>
                          <input type="hidden" name="_token" value="{!! csrf_token() !!}">
                          <input tabindex="2" type="password" class="login-field" name="password" id="login-password" />
                          <input type="submit" value="Sign in" class="submit" id="login-submit-button"/>
                          <a href="#" id="login-submit-new-button" class="new-button" style="float: left; margin-left: 0;display:none"><b style="padding-left: 10px; padding-right: 7px; width: 55px">Sign in</b><i></i></a>
                         </li>
                         <li class="no-label">
                           <a href="/register" class="login-register-link"><span>Register for free</span></a>
                         </li>
                       </ul>
                     </form>
                   </div>
                 </div>
               </div>
               <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
               <div class="habblet-container ">
                 <div class="ad-container">
                   <a href="/register"><img src="http://dev.r35.habox.org/web-gallery/v2/images/landing/uk_party_frontpage_image.gif" alt="" /></a>
                 </div>
               </div>
               <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
             </div>
             <div id="column-footer">
               <div id="footer">
                 <p>Powered by <b>iHabboMS</b> by <b>LeChris</b> aka <b>Leader</b>.</p>
               </div>
             </div>
           </div>
         </div>

<script type="text/javascript">
HabboView.run();
</script>


</body>
</html>
