<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>

</head>
<body>
<form>
    N: <input type="text" name="num"/>
    <input type="submit"/>
</form>

<?php
if (isset($_GET['num'])) {
    $n = intval($_GET['num']);

    $f1 = 1;
    $f2 = 1;
    $f3 = $f1 + $f2;

    echo "$f1 ";
    echo "$f2 ";
    echo "$f3 ";

    for ($i = 4; $i <= $n; $i++) {
        $next = $f1 + $f2 + $f3;
        $f1 = $f2;
        $f2 = $f3;
        $f3 = $next;
        echo "$f3 ";
    }
}
?>

</body>
</html>