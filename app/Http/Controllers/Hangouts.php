<?php
namespace App\Http\Controllers;

use Auth;
use Redirect;
use Validator;
use Illuminate\Http\Request;
use App\Database\Hangouts\Users;
use App\Database\Hangouts\Likes;
use App\Database\Hangouts\Posts;
use App\Database\Hangouts\Reports;
use App\Database\Hangouts\Replies;
use Illuminate\Routing\Controller;
use App\Database\Hangouts\Hashtags;
use App\Database\Hangouts\Settings;
use App\Database\Hangouts\Trending;
use App\Database\Hangouts\Notifications;
class Hangouts extends Controller {


  public function getTimeline() {
    Auth::user()->hangoutNotifications()->delete();
    return view('hangouts')
      ->withPage('Hangouts Timeline')
      ->withUnique('Timeline')
      ->withSection(23)
      ->withTimeline(Posts::orderBy('id', 'DESC')->paginate(10))
      ->withTotal(Posts::count())
      ->withHashtags(Hashtags::orderBy('count', 'DESC')->limit(5)->get())
      ->withTrending(Trending::limit(5)->get());
  }

  public function getSupport() {
    return view('hangouts-bbcode')
      ->withPage('Hangouts Help')
      ->withUnique('Help')
      ->withSection(23);
  }

  public function getTrending($topic = NULL) {
    $posts  = Posts::orderBy('id', 'DESC')->get();
    $topics = [];

    /* If no topic has been defined.. */

    if ($topic == null) {
      foreach(Trending::get() as $t) {
        foreach($posts as $p) {
          if (strpos($t->title, $p->content) === false) {
            // Fuck off
          } else {
            array_push($topics, $p);
          }
        }
      }
    } else {
      if(Trending::where('title', $topic)->count() >= 1) {
        foreach($posts as $p) {
          if(substr_count($p->content, $topic) >= 1) {
            array_push($topics, $p);
          }
        }
      } else {
        /* If the value didn't match any topics, go through hashtags! */
        if (Hashtags::where('value', $topic)->count() >= 1) {
          $topic = '#'. $topic;
          foreach($posts as $p) {
            if (strpos($p->content, $topic) === false) {
              // Doesn't contain the hashtag!
            } else {
              array_push($topics, $p);
            }
          }
        }
      }
    }

    return view('hangouts-trending')
      ->withPage('Hangouts Trending Topics')
      ->withUnique('Trending')
      ->withSection(23)
      ->withTimeline($topics)
      ->withTotal(Posts::count())
      ->withHashtags(Hashtags::orderBy('count', 'DESC')->limit(5)->get())
      ->withTrending(Trending::get());
  }

  public function getPost($post) {
    if(Posts::where('id', $post)->count() == 1) {
      $post = Posts::where('id', $post)->first();
    } else {
      return Redirect::back();
    }
    return view('hangouts-post')
      ->withPage('Hangouts (Reading Post)')
      ->withUnique('Timeline')
      ->withSection(23)
      ->withPost($post)
      ->withHashtags(Hashtags::orderBy('count', 'DESC')->limit(5)->get())
      ->withTrending(Trending::limit(5)->get());
  }

  public function addTimeline(Request $r) {
    /* Users must be "trusted" before posting */
    if (Settings::value('posting_status') == 'trusted') {
      if (Auth::user()->hangouts()->count() == 0) {
        /* This user currently isn't in the list at all!, let's add them! */
        $users = new Users;
        $users->user = Auth::user()->id;
        $users->status = 'waiting';
        $users->save();
        return Redirect::back()->withStatus('blue')->withTitle('Pending')->withMessage('Your account is currently undergoing review before allowing you to post!');
      } else {
        if (Auth::user()->hangouts()->value('status') != 'trusted') {
          return Redirect::back()->withStatus('blue')->withTitle('Pending')->withMessage('Your account is currently undergoing review before allowing you to post!');
        }
      }
    }
    $validator = Validator::make($r->all(), [
        'title' => 'required',
        'color' => 'required',
        'content' => 'required',
      ]);
      if ($validator->fails()) {
        return Redirect::back()->withStatus('red')->withTitle('Oops!')->withMessage('Something happened!');
      } else {
        $post           = new Posts();
        $post->title    = $r->title;
        $post->content  = Posts::preparePublic($r->content);
        $post->color    = $r->color;
        $post->author   = Auth::user()->id;
        $post->save();
        return Redirect::back();
    }
  }

