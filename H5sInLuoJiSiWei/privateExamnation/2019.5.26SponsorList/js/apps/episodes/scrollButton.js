var onetime_click = 1;
var Asio = Asio || {send:function(){}};
// 初始化
document.querySelector('#scroll-button').innerHTML = "<img src='https://piccdn.luojilab.com/fe-oss/default/MTU1NzkwODY5MzYz.png' style='width:100%;' onclick='jump();'>";
function jump() {
	if(onetime_click){
		onetime_click = 0;	
		if(ua.indexOf('igetapp') && Asio.send('')) {
			//APP内
			if( Asio.compareVersion(window.___datasourse___.extra.version, '6.2.0') < 0 ){
				Asio.send('jump.ddURL', {
					ddURL: 'igetapp://activity/detail?url=https%3A%2F%2Fpiccdn.luojilab.com%2Ffe-oss%2Fdefault%2FMTU1Nzc0MzEzNTg5.html',
					ddURLMinVer: '5.2.0'
				})
			} else {
				Asio.send('jump.ddURL', {
					ddURL: 'igetapp://activity/special/sponsor',
					ddURLMinVer: '6.2.0'
				})
			}
		} else {debugger;
			//App外
			let href = window.location.href;
			let reTest = /\/postertest\//
			if (reTest.test(href)) {
			window.___datasourse___.env = 'testing';
			window.location.href = `http://m.iget.dev.didatrip.com/native/sponsor`;
			}
			reSimu = /\/postersimu\//
			if (reSimu.test(href)) {
			window.___datasourse___.env = 'simulation'
			window.location.href = `http://m.dev.igetget.com/native/sponsor`;
			}
			reSimu = /\/poster\//
			if (reSimu.test(href)) {
			window.___datasourse___.env = 'production'
			window.location.href = `http://m.igetget.com/native/sponsor`;
			}
		}
	}
}