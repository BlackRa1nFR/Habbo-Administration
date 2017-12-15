<?php
namespace App\Database\Hangouts;

use BBCode;
use Eloquent;
use App\Database\Hangouts\Hashtags;

class Posts extends Eloquent
{
  protected $primaryKey = 'id';
  protected $table      = 'hangouts_posts';
  public $timestamps    = true;
  protected $fillable   = array();

  public static function preparePublic($value) {
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
          if(Hashtags::where('value', substr($h, 1))->count() == 0) {
            $hashtag        = new Hashtags();
            $hashtag->value = substr($h, 1);
            $hashtag->count = 1;
            $hashtag->save();
          } else {
            $hashtag = Hashtags::where('value', substr($h, 1))->first();
            $hashtag->count++;
            $hashtag->save();
          }
          $value = str_replace($h, '<a href="/hangouts/trending/'.substr($h, 1).'">'.$h.'</a>', $value);
        }
      }
    }
    /* Tagging Users */
    $value = preg_replace("/@([A-Za-z0-9\/\.]*)/", "<a href=\"/profile/$1\">@$1</a>", $value);
    return BBCode::parse($value);
  }

  public function author() {
    return $this->hasOne('App\Database\User\Player', 'id', 'author');
  }

  public function replies() {
    return $this->hasMany('App\Database\Hangouts\Replies', 'article', 'id');
  }

  public function likes() {
    return $this->hasMany('App\Database\Hangouts\Likes', 'post', 'id');
  }

}
