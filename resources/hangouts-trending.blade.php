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

  @if(count($timeline) == 0)
    <div class="habblet-container">
      <div class="cbb clearfix red">
        <h2 class="title">Oh no!</h2>
        <div class="box-content">
          There's nothing regarding this topic yet!
        </div>
      </div>
    </div>
  @else
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
  @endif
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
