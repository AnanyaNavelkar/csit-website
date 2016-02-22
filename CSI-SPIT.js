$('document').ready(function(){

	$(".img").rotate({bind:{
		click: function(){
			$("#img1").rotate({
	duration:2500,			angle: 0,
				animateTo:135,
callback:function(){
window.location.href="file:///C:/Users/Ananya/Project/home.html";
}			})
		}
	}});

});