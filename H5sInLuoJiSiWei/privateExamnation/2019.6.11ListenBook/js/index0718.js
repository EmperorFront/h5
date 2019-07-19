//填充dom
var dom = `
<div id="pageBg"></div>
<div id="view">
	<div id="logo1">
		<div class="logoImg">
			<img src="load/logo.png">
		</div>
		<p class="logoText">已加载 0%</p>
	</div>
	<div id="main">
		<div id="tZ">
			<div id="panoBg"></div>
			<div id="cloud"></div>
			<div id="pano"></div>
		</div>
	</div>
</div>
<div id="go" class="hidden" style="width: 10%;position: absolute;bottom: 5%;right: 15%;text-align: center;height: 10%;"> 
	<img id="goImg" src="load/go.png" style="height: 100%;margin: auto;"/>
</div>
<div id="window" class="hidden" style="width: 90%;min-height: 100px;position: absolute;top: 5%;left: 5%;text-align: center;height: 90%;"> 
	<img id="windowImg" src="" style="height: 100%;margin: auto;"/>
</div>`;

$('#root').html(dom);

(function() {//loading完搞入口函数
  setLoading()//初始化loading动画
  setPerc()//初始化图像动画
})()

/*
  根据当前屏幕的大小，来计算景深
  1.固定视野的角度大小，根据这个角度的大小，计算出景深
  2. 保持我和景物之间的距离不变
*/
function setPerc() {
  resteview()//重置视区？
  window.onresize = resteview

  function resteview() {
    var view = document.querySelector('#view')
    var main = document.querySelector('#main')
    var deg = 52.5
    var height = document.documentElement.clientHeight;
    var R = Math.round(Math.tan(deg / 180 * Math.PI) * height * .5);
    view.style.WebkitPerspective = view.style.perspective = R + "px";
    css(main, 'translateZ', R)
  }
}
/* 根据屏幕大小 计算景深 */
function setLoading() {//该函数用来刷家在进度百分比条。
  var logoText = document.querySelector('.logoText');//已加载1%。。。
  var data = [];//数据数组
  var nub = 0;//当前加载数
  for (var s in imgData) {//imgData，所有的图片数组
    // console.log(s);
    data = data.concat(imgData[s]);//concat，数组链接。 把img的数据模块挨个放在data数组。二维数组变一维数组。
  }
  for (var i = 0; i < data.length; i++) {
    var img = new Image();
    img.src = data[i];//预加载图片
    img.onload = function() {
      nub++;
      //console.log(Math.floor(nub/data.length*100));
      logoText.innerHTML = "已加载 " + (Math.floor(nub / data.length * 100)) + "%";//按照图片张数显示
      if (nub == data.length) {
        //图片加载完成之后，要做的事情
        anmt();
      }
    };
  }
}

function anmt() {//百分比和首屏logo动画
  var view = document.querySelector('#view')//全景容器
  var logo1 = document.querySelector('#logo1')//该元素包含百分比和加载logo
  var logo2 = document.createElement("div");//第二个logo容器（单logo黑白）
  var logo3 = document.createElement("div");//第三个logo容器（彩色）
  var img = new Image()
  var img2 = new Image()
  img.src = imgData.logo[0]//加载过之后就有了，直接拿来用。
  img2.src = imgData.logo[1]//组合第二个logo，黑白
  logo2.id = "logo2"//赋上id
  logo3.id = "logo3"
  logo2.className = logo3.className = "logoImg"//logo
  logo2.appendChild(img);//黑白容器dom组合好
  logo3.appendChild(img2);//彩色logo dom组合好
  css(logo2, "opacity", 0);//隐藏第二个logo（黑白）
  css(logo3, "opacity", 0);//隐藏第三个logo（彩色）
  css(logo2, 'translateZ', -1000);//第二个logo挪的远远的
  css(logo3, 'translateZ', -1000);
  view.appendChild(logo2);//加到全景容器中
  view.appendChild(logo3);
  MTween({
    el: logo1,//目标元素
    target: {
      opacity: 40,//最终态为透明
      translateZ: 350
    },
    time: 1500,//转态时间
    // type: 'easeBoth',
    type: 'easeOut',//
    callBack: function() {
      view.removeChild(logo1)
      anmt5();
      // css(logo2, 'opacity', 100)//展现第二个logo（黑豹）
      // MTween({
      //   el: logo2,//黑白logo
      //   target: {
      //     translateZ: 0//最终态挪到最前边。
      //   },
      //   time: 1000,
      //   type: 'easeBoth',
      //   callBack: function(){
      //     anmt2();//大动画
      //     initclick();//绑定点击事件
      //   }
      // })
    }
  })
}
/* 隐藏logo2，开始让logo3显示出来 */
function anmt2() {
  var view = document.querySelector('#view');//全景全局容器
  var logo2 = document.querySelector('#logo2');//第二个logo容器 （黑白）
  var logo3 = document.querySelector('#logo3')//第三个logo容器 （彩色）
  setTimeout(function() {
    MTween({
      el: logo2,//黑白logo
      target: {
        translateZ: -1000//最终态挪到远处
      },
      time: 800,
      type: 'linear',
      callBack: function() {
        view.removeChild(logo2)
        css(logo3, 'opacity', 100)//显示出彩色logo来
        setTimeout(function() {
          MTween({
            el: logo3,
            target: { translateZ: 0 },
            time: 300,
            type: "easeBoth",
            callBack: anmt3
          });
        }, 300);
      }
    })
  }, 2000)
}

function anmt3() {
  var view = document.querySelector('#view');//全景全局容器
  var logo3 = document.querySelector('#logo3');//彩色logo
  setTimeout(function() {
    MTween({
      el: logo3,//彩色logo
      target: { translateZ: -2000 },//最终态
      time: 2000,//
      type: "easeIn",
      callBack: function() {
        view.removeChild(logo3);
        anmt4();//爆炸效果
      }
    });
  }, 1000)
}

