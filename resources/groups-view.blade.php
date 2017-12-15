@include('templates.header')
<script src="http://dev.r35.habox.org/web-gallery/static/js/visual.js" type="text/javascript"></script>
<script src="http://dev.r35.habox.org/web-gallery/static/js/libs.js" type="text/javascript"></script>
<link rel="stylesheet" href="http://dev.r35.habox.org/web-gallery/v2/styles/buttons.css" type="text/css" />
<link rel="stylesheet" href="http://dev.r35.habox.org/web-gallery/v2/styles/boxes.css" type="text/css" />
<link rel="stylesheet" href="http://dev.r35.habox.org/web-gallery/v2/styles/style.css" type="text/css" />
<link rel="stylesheet" href="http://dev.r35.habox.org/web-gallery/styles/myhabbo/skins.css" type="text/css" />
<link rel="stylesheet" href="http://dev.r35.habox.org/web-gallery/styles/myhabbo/dialogs.css" type="text/css" />
<link rel="stylesheet" href="http://dev.r35.habox.org/web-gallery/styles/myhabbo/buttons.css" type="text/css" />
<link href="http://dev.r35.habox.org/web-gallery/styles/myhabbo/assets.css" type="text/css" rel="stylesheet" />
<script src="http://dev.r35.habox.org/web-gallery/static/js/homeview.js" type="text/javascript"></script>
<script src="http://dev.r35.habox.org/web-gallery/static/js/homeauth.js" type="text/javascript"></script>
<style>#playground, #playground-outer {width: 752px;height: 1360px;}</style>
<script>document.observe("dom:loaded", function() { initView(22, 22); });</script>
<div class="cb blue" id="mypage-wrapper"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
<div class="box-tabs-container box-tabs-left clearfix">
  @if($group->owner_id == Auth::user()->id)
    <a href="#" id="myhabbo-group-tools-button" class="new-button dark-button edit-icon" style="float:left"><b><span></span>Edit</b><i></i></a>
  @endif

  <div class="myhabbo-view-tools">

    @if(Auth::user()->groups()->where('group_id', $group->id)->count() == 1)
      @if($group->owner_id != Auth::user()->id)
        <a href="/groups/actions/leave/{{ $group->id }}" id="leave-group-button">Leave group</a>
      @endif
      @if(Auth::user()->stats()->value('groupid') == $group->id)
        <a href="/groups/actions/unfavorite/{{ $group->id }}" id="deselect-favorite-button">Remove Favorite</a>
      @else
        <a href="/groups/actions/favorite/{{ $group->id }}" id="select-favorite-button">Make favorite</a>
      @endif
    @else
      @if(Auth::user()->groupRequests()->where('group_id', $group->id)->count() == 0)
        <a href="/groups/actions/join/{{ $group->id }}" id="join-group">Join</a>
      @else
        <a id="group-button">Group Request Pending</a>
      @endif
    @endif
  </div>
  <h2 class="page-owner">{{ $group->name }}</h2>
  <ul class="box-tabs">
    <li class="selected"><a>Front Page</a><span class="tab-spacer"></span></li>
    <li><a href="/groups/{{ $group->id }}/discussion">Discussion Forum</a><span class="tab-spacer"></span></li>
  </ul>
</div>
<div id="mypage-content">
  <div id="mypage-bg" style="background:url(https://swfs.ihabbo.pw/assets/web-gallery/images/bg_colour_01.gif);">
    <div id="playground">
      <div class="movable widget GroupInfoWidget" id="widget-48" style=" left: 15px; top: 25px; z-index: 1;">
        <div class="w_skin_defaultskin">
          <div class="widget-corner" id="widget-48-handle">
            <div class="widget-headline"><h3>
              <span class="header-left">&nbsp;</span><span class="header-middle">Info</span><span class="header-right">&nbsp;</span></h3>
            </div>
          </div>
          <div class="widget-body">
            <div class="widget-content">
              <div class="group-info-icon"><img src="https://game.boon.pw/habbo-imaging/badge/{{ $group->badge }}"></div>
              <h4>{{ $group->name }}</h4>
              <p>Created on: <b>  {{ Carbon\Carbon::createFromTimestamp($group->created)->format('F d, Y') }}</b></p>
              <p><b>1</b> users in group</p>
              <div class="group-info-description">{{ $group->desc }}</div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="movable widget MemberWidget" id="widget-49" style=" left: 365px; top: 19px; z-index: 4;">
        <div class="w_skin_defaultskin">
          <div class="widget-corner" id="widget-49-handle">
            <div class="widget-headline"><h3>
              <span class="header-left">&nbsp;</span><span class="header-middle">Members of this group (<span id="avatar-list-size">{{ $group->members()->count() }}</span>)</span><span class="header-right">&nbsp;</span></h3>
            </div>
          </div>
          <div class="widget-body">
            <div class="widget-content">
              <br clear="all">
              <div id="avatarlist-content">
                <div class="avatar-widget-list-container">
                  <ul id="avatar-list-list" class="avatar-widget-list">
                    @foreach($group->members()->get() as $u)
                      <li>
                        <div class="avatar-list-open"><a href="#" id="avatar-list-open-link-49-22" class="avatar-list-open-link"></a></div>
                        <div class="avatar-list-avatar" style="float:left;width:15%;">
                          <img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->user()->value('look') }}" style="float:left;">
                        </div>
                        <h4 style="float:right;width:65%;">
                          <a href="/profile/{{ $u->user()->value('username') }}">{{ $u->user()->value('username') }}</a>
                        </h4>
                      </li>
                      @endforeach
                      </ul>
                      <div id="avatar-list-info" class="avatar-list-info">
                        <div class="avatar-list-info-close-container"><a href="#" class="avatar-list-info-close"></a></div>
                        <div class="avatar-list-info-container"></div>
                      </div>
                    </div>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</div></div></div><div class="bb"><div></div></div></div>


