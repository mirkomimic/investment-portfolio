<?php

use App\Models\MetalTypes;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('metals', function (Blueprint $table) {
      $table->id();
      $table->foreignIdFor(MetalTypes::class)
        ->constrained()
        ->cascadeOnDelete();
      $table->integer('amount');
      $table->integer('paid');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('metals');
  }
};
