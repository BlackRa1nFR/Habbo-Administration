<?php
namespace App\Database\Groups;

use Eloquent;

class Discussion extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'group_discussions';
  public $timestamps    = true;
  protected $fillable   = array();

  public function author() {
    return $this->hasMany('App\Database\User\Player', 'id', 'author');
  }

  public function replies() {
    return $this->hasMany('App\Database\Groups\Replies', 'topic', 'id');
  }


}
