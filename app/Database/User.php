<?php
namespace App\Database;

use DB;
use Auth;
use Hash;
use Eloquent;
use \Illuminate\Auth\Authenticatable;
use \Illuminate\Contracts\Auth\Authenticatable as Authentication;

class User extends Eloquent implements Authentication
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
    User::where('id', Auth::user()->id)->update(array('auth_ticket' => $key));
    return User::where('id', Auth::user()->id)->value('auth_ticket');
   }

   public function badges() {
     return $this->hasMany('App\Database\Badges', 'user_id', 'id');
   }

   public function groups() {
     return $this->hasMany('App\Database\GroupMemberships', 'user_id', 'id');
   }

   public function rooms() {
     return $this->hasMany('App\Database\Rooms', 'owner', 'id');
   }

   public function posts() {
     return $this->hasMany('App\Database\Hangouts\Posts', 'author', 'id');
   }

   public function stats() {
     return $this->hasOne('App\Database\User\Stats', 'id', 'id');
   }





}
