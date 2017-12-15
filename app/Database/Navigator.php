<?php
namespace App\Database;

use Eloquent;

class Navigator extends Eloquent
{
  protected $primaryKey = null;
  protected $table = 'cms_navigation';
  public $timestamps = false;
  protected $fillable = array();

}
