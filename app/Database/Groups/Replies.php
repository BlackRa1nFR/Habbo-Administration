<?php
namespace App\Database\Groups;

use Eloquent;

class Replies extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'group_discussion_replies';
  public $timestamps    = true;
  protected $fillable   = array();

  public function author() {
    return $this->hasMany('App\Database\User\Player', 'id', 'author');
  }


}
