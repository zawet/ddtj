// JavaScript Document



function pieAll(id,datas){
	var stusx_labels = new Array();
	var stusx_values = new Array();
	for(var key in datas){
		stusx_labels.push(key);
		stusx_values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var stusx_Chart = echarts.init(document.getElementById(id));
		stusx_option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b} <br/>{a}:{c}% "
			},
			legend: {
			   
        		bottom:10,
				data:stusx_labels
			},
			series: [
				{
					name:'占比',
					type:'pie',
					radius:'60%',
					roseType: 'angle',
					avoidLabelOverlap: false,
					startAngle:-90,
					center: ['50%', '50%'],
					label:{normal:{formatter:"{b}\n{c}%",textStyle:{fontSize:16},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4}},
					data:stusx_values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        stusx_Chart.setOption(stusx_option);
}

function barAll(id,datas,yname,xname,themeColor){
	var sj_labels = new Array();
	var sj_values = new Array();
	for(var key in datas){
		sj_labels.push(key);
		sj_values.push(datas[key]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var sj_Chart = echarts.init(document.getElementById(id));
		sj_option= {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:sj_labels,textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '0%',right: '10%',bottom: '2%',top: '17%',containLabel: true},
			xAxis:[{
				name:xname,
				nameTextStyle:{color:"#333",fontSize:16},
				nameGap:16,
				axisLabel:{textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:themeColor}},
				type:'category',
				data:sj_labels,
				axisTick:{alignWithLabel:true,show:false}
			}],
			yAxis:[{
				
				name:yname,
				nameTextStyle:{color:"#333",fontSize:16},
				nameGap:14,
				axisTick:{show:false},
				axisLabel:{show:true,textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:themeColor}},
				type:'value',
				splitLine:{show:true,lineStyle:{color:"#efefef"}}
				}],
			series : [
			{
					name:yname,
					type:'bar',
					barWidth:"40%",
					itemStyle:{normal:{color:themeColor}},
					data:sj_values,
					label:{normal:{show:true,textStyle:{color:themeColor,fontSize:14},position:"top"}}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        sj_Chart.setOption(sj_option);
}

function barYAll(id,datas,name,themeColor){
	var rx_labels = new Array();
	var rx_values = new Array();
	var norx_values = new Array();
	for(var key in datas){
		rx_labels.push(key);
		rx_values.push(datas[key]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var rx_Chart = echarts.init(document.getElementById(id));
		rx_option= {
			tooltip : {trigger:'axis',axisPointer :{type:'shadow'}},
			
			grid:{left: '4%',right: '10%',bottom: '0',top: '10%',containLabel: true},
			xAxis:[{axisTick:{show:false},axisLabel:{show:false},axisLine:{show:false},type:'value',splitLine:{show:false}}],
			yAxis:[{axisLabel:{textStyle:{color:"#8e8e8e",fontSize:16},margin:20},axisLine:{show:false},axisTick:{show:false,alignWithLabel:true},
			type:'category',data:rx_labels}],
			series : [
				
				{
					name:name,
					type:'bar',
					data:rx_values,
					barWidth:"40%",
					itemStyle:{normal:{color:themeColor}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"right"}}
				}
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        rx_Chart.setOption(rx_option);
}


function zhu(){
	$(".left_box").css("height",($(window).height()-116)+"px");
	$(".zhu").each(function(i) {
        $(this).click(function(){
			//$(".zibox").slideUp(100);
			$(this).toggleClass("cur").next(".zibox").first().slideToggle(100);
			$(this).siblings().removeClass("cur");
		});
    });
}

function  qkysel_fujia(id){
		$(id).each(function(i) {
			$(this).find(".optionbox .option").each(function(j) {
				$(this).click(function(){
					$(this).parent().slideUp(200).parent().find(".selectON").html($(this).html());
				}); 
        	});
		});
}