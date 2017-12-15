@include('templates.header')
<link href="http://dev.r35.habox.org/web-gallery/styles/discussions.css" type="text/css" rel="stylesheet"/>
<div class="cb blue" id="mypage-wrapper"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
<div class="box-tabs-container box-tabs-left clearfix">
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
        <a href="/groups/actions/join/{{ $group->id }}" id="join-group-button">Join</a>
      @else
        <a id="group-button">Group Request Pending</a>
      @endif
    @endif
  </div>
  <h2 class="page-owner">{{ $group->name }}</h2>
  <ul class="box-tabs">
    <li> <a href="/groups/{{ $group->id }}">Front Page</a><span class="tab-spacer"></span></li>
    <li class="selected"><a>Discussion Forum</a><span class="tab-spacer"></span></li>
  </ul>
</div>
<div id="mypage-content">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" class="content-1col">
    <tbody>
      <tr>
        <td valign="top" style="width: 750px;" class="habboPage-col rightmost">
          <div id="discussionbox">
            <div id="group-postlist-container">
              <div class="postlist-header clearfix">
                <a href="#" id="create-post-message" class="create-post-link verify-email">Post Reply</a>
              </div>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="group-postlist-list" id="group-postlist-list">
                <tbody>
                  <!--The first post (topic) -->
                  @define $count = App\Database\Groups\Discussion::where('author', $topic->author)->count() + App\Database\Groups\Replies::where('author', $topic->author)->count()
                  <tr class="post-list-index-even">
                    <td class="post-list-row-container">
                      <a href="/profile/{{ $topic->author()->value('username') }}" class="post-list-creator-link post-list-creator-info">{{ $topic->author()->value('username') }}</a>
                      <img alt="online_anim" src="http://dev.r35.habox.org/web-gallery/images/myhabbo/habbo_online_anim.gif">
                      	<div class="post-list-posts post-list-creator-info">Messages: {{ $count }}</div>
                        <div class="clearfix">
                          <div class="post-list-creator-avatar">
                            <img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $topic->author()->value('look') }}&head_direction=3&action=wav&gesture=sml">
                          </div>
                          <div class="post-list-group-badge">
                            <a href="/groups/{{ $group->id }}">
                              <img src="https://game.boon.pw/habbo-imaging/badge/{{ $group->badge }}">
                            </a>
                          </div>
                            <div class="post-list-avatar-badge">
                            </div>
                          </div>
                          <div class="post-list-motto post-list-creator-info"></div>
                          <td class="post-list-message" valign="top" colspan="2">
                            <a href="#" class="quote-post-link verify-email" id="quote-post-1-message">Quote</a>
                            <a href="#" class="edit-post-link verify-email" id="edit-post-1-message">Edit</a>
                            <span class="post-list-message-header">{{ $topic->title }}</span><br>
                            <span class="post-list-message-time">{{ $topic->created_at->format('F d, Y (h:m A)')}}</span>
                            <div class="post-list-content-element">
                              {{ $topic->content }}
                            </div>
                            <div>
                            </div>
                          </td>
                        </tr>
                        <!--End of First post-->
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
<div class="bb"><div></div></div></div>

<script type="text/javascript">
HabboView.run();
</script>
