<?php
namespace App\Database;

use Eloquent;

class Groups extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'groups';
  public $timestamps = false;
  protected $fillable = array();

  public function members() {
    return $this->hasMany('App\Database\GroupMemberships', 'group_id', 'id');
  }

  public function discussion() {
    return $this->hasMany('App\Database\Groups\Discussion', 'group', 'id');
  }

}
