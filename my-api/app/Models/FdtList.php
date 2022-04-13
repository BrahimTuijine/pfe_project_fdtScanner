<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FdtList extends Model
{
    use HasFactory;


    protected $fillable = [
        'fdtName',
        'fdtLat',
        'fdtLng',
    ];
}
