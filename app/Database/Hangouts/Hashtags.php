<?php
namespace App\Database\Hangouts;

use Eloquent;

class Hashtags extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_tags';
  public    $timestamps = false;
  protected $fillable   = array();

}
