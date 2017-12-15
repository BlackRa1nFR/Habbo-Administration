<?php
namespace App\Database\Groups;

use Eloquent;

class Group extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'groups';
  public $timestamps    = false;
  protected $fillable   = array();

  public function members() {
    return $this->hasMany('App\Database\Groups\Memberships', 'group_id', 'id');
  }

  public function discussion() {
    return $this->hasMany('App\Database\Groups\Discussion', 'group', 'id');
  }

  public function requests() {
    return $this->hasMany('App\Database\Groups\Applications', 'group_id', 'id');
  }

}
