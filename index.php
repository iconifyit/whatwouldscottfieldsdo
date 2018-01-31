<!DOCTYPE html>
	<!--[if IE 8]> <html class="no-js lt-ie9" lang="en"> <![endif]-->
	<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
        <script type="text/javascript" src="jquery-1.3.2.min.js"></script>
        <script type="text/javascript" src="scott.js"></script>
        <script type="text/javascript">
            $(function() {
				Scott.init();
            });
        </script>
        <link rel="stylesheet" type="text/css" href="styles.css" />
    </head>
    <body>
        <div id="advertisement">
        </div>
        <div id="wrapper">
            <div id="world-champion">
                <img src="world-champion.jpg" width="428" />
            </div>
            <div id="response">
                <div id="answer"></div>
                <button class="reset">Ask Another Question</button>&nbsp;
            </div>
            <div id="form">
                <h1>Type your question to ask what Scott Fields would do.</h1>
                <textarea id="question" rows="10" resize="false"></textarea>
                <button class="askScott">What would Scott Fields do?</button>&nbsp;
            </div> 
        </div>
    </body>
</html>