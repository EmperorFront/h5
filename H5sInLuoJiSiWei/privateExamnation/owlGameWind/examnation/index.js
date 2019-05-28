
//THREEJS 注册哪都能用的全局变量

var scene, //场景变量注册
    camera, //相机注册
    controls, //控制开关?
    fieldOfView, //
  	aspectRatio, //
  	nearPlane, //
  	farPlane, //
    shadowLight, // 
    backLight, //
    light,  //光线变量
    renderer, //回执函数
		container; //

//SCENE
var floor, 
    lion, //动物模型 狮子
    fan,
    isBlowing = false;//某标志位

//SCREEN VARIABLES

var HEIGHT, //真实设备高度 静态变量
  	WIDTH, //真实设备宽度 静态变量
    windowHalfX, //真实设备高度的一半
  	windowHalfY, //真实设备宽度的一半
    mousePos = {x:0,y:0}; //鼠标位置
    dist = 0; //

//INIT THREE JS, SCREEN AND MOUSE EVENTS

function init(){//初始化threejs，初始化 screen mouse事件
  scene = new THREE.Scene();//初始化场景
  HEIGHT = window.innerHeight;//场景高为屏幕高
  WIDTH = window.innerWidth;//场景宽为屏幕宽
  aspectRatio = WIDTH / HEIGHT;//屏幕宽高比
  fieldOfView = 60;//视野？
  nearPlane = 1;//近点渲染
  farPlane = 2000; //远点渲染
  camera = new THREE.PerspectiveCamera(//初始化相机
    fieldOfView,//视野
    aspectRatio,//宽高比
    nearPlane,//最远渲染
    farPlane);//最近渲染
  camera.position.z = 800;  
  camera.position.y = 0;  //相机位置
  camera.lookAt(new THREE.Vector3(0,0,0));//查下，观察点和相机位置区别    
  renderer = new THREE.WebGLRenderer({alpha: true, antialias: true });//渲染器初始化，透明度，高性能抗锯齿
  renderer.setPixelRatio( window.devicePixelRatio );//初始化设备像素比
  renderer.setSize(WIDTH, HEIGHT);//初始化屏幕宽高映射为渲染区域
  renderer.shadowMapEnabled = true;//     某标志位
  container = document.getElementById('world');//渲染区
  container.appendChild(renderer.domElement);//草，这个写法。。。。
  windowHalfX = WIDTH / 2;//局域变量常量视野中心
  windowHalfY = HEIGHT / 2;
  //绑定各类事件
  window.addEventListener('resize', onWindowResize, false);//处理屏幕宽高变化，重渲染函数调用
  document.addEventListener('mousemove', handleMouseMove, false);//鼠标移动时间条用
  document.addEventListener('mousedown', handleMouseDown, false);//点击事件调用
  document.addEventListener('mouseup', handleMouseUp, false);//点击完成事件调用
  document.addEventListener('touchstart', handleTouchStart, false);//点击开始事件调用
	document.addEventListener('touchend', handleTouchEnd, false);//点击过事件调用
	document.addEventListener('touchmove',handleTouchMove, false);//点击拖拽事件调用
  /*
  controls = new THREE.OrbitControls( camera, renderer.domElement);
  //*/
}

function onWindowResize() {//屏幕变化函数调用
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;
  windowHalfX = WIDTH / 2;
  windowHalfY = HEIGHT / 2;
  renderer.setSize(WIDTH, HEIGHT);
  camera.aspect = WIDTH / HEIGHT;
  camera.updateProjectionMatrix();//camera自有函数，专门处理重渲染。
}

function handleMouseMove(event) {//更改鼠标当前点全局变量
  mousePos = {x:event.clientX, y:event.clientY};
}

function handleMouseDown(event) {//更改是否吹标志位
  isBlowing = true;
}
function handleMouseUp(event) {
  isBlowing = false;
}

function handleTouchStart(event) {
  if (event.touches.length > 1) { //如果点击了
    event.preventDefault(); //    默认函数
		mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};//点击点
    isBlowing = true;//是否吹标志位
  }
}

function handleTouchEnd(event) {//终止吹
    //mousePos = {x:windowHalfX, y:windowHalfY};
    isBlowing = false;
}

function handleTouchMove(event) {//
  if (event.touches.length == 1) {
    event.preventDefault();
		mousePos = {x:event.touches[0].pageX, y:event.touches[0].pageY};
    isBlowing = true;
  }
}

