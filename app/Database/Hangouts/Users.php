<?php
namespace App\Database\Hangouts;

use Eloquent;

class Users extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_users';
  public    $timestamps = false;
  protected $fillable   = array();
}