function anmt4() {
  var view = document.querySelector('#view');//全景全局容器
  var logo4 = document.createElement("div");//风暴旋转容器
  var logoIcos = document.createElement("div");//碎片容器
  var logo4Img = new Image()
    
  var iconsLength = 270;// 设定碎片个数
  logo4.id = "logo4"
  logoIcos.id = "logoIcos"
  logo4Img.id = "logo4Img"
  logo4Img.src = imgData.logo[2]//取第三个logo
  css(logo4, "translateZ", -2000)//设定起始位置为远方
  css(logo4, "scale", 0)//设定起始不缩放
  for (var i = 0; i < iconsLength; i++) {
    var span = document.createElement('span')
    var xR = 20 + Math.round(Math.random() * 240) // 圆柱碎片的X半径
    var xDeg = Math.round(Math.random() * 360)//倾斜x角度
    var yR = 10 + Math.round(Math.random() * 240) // 圆柱碎片的Y半径
    var yDeg = Math.round(Math.random() * 360)
    css(span, "rotateY", xDeg);
    css(span, "translateZ", xR);
    css(span, "rotateX", yDeg);
    css(span, "translateY", yR)
    span.style.backgroundImage = "url(" + imgData.logoIco[(i % 3)] + ")"//取012三个图
    logoIcos.appendChild(span)
  }
  logo4.appendChild(logoIcos)
  logo4.appendChild(logo4Img)
  view.appendChild(logo4)//追加至全景。
  MTween({
    el: logo4,
    target: {
      translateZ: 200,//目标到眼前
      scale: 200//缩放100
    },
    time: 6000,
    type: "easeOutStrong",
    callBack: function() {
      setTimeout(function() {
        MTween({
          el: logo4,
          target: {
            translateZ: -1000,//挪走。
            scale: 20
          },
          time: 3,
          type: "linear",
          callBack: function() {
            view.removeChild(logo4);
            anmt5();//大动画
            initclick();//绑定点击事件
          }
        });
      }, 100)
    }
  });
}
//这块代码后续要删掉，用于秀技术
let jingshen = -100;
let zhouchang = 24;
let bgtemp = JSON.stringify(imgData.bg);
imgData.bg = JSON.parse(bgtemp);
imgData.bg.length =  zhouchang;
function initclick() {
    //绑定点击事件
    var spans = document.querySelectorAll(".pano span");
    for(var i = 0; i< spans.length; i++){
      // if(i%3){
      //   document.querySelectorAll(".pano span")[i].addEventListener('click', 
      //     function (){
      //       var speechSU = new window.SpeechSynthesisUtterance();
      //       speechSU.text = '马老师好帅';
      //       window.speechSynthesis.speak(speechSU);
      //     }
      //   );
      // } else {
        document.querySelectorAll(".pano span")[i].addEventListener('click', 
          function (){
            document.getElementById('thediv').setAttribute('style', 'display:block');
          }
        );
      // }
    }
    //弹窗点击确定关闭逻辑
    document.getElementById('close-tip').addEventListener('click', 
    function (){
      document.getElementById('thediv').setAttribute('style', 'display:none');
    
      jingshen = document.getElementById('jingshen').value*1;
      zhouchang = document.getElementById('zhouchang').value*1;
      if(jingshen === 0){jingshen = -100}
      if(zhouchang === 0){zhouchang = 24}
      imgData.bg = JSON.parse(bgtemp);
      imgData.bg.length =  zhouchang;
      var panoBg = document.querySelector('#panoBg');
      panoBg.innerHTML = '';
      anmt5();
      initclick();
    }
  );
}

function anmt5() {
  var tZ = document.querySelector('#tZ')//卷轴 + 图标 + 云朵容器
  css(tZ, 'translateZ', -2000)//开始状态，启动点在远处
  anmt6() // 主体
  if(jingshen === -100 && zhouchang === 24){//这一行后边会去掉。
    anmt7() // 云朵
  }
  createPano() // 图标层
  createBigClick();//点击响应层。
  MTween({//主体的前后向动画
    el: tZ,
    target: {
      translateZ: jingshen//主体往前挪至想要位置
    },
    time: 3600,//持续时间。
    type: 'easeBoth'
  })
}

function anmt6() {//卷轴动画
  var panoBg = document.querySelector('#panoBg');//背景图容器
  var width = 129 // 一张图片宽度
  var deg = 360 / imgData.bg.length // 圆柱图片角度
  //24片竹片情况下每片夹角为15度 deg = 15
  var R = parseInt(Math.tan((180 - deg) / 2 * Math.PI / 180) * (width / 2) - 1) // tan@ = 对边(R) / 临边(W/2)  R为景深，相机对正对面的边的最近距离-1
  //景深 R = 488
  var startDeg = 180;//从哪个角度开始填充第一个竹片
  css(panoBg, 'rotateX', 0)
  css(panoBg, 'rotateY', -765)//起始点设置，设定跑到眼前转动多少量的角度
  for (var i = 0; i < imgData.bg.length; i++) {//向元素中添加竹片
    var span = document.createElement("span");//新建竹片
    css(span, 'rotateY', startDeg)//竹片偏转角度
    css(span, 'translateZ', -R)//竹片景深
    span.style.backgroundImage = "url(" + imgData.bg[i] + ")";//竹片填充纹理
    span.style.display = "none";//竹片开始不可见
    panoBg.appendChild(span);//竹片加入背景图容器
    startDeg -= deg//下一个偏转角减去
  }
  var num = 0
  var timer = setInterval(function() {//设置竹片一个个出现
    panoBg.children[num].style.display = "block";
    num++
    if (num >= panoBg.children.length) {
      clearInterval(timer)
    }
  }, 3600 / 2 / imgData.bg.length)//持续时间的一半时间加载总片数
  MTween({//主体的旋转向动画
    el: panoBg,
    target: {
      rotateY: -160 // 通过设定角度设定首屏的位置。
    },
    time: 3600,//持续时间，可以考虑和前后向动画一致
    type: 'linear',
    callBack: function() {
      setDarg()//初始化拖拽逻辑
      setTimeout(function() {
        // setSensors()//初始化陀螺仪。
      }, 1000)
    }
  })
}