function createLights() {//创建光线
  light = new THREE.HemisphereLight(0xffffff, 0xffffff, .5)
  
  shadowLight = new THREE.DirectionalLight(0xffffff, .8);
  shadowLight.position.set(200, 200, 200);
  shadowLight.castShadow = true;
  shadowLight.shadowDarkness = .2;
 	
  backLight = new THREE.DirectionalLight(0xffffff, .4);
  backLight.position.set(-100, 200, 50);
  backLight.shadowDarkness = .1;
  backLight.castShadow = true;
 	
  scene.add(backLight);
  scene.add(light);
  scene.add(shadowLight);
}

function createFloor(){ //这个函数没用，我注释掉了
  // floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000,500), new THREE.MeshBasicMaterial({color: 0xebe5e7}));
  // floor.rotation.x = -Math.PI/2;
  // floor.position.y = -100;
  // floor.receiveShadow = true;
  // scene.add(floor);
}

function createLion(){
  lion = new Lion();//新建一个lion对象
  scene.add(lion.threegroup);//此line对象包括了他的状态，模型只是一方面，加载只加载了模型
}

function createFan(){//创建风扇
  fan = new Fan();
  fan.threegroup.position.z = 350;
  scene.add(fan.threegroup);
}

Fan = function(){
  this.isBlowing = false;//风扇默认不转
  this.speed = 0;//默认没有速度
  this.acc =0;//
  //用于风扇叶片表面的蒙皮材质。
  this.redMat = new THREE.MeshLambertMaterial ({//创建暗淡的并不光亮的表面,这个函数挺屌的
    color: 0xad3525, 
    shading:THREE.FlatShading
  });
  //用于风扇叶片手柄的蒙皮材质
  this.greyMat = new THREE.MeshLambertMaterial ({
    color: 0x653f4c, 
    shading:THREE.FlatShading
  });
  //用于风扇叶片轴心的蒙皮材质
  this.yellowMat = new THREE.MeshLambertMaterial ({
    color: 0xfdd276, 
    shading:THREE.FlatShading
  });
  
  var coreGeom = new THREE.BoxGeometry(10,10,20);//手柄几何
  var sphereGeom = new THREE.BoxGeometry(10, 10, 3);//轴心几何，名字有点呆，叫球几何却是个方块
  var propGeom = new THREE.BoxGeometry(10,30,2);//叶片几何
  propGeom.applyMatrix( new THREE.Matrix4().makeTranslation( 0,25,0) );//一种数组几何旋转，中间值为距离旋转轴心距离
  
  this.core = new THREE.Mesh(coreGeom,this.greyMat);//手柄网格
  
  // 螺旋桨
  var prop1 = new THREE.Mesh(propGeom, this.redMat);//第一页片网格
  prop1.position.z = 15;//改动该叶片的纵深位置，否则在手柄中心
  var prop2 = prop1.clone();//克隆也把z信息克隆出来了。
  prop2.rotation.z = Math.PI/2;//旋转90
  var prop3 = prop1.clone();
  prop3.rotation.z = Math.PI;
  var prop4 = prop1.clone();
  prop4.rotation.z = -Math.PI/2;
  
  //轴心
  this.sphere = new THREE.Mesh(sphereGeom, this.yellowMat);//轴心网格
  this.sphere.position.z = 15;
  
  this.propeller = new THREE.Group();//创建风扇几何组，便于统一旋转
  this.propeller.add(prop1);
  this.propeller.add(prop2);
  this.propeller.add(prop3);
  this.propeller.add(prop4);
  
  this.threegroup = new THREE.Group();//创建风扇几何组，便于移动时统一移动
  this.threegroup.add(this.core);
  this.threegroup.add(this.propeller);
  this.threegroup.add(this.sphere);
}

