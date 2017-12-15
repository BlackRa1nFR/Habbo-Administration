<?php
namespace App\Database;

use Eloquent;

class Server extends Eloquent
{
  protected $primaryKey = null;
  protected $table = 'server_status';
  public $timestamps = false;
  protected $fillable = array();

}
