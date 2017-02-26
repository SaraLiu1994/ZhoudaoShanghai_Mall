$(document).ready(function(){
			var box= document.querySelector('.carousel');
			var nav=document.querySelector('.nav-content');
		  if(box!=null){	
			  	if(box.id=="first-carousel"){
			  		var nav=document.querySelector('.nav-content');
			  		var sub=document.querySelector('.menu-sub');
			  		nav.style.backgroundColor="#74b72c";
			  		sub.style.display="block";
			  	}
			  	if(box.id!="first-carousel"){
			  	$('.nav-content').hover(function(){
			 	 	$('.menu-sub').css('display','block');
			 	 	$('.menu-sub').mouseover(function(){
						$('.menu-sub').css('display','block');
						$('.nav-content').addClass('nav-content-hover');
			 	 	});
			 	 	
			 	 	$('.menu-sub').mouseleave(function(){
			 	 		$('.menu-sub').css('display','none');
			 	 		$('.nav-content').removeClass('nav-content-hover');
			 	 	});
			  	},function() {
			  		$('.menu-sub').css('display','none');
			  	});
			  }
		  }
		  if(box==null){
		  	$('.nav-content').hover(function(){
		 	 	$('.menu-sub').css('display','block');
		 	 	$('.menu-sub').mouseover(function(){
					$('.menu-sub').css('display','block');
					$('.nav-content').addClass('nav-content-hover');
		 	 	});
		 	 	
		 	 	$('.menu-sub').mouseleave(function(){
		 	 		$('.menu-sub').css('display','none');
		 	 		$('.nav-content').removeClass('nav-content-hover');
		 	 	});
		  	},function() {
		  		$('.menu-sub').css('display','none');
		  	});
		  }
		 });