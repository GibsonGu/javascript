/***
 * ����ԭ����Ƭ��ʾ��Jquery���
 * ��дʱ�䣺2012��8��24��
 * version:manhuaCardTip.js
***/
$(function() {
	$.fn.manhuaCardTip = function(options) {
		var defaults = {	
			Event : "mouseover", 						//������Ӧ�¼�
			position : "tl",							//��ͷָ����(t)����ͷָ����(b)����ͷָ����(l)����ͷָ����(r)
			photo : "images/20120709100116.jpg",	//ͷ��·��
			name : "����֮��",						//����
			sex : "��",								//�Ա�
			love : "Ů",							//����
			detail : "��֪������������Ρ���"		//����
			
		};		
		var options = $.extend(defaults,options);	
		var bid = parseInt(Math.random()*100000);		
		$("body").prepend("<div id='userInfoDialog"+bid+"' class='userInfoDialog'><span></span><div class='out'><div class='in'><a href='http://www.jq-school.com/' title='�鿴����'><img src='"+options.photo+"' alt='' /></a><div>���ƣ�"+options.name+"<br />�Ա�"+options.sex+"<br />���ã�"+options.love+"<br />���ܣ�"+options.detail+"<br /><a href='http://www.jq-school.com/' class='btn btn-success btn-small' title='�ӹ�ע'>+�ӹ�ע</a>&nbsp;&nbsp;<a href='http://www.jq-school.com/' class='btn btn-success btn-small' title='�Ӻ���'>+�Ӻ���</a></div></div></div></div>");
		var $this = $(this);
		var $btip = $("#userInfoDialog"+bid);			
		$this.die().live(options.Event, function(){			
			var h = $(this).height();
			var offset = $(this).offset();			
			$btip.find("span").addClass("tl"); 
			$btip.css({
				"left":offset.left,
				"top":offset.top+h
			}).show();	
		});		
		$btip.die().live(options.Event, function(){
			$(this).show();									 
		}).live("mouseout", function(){				
			$(this).hide();																
		});
		
	}
});