<?php
namespace App\Http\Controllers;

use App\Database\User;
use App\Database\Ranks;
use App\Database\Config;
use App\Database\Server;
use App\Database\Navigator;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class Staff extends Controller {

  public function getTeam() {
    return view('staff')
      ->withPage('Staff Team')
      ->withUnique('Staff Team')
      ->withSection(2)
      ->withWebsite(Config::value('website_name'))
      ->withOnline(Server::value('users_online'))
      ->withNavigator(Navigator::get())
      ->withRanks(Ranks::where('id', '>', 5)->orderBy('id', 'DESC')->get())
      ->withStaff(User::where('rank', '>', 5)->get());
  }
}
?>
