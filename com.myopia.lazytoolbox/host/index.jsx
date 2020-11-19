////////////////////// MYOPIA TOOLKIT 0.1 ///////////////////
/*
@Author: Le Thanh Tung .
@contact: lttung.0209@gmail.com.
@Develop for Adobe Photoshop CC 2019 and higher version.
 */
///////////////////////////////////////////////////////////////////////////////////


function write(n) {
    var SettingFile = File("/Program Files (x86)/Common Files/Adobe/CEP/extensions/com.myopia.lazytoolbox/host/MyopiaSettings.txt");
    SettingFile.open("w");
    SettingFile.write(n);
    SettingFile.close();
}

function LassoOn() {
     write("LassoFill_True");
};

function LassoOff() {
    write("LassoFill_False");
};

function refill(){
	app.activeDocument.activeHistoryState = app.activeDocument.historyStates[app.activeDocument.historyStates.length-2];
}

function newLayer(){
	app.activeDocument.artLayers.add();
	
}
