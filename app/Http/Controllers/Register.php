<?php
namespace App\Http\Controllers;

use Auth;
use Redirect;
use Validator;
use Request as Spy;
use App\Database\Config;
use App\Database\Server;
use App\Database\Bots\Bot;
use Illuminate\Http\Request;
use App\Database\User\Items;
use App\Database\User\Rooms;
use App\Database\User\Player;
use App\Database\Bots\Sayings;
use Illuminate\Routing\Controller;

class Register extends Controller {

  public function getPage() {
    /* Ensure user doesn't have multiple accounts surpassing 2 */
    if (Player::where('ip_last', Spy::ip())->count() < 2 && Player::where('ip_reg', Spy::ip()->count() < 2)) {
      return view('register');
    } else {
      return Redirect::to('index')->withMessage('You already reached the max number of accounts allowed!');
    }
  }

  public function getAlt() {
    return view('quickregister');
  }

  public function doReg(Request $r) {
    $validator = Validator::make($r->all(), [
      'username' => 'required|alpha_num|between:2,12',
      'password' => 'required|confirmed',
      'mail'     => 'required|email'
    ]);
    if ($validator->fails()) {
      return Redirect::to('/register')->withMessage('Oh no, you did something wrong..');
    }

    /* Check username */
    if (Player::where('username', $r->username)->count() == 1) {
      return Redirect::to('/register')->withMessage('That username is in use!');
    }

    /* Check Email */
    if (Player::where('mail', $r->mail)->count() == 1) {
      return Redirect::to('/register')->withMessage('That email address is being used!');
    }


    /* Create User */
    $user                    = new Player();
    $user->username          = $r->username;
    $user->password          = $r->password;
    $user->auth_ticket       = 'Daddy, where\'s mommy?';
    $user->mail              = $r->mail;
    $user->motto             = 'Hey!  I\'m new to iHabbo!';
    $user->look              = 'wa-2009-1205.sh-3419-1408-1193.lg-3391-1193-1193.ch-225-62.hr-3090-1028.ha-1026-62.hd-180-2';
    $user->credits           = 50000;
    $user->activity_points   = 25000;
    $user->vip_points        = 20;
    $user->ip_last           = Spy::ip();
    $user->ip_reg            = Spy::ip();
    $user->account_created   = time();
    $user->save();

    /* Create Intro Room */
    $room               = new Rooms;
    $room->caption      = $user->username.'\'s Room';
    $room->owner        = $user->id;
    $room->description  = $user->username.'\'s Room';
    $room->category     = 29;
    $room->state        = 'open';
    $room->model_name   = 'model_b';
    $room->save();
    /* Put Furniture In Room */
    Items::create(['user_id' => $user->id, 'room_id' => $room->id, 'base_item' => 126, 'x' => 5, 'y' => 3, 'rot' => 0]);
    Items::create(['user_id' => $user->id, 'room_id' => $room->id, 'base_item' => 7, 'x' => 4, 'y' => 8, 'rot' => 0 ]);
    Items::create(['user_id' => $user->id, 'room_id' => $room->id, 'base_item' => 13, 'x' => 2, 'y' => 8, 'rot' => 2 ]);
    Items::create(['user_id' => $user->id, 'room_id' => $room->id, 'base_item' => 21, 'x' => 7, 'y' => 9, 'rot' => 6 ]);
    Items::create(['user_id' => $user->id, 'room_id' => $room->id, 'base_item' => 30, 'x' => 9, 'y' => 1, 'rot' => 0 ]);
    Items::create(['user_id' => $user->id, 'room_id' => $room->id, 'base_item' => 657, 'x' => 6, 'y' => 1, 'rot' => 0 ]);
    Items::create(['user_id' => $user->id, 'room_id' => $room->id, 'base_item' => 635, 'x' => 7, 'y' => 2, 'rot' => 0 ]);

    /* Put Bot In Room */
    Bot::create(['room_id' => $room->id, 'user_id' => $user->id, 'ai_type' => 'generic', 'name' => 'Brad Paisley', 'motto' => 'Singing for the fam', 'look' => 'cc-3509-110-1408.wa-2009-1205.hr-802-61.lg-3078-110.ha-1013-92.fa-1201-63.ch-3059-1325.hd-3091-1.sh-3252-1408-1408', 'x' => 8, 'y' => 6, 'walk_mode' => 'freeroam', 'speaking_interval' => 240, 'chat_bubble' => 2]);

    /* Create Bot Sentences */
    $bot = Bot::where('room_id', $room->id)->value('id');
    Sayings::create(['bot_id' => $bot, 'text' => 'Do you remember how it used to be we\'d turn out the lights and we didn\'t just sleep?']);

    /* Attempt to login user */
    $credentials = [
      'username' => $r->username,
      'password' => $r->password,
    ];
    if (Auth::attempt($credentials)) {
      return Redirect::to('/me');
    } else {
      return Redirect::back();
    }
  }

}
