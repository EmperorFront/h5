/*! tohaw 2016 */
!function(){function a(){Ya||(Ya=new tel.Telephone,b()),ca(3),bb.s1=Ya,Ua.addChild(Ya),va(bb.s1),z(),na("uisound")}function b(){for(var a=0;12>a;a++)Ya["btn_key"+a].name="key_"+a;if(Ya.addEventListener("mousedown",c),"undefined"!=typeof detail){var b=new detail.TelephoneBg;b.mouseEnabled=!1,Ya.mc_bg.addChildAt(b,0)}}function c(a){var b=a.target.name,c=parseInt(b.split("_")[1]);if(10>c){var f=ob[c];na("k"+f),5==mb.length?(mb="",d()):(e(c),d())}else 11==c&&(mb="",d())}function d(){for(var a=1;5>=a;a++)Ya["d"+a].gotoAndStop(0);for(var b=nb.split(""),c=mb.split(""),d=c.length,e=5-d,a=0;5>a;a++){var f=c[a],g=a+1+e,h=Ya["d"+g];if(f){var i=parseInt(f)+1;b[a]!=ob[f]&&(i+=10),h&&h.gotoAndStop(i)}}}function e(a){mb.length>=5&&(mb=""),mb+=a,mb==sb&&ca(31),3==mb.length&&Ra&&(ca(32),Ra=!1)}function f(){Ja||(Ja=new tel.CodedLock,g()),bb.s1=Ja,Ua.addChild(Ja),va(bb.s1),z(),na("uisound"),t(fb+"videos/clip-doctor.mp4")}function g(){for(var a=1;4>=a;a++)Ja["code"+a].addEventListener("click",h);if("undefined"!=typeof detail){var b=new detail.CodedLockBg;b.mouseEnabled=!1,b.mc_opend.visible=!1,Ja.bg=b,Ja.mc_bg.addChildAt(b,0)}}function h(a){if(!Ma){var b=a.currentTarget.mc_num,c=b.currentFrame,d=b.totalFrames;a.target==a.currentTarget.btn_up?(c--,0>c&&(c=d-1)):a.target==a.currentTarget.btn_down&&(c++,c>=d&&(c=0)),b.gotoAndStop(c),na("_0024_ui_feedback_12",!1);for(var e="",f=1;4>=f;f++)e+=Ja["code"+f].mc_num.currentFrame;if(e==createjs.Touch.codes){Ma=!0,na("unlock"),Ja.bg.mc_opend.visible=!0,setTimeout(function(){w(fb+"videos/clip-doctor.mp4",function(){t(fb+"videos/clip-black.mp4"),I(),ka(),wa(),Q(),ca(21)}),xa(),bb.s1.parent&&(ua(bb.s1,function(){Ua.removeChild(bb.s1),ea()}),bb.s1=void 0)},500);var g=parseInt(((new Date).getTime()-eb)/1e3);MtaH5.clickStat("GameLevelUp",{time:g})}}}function i(){Ba||(Ba=new detail.IceBox,Ba.addEventListener("click",r)),ca(17),t(fb+"videos/clip-icebox.mp4"),bb.s1=Ba,Ua.addChild(Ba),va(bb.s1),z(),na("uisound")}function j(){Ka||(Ka=new detail.TeaTable,Ka.addEventListener("click",r)),t(fb+"videos/flash_02.mp4"),bb.s1=Ka,Ua.addChild(Ka),va(bb.s1),z(),na("uisound")}function k(){Ca||(Ca=new detail.BookBox,Ca.addEventListener("click",r)),ca(35),bb.s1=Ca,Ua.addChild(Ca),va(bb.s1),z(),na("uisound")}function l(){Da||(Da=new detail.FishBox,Da.addEventListener("click",r)),ca(18),t(fb+"videos/clip-fishbox.mp4"),bb.s1=Da,Ua.addChild(Da),va(bb.s1),z(),na("uisound")}function m(){Ea||(Ea=new detail.Mirror,Ea.addEventListener("click",r)),t(fb+"videos/clip-mirror.mp4"),bb.s1=Ea,ca(19),Ua.addChild(Ea),va(bb.s1),z(),na("uisound")}function n(){Fa||(Fa=new detail.Monitor,Fa.addEventListener("click",r)),bb.s1=Fa,Ua.addChild(Fa),va(bb.s1),z(),na("uisound")}function o(){Ga||(Ga=new detail.SmokenBox,Ga.addEventListener("click",r)),t(fb+"videos/clip-smoken.mp4"),bb.s1=Ga,Ua.addChild(Ga),va(bb.s1),z(),na("uisound")}function p(){Ha||(Ha=new detail.Sofa,Ha.addEventListener("click",r)),ca(20),t(fb+"videos/clip-sofa.mp4"),bb.s1=Ha,Ua.addChild(Ha),va(bb.s1),z(),na("uisound")}function q(){Ia||(Ia=new detail.Tvset,Ia.addEventListener("click",r)),ca(1),bb.s1=Ia,Ua.addChild(Ia),Ia.mc_dot.visible=!0,va(bb.s1),z(),na("uisound")}function r(a){function b(){$("#movieReverse").show(),d.currentTime=0}function b(){$("#movieReverse").show(),d.currentTime=0}function b(){$("#movieReverse").show(),d.currentTime=0}function b(){$("#movieReverse").show(),d.currentTime=0}if(Ba==a.currentTarget){if(Ba.hot1==a.target){var c=1.2,d=$("#movie1")[0];Na=function(){$("#movieReverse").hide(),d.play(),d.currentTime<c&&(u(c,function(){$("#movieReverse").show(),ca(7)}),d.addEventListener("ended",v),Oa=b)},d.addEventListener("playing",function(){$("#movieReverse").show(),$("#movieReverse").css({top:"820px",left:"312px"}),d.pause(),d.removeEventListener("playing",arguments.callee)}),w(fb+"videos/clip-icebox.mp4",b,!0),ja(),ga()}}else if(Da==a.currentTarget){if(Da.hot1==a.target){var c=1.2,d=$("#movie1")[0];Na=function(){$("#movieReverse").hide(),d.play(),d.currentTime<c&&(u(c,function(){$("#movieReverse").show(),ca(6)}),d.addEventListener("ended",v),Oa=b)},d.addEventListener("playing",function(){$("#movieReverse").show(),$("#movieReverse").css({top:"720px",left:"144px"}),d.pause(),d.removeEventListener("playing",arguments.callee)}),w(fb+"videos/clip-fishbox.mp4",b,!0),ja(),ga()}}else if(Ea==a.currentTarget){if(Ea.hot1==a.target){var c=1.2,d=$("#movie1")[0];Na=function(){$("#movieReverse").hide(),d.play(),d.currentTime<c&&(u(c,function(){$("#movieReverse").show(),ca(5)}),d.addEventListener("ended",v),Oa=b)},d.addEventListener("playing",function(){$("#movieReverse").show(),$("#movieReverse").css({top:"658px",left:"120px"}),d.pause(),d.removeEventListener("playing",arguments.callee)}),w(fb+"videos/clip-mirror.mp4",b,!0),ja(),ga()}}else if(Ha==a.currentTarget){if(Ha.hot1==a.target){var c=1.14,d=$("#movie1")[0];Na=function(){$("#movieReverse").hide(),d.play(),d.currentTime<c&&(u(c,function(){$("#movieReverse").show(),ca(4)}),d.addEventListener("ended",v),Oa=b)},d.addEventListener("playing",function(){$("#movieReverse").show(),$("#movieReverse").css({top:"760px",left:"312px"}),d.pause(),d.removeEventListener("playing",arguments.callee)}),w(fb+"videos/clip-sofa.mp4",b,!0),ja(),ga()}}else if(Ka==a.currentTarget)Ka.hot1==a.target?(_a.l2=!0,w(fb+"videos/flash_02.mp4",function(){teatableHideFn=function(){ya.updateNber(),ca(34),teatableHideFn=void 0},ja()})):Ka.hot2==a.target&&(_a.l4=!0,w(fb+"videos/flash_04.mp4",function(){teatableHideFn=function(){ya.updateNber(),ca(34),teatableHideFn=void 0},ja()}));else if(Ga==a.currentTarget)Ga.hot1==a.target&&(w(fb+"videos/clip-smoken.mp4",function(){ca(8),ja()},!0),ga());else if(Ia==a.currentTarget){if(Ia.hot1==a.target){var e=$("#tvset")[0];e.addEventListener("ended",function(){$("#tvset").hide(),Ia.mc_dot.visible=!0}),La=setTimeout(function(){ca(0)},15e3),e.currentTime=0,e.play(),Ia.mc_dot.visible=!1,$("#tvset").show()}}else if(Fa==a.currentTarget&&Fa.hot1==a.target){var f=$("#monitor")[0];f.addEventListener("ended",function(){$("#monitor").hide(),ca(30)}),La=setTimeout(function(){ca(2)},5e3),f.currentTime=0,f.play(),$("#monitor").show()}}function s(){Na&&Na()}function t(a){var b=$("#movie1")[0];b.src=a}function u(a,b){function c(){Qa.currentTime>=a&&(Qa.pause(),clearInterval(Pa),b&&b())}cb||(Qa=$("#movie1")[0],Pa=setInterval(c,100))}function v(){1!=Sa&&(ha(),bb.s2=void 0,I()),Oa&&Oa(),Oa=void 0;var a=$("#movie1")[0];a.removeEventListener("ended",v)}function w(a,b,c){if(Sa=c,void 0==Sa&&(Sa=!1),Oa=b,clearInterval(Pa),cb)return Oa&&Oa(),void(Oa=void 0);var d=$("#movie1")[0];a&&a!=d.src&&(d.src=a),bb.s2="#movie1",d.addEventListener("ended",v),d.play(),ia(),ka(),setTimeout(J,100)}function x(){var a=$("#movie1")[0];a.pause(),ha(),I(),bb.s2=void 0,clearInterval(Pa),Oa&&Oa(),Oa=void 0}function z(){createjs.Tween.get().wait(600).call(function(){ja()})}function A(a){wx.config({debug:!1,appId:a.appId,timestamp:a.timestamp,nonceStr:a.nonceStr,signature:a.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","getNetworkType","hideOptionMenu","showOptionMenu","closeWindow","chooseImage","previewImage","uploadImage","downloadImage"]}),wx.error(function(a){alert(a.errMsg)}),wx.ready(function(){B()})}function B(){C()}function C(){wx.onMenuShareAppMessage({title:ra(),desc:qa(),link:pa(),imgUrl:oa(),trigger:function(a){D("ShareTrigger","AppMessage")},success:function(a){D("ShareSuccess","AppMessage")},cancel:function(a){D("ShareCancel","AppMessage")},fail:function(a){D("ShareFail","AppMessage")}}),wx.onMenuShareTimeline({title:ra(),desc:qa(),link:pa(),imgUrl:oa(),trigger:function(a){D("ShareTrigger","Timeline")},success:function(a){D("ShareSuccess","Timeline")},cancel:function(a){D("ShareCancel","Timeline")},fail:function(a){D("ShareFail","Timeline")}})}function D(a,b){"function"==typeof sa&&sa(a,b);var c={event:"CS_USER_SHARE",attr:{action:a}};"ShareSuccess"==a&&(c.attr.type=b),"object"==typeof analytics&&analytics.send(c)}function E(){$a=document.getElementById("scene"),images=images||{},ss=ss||{};var a=new createjs.LoadQueue(!0);a.installPlugin(createjs.Sound),a.addEventListener("fileload",F),a.addEventListener("complete",G),a.loadManifest(tel.properties.manifest),a.loadManifest(detail.properties.manifest),a.loadManifest(phone.properties.manifest),a.loadManifest([{src:"sounds/gameTip.mp3",id:"gameTip"},{src:"sounds/viber.mp3",id:"viber"}]),a.loadFile({src:"images/s1.jpg",type:createjs.AbstractLoader.BINARY})}function F(a){"image"==a.item.type&&(images[a.item.id]=a.result),gb++,ma(gb)}function G(a){var b=a.target,c=tel.ssMetadata;for(pb=0;pb<c.length;pb++)ss[c[pb].name]=new createjs.SpriteSheet({images:[b.getResult(c[pb].name)],frames:c[pb].frames});var c=detail.ssMetadata;for(pb=0;pb<c.length;pb++)ss[c[pb].name]=new createjs.SpriteSheet({images:[b.getResult(c[pb].name)],frames:c[pb].frames});Va=new createjs.Stage($a),Va.enableMouseOver(),createjs.Touch.enable(Va),I(),Ua=new createjs.Container,Va.addChild(Ua),Va.addEventListener("click",T),$("#movieSkip").on("click",x),$(".gametipStart").on("click",V),$("#movieReverse").on("click",s),$(".back").on("click",fa),$(".phoneMax").on("click",_),$("#phoneHomeKey").on("touchstart",H),$("#phoneHomeKey").on("mousedown",za),$("#phoneHomeKey").on("mouseup",Aa),$("#s1").on("click",S),$("#s2").on("click",S),cb||O(),cb&&X(),N(),setTimeout(M,800);var d=parseInt(((new Date).getTime()-eb)/1e3);MtaH5.clickStat("GameLoaded",{time:d})}function H(){$("#phoneHomeKey").off("mousedown",za),za()}function I(){createjs.Ticker.setFPS(30),createjs.Ticker.addEventListener("tick",Va)}function J(){createjs.Ticker.removeEventListener("tick",Va)}function K(){}function L(){}function M(){var a=new createjs.LoadQueue(!0);a.installPlugin(createjs.Sound),$("#bgm")[0].src="sounds/mainbgm.mp3",$("#bgm")[0].volume=hb,$("#movie1")[0].volume=.2,$("#tvset")[0].volume=.2,$("#monitor")[0].volume=.2;var b=document.createElement("link");b.type="text/css",b.rel="stylesheet",b.href="style.css",document.body.appendChild(b),$("#sence1")[0].src="images/s1.jpg",$("#sence2")[0].src="images/s2.jpg"}function N(){$(".loading").hide()}function O(){Xa=new tel.Index,Xa.scaleX=Xa.scaleY=2;var a=new detail.IndexBg;a.scaleX=a.scaleY=.5,Xa.mc_bg.addChild(a),Ua.addChild(Xa),t(fb+"videos/intro.mp4")}function P(){$("#tvset")[0].src=fb+"videos/tvset.mp4",$("#monitor")[0].src=fb+"videos/monitor.mp4";var a=new createjs.LoadQueue(!0);a.installPlugin(createjs.Sound),a.loadManifest([{src:"sounds/k0.mp3",id:"k0"},{src:"sounds/k1.mp3",id:"k1"},{src:"sounds/k2.mp3",id:"k2"},{src:"sounds/k3.mp3",id:"k3"},{src:"sounds/k4.mp3",id:"k4"},{src:"sounds/k5.mp3",id:"k5"},{src:"sounds/k6.mp3",id:"k6"},{src:"sounds/k7.mp3",id:"k7"},{src:"sounds/k8.mp3",id:"k8"},{src:"sounds/k9.mp3",id:"k9"},{src:"sounds/unlock.mp3",id:"unlock"},{src:"sounds/_0024_ui_feedback_12.mp3",id:"_0024_ui_feedback_12"},{src:"sounds/0024_ui_selection_16.mp3",id:"uisound"}]),ya.init()}function Q(){$("#scene").hide()}function R(){$("#scene").show()}function S(b){function c(a){$(".cutview").hide(),Qa&&Qa.play(),h.off("swiperight")}var d="s2"==b.currentTarget.id,e=b.target.title;if("phone"==e){if(!d)return void ca(24);if(ab)return;ya.stopViber(),ab=!0,createjs.Tween.get().wait(1e3).call(function(){Y(),$("#gphone").hide()}),w(fb+"videos/getphone.mp4",function(){ca(10),ja(),setTimeout(ca,5e3,33)})}else if("fishbox"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),l(),da()}else if("glass"==e){w(fb+"videos/getglass.mp4",function(){$("#sence1").hide(),$("#sence2").show(),$("#gphone").show(),ca(11),$(".cutview").hide()}),u(21.2,W);var g=document.getElementById("movie1"),h=new Hammer(g);h.on("swiperight",c)}else if("teatable"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),j(),da()}else if("telephone"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),a(),da()}else if("codedlock"==e){if(!d)return void ca(24);if(!ab)return void ca(23);Ma?(w(fb+"videos/clip-black.mp4",la),xa()):(R(),f(),da())}else if("tvset"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),q(),da()}else if("icebox"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),i(),da()}else if("bigbox"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),k(),da()}else if("card"==e){if(!d)return void ca(24);if(!ab)return void ca(23);_a.l1=!0,w(fb+"videos/flash_01.mp4",function(){ya.updateNber(),ka()})}else if("light"==e){if(!d)return void ca(24);if(!ab)return void ca(23);_a.l3=!0,w(fb+"videos/flash_03.mp4",function(){ya.updateNber(),ka()})}else if("fire"==e)ca(15),w(fb+"videos/getfirebox.mp4",function(){ca(14),wa()}),xa();else if("sofa"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),p(),da()}else if("smokenbox"==e){if(!d)return void ca(24);if(!ab)return void ca(23);ca(9),R(),o(),da()}else if("mirror"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),m(),da()}else if("monitor"==e){if(!d)return void ca(24);if(!ab)return void ca(23);R(),n(),da()}}function T(a){Wa&&1==Wa.currentFrame,a.target.parent;if(!ib&&Xa&&a.target==Xa.btn_start){ua(Xa,function(){Ua.removeChild(Xa),Xa=void 0,ia()}),db?X():(w(fb+"videos/intro.mp4",X),ha(),u(108.6697,U),xa());var b=parseInt(((new Date).getTime()-eb)/1e3);MtaH5.clickStat("GameStart",{time:b})}}function U(){$(".gameTip").show(),ga(),$(".gametipText").addClass("animated bounceInLeft"),$(".gametipTitle").addClass("animated bounceInRight"),setTimeout(function(){$(".gametipStart").show(),$(".gametipStart").addClass("animated bounceIn")},500),$("#bgm")[0].play(),na("gameTip")}function V(){$(".gameTip").hide(),Qa&&Qa.play()}function W(){$(".cutview").show()}function X(){$(".swiper-slide").addClass("animated fadeIn"),P(),I(),K(),wa(),Q(),$("#bgm")[0].play(),ya.playViber(99),setTimeout(ca,1e3,29)}function Y(){var a=$(".phoneshell");a.show(),a.removeClass("animated fadeOutDown"),a.addClass("animated fadeInUp"),setTimeout(function(){a.removeClass("animated fadeInUp"),$(".phoneScreen").show(),$(".phoneHomeKey").show()},500),$(".phoneMax").hide(),bb.s1="phone",J(),L(),ya.startPhone()}function Z(){var a=$(".phoneshell");a.removeClass("animated fadeInUp"),a.addClass("animated fadeOutDown"),setTimeout(function(){a.removeClass("animated fadeOutDown"),a.hide()},500),$(".phoneScreen").hide(),$(".phoneHomeKey").hide(),ka(),za(),I(),K(),setTimeout(ya.stopPhone,100),Aa()}function _(){Y(),ja()}function aa(){clearTimeout(kb),kb=setTimeout(function(){if(!bb.s1){var a=$(".phoneMax");a.show(),a.addClass("animated fadeInUp"),setTimeout(function(){a.removeClass("animated fadeInUp")},500)}},800)}function ba(){var a=$(".phoneMax");a.hide()}function ca(a){a||(a=0),y=-72*a,clearTimeout(Za);var b=$("#subtitle");b.css("background-position-y",y+"px"),b.show(),b.addClass("animated fadeInDown"),Za=setTimeout(function(){b.removeClass("animated fadeInDown"),b.addClass("animated fadeOutUp"),setTimeout(function(){b.removeClass("animated fadeOutUp"),b.hide()},500)},3e3)}function da(){Ua.removeChild(Wa),ba(),L()}function ea(){Ua.addChild(Wa),K(),ab&&aa()}function fa(){if(bb.s2){var a=$("#movie1")[0];a.pause(),a.removeEventListener("ended",v),clearInterval(Pa),Oa=void 0,Na=void 0,$("#movieReverse").hide(),ha(),bb.s2=void 0,I()}else if(bb.s1)if(clearInterval(La),"phone"==bb.s1)ea(),Z(),aa(),currentDetail=void 0,bb.s1=void 0;else if(bb.s1.parent){if(bb.s1==Fa){var b=$("#monitor")[0];b.pause(),$("#monitor").hide()}else if(bb.s1==Ia){var b=$("#tvset")[0];b.pause(),$("#tvset").hide()}else bb.s1==Ka&&"function"==typeof teatableHideFn&&setTimeout(teatableHideFn,800);ua(bb.s1,function(){Ua.removeChild(bb.s1),ea(),Q()}),bb.s1=void 0,ka()}}function ga(){$("#movieSkip").hide()}function ha(){$("#movie1").hide(),ga()}function ia(){$("#movie1").show(),$("#movieSkip").show()}function ja(){clearTimeout(kb),lb=setTimeout(function(){var a=$(".back");a.show(),a.addClass("animated fadeInUp"),setTimeout(function(){a.removeClass("animated fadeInUp")},500)},500)}function ka(){clearTimeout(lb);var a=$(".back");a.hide()}function la(){enableTouchMove=!0,$(".endpagectn").show(),$(".endpagectn").addClass("animated fadeIn"),wa()}function ma(a){var b=parseInt(a/8*100);b>100&&(b=100),$(".loadingPercent").text("");var c=-74*(parseInt(b/5)+1);$(".loadingPercent").css("background-position","0px "+c+"px")}function na(a,b){var c=createjs.Sound.play(a,createjs.Sound.INTERRUPT_EARLY,0,0,b);return c}function oa(){return"http://dopemineworks.com/thesave/images/shareicon.jpg"}function pa(){return"http://dopemineworks.com/thesave/"}function qa(){var a="迷狱重重，逃出生天。由Dopemine出品的互动电影，即刻体验！";return a}function ra(){var a=document.title;return a}function sa(a,b){MtaH5.clickStat("Share"+b,{action:a})}function ta(){var a={title:"title",url:"#"};window.history.pushState(a,"title","#")}function ua(a,b){a.alpha=1,createjs.Tween.get(a).to({alpha:0,visible:!1},200).call(function(){b&&b()})}function va(a,b,c){a.alpha=0,a.visible=!0,void 0==c&&(c=0),createjs.Tween.get(a).wait(c).to({alpha:1},200).call(function(){b&&b()})}function wa(){function a(a){b.volume=c.volume}var b=$("#bgm")[0],c={volume:0};b.play(),createjs.Tween.get(c).to({volume:hb},800).addEventListener("change",a)}function xa(){function a(a){b.volume=c.volume}var b=$("#bgm")[0],c={volume:b.volume};createjs.Tween.get(c).to({volume:0},800).call(function(){b.pause()}).addEventListener("change",a)}var ya={};createjs.Tween.m=ya,function(){function a(){D=document.getElementById("phone"),images=images||{},ss=ss||{};var a=new createjs.LoadQueue(!0);a.installPlugin(createjs.Sound),a.addEventListener("fileload",b),a.addEventListener("complete",c),a.loadManifest(phone.properties.manifest)}function b(a){"image"==a.item.type&&(images[a.item.id]=a.result)}function c(a){var b=a.target,c=phone.ssMetadata;for(pb=0;pb<c.length;pb++)ss[c[pb].name]=new createjs.SpriteSheet({images:[b.getResult(c[pb].name)],frames:c[pb].frames});E=new createjs.Stage(D),R=new createjs.Container,E.addChild(R),F=new phone.PhoneTitle,G=new phone.Phone_Home,isPurchased?(G.APP_Color.visible=!0,$(".phoneMax").addClass("phoneMax2")):G.APP_Color.visible=!1,C(G),C(F),Q=G,E.addChildAt(G),E.addChild(F),d(G),E.enableMouseOver(),createjs.Touch.enable(E),ya.startPhone()}function d(a){a.addEventListener("click",e)}function e(a){var b=!0;if(a.target==G.APP_Nber)g();else if(a.target==G.APP_Store)i();else if(a.target==G.APP_Dial)n();else if(a.target==G.APP_SMS)r();else if(a.target==G.APP_Browser)s();else if(a.target==G.APP_Camera)t();else if(a.target==G.APP_Settings)u();else if(a.target==G.APP_Color)l();else if(N&&a.target==N.btn_set_wifi)v();else if(a.currentTarget==H)if(a.target==H.line1.btn1)w(fb+"videos/incar_01.mp4",function(){ca(26),ja()});else if(a.target==H.line2.btn2)w(fb+"videos/incar_02.mp4",function(){ca(25),ja()});else if(a.target==H.line3.btn3)w(fb+"videos/incar_03.mp4",function(){ca(28),ja()});else if(a.target==H.line4.btn4)w(fb+"videos/incar_04.mp4",function(){ca(27),ja()});else if(a.target==H.line1.btnn1||a.target==H.line2.btnn2||a.target==H.line3.btnn3||a.target==H.line4.btnn4){var c=a.target.parent.mc_notuse;if(c.visible)return;c.alpha=0,c.visible=!0,createjs.Tween.get(c).to({alpha:1},200).wait(1e3).to({alpha:0,visible:!1},200)}else b=!1;else a.target==G.mc_remind?(ua(G.mc_remind),ya.stopViber()):b=!1;b&&na("_0024_ui_feedback_12",!1)}function f(){Q!=G&&(E.removeChild(Q),Q=G,R.addChild(G),G.visible=!0,va(G))}function g(){H||(H=new phone.Phone_Nber,C(H),h(),d(H)),createjs.Tween.get().wait(100).call(function(){for(var a=1;4>=a;a++)_a["l"+a]&&H["line"+a].gotoAndStop(1)}),Q=H,R.addChild(H),va(H)}function h(){for(var a=1;4>=a;a++)H["line"+a].mc_notuse.mouseEnabled=!1,H["line"+a].mc_notuse.visible=!1}function i(){I||(I=new phone.Phone_Store,C(I),j(I)),isPurchased?(I.btn_openApp.visible=!0,I.btn_buyApp.visible=!1):(I.btn_openApp.visible=!1,I.btn_buyApp.visible=!0),Q=I,R.addChild(I),va(I)}function j(a){a.mc_tip.visible=!1,a.txt_percent.visible=!1,a.btn_openApp.visible=!1,a.addEventListener("click",k)}function k(a){if(a.target==I.btn_buyApp){var b=1==F.mc_wifi.currentFrame;cb&&(ya.showOpenApp(),b=!0),b?"undefined"==typeof jsApiCall?ya.showOpenApp():callpay():I.mc_tip.visible=!0}else a.target==I.btn_openApp?l():a.target==I.mc_tip.btn_ok&&(I.mc_tip.visible=!1)}function l(){P||(P=new phone.Phone_Color,C(P),setTimeout(m,30)),Q=P,R.addChild(P),va(P)}function m(){for(var a=0;a<=T.length;a++){var b=T.splice(parseInt(Math.random()*T.length),1);T.push(b[0])}for(var c="",a=1;4>=a;a++){var d=T[a-1];P["num_"+a].gotoAndStop(d)}for(var e=0;4>e;e++)for(var f=U[e],a=0;a<=T.length;a++){var d=T[a];f==d&&(c+=a+1)}createjs.Touch.codes=c}function n(){J||(J=new phone.Phone_Dial,C(J),o(J)),V="",q(),Q=J,R.addChild(J),va(J)}function o(a){a.txt_dial_num.text="",a.mc_tip.visible=!1;for(var b=0;12>b;b++)a["btn_key"+b].name="key_"+b;a.addEventListener("click",p),a.btn_del.visible=!1}function p(a){var b=a.target.name;if(b&&0==b.indexOf("key_")){var c=b.split("key_")[1];"10"==c&&(c="*"),"11"==c&&(c="#"),V.length<14&&(V+=c),na("_0024_ui_feedback_12",!1)}else a.target==J.btn_call?(na("_0024_ui_feedback_12",!1),J.mc_tip.visible=!0):a.target==J.btn_del?(V.length>0&&(V=V.substr(0,V.length-1)),na("_0024_ui_feedback_12",!1)):a.target==J.mc_tip.btn_ok&&(J.mc_tip.visible=!1);q()}function q(){J.txt_dial_num.text=V,V.length>0?J.btn_del.visible=!0:J.btn_del.visible=!1}function r(){K||(K=new phone.Phone_Sms,C(K)),Q=K,R.addChild(K),va(K)}function s(){L||(L=new phone.Phone_Browser,C(L)),Q=L,R.addChild(L),va(L)}function t(){M||(M=new phone.Phone_Camera,C(M)),Q=M,R.addChild(M),va(M)}function u(){N||(N=new phone.Phone_Settings,C(N),d(N)),Q=N,R.addChild(N),va(N)}function v(){O||(O=new phone.Phone_Wifi,C(O),x(O)),O.btn_connect.visible=!1,O.mc_error.visible=!1,O.visible=!1,W="",B(),Q=O,R.addChild(O),va(O),ca(36)}function x(a){for(var b=1;6>b;b++)a["txt_num"+b].text="";for(var b=0;12>b;b++)a["btn_key"+b].name="key_"+b;a.mc_connected.visible=!1,a.addEventListener("click",y)}function y(a){var b=a.target.name;if(b&&0==b.indexOf("key_")){if("key_11"==b)A();else if("key_10"==b);else{var c=b.split("_")[1];z(c)}B(),na("_0024_ui_feedback_12",!1)}else if(a.target==O.btn_connect){if(sb==W){O.mc_connected.visible=!0,F.mc_wifi.gotoAndStop(1);var d=parseInt(((new Date).getTime()-eb)/1e3);MtaH5.clickStat("WIFI_OK",{time:d})}else O.mc_error.visible=!0;na("_0024_ui_feedback_12",!1)}}function z(a){W.length<5&&(W+=a)}function A(){W.length>0&&(W=W.substr(0,W.length-1))}function B(){for(var a=W.split(""),b=1;6>b;b++){var c="",d=b-1;a[d]&&(c=a[d]),O["txt_num"+b].text=c}5==W.length?O.btn_connect.visible=!0:(O.btn_connect.visible=!1,O.mc_error.visible=!1)}function C(a){a.scaleX=a.scaleY=1.343}var D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R;phone.properties.width=556,phone.properties.height=986,ya.showOpenApp=function(){function a(a){I.txt_percent.text=parseInt(b.p)+"%"}I.btn_buyApp.visible=!1,I.txt_percent.text="0%",I.txt_percent.visible=!0;var b={p:0};createjs.Tween.get(b).to({p:100},1e3).call(function(){G.APP_Color.visible=!0,I.btn_openApp.visible=!0,I.txt_percent.visible=!1,$(".phoneMax").addClass("phoneMax2")}).addEventListener("change",a)};var S,T=[1,2,3,4],U=[4,2,1,3],V="",W="";ya.playViber=function(a){void 0==a&&(a=1),S=na("viber",a)},ya.stopViber=function(){S&&(S.stop(),S=void 0)},ya.updateNber=function(){for(var a=0,b=1;4>=b;b++)_a["l"+b]&&a++;G.mc_barge.currentFrame!=a&&(G.mc_barge.gotoAndStop(a),ya.startShake(),ya.playViber(1),setTimeout(ya.stopShake,3200))},ya.startShake=function(){$(".phoneMax").addClass("shake-horizontal")},ya.stopShake=function(){$(".phoneMax").removeClass("shake-horizontal")},ya.stopPhone=function(){createjs.Ticker.removeEventListener("tick",E)},ya.startPhone=function(){createjs.Ticker.setFPS(30),createjs.Ticker.addEventListener("tick",E)},za=function(a){$(".phoneHomeKey").addClass("phoneHomeKeyDown")},Aa=function(a){f(),$(".phoneHomeKey").removeClass("phoneHomeKeyDown"),a&&na("_0024_ui_feedback_12")},ya.init=a}();var za,Aa,Ba,Ca,Da,Ea,Fa,Ga,Ha,Ia,Ja,Ka,La,Ma,Na,Oa,Pa,Qa,Ra=!0,Sa=!1,Ta=encodeURIComponent(window.location.href);$.getJSON("http://imake.leanapp.cn/getWxConfig?url="+Ta,A);var Ua,Va,Wa,Xa,Ya,Za;"undefined"==typeof isPurchased&&(isPurchased=!1);var $a,_a={l1:!1,l2:!1,l3:!1,l4:!1},ab=!1,bb={s1:void 0,s2:void 0},cb=window.location.href.indexOf("DEBUG")>-1,db=window.location.href.indexOf("QUICK")>-1,eb=(new Date).getTime(),fb="http://cdn.dopemineworks.com/thesave/",gb=0,hb=.2,ib=!1,jb={};jb.showBottonTip=ca,createjs.Tween.a=jb;for(var kb,lb,mb="",nb="12345",ob=[0,1,2,3,4,5,6,7,8,9],pb=0;pb<=ob.length;pb++){var qb=ob.splice(parseInt(Math.random()*ob.length),1);ob.push(qb[0])}for(var rb=nb.split(""),sb="",tb=0;tb<=rb.length;tb++)for(var pb=0;pb<=ob.length;pb++){var ub=ob[pb],vb=rb[tb];vb&&ub==vb&&(sb+=pb)}document.addEventListener("touchmove",function(a){a.preventDefault()},!1),cb==db&&ta(),window.addEventListener("popstate",function(a){$(".qtctn").show(),$(".qtctn").click(function(){$(".qtctn").hide()})},!1),Zepto(function(a){E();var b=navigator.userAgent.toLowerCase(),c=null;(b.indexOf("iphone")>=0||b.indexOf("ipad")>=0)&&document.body.addEventListener("touchend",function(a){var b=(new Date).getTime();c=c||b+1;var d=b-c;return 500>d&&d>0?(a.preventDefault(),!1):void(c=b)},!1)})}();