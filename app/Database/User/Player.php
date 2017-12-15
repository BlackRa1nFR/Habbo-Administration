<?php
namespace App\Database\User;

use DB;
use Auth;
use Hash;
use Eloquent;
use \Illuminate\Auth\Authenticatable;
use \Illuminate\Contracts\Auth\Authenticatable as Authentication;

class Player extends Eloquent implements Authentication
{
  use Authenticatable;
  protected $primaryKey = 'id';
  protected $table = 'users';
  public $timestamps = false;
  protected $fillable = array();

  public function setPasswordAttribute($value) {
    $this->attributes['password'] = Hash::make($value);
  }

  public function setAttribute($key, $value)
  {
    $isRememberTokenAttribute = $key == $this->getRememberTokenName();
    if (!$isRememberTokenAttribute)
    {
      parent::setAttribute($key, $value);
    }
  }


  public function token() {
    $key = "iLoveChris-" . sha1(time() . $_SERVER["REMOTE_ADDR"]);
    Player::where('id', Auth::user()->id)->update(array('auth_ticket' => $key));
    return Player::where('id', Auth::user()->id)->value('auth_ticket');
   }

   public function badges() {
     return $this->hasMany('App\Database\User\Badges', 'user_id', 'id');
   }

   public function friends() {
     return $this->hasMany('App\Database\User\Friends', 'user_one_id', 'id');
  }

   public function groups() {
     return $this->hasMany('App\Database\Groups\Memberships', 'user_id', 'id');
   }

   public function groupRequests() {
     return $this->hasMany('App\Database\Groups\Applications', 'user_id', 'id');
   }

   public function rooms() {
     return $this->hasMany('App\Database\User\Rooms', 'owner', 'id');
   }

   public function posts() {
     return $this->hasMany('App\Database\Hangouts\Posts', 'author', 'id');
   }

   public function stats() {
     return $this->hasOne('App\Database\User\Stats', 'id', 'id');
   }

   public function reports() {
     return $this->hasMany('App\Database\Hangouts\Reports', 'reporter', 'id');
   }

   public function hangouts() {
     return $this->hasOne('App\Database\Hangouts\Users', 'user', 'id');
   }

   public function warnings() {
     return $this->hasMany('App\Database\Hangouts\Reports', 'user', 'id');
   }

   public function hangoutNotifications() {
     return $this->hasMany('App\Database\Hangouts\Notifications', 'user', 'id');
   }

   public function snogStatus() {
     return $this->hasMany('App\Database\Snog\Status', 'target', 'id');
   }

   public function snogUploads() {
     return $this->hasMany('App\Database\Snog\Picture', 'user', 'id');
   }

   public function snogFollowed() {
     return $this->hasMany('App\Database\Snog\Follow', 'user', 'id');
   }

   public function snogFollowers() {
     return $this->hasMany('App\Database\Snog\Follow', 'target', 'id');
   }

   public function rank() {
     return $this->hasOne('App\Database\User\Ranks', 'id', 'rank');
   }





}
