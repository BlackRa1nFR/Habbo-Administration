<?php
namespace App\Database;

use Eloquent;

class Rooms extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'rooms';
  public $timestamps = false;
  protected $fillable = array();

}
