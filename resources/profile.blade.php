@include('templates.header')
<style type="text/css">#playground,#playground-outer{width:752px;height:1360px;}</style>

<div class="cb blue" id="mypage-wrapper">
  <div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
    <div class="box-tabs-container box-tabs-left clearfix">
      <div class="myhabbo-view-tools">
        @if($profile->rank > 5)
          <div style="color:red;background:black;padding:5px;border-radius:4px;margin-top:-5px;">{{ $profile->rank()->value('name') }}</div>
        @endif
      </div>
    <h2 class="page-owner">{{ $profile->username }}</h2>
    <ul class="box-tabs"></ul>
  </div>
  <div id="mypage-content">
    @if($profile->rank > 5)
      <div id="mypage-bg" style="background:url(https://swfs.ihabbo.pw/assets/web-gallery/images/staff-bg.gif);">
    @else
      <div id="mypage-bg" style="background:url(https://swfs.ihabbo.pw/assets/web-gallery/images/bg_colour_01.gif);">
    @endif
      <div id="playground">
        <div class="movable widget ProfileWidget" id="widget-902026" style=" left: 25px; top: 26px; z-index: 4;">
          <div class="w_skin_defaultskin">
            <div class="widget-corner" id="widget-902026-handle">
              <div class="widget-headline"><h3><span class="header-left">&nbsp;</span><span class="header-middle">MY PROFILE</span><span class="header-right">&nbsp;</span></h3>
              </div>
            </div>
            <div class="widget-body">
              <div class="widget-content">
                <div class="profile-info">
                  <div class="name" style="float: left">
                    <span class="name-text">{{ $profile->username }}</span>
                  </div>
                  <br class="clear">
                  @if($profile->online == 1)
                    <img alt="offline" src="http://swfs.ihabbo.pw/assets/web-gallery/images/habbo_online_anim.gif">
                  @else
                    <img alt="online" src="http://swfs.ihabbo.pw/assets/web-gallery/images/habbo_offline.gif">
                  @endif
                  <div class="birthday text">
                    User created:
                  </div>
                  <div class="birthday date">
                    {{ Carbon\Carbon::createFromTimestamp($profile->account_created)->format('F d, Y') }}
                  </div>
                    <div>
                    </div>
                  </div>
                  <div class="profile-figure" style="">
                    <img style=""src="https://www.habbo.fr/habbo-imaging/avatarimage?figure=habbo-imaging/avatarimage?figure={{ $profile->look }}">
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="movable widget GroupsWidget" id="widget-1938125" style=" left: 25px; top: 220px; z-index: 10;">
            <div class="w_skin_defaultskin">
              <div class="widget-corner" id="widget-1938125-handle">
                <div class="widget-headline"><h3><span class="header-left">&nbsp;</span><span class="header-middle">MY GROUPS (<span id="groups-list-size">{{ count($groups) }}</span>)</span><span class="header-right">&nbsp;</span></h3>
                </div>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <div class="groups-list-container">
                    <ul class="groups-list">
                      @if(count($groups) != 0)
                        @foreach($groups as $g)
                          <li id="groups-list-7446454-142803">
                            <div class="groups-list-icon"><a href="/groups/{{ $g->parent()->value('id') }}"><img src="https://game.boon.pw/habbo-imaging/badge/{{ $g->parent->badge }}"></a></div>
                            <div class="groups-list-open"></div>
                            <h4><a href="/groups/{{ $g->parent()->value('id') }}">{{ $g->parent->name }}</a></h4>
                            <p>
                              Group created:<br>
                              <b>{{ Carbon\Carbon::createFromTimestamp($g->parent()->value('created'))->format('F d, Y') }}</b>
                            </p>
                            <div class="clear"></div>
                          </li>
                        @endforeach
                      @else
                        I don't belong to any groups!
                      @endif
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="movable widget GroupsWidget" id="widget-1938125" style=" left: 630px; top: 26px; z-index: 10;">
            <div class="w_skin_defaultskin">
              <div class="widget-corner" id="widget-1938125-handle">
                <div class="widget-headline"><h3><span class="header-left">&nbsp;</span><span class="header-middle">MY BADGES (<span id="groups-list-size">{{ count($badges) }}</span>)</span><span class="header-right">&nbsp;</span></h3>
                </div>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <div class="groups-list-container">
                    <ul class="groups-list">
                      @foreach($badges as $b)
                        <img  src="https://game.boon.pw/c_images/album1584/{{ $b->badge_id }}.gif">
                      @endforeach
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="movable widget GroupsWidget" id="widget-1938125" style=" left: 630px; top: 300px; z-index: 10;">
            <div class="w_skin_defaultskin">
              <div class="widget-corner" id="widget-1938125-handle">
                <div class="widget-headline"><h3><span class="header-left">&nbsp;</span><span class="header-middle">HANGOUTS (<span id="groups-list-size">{{ count($posts) }}</span>)</span><span class="header-right">&nbsp;</span></h3>
                </div>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <div class="groups-list-container">
                    <ul class="groups-list">
                      @foreach($posts as $p)
                        <li id="groups-list-7446454-142803">
                          <div class="groups-list-icon"><a href="/hangouts/post/{{ $p->id }}"><img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure=habbo-imaging/avatarimage?figure={{ $profile->look }}&headonly=1"></a></div>
                          <div class="groups-list-open"></div>
                          <h4><a href="/hangouts/post/{{ $p->id }}">{{ $p->title }}</a></h4>
                          <p>
                            Posted On<br>
                            <b>{{ $p->created_at->diffForHumans() }}</b>
                          </p>
                          <div class="clear"></div>
                        </li>
                      @endforeach
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="movable widget GroupsWidget" id="widget-1938125" style=" left: 630px; top: 600px; z-index: 10;">
            <div class="w_skin_defaultskin">
              <div class="widget-corner" id="widget-1938125-handle">
                <div class="widget-headline"><h3><span class="header-left">&nbsp;</span><span class="header-middle">YOUTUBE VIDEO <span class="header-right">&nbsp;</span></h3>
                </div>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <iframe width="100%" height="50px" src="https://www.youtube.com/embed/{{ $profile->youtube }}?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=0"" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </div>


          <div class="movable widget RoomsWidget" id="widget-902024" style=" left: 25px; top: 500px; z-index: 4;">
            <div class="w_skin_defaultskin">
              <div class="widget-corner" id="widget-902024-handle">
                <div class="widget-headline"><h3><span class="header-left">&nbsp;</span><span class="header-middle">MY ROOMS ({{ count($rooms) }})</span><span class="header-right">&nbsp;</span></h3>
                </div>
              </div>
              <div class="widget-body">
                <div class="widget-content">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                      @if(count($rooms) != 0)
                        @foreach($rooms as $r)
                          <tr>
                          <td valign="top">
                            <div class="room_image">
                              <img src="http://swfs.ihabbo.pw/assets/web-gallery/images/myhabbo/rooms/room_icon_open.gif" alt="" align="middle">
                            </div>
                          </td>
                          <td>
                            <div class="room_info">
                              <div class="room_name" style="font-size:12px;">{{ $r->caption }}</div>
                              <div class="clear"></div>
                              <div style="font-size:10px;">{{ $r->description }}</div>
                            </div>
                            <br class="\&quot;clear\&quot;">
                          </td>
                        </tr>
                      @endforeach
                    @else
                       I don't own any rooms!
                    @endif

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div></div></div><div class="bb"><div></div></div></div>