function anmt7() {
  var cloud = document.querySelector('#cloud');//云朵容器
  var cloudcount = 9;//云朵数量
  css(cloud, 'translateZ', -400)//初始远处
  for (var i = 0; i < cloudcount; i++) {//添加进去
    var span = document.createElement("span");
    span.style.backgroundImage = 'url(' + imgData.cloud[i % 3] + ')';
    var R = 200 + (Math.random() * 150)
    var deg = (360 / cloudcount) * i
    var x = Math.sin(deg * Math.PI / 180) * R
    var z = Math.cos(deg * Math.PI / 180) * R
    var y = (Math.random() - .5) * 200//纵轴随机
    css(span, "translateX", x)
    css(span, "translateZ", z)
    css(span, "translateY", y)
    span.style.display = 'none'
    cloud.appendChild(span)
  }
  var num = 0
  var timer = setInterval(function() {//一朵朵出现
    cloud.children[num].style.display = 'block'
    num++
    if (num >= cloud.children.length) {
      clearInterval(timer);
    }
  }, 50)
  MTween({//云朵旋转动画
    el: cloud,
    target: {
      rotateY: 540
    },
    time: 3500,
    type: "easeIn",
    callIn: function() {
      var deg = -css(cloud, "rotateY");
      for (var i = 0; i < cloud.children.length; i++) {
        css(cloud.children[i], "rotateY", deg);
      }
    },
    callBack: function() {//结束删除
      cloud.parentNode.removeChild(cloud)
      bgShow();
      machineAnimit();//弹出领取机器
      initcloud();
      addBigClickEvent();//绑定弹层点击事件
      $("#go").show();
    }
  })
}

function setDarg() {//拖动逻辑
  var panoBg = document.querySelector('#panoBg');
  var tZ = document.querySelector('#tZ'); // 用来控制远近的
  var pano = document.querySelector('#pano')
  var startPoint = {
    x: 0,//后边会重新赋值
    y: 0//后边会重新赋值
  }
  var panoBgDeg = {
    x: 0,//后边会重新赋值
    y: 0//后边会重新赋值
  }
  var scale = {
    x: 129 / 15, // 移动一度需要走多少px 15 = 360/24张图片
    y: 1170 / 80
  }
  var startZ = css(tZ, "translateZ")
  var lastDeg = { x: 0, y: 0 };
  var lastDis = { x: 0, y: 0 };
  document.addEventListener('touchstart', function(e) {
    window.isTouch = true
    clearInterval(pano.timer)
    clearInterval(panoBg.timer)
    clearInterval(tZ.timer)
    startPoint.x = e.changedTouches[0].pageX;console.log(startPoint.x);
    startPoint.y = e.changedTouches[0].pageY;console.log(startPoint.y);
    panoBgDeg.x = css(panoBg, 'rotateY');console.log('panoBgDeg.x',panoBgDeg.x);
    panoBgDeg.y = css(panoBg, 'rotateX');console.log('panoBgDeg.y',panoBgDeg.y);
  
    
    var top = document.scrollTop
      , totalScroll = document.scrollHeight
      , currentScroll = top + document.offsetHeight
    //If we're at the top or the bottom of the containers
    //scroll, push up or down one pixel.
    //
    //this prevents the scroll from "passing through" to
    //the body.
    if(top === 0) {
      document.scrollTop = 1
    } else if(currentScroll === totalScroll) {
      document.scrollTop = top - 1
    }
  })

  document.addEventListener('touchmove', function(e) {
    var nowDeg = {}
    var nowDeg2 = {} // 悬浮层
    var nowPoint = {}
    nowPoint.x = e.changedTouches[0].pageX;
    nowPoint.y = e.changedTouches[0].pageY;
    var dis = {}
    dis.x = nowPoint.x - startPoint.x
    dis.y = nowPoint.y - startPoint.y
    var disDeg = {}
    disDeg.x = -(dis.x / scale.x) // 距离转度数
    disDeg.y = dis.y / scale.y
    // panoBgDeg.y = css(panoBg, 'rotateX')

    nowDeg.y = panoBgDeg.y + disDeg.y // 开始角度 + 移动角度
    nowDeg.x = panoBgDeg.x + disDeg.x
    nowDeg2.x = panoBgDeg.x + (disDeg.x) * 0.95
    nowDeg2.y = panoBgDeg.y + (disDeg.y) * 0.95
    if (nowDeg.y > 45) {
      nowDeg.y = 45
    } else if (nowDeg.y < -45) {
      nowDeg.y = -45
    }

    if (nowDeg2.y > 45) {
      nowDeg2.y = 45
    } else if (nowDeg2.y < -45) {
      nowDeg2.y = -45
    }
    lastDis.x = nowDeg.x - lastDeg.x
    lastDeg.x = nowDeg.x
    lastDis.y = nowDeg.y - lastDeg.y
    lastDeg.y = nowDeg.y
    css(panoBg, "rotateX", nowDeg.y);
    css(panoBg, "rotateY", nowDeg.x);
    css(pano, "rotateX", nowDeg2.y); //pano为浮动层，rotateX为上下，改动的是y
    css(pano, "rotateY", nowDeg2.x);//nowDeg2.x这个值是错误的。
    var disZ = Math.max(Math.abs(dis.x), Math.abs(dis.y))
    if (disZ > 300) {
      disZ = 300
    }
    css(tZ, 'translateZ', startZ - disZ);

        //松手触发动画
    //大件
    //奖学金领取屏
    doFloatingPiece(nowDeg.x);
  })
  document.addEventListener('touchend', function(e) {

    var nowDeg = {
      x: css(panoBg, "rotateY"),
      y: css(panoBg, "rotateX")
    };
    var disDeg = {//缓冲距离
      x: lastDis.x * 10,
      y: lastDis.y * 10
    }

       //松手触发动画
        //大件
        //奖学金领取屏
        doFloatingPiece(nowDeg.x + disDeg.x);

    MTween({
      el: tZ,
      target: {
        translateZ: startZ // 移动后回来 变近
      },
      time: 700,
      type: "easeOut"
    })
    MTween({
      el: panoBg,
      target: {
        rotateY: nowDeg.x + disDeg.x // 缓冲
      },
      time: 800,
      type: "easeOut"
    })
    MTween({
      el: pano,
      target: {
        rotateY: nowDeg.x + disDeg.x // 缓冲
      },
      time: 800,
      type: "easeOut",
      callBack: function() {
        window.isTouch = false
        window.isStart = false
      }
    })
    console.log(nowDeg.x);
    console.log(nowDeg.y);
  })

  // document.querySelector('body').addEventListener('touchstart',function(e){

  // });
}

