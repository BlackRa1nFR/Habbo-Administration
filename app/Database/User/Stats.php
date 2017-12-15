<?php
namespace App\Database\User;

use Eloquent;

class Stats extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'user_stats';
  public $timestamps    = false;
  protected $fillable   = array();

}
