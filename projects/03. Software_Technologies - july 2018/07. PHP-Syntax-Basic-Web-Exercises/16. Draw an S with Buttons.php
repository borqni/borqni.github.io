<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>First Steps Into PHP</title>
</head>
<body>

<?php

for ($row = 0; $row <= 8; $row++) {
    for ($col = 0; $col <= 4; $col++) {
        if ($row == 0 || $row == 4 || $row == 8) {
            echo "<button style='background-color: blue'> 1 </button>";
        }
        if ($row >= 1 && $row <= 3 && $col == 0) {
            echo "<button style='background-color: blue'> 1 </button>";
        }
        if ($row >= 1 && $row <= 3 && $col != 0) {
            echo "<button> 0 </button>";
        }
        if ($row >= 5 && $row <= 7 && $col == 4) {
            echo "<button style='background-color: blue'> 1 </button>";
        }
        if ($row >= 5 && $row <= 7 && $col != 4) {
            echo "<button> 0 </button>";
        }
    }
    echo "<br>";
}
?>

</body>
</html>