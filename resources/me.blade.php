@include('templates.header')
<div id="wide-personal-info">

	<div id="habbo-plate">
		<a href="/profile/<%= user.username %>">
			<img src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ Auth::user()->look }}&head_direction=3&action=wav&gesture=sml"/>
		</a>
	</div>

	<div id="name-box" class="info-box">
		<div class="label">Name:</div>
    <div class="content">{{ Auth::user()->username }}</div>
	</div>
	<div id="motto-box" class="info-box">
		<div class="label">Motto:</div>
		<div class="content">{{ Auth::user()->motto }}</div>
	</div>
	<div id="last-logged-in-box" class="info-box">
		<div class="label">Last Online</div>
		<div class="content">{{ Carbon\Carbon::createFromTimestamp(Auth::user()->last_online)->format('F d, Y (h:m A)') }}</div>
	</div>
	<div class="enter-hotel-btn">
		<div class="open enter-btn">
			<a href="/play">Enter {{ $website }}<i></i></a><b></b>
		</div>
	</div>
</div>

@include('templates.slider')

<div id="column1" class="column">

</div>
<div id="column2" class="column">
	<div class="habblet-container ">
		<div class="cb clearfix red "><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
			<div class="box-tabs-container clearfix">
				<h2>Staff Picks</h2>
				<ul class="box-tabs">
        	<li class="selected"><a href="#">Groups</a><span class="tab-spacer"></span></li>
    		</ul>
			</div>
			<div id="tab-1-3-1-content">
				<div id="staffpicks-rooms-habblet-list-container" class="habblet-list-container groups-list">
	    	<ul class="habblet-list">
					@define $odd = true
					@foreach($groups as $g)
						 @if($odd)
							<li class="even right" style="background-image: url(https://game.boon.pw/habbo-imaging/badge/{{ $g->badge }})">
								<a class="item" href="/groups/{{ $g->id }}">{{ $g->name }}</a>
							</li>
						@else
							<li class="odd right" style="background-image: url(https://game.boon.pw/habbo-imaging/badge/{{ $g->badge }})">
								<a class="item" href="/groups/{{ $g->id }}">{{ $g->name }}</a>
							</li>
						@endif
						@define $odd = !$odd
					@endforeach
	    	</ul>
			</div>
		</div>
	</div></div></div><div class="bb"><div></div></div></div>
</div>



<script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
