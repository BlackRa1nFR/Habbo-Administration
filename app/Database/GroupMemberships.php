<?php
namespace App\Database;

use Eloquent;

class GroupMemberships extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'group_memberships';
  public $timestamps = false;
  protected $fillable = array();

  public function parent() {
    return $this->hasOne('App\Database\Groups', 'id', 'group_id');
  }

  public function user() {
    return $this->hasOne('App\Database\User', 'id', 'user_id');
  }

}
