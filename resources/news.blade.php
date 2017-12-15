@include('templates.header')
<div id="column2" class="column" style="width:22.5%;">
  <div class="habblet-container">
    <div class="cbb clearfix orage">
      <h2 class="title">News</h2>
      <div class="box-content">
        <div id="article-archive">
        <ul>
          @foreach($news as $n)
            <li><a href="/community/news/{{ $n->name }}/{{ $n->id }}">{{ $n->name }}</a></li>
          @endforeach
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
<div id="column1" class="column" style="width:60%;">
  <div class="habblet-container ">
    <div class="cb clearfix notitle "><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
      <div id="article-wrapper">
        <h2>{{ $article->name }}</h2>
        <div class="article-meta">{{ $article->created_at->format('F d, Y') }} by <b>{{ $n->author()->value('username') }}</b></div>
        <p class="summary">{{ $article->desc }}</p>
        <div class="article-body">
          {!! html_entity_decode($article->content) !!}
        </div>
      </div>
    </div>
  </div></div><div class="bb"><div></div></div></div>
</div>
<script>if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
