<!DOCTYPE html>
<html>
<head>
    <title>cards</title>
    <link rel="stylesheet" type="text/css" href="css.css">
    <script type="text/javascript" src="zepto.min.js"></script>
    <script type="text/javascript" src="zepto.fx.js"></script>
    <script type="text/javascript" src="js.js"></script>
</head>
<body>
    <div class="table">
        <?php
            for($i = 0; $i < 10; $i++){
                ?>
                <div class="cards allcards transition"><?php echo $i; ?></div>
                <?php
            }
        ?>
        <div class="cover"></div>
    </div>
</body>
</html>