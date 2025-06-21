<?php

namespace App\Http\Controllers;

use App\Models\Metals;
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
    $goldAmount = Metals::where('metal_types_id', 1)
      ->sum('amount');
    $goldPaid = Metals::where('metal_types_id', 1)
      ->sum('paid');

    return Inertia::render('Home', [
      'canLogin' => Route::has('login'),
      'canRegister' => Route::has('register'),
      'laravelVersion' => Application::VERSION,
      'phpVersion' => PHP_VERSION,
      'usdToRsdRate' => $this->externalApiService->fetchUsdToRsdRate(),
      'goldPrice' => $this->externalApiService->fetchGoldPrice(),
      'goldAmount' => $goldAmount,
      'goldPaid' => $goldPaid,
    ]);
  }
}
