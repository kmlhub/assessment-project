

var url= "https://api.rawg.io/api/games?dates=2019-10-10,2020-10-10&ordering=-added"
var xhr=new XMLHttpRequest()
xhr.open('GET',url)

xhr.setRequestHeader("x-rapidapi-host", "rawg-video-games-database.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e7cef60664msh68fac7b2ea1356cp1d2193jsn541b675d4c59");
xhr.onreadystatechange=test

function test()
{
if(this.status==200 && this.readyState==4)
{
  var re=JSON.parse(this.responseText)
var res_data=JSON.parse(this.responseText).results[0].background_image
console.log(typeof res_data)
console.log(res_data)
console.log(re);




for(var i=0;i<re.results.length;i++)
{
  var image=JSON.parse(this.responseText).results[i].background_image
var image1=JSON.parse(this.responseText).results[i].short_screenshots[2].image

  var board = document.createElement('div');
 board.id = "thecard";





 var brd = document.createElement('div');
brd.id = "thefront";

board.appendChild(brd);


var br = document.createElement('div');
br.id="theback";

board.appendChild(br);


var elem = document.createElement("img");
elem.setAttribute("src", image);
elem.setAttribute("height", "200");
elem.setAttribute("width", "300");
elem.setAttribute("alt", "Flower");
brd.appendChild(elem);

var a=document.createElement("p");
var name=JSON.parse(this.responseText).results[i].name

var node = document.createTextNode(name);
a.appendChild(node);
brd.appendChild(a);

//back background_image

var ele = document.createElement("img");
ele.setAttribute("src", image1);
ele.setAttribute("height", "200");
ele.setAttribute("width", "300");
ele.setAttribute("alt", "Flower");
br.appendChild(ele);

document.getElementById('main').appendChild(board);
}
}
}

xhr.send()

// fetch image in div



/*

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://rawg-video-games-database.p.rapidapi.com/genres");
xhr.setRequestHeader("x-rapidapi-host", "rawg-video-games-database.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "e7cef60664msh68fac7b2ea1356cp1d2193jsn541b675d4c59");
xhr.setRequestHeader("accept", "text/html");

xhr.send(data);*/
