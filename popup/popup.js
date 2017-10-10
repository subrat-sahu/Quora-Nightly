
let dark = true;
let change = () => {
  if(!dark)
  	{document.getElementById("button").innerHTML = "Lighten Up";
	dark = true;}
  else
  	{document.getElementById('button').innerHTML = "Darken"
	dark = false;}
	browser.tabs.executeScript(null, { 
      file: "/nightly.js" 
    });


}
document.getElementById("button").addEventListener("click", change);



