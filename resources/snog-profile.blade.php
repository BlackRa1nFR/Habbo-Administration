@include('templates.header')
<link rel="stylesheet" href="https://swfs.ihabbo.pw/assets/css/snog.css" type="text/css"/>
<div class="snog">
  <div id="column2" class="column">
    <!--Profile and Uploads-->
    <div class="habblet-container">
      <div class="cbb clearfix white">
        <div class="box-content">
          <div class="profile">
            <!--Check to see if user has a profile picture available-->
            @if($profile->snog_picture == null)
              <img src="/resources/assets/snog/placeholder.jpg">
            @else
              <img src="/resources/assets/snog/uploads/{{ $profile->snog_picture }}">
            @endif
          </div>
          <div class="uploads">
            <p>My pictures</p>
            @foreach($uploads as $upload)
              <img src="/resources/assets/snog/uploads/{{ $upload->data_location }}">
            @endforeach
          </div>
        </div>
      </div>
    </div>
    <!--People I Follow-->
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <div class="box-content">
          @if(count($followed) == 0)
            I'm not following anyone
          @else
            <h2 class="title">{{ count($followed) }} Following</h2>
            <div class="uploads"> <br>
              @foreach($followed as $f)
                <a href="/snog/profile/{{ $f->target()->value('username') }}">
                  <img src="/resources/assets/snog/uploads/{{ $f->target()->value('snog_picture') }}">
                </a>
              @endforeach
            </div>
          @endif
        </div>
      </div>
    </div>

    <!--People who follow me-->
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <div class="box-content">
          @if(count($followers) == 0)
            I'm not followed by anyone!
          @else
            <h2 class="title">{{ count($followers) }} Followers</h2>
            <div class="uploads"> <br>
              @foreach($followers as $f)
                <a href="/snog/profile/{{ $f->user()->value('username') }}">
                  <img src="/resources/assets/snog/uploads/{{ $f->user()->value('snog_picture') }}">
                </a>
              @endforeach
            </div>
          @endif
        </div>
      </div>
    </div>
  </div>

  <div id="column1" class="column">
    <div class="habblet-container">
      <div class="cbb clearfix white">
        <div class="box-content">
          <div class="information">
            <h4>{{ '@'.$profile->username }}</h4>

            <!--Available Options-->
            @if($profile->id != Auth::user()->id)
              <div style="margin-top:5%;margin-bottom:8.5%;overflow:hidden;">
                <div style="float:left;">
                  <a id="cancel-button" class="new-button red-button" onclick="displayAvoid()"><b>Avoid</b><i></i></a>
                  <a id="cancel-button" class="new-button default-button" onclick="displayMarry()"><b>Marry</b><i></i></a>
                  <a id="cancel-button" class="new-button green-button" onclick="displaySnog()"><b>Snog</b><i></i></a>
                </div>
                <div style="float:right;">
                  @if($user->snogFollowed()->where('target', $profile->id)->count() == 1)
                    <a id="cancel-button" class="new-button default-button" href="/snog/unfollow/{{ $profile->id }}"><b>Unfollow</b><i></i></a>
                  @else
                    <a id="cancel-button" class="new-button default-button" href="/snog/follow/{{ $profile->id }}"><b>Follow</b><i></i></a>
                  @endif
                </div>
              </div>
            @endif
            <!--End of Available Options-->

            <!--Answers Stats-->
            <ul class="box-tabs">
          	   <li class="selected"><a href="#">Answers</a><span class="tab-spacer"></span></li>
      		  </ul>
            <center>
              <br>
              <div class="box">
                <h2>{{ $responses->count() }}</h2>
                <h4>Answers</h4>
              </div>
              <!--To prevent error check response count then adjust algorithm-->
              @if($responses->count() > 0)
                <div class="box">
                  <h2>
                    {{ $responses->where('type', 'snog')->count() }}
                    <small>{{ number_format($responses->where('type', 'snog')->count() / $responses->count() * 100, 0)}}%</small>
                  </h2>
                  <h4>Snogs</h4>
                </div>

                <div class="box">
                  <h2>
                    {{ $responses->where('type', 'marry')->count() }}
                    <small>{{ number_format($responses->where('type', 'marry')->count() / $responses->count() * 100, 0)}}%</small>
                  </h2>
                  <h4>Marries</h4>
                </div>

                <div class="box">
                  <h2>
                    {{ $responses->where('type', 'avoid')->count() }}
                    <small>{{ number_format($responses->where('type', 'avoid')->count() / $responses->count() * 100, 0)}}%</small>
                  </h2>
                  <h4>Avoids</h4>
                </div>
              @else
                <div class="box">
                  <h2>0</h2>
                  <h4>Snogs</h4>
                </div>
                <div class="box">
                  <h2>0</h2>
                  <h4>Marries</h4>
                </div>
                <div class="box">
                  <h2>0</h2>
                  <h4>Avoids</h4>
                </div>
              @endif
            </center>
            <!--End of Answers Stats-->
        </div>
        <div class="answers">
          <!--Answers-->
          @foreach($responses as $r)
            <div class="response">
              <img src="/resources/assets/snog/uploads/{{ $r->user()->value('snog_picture') }}">
              <p>
                <a href="/snog/profile/{{ $r->user()->value('username') }}">{{ '@'.$r->user()->value('username') }}</a>
                @if($r->type == 'snog')
                  <font type="bold" color="#95a928">snogged</font>
                @elseif($r->type == 'marry')
                  <font type="bold" color="#95a928">married</font>
                @else
                  <font color="#C72828">avoided</font>
                @endif
                <a href="/snog/profile/{{ $r->target()->value('username') }}">{{ '@'.$r->target()->value('username') }}</a>
              </p>
              <br><br><br>
              <div class="comment">
                <p>{{ $r->comment }}</p>
              </div>
            </div>
          @endforeach
          <!--End of Answers-->
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.snog {
  width: 770px;
  background-image:url('/resources/assets/snog/uploads/{{ $profile->snog_background }}');
  padding: 1.5%;
  overflow: hidden;
  border-radius: 5px;
}
</style>

