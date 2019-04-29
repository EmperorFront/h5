let list = [
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊',position:'啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊upidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'十六',position:'得到设计师'},
	{name:'施展',position:'《中国史50讲》主理人，《枢纽作者》'},
	{name:'Yuyang',position:'特许金融分析师（cfa）@UK'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'},
	{name:'Mr stupidstupidstupidstupidstupidstupidstupid',position:'Mr stupidMr stupidMr stupidMr stupidMr stupidMr stupid'}
];


document.querySelector('#scroll-block').innerHTML = `
<!-- 这一层是我的代码，指定高度即视区，宽度100% -->
<div class="list">
	<!-- 这一层是移动层，有滚动效果，该层不断加载销毁新数据，上移 -->
	<div class="ccleft rowupleft">
		<!-- 这里边添加item一项项，一行行 -->
		<!-- 注意：每次添加数据要大一些，设计稿中没有行的概念，不对齐，原因是ss必须为一屏，重新开始对齐防止误差叠加 -->
	</div>
	<div class="ccright rowupright">
		<!-- 这里边添加item一项项，一行行 -->
		<!-- 注意：每次添加数据要大一些，设计稿中没有行的概念，不对齐，原因是ss必须为一屏，重新开始对齐防止误差叠加 -->
	</div>
</div>
`; // 初始化

let option = {
current_scroll_page: 0,
onetime_count:11,
};

// 动态编辑css 覆盖 transform
function addKeyFramesright(height){
 style = document.createElement('style');
style.type = 'text/css';
//关键帧，A_DYNAMIC_VALUE为每次加载的元素高度 单位px
let keyFrames = '\
@-webkit-keyframes rowupleft {\
	0% {\
		-webkit-transform: translate3d(0, 0, 0);\
		transform: translate3d(0, 0, 0);\
	}\
	100% {\
		-webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
		transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
	}\
}\
@keyframes rowupleft {\
	0% {\
		-webkit-transform: translate3d(0, 0, 0);\
		transform: translate3d(0, 0, 0);\
	}\
	100% {\
		-webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
		transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
	}\
}\
';
style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, height);
document.getElementsByTagName('head')[0].appendChild(style);
}
function addKeyFramesleft(height){
let style = document.createElement('style');
style.type = 'text/css';
//关键帧，A_DYNAMIC_VALUE为每次加载的元素高度 单位px
let keyFrames = '\
@-webkit-keyframes rowupright {\
	0% {\
		-webkit-transform: translate3d(0, 0, 0);\
		transform: translate3d(0, 0, 0);\
	}\
	100% {\
		-webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
		transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
	}\
}\
@keyframes rowupright {\
	0% {\
		-webkit-transform: translate3d(0, 0, 0);\
		transform: translate3d(0, 0, 0);\
	}\
	100% {\
		-webkit-transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
		transform: translate3d(0, A_DYNAMIC_VALUE, 0);\
	}\
}\
';
style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, height);
document.getElementsByTagName('head')[0].appendChild(style);
}
function init(){

console.log(list);

function initleft(){
	//左边的数据
	let count = parseInt(Math.random()*6)+6; // 数据的长度
	//拼装第一屏数据
	let html = '<div class="ssleft">';
	for(let i=0; i<count; i++){
		let name = list[option.current_scroll_page +i].name;
		let position = list[option.current_scroll_page +i].position;
		html += `<div class="item">
			 <div class="name">${name}</div>
			 <div class="position">${position}</div>
			</div>`;
	}
	html += '</div>';
	//拼装接续数据
	
	document.querySelector('.list .ccleft').innerHTML = html+html; // 复制一份数据
	let height = document.querySelector('.list .ssleft').offsetHeight; // 一份数据的高度
	addKeyFramesright( '-'+height+'px' ); // 设置keyframes
	document.querySelector('.list .ccleft').className += ' rowupleft'; // 添加 rowup
	
	//新增条数。
	option.current_scroll_page += count;
}					
initleft();
function initright(){
	//左边的数据
	let count = option.onetime_count; // 数据的长度
	//拼装第一屏数据
	let html = '<div class="ssright">';
	for(let i=0; i<count; i++){
		let name = list[option.current_scroll_page +i].name;
		let position = list[option.current_scroll_page +i].position;
		html += `<div class="item">
			 <div class="name">${name}</div>
			 <div class="position">${position}</div>
			</div>`;
	}
	html += '</div>';
	//拼装接续数据
	document.querySelector('.list .ccright').innerHTML = html+html; // 复制一份数据
	let height = document.querySelector('.list .ssright').offsetHeight; // 一份数据的高度
	addKeyFramesleft( '-'+height+'px' ); // 设置keyframes
	document.querySelector('.list .ccright').className += ' rowupright'; // 添加 rowup
}
initright();
}
init(); 