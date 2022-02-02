<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Models\laraveltask;

class LaraveltaskController extends Controller
{
    public function task(Requset $requset){

         return $requset->input();
       
        // $data = new laraveltask();

        // $data->name = $requset['name'];
        // $data->emailid = $requset['email'];
        // $data->password = $requset['password'];
        // $data->save();
        // return response()->json($data);

        
    }
}
