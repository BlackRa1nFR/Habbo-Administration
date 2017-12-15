@include('templates.header')
@include('templates.slider')
<div id="column1" class="column">
</div>

<div id="column2" class="column">
  <div class="habblet-container">
    <div class="cb clearfix blue"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
      <div class="box-tabs-container clearfix">
        <ul class="box-tabs">
          <li id="tab-1-3-2" class="selected"><a href="#">Random Groups</a><span class="tab-spacer"></span></li>
        </ul>
      </div>
      <div id="tab-1-3-2-content">
        @foreach($groups as $g)
          <div id="staffpicks-groups-habblet-list-container" class="habblet-list-container groups-list">
            <ul class="habblet-list two-cols">
              <li class="even right" style="background-image: url('https://game.boon.pw/habbo-imaging/badge/{{ $g->badge }}')">
                <a class="item" href="/groups/{{ $g->id }}">{{ $g->name }}</a>
              </li>
            </ul>
          </div>
        @endforeach
      </div>
    </div></div></div><div class="bb"><div></div></div></div>
  </div>
</div>
