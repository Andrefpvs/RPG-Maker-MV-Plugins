//=============================================================================
// Yanfly Engine Plugins - Quit Game (Implemented by André F. Silva, based on Yanfly code)
// YEP_AFPVS_QuitGame.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_AFPVS_QuitGame = true;

var Yanfly = Yanfly || {};
Yanfly.QUIT = Yanfly.QUIT || {};
Yanfly.QUIT.version = 1.00

//=============================================================================
 /*:
 * @plugindesc v1.01 Adds Quit Game option to the title screen
 * @author Yanfly Engine Plugins/André Fidalgo Silva
 *
 * @param Quit Game Text
 * @desc This is how the 'Quit Game' option will appear on the title screen.
 * @default Quit Game
 
 * @help
 * ============================================================================
 * Introduction                                                     .
 * ============================================================================
 * This plugin allows you to place a "Quit Game" option at the title
 * screen's command window towards the bottom.
 * Implemented by André F. Silva, based on Yanfly code.
 * Yanfly Core Engine plugin must be activated on the engine.
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_AFPVS_QuitGame');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.QuitGameText = String(Yanfly.Parameters['Quit Game Text']);
//=============================================================================
// SceneManager
//=============================================================================


//=============================================================================
// Game_Interpreter
//=============================================================================


//=============================================================================
// Window_TitleCommand
//=============================================================================

Yanfly.QUIT.Quit_TitleCommand_makeCommandList =
		Window_TitleCommand.prototype.makeCommandList;
Window_TitleCommand.prototype.makeCommandList = function() {
    Yanfly.QUIT.Quit_TitleCommand_makeCommandList.call(this);
		this.addQuitGameCommand();
};

Window_TitleCommand.prototype.addQuitGameCommand = function() {    
		this.addCommand(Yanfly.Param.QuitGameText, 'quitGame');
};


//=============================================================================
// Scene_Base
//=============================================================================

Yanfly.QUIT.Scene_Title_createCommandWindow =
		Scene_Title.prototype.createCommandWindow;
Scene_Title.prototype.createCommandWindow = function() {
    Yanfly.QUIT.Scene_Title_createCommandWindow.call(this);
		this._commandWindow.setHandler('quitGame', this.commandQuitGame.bind(this));
};

Scene_Title.prototype.commandQuitGame = function() {
	SceneManager.exit();
};

//=============================================================================
// End of File
//=============================================================================
