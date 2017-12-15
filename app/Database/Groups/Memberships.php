<?php
namespace App\Database\Groups;

use Eloquent;

class Memberships extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'group_memberships';
  public $timestamps    = false;
  protected $fillable   = array();

  public function parent() {
    return $this->hasOne('App\Database\Groups\Group', 'id', 'group_id');
  }

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user_id');
  }

}
