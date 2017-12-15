<?php
namespace App\Database;

use Eloquent;

class Config extends Eloquent
{
  protected $primaryKey = null;
  protected $table = 'cms_settings';
  public $timestamps = false;
  protected $fillable = array();

}
