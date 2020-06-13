<?php

namespace App\Http\Controllers;

use App\User;

class AdminController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function admin()
    {
        return view('admin.admin');
    }
}
