<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmpresaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('empresa', function (Blueprint $table) {
            $table->bigIncrements('recnum');
            //$table->integer('codigo');
            $table->increments('codigo');
            $table->integer('empresa');
            $table->string('sigla',40);
            $table->string('razao_social',255);

            //$table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('empresa');
    }
}
