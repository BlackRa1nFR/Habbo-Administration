<?php
namespace App\Database\User;

use Eloquent;

class Friends extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'messenger_friendships';
  public $timestamps    = false;
  protected $fillable   = array();

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user_two_id');
  }

}
