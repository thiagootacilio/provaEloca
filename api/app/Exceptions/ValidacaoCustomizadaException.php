<?php

namespace App\Exceptions;

use Exception;

class ValidacaoCustomizadaException extends Exception
{
    public function report()
    {

    }

    public function render()
    {
        $retorno = ['message' => $this->getMessage()];
        $codigo = $this->getCode();
        return response()->json($retorno, $codigo);
    }
}
