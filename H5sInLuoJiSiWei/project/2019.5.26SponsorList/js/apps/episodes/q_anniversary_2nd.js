$(function () {
	//控制单屏高度
	var screen_height = $('html').height();
	var screen_width = $('html').width();
	$('body').height(screen_height);
	$('.body-container').height(screen_height);
	$('.loading-up').width(screen_width);
	$('.loading-down').width(screen_width);

	// 角色初始化
	var role_selected;
	var role_unselected;
	var score_selected = 100;
	var score_unselected = 100;
	var index = 0;
	var is_selected = false; // 角色是否选中
	var is_role_selected_active = false; //被选中角色是否激活状态
	var is_role_unselected_active = false; //没有选中的角色是否激活状态
	var questions_all = [];
	var questions = [];
	var prize_map = {'qh-tshirt': '拳皇T恤', 'lw-tshirt': '乐问T恤', 'cup': '乐问emoi随身杯', 'cushion': '乐问抱枕', 'bag': '乐问环保帆布袋'};
	var share_desc = '测测你对腾讯有多熟悉？参与活动还能抽取Apple Watch、丰富乐问礼品和拳皇98周边，来试试吧！';
	var egg = $('.js-q-anniversary-2nd-data').data('egg');
	var award = $('.js-q-anniversary-2nd-data').data('award');
	var lucky_number = $('.js-q-anniversary-2nd-data').data('lucky_number');
	var drawed_level = window.localStorage.level;
	// var award = window.localStorage.award;
	// var lucky_number = window.localStorage.lucky_number;

	// 分享初始化
	var share_wording_local = drawed_level ? (drawed_level == 1 ? '天了噜，我居然和杜甫一样忙，超过60%企鹅，你呢？' : (drawed_level == 2 ? '我在乐问终极挑战中击败60%企鹅，获得“腾讯百晓生”称号，你来试试？' : '我在乐问终极挑战中击败99%企鹅，获得“腾讯万事通”称号，你来试试？')) : share_desc;
	var share_wording = egg ? (egg == 'silver' ? '我在乐问终极挑战中击败60%企鹅，获得“腾讯百晓生”称号，你来试试？' : '我在乐问终极挑战中击败99%企鹅，获得“腾讯万事通”称号，你来试试？') : share_wording_local;
	share_to(share_wording);

	// loading页
	$('.js-loading').animate({width: '65%'}, 1300);
	$(window).load(function () {
		$('.js-loading').animate({width: '100%'}, 700, function () {
			$('.loading-page').addClass('hide');
			if (egg) { //抽奖过
				$('.result-success').addClass(egg).show();
				$('.result-success .challenge-again-btn').addClass('hide');
				if (award == 'nothing' && lucky_number && !isNaN(lucky_number)) { // apple watch抽奖码
					$('.js-final-prize-num').text(lucky_number);
					$('.js-prize-num').removeClass('hide');
				} else if (award == 'nothing' && (!lucky_number || isNaN(lucky_number))) { //啥都没中
					$('.prize-modal').addClass('nothing');
					$('.js-prize-nothing').removeClass('hide');
				} else if (award) { // 实物奖
					$('.js-final-prize-entity').addClass(award);
					$('.js-final-prize-entity-wording').text(prize_map[award]);
					$('.js-prize-entity').removeClass('hide');
				}
				$('.prize-modal').removeClass('hide');
				$('.mask').removeClass('hide');
			} else if (drawed_level) {
				if (drawed_level == 1) { // 没有答对6道题或以上
					$('.result-fail').show();
				} else if (!award) { //答完题没有抽奖
					var egg_level = drawed_level == 2 ? 'silver' : 'golden';
					$('.result-success').addClass(egg_level).addClass('active').show();
				} else { //即不是遗憾，也不是没有抽奖过的场景，直接重新挑战
					$('.homepage').removeClass('hide').addClass('active');
				}
			} else { //没有答题过
				$('.homepage').removeClass('hide').addClass('active');
			}
		});
	});

	// 触发苹果上的点击active态
	document.body.addEventListener("touchstart", function(e) {});

	// 点击挑战按钮
	$('.btn-challenge').click(function () {
		$('.role-choose').removeClass('hide').addClass('active');
		$('.homepage').fadeOut(1000);
	});

	// 选择角色
	$('.js-role-choose').click(function () {
		if (!is_selected) {
			is_selected = true;

			var $self = $(this);
			role_selected = $self.data('role_selected');
			role_unselected = $self.data('role_unselected');

			// 退出角色选择页
			$('.bg-role-' + role_selected + '-choose').addClass('active');
			$('.role-choose').removeClass('active').addClass('quit');
			$('.logo').hide();
			setTimeout(function () {
				$('.role-choose').addClass('hide');
			}, 1000);

			// 答题页
			setTimeout(function () {
				$('.js-answer-questions').removeClass('hide');
				// 角色位置和方向的初始化
				$('.avatar-left').addClass('avatar-' + role_selected);
				$('.avatar-right').addClass('avatar-' + role_unselected);
				$('.progress-bar-left').addClass('progress-bar-' + role_selected);
				$('.progress-bar-right').addClass('progress-bar-' + role_unselected);
				$('.js-' + role_selected).addClass('position-left');
				$('.js-' + role_selected).siblings('.prepare').addClass('rotate').addClass('position-right');

				// 答题页屏幕交互、动画
				screen_operate($('.question-' + index));
			}, 300);
		}
	});

	// 问题模版渲染
	questions_all = [
		{
			title: '乐问上最活跃的总办是谁？', 
			answers: [{answer: 'pony', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'tony', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'martinlau', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '当然是tony啊，他可是千赞达人'
		}, {
			title: '坐那个大厦的电梯最危险？', 
			answers: [{answer: '万利达', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '腾大', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '大族', result: 'right', random: Math.ceil(Math.random() * 20)}],
			comment: '乐问中反馈电梯有问题的80%是大族', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '响应产品问题最积极GM是？', 
			answers: [{answer: 'andyqiu', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'andyhuang', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: 'dylanhuang', result: 'right', random: Math.ceil(Math.random() * 20)}],
			comment: '必须是dylan，腾讯视频的问题99%回复率', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '乐问上最具改进潜力的产品是？', 
			answers: [{answer: 'QQ浏览器', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '电脑管家', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: 'RTX', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: 'QQ浏览器吐槽最多，鹅们都希望它更好', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '因为股市震荡躺枪的产品是？', 
			answers: [{answer: '自选股', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '微粒贷', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '理财通', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '当然是微粒贷了，20万入股市亏光了', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '吐槽食堂最多的问题是什么？', 
			answers: [{answer: '菜品不换', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '包子太小', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '不明物体乱入', result: 'right', random: Math.ceil(Math.random() * 20)}],
			comment: '石头、苍蝇、蚯蚓、蟑螂都在食堂出现过', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '乐问上哪一个话题一直很热门？', 
			answers: [{answer: '班车', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '考核', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '食堂', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '班车天天坐，同事问题最多了', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '乐问上哪款产品被誉为良心产品？', 
			answers: [{answer: 'QQ输入法', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'QQ影音', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'QQ旋风', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: 'QQ影音可是网友公认的良心产品', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '乐问上哪位达人被点赞最多？', 
			answers: [{answer: 'samzhang', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'aloongdeng', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'quickli', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: 'aloongdeng获赞超过2000，位居榜首', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '乐问上哪个部门响应问题最积极？', 
			answers: [{answer: '行政部', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '8000', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: 'HR', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '行政部9秒响应，火箭都没发射呢', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '最愿意在乐问上回答问题的是？', 
			answers: [{answer: '程序员', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '产品经理', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '设计师', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '全栈工程师写代码解疑问不是盖的'
		}, {
			title: '下列哪个产品最有先见之明？', 
			answers: [{answer: 'RTX', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'QQ浏览器', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: 'KM', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: 'RTX回答大都是：已经开发，下个版本推出', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '最热门的PK问题是哪一个？', 
			answers: [{answer: '3星好还是平庸？', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'RTX要不取消云端储存？', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '文化特色与实用礼品哪个好？', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '考核关乎个人发展，还有人不关心吗？', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '哪项公司活动总在乐问被吐槽？', 
			answers: [{answer: '团建旅游', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '年会', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '新人培训', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '哪里有团建，哪里就有吐槽', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '程序员哪种素质在乐问公认最重要？', 
			answers: [{answer: '代码能力', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '身体素质', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '文化素质', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '身体才是革命的本钱', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '瑞雪被问得最多的问题是什么？', 
			answers: [{answer: '插队', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '抽烟', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '电梯逆行', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '有人不排队，你急不急', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: 'tony在乐问被点赞最多的回答是？', 
			answers: [{answer: '工作再忙也得必要的生活料理', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '点评pony过年加班写代码', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '鹅厂主营业务决定三网隔离', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '大佬们当年的青春和奋斗，引发同事追忆', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '给大家启发最大的电影是哪部？', 
			answers: [{answer: '《星际穿越》', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '《大圣归来》', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '《变形金刚》', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '腾讯产品怎样像大圣一样赢得“自来水”？', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: 'ponyma没有回答过哪个问题？', 
			answers: [{answer: '三大支付产品问题', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '过年加班写代码问题', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '正直价值观问题', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '代码的事大师兄tony帮忙回答了', 
			random: Math.ceil(Math.random() * 20)
		}, {
			title: '乐问是用哪种最好的语言开发的？', 
			answers: [{answer: 'PHP', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: 'Python', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '汉语', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: 'PHP是地球上最好的语言，这还用解释？', 
			random: Math.ceil(Math.random() * 20)
		} , {
			title: '在公司哪里最容易发现女神？', 
			answers: [{answer: '班车', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '电梯', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '硬盘', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '借问女神何处有，企鹅遥指电梯间', 
			random: Math.ceil(Math.random() * 20)
		} , {
			title: '哪件物品在公司一抱怨就失踪了？', 
			answers: [{answer: '粽子', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '月饼', result: 'wrong', random: Math.ceil(Math.random() * 20)}, {answer: '荔枝', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '2015年端午节，你发了粽子么？', 
			random: Math.ceil(Math.random() * 20)
		} , {
			title: '在腾讯上厕所遇到最烦心的问题是？', 
			answers: [{answer: '不干净', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '有人吸烟', result: 'right', random: Math.ceil(Math.random() * 20)}, {answer: '没WiFi', result: 'wrong', random: Math.ceil(Math.random() * 20)}],
			comment: '厕所抽烟月经贴啊，拭目以待新规效果', 
			random: Math.ceil(Math.random() * 20)
		}
	];

	// 随机排序问题顺序
	questions_all.sort(function () {return 0.5 - Math.random();});
	questions = questions_all.slice(0, 10);
	var index_bg_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	index_bg_array.sort(function () {return 0.5 - Math.random();});
	for (var i = 0; i < 10; i++) {
		questions[i].index_bg = index_bg_array[i];
	}
	$('.js-answer-questions-container').html(template('question-template', {questions: questions}));

	// 问题切换
	$('.js-answer-questions').delegate('.next-question', 'click', function () {
		// 隐藏当前屏
		$('.question-' + index).addClass('hide');
		// 答题页屏幕交互、动画
		screen_operate($('.question-' + (++index)));
	});

	// 砸蛋
	$('.success-egg').click(function () {
		$self = $(this);
		var level_egg = window.localStorage.level == 2 ? 'silver' : 'golden';
		$('.success-hammer').addClass('active');
		$('.result-success .challenge-again-btn').addClass('hide');
		
		// $.get(pkm_path + '/episodes/lottery', {egg: level_egg}, function (data) {
		// 	window.localStorage.award = data.award ? data.award : '';
		// 	window.localStorage.lucky_number = data.lucky_number ? data.lucky_number : '';

			$self.addClass('active');
			$('.prize-modal').removeClass('hide');
			$('.mask').removeClass('hide');

			// if (data.award == 'nothing' && data.lucky_number) { //apple watch抽奖码
				$('.js-final-prize-num').text('12345');
				$('.js-prize-num').removeClass('hide');
			// } else if (data.award == 'nothing' && !data.lucky_number) { //没有中实物奖
			// 	$('.prize-modal').addClass('nothing');
			// 	$('.js-prize-nothing').removeClass('hide');
			// } else if (data.award) { //实物奖
			// 	$('.js-final-prize-entity').addClass(data.award);
			// 	$('.js-final-prize-entity-wording').text(prize_map[data.award]);
			// 	$('.js-prize-entity').removeClass('hide');
			// } else { //异常情况
			// 	$('.prize-modal').addClass('nothing');
			// 	$('.js-prize-nothing').removeClass('hide');
			// }
		// });
	});
	// 关闭弹框
	$('.prize-modal .close').click(function () {
		$('.prize-modal').addClass('hide');
		$('.mask').addClass('hide');
	});

	// 重新挑战
	$('.challenge-again-btn').click(function () {
		window.localStorage.removeItem('level');
		$parents = $(this).closest('.page-q-anniversary');
		// 重置结果页
		$parents.fadeOut(1000, function () {
			$(this).removeClass('active silver golden');
			$('.prize-modal').addClass('hide').removeClass('nothing');
			$('.js-prize').addClass('hide');
			$('.success-hammer').removeClass('active');
			$('.success-egg').removeClass('active');
		});
		// 重置角色选择页
		$('.role-choose').removeClass('hide quit').addClass('active');
		// 重置答题页的状态
		$('.avatar-role').removeClass('avatar-male avatar-female');
		$('.progress-bar').removeClass('red progress-bar-male progress-bar-female').removeAttr('style');
		$('.js-result-icon').addClass('hide');
		$('.js-answer').removeClass('active');
		$('.next-question').addClass('hide');
		$('.judge-area').removeClass('active');
		$('.js-role-animation').removeClass('position-left position-right rotate run run-back fight hit die').removeAttr('style');
		// 随机排序问题顺序
		questions_all.sort(function () {return 0.5 - Math.random();});
		questions = questions_all.slice(0, 10);
		index_bg_array.sort(function () {return 0.5 - Math.random();});
		for (var i = 0; i < 10; i++) {
			questions[i].index_bg = index_bg_array[i];
		}
		$('.js-answer-questions-container').html(template('question-template', {questions: questions}));
		// 分享语重置
		share_desc = '测测你对腾讯有多熟悉？参与活动还能抽取Apple Watch、丰富乐问礼品和拳皇98周边，来试试吧！';
		share_to(share_desc);
		// 重置变量
		score_selected = 100;
		score_unselected = 100;
		index = 0;
		is_selected = false; // 角色是否选中
		is_role_active = false; //角色是否激活状态
	});

	// 分享
	$('.share-btn').click(function () {
		$('.share-mask').removeClass('hide');
		$('.share-tip-icon').removeClass('hide');
	});
	$('.share-mask').click(function () {
		share_callback();
	});

	// 答题页屏幕交互、动画
	function screen_operate ($screen_current) {
		// 当前屏幕初始化
		$screen_current.removeClass('hide');
		$screen_current.find('.js-answer-num').text(index + 1 + '. ');
		$role_selected = $screen_current.find('.js-' + role_selected);
		$role_unselected = $role_selected.siblings('.prepare');
		$judge = $screen_current.find('.judge-area');
		is_role_selected_active = false;
		is_role_unselected_active = false;

		$screen_current.find('.js-answer').click(function () {
			$self = $(this);
			$self.addClass('active');
			$self.find('.js-result-icon').removeClass('hide');
			$screen_current.find('.js-answer').unbind('click');
			setTimeout(function () {
				$judge.addClass('active');
			}, 100);

			if ($self.data('result') == 'right') {
				score_unselected -= 10;
				setTimeout(function () {
					$('.progress-bar-' + role_unselected).find('.progress').animate({'width': score_unselected + '%'}, 300, function () {
						if (score_unselected <= 40) {
							$('.progress-bar-' + role_unselected).addClass('red');
						}
					});
					role_success_animation($role_selected, $role_unselected, score_unselected);
				}, 400);
			} else if ($self.data('result') == 'wrong') {
				score_selected -= 10;
				setTimeout(function () {
					$('.progress-bar-' + role_selected).find('.progress').animate({'width': score_selected + '%'}, 300, function () {
						if (score_selected <= 40) {
							$('.progress-bar-' + role_selected).addClass('red');
						}
					});
					role_fail_animation($role_selected, $role_unselected, score_selected);
				}, 400);
			}

			if (index < 9) {
				$self.parents('.question').find('.next-question').removeClass('hide');
			} else { // 答题结束
				var right_count = score_selected / 10;
				var level = right_count < 6 ? 1 : (right_count < 9 ? 2 : 3);
				//window.localStorage.level = level;

				setTimeout(function () {
					$('.logo').show();
					$('.question-' + index).addClass('hide');
					$('.js-answer-questions').addClass('hide');
					if (level == 1) {
						$('.js-right-count').text(right_count);
						$('.result-fail').show();
						window.localStorage.award = '';
						window.localStorage.lucky_number = '';
						share_desc = '天了噜，我居然和杜甫一样忙，超过60%企鹅，你呢？';
						share_to(share_desc);
					} else {
						var level_egg = level == 2 ? 'silver' : 'golden';
						var level_wroding = level == 2 ? '银' : '金';
						level == 2 ? $('.result-success .challenge-again-btn').removeClass('hide') : '';
						$('.result-success').addClass('active').addClass(level_egg).show();
						share_desc = level == 2 ? '我在乐问终极挑战中击败60%企鹅，获得“腾讯百晓生”称号，你来试试？' : '我在乐问终极挑战中击败99%企鹅，获得“腾讯万事通”称号，你来试试？';
						share_to(share_desc);
					}
				}, 2300);
			}
		});
		
		// 点击人物时触发进攻彩蛋
		$role_selected.click(function () {
			role_fail_animation($role_selected, $role_unselected);
		});
		$role_unselected.click(function () {
			role_success_animation($role_selected, $role_unselected);
		});
	}
	
	// 选择的角色答对题目
	function role_success_animation ($role_selected, $role_unselected, score_unselected) {
		if (!is_role_selected_active && !is_role_unselected_active) {
			is_role_selected_active = true;

			$('.role-current').addClass('hide');
			$role_selected.addClass('run').animate({left: '100px'}, 400, function () {
				$role_selected.removeClass('run').addClass('fight');
				setTimeout(function () {
					$role_selected.removeClass('fight').addClass('run-back rotate').animate({left: '0'}, 400, function () {
							$role_selected.removeClass('run-back rotate');
							$('.role-current').removeClass('hide');
					});
				}, 650);
			});
			setTimeout(function () {
				$role_unselected.addClass('hit');
				$role_unselected.on('webkitAnimationEnd', function () {
					$role_unselected.removeClass('hit');
					if (score_unselected == 0) {
						$role_unselected.addClass('die');
					}
					setTimeout(function () {
						is_role_selected_active = false;
					}, 500);
				});
			}, 500);
		}
	}

	// 选择的角色打错题目
	function role_fail_animation ($role_selected, $role_unselected, score_selected) {
		if (!is_role_selected_active && !is_role_unselected_active) {
			is_role_unselected_active = true;

			$role_unselected.addClass('run').animate({right: '100px'}, 400, function () {
				$role_unselected.removeClass('run').addClass('fight');
				setTimeout(function () {
					$role_unselected.removeClass('fight rotate').addClass('run-back').animate({right: '0'}, 400, function () {
							$role_unselected.removeClass('run-back').addClass('rotate');
					});
				}, 650);
			});
			setTimeout(function () {
				$role_selected.addClass('hit');
				$role_selected.on('webkitAnimationEnd', function () {
					$role_selected.removeClass('hit');
					if (score_selected == 0) {
						$role_selected.addClass('die');
						$('.role-current').addClass('hide');
					}
					setTimeout(function () {
						is_role_unselected_active = false;
					}, 500);
				});
			}, 500);
		}
	}

	// 分享给好友、分享到朋友圈
	function share_to (share_desc) {
		var $share_to_wechat = $('.js-share-to-wechat-data');
		var title = $share_to_wechat.data('title');
		var link = $share_to_wechat.data('sharelink');
		var img_url = $share_to_wechat.data('shareicon');
		// wx.ready(function () {
		// 	wx.onMenuShareAppMessage({
		// 		title: title, // 分享标题
		// 		desc: share_desc, // 分享描述
		// 		link: link, // 分享链接
		// 		imgUrl: img_url, // 分享图标
		// 		trigger: function (res) {
		// 			// alert('你分享的链接是：' + '{{{ full_url() }}}');
		// 		},
		// 		success: function (res) {
		// 			share_callback();
		// 		},
		// 		cancel: function (res) {
		// 			share_callback();
		// 		},
		// 		fail: function (res) {
		// 			share_callback();
		// 		}
		// 	});
        //
		// 	wx.onMenuShareTimeline({
		// 		title: share_desc, // 分享标题
		// 		link: link, // 分享链接
		// 		imgUrl: img_url, // 分享图标
		// 		type: 'link',
		// 		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		// 		trigger: function (res) {
		// 			//alert('你点击了分享到朋友圈');
		// 		},
		// 		success: function () {
		// 			share_callback();
		// 		},
		// 		cancel: function () {
		// 			share_callback();
		// 		}
		// 	});
        //
		// 	wx.getNetworkType({
		// 		success: function (res) {
		// 			//var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
		// 			//alert('你当前的网络是:' + networkType);
		// 		}
		// 	});
		// });
	}

	function share_callback () {
		$('.share-mask').addClass('hide');
		$('.share-tip-icon').addClass('hide');
	}

	// 音乐播放
	var audio = document.querySelector('audio');
	var time = new Date().getTime();
	var touchTimes = 0;
	audio.addEventListener('canplaythrough', function() {
		this.volume = 0.02;
	}, false);
	var audioInterval = setInterval(function() {
		var volume = audio.volume;
		if (!volume) {
			return;
		}
		if (volume >= 0.08) {
			return;
		}
		if (volume) {
			audio.volume += 0.02;
		}
	}, 1000);

	$(document).on('touchstart', function(event) {
		if (touchTimes === 0 && audio.paused) {
			//audio.play();
			$('.music-icon').removeClass('off');
			touchTimes = 1;
		}
	});
	$(document).on('touchstart', '.music-icon', function(event) {
		timeGap = new Date().getTime() - time;
		if (timeGap > 400) {
			if (audio.paused) {
				$('.music-icon').removeClass('off');
				audio.play();
			} else {
				$('.music-icon').addClass('off');
				audio.pause();
			}
			time = new Date().getTime();
		}
		event.preventDefault();
	});
});