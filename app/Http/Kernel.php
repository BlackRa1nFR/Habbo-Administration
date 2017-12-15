<?php
namespace App\Http;
use Illuminate\Foundation\Http\Kernel as HttpKernel;
class Kernel extends HttpKernel {

	protected $middleware = [
		'App\Http\Middleware\Collections\Maintenance',
		'Illuminate\Cookie\Middleware\EncryptCookies',
		'Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse',
		'Illuminate\Session\Middleware\StartSession',
		'Illuminate\View\Middleware\ShareErrorsFromSession',
		'App\Http\Middleware\VerifyCsrfToken',
		'App\Http\Middleware\RedirectIfNull',
		'App\Http\Middleware\Collections\Bans',
		'App\Http\Middleware\Collections\Footer',
	];

	protected $middlewareGroups = [
		'web' => [
				\App\Http\Middleware\EncryptCookies::class,
				\Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
				\Illuminate\Session\Middleware\StartSession::class,
				\Illuminate\View\Middleware\ShareErrorsFromSession::class,
				\App\Http\Middleware\VerifyCsrfToken::class,
		],
		'api' => [
				'throttle:60,1',
		],
];

	protected $routeMiddleware = [
		'guest' => 'App\Http\Middleware\Session\Guest',
		'user' => 'App\Http\Middleware\Session\User',
	];

}
