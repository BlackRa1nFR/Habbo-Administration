<?php
namespace App\Database\Hangouts;

use Eloquent;

class Replies extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_replies';
  public $timestamps    = true;
  protected $fillable   = array();

  public function author() {
    return $this->hasOne('App\Database\User\Player', 'id', 'author');
  }

  public function preparePublic($value) {
    $value = strip_tags($value, '<div>');
    $value = strip_tags($value, '</div>');
    /* Trending Topics */
    foreach(Trending::get() as $t) {
      $value = str_replace($t->title, '<a href="/hangouts/trending/'.$t->title.'">'.$t->title.'</a>', $value);
    }

    /* Hashtags */
    if (preg_match_all('/(^|\s)(#\w+)/', $value, $hashtag) > 0) {
      foreach ($hashtag[2] as $h) {
        if (preg_match('/#\d*[a-z_]+/i', $h)) {
          $value = str_replace($h, '<a href="/hangouts/trending/'.substr($h, 1).'">'.$h.'</a>', $value);
        }
      }
    }
    /* Tagging Users */
    return preg_replace("/@([A-Za-z0-9\/\.]*)/", "<a href=\"/profile/$1\">@$1</a>", $value);  }

}
