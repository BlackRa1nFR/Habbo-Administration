@include('templates.header')
<div id="column2" class="column" style="width:28.5%;">
	<div class="habblet-container">
		<div class="cb white"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
			<div class="box-content" style="margin-left:3px;margin-right:3px;padding:0;">
				<div class="" style="float:left;margin-right:1px;">
					<img src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/image1.png">
					<a style="position:absolute;margin-left:175px;margin-top:-23px;color:#323131;font-weight:bold;text-decoration:none;" href="#">Credits</a>
					@define $count = 0
					@foreach($credits as $u)
						@define $count = $count + 1
						@if($count == 1)
							<table width="101%" height="60px" style="background-color:#fff;font-size:14px;">
								<tbody>
									<tr>
										<td valign="middle" width="25" height="50px">
											<img style="margin-top:-100px;margin-bottom:-10px;" src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->look }}&size=sml">
										</td>
										<td valign="top" style="font-size:12px;">
											<p style="margin-top:5px;"><strong><a style="color:black;" href="/profile/{{ $u->username }}">{{ $u->username }}</a></strong></p>
											<p style="margin-top:-7px;"><font color="grey">{{ number_format($u->credits, 0) }}</font></p>
											<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/gold.png">
										</td>
									</tr>
								</tbody>
							</table>
						@else
							<table width="101%" height="60px" style="background-color:#ECECEC;border-top:1px dashed #CCCCCC;border-bottom:1px dashed #CCCCCC;">
								<tbody>
									<tr>
										<td valign="middle" width="25" height="50px">
											<img style="margin-top:-10px;margin-bottom:-10px;" src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->look }}&headonly=1">
										</td>
										<td valign="top" style="font-size:12px;">
											<p style="margin-top:5px;"><strong><a style="color:black;" href="/profile/{{ $u->username }}">{{ $u->username }}</a></strong></p>
											<p style="margin-top:-7px;"><font color="grey">{{ number_format($u->credits, 0) }}</font></p>
											@if($count == 2)
												<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/silver.png">
											@elseif($count == 3)
												<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/bronze.png">
											@endif
										</td>
									</tr>
								</tbody>
							</table>
						@endif
					@endforeach
				</div>
			</div>
		</div></div></div><div class="bb"><div></div></div>
	</div>
</div>
</div>

<div id="column2" class="column" style="width:28.5%;">
	<div class="habblet-container">
		<div class="cb white"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
			<div class="box-content" style="margin-left:3px;margin-right:3px;padding:0;">
				<div class="" style="float:left;margin-right:1px;">
					<img src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/image2.png">
					<a style="position:absolute;margin-left:175px;margin-top:-23px;color:#323131;font-weight:bold;text-decoration:none" href="#">Pixels</a>
					@define $count = 0
					@foreach($pixels as $u)
						@define $count = $count + 1
						@if($count == 1)
							<table width="101%" height="60px" style="background-color:#fff;">
								<tbody>
									<tr>
										<td valign="middle" width="25" height="50px">
											<img style="margin-top:-100px;margin-bottom:-10px;" src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->look }}&size=sml">
										</td>
										<td valign="top" style="font-size:12px;">
											<p style="margin-top:5px;"><strong><a style="color:black;" href="/profile/{{ $u->username }}">{{ $u->username }}</a></strong></p>
											<p style="margin-top:-7px;"><font color="grey">{{ number_format($u->activity_points, 0) }}</font></p>
											<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/gold.png">
										</td>
									</tr>
								</tbody>
							</table>
						@else
							<table width="101%" height="60px" style="background-color:#ECECEC;border-top:1px dashed #CCCCCC;border-bottom:1px dashed #CCCCCC;">
								<tbody>
									<tr>
										<td valign="middle" width="25" height="50px">
											<img style="margin-top:-10px;margin-bottom:-10px;" src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->look }}&headonly=1">
										</td>
										<td valign="top" style="font-size:12px;">
											<p style="margin-top:5px;"><strong><a style="color:black;" href="/profile/{{ $u->username }}">{{ $u->username }}</a></strong></p>
											<p style="margin-top:-7px;"><font color="grey">{{ number_format($u->activity_points, 0) }}</font></p>
											@if($count == 2)
												<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/silver.png">
											@elseif($count == 3)
												<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/bronze.png">
											@endif
										</td>
									</tr>
								</tbody>
							</table>
						@endif
					@endforeach
				</div>
			</div>
		</div></div></div><div class="bb"><div></div></div>
	</div>
</div>
</div>

<div id="column2" class="column" style="width:28.5%;">
	<div class="habblet-container">
		<div class="cb white"><div class="bt"><div></div></div><div class="i1"><div class="i2"><div class="i3">
			<div class="box-content" style="margin-left:3px;margin-right:3px;padding:0;">
				<div class="" style="float:left;margin-right:1px;">
					<img src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/image3.png">
					<a style="position:absolute;margin-left:175px;margin-top:-23px;color:#323131;font-weight:bold;text-decoration:none" href="#">Diamonds</a>
					@define $count = 0
					@foreach($diamonds as $u)
						@define $count = $count + 1
						@if($count == 1)
							<table width="101%" height="60px" style="background-color:#fff;">
								<tbody>
									<tr>
										<td valign="middle" width="25" height="50px">
											<img style="margin-top:-100px;margin-bottom:-10px;" src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->look }}&size=sml">
										</td>
										<td valign="top" style="font-size:12px;">
											<p style="margin-top:5px;"><strong><a style="color:black;" href="/profile/{{ $u->username }}">{{ $u->username }}</a></strong></p>
											<p style="margin-top:-7px;"><font color="grey">{{ number_format($u->vip_points, 0) }}</font></p>
											<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/gold.png">
										</td>
									</tr>
								</tbody>
							</table>
						@else
							<table width="101%" height="60px" style="background-color:#ECECEC;border-top:1px dashed #CCCCCC;border-bottom:1px dashed #CCCCCC;">
								<tbody>
									<tr>
										<td valign="middle" width="25" height="50px">
											<img style="margin-top:-10px;margin-bottom:-10px;" src="https://www.habbo.fr/habbo-imaging/avatarimage?figure={{ $u->look }}&headonly=1">
										</td>
										<td valign="top" style="font-size:12px;">
											<p style="margin-top:5px;"><strong><a style="color:black;" href="/profile/{{ $u->username }}">{{ $u->username }}</a></strong></p>
											<p style="margin-top:-7px;"><font color="grey">{{ number_format($u->vip_points, 0) }}</font></p>
											@if($count == 2)
												<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/silver.png">
											@elseif($count == 3)
												<img style="float:right;margin-top:-35px;margin-right:10px;" src="https://swfs.ihabbo.pw/assets/web-gallery/images/stats/bronze.png">
											@endif
										</td>
									</tr>
								</tbody>
							</table>
						@endif
					@endforeach
				</div>
			</div>
		</div></div></div><div class="bb"><div></div></div>
	</div>
</div>
</div>
