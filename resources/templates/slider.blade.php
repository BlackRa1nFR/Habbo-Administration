<div id="promo-box" style="border-radius:5px;border:1px solid black;">
	<div id="promo-bullets"></div>
	@foreach($news as $n)
		<div class="promo-container" style="background-image: url({{ $n->image }})">
			<div class="promo-content-container">
				<div class="promo-content">
					<div class="title">{{ $n->name }}</div>
					<div class="body">{{ $n->desc }}</div>
				</div>
			</div>
			<div class="promo-link-container">
				<div class="enter-hotel-btn">
					<div class="open enter-btn">
						<a style="padding: 0 8px 0 19px;" href="/community/news/{{ $n->name }}/{{ $n->id }}">Read more »</a><b></b>
					</div>
				</div>
			</div>
		</div>
	@endforeach
</div>

<script type="text/javascript">document.observe("dom:loaded", function() { PromoSlideShow.init(); });</script>
