@include('templates.header')
<style type="text/css">#playground,#playground-outer{width:752px;height:1360px;}</style>
<div class="cb blue" id="mypage-wrapper">
  <div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
    <div class="box-tabs-container box-tabs-left clearfix">
      <div class="myhabbo-view-tools">
      </div>
      <h2 class="page-owner">Online Users</h2>
      <ul class="box-tabs"></ul>
    </div>
    <div id="mypage-content">
      <div id="mypage-bg" style="background:url(https://swfs.ihabbo.pw/assets/web-gallery/images/bg_colour_01.gif);">
        <div id="playground" style="padding:10px;margin-left:5%;">
          @if(sizeof($players) > 0)
            @foreach($players as $p)
              <div id="column2" class="column" style="width:20%;">
                <div class="habblet-container">
                  @if($p->rank == 2)
                    <div class="cbb clearfix green">
                  @elseif($p->rank >4)
                    <div class="cbb clearfix red">
                  @else
                    <div class="cbb clearfixe">
                  @endif
                    <h2 class="title">{{ $p->username }}</h2>
                    <div class="box-content">
                      <center>
                        <img style=""src="https://www.habbo.fr/habbo-imaging/avatarimage?figure=habbo-imaging/avatarimage?figure={{ $p->look }}">
                      </center>
                    </div>
                  </div>
                </div>
              </div>
          <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
        @endforeach
      @else
        <div id="column2" class="column">
          <div class="habblet-container">
            <div class="cbb clearfix blue">
              <h2 class="title">Hotel's asleep?!</h2>
              <div class="box-content">
                It looks like everybody is taking a break!
              </div>
            </div>
          </div>
          <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
        </div>
      @endif
    </div>
  </div>
</div>
</div></div></div><div class="bb"><div></div></div></div>
