<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    public function sendResponse($data = [], $message = '', $status = Response::HTTP_OK)
    {
        if ($data instanceof AnonymousResourceCollection) {
            return $data
                ->additional(['message' => $message])
                ->response();
        } else {
            return response()->json([
                'message' => $message,
                'data' => $data,
            ], $status);
        }
    }
}
