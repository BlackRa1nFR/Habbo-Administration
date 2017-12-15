<?php
namespace App\Http\Middleware\Collections;

use Auth;
use Closure;
use Request;

class Footer
{

  public function handle($request, Closure $next) {
    $response = $next($request);
    if (Auth::check()) {
      echo '';
    }
    return $response;
  }

}
?>
