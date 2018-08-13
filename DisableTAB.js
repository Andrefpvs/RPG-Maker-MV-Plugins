/*=============================================================================
* DisableTAB.js
*=============================================================================*/

/*:=============================================================================
* @plugindesc Changes TAB key behavior for compatibility with Gamefocus plugin.
* @author Andre Fidalgo Silva
* @help Not enabling this plugin causes the Gamefocus plugin to freeze the game
* if the TAB key is pressed alone. Alt+TAB still works. 
* =============================================================================*/

(function() {

/* Overwrite (in practice only adds TAB key behaviour)*/
Graphics._onKeyDown = function(event) {
    if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
		case 9:   	// TAB
            event.preventDefault();
            break;
        case 113:   // F2
            event.preventDefault();
            this._switchFPSMeter();
            break;
        case 114:   // F3
            event.preventDefault();
            this._switchStretchMode();
            break;
        case 115:   // F4
            event.preventDefault();
            this._switchFullScreen();
            break;
        }
    }
};
})();

