<?php
namespace App\Database\Groups;

use Eloquent;

class Applications extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'group_requests';
  public $timestamps    = false;
  protected $fillable   = array();

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user_id');
  }

}
