<?php
namespace App\Http\Middleware\Collections;

use Auth;
use Closure;
use Request;
use Redirect;
use App\Database\User\Bans as Ban;

class Bans
{

  public function handle($request, Closure $next) {
    if(isset($_SERVER["HTTP_CF_CONNECTING_IP"])) {
      if (Ban::where('value', $_SERVER["HTTP_CF_CONNECTING_IP"])->count() == 1) {
        die(view('errors.banned')->withBan(Ban::where('value', $_SERVER["HTTP_CF_CONNECTING_IP"])->first()));
      }
    } else {
      if (Ban::where('value', Request::ip())->count() == 1) {
        die(view('errors.banned')->withBan(Ban::where('value', Request::ip())->first()));
      }
    }

    /* User Ban */
    if (Auth::check()) {
      if (Ban::where('value', Auth::user()->username)->count() == 1) {
        die(view('errors.banned')->withBan(Ban::where('value', Auth::user()->username)->first()));
      } else {
        return $next($request);
      }
    } else {
      return $next($request);
    }
  }

}
?>
