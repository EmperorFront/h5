$(function() {
	var old_ajax = $.ajax;

	$.ajaxSetup({
		headers: {
			'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	});

	$.ajax = function(opt) {
		opt.beforeSend = function(jqXHR, settings) {
			if(settings['url'].indexOf('?') > 0) {
				settings['url'] += ("&uid=" + current_user);
			} else {
				settings['url'] += ("?uid=" + current_user);
			}

		}
		return old_ajax(opt);
	};

	$.put = function(url, data, callback, type) {

		if ( $.isFunction(data) ){
			type = type || callback,
			callback = data,
			data = {}
		}

		return $.ajax({
			url: url,
			type: 'PUT',
			success: callback,
			data: data,
			contentType: type
		});
	};

	$.delete = function(url, data, callback, type) {

		if ( $.isFunction(data) ){
		type = type || callback,
			callback = data,
			data = {}
		}

		return $.ajax({
			url: url,
			type: 'DELETE',
			success: callback,
			data: data,
			contentType: type
		});
	}

	$('.js-wakeup-ikm').on('click', function(){
		var url = $(this).data('url');
		wakeup_ikm(url);
	})

	//页面中a标签点击，判断是否为h5进行super url解析跳转
	$(document).on('click', "a", function(e) {
		var url = $(this)[0].href;
		var data = {
			'url' : url
		};

		//如果是h5页面
		if (is_h5 == 0) {
			//km站内链接
			if (url.search(km_path) > -1) {
				e.preventDefault();

				$.get(pkm_path + '/pages/url-proxy', data, function(data) {
					if (data != null) {
						window.location.href = data;
					};
				});
			};
		};
	});
})

/**
 * 图片懒加载
 * @param  {[type]} $self      图片
 * @param  {[type]} $container 装图片的容器
 * @author cattyhuang
 */
function img_lazyload ($self, $container, user) {

	// 微信拷贝图片data-src为jpeg格式 替换data-original的wpeg格式 ios不支持
	if ($self.attr('data-src') ) {
		$self.attr('data-original', $self.attr('data-src'));
	};

	var original = $self.attr('data-original');
	if (original) {
		var screen_width = $container.width();
		var original_min = original.substr(0, original.lastIndexOf('.')) + '_min' + original.substr(original.lastIndexOf('.'));
		var new_url = pkm_path + '/image-proxy?url=' + encodeURIComponent(original) + '&uid=' + user;
		var new_url_min = pkm_path + '/image-proxy?url=' + encodeURIComponent(original_min) + '&uid=' + user;
        var preview_url = pkm_path + '/preview-image?url=' + encodeURIComponent(original) + '&token=' + preview_image_token;
		var img_size = original.match(/_w(\d+)_h(\d+)\.[a-zA-Z]*/);
		var reg = /^(http:\/\/)?([a-zA-Z0-9]+\.)*oa\.com/;

		if (reg.test(original)) {
            //如果是OA图片，则使用image-proxy
			if (img_size && img_size[0] && img_size[1] && img_size[2]) {
				$self.attr('width', screen_width).attr('height', Math.round(screen_width * (img_size[2] / img_size[1])));
				$self.lazyload({
					appear: function () {
						$self.attr('data-original', new_url_min).attr('data-preview_image', preview_url);
					},
					load: function () {
						$self.removeAttr('data-original').removeAttr('width').removeAttr('height');
					},
					threshold: $(window).height()
				});
			} else {
				$self.attr('src', new_url).attr('data-preview_image', preview_url).removeAttr('data-original');
			}
		} else {
			$self.attr('src', original).attr('data-preview_image', preview_url).removeAttr('data-original');
		}
	}
}

/**
 * 微信唤起相册上传图片
 * @param  uploadCallback    上传图片后的回调函数【默认第一个参数为包含图片信息的对象(不存在option)】
 * @param  uploadCallbefore  【同上】
 * @param  option  			 自定义参数,若存在option，uploadCallbefore、uploadCallback的第一个参数均为option
 *   {
 * 		localId   //图片本地链接
 * 		serverId  //图片上传后返回的id
 * 		picUrl    //图片链接
 *   }
 * @author bottlejiang
 */
function weixin_upload_img(uploadCallback, uploadCallbefore, option) {
	wx.chooseImage({
		count: 1,
		sizeType: ['compressed'],
		sourceType: ['album'],
		success: function(resC) {
			var chooseReturn = {
				'localId' : resC.localIds[0],
			};
			if (typeof(uploadCallbefore) == 'function') {
				if (option) {
					uploadCallbefore(option, chooseReturn);
				} else {
					uploadCallbefore(chooseReturn);
				}
			};
			wx.uploadImage({
				localId: resC.localIds[0],
				isShowProgressTips: 0,
				success: function(resU) {
					//ajax请求返回图片链接
					$.ajax({
						type : 'POST',
						url : window.pkm_api_path + '/questions/wx-upload-image',
						data : {image_id : resU.serverId},
						success : function(result) {
							if (result.state == -1) {
								km_complete_tip("出错了，请重试。", false);
							} else if (result.state == 1) {
								var resultReturn = {
									'localId' : resC.localIds[0],
									'serverId' : resU.serverId,
									'picUrl' : result.image_url,
									'width' : result.width,
									'height' : result.height
								};
								if (typeof(uploadCallback) == 'function') {
									if (option) {
										uploadCallback(option, resultReturn);
									} else {
										uploadCallback(resultReturn);
									}
								};
							}
						},
						error : function() {
							km_complete_tip("出错了，请重试。", false);
						}
					});
				},
				fail: function() {
					km_complete_tip("图片上传出错，请重试。", false);
				}
			});
		},
		fail: function() {
			km_complete_tip("打开相册出错，请重试。", false);
		}
	});
}

/**
 * 输入一张图片的宽高，盒子宽高，返回缩放居中尺寸
 * @param  width      图片宽度
 * @param  height     图片高度
 * @param  boxWidth   盒子宽度
 * @param  boxHeight  盒子高度
 * @author bottlejiang
 */
function autoSizeImg(width, height, boxWidth, boxHeight) {
	width = parseInt(width);
	height = parseInt(height);
	boxWidth = parseInt(boxWidth);
	boxHeight = parseInt(boxHeight);
	var picMul;//放大倍数
	var returnnum = {};//返回参数

	if ((height / width) > (boxHeight / boxWidth)) {
		//图片的宽度放大
		picMul = boxWidth / width;
		returnnum.overflag = 'width';
		returnnum.width = boxWidth;
		returnnum.height = Math.round(height * picMul);
		returnnum.marginLeft = 0;
		returnnum.marginTop = -Math.round((returnnum.height - boxHeight) / 2);
	} else {
		//图片的高度放大
		picMul = boxHeight / height;
		returnnum.overflag = 'height';
		returnnum.width = Math.round(width * picMul);
		returnnum.height = boxHeight;
		returnnum.marginLeft = -Math.round((returnnum.width - boxWidth) / 2);
		returnnum.marginTop = 0;
	}
	return returnnum;
}

/**
 * 从页面唤起手机KM
 * @param  {[url]} 唤起手机KM的URL url的格式为target_type/target_id, 例如 : question/123456
 * @author jackyltpli
 */
function wakeup_ikm (url) {
	WeixinJSAPIReady(function(){
		WeixinJSBridge.invoke("getInstallState",{
			"packageUrl": "wxef5e7e401d2565f7://",
			"packageName":"com.ikm"
		},function(e){
			var msg = e.err_msg;
			var iframe = document.getElementById('km_frame');
			if (msg && msg.indexOf("get_install_state:yes") > -1) {
				iframe.src = "wxef5e7e401d2565f7://" + url; // url格式 实体/id 类似question/123456;
			} else {
				iframe.src = $(iframe).data('src');
			}
		});
	})
}

/**
 * 图片预览
 * Android和IOS在JSSDK图片预览方案不同
 */
function preview_img () {
	wx.ready(function () {
		$('.km-view-content').on('click', 'img', function() {
			var $img = $(this);
			var img_arr = [];
			$('.km-view-content img').each(function() {
				img_arr.push(($(this).data('preview_image')));
			});
			wx.previewImage({
				current: $img.data('preview_image'),
				urls: img_arr
			});
		});
	});
}

/**
 * 滚屏定位
 */
function scroll_to (target) {
	$('html, body').animate({
		scrollTop: $(target).offset().top
	}, 500);
}

/**
 * 关于三种不同链接(sharelink、qqsharelink、sharelinkkm)的说明：
 * 分享链接分为 微信、QQ、RTX三种使用场景
 * QQ、RTX内点击直接唤起手机KM 故为super_url形式
 * 微信内推荐使用pkm链接（不用中转页，直接打开h5页面）
 *
 * 使用规则：
 * 默认全部配置均采用；禁止则把该项设为0即可
 *
 * 微信分享设置
 * class="js-share-to-wechat-data"
 *
 * data-title: 标题(普通标题)
 * data-timelinetitle: 分享到朋友圈标题(默认和title一致)
 * <span>desc</span> :分享描述
 * data-sharelink: 分享链接
 * data-qqsharelink: QQ分享链接
 * data-shareicon: 分享icon
 * data-hidemenu: 微信内是否隐藏右上角菜单
 * data-hideshareqq: 微信内是否禁止QQ、Qzone分享
 * data-hideshare: 禁止微信内分享
 *
 * 手机KM分享设置
 * class="js-share-to-ikm-data"
 *
 * 默认全部分享
 * data-sharelinkkm: 手K分享链接
 * data-ikmshareqq: 是否手K分享QQ
 * data-ikmsharewechat: 是否手K分享微信朋友
 * data-ikmsharetimeline: 是否手K分享朋友圈
 * data-ikmsharertx: 是否手K分享RTX
 * data-ikmcopylink: 设置手机KM复制链接的内容
 */
function share_to_wechat () {
	// 微信分享数据
	var $share_to_wechat = $('.js-share-to-wechat-data');

	// 是否隐藏右上角菜单
	var hide_menu = typeof($share_to_wechat.attr('data-hidemenu')) != 'undefined';
	// 禁止所有分享
	var hide_share = typeof($share_to_wechat.attr('data-hideshare')) != 'undefined';
	// 是否禁止微信内分享到QQ
	var hide_qq = typeof($share_to_wechat.attr('data-hideshareqq')) != 'undefined';

	var title = $share_to_wechat.attr('data-title');
	var timeline_title = typeof($share_to_wechat.attr('data-timelinetitle')) != 'undefined' ? $share_to_wechat.attr('data-timelinetitle') : title;
	var link = $share_to_wechat.attr('data-sharelink');
	var desc = $share_to_wechat.text().length ? $share_to_wechat.text() : link;
	var qq_link = $share_to_wechat.attr('data-qqsharelink');
	var img_url = $share_to_wechat.attr('data-shareicon');

	wx.ready(function () {

		// 隐藏菜单栏
		if (hide_menu) {
			wx.hideOptionMenu();
		} else {
			if (hide_share) {
				wx.hideMenuItems({
					menuList: ['menuItem:share:qq', 'menuItem:share:QZone', 'menuItem:share:appMessage', 'menuItem:share:timeline']
				});
			} else {
				wx.onMenuShareAppMessage({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: img_url, // 分享图标
					trigger: function (res) {
						// alert('你分享的链接是：' + '{{{ full_url() }}}');
					},
					success: function (res) {
						// alert('你已分享');
					},
					cancel: function (res) {
						// alert('你取消了分享');
					},
					fail: function (res) {
						// alert(JSON.stringify(res));
					}
				});

				wx.onMenuShareTimeline({
					title: timeline_title, // 分享标题
					link: link, // 分享链接
					imgUrl: img_url, // 分享图标
					type: 'link',
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					trigger: function (res) {
						//alert('你点击了分享到朋友圈');
					},
					success: function () {
						//alert('你已分享');
					},
					cancel: function () {
						//alert('你取消了分享');
					}
				});

				// 禁止微信分享到QQ
				if (hide_qq) {
					wx.hideMenuItems({
						menuList: ['menuItem:share:qq', 'menuItem:share:QZone']
					});
				} else {
					wx.onMenuShareQQ({
						title: title, // 分享标题
						desc: desc, // 分享描述
						link: qq_link, // 分享链接
						imgUrl: img_url, // 分享图标
						trigger: function (res) {
							// alert('你分享的链接是：' + qq_link);
						},
						success: function (res) {
							// alert('你已分享');
						},
						cancel: function (res) {
							// alert('你取消了分享');
						},
						fail: function (res) {
							// alert(JSON.stringify(res));
						}
					});
				}
			}
		}

		wx.getNetworkType({
			success: function (res) {
				//var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
				//alert('你当前的网络是:' + networkType);
			}
		});
	});
}

/**
 * 手机KM中的H5页面点击跳转事件
 */
function connectWebViewJavascriptBridge(callback) {
	if (window.KMJSBridge) {
		callback(KMJSBridge)
	} else {
		document.addEventListener('KMJSBridgeReady', function() {
			callback(KMJSBridge)
		}, false)
	}
}

/**
 * 关于三种不同链接(sharelink、qqsharelink、sharelinkkm)的说明：
 * 分享链接分为 微信、QQ、RTX三种使用场景
 * QQ、RTX内点击直接唤起手机KM 故为super_url形式
 * 微信内推荐使用pkm链接（不用中转页，直接打开h5页面）
 *
 * 使用规则：
 * 默认全部配置均采用；禁止则把该项设为0即可
 *
 * 手机KM分享设置
 * class="js-share-to-ikm-data"
 *
 * data-sharelinkkm: 手K分享链接
 * data-ikmshareqq: 是否手K分享QQ
 * data-ikmsharewechat: 是否手K分享微信朋友
 * data-ikmsharetimeline: 是否手K分享朋友圈
 * data-ikmsharertx: 是否手K分享RTX
 * data-ikmcopylink: 设置手机KM复制链接的内容
 */
connectWebViewJavascriptBridge(function(bridge) {
	bridge.init(function(message, responseCallback) {
		var data = { 'Javascript Responds':'Wee!' };
		responseCallback(data);
	});

	// 点击查看原图
	$('.km-view-content img').click(function() {
		bridge.invoke('imgView', {'original_url': $(this).data('preview_image')});
	});

	// 点击跳到个人空间
	$('.js-wakeup-ikm-author-view').click(function () {
		bridge.invoke('authorView', {'nick': $(this).data('nick')});
	});

	// 点击跳到评论页
	$('.js-wakeup-ikm-comment').click(function () {
		bridge.invoke('commentView', {'object_type': $(this).data('object_type'), 'object_id': $(this).data('object_id')});
	});

	// 点击跳到问题页
	$('.js-wakeup-ikm-question').click(function () {
		bridge.invoke('openView', {'type': $(this).data('object_type'), 'id': $(this).data('object_id')});
	});

	// 点击跳到问题页
	$('.js-wakeup-ikm-answer').click(function () {
		bridge.invoke('openView', {'type': $(this).data('object_type'), 'id': $(this).data('object_id')});
	});

	// 点击跳到附件查看页
	$('.js-wakeup-ikm-attachments').click(function () {
		bridge.invoke('attachmentView', {
			'attachment_id': $(this).data('attachment_id'),
			'width': $(this).data('attachment_width'),
			'height': $(this).data('attachment_height'),
			'page': $(this).data('attachment_page'),
			'to_images': $(this).data('attachment_to_images'),
			'filename': $(this).data('attachment_filename')
		});
	});

	// 文集点击唤起原生文章、文档
	$('.js-title-knowledge').click(function () {
		var type = $(this).data('type');
		var id = $(this).data('id');
		bridge.invoke('openView', {'type': type, 'id': id});
	});

	// 唤起手机km的分享
	var $share_to_wechat = $('.js-share-to-ikm-data');
	if ($share_to_wechat.length) {

		var title = $share_to_wechat.data('title');
		var link = $share_to_wechat.data('sharelink');

		// 规定需为super url
		var link_km = $share_to_wechat.data('sharelinkkm');
		var img_url = $share_to_wechat.data('shareicon');

		// 复制链接
		var copy_link = $share_to_wechat.data('ikmcopylink');

		// 默认分享
		var share_wechat = typeof($share_to_wechat.attr('data-ikmsharewechat')) == 'undefined' ? 1 : 0;
		var share_timeline = typeof($share_to_wechat.attr('data-ikmsharetimeline')) == 'undefined' ? 1 : 0;
		var share_qq = typeof($share_to_wechat.attr('data-ikmshareqq')) == 'undefined' ? 1 : 0;
		var share_rtx = typeof($share_to_wechat.attr('data-ikmsharertx')) == 'undefined' ? 1 : 0;
		var share_wework = typeof($share_to_wechat.attr('data-ikmsharewework')) == 'undefined' ? 1 : 0;
		var desc = $share_to_wechat.text().length ? $share_to_wechat.text() : link_km;

		bridge.invoke('setShareButton', {
			'shareWx': share_wechat,
			'shareQq': share_qq,
			'shareWework': share_wework,
			'shareRtx': share_rtx, // 设置是否分享RTX 默认1 / 禁止0
			'shareWxTimeline': share_timeline,
			'shareTitle': title,
			'shareDescription': desc,
			'shareThumbUrl': img_url,
			'shareUrl': link_km,
			'shareWxUrl': link,
			'copyLink': copy_link // 复制链接内容
			},
			function(response) {});
		bridge.registerHandler('clickShareButton', function() {});
	}
});

// 对话框
function km_dialog(title, content, callback){
	var $dialog = $('#km-dialog');
	var dialog_title = title ? title : '确认操作？';
	var dialog_content = content ? content : '确认操作？';
	$dialog.find('.dialog-title').text(dialog_title);
	$dialog.find('.dialog-body').text(dialog_content);

	$('.km-mask').first().show();
    $dialog.fadeIn(300);

    $dialog.find('.dialog-btn').on('click', function () {
        $dialog.hide();
		$('.km-mask').first().hide();
		if (typeof(callback) == 'function') {
			callback($(this).data('msg'));
		};
		$dialog.find('.dialog-btn').off('click');
    });
}

// loading提示框
function km_loading_tip(content){
	var $tip = $('#km-loading-tip');
	var tip_content = content ? content : '加载中...';

	$tip.find('.tip-content').text(tip_content);

	$('.km-mask-transparent').first().show();
    $tip.show();
}

// 完成提示
function km_complete_tip(content, success, callback){
	var $tip = $('#km-complete-tip');
	if (success) {
		var tip_content = content ? content : '操作完成';
		$tip.find('.tip-complete-icon').removeClass('fail').addClass('success');
	} else {
		var tip_content = content ? content : '操作失败';
		$tip.find('.tip-complete-icon').removeClass('success').addClass('fail');
	};
	$tip.find('.tip-content').text(tip_content);

	$('#km-loading-tip').hide();
	$('.km-mask-transparent').first().show();
    if ($tip.css('display') != 'none') {
        return;
    }
    $tip.show();
    setTimeout(function () {
        $tip.hide();
        if (typeof(callback) == 'function') {
        	callback();
        };
        $('.km-mask-transparent').first().hide();
    }, 1800);
}

// 数组操作
/**
 * in_array
 *
 * @author cattyhuang
 */
function in_array(needle, arr) {
	var length = arr.length;
	for(var i = 0; i < length; i++) {
		if(arr[i] == needle) {
			return true;
		}
	}
	return false;
}

/**
 * 删除数组中指定元素
 *
 * @author brandwang
 */
function delete_ele_in_array(el, array) {
	var index = -1;
	for (var i = 0; i < array.length; i++) {
		if (array[i] == el) {
			index = i;
		}
	}
	if (index > -1) {
		array.splice(index, 1);
	}
}


/**
 * 获取当前日期事件
 *
 * @author brandwang
 */
function get_format_date() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}

	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
		+ " " + date.getHours() + seperator2 + date.getMinutes()
		+ seperator2 + date.getSeconds();
	return currentdate;
}

/**
 * H5新webview打开页面
 * @param path
 */
function openUrlWithExtraWebview(path) {

	// 企业微信特殊处理
	if (is_qywx == '0') {
        if(path != '' && path != null){
            wx.invoke('openUrlWithExtraWebview', {
                'url': path,
                'openType': 1
            }, function (res) {
                if (res.err_msg == "system:function_not_exist") {
                    // 微信不支持
                    window.location.href = path;
                }

                if (res.err_msg == 'system:access_denied') {
                    // 没有权限
                    window.location.href = path;
                }
            });
        }
	} else {
        window.location.href = path;
	}
}

/**
 * H5唤起手机KM指定页面
 * @param path
 */
function launchIKM(path) {
    wx.invoke('launchApplication', {
        'appID': 'wxef5e7e401d2565f7',
        'parameter': path,
        'extInfo': path,
        'schemeUrl': 'wxef5e7e401d2565f7://' + path
    }, function (res) {
        if (res.err_msg == "launchApplication:ok") {
            // success
        } else {
            // 调用失败 采用旧方式唤起
            var url_jump = openkm_path + '/pages/ikm?q=' + path;
            window.location.href = url_jump;
        }
    });
}
