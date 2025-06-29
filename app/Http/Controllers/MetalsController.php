<?php

namespace App\Http\Controllers;

use App\Http\Requests\MetalsRequest;
use App\Models\Metals;
use Illuminate\Http\Request;

class MetalsController extends Controller
{
  public function store(MetalsRequest $request)
  {
    $metal = new Metals();
    $metal->metal_types_id = $request->metalType;
    $metal->amount = $request->amount;
    $metal->paid = $request->paid;
    $metal->save();

    return redirect()->back();
  }
}
