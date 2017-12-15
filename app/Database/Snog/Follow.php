<?php
namespace App\Database\Snog;

use Eloquent;

class Follow extends Eloquent {
  protected $primaryKey = 'id';
  protected $table      = 'snog_follows';
  public $timestamps    = true;
  protected $fillable   = array('target');

  public function target() {
    return $this->hasOne('App\Database\User\Player', 'id', 'target');
  }

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user');
  }
}
