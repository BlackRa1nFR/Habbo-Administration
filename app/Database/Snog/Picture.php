<?php
namespace App\Database\Snog;

use Eloquent;

class Picture extends Eloquent {
  protected $primaryKey = 'id';
  protected $table      = 'snog_pictures';
  public $timestamps    = true;
  protected $fillable   = array();

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user');
  }
}
