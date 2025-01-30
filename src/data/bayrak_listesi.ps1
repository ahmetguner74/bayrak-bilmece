# PowerShell script - bayrak_listesi.ps1

# Flags klas�r�n�n yolu
$flagsPath = "C:\_WORK\cursor\bayrak4\public\flags"
# ��kt� dosyas�n�n yolu
$outputPath = "C:\_WORK\cursor\bayrak4\src\data\allCountries.ts"

$flags = Get-ChildItem $flagsPath -Filter "*.png"

# Zorluk seviyelerini belirlemek i�in �lke gruplar�
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
    Write-Host "��leniyor: $code"
    
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

# Dosyay� UTF8 ile kaydet
[System.IO.File]::WriteAllText($outputPath, $output, [System.Text.Encoding]::UTF8)

Write-Host "�lke listesi olu�turuldu: $outputPath"
Write-Host "Toplam bayrak say�s�: $($flags.Count)"