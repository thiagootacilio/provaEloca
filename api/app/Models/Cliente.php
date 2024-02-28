<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    public $timestamps = false;
    protected $table = 'cliente';
    protected $fillable = [
        //'recnum',
        'codigo',
        'empresa',
        'razao_social',
        'tipo',
        'cpf_cnpj'
    ];
    
    

    protected $primaryKey = 'recnum';
}
