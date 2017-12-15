<?php
namespace App\Http\Controllers;

use Auth;
use Redirect;
use Validator;
use App\Database\Config;
use App\Database\Server;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class Login extends Controller {

  public function getPage() {
    return view('index');
  }

  public function getAlt() {
    return view('login');
  }

  public function doLogin(Request $r) {
    $validator = Validator::make($r->all(), [
      'username' => 'required|alpha_dash|exists:users',
      'password' => 'required',
    ]);
    if ($validator->fails()) {
      return Redirect::to('/index')->withMessage('We couldn\'t find that user in our database!');
    } else {
      if (!Auth::attempt(array('username' => $r->input('username'), 'password' => $r->input('password'))))
      {
        return Redirect::to('/index')->withMessage('Wrong Password');
      }
    }
    return Redirect::back();
  }

}
