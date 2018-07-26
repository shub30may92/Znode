function Agent(){

	var txt;

	this.getAgent = function() {
		var content = "<div class='agent'> <input type='text' class='txt' spellcheck='false' style='width:100%' /> <input type='text' spellcheck='false' style='width:100%' /><input type='text' spellcheck='false' style='width:100%' /></div>";
		
		return content;
	}
}