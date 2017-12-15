<?php
namespace App\Database\Hangouts;

use Eloquent;

class Trending extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_trending';
  public $timestamps    = true;
  protected $fillable   = array();

}
