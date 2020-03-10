      let dom = `
      <input type="file" id="file" class="hidden"/>
      <img id="showTheCut"/>
      <div id="clickFile"></div>
        <div id="tip"> </div>
        <textarea id="word" rows="3" cols="30"/>
       
      <div id="submit"></div>

      <div class="container hidden">
        <div class="page crop-box" style="display: block;"></div>
        <div class="page page-choose" style="display: none;">
          
          <div class="pic-area" style="touch-action: none; user-select: none; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></div>

          </div>
        <div class="page page-result" style="display: block;"></div>
      </div>
      
      <div id="uploadingtip" class="hidden">风控审核中请等待。。。后改为进度条</div>
      
      <div class="pg2 hidden">
        <img class="shareimg" src=""/>
        <input type="checkbox" id="qrcodorlogobt" class="hidden" name="qrcodorlogobt" checked>
        <label for="qrcodorlogobt" id="labqrcodorlogobt" class="hidden">是否添加二维码</label>
        <img class="sharebtn"/>
      </div>
`;

      $('#root').html(dom);

      $('#root').css({
        "background-image":"url(https://piccdn.luojilab.com/fe-oss/default/MTU2ODk4NDM5ODk1.jpeg)",
        "width":"100%",
        "height":"100%",
        "position": "absolute",

        "background-size": "cover",
        "top":"0"
      });

      $('#clickFile').click(function() {
        $('#file').click();
      });
      var word = $('#word');
      word.css({'background-image':'url(https://piccdn.luojilab.com/fe-oss/default/MTU2ODk4NDY0NDMy.jpeg)'});
      var placeholder = '我是得到， \n我每天在拥挤地铁上 \n听「每天听本书」好多豪赌。';
      word.attr('value', placeholder);
      word.val(placeholder);


      word.focus(function(){
          if($(this).val() === placeholder){
              $(this).val('');
              word.css({'background-image':''});
          }
      });

      word.blur(function(){
          if($(this).val() ===''){
              $(this).val(placeholder);
              word.css({'background-image':'url(https://piccdn.luojilab.com/fe-oss/default/MTU2ODk4NDY0NDMy.jpeg)'});
          }    
      });

      //上传文件
      document.getElementById('file').addEventListener('change', function (e) {
          let file = e.target.files[0];
          let storeAs = 'upload-file';
          // console.log(file.name + ' => ' + storeAs);
          // OSS.urlib是sdk内部封装的发送请求的逻辑，开发者可以使用任何发送请求的库向`sts-server`发送请求
          $.post("http://zt.iget.dev.didatrip.com/wxact/api/oss-sign", (response) => {
              // if (err) {
              // // return alert(err);
              // }
              // try {

              sign = response;
              // } catch (e) {
              // return alert('parse sts response info error: ' + e.message);
              // }
              console.log(sign);
              let formData = new FormData()


              formData.append("OSSAccessKeyId", sign.accessId)
              formData.append("policy", sign.policy)
              formData.append("Signature", sign.signature)
              formData.append("key", getKey())
              formData.append("success_action_status", 201)
              formData.append("file", file);

              $('#uploadingtip').show();

              $.ajax({
                  type: 'POST',
                  url: sign.host,
                  data: formData,
                  success: function (res) {
                        //防误触
                        $('#submit').hide();
                          console.log(res);
                          // 取得地址
                          let href = xmlToJson(res).PostResponse.Location['#text'];
                          window.pageImageHref = href;
                          console.log('上传的图片地址是：'+href);

                          //唤醒裁剪
                          new AlloyCrop({
                              image_src: window.pageImageHref,
                              className: 'crop-box',
                              circle: false, // 是否裁剪圆形
                              width:199, // crop width 裁剪框宽度
                              height: 357, // crop height 裁剪框高度
                              output: 2, // output resolution --> 400*200
                              ok: function (base64, canvas) { 
                                $('#cutImgObj').attr('src',base64);
                                $('#showTheCut').attr('src',base64);

                                $('.crop-box').remove();

                                $('#submit').show();
                              },
                              cancel: function(){
                                  console.log("你点击了取消");
                                  window.location.href = window.location.href
                                  $('#submit').show();
                                },
                              ok_text: "裁剪", // optional parameters , the default value is ok
                              cancel_text: "取消" // optional parameters , the default value is cancel
                          });

                          $('#uploadingtip').hide();

                          //展示出来
                          if($('#cutImgObj').length){
                            $('#cutImgObj')
                          }else{
                            let dom = `<img id="cutImgObj" src="` + href + `"/> `;
                            $('#root').append(dom);
                          }
                         
                      },
                      processData: false,
                  contentType: false
              })
              // $.post(, {data:}).then(res => {console.log(res)
              // })

          });
      });

      function pushPic(showqrcode = true){
        let word = $('#word').val();
        let sentens =word.split(/\n/);
        //生成海报
        let sentenst = 985;
        let sentensl = 140;
        let sentensmt = 47;
        let ftonsize =34;
        let ftcolor = '#ff6b00';
        imagen({
          canvas: {
            width: 750,
            height: 1333,
            background: '#FF7E37',
            // linearGradient:[{
            //   color: '#FF596D',
            //   step: 0,
            // },{
            //   color: '#FC8718',
            //   step: 1,
            // }]
          },
          layers: [
          //外框和装饰物
          {
            type: 'image',
            image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2ODg4NTUxNjcw.jpeg',
            left: 0,
            top: 0,
            width: 750,
            height: 1333
          }, 
          {
            type: 'image',
            image: $('#cutImgObj').attr('src'),
            left: 78,
            top: 70,
            width: 596,
            height: 1070
          }, 
          {
            type: 'image',
            image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2ODk2MTg1NDk4.png',
            left: 112,
            top: 858,
            width: 624,
            height: 285
          }, 
          //第一行
          {
            type: 'text',
            text: sentens[0],
            left: sentensl,
            top: sentenst,
            width: 530,
            fontSize: ftonsize,
            height: 60,
            lineHeight: 54,
            color: ftcolor,
            textAlign: 'left'
          }, 
          {
            type: 'text',
            text: sentens[1],
            left: sentensl,
            top: sentenst+sentensmt,
            width: 530,
            fontSize: ftonsize,
            height: 60,
            lineHeight: 54,
            color: ftcolor,
            textAlign: 'left'
          }, 
          {
            type: 'text',
            text: sentens[2],
            left: sentensl,
            top: sentenst+sentensmt*2,
            width: 530,
            fontSize: ftonsize,
            height: 60,
            lineHeight: 54,
            color: ftcolor,
            textAlign: 'left'
          }, 
          //二维码或者logo
          showqrcode?
          {
            type: 'qrcode',
            text: "http://pic1cdn.luojilab.com/html/postertest/picppVpAX90wJijmrgOk9vn.html?nickname=''",
            left: 613,
            top: 992,
            width: 110,
            height: 110
          }:{
            type: 'image',
            image: 'https://piccdn.luojilab.com/fe-oss/default/MTU2OTEzMDIwMzAw.jpeg',
            left: 613,
            top: 992,
            width: 110,
            height: 150
          }, 
          ]
        }).then((base64) => {
          this.shareImg = base64;
          $('.shareimg').attr('src',this.shareImg);
          $('.pg2').show();
          $('.sharebtn').click(function(){
              // reload();
          });
        })
      }
      $('#submit').click(function(){
        pushPic($('#qrcodorlogobt')[0].checked)
      });

$(function(){
  //根据环境做差异化
  if(window.Asio){
    env = window.Asio.info().type; 
    if(env == "h5") {//微信环境
      $('.sharebtn').attr('src',"https://piccdn.luojilab.com/fe-oss/default/MTU2OTEzMDIwMzM3.png");
      $('#qrcodorlogobt').show();
      $('#labqrcodorlogobt').show();
    } else {//其他环境(native本地)
      $('.sharebtn').attr('src',"https://piccdn.luojilab.com/fe-oss/default/MTU2OTEzMTExNjEz.png");
      $('#qrcodorlogobt').show();
      $('#labqrcodorlogobt').show();
    }
  } else {//git本地开发环境
    $('.sharebtn').attr('src',"https://piccdn.luojilab.com/fe-oss/default/MTU2OTEzMDIwMzM3.png");
    $('#qrcodorlogobt').show();
    $('#labqrcodorlogobt').show();
  } 
});
$('#qrcodorlogobt').change(function(){
  pushPic($('#qrcodorlogobt')[0].checked);
})