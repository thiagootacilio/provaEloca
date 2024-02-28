<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::post( 'empresa', 'EmpresaController@store');
Route::get( 'empresa/{recnum}', 'EmpresaController@show');
Route::get( 'empresa', 'EmpresaController@index');
Route::delete( 'empresa/{recnum}', 'EmpresaController@destroy');
Route::put( 'empresa/{recnum}', 'EmpresaController@update');

Route::post( 'cliente', 'ClienteController@store');
Route::get( 'cliente/{recnum}', 'ClienteController@show');
Route::get( 'cliente', 'ClienteController@index');
Route::delete( 'cliente/{recnum}', 'ClienteController@destroy');
Route::put( 'cliente/{recnum}', 'ClienteController@update');


