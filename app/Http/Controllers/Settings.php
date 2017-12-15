<?php
namespace App\Http\Controllers;

use Auth;
use Redirect;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class Settings extends Controller {

  public function getPreferences() {
    return view('settings')
      ->withPage('Preferences')
      ->withUnique('Account Settings')
      ->withSection(1);
  }

  public function showCountries() {
    return view('countries')
      ->withPage('Country Flags')
      ->withUnique('Account Settings')
      ->withSection(1);
    }

  public function updatePreferences(Request $r) {
    $validator = Validator::make($r->all(), [
        'motto'             => 'required',
        'country'           => 'required',
        'youtube'           => 'required',
     ]);
     if ($validator->fails()) {
       return Redirect::back()->withMessage('Oh no, you did something wrong..')->withStatus('red');
     }

     $user                    = Auth::user();
     $user->motto             = $r->motto;
     if($r->block_newfriends == false) {
       $user->block_newfriends  = 1;
     } else {
        $user->block_newfriends  = 0;
      }
      if ($r->trading_locked == false) {
        $user->trading_locked   = 1;
      } else {
        $user->trading_locked   = 0;
      }
     $user->country           = $r->country;
     $user->youtube           = $r->youtube;
     $user->save();
     return Redirect::back()->withMessage('Your changes have been applied!')->withStatus('green');
  }

  public function getEmail() {
    return view('settings')
      ->withPage('My Email')
      ->withUnique('Account Settings')
      ->withSection(1);
  }

  public function updateEmail(Request $r) {
    $validator = Validator::make($r->all(), [
        'mail'             => 'required|email',
     ]);
     if ($validator->fails()) {
       return Redirect::back()->withMessage('Oh no, you did something wrong..')->withStatus('red');
     }

     $user        = Auth::user();
     $user->mail  = $r->mail;
     $user->save();
     return Redirect::back()->withMessage('Email has been updated successfully!')->withStatus('green');
  }

  public function getSecurity() {
    return view('settings')
      ->withPage('My Password')
      ->withUnique('Account Settings')
      ->withSection(1);
  }

  public function updateSecurity(Request $r) {
    $validator = Validator::make($r->all(), [
        'old_password'         => 'required',
        'password'             => 'required|confirmed',
     ]);
     if ($validator->fails()) {
       return Redirect::back()->withMessage('Oh no, you did something wrong..')->withStatus('red');
     }

     if (Hash::check($r->old_password, Auth::user()->password)) {
       $user           = Auth::user();
       $user->password  = $r->password;
       $user->save();
       return Redirect::back()->withMessage('Password has been updated successfully!')->withStatus('green');
     } else {
       return Redirect::back()->withMessage('Failed to authorize!  Invalid Password')->withStatus('red');
     }
  }
}
?>
