// JavaScript source code

var images = document.getElementsByClassName("scene");

function scene(a) {
	var dayb = document.getElementById("day_b");
	var nightb = document.getElementById("night_b");
	var cityb = document.getElementById("city_b");
	var mountainb = document.getElementById("mountain_b");
	var choosenub = document.getElementById("choosenumber_b");
	var randomnub = document.getElementById("randomnumber_b");
	var inputb = document.getElementById("inputbox");
	if (a == 0 || a == 1) {
		images[a].style.display = "block";
		dayb.style.display = "none";
		nightb.style.display = "none";
		cityb.style.display = "block";
		mountainb.style.display = "block";
	}
	if (a == 2 || a == 3) {
		images[a+dn].style.display = "block";
		cityb.style.display = "none";
		mountainb.style.display = "none";
		choosenub.style.display = "block";
		randomnub.style.display = "block";
	}
	if (a == 4) {
		choosenub.style.display = "none";
		randomnub.style.display = "none";
		inputb.style.display = "block";
	}
	if (a == 5) {
		var songnu = Math.floor((Math.random() * 8) + 1);
		randomnub.style.display = "none";
		choosenub.style.display = "none";
		playsong(songnu);
	}
}

function playsong(x) {
	var inputb = document.getElementById("inputbox");
	var song = document.getElementById("song");
	var songnumber;
	if (x == 0) {
		var inputvalue = document.getElementById("inputhere").value;
		songnumber = inputvalue % 8 + 1;
	}
	else songnumber = x;
	inputb.style.display = "none";
	switch (songnumber){
		case 1: song.setAttribute("src", "./Resources/Musics/One Direction - Little Things.mp3");break;
        case 2: song.setAttribute("src", "./Resources/Musics/Alina Baraz & Galimatias - Fantasy.mp3");break;
        case 3: song.setAttribute("src", "./Resources/Musics/Stephanie Poetri - I Love You 3000.mp3");break;
		case 4: song.setAttribute("src", "./Resources/Musics/Birdy - Skinny Love [Official Music Video].mp3");break;
		case 5: song.setAttribute("src", "./Resources/Musics/brillion - Aurora ft Monma, Tom Doolie.mp3");break;
		case 6: song.setAttribute("src", "./Resources/Musics/Elijah Lee x aimless - Moon Waltz.mp3");break;
		case 7: song.setAttribute("src", "./Resources/Musics/London Grammar - Shyer.mp3");break;
		case 8: song.setAttribute("src", "./Resources/Musics/Love.mp3");break;
    }
	console.log(song.src);
	document.getElementsByTagName('audio')[0].load()
	document.getElementsByTagName('audio')[0].play();
	console.log(inputvalue);
}