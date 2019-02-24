<!--05. Dump a HTTP GET Request-->

<form method="get">
    <div>Name:</div>
    <input type="text" name="personName"/>
    <div>Age:</div>
    <input type="number" name="age"/>
    <div>Town:</div>
    <select name="townId">
        <option value="10">Sofia</option>
        <option value="20">Varna</option>
        <option value="30">Plodvid</option>
    </select>
    <div><input type="submit"/></div>
</form>

<?php

$personName = $_GET;
var_dump($personName);

?>