function bgShow() {
  var pageBg = document.querySelector('#pageBg')
  MTween({
    el: pageBg,
    target: {
      opacity: 100
    },
    time: 1000,
    type: "easeBoth"
  })
}

var panosClick = {
  pano0:{width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},
  pano1:{
    width:'0px',
    height:'0px',
    startDeg:-75,
    marginTop:'-240px'
  },
  pano2:{
    width:'0px',
    height:'0px',
    startDeg:-95,
    marginTop:'-240px'
  },
  pano3:{width:"37px",height:"130px",startDeg:-18,marginTop:"-135px"},
  pano4:{width:"60px",height:"130px",startDeg:-22,marginTop:"-135px"},


  

  length: 5,
};
// var panosClick = [
//   {name:'pano0', width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},
//   {},

// ];
var bigClick = [
  {name:'pano0', width:"92px",height:"126px",startDeg:35,marginTop:"-270px"},
];



// 漂浮层
function createPano() {
  var pano = document.querySelector('#pano');
  var deg = 10;
  var R = 450;
  var nub = 0;
  var startDeg = 180;
  // css(pano, "rotateX", 0);
  // css(pano, "rotateY", 0);
  // css(pano, "scale", 0);
  // var pano1 = document.createElement("div");
  // pano1.className = "pano";
  // css(pano1, "translateX", 1.564);
  // css(pano1, "translateZ", -9.877);
  // for (var i = 0; i < 2; i++) {
  //   var span = document.createElement("span");
  //   span.style.cssText = "height:344px;margin-top:-172px;";
  //   span.style.background = "url(" + imgData["pano"][nub] + ")";
  //   css(span, "translateY", 0);
  //   css(span, "rotateY", startDeg);
  //   css(span, "translateZ", -R);
  //   nub++;
  //   startDeg -= deg;
  //   pano1.appendChild(span)
  // }
  // pano.appendChild(pano1);

  // var pano2 = document.querySelector('#pano');
  // var startDeg2 = panosClick.pano0.startDeg;
  // css(pano, "rotateX", 0);
  // css(pano, "rotateY", 0);
  // css(pano, "scale", 0);
  // var pano2 = document.createElement("div");
  // pano2.className = "pano";
  // css(pano2, "translateX", 1.564);
  // css(pano2, "translateZ", -9.877);
  // for (var i = 0; i < 1; i++) {
  //   var span = document.createElement("span");
  //   span.style.cssText = "height:178px;width:"+panosClick.pano0.width+";margin-top:-240px;";
  //   span.style.background = "url(" + imgData["pano"][nub] + ")";
  //   css(span, "translateY", 0);
  //   css(span, "rotateY", startDeg2);
  //   css(span, "translateZ", -R);
  //   nub++;
  //   startDeg -= deg;
  //   pano2.appendChild(span)
  // }
  // pano.appendChild(pano2);
  for (var j = 0; j < panosClick.length; j++) {
    var thepano = document.createElement("div");
    var startDeg2 = panosClick['pano' + j].startDeg;
    css(pano, "rotateX", 0);
    css(pano, "rotateY", 0);
    css(pano, "scale", 0);
    var span = document.createElement("div");
    // span.className = "pano";
    // // css(span, "translateX", 1.564);
    // // css(span, "translateZ", -9.877);
    // for (var i = 0; i < 1; i++) {
    //   var span = document.createElement("div");

    // opacity:0;height: 160px;width: 400px;left: -123px;background: url(&quot;pano3/machine2.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: -400px;
    var str = "height: 160px;width: 400px;left: -123px;background: url(&quot;pano3/machine2.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: -400px;"
    span.style.cssText = "float:left;height:"+panosClick['pano' + j].height+";width:"+panosClick['pano' + j].width+";margin-top:"+panosClick['pano' + j].marginTop+";";
    span.style.background = "url(" + imgData["pano"][nub] + ")";
    css(span, "translateY", 0);
    css(span, "rotateY", startDeg2);
    css(span, "translateZ", -R);
    nub++;
    startDeg -= deg;
    thepano.appendChild(span);
    // }
    console.log(pano);
    // debugger;
    pano.appendChild(thepano);
  }
  //创建浮层元素
  initFloatingPiece();

  setTimeout(function() {
    MTween({
      el: pano,
      target: {
        rotateY: -160,
        scale: 100
      },
      time: 1200,
      type: "easeBoth"
    });
  }, 28);

  // var pano2 = document.createElement("div");
  // pano2.className = "pano";
  // css(pano2, "translateX", 20.225);
  // css(pano2, "translateZ", -14.695);
  // for (var i = 0; i < 3; i++) {
  //   var span = document.createElement("span");
  //   span.style.cssText = "height:326px;margin-top:-163px;";
  //   span.style.background = "url(" + imgData["pano"][nub] + ")";
  //   css(span, "translateY", 278);
  //   css(span, "rotateY", startDeg);
  //   css(span, "translateZ", -R);
  //   nub++;
  //   startDeg -= deg;
  //   pano2.appendChild(span)
  // }
  // pano.appendChild(pano2);

  // var pano3 = document.createElement("div");
  // pano3.className = "pano";
  // css(pano3, "translateX", 22.175);
  // css(pano3, "translateZ", -11.35);
  // for (var i = 0; i < 4; i++) {
  //   var span = document.createElement("span");
  //   span.style.cssText = "height:195px;margin-top:-97.5px;";
  //   span.style.background = "url(" + imgData["pano"][nub] + ")";
  //   css(span, "translateY", 192.5);
  //   css(span, "rotateY", startDeg);
  //   css(span, "translateZ", -R);
  //   nub++;
  //   startDeg -= deg;
  //   pano3.appendChild(span)
  // }
  // pano.appendChild(pano3);

  // var pano4 = document.createElement("div");
  // pano4.className = "pano";
  // css(pano4, "translateX", 20.225);
  // css(pano4, "translateZ", 14.695);
  // startDeg = 90;
  // for (var i = 0; i < 5; i++) {
  //   var span = document.createElement("span");
  //   span.style.cssText = "height:468px;margin-top:-234px;";
  //   span.style.background = "url(" + imgData["pano"][nub] + ")";
  //   css(span, "translateY", 129);
  //   css(span, "rotateY", startDeg);
  //   css(span, "translateZ", -R);
  //   nub++;
  //   startDeg -= deg;
  //   pano4.appendChild(span)
  // }
  // pano.appendChild(pano4);

  // var pano5 = document.createElement("div");
  // pano5.className = "pano";
  // css(pano5, "translateX", -4.54);
  // css(pano5, "translateZ", 9.91);
  // startDeg = 18;
  // for (var i = 0; i < 6; i++) {
  //   var span = document.createElement("span");
  //   span.style.cssText = "height:444px;margin-top:-222px;";
  //   span.style.background = "url(" + imgData["pano"][nub] + ")";
  //   css(span, "translateY", -13);
  //   css(span, "rotateY", startDeg);
  //   css(span, "translateZ", -R);
  //   nub++;
  //   startDeg -= deg;
  //   pano5.appendChild(span)
  // }
  // pano.appendChild(pano5);

  // var pano6 = document.createElement("div");
  // pano6.className = "pano";
  // css(pano6, "translateX", -11.35);
  // css(pano6, "translateZ", 22.275);
  // startDeg = 18;
  // for (var i = 0; i < 6; i++) {
  //   var span = document.createElement("span");
  //   span.style.cssText = "height:582px;margin-top:-291px;";
  //   span.style.background = "url(" + imgData["pano"][nub] + ")";
  //   css(span, "translateY", 256);
  //   css(span, "rotateY", startDeg);
  //   css(span, "translateZ", -R);
  //   nub++;
  //   startDeg -= deg;
  //   pano6.appendChild(span)
  // }
  // pano.appendChild(pano6);
  // setTimeout(function() {
  //   MTween({
  //     el: pano,
  //     target: {
  //       rotateY: 25,
  //       scale: 100
  //     },
  //     time: 1200,
  //     type: "easeBoth"
  //   });
  // }, 2800);
}

