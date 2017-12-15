<?php
Route::group(['middleware' => 'guest'], function() {
  Route::get('/index',        'Login@getPage');
  Route::post('/index',       'Login@doLogin');
  Route::get('/login',        'Login@getAlt');
  Route::get('/register',     'Register@getPage');
  Route::post('/register',    'Register@doReg');
  Route::get('/quickregister','Register@getAlt');
});

Route::group(['middleware' => 'user'], function() {
  Route::get('/me',             'Home@getPage');
  Route::get('/profile/{user}', 'Users@getProfile');
  Route::get('/play',           'Users@playGame');
  Route::get('/logout',          function() { Auth::logout(); return Redirect::to('/index'); });
});

Route::group(['middleware' => 'user', 'prefix' => '/settings'], function() {
  Route::get('/',               'Settings@getPreferences');
  Route::get('/preferences',    'Settings@getPreferences');
  Route::post('/preferences',   'Settings@updatePreferences');
  Route::get('/email',          'Settings@getEmail');
  Route::post('/email',         'Settings@updateEmail');
  Route::get('/password',       'Settings@getSecurity');
  Route::post('/password',      'Settings@updateSecurity');
  Route::get('/countries/list', 'Settings@showCountries');

});

Route::group(['middleware' => 'user', 'prefix' => '/community'], function() {
  Route::get('/',                  'Community@getPage');
  Route::get('news',               'News@getArticles');
  Route::get('news/{title}/{id}',  'News@readArticle');
  Route::get('staff',              'Community@getTeam');
  Route::get('leaderboards',       'Users@getTop');
  Route::get('online',             'Users@getOnline');
  Route::get('tags',               'Community@getTags');
  Route::get('development',        'Community@getDev');
});

Route::group(['middleware' => 'user', 'prefix' => '/groups'], function() {
  Route::get('/home',                   'Groups@getHome');
  Route::get('/personal',               'Groups@getPersonal');
  Route::get('/{id}',                   'Groups@getGroup');
  Route::get('/{id}/discussion',        'Groups@getForum');
  Route::get('/{id}/discussion/{topic}','Groups@getTopic');
  Route::group(['prefix' => '/actions'], function() {
    Route::get('join/{id}',                   'Groups@sendJoin');
    Route::get('leave/{id}',                  'Groups@sendLeave');
    Route::get('favorite/{id}',               'Groups@sendFavorite');
    Route::get('unfavorite/{id}',             'Groups@sendUnfavorite');
    Route::get('kick/{group}/{user}',         'Groups@kickMember');
    Route::get('accept/{group}/{user}',       'Groups@acceptMember');
  });
});

Route::group(['middleware' => 'user', 'prefix' => '/hangouts'], function() {
  Route::get('home',               'Hangouts@getTimeline');
  Route::post('home',              'Hangouts@addTimeline');
  Route::get('support/bbcode' ,    'Hangouts@getSupport');
  Route::get('trending',           'Hangouts@getTrending');
  Route::get('trending/{topic}',   'Hangouts@getTrending');
  Route::get('post/{post}',        'Hangouts@getPost');
  Route::post('action/report',     'Hangouts@fileReport');
  Route::post('action/comment',    'Hangouts@createReply');
  Route::get('action/like/{id}',   'Hangouts@handleLike');
  Route::get('action/delete/{id}', 'Hangouts@deletePost');
  Route::get('action/ban/{id}',    'Hangouts@banUser');

});

Route::group(['middleware' => 'user', 'prefix' => '/snog'], function() {
  Route::get('home',               'Snog@getHome');
  Route::get('settings',           'Snog@getSettings');
  Route::post('settings',          'Snog@updateBio');
  Route::post('settings/pic',      'Snog@uploadPicture');
  Route::post('settings/bg',       'Snog@uploadBackground');
  Route::get('profile/{user}',     'Snog@getProfile');
  Route::post('actions/submit',    'Snog@sendAction');
  Route::get('follow/{user}',      'Snog@sendFollow');
  Route::get('unfollow/{user}',      'Snog@deleteFollow');
});

Route::group(['middleware' => 'user', 'prefix' => '/store'], function() {
  Route::get('/home',              'Store@getHome');
});

?>
