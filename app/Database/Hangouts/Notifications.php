<?php
namespace App\Database\Hangouts;

use Eloquent;

class Notifications extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_notifications';
  public $timestamps    = true;
  protected $fillable   = array();
}
