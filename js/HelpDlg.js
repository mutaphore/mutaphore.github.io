var HelpDlg = function() {
	this.dlg = $("#helpDlg");
	this.dropButton = $("#dropButton").button();
}

HelpDlg.prototype.run = function() {
	var self = this;

	this.dlg.dialog({ 
		width: 600,
		modal: true,
	});
}