//xt yt是风扇渲染target的目标点位
Fan.prototype.update = function(xTarget, yTarget){//风扇自动更新原生函数。
  this.threegroup.lookAt(new THREE.Vector3(0,80,60));//camera是全局渲染锥型视区，lookAt，可以局部的在另一个角度看一个模型，然后渲染到锥形视区
  this.tPosX = rule3(xTarget, -200, 200, -250, 250);//根据视野大小，鼠标位置，换算出风扇所应在的位置
  this.tPosY = rule3(yTarget, -200, 200, 250, -250);//猜测后边四个值为视区虚拟逻辑大小

  this.threegroup.position.x += (this.tPosX - this.threegroup.position.x) /10;//风扇的移动速度是鼠标移动速度的1/10 //移动会柔和很多
  this.threegroup.position.y += (this.tPosY - this.threegroup.position.y) /10;
  
  this.targetSpeed = (this.isBlowing) ? .3 : .01;//哈哈该变量全局未使用
  if (this.isBlowing && this.speed < .5){
    this.acc +=.001;
    this.speed += this.acc;//启动时加速匀速
  }else if (!this.isBlowing){
    this.acc = 0;
    this.speed *= .98;//终止时减速匀速
  }
  this.propeller.rotation.z += this.speed; //转速
}

