<?php
namespace App\Database\Snog;

use Eloquent;

class Status extends Eloquent {
  protected $primaryKey = 'id';
  protected $table      = 'snog_statuses';
  public $timestamps    = true;
  protected $fillable   = array();

  public function target() {
    return $this->hasOne('App\Database\User\Player', 'id', 'target');
  }

  public function user() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user');
  }

}
