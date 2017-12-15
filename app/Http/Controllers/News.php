<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Database\Website\News as N;

class News extends Controller {

  public function getArticles() {
    $article = N::orderBy('id', 'DESC')->first();
    return view('news')
      ->withPage($article->name)
      ->withUnique('Weekly News')
      ->withSection(2)
      ->withNews(N::get())
      ->withArticle($article);
  }

  public function readArticle($title, $id) {
    if (N::where('id', $id)->count() == 1) {
      $article = N::where('id', $id)->first();
      return view('news')
        ->withPage($article->name)
        ->withUnique('Weekly News')
        ->withSection(2)
        ->withNews(N::get())
        ->withArticle($article);
    } else {
      return Redirect::to('/community/news');
    }
  }
}
?>
