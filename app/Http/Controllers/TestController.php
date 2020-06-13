<?php

namespace App\Http\Controllers;

use App\User;

class TestController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function test()
    {
        return view('test.test');
    }
}
