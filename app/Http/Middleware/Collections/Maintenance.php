<?php
namespace App\Http\Middleware\Collections;

use Auth;
use Closure;
use Request;
use App\Database\Website\Config;

class Maintenance
{

  public function handle($request, Closure $next) {
    $config = Config::first();
    if ($config->maintenance == 1) {
      die(view('errors.maintenance')->withWebsite($config->website_name)->withReason($config->maintenance_reason));
    } else {
      return $next($request);
    }
  }

}
?>
