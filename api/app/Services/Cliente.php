<?php
namespace App\Services;

use Illuminate\Http\Request;
use App\Services\AApiService;
use Illuminate\Http\Response;
use App\Models\Cliente as ClienteModel;
use App\Models\Empresa as EmpresaModel;
use App\Exceptions\ValidacaoCustomizadaException;

class Cliente extends AApiService
{
    public function __construct(ClienteModel $model)
    {
        $this->model = $model;
    }

    public function insert(Request $request){
        try{
            $checkEmpresaExist = $this->model->where('empresa',$request['empresa'])->count();
            if(!$checkEmpresaExist){
                throw new \Exception('Empresa não existe');
            }

            $exist = $this->model->where('codigo',$request['codigo'])->count();
            if($exist){
                throw new \Exception('Já existe cadastro com esse código');
            }
            
            $model = $this->model;
            $model->fill($request->post());
            $model->save();
            return $model;
        }catch(\Exception $e){
            throw new ValidacaoCustomizadaException(
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function show($recnum){
        try{
            $exist = $this->model->where('recnum',$recnum)->first();
            if(!$exist){
                throw new \Exception('Empresa não encontrada');
            }
        
            return $exist;
        }catch(\Exception $e){
            throw new ValidacaoCustomizadaException(
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function listAll(){
        return $this->model->get();
    }
    
    public function update($recnum, Request $request){
        try{
            $exist = $this->model->where('recnum',$recnum)->first();
            if(!$exist){
                throw new \Exception('Cliente não encontrada');
            }

            $existCodigo = $this->model->where('recnum','<>',$recnum)->where('codigo',$request['codigo'])->first();
            if($existCodigo){
                throw new \Exception('Código já utilizado em outra empresa');
            }
            
            $existEmpresa = app()->make(EmpresaModel::class)->where('codigo',$request['empresa'])->first();
            if(!$existEmpresa){
                throw new \Exception('Empresa não encontrada aui');
            }

            $dados =  $exist->fill($request->post())->toArray();
            if(isset($dados['recnum'])){
                unset($dados['recnum']);
            }
            
            $result = $this->model->where('recnum',$recnum)->update($dados);
            return $result;
        }catch(\Exception $e){
            throw new ValidacaoCustomizadaException(
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }

    public function delete($recnum){
        try{
            $result = $this->model->where('recnum',$recnum)->delete();
            if(!$result){
                throw new \Exception('Não foi possivel deletar');
            }
        }catch(\Exception $e){
            throw new ValidacaoCustomizadaException(
                $e->getMessage(),
                Response::HTTP_BAD_REQUEST
            );
        }
    }
}
