// JavaScript Document

function xrzb(id,datas){
	var labels = new Array();
	var values = new Array();
	for(var key in datas){
		labels.push(key);
		values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var myChart = echarts.init(document.getElementById(id));
		option = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
			   orient: 'vertical',
        		bottom:10,
				data:labels
			},
			series: [
				{
					name:'学校占比',
					type:'pie',
					radius: ['26%', '40%'],
					avoidLabelOverlap: false,
					startAngle:-20,
					center: ['50%', '50%'],
					label:{normal:{formatter:"{b}\n占比{d}%",textStyle:{fontSize:12},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4}},
					data:values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
}

function xrsj(id,datas,dw){
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
				name:"地区",
				nameTextStyle:{color:"#333",fontSize:18},
				nameGap:14,
				axisLabel:{textStyle:{color:"#333"},formatter: function (value, index){
					
					if(value.length>=4&&value.length<=7){
						return value[0]+value[1]+value[2]+value[3]+"\n"+value[4]+value[5]+value[6]
					}else{
						return value
					}
					}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'category',
				data:sj_labels,
				axisTick:{alignWithLabel:true,show:false}
			}],
			yAxis:[{
				
				name:dw,
				nameTextStyle:{color:"#333",fontSize:18},
				nameGap:14,
				axisTick:{show:false},
				axisLabel:{show:true,textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'value',
				splitLine:{show:true,lineStyle:{color:"#efefef"}}
				}],
			series : [
			{
					name:dw,
					type:'bar',
					barWidth:"50%",
					itemStyle:{normal:{color:"#ffa93c"}},
					data:sj_values,
					label:{normal:{show:true,textStyle:{color:"#ffa93c",fontSize:14},position:"top"}}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        sj_Chart.setOption(sj_option);
}

function xrsj_six(id,datas,dw){
	var sjsix_labels = new Array();
	var sjsix_values_boy = new Array();
	var sjsix_values_gril = new Array();
	for(var key in datas){
		sjsix_labels.push(key);
		sjsix_values_boy.push(datas[key][0]);
		sjsix_values_gril.push(datas[key][1]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var sjsix_Chart = echarts.init(document.getElementById(id));
		sjsix_option = {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:['男','女'],textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '0%',right: '10%',bottom: '2%',top: '17%',containLabel: true},
			xAxis:[{
				name:"地区",
				nameTextStyle:{color:"#333",fontSize:18},
				nameGap:14,
				axisLabel:{textStyle:{color:"#333"},margin:30,formatter: function (value, index){
					
					if(value.length>=4&&value.length<=7){
						return value[0]+value[1]+value[2]+value[3]+"\n"+value[4]+value[5]+value[6]
					}else{
						return value
					}
					}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'category',
				data:sjsix_labels,
				axisTick:{alignWithLabel:true,show:false}
			}],
			yAxis:[{
				name:dw,
				nameTextStyle:{color:"#333",fontSize:18},
				nameGap:14,
				axisTick:{show:false},
				axisLabel:{show:true,textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'value',
				splitLine:{show:true,lineStyle:{color:"#efefef"}}
				}],
			series : [
			{
					name:'女',
					type:'bar',
					stack:"zwt",
					barWidth:"50%",
					itemStyle:{normal:{color:"#ec494c"}},
					data:sjsix_values_gril,
					label:{normal:{show:true,textStyle:{color:"#ec494c",fontSize:12},position:"bottom"}}
				},
				{
					name:'男',
					type:'bar',
					stack:"zwt",
					barWidth:"50%",
					itemStyle:{normal:{color:"#ffa93c"}},
					data:sjsix_values_boy,
					label:{normal:{show:true,textStyle:{color:"#ffa93c",fontSize:12},position:"top"}}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        sjsix_Chart.setOption(sjsix_option);
}




        
		
		