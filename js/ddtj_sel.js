// JavaScript Document


//加入下拉选项
function join_option(data,id,val){
	var xjhtml="";
	for(var xjkey in data){
		if(val==1) xjhtml+='<a class="option trn dian3">'+data[xjkey]+'</a>';
		else xjhtml+='<a class="option trn dian3">'+xjkey+'</a>';
	}
	$(id).html(xjhtml);
}

//下拉事件
function selup(){
	$(".qkysel").each(function(i) {
        $(this).find(".selectON").on("click",function(){
			$(this).parent().find(".optionbox").slideToggle(200);
			$(this).parents(".qkysel").siblings().find(".optionbox").slideUp(100);
		});
	});
}
//县点击
function onebu(){
	$("#xj.optionbox .option").each(function(j) {
		$(this).click(function(){
			$(this).parent().slideUp(200);
			$(this).parents(".selshow").find(".selectON").html($(this).html());
			join_option(xzs_sj[$(this).html()],"#xz");
			twobu($(this).html());
		});
	});
	
}
//乡镇点击
function twobu(thisxj){
	$("#xz.optionbox .option").each(function(k) {
		$(this).on("click",function(){
			$(this).parent().slideUp(200);
			$(this).parents(".selshow").find(".selectON").html($(this).html());
			join_option(xzs_sj[thisxj][$(this).html()],"#sch",1);
			threebu();
		});
	});
}
//学校点击
function threebu(){
	$("#sch.optionbox .option").each(function(k) {
		$(this).on("click",function(){
			$(this).parent().slideUp(200);
			$(this).parents(".selshow").find(".selectON").html($(this).html());
		});
	});
}