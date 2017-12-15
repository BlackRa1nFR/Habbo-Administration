<?php
namespace App\Database;

use Eloquent;

class News extends Eloquent
{
  protected $primaryKey = null;
  protected $table      = 'cms_news';
  public $timestamps    = true;
  protected $fillable   = array();

  public function author() {
    return $this->hasOne('App\Database\User', 'id', 'author');
  }

}
