/*=============================================================================
* CustomGoToTitle.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Changes the default "Go to Title" window to one with transparency 
* and bigger width.
* @author Andre Fidalgo Silva
* =============================================================================*/



Window_GameEnd.prototype.windowWidth = function() {
    return 310;
};

Window_GameEnd.prototype.updateBackOpacity = function() {
    this.backOpacity = 0;
	this.opacity = 0;
};

Window_GameEnd.prototype.updatePlacement = function() {
    this.x = (Graphics.boxWidth - this.width) / 2;
    this.y = (Graphics.boxHeight - this.height) / 2;
};

Window_GameEnd.prototype.makeCommandList = function() {
    this.addCommand(TextManager.toTitle, 'toTitle');
    this.addCommand(TextManager.cancel,  'cancel');
};

Scene_GameEnd.prototype.createBackground = function() {
    Scene_MenuBase.prototype.createBackground.call(this);
    this.setBackgroundOpacity(128);
};

