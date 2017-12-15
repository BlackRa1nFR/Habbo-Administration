<?php
namespace App\Http\Controllers;

use Auth;
use Redirect;
use App\Database\User;
use App\Database\Config;
use App\Database\Server;
use App\Database\Navigator;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class Profile extends Controller {

  public function getUser($user) {

    if (User::where('username', $user)->count() == 1) {
      $profile = User::where('username', $user)->first();
      return view('profile')
        ->withPage(Auth::user()->username)
        ->withUnique('My Profile')
        ->withSection(1)
        ->withWebsite(Config::value('website_name'))
        ->withOnline(Server::value('users_online'))
        ->withNavigator(Navigator::get())
        ->withProfile($profile)
        ->withGroups($profile->groups()->get())
        ->withRooms($profile->rooms()->get())
        ->withBadges($profile->badges()->get());
      } else {
        return Redirect::to('/profile/'.Auth::user()->username);
      }
  }
}
?>
