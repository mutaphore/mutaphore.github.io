var Poketype = function() {
	this.searchBox = $("#search-box");
	this.helpButton = $("#helpButton").button();
	this.helpDlg = new HelpDlg();

	this.weakList = $("#weak #types");
	this.resistList = $("#resists #types");
	this.superList = $("#superEffective #types");
	this.ineffList = $("#ineffective #types");
	this.pokeList = $("#pokeList");

	this.pokemon = {};
	this.pokemonNames = [];
	this.pokeDex = [];

	this.slider = $("#slider");
}

Poketype.serverUrl = "http://pokeapi.co";
Poketype.pokeDexUri = "/api/v1/pokedex/1/";

Poketype.prototype.init = function() {
	var self = this;

	this.searchBox.keypress(function(e) { 
		var keycode = (e.keyCode ? e.keyCode : e.which);

		if (keycode == $.ui.keyCode.ENTER) {
			self.search();
			self.searchBox.autocomplete("close");
		}
	});

	$.ajax({
		url: Poketype.serverUrl + Poketype.pokeDexUri,
		type: "GET",
		dataType: 'jsonp',
		contentType: "application/json",
		success: function(data, status, xhr) {
			self.pokeDex = data.pokemon;		
		},
		error: function(xhr, status) {
			console.log("Cannot read in PokeDex!");
		}
	});

	this.initPokelist();
	this.searchBox.autocomplete({source: this.pokemonNames});
	this.helpButton.on("click", function() {self.helpDlg.run();});
	this.slider.slider({
		change: function() {
			var val = 787878;
			 val += self.slider.slider("value");
			$("body").css("background-color", "#" + val.toString());
		}
	});
}

Poketype.prototype.initPokelist = function() {
	var item, self = this;

	this.pokeDex.sort(Poketype.SortByName);

	for (var i = 0; i < this.pokeDex.length; i++) {
		item = $("<li id='p"+ i + "'>" + "<a href='#'>" + this.pokeDex[i].name + "</a></li>");
		this.pokeList.append(item);
		this.pokemonNames.push(this.pokeDex[i].name);
		$("#pokeList #p" + i).on("click", {name: this.pokeDex[i].name}, function(e) {
			var key = jQuery.Event("keypress");
			key.which = key.keyCode = $.ui.keyCode.ENTER;

			self.searchBox.val(e.data.name);
			self.helpDlg.dlg.dialog("close");
			self.searchBox.trigger(key);
		});
	}
}

Poketype.prototype.search = function() {
	var self = this;
	var search;

	this.pokemon = new Pokemon();
	search = this.searchBox.val().toLowerCase();

	$.ajax({
		url: Poketype.serverUrl + "/api/v1/pokemon/" + search,
		type: "GET",
		dataType: "jsonp",
		contentType: "application/json",
		success: function(data, status, xhr) {
			self.searchSuccess(data, xhr);
		},
		error: function(xhr, status) {
			self.searchError(xhr, status);
		}
	})
}

Poketype.prototype.searchSuccess = function(data, xhr) {

	$("#sprite").empty();
	$("#typing").empty();
	$("#species-name").empty();
	$("#abilities").empty();

	this.pokemon.init(data);
	$("#sprite").append("<img src='" + this.pokemon.spriteUrl + "'>");
	$("#species-name").append("<span>" + this.pokemon.name + "</span>");
	this.buildTypes();
	this.buildAbilities();
	this.buildEffectiveness();
	Color.convert();
}

Poketype.prototype.searchError = function(xhr, status) {

	$("#noticeDlg").dialog({
      modal: true,
      height: 30,
   	});
}

Poketype.prototype.buildTypes = function() {
	var type1 = "", type2 = "";

	type1 = "<span type='" + this.pokemon.types[0].name + "'>" + this.pokemon.types[0].name + "</span>";
	if (this.pokemon.types.length == 2)
		type2 = " / <span type='" + this.pokemon.types[1].name + "'>" + this.pokemon.types[1].name + "</span>";

	$("#typing").append(type1 + type2);
}

Poketype.prototype.buildAbilities = function() {
	var abilitiesArr = [];
	var desc = "";

	for (var i = 0; i < this.pokemon.abilities.length; i++) {
		abilitiesArr[i] = this.pokemon.abilities[i].name;
	}

	$("#abilities").append("<span>Abilities:   " + abilitiesArr.join(", ") + "</span>");
	$("#abilities").tooltip({
		position:{my: "left top", at: "left bottom"},
		fade: 200
	});

}

Poketype.prototype.buildEffectiveness = function() {
	var i, items = $("#effectiveness-container").children();

	for (i = 0; i < items.length; i++) {
		$(items[i]).children(".effectiveness-header").empty();
		$(items[i]).children("#types").empty();
	}

	$("#weak .effectiveness-header").prepend("Is weak to...");
	$("#resists .effectiveness-header").prepend("Resists...");
	$("#superEffective .effectiveness-header").prepend("Super effective...");
	$("#ineffective .effectiveness-header").prepend("Ineffective...");

	for (i = 0; i < this.pokemon.weakness.length; i++)
		this.weakList.append($("<li type='" + this.pokemon.weakness[i].name + "'>" + this.pokemon.weakness[i].name + "</li>"));
	for (i = 0; i < this.pokemon.resistance.length; i++)
		this.resistList.append($("<li type='" + this.pokemon.resistance[i].name + "'>" + this.pokemon.resistance[i].name + "</li>"));
	for (i = 0; i < this.pokemon.superEffective.length; i++)
		this.superList.append($("<li type='" + this.pokemon.superEffective[i].name + "'>" + this.pokemon.superEffective[i].name + "</li>"));
	for (i = 0; i < this.pokemon.ineffective.length; i++)
		this.ineffList.append($("<li type='" + this.pokemon.ineffective[i].name + "'>" + this.pokemon.ineffective[i].name + "</li>"));

}

Poketype.SortByName = function(a, b) {
	var aName = a.name.toLowerCase();
	var bName = b.name.toLowerCase(); 

  	return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
}

