<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    public $timestamps = false;
    protected $table = 'empresa';
    protected $fillable = [
        //'recnum',
        'codigo',
        'empresa',
        'sigla',
        'razao_social',
    ];
    protected $primaryKey = 'recnum';
}
