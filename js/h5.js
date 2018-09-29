	// 分享给好友、分享到朋友圈
	// function share_to (share_desc) {
	// 	var $share_to_wechat = $('.js-share-to-wechat-data');
	// 	var title = $share_to_wechat.data('title');
	// 	var link = $share_to_wechat.data('sharelink');
	// 	var img_url = $share_to_wechat.data('shareicon');
	// 	wx.ready(function () {
	// 		wx.onMenuShareAppMessage({
	// 			title: title, // 分享标题
	// 			desc: share_desc, // 分享描述
	// 			link: link, // 分享链接
	// 			imgUrl: img_url, // 分享图标
	// 			trigger: function (res) {
	// 				// alert('你分享的链接是：' + '{{{ full_url() }}}');
	// 			},
	// 			success: function (res) {
	// 				share_callback();
	// 			},
	// 			cancel: function (res) {
	// 				share_callback();
	// 			},
	// 			fail: function (res) {
	// 				share_callback();
	// 			}
	// 		});
    //
	// 		wx.onMenuShareTimeline({
	// 			title: share_desc, // 分享标题
	// 			link: link, // 分享链接
	// 			imgUrl: img_url, // 分享图标
	// 			type: 'link',
	// 			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	// 			trigger: function (res) {
	// 				//alert('你点击了分享到朋友圈');
	// 			},
	// 			success: function () {
	// 				share_callback();
	// 			},
	// 			cancel: function () {
	// 				share_callback();
	// 			}
	// 		});
    //
	// 		wx.getNetworkType({
	// 			success: function (res) {
	// 				//var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
	// 				//alert('你当前的网络是:' + networkType);
	// 			}
	// 		});
	// 	});
	// }
