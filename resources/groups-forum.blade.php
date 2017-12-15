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
    <tbody><tr>
      <td valign="top" style="width: 100%;" class="habboPage-col rightmost">
        <div id="discussionbox">
          <div id="group-topiclist-container">
            <table class="group-topiclist" border="0" cellpadding="0" cellspacing="0" id="group-topiclist-list">
              <tbody>
                <tr class="topiclist-columncaption">
                  <td class="topiclist-columncaption-topic">Thread and First Poster</td>
                  <td class="topiclist-columncaption-lastpost">Last Post</td>
                  <td class="topiclist-columncaption-replies">Replies</td>
                  <td class="topiclist-columncaption-views">Views</td>
                </tr>
                @foreach($group->discussion()->get() as $p)
                  <tr class="topiclist-row-even">
                    <td class="topiclist-rowtopic" valign="top">
                      <div class="topiclist-row-content">
                        <a class="topiclist-link icon icon-new" href="/groups/{{ $group->id }}/discussion/{{ $p->id }}">{{ $p->title }}</a>
                        <br>
                        <span><a class="topiclist-row-openername" href="/profile/{{ $p->author()->value('username') }}">{{ $p->author()->value('username') }}</a></span>
                        <span class="latestpost">{{ $p->created_at->diffForHumans() }}</span>
                      </div>
                    </td>
                    @if($p->replies()->count() >= 1)
                      @define $reply = $p->replies()->orderBy('id', 'DESC')->first()
                      <td class="topiclist-lastpost" valign="top">
                        <span class="lastpost">{{ $reply->created_at->diffForHumans() }}</span></a><br>
                        <span class="topiclist-row-writtenby">by:</span> <a class="topiclist-row-openername" href="/profile/>{{ $reply->author()->value('username') }}">{{ $reply->author()->value('username') }}</a>
                      </td>
                    @else
                      <td class="topiclist-lastpost" valign="top">
                        <a class="lastpost-page-link" href="/groups/discussion/{{ $p->id }}">{{ $p->title }}</a>
                        <span class="lastpost">{{ $p->created_at->diffForHumans() }}</span></a><br>
                        <span class="topiclist-row-writtenby">by:</span> <a class="topiclist-row-openername" href="/profile/>{{ $p->author()->value('username') }}">{{ $p->author()->value('username') }}</a>
                      </td>
                    @endif
                    <td class="topiclist-replies" valign="top">{{ $p->replies()->count() }}</td>
                    <td class="topiclist-views" valign="top">{{ $p->views }}</td>
                  </tr>
                @endforeach
              </tbody>
            </table>
            <div class="topiclist-footer clearfix">
              <a href="#" id="newtopic-lower" class="new-button verify-email newtopic-icon" style="float:left"><b><span></span>New Thread</b><i></i></a>
            </div>
          </div>
        </div>
      </td>
      <td style="width: 4px;"></td>
      <td valign="top" style="width: 164px;">
      </td>
    </tr>
  </tbody></table>
</div>
</div></div></div><div class="bb"><div></div></div></div>

<script type="text/javascript">
HabboView.run();
</script>
