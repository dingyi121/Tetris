(function(){
	window.Block = function(){
		var allType = ["I","J","L","Z","S","T","O"];
		this.type = allType[parseInt(Math.random() * allType.length)];
		this.allDir = fangkuai[this.type].length;
		this.dir = parseInt(Math.random() * this.allDir);
		this.code = fangkuai[this.type][this.dir]
		this.row = 0;
		this.col = 4;
	}
	Block.prototype.renderBlock = function(){
		for(var i = 0; i < 4; i++){
			for(var j =0 ; j < 4; j++){
				if(this.code[i][j] != 0){
					game.setColor(i+this.row,j+this.col,this.code[i][j])
				}
			}
		}
	}
	Block.prototype.check = function(row,col){
		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4;j ++){
				if(this.code[i][j] != 0 && game.map.mapCode[i+row][j+col] != 0){
					return false;
				}
			}
		}
		return true;
	}
	Block.prototype.checkDown = function(){
		if(this.check(this.row+1,this.col)){
			this.row++;
		}else{
			this.siezaihuabushang();
			game.map.remove()
			game.block = new Block()

			for(var i =0; i < 12; i++){
				if(game.map.mapCode[0][i] != 0){
					alert("游戏结束,你的分数为"+game.score);
					clearInterval(game.timer)
				}
			}
		}
	}
	Block.prototype.checkDaodi = function(){
		while(this.check(this.row+1,this.col)){
			this.row++;
		}
	}
	Block.prototype.checkLeft = function(){
		if(this.check(this.row,this.col-1)){
			this.col--;
		}
	}
	Block.prototype.checkRight = function(){
		if(this.check(this.row,this.col+1)){
			this.col++;
		}
	}
	Block.prototype.checkRot = function(){
		var oldDir = this.dir;
		this.dir ++;
		if(this.dir > this.allDir -1){
			this.dir = 0;
		}
		this.code = fangkuai[this.type][this.dir];
		if(!this.check(this.row,this.col)){
			this.dir = oldDir;
			this.code = fangkuai[this.type][this.dir];
		}
	}
	Block.prototype.siezaihuabushang = function(){
		for(var i = 0; i < 4; i++){
			for(var j = 0; j < 4; j++){
				if(this.code[i][j] != 0){
					game.map.mapCode[i+this.row][j+this.col] = this.code[i][j];
				}
			}
		}
	}
})()