<?php
namespace App\Database\User;

use Eloquent;

class Bans extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'bans';
  public $timestamps = false;
  protected $fillable = array();

}
