(function(){
	window.Game = function(){
		this.init()
		this.start()
		this.block = new Block();
		this.map = new Map();
		this.bindEvent()
		this.score = 0;
	}
	Game.prototype.init = function(){
		for(var i = 0; i < 20; i++){
			var $tr = $("<tr></tr>")
			for(var j = 0; j < 12; j++){
				var $td = $("<td></td>")
				$td.appendTo($tr)
			}
			$tr.appendTo("table")
		}
	}
	Game.prototype.setColor = function(row,col,num){
		$("tr").eq(row).children("td").eq(col).addClass("c"+num)
	}
	Game.prototype.clear = function(){
		for(var i = 0; i < 20; i++){
			for(var j = 0; j < 12; j++){
				$("tr").eq(i).children("td").eq(j).removeClass()
			}
		}
	}
	Game.prototype.bindEvent =function(){
		var self = this;
		$(document).keydown(function(event) {
			console.log(event.keyCode)
			if(event.keyCode == 37){
				self.block.checkLeft()
			}else if(event.keyCode == 39){
				self.block.checkRight()
			}else if(event.keyCode == 32){
				self.block.checkDaodi()
			}
			else if(event.keyCode == 38){
				self.block.checkRot()
			}
		});
	}
	Game.prototype.start = function(){
		var self = this;
		this.timer = setInterval(function(){
			self.clear()
			self.block.checkDown()
			self.block.renderBlock()
			self.map.renderMap()
		},500)
	}
})()