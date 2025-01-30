# PowerShell script - bayrak_listesi.ps1

# Flags klasörünün yolu
$flagsPath = "C:\_WORK\cursor\bayrak4\public\flags"
# Çýktý dosyasýnýn yolu
$outputPath = "C:\_WORK\cursor\bayrak4\src\data\allCountries.ts"

$flags = Get-ChildItem $flagsPath -Filter "*.png"

# Zorluk seviyelerini belirlemek için ülke gruplarý
$easyCountries = @(
    'tr', 'us', 'gb', 'fr', 'de', 'it', 'es', 'ru', 'cn', 'in', 'ca', 'br', 'au', 'jp',
    'mx', 'id', 'sa', 'pl', 'nl', 'ch', 'se', 'be', 'at', 'dk', 'fi', 'no', 'ie', 'nz'
)

$mediumCountries = @(
    'eg', 'za', 'ng', 'ar', 'cl', 'co', 'pe', 'vn', 'th', 'my', 'ph', 'pk', 'bd',
    'ir', 'iq', 'il', 'gr', 'pt', 'cz', 'hu', 'ro', 'ua', 'kr', 'sg'
)

$output = @"
import { Country } from '../types';

export const countries: Country[] = [
"@

$id = 1

foreach ($flag in $flags) {
    $code = $flag.BaseName.ToLower()
    Write-Host "Ýþleniyor: $code"
    
    # Zorluk seviyesini belirle
    $difficulty = if ($easyCountries -contains $code) {
        "easy"
    } elseif ($mediumCountries -contains $code) {
        "medium"
    } else {
        "hard"
    }

    $output += @"

  {
    id: '$($id)',
    name: '$($code.ToUpper())',
    code: '$($code)',
    capital: 'Capital of $($code.ToUpper())',
    difficulty: '$($difficulty)',
    location: {
      lat: 0,
      lng: 0
    }
  },
"@

    $id++
}

$output += @"

];

export default countries;
"@

# Dosyayý UTF8 ile kaydet
[System.IO.File]::WriteAllText($outputPath, $output, [System.Text.Encoding]::UTF8)

Write-Host "Ülke listesi oluþturuldu: $outputPath"
Write-Host "Toplam bayrak sayýsý: $($flags.Count)"