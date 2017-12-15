@include('templates.header')
<style>
#settingsNavigation a {
  color:#333;
  text-decoration: none;
}
#settingsNavigation a:hover {
  text-decoration: underline;
}
#settingsNavigation .selected a {
  font-weight:bold;
}
</style>
<div id="column2" class="column" style="width:30%;">
  <div class="habblet-container">
    <div class="cbb clearfix blue">
      <h2 class="title" style="background:#484848;">Account Settings</h2>
      <div class="box-content">
        <div id="settingsNavigation">
          <ul>
            @if($page == 'Preferences')
              <li class="selected"><a href="/settings">My Preferences</a></li>
              <li><a href="/settings/email">My Email</a></li>
              <li><a href="/settings/password">My Password</a></li>
            @elseif($page == 'My Email')
              <li><a href="/settings">My Preferences</a></li>
              <li class="selected"><a href="/settings/email">My Email</a></li>
              <li><a href="/settings/password">My Password</a></li>
            @else
              <li><a href="/settings">My Preferences</a></li>
              <li><a href="/settings/email">My Email</a></li>
              <li class="selected"><a href="/settings/password">My Password</a></li>
            @endif
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

@if($page == 'Preferences')
  <div id="column1" class="column" style="width:53.5%;">
    @if(Session::has('message'))
      <div class="habblet-container">
        <div class="cbb clearfix {{ Session::get("status") }}">
          <h2 class="title">{{ Session::get("message") }}</h2>
        </div>
      </div>
    @endif

    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title" style="background:#484848;">Information</h2>
        <div class="box-content">
          <form method="post" action="/settings/preferences">
            <font color="#262626" size="1.6px">Your motto</font> <br>
            <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            <input type="text" name="motto" value="{{ Auth::user()->motto }}" style="width:80%;padding:4px;">
            <br>
            <font color="#262626" size="1.6px">Country - click <a style="text-decoration: none;" href="/settings/countries/list">here</a> to view available options</font> <br>
            <input type="text" name="country" value="{{ Auth::user()->country }}" style="width:80%;padding:4px;">
            <br>
            <font color="#262626" size="1.6px">Youtube Video (ID)</font> <br>
            <input type="text" name="youtube" value="{{ Auth::user()->youtube }}" style="width:80%;padding:4px;">
            <br><br><hr><br><br>
            <font color="#262626" size="2px">Friend Requests</font> <br>
            @if(Auth::user()->block_newfriends == 1)
              <input type="checkbox" name="block_newfriends"> Friend requests are disabled
            @else
              <input type="checkbox" name="block_newfriends" checked="checked" value="true"> Friend requests are enabled
            @endif
            <br><br>
            @if(Auth::user()->trading_locked == 1)
              <input type="checkbox" name="trading_locked"> Trading is disabled
            @else
              <input type="checkbox" name="trading_locked" checked="checked" value="true"> Trading is enabled
            @endif
            <br><br>
            <input type="submit" value="Save Changes" name="account" class="submit" style="float:right">
          </form>
        </div>
      </div>
    </div>
  </div>
@elseif($page == 'My Email')
  <div id="column1" class="column" style="width:53.5%;">
    @if(Session::has('message'))
      <div class="habblet-container">
        <div class="cbb clearfix {{ Session::get("status") }}">
          <h2 class="title">{{ Session::get("message") }}</h2>
        </div>
      </div>
    @endif
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title" style="background:#484848;">Information</h2>
        <div class="box-content">
          <form method="post" action="/settings/email">
            <font color="#262626" size="1.5px">Email Address</font> <br>
            <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            <input type="text" name="mail" value="{{ Auth::user()->mail }}" style="width:80%;padding:4px;">
            <br><br>
            <input type="submit" value="Save Changes" name="account" class="submit" style="float:right">
          </form>
        </div>
      </div>
    </div>
  </div>
@else
  <div id="column1" class="column" style="width:53.5%;">
    @if(Session::has('message'))
      <div class="habblet-container">
        <div class="cbb clearfix {{ Session::get("status") }}">
          <h2 class="title">{{ Session::get("message") }}</h2>
        </div>
      </div>
    @endif
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title" style="background:#484848;">Information</h2>
        <div class="box-content">
          <form method="post" action="/settings/password">
            <font color="#262626" size="1.5px">Password Now</font> <br>
            <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            <input type="password" name="old_password" style="width:80%;padding:4px;">
            <br><br>
            <font color="#262626" size="1.5px">New Password</font> <br>
            <input type="password" name="password" style="width:80%;padding:4px;">
            <br><br>
            <font color="#262626" size="1.5px">Password Again</font> <br>
            <input type="password" name="password_confirmation"  style="width:80%;padding:4px;">
            <br><br>
            <input type="submit" value="Save Changes" name="account" class="submit" style="float:right">
          </form>
        </div>
      </div>
    </div>
  </div>
@endif






<script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
