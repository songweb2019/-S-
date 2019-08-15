$(function(){

   //下拉菜单
   //当鼠标进入div时
   $("div.dropdown").mouseover(function(){
     $(".dropdown-menu").css("height",165)
   }).mouseout(function(){//当鼠标移出div时
     $(".dropdown-menu").css("height",0)
   })

   //默认 active
   //1.查找触发事件的元素
   $("[data-toggle=tab]").click(function(){
            //给自己的爹+active
     $(this).parent().addClass("active")
      //给爹的所有兄弟去掉active
     .siblings().removeClass("active")
    })
    
    //点击tab显示内容
    $(".tab2").click(function(){
      $("#cont1").css("display","block")
      .siblings().css("display","none")
    })
    $(".tab3").click(function(){
      $("#cont2").css("display","block")
      .siblings().css("display","none")
    })  
    $(".tab4").click(function(){
      $("#cont3").css("display","block")
      .siblings().css("display","none")
    })

    //cont 星星
     $(".star").mouseover(function(){
      var startimes=9;//定义变量保存次数
      var $star=$(this);//获得当前星星
      //反复对同一颗星星调用多组fadeOut()和fadeIn()
      for(var i=0;i<startimes;i++){
        $star.fadeOut().fadeIn()
      }
      //最后，让星星消失
      $star.fadeOut()
        //所有简单动画函数，都自带display:none
    })
    
   //cont2 员工-手风琴
   $(".p-title").click(function(){
     var $title = $(this);
     var $down = $(".p-title-down img");
     $down.css("transform","rotateZ(90deg)")
     //如果自己的下一个兄弟.content是开着的，只要关上即可
     if($title.next().is(".p-in")){
       $title.next().removeClass("p-in");
     }else{//否则(隐含自己旁边的兄弟是关的)
       //先打开自己旁边的兄弟
       $title.next().addClass("p-in")
       //再关闭所有兄弟中的其它.content
       .siblings(".p-content").removeClass("p-in");
       $down.css("transform","rotateZ(0deg)")
     }
   })

  //mycenter
  //box3
  //点按钮，显示alert
  $("#jia").click(function(e){
    e.stopPropagation();
    $(".alert").addClass("in")
  })
  //点×关闭alert
  $(".close").click(function(){
    $(this).parent().removeClass("in")
  })
	//点其他地方，关闭alert
   $(window).click(function(){
    $(".alert").removeClass("in")
  })
  //box4
  $("#jubao").click(function(){
    setInterval(function(){
      $("#jubaocg").html("举报成功")
    },1000)
    setInterval(function(){
      $("#jubaocg").html("")
    },3000)
  })

})
