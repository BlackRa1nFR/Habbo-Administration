@include('templates.header')

  <div id="column2" class="column">
    @if(Session::has('message'))
      <div class="habblet-container">
        <div class="cbb clearfix {{ Session::get('color') }}">
          <h2 class="title">Oh no!</h2>
          <div class="box-content">{{ Session::get('message') }} </div>
        </div>
      </div>
    @endif
    <div class="habblet-container">
      <div class="cbb clearfix red">
        <h2 class="title">Warning</h2>
        <div class="box-content">We are still heavily editing snog!</div>
      </div>
    </div>
  </div>

  <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
