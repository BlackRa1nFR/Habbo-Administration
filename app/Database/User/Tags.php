<?php
namespace App\Database\User;

use Eloquent;

class Tags extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'users';
  public $timestamps    = false;
  protected $fillable   = array();





}
