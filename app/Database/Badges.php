<?php
namespace App\Database;

use Eloquent;

class Badges extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'user_badges';
  public $timestamps = false;
  protected $fillable = array();

}
