<html xmlns="httpss://www.w3.org/1999/xhtml" xml:lang="en" lang="en" xmlns:og="httpss://opengraphprotocol.org/schema/" xmlns:fb="httpss://www.facebook.com/2008/fbml">
<head>
    <meta https-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Banned!</title>
    <link rel="shortcut icon" href="https://swfs.ihabbo.pw/assets/web-gallery/images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/static/styles/common.css" type="text/css" />
    <script src="https://swfs.ihabbo.pw/assets/web-gallery/static/js/visual.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/banman.css" type="text/css" />
    <style type="text/css">h1 a{height:76px!important;width:237px!important;background-image:url(https://swfs.ihabbo.pw/assets/img/logo.gif)!important}</style>
</head>
<body>
<body id="popup" class="process-template">
<div id="overlay"></div>
<div id="container">
<div class="cbb process-template-box clearfix">
<div id="content">
<div id="header" class="clearfix">
<h1><a></a></h1>
</div>
<div id="process-content">
  <div style="background:#C10000;padding:2%;border-radius:6px;color:white;font-size:14px;margin-bottom:5%;">
    <strong>You have been banned!</strong> <br>

    The reason for the ban is <strong>"{{ $ban->reason }}"</strong>.
    The ban was filed on <strong>{{ Carbon\Carbon::createFromTimestamp($ban->added_date)->format('F d, Y') }}</strong> by <strong>{{ $ban->added_by }}</strong>
    and will expire on <strong>{{ Carbon\Carbon::createFromTimestamp($ban->expire)->format('F d, Y') }}</strong>
  </div>
  <input type="submit" value="Okay" name="account" class="submit" style="float:right">

</div>
</div>


</div>
<script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
</div>
<!--[if lt IE 7]>
<script type="text/javascript">
Pngfix.doPngImageFix();
</script>
<![endif]-->
<div id="footer">
</div>
<script type="text/javascript">
HabboView.run();
</script>
</script>
</body>
</html>
