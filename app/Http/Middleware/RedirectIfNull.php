<?php
namespace App\Http\Middleware;

use Auth;
use Redirect;
use Closure;

class RedirectIfNull
{

  public function handle($request, Closure $next) {
    if ($request->path() == '/') {
      if (Auth::check()) {
        return Redirect::to('/me');
      } else {
        return Redirect::to('/index');
      }
    } else {
      return $next($request);
    }
  }
}
?>
