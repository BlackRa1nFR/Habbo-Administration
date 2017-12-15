<?php
namespace App\Http\Controllers;

use Auth;
use File;
use Redirect;
use Validator;
use Illuminate\Http\Request;
use App\Database\Snog\Status;
use App\Database\User\Player;
use Illuminate\Routing\Controller;


class Snog extends Controller {

  public function getHome() {
    return view('snog')
      ->withPage('Snog')
      ->withUnique('Home')
      ->withSection(3);
  }

  public function getSettings() {
    return view('snog-settings')
      ->withPage('Snog Settings')
      ->withUnique('Settings')
      ->withSection(3);
  }

  public function getProfile($user) {
    if (Player::where('username', $user)->count() == 1) {
      $profile = Player::where('username', $user)->first();
      /* Make sure the fucker actually has a pic */
      if($profile->snog_picture != null) {
        return view('snog-profile')
          ->withPage('Snog @'.$profile->username)
          ->withUnique('My Profile')
          ->withSection(3)
          ->withProfile($profile)
          ->withUploads($profile->snogUploads()->orderBy('id', 'DESC')->limit(2)->get())
          ->withFollowed($profile->snogFollowed()->get())
          ->withFollowers($profile->snogFollowers()->get())
          ->withResponses($profile->snogStatus()->get());
        } else {
          return Redirect::to('/snog/home')->withMessage('This user\'s account isn\'t setup yet!')->withColor('red');
        }
      } else {
      return Redirect::to('/snog/profile/'.Auth::user()->username);
    }
  }

  public function sendAction(Request $r) {
    /* yo a user be getting horny lets handle this for them aye? */
    if (Player::where('id', $r->user)->count() == 1) {
      /* Yo let's not let a lonely nigguh spam a thot ight? */
      if (Status::where('target', $r->user)->orderBy('id', 'DESC')->value('user') != Auth::user()->id) {
        $status           = new Status;
        $status->type     = $r->type;
        $status->comment  = $r->comment;
        $status->target   = $r->user;
        $status->user     = Auth::user()->id;
        $status->save();
      }
      return Redirect::back();
    } else {
      return Redirect::to('/snog/home')->withMessage('That user does not exist!')->withColor('red');
    }
  }

  public function uploadPicture(Request $r) {
    $validator = Validator::make($r->all(), [
      'picture'   => 'required|image'
    ]);

    if ($validator->fails()) {
      return Redirect::back()->withMessage('Your file must be an image!')->withColor('red');
    }

    $picture = sha1(rand(1111, 9999)).'.'.$r->picture->getClientOriginalExtension();
    $r->picture->move('./resources/assets/snog/uploads', $picture);
    chmod('./resources/assets/snog/uploads/'.$picture.'', 0777);
    File::delete('./resources/assets/snog/uploads/'.Auth::user()->snog_picture);
    $user = Auth::user();
    $user->snog_picture = $picture;
    $user->save();
    return Redirect::back();
  }

  public function uploadBackground(Request $r) {
    $validator = Validator::make($r->all(), [
      'picture'   => 'required|image'
    ]);

    if ($validator->fails()) {
      return Redirect::back()->withMessage('Your file must be an image!')->withColor('red');
    }

    $picture = sha1(rand(1111, 9999)).'.'.$r->picture->getClientOriginalExtension();
    $r->picture->move('./resources/assets/snog/uploads', $picture);
    chmod('./resources/assets/snog/uploads/'.$picture.'', 0777);
    File::delete('./resources/assets/snog/uploads/'.Auth::user()->snog_background);
    $user = Auth::user();
    $user->snog_background = $picture;
    $user->save();
    return Redirect::back();
  }

  public function updateBio(Request $r) {
    $user           = Auth::user();
    $user->snog_bio = $r->bio;
    $user->save();
    return Redirect::back();
  }


  public function sendFollow($user) {
    if (Auth::user()->snogFollowed()->where('target', $user)->count() == 0) {
      Auth::user()->snogFollowed()->create(['target' => $user, 'user' => Auth::user()->id]);
    }
    return Redirect::back();
  }
  public function deleteFollow($user) {
    Auth::user()->snogFollowed()->where('target', $user)->delete();
    return Redirect::back();
  }

}
?>
