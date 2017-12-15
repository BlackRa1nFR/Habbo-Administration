<?php
namespace App\Database\Bots;

use Eloquent;

class Sayings extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'bots_speech';
  public $timestamps = false;
  protected $fillable = array('bot_id');

}
