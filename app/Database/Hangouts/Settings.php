<?php
namespace App\Database\Hangouts;

use Eloquent;

class Settings extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_settings';
  public    $timestamps = false;
  protected $fillable   = array();

}
