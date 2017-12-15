<?php
namespace App\Http\Controllers;

use Auth;
use Redirect;
use Illuminate\Http\Request;
use App\Database\Groups\Group;
use Illuminate\Routing\Controller;
use App\Database\Groups\Discussion;
use App\Database\Groups\Memberships;
use App\Database\Groups\Applications;

class Groups extends Controller {

  public function getHome() {
    $group = Group::first();
    return view('groups-view')
      ->withPage('Viewing Group')
      ->withUnique('Home')
      ->withSection(3)
      ->withGroup($group);
  }

  public function getPersonal() {
    $user = Auth::user();
    return view('groups-personal')
      ->withPage('My Groups')
      ->withUnique('My Groups')
      ->withSection(3)
      ->withGroups($user->groups()->get());
  }

  public function getGroup($group) {
      if (Group::where('id', $group)->count() == 1) {
        $group = Group::where('id', $group)->first();
      } else {
        return Redirect::back();
      }
      return view('groups-view')
        ->withPage('Viewing Group')
        ->withUnique('Home')
        ->withSection(3)
        ->withGroup($group);
  }

  public function getForum($group) {
      if (Group::where('id', $group)->count() == 1) {
        $group = Group::where('id', $group)->first();
      } else {
        return Redirect::back();
      }
      return view('groups-forum')
        ->withPage('Group Discussion')
        ->withUnique('Home')
        ->withSection(3)
        ->withGroup($group);
  }

  public function getTopic($group, $article) {
    if (Group::where('id', $group)->count() == 1) {
      if (Discussion::where('id', $article)->count() == 1) {
        $group = Group::where('id', $group)->first();
        $article = Discussion::where('id', $article)->first();

        $article->views = $article->views + 1;
        $article->save();
        return view('groups-post')
          ->withPage('Group Discussion')
          ->withUnique('Home')
          ->withSection(3)
          ->withGroup($group)
          ->withTopic($article);
      } else {
        return Redirect::back();
      }
    } else {
      return Redirect::back();
    }
  }


  public function sendJoin($group) {
    if (Group::where('id', $group)->count() == 1) {
      $requests             = new Applications();
      $requests->user_id    = Auth::user()->id;
      $requests->group_id   = $group;
      $requests->save();
    }
    return Redirect::back();
  }

  public function sendLeave($group) {
    if(Auth::user()->groups()->where('group_id', $group)->count() == 1) {
      if (Group::where('id', $group)->where('owner_id', Auth::user()->id)->count() == 0) {
        Auth::user()->groups()->where('group_id', $group)->delete();
      } else {
        return Redirect::back();
      }
    }
    return Redirect::back();
  }

  public function sendFavorite($group) {
    if (Auth::user()->groups()->where('group_id', $group)->count() == 1) {
      $stats          = Auth::user()->stats()->first();
      $stats->groupid = $group;
      $stats->save();
    }
    return Redirect::back();
  }

  public function sendUnfavorite($group) {
    $stats          = Auth::user()->stats()->first();
    $stats->groupid = 0;
    $stats->save();
    return Redirect::back();
  }

  public function kickMember($group, $user) {
    if(Auth::user()->groups()->where('group_id', $group)->count() == 1) {
      Memberships::where('id', $user)->delete();
    }
    return Redirect::back();
  }

  public function acceptMember($group, $user) {
    if (Auth::user()->groups()->where('group_id', $group)->count() == 1) {
      Applications::where('group_id', $group)->where('user_id', $user)->delete();
      $membership           = new Memberships();
      $membership->group_id = $group;
      $membership->user_id  = $user;
      $membership->save();
    }
    return Redirect::back();
  }
}
?>
