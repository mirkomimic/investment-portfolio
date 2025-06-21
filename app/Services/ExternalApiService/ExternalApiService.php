<?php

namespace App\Services\ExternalApiService;

use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class ExternalApiService
{
  public function fetchUsdToRsdRate()
  {
    if (Cache::has('usdToRsdRate')) {
      return Cache::get('usdToRsdRate');
    }

    $key = env('CURRENCY_FREAKS_API_KEY');

    $response = Http::get("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=$key&symbols=RSD");

    if ($response->successful()) {
      $data = $response->json();

      Cache::put('usdToRsdRate',  $data['rates']['RSD'], 60 * 60 * 24);
    }

    return $data['rates']['RSD'];
  }

  public function fetchGoldPrice()
  {
    if (Cache::has('goldPrice')) {
      return Cache::get('goldPrice');
    }

    $key = env('GOLD_API_KEY');

    $response = Http::withHeaders([
      'x-access-token' => $key,
    ])->get('https://www.goldapi.io/api/XAU/USD');

    if ($response->successful()) {
      $data = $response->json();

      Cache::put('goldPrice', $data['price_gram_24k'], 60 * 60 * 24);
    }

    return $data['price_gram_24k'] ?? 108.29;
  }
}
