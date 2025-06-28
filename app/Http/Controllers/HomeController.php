<?php

namespace App\Http\Controllers;

use App\Models\Metals;
use App\Models\MetalTypes;
use App\Services\ExternalApiService\ExternalApiService;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function __construct(
    protected ExternalApiService $externalApiService
  ) {}

  public function index()
  {
    $metals = Metals::where('metal_types_id', 1)->join('metal_types', 'metals.metal_types_id', '=', 'metal_types.id')
      ->select('metals.id', 'metals.amount', 'metals.paid', 'metal_types.name as metal_type_name')
      ->orderBy('metals.created_at', 'desc')
      ->get();

    $goldAmount = $metals->sum('amount');
    $goldPaid = $metals->sum('paid');
    $metalTypes = MetalTypes::all();

    return Inertia::render('Home', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
      'usdToRsdRate' => $this->externalApiService->fetchUsdToRsdRate(),
      'goldPrice' => $this->externalApiService->fetchGoldPrice(),
      'goldAmount' => $goldAmount,
      'goldPaid' => $goldPaid,
      'metals' => $metals,
      'metalTypes' => $metalTypes
    ]);
  }
}
