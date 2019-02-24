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

    for ($i = $n; $i > 1; $i--) {

        $isPrime = true;
        for ($j = $i - 1; $j > 1; $j--) {
            if ($i % $j == 0) {
                $isPrime = false;
            }
        }
        if ($isPrime) {
            echo "$i ";
        }
    }
}
?>

</body>
</html>