<?php
namespace App\Http\Controllers;

use Auth;
use Redirect;
use Illuminate\Http\Request;
use App\Database\User\Player;
use Illuminate\Routing\Controller;

class Users extends Controller {

  public function getProfile($user) {

    if (Player::where('username', $user)->count() == 1) {
      $profile = Player::where('username', $user)->first();
      return view('profile')
        ->withPage($profile->username)
        ->withUnique('My Profile')
        ->withSection(1)
        ->withProfile($profile)
        ->withGroups($profile->groups()->get())
        ->withRooms($profile->rooms()->get())
        ->withBadges($profile->badges()->get())
        ->withPosts($profile->posts()->orderBy('id', 'DESC')->get());
      } else {
        return Redirect::to('/profile/'.Auth::user()->username);
      }
  }


  public function getOnline() {
    return view('online')
      ->withPage('Online Users')
      ->withUnique('Online Users')
      ->withSection(2)
      ->withPlayers(Player::where('online', 1)->get());
  }

  public function getTop() {
    return view('leaderboards')
      ->withPage('Top Users')
      ->withUnique('Top Users')
      ->withSection(2)
      ->withCredits(Player::orderBy('credits', 'DESC')->where('rank', '<', 5)->limit(5)->get())
      ->withPixels(Player::orderBy('activity_points', 'DESC')->where('rank', '<', 5)->limit(5)->get())
      ->withDiamonds(Player::orderBy('vip_points', 'DESC')->where('rank', '<', 5)->limit(5)->get());
  }

  public function playGame() {
    return view('play')
      ->withDaddy(Auth::user()->token());
  }
}
?>
