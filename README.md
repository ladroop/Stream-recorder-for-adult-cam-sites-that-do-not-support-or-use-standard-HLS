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

-If the script detects live video on the page a little panel will occur after ~6 seconds with stop/record and preview.

-Just click the rec button to start recording and click again to pauze and stop to save it to disk.

-With a mouse pull you can move the little panel to an other place.

-If you right click the preview video you can go full screen, picture in picture and make a snapshot.

-If you turn autosave on it will save the recordings every 20 minutes to disk and then resume recording.

-If the recording stops due to an error in the stream it will save to disk and try to resume the recording after 10 seconds.
if that fails it stops.

-It will show the amount of parts it recorded (due to autosave or errors) and the total record time.

-Recordings under 10 seconds are not saved to disk.

-If the recorder looses the connection with the stream then press the reconnect symbol in the top right of the video.
(this may happen if the stream goes offline and comes back later, the preview will then be black or frozen)

-It saves without dialog , also with firefox.

-In firefox it will use the default codec , this is "video/webm , vp8 opus".

-In chrome and opera it will use the 'video/mp4; codecs="avc3.64001F, mp4a.40.2"' codec.

-In chrome and opera you have a switch "use avc3". If you turn it off it will use the "video/mp4 , vp9 opus" codec.
(acv3 is a better codec (smaller files) but can give problems if your computer is a bit slow , you just have to try it.
And a better codec will not always say that it's a better quality video.)

-If you have no sound in firefox and you can not unmute it in the main video then click the mute icon in top left the preview.
After that the audio in the main video will work again (that's a firefox bug).
(firefox fixed this in version 149.0)

How to make the best recordings:

-If the player got a resolution selector then select a fixed resolution (not auto).

-If you go to an other tab during the recording the site may fall back to a lower resolution.
In Firefox you can prevent this by opening picture in picture (this trick does not work in chrome ..)

known problems:
-Manyvids does not record sound. (blame manyvids)

-This script is made with tampermonkey with chrome and with firefox and also tested with violentmonkey and opera
If you have an other configuration .. just try it.

---

This is github so some tech information: 

Firefox supports only one codec ,'video/webm , vp8'

If you don't specify a codec it will ofc use that codec.

if you specify a codec and also an audio codec , 'video/webm , vp8 opus' but you want to record a stream that got no audio track the recorder will never become active (and no errors or warnings).

so it's best to use no codec specification and just use 'video/webm'.

chrome (and also opera) supports a lot of codec's but if you don't specify a codec it will use "video/mp4 avc1".

avc1 can't handle resolution changes during the recording , and that may happen if you record live streams.

so in chrome you must specify a codec.

And chrome got no problem with a missing audio track.



