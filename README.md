

Adds a record button to adult webcam sites that do not support HLS or use non standard HLS

it works on:

stripchat.com
www.manyvids.com
www.livejasmin.com
www.xcams.com
www.secretfriends.com
www.soulcams.com
www.cameraprive.com
showup.tv

-After ~6 seconds a little panel will occur with stop/record and preview.
-Just click the rec button to start recording and click again to pauze and stop to save it to disk.
-With a mouse pull you can move the little panel to an other place.
-If you right click the preview video you can go full screen, picture in picture and make a snapshot.
-If you turn autosave on it will save the recordings every 20 minutes to disk.
-When autosave is on it will also resume the recording if it stopped on errors in the stream.
-Recordings under 10 seconds are not saved to disk.
-It saves without dialog , also with firefox.
-It will use the browsers default codec,
For Firefox this is "video/webm , vp80 opus"
For Chrome this is "video/mp4 , vp9 opus"
If acv3 is available (chrome) you have a selector to use 'video/mp4; codecs="avc3.64001F, mp4a.40.2"'.
acv3 is a better codec (smaller files) but can give problems if your computer is a bit slow , you just have to try it.
And a better codec will not always say that it's a better quality video.
-If you have no sound in firefox and you can not unmute it in the main video then click the mute icon in the preview.
After that the audio in the main video will work again (that's a firefox bug).

How to make the best recordings:
-If the player got a resolution selector then select a fixed resolution (not auto).
-If you go to an other tab during the recording the site may fall back to a lower resolution.
In Firefox you can prevent this by opening picture in picture (this trick does not work in chrome ..)

known problems:
-On some sites (e.g. xcams) the recording does not stop if the video goes offline.
-Manyvids does not record sound. (blame manyvids)

-This script is made with tampermonkey with chrome and with firefox
If you have an other configuration .. just try it.


These 2 scrips together cover all for me known major camsites.
if you're on an other site it's most likely just a clone of one of the sites.
