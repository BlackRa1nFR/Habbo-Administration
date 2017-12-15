<?php
namespace App\Http\Middleware\Session;

use Auth;
use View;
use Closure;
use Redirect;
use App\Database\Server;
use App\Database\Website\Config;
use App\Database\Website\Navigator;

class User
{

  public function handle($request, Closure $next) {
    if (Auth::check()) {
      $website    = Config::value('website_name');
      $online     = Server::value('users_online');
      $navigator  = Navigator::get();

      View::share('website', $website);
      View::share('online', $online);
      View::share('navigator', $navigator);
      View::share('user', Auth::user());
      return $next($request);
    } else {
      return Redirect::to('/index');
    }
  }
}
?>