/*陀螺仪*/
/*function setSensors(){
  var pano = document.querySelector('#pano');
  var panoBg = document.querySelector('#panoBg');
  var last = {x:0 , y:0};
  var isStart = false
  window.addEventListener('deviceorientation', function(e){
    var x = e.beta;
    var y = e.gamma;
    if(typeof last.x == 'undefined'){
      last.x = x;
      last.y = y;
      return
    }
    x = x - last.x
    y = y - last.y
    last.x = x
    last.y = y
    var degX = css(pano, 'rotateX')
    var degY = css(pano, 'rotateY')
    var nowDegY = degY + y
    var nowDegX = degX + x
    if(nowDegY > 40){
        nowDegY = 40;
      } else if(nowDegY < -40) {
        nowDegY = 40;
      }
      css(pano,"rotateX",nowDegY);
      css(pano,"rotateY",nowDegY);  
      css(panoBg,"rotateX",nowDegY);
      css(panoBg,"rotateY",nowDegY);
  })
}*/
/*陀螺仪*/
function setSensors() {
  var pano = document.querySelector('#pano');
  var panoBg = document.querySelector('#panoBg');
  var last = { x: 0, y: 0 };
  window.isStart = false;
  window.isTouch = false;
  var start = {};
  var now = {};
  var startEl = {};
  var lastTime = Date.now()
  var scale = 129 / 18;
  var startZ = -160;
  var dir = window.orientation; //检测横竖屏

  window.addEventListener('orientationchange', function(e) {
      dir = window.orientation //用户切换了横竖之后，重置方向
    })
    // deviceorientation执行的间隔 有可能小于
    /*
      注意 用户切换了横屏之后，左右旋转就不再是e.gamma，上下旋转也不再是e.beta，所以陀螺仪记得检测横竖屏
    */

  window.addEventListener('deviceorientation', function(e) {
    if (window.isTouch) {
      return
    }
    var x = e.beta;
    var y = e.gamma;
    switch (dir) {
      case 0:
        x = e.beta;
        y = e.gamma;
        break;
      case 90:
        x = e.gamma;
        y = e.beta;
        break;
      case -90:
        x = -e.gamma;
        y = -e.beta;
        break;
      case 180:
        x = -e.beta;
        y = -e.gamma;
        break;
    }
    var nowTime = Date.now()
      // 检测陀螺仪 转动时间 与插件的20ms 兼容
    if (nowTime - lastTime < 30) {
      return
    }
    lastTime = nowTime
      // 角度倾斜
    if (!isStart) {
      //start
      isStart = true;
      start.x = x
      start.y = y
      startEl.x = css(pano, 'rotateX')
      startEl.y = css(pano, 'rotateY')
    } else {
      // move
      now.x = x
      now.y = y

      var dis = {}
      dis.x = now.x - start.x
      dis.y = now.y - start.y

      var deg = {}
      deg.x = startEl.x + dis.x
      deg.y = startEl.y + dis.y

      if (deg.x > 45) {
        deg.x = 45;
      } else if (deg.x < -45) {
        deg.x = -45;
      }

      var disXZ = Math.abs(Math.round((deg.x - css(pano, 'rotateX')) * scale))
      var disYZ = Math.abs(Math.round((deg.y - css(pano, "rotateY")) * scale))

      var disZ = Math.max(disXZ, disYZ)
      if (disZ > 300) {
        disZ = 300
      }
      MTween({
        el: tZ,
        target: {
          translateZ: startZ - disZ
        },
        time: 300,
        type: 'easeOut',
        callBack: function(){
          MTween({
            el:tZ,
            target:{
              translateZ: startZ
            },
            time: 400,
            type: "easeOut"
          })
        }
      })

      MTween({
        el: pano,
        target: {
          rotateX: deg.x,
          rotateY: deg.y
        },
        time: 800,
        type: 'easeOut'
      })

      MTween({
        el: panoBg,
        target: {
          rotateX: deg.x,
          rotateY: deg.y
        },
        time: 800,
        type: 'easeOut'
      })
    }
  })
}
