@if($group->owner_id == Auth::user()->id)
  <!--Group Settings Tools-->
  <div id="group-tools" class="bottom-bubble">
    <div class="bottom-bubble-t"><div></div></div>
  	<div class="bottom-bubble-c">
      <h3>Group Management</h3>
      <ul>
        <li><a href="#" id="group-tools-settings">Settings</a></li>
  	    <li><a href="#" id="group-tools-members">Members</a></li>
      </ul>
    </div>
    <div class="bottom-bubble-b"><div></div></div>
  </div>
  <!--End of Group Settings Tools-->

  <!--Group Settings-->
  <div class="cb topdialog black" id="dialog-group-settings" style="display:none;z-index: 9001; left: 600px; top: 80px;"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
    <div class="box-tabs-container">
      <ul class="box-tabs">
        <li class="selected" id="group-settings-link-group"><a href="#">Nigger Finder</a><span class="tab-spacer"></span></li>
      </ul>
    </div>
    <a class="topdialog-exit" href="#" id="dialog-group-settings-exit">X</a>
    <div class="topdialog-body" id="dialog-group-settings-body">
      <div id="group-settings">
        James likes to <font color="red">masturbate</font> to <font color="red">child pornography</font>
      </div>
      <div class="clear"></div>
    </div>
  </div></div></div><div class="bb"><div></div></div></div>
  <!--End of Group Settings-->


  <!--Group Members-->
  <div class="cb topdialog black" id="group-memberlist"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
    <div class="box-tabs-container">
      <ul class="box-tabs">
        <li class="selected" id="group-memberlist-link-members"><a href="#">Members ({{ $group->members()->count() }})</a><span class="tab-spacer"></span></li>
        <li id="group-memberlist-link-pending"><a href="#">Pending members ({{ $group->requests()->count() }})</a><span class="tab-spacer"></span></li>
      </ul>
    </div>
    <a class="topdialog-exit" href="#" id="group-memberlist-exit">X</a>
    <div class="topdialog-body" id="group-memberlist-body">
      <div id="group-memberlist-members-search" class="clearfix">
        <a style="display:none;" id="group-memberlist-members-search-button" href="#" class="new-button"><b>Search</b><i></i></a>
      </div>
      <!--Current Members-->
      <div id="group-memberlist-members" style="clear: both;">
        <div id="group-memberlist-members-list">
          <p>Click an user to remove them</p>
          <div id="avatarlist-content">
            <div class="avatar-widget-list-container">
              <ul id="avatar-list-list" class="avatar-widget-list">
                @foreach($group->members()->get() as $u)
                  <li>
                    <div class="avatar-list-open"><a href="#" id="avatar-list-open-link-49-22" class="avatar-list-open-link"></a></div>
                    <div class="avatar-list-avatar" style="float:left;width:15%;">
                      <img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->user()->value('look') }}" style="float:left;">
                    </div>
                    <h4 style="float:right;width:65%;">
                      @if($u->user_id == Auth::user()->id)
                        <a>{{ $u->user()->value('username') }}</a>
                      @else
                        <a href="/groups/actions/kick/{{ $group->id }}/{{ $u->id }}">{{ $u->user()->value('username') }}</a>
                      @endif
                    </h4>
                  </li>
                  @endforeach
                </ul>
                <div id="avatar-list-info" class="avatar-list-info">
                  <div class="avatar-list-info-close-container"><a class="avatar-list-info-close"></a></div>
                  <div class="avatar-list-info-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="group-memberlist-members-buttons" class="clearfix">
        	<a href="#" class="new-button group-memberlist-button" id="group-memberlist-button-close"><b>Close</b><i></i></a>
        </div>
        <div id="group-memberlist-pending" style="clear: both; display: none;">
          <p>Click an user to accept them into the group</p>
          <ul id="avatar-list-list" class="avatar-widget-list">
            @foreach($group->requests as $r)
              <li>
                <div class="avatar-list-open"><a href="#" id="avatar-list-open-link-49-22" class="avatar-list-open-link"></a></div>
                <div class="avatar-list-avatar" style="float:left;width:15%;">
                  <img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $r->user()->value('look') }}" style="float:left;">
                </div>
                <h4 style="float:right;width:65%;">
                  <a href="/groups/actions/accept/{{ $group->id }}/{{ $r->user_id }}">{{ $r->user()->value('username') }}</a>
                </h4>
              </li>
            @endforeach
          </ul>
        </div>
        <div id="group-memberlist-pending-buttons" class="clearfix" style="display: none;">
        	<a href="#" class="new-button group-memberlist-button" id="group-memberlist-button-close2"><b>Close</b><i></i></a>
        </div>
    	</div>
    </div></div></div><div class="bb"><div></div></div></div>

  <script type="text/javascript">
  HabboView.run();
  </script>




@endif
