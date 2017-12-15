<?php
namespace App\Database\Snog;

use Eloquent;

class Reply extends Eloquent {
  protected $primaryKey = 'id';
  protected $table      = 'snog_replies';
  public $timestamps    = true;
  protected $fillable   = array();

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user');
  }
}
