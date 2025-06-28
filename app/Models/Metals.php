<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Metals extends Model
{
  /** @use HasFactory<\Database\Factories\MetalsFactory> */
  use HasFactory;

  public function metal_type(): BelongsTo
  {
    return $this->belongsTo(MetalTypes::class, 'metal_types_id');
  }
}
