<?php
namespace App\Database\Hangouts;

use Eloquent;

class Likes extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_likes';
  public    $timestamps = false;
  protected $fillable   = array();

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user');
  }

}
