<?php
namespace App\Database\Hangouts;

use Eloquent;

class Reports extends Eloquent {

  protected $primaryKey = 'id';
  protected $table      = 'hangouts_reports';
  public $timestamps    = true;
  protected $fillable   = array();

  public function plaintiff() {
    return $this->hasOne('App\Database\User\Player', 'id', 'user');
  }

  public function defendant() {
    return $this->hasOne('App\Database\User\Player', 'id', 'reporter');
  }

  public function report() {
    return $this->hasOne('App\Database\Hangouts\Posts', 'id', 'post');
  }

}
