<?php
namespace App\Http\Controllers;

use DB;
use App\Database\User\Ranks;
use Illuminate\Http\Request;
use App\Database\User\Player;
use App\Database\Groups\Group;
use App\Database\Website\News;
use Illuminate\Routing\Controller;

class Community extends Controller {

  public function getPage() {
    return view('community')
      ->withPage('Community')
      ->withUnique('Community')
      ->withSection(2)
      ->withGroups(Group::orderBy(DB::raw('RAND()'))->limit(4)->get())
      ->withNews(News::get());
  }

  public function getTeam() {
    return view('staff')
      ->withPage('Staff Team')
      ->withUnique('Staff Team')
      ->withSection(2)
      ->withRanks(Ranks::where('id', '>', 5)->orderBy('id', 'DESC')->get())
      ->withStaff(Player::where('rank', '>', 5)->get());
  }

  public function getTags() {
    return view('tags')
      ->withPage('Community')
      ->withUnique('Tags')
      ->withSection(2);
    }

  public function getDev() {
    return view('development')
      ->withPage('Development Build')
      ->withUnique('Development')
      ->withSection(2);
  }
}
?>