Lion = function(){//狮子模型
  this.windTime = 0;
  this.bodyInitPositions = [];
  this.maneParts = [];
  this.threegroup = new THREE.Group();
  this.yellowMat = new THREE.MeshLambertMaterial ({
    color: 0xfdd276, 
    shading:THREE.FlatShading
  });
  this.redMat = new THREE.MeshLambertMaterial ({
    color: 0xad3525, 
    shading:THREE.FlatShading
  });
  
  this.pinkMat = new THREE.MeshLambertMaterial ({
    color: 0xe55d2b, 
    shading:THREE.FlatShading
  });
  
  this.whiteMat = new THREE.MeshLambertMaterial ({
    color: 0xffffff, 
    shading:THREE.FlatShading
  });
  
  this.purpleMat = new THREE.MeshLambertMaterial ({
    color: 0x451954, 
    shading:THREE.FlatShading
  });
  
  this.greyMat = new THREE.MeshLambertMaterial ({
    color: 0x653f4c, 
    shading:THREE.FlatShading
  });
  
  this.blackMat = new THREE.MeshLambertMaterial ({
    color: 0x302925, 
    shading:THREE.FlatShading
  });
  
  
  var bodyGeom = new THREE.CylinderGeometry(30,80, 140, 4);
  var maneGeom = new THREE.BoxGeometry(40,40,15);
  var faceGeom = new THREE.BoxGeometry(80,80,80);
  var spotGeom = new THREE.BoxGeometry(4,4,4);
  var mustacheGeom = new THREE.BoxGeometry(30,2,1);
  mustacheGeom.applyMatrix( new THREE.Matrix4().makeTranslation( 15, 0, 0 ) );
  
  var earGeom = new THREE.BoxGeometry(20,20,20);
  var noseGeom = new THREE.BoxGeometry(40,40,20);
  var eyeGeom = new THREE.BoxGeometry(5,30,30);
  var irisGeom = new THREE.BoxGeometry(4,10,10);
  var mouthGeom = new THREE.BoxGeometry(20,20,10);
  var smileGeom = new THREE.TorusGeometry( 12, 4, 2, 10, Math.PI );
  var lipsGeom = new THREE.BoxGeometry(40,15,20);
  var kneeGeom = new THREE.BoxGeometry(25, 80, 80);
  kneeGeom.applyMatrix( new THREE.Matrix4().makeTranslation( 0, 50, 0 ) );
  var footGeom = new THREE.BoxGeometry(40, 20, 20);
  
  // body
  this.body = new THREE.Mesh(bodyGeom, this.yellowMat);
  this.body.position.z = -60;
  this.body.position.y = -30;
  this.bodyVertices = [0,1,2,3,4,10];
  
  for (var i=0;i<this.bodyVertices.length; i++){
    var tv = this.body.geometry.vertices[this.bodyVertices[i]];
    tv.z =70;
    //tv.x = 0;
    this.bodyInitPositions.push({x:tv.x, y:tv.y, z:tv.z});
  }
  
  // knee
  this.leftKnee = new THREE.Mesh(kneeGeom, this.yellowMat);
  this.leftKnee.position.x = 65;
  this.leftKnee.position.z = -20;
  this.leftKnee.position.y = -110;
  this.leftKnee.rotation.z = -.3;
  
  this.rightKnee = new THREE.Mesh(kneeGeom, this.yellowMat);
  this.rightKnee.position.x = -65;
  this.rightKnee.position.z = -20;
  this.rightKnee.position.y = -110;
  this.rightKnee.rotation.z = .3;
  
  // feet
  this.backLeftFoot = new THREE.Mesh(footGeom, this.yellowMat);
  this.backLeftFoot.position.z = 30;
  this.backLeftFoot.position.x = 75;
  this.backLeftFoot.position.y = -90;
  
  this.backRightFoot = new THREE.Mesh(footGeom, this.yellowMat);
  this.backRightFoot.position.z = 30;
  this.backRightFoot.position.x = -75;
  this.backRightFoot.position.y = -90;
  
  this.frontRightFoot = new THREE.Mesh(footGeom, this.yellowMat);
  this.frontRightFoot.position.z = 40;
  this.frontRightFoot.position.x = -22;
  this.frontRightFoot.position.y = -90;
  
  this.frontLeftFoot = new THREE.Mesh(footGeom, this.yellowMat);
  this.frontLeftFoot.position.z = 40;
  this.frontLeftFoot.position.x = 22;
  this.frontLeftFoot.position.y = -90;
  
  // mane
  
  this.mane = new THREE.Group();
  
  for (var j=0; j<4; j++){
    for (var k=0; k<4; k++){
      var manePart = new THREE.Mesh(maneGeom, this.redMat);
      manePart.position.x = (j*40)-60;
      manePart.position.y = (k*40)-60;
      
      var amp;
      var zOffset;
      var periodOffset = Math.random()*Math.PI*2;     
      var angleOffsetY, angleOffsetX;
      var angleAmpY, angleAmpX;
      var xInit, yInit;
      
      
      if ((j==0 && k==0) || (j==0 && k==3) || (j==3 && k==0) || (j==3 && k==3)){
        amp = -10-Math.floor(Math.random()*5);
        zOffset = -5;
      }else if (j==0 || k ==0 || j==3 || k==3){
        amp = -5-Math.floor(Math.random()*5);
        zOffset = 0;
      }else{
        amp = 0;
        zOffset = 0;
      }
      
      this.maneParts.push({mesh:manePart, amp:amp, zOffset:zOffset, periodOffset:periodOffset, xInit:manePart.position.x, yInit:manePart.position.y});
      this.mane.add(manePart);
    }
  }
  
  this.mane.position.y = -10;
  this.mane.position.z = 80;
  //this.mane.rotation.z = Math.PI/4;
  
  // face
  this.face = new THREE.Mesh(faceGeom, this.yellowMat);
  this.face.position.z = 135;
  
  // Mustaches
  
  this.mustaches = [];
  
  this.mustache1 = new THREE.Mesh(mustacheGeom, this.greyMat);
  this.mustache1.position.x = 30;
  this.mustache1.position.y = -5;
  this.mustache1.position.z = 175; 
  this.mustache2 = this.mustache1.clone();
  this.mustache2.position.x = 35;
  this.mustache2.position.y = -12;
  this.mustache3 = this.mustache1.clone();
  this.mustache3.position.y = -19;
  this.mustache3.position.x = 30;  
  this.mustache4 = this.mustache1.clone();
  this.mustache4.rotation.z = Math.PI;
  this.mustache4.position.x = -30;
  this.mustache5 = new THREE.Mesh(mustacheGeom, this.blackMat);
  this.mustache5 = this.mustache2.clone();
  this.mustache5.rotation.z = Math.PI;
  this.mustache5.position.x = -35;
  this.mustache6 = new THREE.Mesh(mustacheGeom, this.blackMat);
  this.mustache6 = this.mustache3.clone();
  this.mustache6.rotation.z = Math.PI;
  this.mustache6.position.x = -30;
  
  this.mustaches.push(this.mustache1);
  this.mustaches.push(this.mustache2);
  this.mustaches.push(this.mustache3);
  this.mustaches.push(this.mustache4);
  this.mustaches.push(this.mustache5);
  this.mustaches.push(this.mustache6);
    
  // spots
  this.spot1 = new THREE.Mesh(spotGeom, this.redMat);
  this.spot1.position.x = 39;
  this.spot1.position.z = 150;
  
  this.spot2 = this.spot1.clone();
  this.spot2.position.z = 160;
  this.spot2.position.y = -10;
  
  this.spot3 = this.spot1.clone();
  this.spot3.position.z = 140;
  this.spot3.position.y = -15;
  
  this.spot4 = this.spot1.clone();
  this.spot4.position.z = 150;
  this.spot4.position.y = -20;
  
  this.spot5 = this.spot1.clone();
  this.spot5.position.x = -39;
  this.spot6 = this.spot2.clone();
  this.spot6.position.x = -39;
  this.spot7 = this.spot3.clone();
  this.spot7.position.x = -39;
  this.spot8 = this.spot4.clone();
  this.spot8.position.x = -39;
    
  // eyes
  this.leftEye = new THREE.Mesh(eyeGeom, this.whiteMat);
  this.leftEye.position.x = 40;
  this.leftEye.position.z = 120;
  this.leftEye.position.y = 25;
  
  this.rightEye = new THREE.Mesh(eyeGeom, this.whiteMat);
  this.rightEye.position.x = -40;
  this.rightEye.position.z = 120;
  this.rightEye.position.y = 25;
  
  // iris
  this.leftIris = new THREE.Mesh(irisGeom, this.purpleMat);
  this.leftIris.position.x = 42;
  this.leftIris.position.z = 120;
  this.leftIris.position.y = 25;
  
  this.rightIris = new THREE.Mesh(irisGeom, this.purpleMat);
  this.rightIris.position.x = -42;
  this.rightIris.position.z = 120;
  this.rightIris.position.y = 25;
  
  // mouth
  this.mouth = new THREE.Mesh(mouthGeom, this.blackMat);
  this.mouth.position.z = 171;
  this.mouth.position.y = -30;
  this.mouth.scale.set(.5,.5,1);
  
  // smile
  this.smile = new THREE.Mesh(smileGeom, this.greyMat);
  this.smile.position.z = 173;  
  this.smile.position.y = -15;
  this.smile.rotation.z = -Math.PI;
  
  // lips
  this.lips = new THREE.Mesh(lipsGeom, this.yellowMat);
  this.lips.position.z = 165;
  this.lips.position.y = -45;
  
   
  // ear
  this.rightEar = new THREE.Mesh(earGeom, this.yellowMat);
  this.rightEar.position.x = -50;
  this.rightEar.position.y = 50;
  this.rightEar.position.z = 105;
  
  this.leftEar = new THREE.Mesh(earGeom, this.yellowMat);
  this.leftEar.position.x = 50;
  this.leftEar.position.y = 50;
  this.leftEar.position.z = 105;
  
  // nose
  this.nose = new THREE.Mesh(noseGeom, this.greyMat);
  this.nose.position.z = 170;
  this.nose.position.y = 25;
  
  // head
  this.head = new THREE.Group();
  this.head.add(this.face);
  this.head.add(this.mane);
  this.head.add(this.rightEar);
  this.head.add(this.leftEar);
  this.head.add(this.nose);
  this.head.add(this.leftEye);
  this.head.add(this.rightEye);
  this.head.add(this.leftIris);
  this.head.add(this.rightIris);
  this.head.add(this.mouth);
  this.head.add(this.smile);
  this.head.add(this.lips);
  this.head.add(this.spot1);
  this.head.add(this.spot2);
  this.head.add(this.spot3);
  this.head.add(this.spot4);
  this.head.add(this.spot5);
  this.head.add(this.spot6);
  this.head.add(this.spot7);
  this.head.add(this.spot8);
  this.head.add(this.mustache1);
  this.head.add(this.mustache2);
  this.head.add(this.mustache3);
  this.head.add(this.mustache4);
  this.head.add(this.mustache5);
  this.head.add(this.mustache6);
  
  
  this.head.position.y = 60;
  
  this.threegroup.add(this.body);
  this.threegroup.add(this.head);
  this.threegroup.add(this.leftKnee);
  this.threegroup.add(this.rightKnee);
  this.threegroup.add(this.backLeftFoot);
  this.threegroup.add(this.backRightFoot);
  this.threegroup.add(this.frontRightFoot);
  this.threegroup.add(this.frontLeftFoot);
    
  this.threegroup.traverse( function ( object ) {
		if ( object instanceof THREE.Mesh ) {
			object.castShadow = true;
			object.receiveShadow = true;
		}
	} );
}

