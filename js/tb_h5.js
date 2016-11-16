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
					
					if(value.length>=5&&value.length<=7){
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
					
					if(value.length>=5&&value.length<=7){
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
					label:{normal:{formatter:"{b}",textStyle:{fontSize:12},show:true}},
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

function xrzh01(id,datas){
	var zh01_labels = new Array();
	var zh01_values_z = new Array();
	var zh01_values_f = new Array();
	for(var key in datas){
		zh01_labels.push(key);
		zh01_values_z.push(datas[key][0]);
		zh01_values_f.push(datas[key][1]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var zh01_Chart = echarts.init(document.getElementById(id));
		zh01_option = {
			tooltip : {
				trigger: 'axis',
				axisPointer : {            // 坐标轴指示器，坐标轴触发有效
					type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			
			grid: {
				left: '3%',
				right: '4%',
				bottom: '6%',
				top:'4%',
				
			},
			yAxis : [
				{
					type : 'value',
					splitLine:{show:false},
					axisLabel:{show:true,textStyle:{color:"#333"}},
					axisLine:{lineStyle:{color:"#13b8d4"}},
				}
			],
			xAxis : [
				{
					type : 'category',
					axisTick : {show: false},
					axisLabel:{show:true,textStyle:{color:"#333",fontSize:16}},
					axisLine:{show:true,lineStyle:{color:"#13b8d4"}},
					data : zh01_labels
				}
			],
			series : [
				
				{
					name:'加分',
					type:'bar',
					stack: '总量',
					barWidth:"60%",
					label: {normal: {show: true,position:'top'}},
					itemStyle:{normal:{color:'#13b8d4'}},
					data:zh01_values_z
				},
				{
					name:'减分',
					type:'bar',
					stack: '总量',
					barWidth:"60%",
					label: {normal: {show: true,position:'bottom'}},
					itemStyle:{normal:{color:'#6adfe4'}},
					data:zh01_values_f
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        zh01_Chart.setOption(zh01_option);
}	


function xrzh02(id,datas){
	var zh02_labels = new Array();
	var zh02_values = new Array();
	for(var key in datas){
		zh02_labels.push(key);
		zh02_values.push({value:datas[key][0],name:key,itemStyle:{normal:{color:datas[key][1]}}});
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var zh02_Chart = echarts.init(document.getElementById(id));
		zh02_option = {
			tooltip : {
				trigger: 'item',
				formatter: "{b} <br/>{a} : {d}%"
			},
			legend: {
				x : 'center',
				y : 'bottom',
				data:zh02_labels
			},
			calculable : true,
			series : [
			   
				{
					name:'占比',
					type:'pie',
					radius : [30, 110],
					center : ['50%', '50%'],
					roseType : 'area',
					data:zh02_values
				}
			]
		};
        // 使用刚指定的配置项和数据显示图表。
        zh02_Chart.setOption(zh02_option);
}

function xrzh03(id,datas){
	var zh03_labels = new Array();
	var zh03_values = new Array();
	for(var key in datas){
		zh03_labels.push(key);
		zh03_values.push(datas[key]);
		
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var zh03_Chart = echarts.init(document.getElementById(id));
		zh03_option= {
			tooltip : {trigger:'axis',axisPointer :{type:'shadow'}},
			
			grid:{left: '4%',right: '0%',bottom: '0',top: '0%',containLabel: true},
			xAxis:[{axisTick:{show:false},axisLabel:{show:false,lineStyle:{color:"#eee"}},axisLine:{show:false,lineStyle:{color:"#999"}},type:'value',splitLine:{show:false}}],
			yAxis:[{axisLabel:{textStyle:{color:"#8e8e8e",fontSize:16}},axisLine:{show:false,lineStyle:{color:"#a4eea9"}},axisTick:{show:false,alignWithLabel:true},
			type:'category',data:zh03_labels}],
			series : [
				{
					name:'分数',
					type:'bar',
					data:zh03_values,
					barWidth:"60%",
					itemStyle:{normal:{color:"#ffaa3d"}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"right"}}
				}
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        zh03_Chart.setOption(zh03_option);
}
function xrzh04(id,datas){
	var zh04_labels = new Array();
	var zh04_values_01 = new Array();
	var zh04_values_02 = new Array();
	var zh04_values_03 = new Array();
	for(var key in datas){
		zh04_labels.push(key);
		zh04_values_01.push(datas[key][0]);
		zh04_values_02.push(datas[key][1]);
		zh04_values_03.push(datas[key][2]);
		
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var zh04_Chart = echarts.init(document.getElementById(id));
		zh04_option= {
			tooltip : {trigger:'axis',axisPointer :{type:'shadow'}},
			legend: {
			   orient:'vertical',
        		right:0,
				top:'30%',
				data:["高中","初中","小学"]
			},
			grid:{left: '0%',right: '16%',bottom: '2%',top: '16%',containLabel: true},
			yAxis:[{axisTick:{show:false},axisLabel:{show:false,lineStyle:{color:"#eee"}},axisLine:{show:false,lineStyle:{color:"#999"}},type:'value',splitLine:{show:false}}],
			xAxis:[{axisLabel:{textStyle:{color:"#8e8e8e",fontSize:14}},axisLine:{show:false,lineStyle:{color:"#a4eea9"}},axisTick:{show:false,alignWithLabel:true},
			type:'category',data:zh04_labels}],
			series : [
				{
					name:'高中',
					type:'bar',
					data:zh04_values_01,
					itemStyle:{normal:{color:"#6ae0e4"}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"top"}}
				},
				{
					name:'初中',
					type:'bar',
					data:zh04_values_02,

					itemStyle:{normal:{color:"#b5ebed"}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"top"}}
				},
				{
					name:'小学',
					type:'bar',
					data:zh04_values_03,
					itemStyle:{normal:{color:"#13b8d4"}},
					label:{normal:{show:true,textStyle:{fontSize:14},position:"top"}}
				}
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        zh04_Chart.setOption(zh04_option);
}

function xrrydj(id,datas,i){
	var rydj_labels = new Array();
	var rydj_labels_2 = new Array();
	var rydj_values_1= new Array();
	for(var key in datas){
		rydj_labels.push(key);	
	}
	for(var it in datas[rydj_labels[i]]){
			rydj_labels_2.push(it);
			rydj_values_1.push({value:datas[rydj_labels[i]][it][0],name:it,itemStyle:{normal:{color:datas[rydj_labels[i]][it][1]}}});
		}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var rydj_Chart = echarts.init(document.getElementById(id));
		rydj_option = {
			title:{text:rydj_labels[i],textStyle:{color:'#939393',fontSize:18},left:'center',top:'center'},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				right:"4%",
				top:"16%",
				data:rydj_labels_2
			},
			series: [
				{
					name:rydj_labels[i],
					type:'pie',
					radius: ['40%', '60%'],
					center : ['50%', '50%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '14'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						},
						emphasis: {
							show: true
						}
					},
					data:rydj_values_1
				}
			]
		};

		
        // 使用刚指定的配置项和数据显示图表。
        rydj_Chart.setOption(rydj_option);
}

function xrzy_wcl(id,datas){
	var wcl_labels = new Array();
	var wcl_values_no = new Array();
	var wcl_values_yes = new Array();
	for(var key in datas){
		wcl_labels.push(key);
		wcl_values_no.push(datas[key][1]);
		wcl_values_yes.push(datas[key][0]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var wcl_Chart = echarts.init(document.getElementById(id));
		wcl_option = {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:['已完成','未完成'],textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '2%',right: '2%',bottom: '2%',top: '17%',containLabel: true},
			xAxis:[{
				name:"",
				nameTextStyle:{color:"#333",fontSize:18},
				nameGap:14,
				axisLabel:{textStyle:{color:"#333"},margin:30,formatter: function (value, index){
					
					if(value.length>=5&&value.length<=7){
						return value[0]+value[1]+value[2]+value[3]+"\n"+value[4]+value[5]+value[6]
					}else{
						return value
					}
					}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'category',
				data:wcl_labels,
				axisTick:{alignWithLabel:true,show:false}
			}],
			yAxis:[{
				name:"",
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
					name:'已完成',
					type:'bar',
					stack:"zwt",
					barWidth:"50%",
					itemStyle:{normal:{color:"#ffa93c"}},
					data:wcl_values_yes,
					label:{normal:{show:true,textStyle:{color:"#ffa93c",fontSize:12},position:"bottom"}}
				},
				{
					name:'未完成',
					type:'bar',
					stack:"zwt",
					barWidth:"50%",
					itemStyle:{normal:{color:"#ec494c"}},
					data:wcl_values_no,
					label:{normal:{show:true,textStyle:{color:"#ec494c",fontSize:12},position:"top"}}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        wcl_Chart.setOption(wcl_option);
}

function xrzy_tj(id,datas){
	var zytj_labels = new Array();
	var zytj_values = new Array();
	for(var key in datas){
		zytj_labels.push(key);
		zytj_values.push(datas[key]);

	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var zytj_Chart = echarts.init(document.getElementById(id));
		
		zytj_option = {
			tooltip: {
				trigger: 'axis',
				position: function (pt) {
					return [pt[0], '10%'];
				}
			},
			grid:{left: '2%',right: '2%',bottom: '2%',top: '10%',containLabel: true},
			xAxis: {
				type: 'category',
				boundaryGap: false,
				data: zytj_labels
			},
			yAxis: {
				name:'作业/次数',
				nameTextStyle:{fontSize:16, color:"#333"},
				type: 'value',
				boundaryGap: [0, '100%']
			},
			
			series: [
				{
					name:'作业次数',
					type:'line',
					smooth:true,
					symbol: 'emptyCircle',
					sampling: 'average',
					itemStyle: {
						normal: {
							color: 'rgb(255, 70, 131)'
						}
					},
					label:{normal:{show:true,textStyle:{color:"#ec494c",fontSize:12},position:"top"}},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgb(255, 158, 68)'
							}, {
								offset: 1,
								color: 'rgb(255, 70, 131)'
							}])
						}
					},
					data: zytj_values
				}
			]
		};

        // 使用刚指定的配置项和数据显示图表。
        zytj_Chart.setOption(zytj_option);
}

function xrkscj(id,datas){
	var kscj_labels = new Array();
	var kscj_values = new Array();
	for(var key in datas){
		kscj_labels.push(key);
		kscj_values.push(datas[key]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var kscj_Chart = echarts.init(document.getElementById(id));
		kscj_option= {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:kscj_labels,textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '2%',right: '6%',bottom: '2%',top: '10%',containLabel: true},
			xAxis:[{
				name:"分数段",
				nameTextStyle:{color:"#333",fontSize:16},
				nameGap:14,
				axisLabel:{textStyle:{color:"#333",fontSize:13}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'category',
				data:kscj_labels,
				axisTick:{alignWithLabel:false,show:false}
			}],
			yAxis:[{
				name:"人数",
				nameTextStyle:{color:"#333",fontSize:16},
				nameGap:14,
				axisTick:{show:false},
				axisLabel:{show:true,textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:"#ffd49d"}},
				type:'value',
				splitLine:{show:true,lineStyle:{color:"#efefef"}}
				}],
			series : [
			{
					name:"人数",
					type:'bar',
					barWidth:"50%",
					itemStyle:{normal:{color:"#ffa93c"}},
					data:kscj_values,
					label:{normal:{show:true,textStyle:{color:"#ffa93c",fontSize:14},position:"top"}}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        kscj_Chart.setOption(kscj_option);
}	

function xrksavg(id,datas){
	var avg_labels = new Array();
	var avg_values = new Array();
	for(var key in datas){
		avg_labels.push(key);
		avg_values.push(datas[key]);
	}
	 
	//渲染表格（想看明白请看ECharts 3.0官方api） 
	var avg_Chart = echarts.init(document.getElementById(id));
		avg_option= {
			tooltip : {trigger:'axis',axisPointer :{type : 'shadow'}},
			legend: {right:10,top:5,data:avg_labels,textStyle:{color:"#999"},selectedMode:true},
			grid:{left: '2%',right: '8%',bottom: '2%',top: '10%',containLabel: true},
			xAxis:[{
				name:"班级",
				nameTextStyle:{color:"#333",fontSize:14},
				nameGap:14,
				axisLabel:{textStyle:{color:"#333",fontSize:13}},
				axisLine:{lineStyle:{color:"#13b8d4"}},
				type:'category',
				data:avg_labels,
				axisTick:{alignWithLabel:false,show:false}
			}],
			yAxis:[{
				name:"平均分",
				nameTextStyle:{color:"#333",fontSize:14},
				nameGap:14,
				axisTick:{show:false},
				axisLabel:{show:true,textStyle:{color:"#333"}},
				axisLine:{lineStyle:{color:"#13b8d4"}},
				type:'value',
				splitLine:{show:true,lineStyle:{color:"#efefef"}}
				}],
			series : [
			{
					name:"平均分",
					type:'bar',
					barWidth:"50%",
					itemStyle:{normal:{color:"#13b8d4"}},
					data:avg_values,
					label:{normal:{show:true,textStyle:{color:"#13b8d4",fontSize:14},position:"top"}},
					markLine: {
						lineStyle:{normal:{color:"#333"}},
						data: [
							{type: 'average', name: '基准分'}
						]
					}
				}
				
			]
	};
        // 使用刚指定的配置项和数据显示图表。
        avg_Chart.setOption(avg_option);
}
	
	