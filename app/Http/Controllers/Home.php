<?php
namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Database\Website\News;
use App\Database\Groups\Group;
use Illuminate\Routing\Controller;

class Home extends Controller {

  public function getPage() {
    return view('me')
      ->withPage(Auth::user()->username)
      ->withUnique('Home')
      ->withSection(1)
      ->withGroups(Group::where('staff_picked', '1')->get())
      ->withNews(News::get());
  }
}
?>