Lion.prototype.updateBody = function(speed){
  
  this.head.rotation.y += (this.tHeagRotY - this.head.rotation.y) / speed;
  this.head.rotation.x += (this.tHeadRotX - this.head.rotation.x) / speed;
  this.head.position.x += (this.tHeadPosX-this.head.position.x) / speed; 
  this.head.position.y += (this.tHeadPosY-this.head.position.y) / speed; 
  this.head.position.z += (this.tHeadPosZ-this.head.position.z) / speed; 
  
  this.leftEye.scale.y += (this.tEyeScale - this.leftEye.scale.y) / (speed*2);
  this.rightEye.scale.y = this.leftEye.scale.y;
  
  this.leftIris.scale.y += (this.tIrisYScale - this.leftIris.scale.y) / (speed*2);
  this.rightIris.scale.y = this.leftIris.scale.y;
  
  this.leftIris.scale.z += (this.tIrisZScale - this.leftIris.scale.z) / (speed*2);
  this.rightIris.scale.z = this.leftIris.scale.z;
  
  this.leftIris.position.y += (this.tIrisPosY - this.leftIris.position.y) / speed;
  this.rightIris.position.y = this.leftIris.position.y;
  this.leftIris.position.z += (this.tLeftIrisPosZ - this.leftIris.position.z) / speed;
  this.rightIris.position.z += (this.tRightIrisPosZ - this.rightIris.position.z) / speed;
  
  this.rightKnee.rotation.z += (this.tRightKneeRotZ - this.rightKnee.rotation.z) / speed;
  this.leftKnee.rotation.z += (this.tLeftKneeRotZ - this.leftKnee.rotation.z) / speed;
  
  this.lips.position.x += (this.tLipsPosX - this.lips.position.x) / speed;
  this.lips.position.y += (this.tLipsPosY - this.lips.position.y) / speed;
  this.smile.position.x += (this.tSmilePosX - this.smile.position.x) / speed;
  this.mouth.position.z += (this.tMouthPosZ - this.mouth.position.z) / speed;
  this.smile.position.z += (this.tSmilePosZ - this.smile.position.z) / speed;
  this.smile.position.y += (this.tSmilePosY - this.smile.position.y) / speed;
  this.smile.rotation.z += (this.tSmileRotZ - this.smile.rotation.z) / speed;
}

