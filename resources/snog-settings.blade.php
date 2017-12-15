@include('templates.header')

  <div id="column2" class="column">
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title">Profile Picture</h2>
        <div class="box-content">
          <center>
            @if($user->snog_picture != null)
              <img src="/resources/assets/snog/uploads/{{ $user->snog_picture }}" style="border-radius:60%;border:1px solid gray;width:150px;height:150px;">
            @else
              <img src="/resources/assets/snog/placeholder.jpg" style="background-size:cover;border-radius:60%;border:1px solid gray;width:150px;height:150px;">
            @endif
            <form method="post" action="/snog/settings/pic" enctype="multipart/form-data">
              <input type="hidden" name="_token" value="{!! csrf_token() !!}">
              <input type="file" name="picture" style="width:77px;clear:both;">
              <br><br>
              <input type="submit">
            </form>
          </center>
        </div>
      </div>
    </div>
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title">Your bio</h2>
        <div class="box-content">
          <form method="post">
            <input type="hidden" name="_token" value="{!! csrf_token() !!}">
            <textarea style="width:100%" rows="5" name="bio">{{ $user->snog_bio }}</textarea>
            <br><br>
            <input type="submit">
          </form>
        </div>
      </div>
    </div>
  </div>

  <div id="column1" class="column">
    <div class="habblet-container">
      <div class="cbb clearfix blue">
        <h2 class="title">Background Photo</h2>
        <div class="box-content">
          <center>
            Patterns work best!
            <br>
            @if($user->snog_background != null)
              <img src="/resources/assets/snog/uploads/{{ $user->snog_background }}" style="border-radius:60%;border:1px solid gray;width:150px;height:150px;">
            @else
              <img src="/resources/assets/snog/bg.jpg" style="border-radius:60%;border:1px solid gray;width:150px;height:150px;">
            @endif
            <form method="post" action="/snog/settings/bg" enctype="multipart/form-data">
              <input type="hidden" name="_token" value="{!! csrf_token() !!}">
              <input type="file" name="picture" style="width:77px;clear:both;">
              <br><br>
              <input type="submit">
            </form>
          </center>
        </div>
      </div>
    </div>
  </div>

  <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
