<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Display Form Submission</title>

  <style>
  html {
    font-family: sans-serif;
  }

  th, td {
    padding: 7px 10px 10px 10px;
  }

  th {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 90%;
    border-bottom: 2px solid #111111;
    border-top: 1px solid #999999;
    text-align: left;
  }

  table > tbody > tr:nth-of-type(even) {
    background-color: #efefef;
  }

  table > tbody > tr:hover {
    background-color: #c3e6e5;
  }

  #goBack {
    margin-top: 20px;
  }
  </style>
</head>
<body>
  <h1>Submitted Form Data</h1>
  <table>
    <thead>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <?php
      foreach ($_REQUEST as $key => $value) {
        if ($key === "PHPSESSID") {
          continue;
        }
        if (substr($key, 0, strlen("SQLiteManager")) === "SQLiteManager") {
          continue;
        }
        ?>
        <tr>
          <?php
          echo("<td>" . htmlspecialchars($key) . "</td>");
          $printValue = $value;
          // if this is an array, need to print it differently
          if (is_array($value)) {
            $printValue = join(", ", $value);
          }
          echo("<td>" . htmlspecialchars($printValue) . "</td>\n");
          ?>
        </tr>
        <?php
      }
      ?>
    </tbody>
  </table>

  <button onclick="window.history.back();" id="goBack">Return to Previous Page</button>
</body>
</html>
