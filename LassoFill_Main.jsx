//excute function -------------------------------------------------------
lassoFill();




//function code block ---------------------------------------------------

//check setting file if lassoFill Feature is turnOn
function check (str_result)
{
    //Check if LassoFill turn on
    var SettingFile = File("/Program Files (x86)/Common Files/Adobe/CEP/extensions/com.myopia.lazytoolbox/host/MyopiaSettings.txt");
    SettingFile.encoding = 'UTF8'; // set to 'UTF8' or 'UTF-8'
    SettingFile.open("r");
    var fileContentsString = SettingFile.read();
    SettingFile.close();
    var str = str_result
    var result = fileContentsString.match(str);
    return result;
}

//lassoFill Function
function lassoFill ()
{
	try {
        
        //If bounds are null then there is no selection.
        //But null check fails? So use Try/Catch instead.
        if (app.activeDocument.selection.bounds) {
            //Check Shift Modifier
            SHIFT = ScriptUI.environment.keyboardState.shiftKey;
            
            //LassoFill
            if (check(/LassoFill_True/g) != null) {
                switch(SHIFT) {
                    case false:
                        app.activeDocument.selection.fill(app.foregroundColor);
                        app.activeDocument.selection.deselect();
                    break;
                    
                    case true:
                        var idDlt = charIDToTypeID( "Dlt " );
                        executeAction( idDlt, undefined, DialogModes.NO );
                        app.activeDocument.selection.deselect();
                    break;
                    default:
                }
            }
        }
	}

	
	catch (exception) {
		
	}

}


