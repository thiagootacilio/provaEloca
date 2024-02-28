<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

abstract class AApiService
{
    protected $model;
    

    public function getModel(): ?Model
    {
        
        if (!$this->model instanceof Model) {
            throw new \Exception('Model não encontrado');
        }

        return $this->model;
    }

    
}
