<?php
namespace App\Database\User;

use Eloquent;

class Items extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table = 'items';
  public $timestamps = false;
  protected $fillable = array('user_id', 'room_id');

}
