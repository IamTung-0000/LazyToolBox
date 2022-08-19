# LazyToolBox 1.0
Photoshop Extension<br />
my Facebook page: https://www.facebook.com/lethanhtung0209

![alt text](https://github.com/m-myopia/LazyToolBox/blob/master/README_IMG/interface.jpg)

* Currently Compatible from CC2015 to CC2022
----------------------------------------------------------------------------------------------------
Many thanks to SLEIPNIR for his original idea and lasso scripts!<br />
https://github.com/roguesleipnir

i have update and modified SLEIPNIR's script with an user interface with a HTML5 panel with on/off button and add some other functions to fasten up my workflow.
the script is pretty simple but useful, the interface talk with adobe extend script through Adobe Common Extensibility Platform.

----------------------------------------------------------------------------------------------------

[INSTRUCTION]

* feature
- autofill lasso area when you drop the click
- hold shift while draw lasso to erase area
- can be use with any tool when in lasso mode

* note: 
- auto lassofill mode can only be use when lasso tool is in new slection mode


download link

![alt text](https://github.com/m-myopia/LazyToolBox/blob/master/README_IMG/download.jpg)

[installation]

1.copy "LassoFill_Main.jsx" and "LassoFill_AddListener.jsx" to  C:\Program Files\Adobe\"YOUR PHOTOSHOP VERSION"\Presets\Scripts

2.copy folder "com.myopia.lazytoolbox" to 
[window 64 bit]
"C:\Program Files (x86)\Common Files\Adobe\CEP\extensions"
[window 32 bit]
"C:\Program Files\Common Files\Adobe\CEP\extensions"

3.open folder putCEPtoDebugMode and follow instruction base on your OS
WIN:
just run 2 regedit file it will automatically put CEP in debug mode
<br>
Mac:
Put the .plist file in the /Users/your username/Library/Preferences directory and restart the computer

5.start photoshop, go to file --> Scripts run "LassoFill_AddListener" to enable scripts trigger.

6.run extension từ Window --> Extensions --> LazyToolBox








Have Fun


