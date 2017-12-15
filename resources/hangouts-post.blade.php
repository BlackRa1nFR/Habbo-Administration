@include('templates.header')
@if(Auth::user()->hangouts()->value('status') == 'banned')
  <div id="column2" class="column">
    <div class="habblet-container">
      <div class="cbb clearfix red">
        <h2 class="title">Banned!</h2>
        <div class="box-content">
          Your currently not allowed to access this feature!
          <br><b>Reason:</b> <br>
          {{ Auth::user()->hangouts->value('status_reason') }}
        </div>
      </div>
    </div>
  </div>
@else
  <div id="column1" class="column">
    @define $author = $post->author()->first()
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title" style="background:#{{ $post->color }};">
          <div style="float:left;">{{ $post->created_at->diffForHumans() }}</div>
          <div style="float:right;">{{ $post->title }}</div>
        </h2>
        <div class="box-content">
          <div style="float:left;height:80px;width:15%;overflow:hidden;">
            <img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $author->look }}">
          </div>
          <div style="float:right;width:70%;">
            <style>.box-content .content img { max-width:300px;max-height:300px; }</style>
            <div class="content">{!! substr($post->content, 0, 500) !!}</div>
          </div>
          <div style="clear:both;padding-top:2.5%;">
            <p align="right">
              <a href="/profile/{{ $author->username }}">-{{ $author->username }}</a>
            </p>
            <hr>
            <div style="float:left;">
              <b>{{ $author->posts()->count() }}</b> post(s)
            </div>
            <div style="float:right;">
              <b>{{ $post->likes()->count() }}</b> <a href="/hangouts/action/like/{{ $post->id }}">Likes</a>
            </div>
          </div>
          <div style="clear:both;padding-top:2.5%;">
            <hr>
            @if($post->likes()->count() >= 1)
              <b>The following users liked this post:</b> <br>
              @foreach($post->likes()->get() as $l)
                @if($l->user()->value('rank') > 3)
                  <a href="/profile/{{ $l->user()->value('username') }}" style="color:#CD2C42;font-weight:bolder;text-decoration:none;">{{ $l->user()->value('username') }}</a>,
                @else
                  <a href="/profile/{{ $l->user()->value('username') }}" style="color:#2CADCD;text-decoration:none;">{{ $l->user()->value('username') }}</a>,
                @endif
              @endforeach
            @else
              This post hasn't been liked yet!
            @endif
          </div>
          @if(Auth::user()->rank > 5)
            <br><br>
            <div style="clear:both;padding:2%;background:#272525;border-radius:4px;overflow:hidden;color:white;width:100%;">
              <div style="float:left;">
                I have <b>{{ $author->warnings()->count() }}</b> warning points</b>
              </div>
              <div style="float:right;">
                <a style="text-decoration:none;" href="/hangouts/action/delete/{{ $post->id }}">Delete</a> | <a style="text-decoration:none;" href="/hangouts/action/ban/{{ $post->id }}">Post Ban</a>
              </div>
            </div>
          @endif
        </div>
      </div>
    </div>
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title" style="background:#2A2A2A;">Comments</h2>
        <div class="box-content">
          @if($post->replies()->count() == 0)
            There are no comments yet!
          @else
            @foreach($post->replies()->get() as $c)
              {{ $c->created_at->diffForHumans() }}: <br>
              @if($c->author()->value('rank') > 3)
                <a href="/profile/{{ $c->author()->value('username') }}" style="color:#CD2C42;font-weight:bolder;text-decoration:none;">{{ $c->author()->value('username') }}</a> said:
              @else
                <a href="/profile/{{ $c->author()->value('username') }}" style="color:#2CADCD;text-decoration:none;">{{ $c->author()->value('username') }}</a> said:
              @endif
              {!! $c->content !!}
              <br><br>
            @endforeach
          @endif
        </div>
      </div>
    </div>
  </div>



  <div id="column2" class="column">
    @if(Session::has('message'))
      <div class="habblet-contaner">
        <div class="cbb clearfix {{ Session::get('color') }}">
          <h2 class="title">{{ Session::get('message') }}</h2>
        </div>
      </div>
    @endif
    <div class="habblet-container">
      <div class="cbb clearfix red">
        <div class="box-content">
          Go <a href="/hangouts/home">Back</a>
        </div>
      </div>
      <div class="cbb clearfix white">
        <div class="box-content">
          @if(Auth::user()->reports()->where('post', $post->id)->count() == 0)
            <p>Report Abuse</p>
            <form method="post" action="/hangouts/action/report">
              <input type="hidden" name="user" value="{{ $post->author }}">
              <input type="hidden" name="post" value="{{ $post->id }}">
              <input type="hidden" name="_token" value="{!! csrf_token() !!}">
              <textarea rows="5" name="comment" style="width:100%;padding:2.5px;border-radius:4px;">Why are you reporting this?</textarea>
              <div style="clear:both;margin-top:5px;float:right;">
                <input type="submit" value="File Report">
              </div>
            </form>
          @else
            You already reported this post!
          @endif
        </div>
      </div>
    </div>
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title">Reply to Post</h2>
        <div class="box-content">
          <form method="post" action="/hangouts/action/comment">
            <input type="hidden" name="post" value="{{ $post->id }}">
            <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            <textarea rows="5" name="content" style="width:100%;padding:2.5px;border-radius:4px;">What do you have to say?</textarea>
            <div style="clear:both;margin-top:5px;float:right;">
              <input type="submit" value="Send">
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="habblet-container">
      <div class="cbb clearfix green">
        <h2 class="title">Trending</h2>
        <div class="box-content">
          @foreach($hashtags as $h)
            <a href="/hangouts/trending/{{ $h->value }}">#{{ $h->value }} ({{ $h->count }})</a>,
          @endforeach
        </div>
      </div>
    </div>
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title">Today's World</h2>
        <div class="box-content">
          @foreach($trending as $t)
            <a href="/hangouts/trending/{{ $t->title }}">{{ $t->title }}</a> - {{ $t->desc }} <br> <br>
          @endforeach
        </div>
      </div>
    </div>
  </div>
@endif
<script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