Lion.prototype.look = function(xTarget, yTarget){
  this.tHeagRotY = rule3(xTarget, -200, 200, -Math.PI/4, Math.PI/4);
  this.tHeadRotX = rule3(yTarget, -200,200, -Math.PI/4, Math.PI/4);
  this.tHeadPosX = rule3(xTarget, -200, 200, 70,-70);
  this.tHeadPosY = rule3(yTarget, -140, 260, 20, 100);
  this.tHeadPosZ = 0;
  
    
  this.tEyeScale = 1;
  this.tIrisYScale = 1;
  this.tIrisZScale = 1;
  this.tIrisPosY = rule3(yTarget, -200,200, 35,15);
  this.tLeftIrisPosZ = rule3(xTarget, -200, 200, 130, 110);
  this.tRightIrisPosZ = rule3(xTarget, -200, 200, 110, 130);
  
  this.tLipsPosX = 0;
  this.tLipsPosY = -45;
  
  this.tSmilePosX = 0;
  this.tMouthPosZ = 174;
  this.tSmilePosZ = 173;
  this.tSmilePosY = -15;
  this.tSmileRotZ = -Math.PI;
  
  this.tRightKneeRotZ = rule3(xTarget, -200, 200, .3-Math.PI/8, .3+Math.PI/8);
  this.tLeftKneeRotZ = rule3(xTarget, -200, 200, -.3-Math.PI/8, -.3+Math.PI/8)
  
  
  this.updateBody(10);
  
  this.mane.rotation.y = 0;
  this.mane.rotation.x = 0;
 
  for (var i=0; i<this.maneParts.length; i++){
    var m = this.maneParts[i].mesh;
    m.position.z = 0;
    m.rotation.y = 0;
  }
  
  for (var i=0; i<this.mustaches.length; i++){
    var m = this.mustaches[i];
    m.rotation.y = 0;
  }
  
  
  for (var i=0; i<this.bodyVertices.length; i++){
     var tvInit = this.bodyInitPositions[i];
      var tv = this.body.geometry.vertices[this.bodyVertices[i]];
      tv.x = tvInit.x + this.head.position.x;
  }
  this.body.geometry.verticesNeedUpdate = true;
}

