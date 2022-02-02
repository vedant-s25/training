<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use App\Http\Controllers\LaraveltaskController;
use App\Http\Cantrollers\LaraveltaskController;
class laraveltask extends Model
{
    use HasFactory;
    protected $table = 'react_task';
    protected $primaryKey = 'id';
    protected $fillable = ['name','emailid','password'];
}