//初始化浮片
function initFloatingPiece() {
  var pano = document.querySelector('#pano');
  //首屏机器
  //奖学金领取处机器
  var themachine = document.createElement('div');
  var machine = document.createElement('div');
  machine.className = "machine";
  var str = "opacity:0;float:left;height: 550px;width: 400px;left: -130px;background: url(&quot;pano3/mation.png&quot;);transform: translateY(0px) rotateY(166deg) translateZ(-429px);float: left;position: absolute;";
  machine.style.cssText = str;
  machine.style.background = "url(" + imgData["big"][0] + ")";
  themachine.appendChild(machine);
  pano.appendChild(themachine);
  //奖学金领取处文字
  var machineWords = document.createElement('div');
  var words = document.createElement('div');
  words.className = "machine2";
  var str = "opacity:0;height: 160px;width: 400px;left: -123px;background: url(&quot;pano3/machine2.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: -400px;";
  words.style.cssText = str;
  words.style.background = "url(" + imgData["big"][1] + ")";
  machineWords.appendChild(words);
  pano.appendChild(machineWords);
  //硬币
  var machineIcon = document.createElement('div');
  var icon = document.createElement('div');
  icon.className = "machine3";
  var str = "opacity: 0;height: 131px;width: 237px;left: -12px;background: url(&quot;pano3/machine3.png&quot;);transform: translateY(0px) rotateY(163deg) translateZ(-338px);float: left;position: absolute;top: 75px;";
  icon.style.cssText = str;
  icon.style.background = "url(" + imgData["big"][2] + ")";
  machineIcon.appendChild(icon);
  pano.appendChild(machineIcon);

}

