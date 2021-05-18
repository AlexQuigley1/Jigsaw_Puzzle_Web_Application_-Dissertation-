
<html>
	<head>
		<link rel="stylesheet" type="text/css" href="../../css/puzzleStyle.CSS">
	</head>
	<body>
		<div id="mydiv">
			<img id="ghostImage">
			<div id="settings" style="display: none;">
				<button onclick="settings()" style="position:absolute; top:0px; right:0px">Close</button>
				<p>Settings</p>
				<p>Background Colour</p>
				<button onclick="changeColour('background', '#7A7A7A')">Original</button>
				<button onclick="changeColour('background', '#466289')">Blue</button>
				<button onclick="changeColour('background', '#C5EFFD')">Baby Blue</button>
				<button onclick="changeColour('background', '#581845')">Purple</button>
				<button onclick="changeColour('background', '#FFC0CB')">Pink</button>
				
				<p>Secondary Colour</p>
				<button onclick="changeColour('secondary', '#124559')">Original</button>
				<button onclick="changeColour('secondary', '#FA6121')">Orange</button>
				<button onclick="changeColour('secondary', '#BD2031')">Red</button>
				<button onclick="changeColour('secondary', '#FFC300')">Yellow</button>
				<button onclick="changeColour('secondary', '#CFF0EC')">Cyan Blue</button>
				
				<p>Opacity of Ghost</p>
				<p>0.1 <input type="range" min="1" max="10" value="5" class="slider" id="ghostOpacity"> 1.0</p>
				
			</div>
		</div>
		<div class="navbar" id="buttons">
			<button><a type="button" href="/" > Home </a></button>
			<button type="button" onclick="ghost()"> Ghost </button>
			<button type="button" onclick="settings()"> Settings </button>
			<button type="button" onclick="hint(${count}, ${height})"> Hint </button>
		</div>
		<script src="../../javascript/javascript.js"></script>
		<script>
			//call startUp function with amount of pieces to insert onto page
			arrayCreate(${width}, ${height});
			startUp(${count}, "${puzzleName}",${width}, ${height}, ${pieceWidth}, ${pieceHeight});
			if ("${mode}" == "Timed") startTimer();
		</script>
	</body>
</html>

