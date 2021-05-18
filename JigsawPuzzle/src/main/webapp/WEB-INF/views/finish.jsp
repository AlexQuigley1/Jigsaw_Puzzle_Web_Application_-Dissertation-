
<html>
<head>

<link rel="stylesheet" type="text/css" href="../../css/puzzleStyle.CSS">

</head>
<body>

	<div id="mydiv">
	
	<p>FINISHED!!!</p>
		<div id="finishEntry" style="display: none;">
			<p>Completed in ${time} seconds!!!</p>
			<p>Well Done!</p>
			<p>Please enter your name for the leaderboard</p>
			<form id="leaderboard" action="leaderboard" method="post">	
				<input id="time" type="hidden" name="time" value=${time}>
				<input id="name" type="text"name="name" size="30" style="border: 2px solid #400000;">
				<input id="submit" type="submit" value="submit" alt="Submit">
			</form>
			<table id="leaderboard">
			<tr>
			<th>Name</th>
			<th>Time (seconds)</th>
			</tr>
			<tbody id="leaderboardBody">
			</tbody>
			</table>
		</div>
	</div>
	
	<div class="navbar" id="buttons">
			<button><a type="button" href="/" > Home </a></button>
			<button type="button" onclick="ghost()"> Ghost </button>
			<button type="button" onclick="settings()"> Settings </button>
		</div>
	<script src="../../javascript/javascript.js"></script>
	<script>
		if ("${mode}" == "Timed"){
			document.getElementById("finishEntry").style.display = "block";
			getLeaderboard("${names}", ${times});
		}
		
		
	</script>

</body>
</html>