//首屏奖学金机器
function machineAnimit(){
  MTween({
    el: $(".machine")[0],//听书奖学金领取机器
    target: {
      opacity: 100,//透明变不透明
      top: -269,//上升
    },
    time: 400,
    type: 'linear',
    callBack: function() {
      MTween({
        el: $(".machine2")[0],//奖学金领取处字样
        target: {
          opacity: 100,//透明变不透明
          top: -400,//上升
        },
        time: 400,
        type: 'linear',
        callBack: function() {
          iconAnimit();
        }
      })
    }
  })
}
function iconAnimit(){
  MTween({
    el: $(".machine3")[0],//奖学金领取处字样
    target: {
      opacity: 100,//透明变不透明
      top: 80,//上升
    },
    time: 500,
    type: 'linear',
    callBack: function() {
      MTween({
        el: $(".machine3")[0],//奖学金领取处字样
        target: {
          opacity: 30,//透明变不透明
          top: 75,//上升
        },
        time: 100,
        type: 'linear',
        callBack: function() {
          iconAnimit();
        }
      })
    }
  })
}
//浮片动作
function doFloatingPiece (nowDegx) {
  if(Math.abs(((nowDegx + 360000) - 175))%360 < 50){
    machineAnimit();
  } else {
    MTween({
      el: $(".machine")[0],//黑白logo
      target: {
        opacity: -100,//最终态挪到远处
        top: 269,
      },
      time: 50,
      type: 'linear',
      callBack: function() {
        MTween({
          el: $(".machine2")[0],//奖学金领取处字样
          target: {
            opacity: -100,//透明变不透明
            top: 40,//上升
          },
          time: 50,
          type: 'linear',
          callBack: function() {
            MTween({
              el: $(".machine3")[0],//钱币
              target: {
                opacity: -100,//透明变不透明
                top: 40,//上升
              },
              time: 50,
              type: 'linear',
              callBack: function() {
              }
            })
          }
        })
      }
    })
  }
}
//创建各种点击及浮层
function createBigClick(){
  var bigClickData = [
    {id:"jiahangjia",name:"贾行家",width:"146px",height:"310px",startDeg:135,marginTop:"45px","point":"1111","link":"2222"},
    {id:"lijun",name:"李筠",width:"174px",height:"371px",startDeg:125,marginTop:"-169px","point":"1111","link":"2222"},
    {id:"liuwei",name:"刘玮",width:"157px",height:"304px",startDeg:79,translateZ:"-463px",marginTop:"-107px","point":"1111","link":"2222"},
    {id:"huanglining1",name:"黄昱宁-1",width:"181px",height:"289px",startDeg:103,marginTop:"-151px","point":"1111","link":"2222"},
    {id:"haunglining2",name:"黄昱宁-2",width:"0px",height:"0px",startDeg:99,marginTop:"-126px","point":"1111","link":"2222"},
    {id:"haungliningmingpai",name:"黄昱宁名牌",width:"39px",height:"91px",startDeg:94,marginTop:"-154px","point":"1111","link":"2222"},
    {id:"liuweimingpai",name:"刘玮名牌",width:"0px",height:"0px",startDeg:83,marginTop:"-113px","point":"1111","link":"2222"},
    {id:"zhuwei1",name:"朱伟-1",width:"330px",height:"311px",startDeg:100,translateZ:'-540px',marginTop:"56px","point":"1111","link":"2222"},
    {id:"zhuwei2",name:"朱伟-2",width:"0px",height:"0px",startDeg:84,marginTop:"48px","point":"1111","link":"2222"},
    {id:"caoxingyuan1",name:"曹星原-1",width:"0px",height:"0px",startDeg:56,marginTop:"20px","point":"1111","link":"2222"},
    {id:"caoxingyuan2",name:"曹星原-2",width:"286px",height:"345px",startDeg:65,translateZ:'-500px',marginTop:"20px","point":"1111","link":"2222"},
    {id:"linannan",name:"李南南",width:"102px",height:"315px",startDeg:37,translateZ:'-448px',marginTop:"-9px","point":"1111","link":"2222"},
    {id:"hongbaohe1-1",name:"红包盒1-1",width:"24px",height:"50px",startDeg:26,marginTop:"134px","point":"1111","link":"2222"},
    {id:"hongbaohe1-2",name:"红包盒1-2",width:"37px",height:"50px",startDeg:24,marginTop:"134px","point":"1111","link":"2222"},
    {id:"shehuiyujingji",name:"社会与经济",width:"93px",height:"117px",startDeg:38,marginTop:"-135px","point":"1111","link":"2222"},
    {id:"anzhishi1",name:"暗知识-1",width:"23px",height:"115px",startDeg:26,marginTop:"-135px","point":"1111","link":"2222"},
    {id:"anzhishi2",name:"暗知识-2",width:"79px",height:"115px",startDeg:25,marginTop:"-135px","point":"1111","link":"2222"},
    {id:"chengshi1",name:"成事-1",width:"89px",height:"116px",startDeg:14,marginTop:"-135px","point":"1111","link":"2222"},
    {id:"chengshi2",name:"成事-2 无",width:"38px",height:"116px",startDeg:9,marginTop:"-135px","point":"1111","link":"2222"},
    {id:"shiwenhuojinchensilu",name:"十问：霍金沉思录",width:"90px",height:"120px",startDeg:36,marginTop:"-261px","point":"1111","link":"2222"},
    {id:"meiguoxianjing1",name:"美国陷阱-1",width:"90px",height:"118px",startDeg:17,marginTop:"-259px","point":"1111","link":"2222"},
    {id:"meiguoxianjing2",name:"美国陷阱-2 无",width:"15px",height:"117px",startDeg:9,marginTop:"-259px","point":"1111","link":"2222"},
    {id:"bianhengqin",name:"卞恒沁",width:"104px",height:"301px",startDeg:6,marginTop:"-89px","point":"1111","link":"2222"},
    {id:"dasheji",name:"大设计",width:"99px",height:"124px",startDeg:-11,marginTop:"-254px","point":"1111","link":"2222"},
    {id:"zhaizizhongguo",name:"宅兹中国",width:"99px",height:"123px",startDeg:-25,marginTop:"-258px","point":"1111","link":"2222"},
    {id:"jinhuidui",name:"锦灰堆",width:"89px",height:"122px",startDeg:-6,marginTop:"-128px","point":"1111","link":"2222"},
    {id:"xugoudeyoutaiminzu1",name:"虚构的犹太民族-1",width:"86px",height:"119px",startDeg:-18,marginTop:"-128px","point":"1111","link":"2222"},
    {id:"xugoudeyoutaiminzu2",name:"虚构的犹太民族-2 无",width:"55px",height:"119px",startDeg:-21,marginTop:"-128px","point":"1111","link":"2222"},
    {id:"xiaoshuodeyishu1",name:"小说的艺术-1",width:"92px",height:"121px",startDeg:-30,marginTop:"-126px","point":"1111","link":"2222"},
    {id:"xiaoshuodeyishu2",name:"小说的艺术-2 无",width:"29px",height:"121px",startDeg:-36,marginTop:"-126px","point":"1111","link":"2222"},
    {id:"liuxuan",name:"刘玄",width:"110px",height:"285px",startDeg:-36,marginTop:"-16px","point":"1111","link":"2222"},
    {id:"tingshutieshi1",name:"听书帖士-1",width:"44px",height:"220px",startDeg:-45,marginTop:"-287px","point":"1111","link":"2222"},
    {id:"tingshutieshi2",name:"听书帖士-2",width:"59px",height:"220px",startDeg:-51,marginTop:"-287px","point":"1111","link":"2222"},
    {id:"shujialidehongbao",name:"书架里的红包",width:"73px",height:"66px",startDeg:-51,marginTop:"-83px","point":"1111","link":"2222"},
    {id:"yonghu1",name:"用户1",width:"78px",height:"118px",startDeg:-54,marginTop:"-24px","point":"1111","link":"2222"},
    {id:"yonghu2",name:"用户2",width:"175px",height:"307px",startDeg:-66,marginTop:"34px","point":"1111","link":"2222"},
    {id:"hongbaohe2",name:"红包盒2",width:"79px",height:"56px",startDeg:-75,marginTop:"181px","point":"1111","link":"2222"},
    {id:"yonghu3",name:"用户3",width:"64px",height:"100px",startDeg:-73,marginTop:"-25px","point":"1111","link":"2222"},
    {id:"tingshushujubang1",name:"听书数据榜-1",width:"153px",height:"235px",startDeg:-65,marginTop:"-294px","point":"1111","link":"2222"},
    {id:"tingshushujubang2",name:"听书数据榜-2",width:"0px",height:"0px",startDeg:-66,marginTop:"-294px","point":"1111","link":"2222"},
    {id:"ditu1",name:"地图1",width:"64px",height:"75px",startDeg:-82,marginTop:"-222px","point":"1111","link":"2222"},
    {id:"ditu2",name:"地图2",width:"70px",height:"69px",startDeg:-96,marginTop:"-236px","point":"1111","link":"2222"},
    {id:"ditu3",name:"地图3",width:"45px",height:"63px",startDeg:-105,marginTop:"-202px","point":"1111","link":"2222"},
    {id:"saodiseng",name:"扫地僧",width:"89px",height:"156px",startDeg:-96,marginTop:"-63px","point":"1111","link":"2222"},
    {id:"beisu",name:"倍速",width:"66px",height:"74px",startDeg:-85,marginTop:"9px","point":"1111","link":"2222"},
    {id:"yonghu4",name:"用户4",width:"90px",height:"213px",startDeg:-96,marginTop:"78px","point":"1111","link":"2222"},
    {id:"hongbaohe3",name:"红包盒3",width:"82px",height:"52px",startDeg:-131,marginTop:"113px","point":"1111","link":"2222"},
    {id:"yanglei",name:"杨蕾",width:"111px",height:"306px",startDeg:-114,marginTop:"47px","point":"1111","link":"2222"},
    {id:"ashi",name:"阿狮",width:"237px",height:"411px",startDeg:-145,translateZ:'-406px',marginTop:"-87px","point":"1111","link":"2222"},
    ]
  var pano = document.querySelector('#pano');
  for(var i = 0; i < bigClickData.length; i++){
    var outDiv = document.createElement('div');
    var imgDiv = document.createElement('div');
    imgDiv.className = bigClickData[i].id
    imgDiv.classList.add("showWindow");
    imgDiv.classList.add("hidden");
    var str = "opacity:1;background-color:'red';float:left;top:"+bigClickData[i].marginTop+
              ";height:"+bigClickData[i].height+
              ";width: "+bigClickData[i].width+
              ";left: 0px;transform: translateY(0px) rotateY("+bigClickData[i].startDeg+
              "deg) translateZ("+(bigClickData[i].translateZ === undefined ? "-429px": bigClickData[i].translateZ)+
              ");float: left;position: absolute;";
    imgDiv.style.cssText = str;
    imgDiv.style.background = "url(" + imgData["panosClick"][i] + ")";
    outDiv.appendChild(imgDiv);
    pano.appendChild(outDiv);
  }
}
function addBigClickEvent(){
  //显示
  $('.showWindow').show()
  //点击事件绑定
  var window = $('#window');
  var windowImg = $('#windowImg');
  $('.showWindow').click(function(){
    var windowName = $(this)[0].classList[0];
    windowImg[0].src = 'window/'+windowName+'.png'
    window.show();
  });
  window.click(function () {
    window.hide();  
  });
}
function initcloud(){
  var pano = document.querySelector('#pano');
  //首屏机器
  //奖学金领取处机器
  var thecloud01 = document.createElement('div');
  var cloud01 = document.createElement('div');
  cloud01.className = "cloud01";
  var str = "opacity:1;float:left;height: 140px;width: 407px;left: 0px;transform: translateY(0px) rotateY(121deg) translateZ(-500px);float: left;position: absolute;top: 312px;";
  cloud01.style.cssText = str;
  cloud01.style.background = "url(" + imgData["cloud"][3] + ")";
  thecloud01.appendChild(cloud01);
  pano.appendChild(thecloud01);
  //奖学金领取处文字
  var thecloud02 = document.createElement('div');
  var cloud02 = document.createElement('div');
  cloud02.className = "cloud02";
  var str = "opacity:1;height: 126px;width: 292px;left: 0px;transform: translateY(0px) rotateY(163deg) translateZ(-427px);float: left;position: absolute;top: 328px;";
  cloud02.style.cssText = str;
  cloud02.style.background = "url(" + imgData["cloud"][4] + ")";
  thecloud02.appendChild(cloud02);
  pano.appendChild(thecloud02);
  cloudblink(cloud02,'left');
  cloudblink(cloud01,'right')

}
function cloudblink(e,r){
  MTween({
    el: e,//奖学金领取处字样
    target: {
      opacity: 700,//透明变不透明
      left:(r==='right'? 30:10),
    },
    time: (r==='right'?2000:1200),
    type: 'linear',
    callBack: function() {
      MTween({
        el: e,//奖学金领取处字样
        target: {
          opacity: 30,//透明变不透明
          left: (r==='right'? 0:-40),
        },
        time: (r==='right'?2000:1200),
        type: 'linear',
        callBack: function() {
          cloudblink(e,r);
        }
      })
    }
  })
}

var onetime_click = 1;
var ua = navigator.userAgent;
var Asio = Asio || {send:function(a){ return false }};
function getMoney() {
	if(onetime_click){
		onetime_click = 0;	
		setTimeout(function(){
			onetime_click = 1;	
		},300);
		if(ua.indexOf('igetapp') && Asio.send('')) {
			//APP内,发请求，弹窗

      //发请求
      setTimeout(function(){ 
        ua = navigator.userAgent;
        if (ua.indexOf('igetapp')) {
          var user_id = 0;
          if( Asio.send('agent.info') != undefined ) {
            Asio.send('agent.info').then(function (res) {
              user_id = res.data.userid; //获取用户信息
          
              Asio.send('network.load', {
                url: '$_ENTREE_DOMAIN_$/odob/v2/front_activity/user_and_coupon_info',
                method: 'GET',
                params: {
                  user_id: user_id
                },
                contentType: 'application/x-www-form-urlencoded',
                proxyType: 'gateway/entree'
              }).then(function (res) {
                
                $('#window').show();
              });
            });
          }
        }
        
      }, 500);
		} else {
      //cms环境的页面
			if(Asio.send('')){
        var url = 'www.baidu.com';
        Asio.weLaunch(url);
      }
		}
	}
}