Lion.prototype.cool = function(xTarget, yTarget){
  this.tHeagRotY = rule3(xTarget, -200, 200, Math.PI/4, -Math.PI/4);
  this.tHeadRotX = rule3(yTarget, -200,200, Math.PI/4, -Math.PI/4);
  this.tHeadPosX = rule3(xTarget, -200, 200, -70,70);
  this.tHeadPosY = rule3(yTarget, -140, 260, 100, 20);
  this.tHeadPosZ = 100;
  
  this.tEyeScale = 0.1;
  this.tIrisYScale = 0.1;
  this.tIrisZScale = 3;
  
  this.tIrisPosY = 20;
  this.tLeftIrisPosZ = 120;
  this.tRightIrisPosZ = 120;
  
  this.tLipsPosX = rule3(xTarget, -200, 200, -15,15);
  this.tLipsPosY = rule3(yTarget, -200, 200, -45,-40);
  
  this.tMouthPosZ = 168;
  this.tSmilePosX = rule3(xTarget, -200, 200, -15,15); 
  this.tSmilePosY = rule3(yTarget, -200, 200, -20,-8); 
  this.tSmilePosZ = 176;
  this.tSmileRotZ = rule3(xTarget, -200, 200, -Math.PI-.3, -Math.PI+.3);
  
  this.tRightKneeRotZ = rule3(xTarget, -200, 200, .3+Math.PI/8, .3-Math.PI/8);
  this.tLeftKneeRotZ = rule3(xTarget, -200, 200, -.3+Math.PI/8, -.3-Math.PI/8);
   
  this.updateBody(10);
  
  this.mane.rotation.y = -.8*this.head.rotation.y;
  this.mane.rotation.x = -.8*this.head.rotation.x;
  
  var dt = 20000 / (xTarget*xTarget+yTarget*yTarget);
  dt = Math.max(Math.min(dt,1), .5);
  this.windTime += dt;
  
  for (var i=0; i<this.maneParts.length; i++){
    var m = this.maneParts[i].mesh;
    var amp = this.maneParts[i].amp;
    var zOffset = this.maneParts[i].zOffset;
    var periodOffset = this.maneParts[i].periodOffset;
        
    m.position.z = zOffset + Math.cos(this.windTime+periodOffset)*amp*dt*2;   
  }
  
  this.leftEar.rotation.x = Math.cos(this.windTime)*Math.PI/16*dt; 
  this.rightEar.rotation.x = -Math.cos(this.windTime)*Math.PI/16*dt; 
  
   
  for (var i=0; i<this.mustaches.length; i++){
    var m = this.mustaches[i];
    var amp = (i<3) ? -Math.PI/8 : Math.PI/8;
    m.rotation.y = amp + Math.cos(this.windTime + i)*dt*amp;   
  };
  
  for (var i=0; i<this.bodyVertices.length; i++){
     var tvInit = this.bodyInitPositions[i];
      var tv = this.body.geometry.vertices[this.bodyVertices[i]];
      tv.x = tvInit.x + this.head.position.x;
  }
  this.body.geometry.verticesNeedUpdate = true;
}

function loop(){
  render();
  var xTarget = (mousePos.x-windowHalfX);
  var yTarget= (mousePos.y-windowHalfY);
  
  fan.isBlowing = isBlowing;
  //把鼠标位置弄成渲染位置，核心思想是：鼠标距离屏幕中心点的距离所占屏幕百分比应与风扇距离中轴比例相同
  //穿入值为鼠标距离屏幕中心点的xy差值
  fan.update(xTarget, yTarget);
  if(isBlowing) {
    lion.cool(xTarget, yTarget);
  }else{
    lion.look(xTarget, yTarget);
  }
  requestAnimationFrame(loop);
}

function render(){
  if (controls) controls.update();
  renderer.render(scene, camera);
}


init();
createLights();
createFloor();
createLion();
createFan();
loop();


function clamp(v,min, max){
  return Math.min(Math.max(v, min), max);
}

//全局工具函数，把位置正确转换到视区对应位置，如鼠标坐标转风扇渲染位置
function rule3(v,vmin,vmax,tmin, tmax){
  var nv = Math.max(Math.min(v,vmax), vmin);
  var dv = vmax-vmin;
  var pc = (nv-vmin)/dv;
  var dt = tmax-tmin;
  var tv = tmin + (pc*dt);
  return tv;
  
}
