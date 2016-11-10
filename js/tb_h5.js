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

function xrrx(id,datas){
	var rx_labels = new Array();
	var rx_values = new Array();
	var norx_values = new Array();
	for(var key in datas){
		rx_labels.push(key);
		rx_values.push(datas[key][0]);
		norx_values.push(datas[key][0]-datas[key][1]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var rx_Chart = echarts.init(document.getElementById(id));
		rx_option= {
			tooltip : {trigger:'axis',axisPointer :{type:'shadow'}},
			legend: {right:10,top:5,data:['已经入学人数','未入学人数'],textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '4%',right: '10%',bottom: '0',top: '10%',containLabel: true},
			xAxis:[{axisTick:{show:false},axisLabel:{show:false,lineStyle:{color:"#eee"}},axisLine:{show:false,lineStyle:{color:"#999"}},type:'value',splitLine:{show:false}}],
			yAxis:[{axisLabel:{textStyle:{color:"#8e8e8e",fontSize:16},margin:60},axisLine:{show:false,lineStyle:{color:"#a4eea9"}},axisTick:{show:false,alignWithLabel:true},
			type:'category',data:rx_labels}],
			series : [
				{
					name:'已经入学人数',
					type:'bar',
					data:rx_values,
					barWidth:"70%",
					stack:"zwt",
					itemStyle:{normal:{color:"#13b8d4"}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"left"}}
				},
				{
					name:'未入学人数',
					type:'bar',
					data:norx_values,
					barWidth:"70%",
					stack:"zwt",
					itemStyle:{normal:{color:"#6adfe4"}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"right"}}
				}
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        rx_Chart.setOption(rx_option);
}


function xrrxzb(id,datas){
	var rxzb_labels = new Array();
	var rxzb_values = new Array();
	for(var key in datas){
		var bfvalue=datas[key][0][1]/datas[key][0][0]*100;
		bfvalue=bfvalue.toFixed(2);
		rxzb_labels.push(key);
		rxzb_values.push({value:bfvalue,name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var rxzb_Chart = echarts.init(document.getElementById(id));
		rxzb_option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b} <br/>{a}:{c}% "
			},
			legend: {
			   
        		bottom:6,
				data:rxzb_labels
			},
			series: [
				{
					name:'入学率',
					type:'pie',
					radius: ['26%', '40%'],
					avoidLabelOverlap: false,
					startAngle:-20,
					center: ['50%', '40%'],
					label:{normal:{formatter:"{b}\n入学率:{c}%",textStyle:{fontSize:12},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4}},
					data:rxzb_values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        rxzb_Chart.setOption(rxzb_option);
}


function xrstusj(id,datas){
	var stu_labels = new Array();
	var stu_values = new Array();
	for(var key in datas){
		stu_labels.push(key);
		stu_values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var stu_Chart = echarts.init(document.getElementById(id));
		stu_option= {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:stu_labels,textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '2%',right: '0',bottom: '2%',top: '17%',containLabel: true},
			xAxis:[{
				
				axisLabel:{textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'category',
				data:stu_labels,
				axisTick:{alignWithLabel:true,show:true}
			}],
			yAxis:[{
				
				name:"               学校/学生（人）",
				nameTextStyle:{color:"#333",fontSize:18},
				nameGap:14,
				axisTick:{show:false},
				axisLabel:{show:true,textStyle:{color:"#333",fontSize:14}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'value',
				splitLine:{show:false,lineStyle:{color:"#efefef"}}
				}],
			series : [
			{
					name:"学生人数",
					type:'bar',
					barWidth:"50%",
					itemStyle:{normal:{color:"#ffa93c"}},
					data:stu_values,
					label:{normal:{show:true,textStyle:{color:"#333",fontSize:14},position:"top"}}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        stu_Chart.setOption(stu_option);
}
  
function xrstusx(id,datas){
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
			
			series: [
				{
					name:'占比',
					type:'pie',
					radius:'60%',
					roseType: 'angle',
					avoidLabelOverlap: false,
					startAngle:-90,
					center: ['50%', '60%'],
					label:{normal:{formatter:"{b}\n{c}%",textStyle:{fontSize:16},show:true}},
					labelLine:{normal:{smooth:false,length:8,length2:4}},
					data:stusx_values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        stusx_Chart.setOption(stusx_option);
}      


function xrteacg(id,datas,x,y){
	var teacg_labels = new Array();
	var teacg_values = new Array();
	for(var key in datas){
		teacg_labels.push(key);
		teacg_values.push(datas[key]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var teacg_Chart = echarts.init(document.getElementById(id));
		teacg_option= {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:teacg_labels,textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '0%',right: '10%',bottom: '2%',top: '17%',containLabel: true},
			xAxis:[{
				name:x,
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
				data:teacg_labels,
				axisTick:{alignWithLabel:true,show:false}
			}],
			yAxis:[{
				
				name:y,
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
					name:y,
					type:'bar',
					barWidth:"50%",
					itemStyle:{normal:{color:"#ffa93c"}},
					data:teacg_values,
					label:{normal:{show:true,textStyle:{color:"#ffa93c",fontSize:14},position:"top"}}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        teacg_Chart.setOption(teacg_option);
}		

function xrteanl(id,datas){
	var teanl_labels = new Array();
	var teanl_values = new Array();
	
	for(var key in datas){
		teanl_labels.push(key);
		teanl_values.push(datas[key]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var teanl_Chart = echarts.init(document.getElementById(id));
		teanl_option= {
			tooltip : {trigger:'axis',axisPointer :{type:'shadow'}},
			grid:{left: '4%',right: '10%',bottom: '0',top: '10%',containLabel: true},
			xAxis:[{axisTick:{show:false},axisLabel:{show:false,lineStyle:{color:"#eee"}},axisLine:{show:false,lineStyle:{color:"#999"}},type:'value',splitLine:{show:false}}],
			yAxis:[{axisLabel:{textStyle:{color:"#8e8e8e",fontSize:16}},axisLine:{show:false,lineStyle:{color:"#a4eea9"}},axisTick:{show:false,alignWithLabel:true},
			type:'category',data:teanl_labels}],
			series : [
				{
					name:'人数',
					type:'bar',
					data:teanl_values,
					barWidth:"70%",
					itemStyle:{normal:{color:"#14b8d4"}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"right"}}
				}
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        teanl_Chart.setOption(teanl_option);
}

function xrteaxl(id,datas){
	var teaxl_labels = new Array();
	var teaxl_values = new Array();
	for(var key in datas){
		teaxl_labels.push(key);
		teaxl_values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var teaxl_Chart = echarts.init(document.getElementById(id));
		teaxl_option = {
			tooltip: {
				trigger: 'item',
				formatter: "{b}学历 <br/>占比:{d}% "
			},
			legend: {
			   orient:'vertical',
        		right:6,
				top:'30%',
				data:teaxl_labels
			},
			series: [
				{
					name:'',
					type:'pie',
					radius: ['38%', '60%'],
					avoidLabelOverlap: false,
					startAngle:-90,
					center: ['50%', '50%'],
					label:{normal:{formatter:"{b}\n{d}%",textStyle:{fontSize:16},show:true}},
					labelLine:{normal:{smooth:false}},
					data:teaxl_values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        teaxl_Chart.setOption(teaxl_option);
}		