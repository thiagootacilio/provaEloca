<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Cliente as ClinteService;
use Illuminate\Http\Response;

class ClienteController extends Controller 
{
    protected $service;

    public function __construct(ClinteService $cliente)
    {   
        $this->service = $cliente;   
    }

    public function store(Request $request){
        return $this->sendResponse(
            $this->service->insert($request),
            __('Cadastrado com Sucesso'),
            Response::HTTP_OK
        );;
    }
    public function update($recnum, Request $request){
        return $this->sendResponse(
            $this->service->update($recnum, $request),
            __('Atualizadp com Sucesso'),
            Response::HTTP_OK
        );
    }

    public function show($recnum){
        return $this->sendResponse(
            $this->service->show($recnum),
            __(''),
            Response::HTTP_OK
        );
    }

    public function destroy($recnum){
        return $this->sendResponse(
            $this->service->delete($recnum),
            __('Deletado com sucesso'),
            Response::HTTP_OK
        );
    }

    public function index(){
        return $this->sendResponse(
            $this->service->listAll(),
            __(''),
            Response::HTTP_OK
        );
    }
    
    
}
