<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link href={{ mix('css/app.css','lyu') }}></link>
    <script>
        window.Laravel = {!! json_encode(['csrfToken' => csrf_token()]) !!};
    </script>
</head>
<body>
<div id="app">
</div>
<script src="{{ mix('js/manifest.js','lyu') }}"></script>
<script src="{{ mix('js/vendor.js','lyu') }}"></script>
<script src="{{ mix('js/app.js','lyu') }}"></script>
</body>
</html>
