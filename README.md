# LazyToolBox 1.0
Photoshop Extension<br />
my Facebook page: https://www.facebook.com/lethanhtung0209

![alt text](https://github.com/m-myopia/LazyToolBox/blob/master/README_IMG/interface.jpg)

*Compatible from  CC2015 to CC2021
----------------------------------------------------------------------------------------------------
Many thanks to SLEIPNIR for his original idea and lasso scripts!<br />
https://github.com/roguesleipnir

i have update and modified SLEIPNIR's script with an user interface with a HTML5 panel with on/off button and add some other functions to fasten up my workflow.
the script is pretty simple but useful, the interface talk with adobe extend script through Adobe Common Extensibility Platform.

----------------------------------------------------------------------------------------------------
**[Hướng Dẫn]

[VIETNAM]

Hướng dẫn download cho ai không rành github thì nút download ở chỗ này :D
![alt text](https://github.com/m-myopia/LazyToolBox/blob/master/README_IMG/download.jpg)

*note: Có thể giữ shift khi dùng lasso để xóa trong vùng chọn
*Có thể sử dụng với bất kỳ tool nào khi ở chế độ khoanh vùng

[Hướng dẫn cài]

1.chép 2 file "LassoFill_Main.jsx" và "LassoFill_AddListener.jsx" vào  C:\Program Files\Adobe\Adobe Photoshop CC 2019(còn tùy vào phiên bản bạn đang sử dụng)\Presets\Scripts

2.chép folder "com.myopia.lazytoolbox" vào 
[với window 64 bit]
"C:\Program Files (x86)\Common Files\Adobe\CEP\extensions"
[với window 32 bit]
"C:\Program Files\Common Files\Adobe\CEP\extensions"

3.mở thư mục putCEPtoDebugMode
<br>
WIN:
chạy 2 file .reg để đưa CEP photoshop vào debug mode
<br>
Mac:
đưa các file .plist vào thư mục/Users/your username/Library/Preferences và khởi động lại máy

4.khởi động photoshop, vào file --> Scripts chạy file "LassoFill_AddListener" một lần đầu tiên để cài scripts trigger.

5.chạy extension từ Window --> Extensions --> LazyToolBox

-------------------------------------------------------

****LƯU Ý: nếu có vấn đề không sử dụng được có thể mở file "LassoFill_Main.jsx" bằng notepad hoặc phần mềm chỉnh sửa văn bản bất kỳ edit dòng sau:

SettingFile = File("/Program Files (x86)/Common Files/Adobe/CEP/extensions/com.myopia.lazytoolbox/host/MyopiaSettings.txt");

--------------------------------------------------------
/Program Files (x86)/Common Files/Adobe/CEP/extensions
-------------------------------------------------------
thay thế phần trên bằng đường dẫn nơi đã copy thư mục "com.myopia.lazytoolbox"

ví dụ:  \Program Files\Common Files\Adobe\CEP\extensions
đối với window 32 bit, sau đó copy trả lại folder "com.myopia.lazytoolbox" theo bước một

[ENGLIGH]

*note: 
- auto lassofill mode can only be use when lasso tool is in new slection mode
- hold shift to delete lasso area
- can be use with any tool when in lasso mode

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
Mac:
Put the .plist file in the /Users/your username/Library/Preferences directory and restart the computer

5.start photoshop, go to file --> Scripts run "LassoFill_AddListener" to enable scripts trigger.

6.run extension từ Window --> Extensions --> LazyToolBox








Have Fun


