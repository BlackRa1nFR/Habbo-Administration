@include('templates.header')
<style>#contentBox a {color:white;font-size:16px;font-weight:bold;text-decoration:none;}a:hover{text-decoration:underline;}</style>
<div id="column1" class="column">
@foreach($ranks as $r)
    <div class="habblet-container">
      <div class="cbb clearfix red">
        <h2 class="title" style="background:#{{ $r->color }}">{{ $r->name }}</h2>
        <div class="box-content">
          <table style=" margin-left: -15px;  background-color: #fff;" width="107%">
            <tbody>
              @foreach($staff as $u)
                @if($u->rank == $r->id)
                  <tr>
                    <td valign="middle" width="25">
                      <div style="position: relative; overflow:hidden; height:65px;">
                      <img style="margin-top:-10px;" src="https://www.habbo.fr/habbo-imaging/avatarimage?figure=habbo-imaging/avatarimage?figure={{ $u->look }}&amp;size=m&amp;gesture=sml">
                    </div></td>
                    <td valign="top">
                    </td><td style="font-size: 65%; margin: 10px 0px 0px 0px;">
                        <p><a href="/profile/{{ $u->username }}"><strong>{{ $u->username }}</strong></a></p>
                        <p style="padding: 0px;"><img src="http://swfs.ihabbo.pw/assets/web-gallery/images/motto.gif"> {{ $u->motto }}</p>
                        <p><img src="http://swfs.ihabbo.pw/assets/web-gallery/images/login.gif">
                          {{ Carbon\Carbon::createFromTimestamp($u->last_online)->format('F d (h:m A)') }}
                         </p>
                      </td>

                    <td style="float: right;" valign="top">
                      @if($u->online == 1)
                        <img src="http://swfs.ihabbo.pw/assets/web-gallery/images/habbo_online_anim.gif"><br>
                      @else
                        <img src="http://swfs.ihabbo.pw/assets/web-gallery/images/habbo_offline.gif"><br>
                      @endif
                      <img src="http://swfs.ihabbo.pw/assets/web-gallery/flags/{{ $u->country }}.png">
                    </td>
                  </tr>
                @endif
              @endforeach
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
@endforeach
</div>

<div id="column2" class="column">
  <div class="habblet-container">
    <div class="cbb clearfix blue">
      <h2 class="title">About</h2>
      <div class="box-content">
        <p>
          <b>Overview:</b> <br>
          The staff are in charge of keeping the hotel running properly, and secured from threats that could harm our users.  An example of the specific tasks assigned to each rank are shown below.
          <br><br>
          <b>Founders:</b> <br>
          These guys are the big dogs, they were the original founding members of the site and are in charge of managing the funding, organizing our hotel, and keeping the staff team in check.
          <br><br>
          <b>Developers:</b> <br>
          Our development team strives to keep the hotel running quickly, but securely.  They code the core parts of our services such as the site itself, all the way to our customized emulator (client).
          <br><br>
          <b>User Management</b> <br>
          These staff members are in charge of addressing issues relating to our users.  Whether it's harassment, scamming, or anything that correlates to that, they'll always be there to assist you!
        </p>
        <p>
          <b>Developers Journal:</b>
          Click <a href="/community/development">here</a>
        </p>
      </div>
    </div>
  </div>
  <script type="text/javascript">if (!$(document.body).hasClassName('process-template')) { Rounder.init(); }</script>
</div>
