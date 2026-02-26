// ==UserScript==
// @name         Stream recorder for adult cam sites that do not support HLS
// @namespace    Everywhere
// @version      1.1.0
// @description  Record stripchat, livejasmin and other cam sites that do not full support HLS/m3u8
// @author       Ladroop
// @license	     MIT
// @copyright    2026 Ladroop
// @match        https://*.stripchat.com/*
// @match        https://www.livejasmin.com/*
// @match        https://www.xcams.com/*
// @match        https://www.secretfriends.com/*
// @match        https://www.manyvids.com/*
// @match        https://www.soulcams.com/*
// @match        https://cameraprive.com/*
// @match        https://showup.tv/*
// @noframes
// @run-at       document-end
// @grant        GM_download
// @downloadURL https://openuserjs.org/install/ladroop2/Stream_recorder_for_adult_cam_sites_that_do_not_support_HLS.user.js
// @updateURL https://openuserjs.org/meta/ladroop2/Stream_recorder_for_adult_cam_sites_that_do_not_support_HLS.meta.js
// ==/UserScript==


(function() {
    'use strict';

   var recbutton='<svg fill="#000000" version="1.1" id="recbutton" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 50 50" xml:space="preserve" style="cursor:pointer;display:inline-block">'+
       '<g><g>'+
		'<path d="M0,18.961h4.842V6.052c0-0.446,0.362-0.807,0.807-0.807H18.56V0.404H5.649C2.535,0.404,0,2.939,0,6.053V18.961z"/>'+
		'<path d="M39.539,0.403h-12.91v4.841h12.91c0.445,0,0.807,0.362,0.807,0.807v12.91h4.842V6.052    C45.189,2.938,42.654,0.403,39.539,0.403z"/>'+
		'<path d="M4.842,39.136V26.225H0v12.911c0,3.113,2.535,5.648,5.649,5.648H18.56v-4.842H5.649    C5.204,39.942,4.842,39.58,4.842,39.136z"/>'+
		'<path d="M40.346,39.136c0,0.446-0.362,0.807-0.807,0.807H26.628v4.842h12.91c3.115,0,5.648-2.536,5.648-5.65V26.225h-4.842    L40.346,39.136L40.346,39.136z"/>'+
        '<circle fill="#FF0000" cx="22.594" cy="22.594" r="6.455"/>'+
        '</g></g></svg>';


    var stopbutton='<svg fill="#000000" version="1.1" id="stopbutton" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 50 50" xml:space="preserve" style="cursor:pointer;display:inline-block">'+
        '<g><g>'+
		'<path d="M0,18.961h4.842V6.052c0-0.446,0.362-0.807,0.807-0.807H18.56V0.404H5.649C2.535,0.404,0,2.939,0,6.053V18.961z"/>'+
		'<path d="M39.539,0.403h-12.91v4.841h12.91c0.445,0,0.807,0.362,0.807,0.807v12.91h4.842V6.052    C45.189,2.938,42.654,0.403,39.539,0.403z"/>'+
		'<path d="M4.842,39.136V26.225H0v12.911c0,3.113,2.535,5.648,5.649,5.648H18.56v-4.842H5.649    C5.204,39.942,4.842,39.58,4.842,39.136z"/>'+
		'<path d="M40.346,39.136c0,0.446-0.362,0.807-0.807,0.807H26.628v4.842h12.91c3.115,0,5.648-2.536,5.648-5.65V26.225h-4.842    L40.346,39.136L40.346,39.136z"/>'+
        '<rect fill="#00FF00" x="15.5" y="15.5"  width="15" height="15"/>'+
        '</g></g></svg>';

    var pauzebutton='<svg fill="#000000" version="1.1" id="pauzebutton" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 50 50" xml:space="preserve" style="cursor:pointer;display:none">'+
        '<g><g>'+
		'<path d="M0,18.961h4.842V6.052c0-0.446,0.362-0.807,0.807-0.807H18.56V0.404H5.649C2.535,0.404,0,2.939,0,6.053V18.961z"/>'+
		'<path d="M39.539,0.403h-12.91v4.841h12.91c0.445,0,0.807,0.362,0.807,0.807v12.91h4.842V6.052    C45.189,2.938,42.654,0.403,39.539,0.403z"/>'+
		'<path d="M4.842,39.136V26.225H0v12.911c0,3.113,2.535,5.648,5.649,5.648H18.56v-4.842H5.649    C5.204,39.942,4.842,39.58,4.842,39.136z"/>'+
		'<path d="M40.346,39.136c0,0.446-0.362,0.807-0.807,0.807H26.628v4.842h12.91c3.115,0,5.648-2.536,5.648-5.65V26.225h-4.842    L40.346,39.136L40.346,39.136z"/>'+
        '<rect fill="#111111" x="10" y="10"  width="10" height="25"/>'+
        '<rect fill="#111111" x="25" y="10"  width="10" height="25"/>'+
        '</g></g></svg>';

    var pauzerecbutton='<svg fill="#000000" version="1.1" id="pauzerecbutton" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50px" height="50px" viewBox="0 0 50 50" xml:space="preserve" style="cursor:pointer;display:none">'+
        '<g><g>'+
		'<path d="M0,18.961h4.842V6.052c0-0.446,0.362-0.807,0.807-0.807H18.56V0.404H5.649C2.535,0.404,0,2.939,0,6.053V18.961z"/>'+
		'<path d="M39.539,0.403h-12.91v4.841h12.91c0.445,0,0.807,0.362,0.807,0.807v12.91h4.842V6.052    C45.189,2.938,42.654,0.403,39.539,0.403z"/>'+
		'<path d="M4.842,39.136V26.225H0v12.911c0,3.113,2.535,5.648,5.649,5.648H18.56v-4.842H5.649    C5.204,39.942,4.842,39.58,4.842,39.136z"/>'+
		'<path d="M40.346,39.136c0,0.446-0.362,0.807-0.807,0.807H26.628v4.842h12.91c3.115,0,5.648-2.536,5.648-5.65V26.225h-4.842    L40.346,39.136L40.346,39.136z"/>'+
        '<rect fill="#111111" x="10" y="10"  width="10" height="25"><animate attributeName="fill" values="#ff0000;#111111" begin="0s" dur="2s" calcMode="discrete" repeatCount="indefinite"/></rect>'+
        '<rect fill="#111111" x="25" y="10"  width="10" height="25"><animate attributeName="fill" values="#ff0000;#111111" begin="0s" dur="2s" calcMode="discrete" repeatCount="indefinite"/></rect>'+
        '</g></g></svg>';

    var status="stop";
    var recName="";
    var site=document.location.href.split("/")[2].split(".");
    site=site[site.length-2];
    var location="";
    var mediaRecorder;
    var recordedBlobs=[];
    var stream;
    var video;
    var blob;
    var vidObj=0;
    var firefox=false;
    var starttime="";
    var rectime=0;
    var stopPressed=false;
    var mediarecorderInit=false;
    var timeoutID=0;
    var timeoutID2=0;
    var timeoutID3=0;
    var savetime=20;
    var mimeType=['video/mp4',
                  'video/webm',
                  'video/webm'];
    var extention=['.mp4',
                   '.webm',
                   '.webm'];
    var container=['video/mp4',
                   'video/webm',
                   'video/webm'];
    var n=0;
    for(n=0;n < mimeType.length-1;n++) {
        if (MediaRecorder.isTypeSupported(mimeType[n])){break;}
    }
    var type="";

    setInterval(pagechange1,1000);

    function pagechange1(){
        if (document.location.href==location){return;}
        location=document.location.href;
        clearTimeout(timeoutID2);
        clearTimeout(timeoutID3);
        stopPressed=true;
        if ((status=="rec")||(status=="pauze")){
            stoprecord();
        }
        pagechange();
    }

    function pagechange(){
        if (status != "stop"){
            setTimeout(pagechange,1000);
            return;
        }
        if (document.getElementById("popitup1")){
            document.getElementById("popitup1").remove();
        }
        getrecname();
    }

    function getrecname(){
        var name="video";

        if (site=="livejasmin"){
            if (location.indexOf("chat")==-1){return;}
            name=location.split("/")[location.split("/").length-1];
            vidObj=1;
        }

        if (site=="stripchat"){
            name=location.split("/")[3].split("?")[0];
        }

        if (site=="showup"){
            name=location.split("/")[3];
            if(name=="en"){
                name=location.split("/")[4];
            }
            if(!name){return;}
        }

        if (site=="secretfriends"){
            name=location.split("/")[4].split("?")[0];
        }

        if (site=="xcams"){
            if (location.split("/")[4]!="chat"){return;}
            name=location.split("/")[5];
        }

        if (site=="manyvids"){
            if (location.split("/")[4]!="cam"){return;}
            name=location.split("/")[5];
        }

        if (site=="soulcams"){
            name=location.split("/")[4];
        }

        if (site=="cameraprive"){
            name=location.split("/")[5];
        }

        recName=site+"-"+name;

        timeoutID2=setTimeout(findvideo,6000);
    }

    function findvideo(){
        if (document.getElementsByTagName("video").length > vidObj){
            video=document.getElementsByTagName("video")[vidObj];
            if (video.srcObject==null){
                if (video.src.indexOf("blob:")==-1){return;}
            }
            getStream();
        }
    }

    function getStream(){
        stream = video.captureStream ? video.captureStream() : video.mozCaptureStream();
        if (!video.captureStream){firefox=true;}
        makepopitup();
        document.getElementById("minivideo").srcObject=stream;
    }

    function autosave(){
        if (rectime<10){
            dlready();
            return;
        }
        status="saving";
        msg("Saving");
        blob = new Blob(recordedBlobs, {type: container[n]});
        GM_download({
            url: blob,
            name: recName+starttime+extention[n],
            onload: dlready,
        });
    }

    function dlready(){
        blob="";
        recordedBlobs=[];
        status="stop";
        if((document.getElementById("autosave").value==1)&&(stopPressed==false)){
            if(rectime<savetime*60){
                msg("Waiting");
                setTimeout(startRecording,5000);
                return;
            }
            startRecording();
            return;
        }
        msg("Stopped");
        document.getElementById("recbutton").style.display="inline-block";
        document.getElementById("pauzebutton").style.display="none";
        document.getElementById("pauzerecbutton").style.display="none";
    }

    function startRecording() {
        if (mediarecorderInit){recordStart();return;}
        var bitRate=video.videoHeight*video.videoWidth*3;
        if (bitRate> 8000000){bitRate=8000000;}
        type=mimeType[n];
        if (document.getElementById("avc3").value==1){
            type='video/mp4; codecs="avc3.64001F, mp4a.40.2"';
        }
        mediaRecorder = new MediaRecorder(stream,{
            mimeType:type,
            VideobitsPerSecond: bitRate,
            AudiobitsPerSecond: 64000
        });
        mediaRecorder.onstop = mediaRecorderStopped;
        mediaRecorder.ondataavailable = handleDataAvailable;
        mediarecorderInit=true;
        recordStart();
    }

    function recordStart(){
        starttime="_"+new Date().toISOString().split(".")[0]+"GMT";
        starttime=starttime.replaceAll(":","_");
        rectime=0;
        stopPressed=false;
        status="rec";
        document.getElementById("recbutton").style.display="none";
        document.getElementById("pauzebutton").style.display="inline-block";
        try {
            mediaRecorder.start(1000);
        } catch (e) {
            msg("Error");
            status="stop";
            document.getElementById("recbutton").style.display="inline-block";
            document.getElementById("pauzebutton").style.display="none";
            document.getElementById("pauzerecbutton").style.display="none";
            setTimeout(function(){msg("Stopped");},3000);
            return;
        }
        clearTimeout(timeoutID);
        timedisplay();
    }

    function handleDataAvailable(event) {
        clearTimeout(timeoutID3);
        if (event.data && event.data.size > 0) {
            recordedBlobs.push(event.data);
        }
        timeoutID3=setTimeout(stoprecord,100000);
    }

    function mediaRecorderStopped(){
        clearTimeout(timeoutID3);
        document.getElementById("recbutton").style.display="inline-block";
        document.getElementById("pauzebutton").style.display="none";
        document.getElementById("pauzerecbutton").style.display="none";
        autosave();
    }

    function stoprecord(){
        if (status=="stop"){return;}
        if (status=="saving"){return;}
        stopPressed=true;
        mediaRecorder.stop();
    }

    function startrecord(){
        if (status!="stop"){return;}
        mediarecorderInit=false;
        startRecording();
    }

    function pauzerecord(){
        status="pauze";
        mediaRecorder.pause();
        document.getElementById("pauzebutton").style.display="none";
        document.getElementById("pauzerecbutton").style.display="inline-block";
    }

    function resumerecord(){
        status="rec";
        mediaRecorder.resume();
        document.getElementById("pauzebutton").style.display="inline-block";
        document.getElementById("pauzerecbutton").style.display="none";
    }

    function timedisplay(){
        if (status=="rec"){
            if ((document.getElementById("autosave").value==1)&&(rectime>savetime*60)){
                mediaRecorder.stop();
                return;
            }
            var h = Math.floor(rectime / 3600);
            var H=("0"+h).substr(-2);
            var m = Math.floor(rectime % 3600 / 60);
            var M=("0"+m).substr(-2);
            var s = Math.floor(rectime % 3600 % 60);
            var S=("0"+s).substr(-2);
            msg("Rec.&nbsp"+H+"h&nbsp"+M+"m&nbsp"+S+"s");
            rectime++;
        }
        timeoutID=setTimeout(function(){
            if (status != "stop"){
                timedisplay();
            }
        },1000);
    }

    function miniunmute(){
        document.getElementById("minivideo").muted=false;
        document.getElementById("minimute").style.display="none";
    }
    function msg(message){
        document.getElementById("message123").innerHTML=message;
    }

    function makepopitup(){
        var popstyle="font-family: monospace;font-size: 12px;color:black;z-index:100000;top:100px;left:10px;box-shadow:0px 0px 32px rgba(0, 0, 0, 0.32);border-radius:4px;border:1px solid rgb(221, 221, 221);background-color:rgb(200, 200, 200);position:fixed; display:inline-block; height: auto; width:auto; padding: 6px 6px 6px 6px;";
        var newelem=document.createElement('span');
        newelem.setAttribute("style", popstyle);
        newelem.id="popitup1";
        newelem.className="notranslate";
        var newdiv=document.createElement('div');
        newdiv.style.width="100%";
        newdiv.style.height="50px";
        newdiv.innerHTML="<span>"+pauzebutton+pauzerecbutton+recbutton+"</span><span style='float:right'>"+stopbutton+"</span>";
        newelem.appendChild(newdiv);
        newdiv=document.createElement('div');
        newdiv.style.position="relative";
        newdiv.style.width="100%";
        newdiv.style.height="20px";
         newdiv.innerHTML="<span>Autosave:</span><span style='float:right;position: absolute; right: 5px; top:1px;'><input type='range' id='autosave' min=0 max=1 value=0 style='width: 40px;height:11px;cursor: pointer;zoom:0.8'></span>";
        newelem.appendChild(newdiv);
        newdiv=document.createElement('div');
        newdiv.style.position="relative";
        newdiv.style.width="100%";
        newdiv.style.height="20px";
        newdiv.innerHTML="<span>Use avc3:</span><span style='float:right;position: absolute; right: 5px; top:1px;'><input type='range' id='avc3' min=0 max=1 value=0 style='width: 40px;height:11px;cursor: pointer;zoom:0.8'></span>";
        newdiv.style.display="none";
        if (MediaRecorder.isTypeSupported('video/mp4; codecs="avc3.64001F, mp4a.40.2"')){
          newdiv.style.display="block";
        }
        newelem.appendChild(newdiv);
        var newdiv2=document.createElement('div');
        newdiv=document.createElement('div');
        newdiv.style.width="100%";
        newdiv.style.height="20px";
        newdiv.style.color="black";
        newdiv.id="message123";
        newdiv.innerHTML="Stopped";
        newdiv.style.cursor="move";
        newdiv.addEventListener("mousedown",dragMouseDown);
        newelem.appendChild(newdiv);
        newdiv2.style.position="relative";
        if (firefox){
            newdiv=document.createElement('div');
            newdiv.innerHTML="🔇";
            newdiv.id="minimute";
            newdiv.style.position="absolute";
            newdiv.style.zIndex="100001";
            newdiv.style.top="0px";
            newdiv.style.cursor="pointer";
            newdiv.addEventListener("click",miniunmute);
            newdiv2.appendChild(newdiv);
        }
        newdiv=document.createElement('video');
        newdiv.style.position="relative";
        newdiv.style.width="120px";
        newdiv.style.height="auto";
        newdiv.style.border="1px solid rgb(20, 20, 20)";
        newdiv.style.top="0px";
        newdiv.style.margin="2px";
        newdiv.style.backgroundColor="black";
        newdiv.id="minivideo";
        newdiv.muted = true;
        newdiv.autoplay = true;
        newdiv.playsinline = true;
        newdiv.style.cursor="move";
        newdiv.addEventListener("mousedown",dragMouseDown);
        newdiv2.appendChild(newdiv);
        newelem.appendChild(newdiv2);
        document.getElementsByTagName("body")[0].appendChild(newelem);
        document.getElementById("recbutton").addEventListener("click",startrecord);
        document.getElementById("stopbutton").addEventListener("click",stoprecord);
        document.getElementById("pauzerecbutton").addEventListener("click",resumerecord);
        document.getElementById("pauzebutton").addEventListener("click",pauzerecord);
    }

    var pos1=0;
    var pos2=0;
    var pos3=0;
    var pos4=0;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        var x =parseInt(document.getElementById("popitup1").style.left);
        var y =parseInt(document.getElementById("popitup1").style.top);
        if ((pos3>=110)&&(pos3<=window.innerWidth-150)){
            document.getElementById("popitup1").style.left = (x - pos1) + "px";
        }
        if ((y-pos2>-50)&&(pos4<=window.innerHeight-20)){
            document.getElementById("popitup1").style.top = (y - pos2) + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
})();
