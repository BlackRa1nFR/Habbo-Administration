<html xmlns="httpss://www.w3.org/1999/xhtml" xml:lang="en" lang="en" xmlns:og="httpss://opengraphprotocol.org/schema/" xmlns:fb="httpss://www.facebook.com/2008/fbml">
<head>
    <meta https-equiv="content-type" content="text/html; charset=utf-8" />
    <title>{{ $website }} - {{ $page }}</title>
    <link rel="shortcut icon" href="https://swfs.ihabbo.pw/assets/web-gallery/images/favicon.ico" type="image/vnd.microsoft.icon" />
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/myhabbo/myhabbo.css" type="text/css"/>
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/myhabbo/skins.css" type="text/css"/>
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/static/styles/common.css" type="text/css" />
    <script src="http://swfs.ihabbo.pw/assets/web-gallery/static/js/libs.js" type="text/javascript"></script>
    <script src="http://swfs.ihabbo.pw/assets/web-gallery/static/js/libs2.js" type="text/javascript"></script>
    <script src="https://swfs.ihabbo.pw/assets/web-gallery/static/js/visual.js" type="text/javascript"></script>
    <script src="https://swfs.ihabbo.pw/assets/web-gallery/static/js/common.js" type="text/javascript"></script>
    <script src="https://swfs.ihabbo.pw/assets/web-gallery/static/js/lightweightmepage.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/style.css" type="text/css" />
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/buttons.css" type="text/css" />
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/boxes.css" type="text/css" />
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/styles/tooltips.css" type="text/css" />
    <link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/web-gallery/static/styles/lightweightmepage.css" type="text/css" />
    <style type="text/css">body{background-image:url(https://swfs.ihabbo.pw/assets/web-gallery/images/bg.png)!important}h1 a{height:76px!important;width:237px!important;background-image:url(https://swfs.ihabbo.pw/assets/img/logo.gif)!important}</style>
</head>

<body id="home" style="overflow-x:hidden;">
    <div id="overlay"></div>
    <div id="header-container">
        <div id="header" class="clearfix">
            <h1><a></a></h1>

            <div id="subnavi" class="narrow">
              <div id="subnavi-search">
                <div id="subnavi-search-upper">
                  <ul id="subnavi-search-links">
                    <li><a href="/logout">Sign Out</a></li>
                  </ul>
                </div>
              </div>
              <div id="to-hotel">
                @if(Auth::user()->rank > 5)
                  <a href="https://hk.ihabbo.pw" class="new-button red-button" style="margin-bottom:5px;"><b>Admin Panel</b><i></i></a>
                @endif
                <a href="/play" class="new-button green-button"><b>Enter {{ $website }}</b><i></i></a>
              </div>
            </div>

            <ul id="navi">
              @foreach($navigator as $n)
                @if($n->parent == 1)
                  @if($n->title == 'USERNAME')
                    @define $n->title = Auth::user()->username
                  @elseif($n->title == 'Hangouts')
                    @define $n->title = 'Hangouts ('.Auth::user()->hangoutNotifications()->count().')'
                  @endif
                    @if($n->id == $section)
                      <li class="selected">
                        <a href="/{{ $n->url }}">
                          {{ $n->title }}
                        </a><span></span></li>
                      @else
                        <li>
                            <a href="/{{ $n->url }}">
                              {{ $n->title }}
                            </a><span></span>
                          </li>
                      @endif
                    @endif
                  @endforeach
            </ul>

            <div id="habbos-online">
            <div id="content">
            <div class="cb "><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
            <span><b>{{ $online }}</b><br> users(s) online</span>
            </div></div></div><div class="bb"><div></div></div></div>
            </div>
            </div>
        </div>
    </div>

    <div id="content-container">
        <div id="navi2-container" class="pngbg">
            <div id="navi2" class="pngbg clearfix">
                <ul>
                  @foreach($navigator as $n)
                    @if($n->parent == 0)
                      @if($n->section == $section)
                        @if($n->url == 'PROFILE')
                          @define $n->url = 'profile/'.Auth::user()->username.''
                        @endif
                        @if ($n->title == $unique)
                          <li class="selected">
                            <a href="/{{ $n->url }}">
                              {{ $n->title }}
                            </a>
                          </li>
                        @else
                          <li>
                            <a href="/{{ $n->url }}">
                              {{ $n->title }}
                            </a>
                          </li>
                        @endif
                      @endif
                    @endif
                  @endforeach
                </ul>
            </div>
        </div>

        <div id="container">
        	<div id="content" style="position: relative" class="clearfix">
