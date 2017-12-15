<?php
namespace App\Http\Middleware\Session;

use Auth;
use View;
use Closure;
use Redirect;
use App\Database\Server;
use App\Database\Website\Config;

class Guest
{

  public function handle($request, Closure $next) {
    if (Auth::check()) {
      return Redirect::to('/me');
    } else {
      $website    = Config::value('website_name');
      $online     = Server::value('users_online');
      View::share('website', $website);
      View::share('online', $online);
      return $next($request);
    }
  }
}
?>
