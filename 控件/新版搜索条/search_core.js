// JavaScript Document
$(function(){
//menuѡȡ�¼�
$("#menu a").bind("click",function(){
var m=this.id;
switch(m)
{
//��ҳ
case "m0":
		  $("#sps").html('<input type="radio"  name="sp" value="sp1"  checked="checked" />�ٶ�&nbsp;<input type="radio" name="sp" value="sp2" />Google&nbsp;<input type="radio" name="sp" value="sp3" />�ѹ�');
		  $("#kk").val("0");
		  break;
//mp3		  
case "m1":
		  $("#sps").html('<input type="radio"  name="sp"  value="sp1" checked="checked" />�ٶ�&nbsp;<input type="radio" name="sp" value="sp3" />�ѹ�&nbsp;<input type="radio" name="sp" value="sp4" />Ѹ��');	
		  $("#kk").val("1");
		  break;	  
//Ӱ��		  
case "m2":
          $("#sps").html('<input type="radio"  name="sp"  value="sp4" checked="checked" />Ѹ��&nbsp;<input type="radio" name="sp" value="sp5" />�ſ�');		  
		  $("#kk").val("2");
		  break;
//��Ƶ
case "m3":
		  $("#sps").html('<input type="radio" name="sp" value="sp4" checked="checked" />Ѹ��&nbsp;<input type="radio" value="sp1"  name="sp"   />�ٶ�&nbsp;<input type="radio" name="sp" value="sp2" />Google');	
		  $("#kk").val("3");	  
		  break;
//ͼƬ
case "m4":
		  $("#sps").html('<input type="radio"  name="sp" value="sp1"  checked="checked" />�ٶ�&nbsp;<input type="radio" name="sp" value="sp2" />Google');		  
		  $("#kk").val("4");
		  break;
//����
case "m5":
		  $("#sps").html('<input type="radio"  name="sp"  value="sp1" checked="checked" />�ٶ�����&nbsp;<input type="radio" name="sp" value="sp6" />����');		  
		  $("#kk").val("5");
		  break;
//ͼƬ
case "m6":
		  $("#sps").html('<a href="http://s.click.taobao.com/t_9?p=mm_13437741_0_0&l=http%3A%2F%2Fwww.tmall.com" target="_blank">�Ա��̳�</a>&nbsp;<a href="http://s.click.taobao.com/t_8?e=7HZ5x%2BOzds8BIPN6CFQUD%2BOD8Q%3D%3D&p=mm_13437741_0_0" target="_blank">��ƷŮװ</a>&nbsp;<a href="http://s.click.taobao.com/t_8?e=7HZ5x%2BOzd%2BdFiCvRmrqqUZcrow%3D%3D&p=mm_13437741_0_0" target="_blank">��������</a>&nbsp;<a href="http://s.click.taobao.com/t_8?e=7HZ5x%2BOzdZRP%2B9K5fPy%2BhAm9Pw%3D%3D&p=mm_13437741_0_0" target="_blank">������Ʒ</a>&nbsp;<a href="http://s.click.taobao.com/t_8?e=7HZ5x%2BOzcg5RLdszGvafCyFhcg%3D%3D&p=mm_13437741_0_0" target="_blank">��������</a>');		  
		  $("#kk").val("6");
		  break;		 		  		  
	
		  
default:$("#sps").html('<input type="radio"  name="sp" value="sp1"  checked="checked" />�ٶ�&nbsp;<input type="radio" name="sp" value="sp2" />Google&nbsp;<input type="radio" name="sp" value="sp3" />�ѹ�');
		 $("#kk").val("0");
		 break;
		    
}

});


$("#menu a").bind("click",function(){
$("#menu a").each(function(i){
$(this).removeClass("cur");
});
$(this).addClass("cur");
});


//��ť�ύ�¼�
$("#submit").bind("submit",function(){
//�ж���������
var sp;
//sp=$("input[type='radio']:checked").val();
sp=$("input[name='sp'][type='radio']:checked").val();
//var sp1=$("input[type='radio'][name='sp']");
//$.each(sp1,function(i,n){if(n.checked){sp=n.value;}});
var kk=$("#kk").val(); //��ȡ��ǣ��жϵ�ǰ����ʲô����
switch(sp)
{
//�ٶ�����
case "sp1":{
			switch(kk)
			{
				case "0":
						 $("#search").attr("action","http://www.baidu.com/s"); //��ҳ
						 $("#key").attr("name","wd");
						 break;
				case "1":
						 $("#search").attr("action","http://mp3.baidu.com/m"); //mp3
						 $("#key").attr("name","word");
						 break;	
				case "3":
						 $("#search").attr("action","http://video.baidu.com/v"); //��Ƶ
						 $("#key").attr("name","word");
						 break;
				case "4":
						 $("#search").attr("action","http://image.baidu.com/i"); //ͼƬ
						 $("#sps").append('<input type="hidden" name="ct" value=201326592" />'); //��Ƶ�������
						 $("#key").attr("name","word");
						 break;
				case "5":
						 $("#search").attr("action","http://tieba.baidu.com/f"); //����
						 $("#key").attr("name","kw");
						 break;	
				default:
						 $("#search").attr("action","http://www.baidu.com/s"); //��ҳ
						 $("#key").attr("name","wd");
						 break;		 	 		 		 	 
			}
			break;
			}	
//Google����			
case "sp2":{
			switch(kk)
			{
				case "0":
						 $("#search").attr("action","http://www.google.com.hk/search"); //��ҳ
						 $("#key").attr("name","q");
						 break;	
				//Google����mp3��������⣬��ʱȡ��		 
				case "1":
						 $("#search").attr("action","http://www.google.cn/music/search"); //MP3
						 $("#key").attr("name","q");
						 $("#key").val(encodeURI($("#key").val())); //encodeURI����
						 break;		
				case "3":
						 $("#search").attr("action","http://www.google.com.hk/search"); //��Ƶ
						 $("#sps").append('<input type="hidden" name="tbs" value="vid:1" />'); //��Ƶ�������
						 $("#key").attr("name","q");
						 break;
				case "4":
						 $("#search").attr("action","http://images.google.com.hk/images"); //ͼƬ
						 $("#key").attr("name","q");
						 break; 
				default:
						 $("#search").attr("action","http://www.google.com.hk/search"); //��ҳ
						 $("#key").attr("name","q");
						 break;
			}
			break;
			}
//�ѹ�����			
case "sp3":{
			switch(kk)
			{
				case "0":
						 $("#search").attr("action","http://www.sogou.com/web"); //��ҳ
						 $("#key").attr("name","query");		
						 break;	
				case "1":
						 $("#search").attr("action","http://mp3.sogou.com/music.so"); //mp3
						 $("#key").attr("name","query");		
						 break;	
				default:
						 $("#search").attr("action","http://www.sogou.com/web"); //��ҳ
						 $("#key").attr("name","query");		
						 break;	
			}
			 break;
			}

//Ѹ������			
case "sp4":{
			switch(kk)
			{
				case "1":
						 $("#search").attr("action","http://mp3.gougou.com/search"); //mp3
						 $("#key").attr("name","search");		
						 break;	
				case "2":
						 $("#search").attr("action","http://movie.gougou.com/search"); //Ӱ��
						 $("#key").attr("name","search");		
						 break;	
				case "3":
						 $("#search").attr("action","http://video.gougou.com/search"); //��Ƶ
						 $("#key").attr("name","s");
						 break;		 
				default:
						 $("#search").attr("action","http://mp3.gougou.com/search"); //mp3
						 $("#key").attr("name","search");		
						 break;	
			}
			break;
			}
//�ſ�����			
case "sp5":$("#search").attr("action","http://www.soku.com/search_video/q_"+$("#key").val()); 
			$("#key").attr("name","q");		
			break;	
//��������			
case "sp6":$("#search").attr("action","http://laiba.tianya.cn/searchGroup.jsp");
			$("#key").attr("name","nameOrStockCode");		
			break;			
//�Ա�����												
default:$("#search").attr("action","http://s8.taobao.com/search");	 //�Ա�����
		 $("#sps").append('<input type="hidden" name="pid" value="mm_13437741_0_0" /><input type="hidden" name="commend" value="all" />');
		 $("#key").attr("name","q");						
		 break;
}

});

});



