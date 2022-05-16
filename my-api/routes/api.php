<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DailyFdtValueController;
use App\Http\Controllers\fdtListContoller;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\FdtRequestController;

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
Route::put('fdtList/{id}', [fdtListContoller::class, 'update']);


Route::post('notification' , [NotificationController::class, 'store']);
Route::get('notification', [NotificationController::class, 'index']);
Route::get('notification/{id}', [NotificationController::class, 'show']);


Route::get('dailyValue/{id}', [DailyFdtValueController::class, 'show']);
Route::get('dailyValue', [DailyFdtValueController::class, 'index']);
Route::post('dailyValue', [DailyFdtValueController::class, 'store']);


Route::post('fdtRequest', [FdtRequestController::class, 'store']);
Route::get('fdtRequest', [FdtRequestController::class, 'index']);
Route::put('fdtRequest/{id}', [FdtRequestController::class, 'update']);


Route::get('getAverage/{id}', [DailyFdtValueController::class, 'getAverage']);



// Protected route
Route::group(["middleware" => ["auth:sanctum"]], function () {
});
