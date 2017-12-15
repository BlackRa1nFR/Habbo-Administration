<?php
namespace App\Database\Bots;

use Eloquent;

class Bot extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'bots';
  public $timestamps = false;
  protected $fillable = array('user_id', 'room_id');

}
