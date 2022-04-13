<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\fdtListContoller;
use App\Http\Controllers\NotificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// public routes 
Route::post('login', [AuthController::class, 'login']);

Route::post('fdtList' , [fdtListContoller::class, 'store']);
Route::get('fdtList', [fdtListContoller::class, 'index']);

Route::post('notification' , [NotificationController::class, 'store']);
Route::get('notification', [NotificationController::class, 'index']);
Route::get('notification/{id}', [NotificationController::class, 'show']);




// Protected route
Route::group(["middleware" => ["auth:sanctum"]], function () {
});
