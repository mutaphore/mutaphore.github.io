var Pokemon = function() {
	//General Info
	this.name = "";
	this.types = [];
	this.spriteUrl = "";
	this.abilities = [];
	//Effectiveness stats
	this.weakness = [];
	this.resistance = [];
	this.superEffective = [];
	this.ineffective = [];
}

Pokemon.defaultSprite = "http://static.zerochan.net/Pikachu.full.1037761.jpg";

Pokemon.prototype.init = function(data) {
	var self = this;

	this.name = data.name;
	this.types = data.types;
	this.abilities = data.abilities;

	if (!data.sprites[0])
		self.spriteUrl = Pokemon.defaultSprite;	
	else {
		$.ajax({
			url: Poketype.serverUrl + data.sprites[0].resource_uri,
			type: "GET",
			dataType: "jsonp",
			contentType: "application/json",
			success: function(data, status, xhr) {
				self.spriteUrl = Poketype.serverUrl + data.image;
			},
			error: function(xhr, status) {
				self.spriteUrl = Pokemon.defaultSprite;	
			}
		});
	}

	for (var i = 0; i < data.types.length; i++) {
		$.ajax({
			url: Poketype.serverUrl + data.types[i].resource_uri,
			type: "GET",
			dataType: "jsonp",
			contentType: "application/json",
			success: function(data, status, xhr) {
				self.weakness = self.weakness.concat(data.weakness);
				self.resistance = self.resistance.concat(data.resistance);
				self.superEffective = self.superEffective.concat(data.super_effective);
				self.ineffective = self.ineffective.concat(data.ineffective);
			},
			error: function(xhr, status) {
				console.log("Cannot read in data!");
			}
		});
	}	
}



