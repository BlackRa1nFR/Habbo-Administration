<?php
namespace App\Http\Controllers;

use App\Database\User;
use App\Database\Ranks;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class Store extends Controller {

  public function getHome() {
    return view('store')
      ->withPage('Store')
      ->withUnique('Home')
      ->withSection(30);
  }
}
?>
