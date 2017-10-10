function nightly(){
	var css = document.createElement("style");
	css.type = "text/css";
	if(css.innerHTML != "* { background: rgba(0,0,0, 0.8)!important; color: rgba(255,255,255, 0.6)!")
		css.innerHTML = "* { background: rgba(0,0,0, 0.8)!important; color: rgba(255,255,255, 0.6)!important;}";
	else
		css.innerHTML = "* { background: rgba(255,255,0, 0.8)!}"

	document.getElementsByTagName("head")[0].appendChild(css);
}

nightly();
