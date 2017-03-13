<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <style href={{ mix('lyu/css/app.css','lyu') }}></style>
</head>
<body>
<div id="app">
</div>
<script src="{{ mix('/lyu/js/manifest.js','lyu') }}"></script>
<script src="{{ mix('/lyu/js/vendor.js','lyu') }}"></script>
<script src="{{ mix('/lyu/js/app.js','lyu') }}"></script>
</body>
</html>