<script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>

<script>
function displaySnog(){Dialog.showInfoDialog("session-start-info-dialog","Comment?<br><style>#session-start-info-dialog .new-button {display:none;  }#session-start-info-dialog .default-button { display: block;}</style><form method='post' action='/snog/actions/submit'> <input type='hidden' name='_token' value='{!! csrf_token() !!}'> <input type='hidden' name='type' value='snog'> <input type='hidden' name='user' value='{{ $profile->id }}'> <textarea style='width:100%;' rows='5' name='comment'>They finna be fine asf</textarea> <input style='float:right;margin-top:5%;' type='submit' class='submit'> </form>","Okay",function(t){})}function displayMarry(){Dialog.showInfoDialog("session-start-info-dialog","Comment?<br><style>#session-start-info-dialog .new-button {display:none;  }#session-start-info-dialog .default-button { display: block;}</style><form method='post' action='/snog/actions/submit'> <input type='hidden' name='_token' value='{!! csrf_token() !!}'> <input type='hidden' name='type' value='marry'> <input type='hidden' name='user' value='{{ $profile->id }}'> <textarea style='width:100%;' rows='5' name='comment'>Yo they seem like a good marriage partner yanno?  Hell yeah</textarea> <input style='float:right;margin-top:5%;' type='submit' class='submit'> </form>","Okay",function(t){})}function displayAvoid(){Dialog.showInfoDialog("session-start-info-dialog","Comment?<br><style>#session-start-info-dialog .new-button {display:none;  }#session-start-info-dialog .default-button { display: block;}</style><form method='post' action='/snog/actions/submit'> <input type='hidden' name='_token' value='{!! csrf_token() !!}'> <input type='hidden' name='type' value='avoid'> <input type='hidden' name='user' value='{{ $profile->id }}'> <textarea style='width:100%;' rows='5' name='comment'>This bitch be looking like a gorilla, tf?</textarea> <input style='float:right;margin-top:5%;' type='submit' class='submit'> </form>","Okay",function(t){})}
</script>
