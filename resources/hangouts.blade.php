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
  @foreach($timeline as $t)
    @define $author = $t->author()->first()
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title" style="background:#{{ $t->color }};">
          <div style="float:left;">{{ $t->created_at->diffForHumans() }}</div>
          <div style="float:right;">{{ $t->title }}</div>
        </h2>
        <div class="box-content" style="overflow:hidden;width:85%;">
          <div style="float:left;height:80px;width:25%;overflow:hidden;">
            <div style="display:block;background:#{{ $t->color }};color:white;padding:4px;border-radius:4px;text-align:center;">{{ $author->username }}</div>
            <img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $author->look }}">
          </div>
          <div style="float:right;width:65%;margin-right:2%;">
            <style>.box-content .content img { max-width:200px;max-height:200px; }</style>
            <div class="content">{!! substr($t->content, 0, 500) !!}</div>
          </div>
          <div style="clear:both;padding-top:2.5%;">
            <hr>
            <div style="float:left;">
              <b>{{ $author->posts()->count() }}</b> post(s)
            </div>
            <div style="float:right;">
              <b>{{ $t->replies()->count() }}</b> <a href="/hangouts/post/{{ $t->id }}">Comments</a> | <b>{{ $t->likes()->count() }}</b> <a href="/hangouts/action/like/{{ $t->id }}">Likes</a>
            </div>
          </div>
          @if(Auth::user()->rank > 5)
            <br><br>
            <div style="clear:both;padding:2%;background:#272525;border-radius:4px;overflow:hidden;color:white;width:100%;">
              <div style="float:left;">
                I have <b>{{ $author->warnings()->count() }}</b> warning points</b>
              </div>
              <div style="float:right;">
                <a style="text-decoration:none;" href="/hangouts/action/delete/{{ $t->id }}">Delete</a> | <a style="text-decoration:none;" href="/hangouts/action/ban/{{ $t->id }}">Post Ban</a>
              </div>
            </div>
          @endif
        </div>
      </div>
    </div>
  @endforeach
  </div>



  <div id="column2" class="column">
    @if(Session::has('status'))
      <div class="habblet-container">
        <div class="cbb clearfix {{ Session::get('status') }}">
          <h2 class="title">{{ Session::get('title') }}</h2>
          <div class="box-content">{{ Session::get('message') }} </div>
        </div>
      </div>
    @endif
    @if($total > 10)
      <div class="habblet-container">
        <div class="cbb clearfix">
          <h2 class="title" style="background:#312F2F;">Stories</h2>
          <div class="box-content">
            @define $pos = 0
            @while($pos < $total/10)
              @define $pos = $pos + 1
              <a href="?page={{ $pos }}">Page {{ $pos }}</a>
            @endwhile
          </div>
        </div>
      </div>
    @endif
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
    <div class="habblet-container">
      <div class="cbb clearfix green">
        <h2 class="title" style="background:#2E2727;">Got something to say?</h2>
        <div class="box-content">
          <script type="text/javascript" src="https://swfs.ihabbo.pw/assets/js/jscolor.js"></script>
          <form method="post">
            <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            <input type="text" name="title" style="width:100%;padding:5px;border-radius:6px;border:1px solid gray;" name="title" placeholder="What's up?">
            <input name="color" class="jscolor {onFineChange:'update(this)'} jscolor-active" value="2CC765" readonly="" autocomplete="off" style="background-image: none; background-color: rgb(44, 199, 101); color: rgb(0, 0, 0);width:100%;padding:5px;border-radius:6px;border:1px solid gray;margin-top:2%;">
            <textarea name="content" rows="8" style="width:100%;padding:5px;border-radius:6px;margin-top:2%;border:1px solid gray;"></textarea>
            <input type="submit" value="Post!" style="float:right;margin-top:2%;">
          </form>
          <br>
          <a href="/hangouts/support/bbcode">BB Code</a>
        </div>
      </div>
    </div>
  </div>
@endif
<script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
