<html>
<head>
<link rel="stylesheet" type="text/css" href="../../css/modeStyle.CSS">
</head>

<body style ="background-color:#7A7A7A;">	
<div style="background-color: #124559;">
	<p style=" font-size: 50px; color: white; text-align:center; height: 66px"><b>	Challenge Mode	</b></p>
</div>

<h1 style = "color: white;" >Please upload your image and select the number of pieces you would like to play with: </h1>
<div class="gallery" id= "gallery">
	<button><a type="button" href="/" > Home </a></button>
	<form id="file" action="levelSelect" method="post">	
		<input type="file" accept="image/jpeg" onchange="readURL(this);"/>
		
		<input id="input" type="hidden" name="base64"/>
		<select id="amount" name="amount">
		  <option value="9">9</option>
		  <option value="16">16</option>
		  <option value="20">20</option>
		  <option value="25">25</option>
		</select>
		<input type="submit" value="submit" alt="Submit">
	</form>
</div>
<img id="myImage" src=""/>
<script>
function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
            var img = document.getElementById("myImage");
                   img.setAttribute('src', e.target.result);
                   console.log(e.target.result);
                   document.getElementById("input").value = e.target.result;
            };
		
            reader.readAsDataURL(input.files[0]);
        }
    }

</script>
</body>

</html>