  public function createReply(Request $r) {
    if (Settings::value('posting_status') == 'trusted') {
      if (Auth::user()->hangouts()->count() == 0) {
        /* This user currently isn't in the list at all!, let's add them! */
        $users = new Users;
        $users->user = Auth::user()->id;
        $users->status = 'waiting';
        $users->save();
        return Redirect::back()->withMessage('Account Pending')->withColor('red');
      } else {
        if (Auth::user()->hangouts()->value('status') != 'trusted') {
          return Redirect::back()->withMessage('Account Pending')->withColor('red');
        }
      }
    }
    $validator = Validator::make($r->all(), [
      'post'     => 'required|int',
      'content'  => 'required'
    ]);

    if ($validator->fails()) {
      return Redirect::back()->withMessage('We could not submit your reply!')->withColor('red');
    } else {
      $post = Posts::where('id', $r->post)->first();
      $reply            = new Replies();
      $reply->article   = $r->post;
      $reply->content   = $reply->preparePublic($r->content);
      $reply->author    = Auth::user()->id;
      $reply->save();
      /* Notify the topic poster and commenters */
      $notify = new Notifications;
      $notify->user = $post->author;
      $notify->post = $r->post;
      $notify->save();
      unset($notify);
      foreach($post->replies()->get() as $r) {
        if ($r->author != Auth::user()->id) {
          $notify = new Notifications;
          $notify->user = $r->author;
          $notify->post = $r->post;
          $notify->save();
        }
      }
      return Redirect::back()->withMessage('Your reply has been created!')->withColor('green');
    }
    return Redirect::back();
  }

  public function fileReport(Request $r) {
    $validator = Validator::make($r->all(), [
      'user'     => 'required|int',
      'post'     => 'required|int',
      'comment'  => 'required'
    ]);

    if ($validator->fails()) {
      return Redirect::back()->withMessage('We could not file this report at the moment')->withColor('red');
    } else {
      $report = new Reports;
      $report->post     = $r->post;
      $report->comment  = $r->comment;
      $report->user     = $r->user;
      $report->reporter = Auth::user()->id;
      $report->save();
      return Redirect::back()->withMessage('Your report has been filed!')->withColor('green');
    }
    return Redirect::back();
  }

  public function handleLike($post) {
    if (Likes::where('post', $post)->where('user', Auth::user()->id)->count() == 1) {
      Likes::where('post', $post)->where('user', Auth::user()->id)->delete();
    } else {
      $like       = new Likes;
      $like->post = $post;
      $like->user = Auth::user()->id;
      $like->save();
    }
    return Redirect::back();
  }

  public function deletePost($id) {
    Posts::where('id', $id)->delete();
    Likes::where('post', $id)->delete();
    Replies::where('article', $id)->delete();
    return Redirect::to('/hangouts/home');
  }

  public function banUser($id) {
    $post = Posts::where('id', $id)->first();

    foreach(Posts::where('author', $post->author)->get() as $p) {
      Likes::where('post', $p->id)->delete();
      Replies::where('article', $p->id)->delete();
    }

    Posts::where('author', $post->author)->delete();

    $user                 = Users::where('user', $post->author)->first();
    $user->status         = 'banned';
    $user->status_reason  = 'Abusive post!';
    $user->save();
    return Redirect::back();

  }
}
?>
