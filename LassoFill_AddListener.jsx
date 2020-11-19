//Copy the scripts to the Photoshop folder
var eventFile = new File(app.path +  "/Presets/Scripts/LassoFill_Main.jsx")

//Add the notifier to the Script Event Manager.
//Apparently this doesn't work when done from the window.
app.notifiers.add("setd", eventFile)