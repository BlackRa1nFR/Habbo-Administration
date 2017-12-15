<?php

return [

    'driver' => env('SESSION_DRIVER', 'file'),
    'lifetime' => 120,
    'expire_on_close' => false,
    'encrypt' => true,
    'files' => storage_path('framework/sessions'),
    'connection' => 'cerberus',
    'table' => 'sessions',
    'lottery' => [2, 100],
    'cookie' => 'cerberus_user',
    'path' => '/',
    'domain' => null,
    /* To be enabled. */
    'secure' => false,

];
