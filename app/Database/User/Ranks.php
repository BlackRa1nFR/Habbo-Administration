<?php
namespace App\Database\User;

use Eloquent;

class Ranks extends Eloquent
{
  protected $primaryKey = null;
  protected $table = 'ranks';
  public $timestamps = false;
  protected $fillable = array();

}
