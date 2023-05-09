var DU = new DATAUTIL();
import Vue from 'vue';

Vue.prototype.$DU = DU

function DATAUTIL(login){
	this.my_path = "http://localhost:8888/bigdata";
	this.out_path = "/outjk";

	this.XU = new XMLUTIL(this.my_path);

	/**  登录方法【开始】  **/
	this.login = function(){
		var msg = "";
		var xml = this.XU.objs[this.XU.keys["登录"]];


    console.log(this.out_path + xml['path'])

		$.ajax({
		     type: 'post',
		     url: this.out_path + xml['path'],
		     data: {"username": xml.username, "password": xml.password },
		     success: function (res) {

		     	if(res.name != undefined || res.name != "" || res != null){
		     		msg = "外部接口登录成功";
		     	}else{
		     		msg = "外部接口账号密码错误";
		     	}
		     	console.log(msg);
		     },
		     error:function(){
		     	msg = "外部接口登录出现未知错误";
        		console.log(msg);
    		}
		});
	}
	/**  登录方法【结束】  **/

	/**  通过固定key获取访问地址【开始】  **/
	this.getValByKey = function(key){
		var x = this.XU;
		var key_num = x.keys[key];

		if(key_num != null && key_num != "" && key_num != undefined && key_num >= 0 && key_num < x.keys.length){
			return x.objs[key_num];
		}else{
			var objs = x.objs;

			for(var i = 0 ; i < objs.length ; i ++){
				var obj = objs[i];
				if(obj["name"].indexOf(key) != -1){
					return obj;
				}
			}
		}

		var paths = this.out_paths;					//支持模糊查询，但只返回第一个

		if(paths == undefined){
			console.log("该[key]：“" + key + "”之下没有数据请查询");
			return;
		}
		for(var i = 0 ; i < paths.length ; i ++){
			var path = paths[i];
			if(path.key.indexOf(key) != -1){
				return path.val;
			}
		}
	}
	/**  通过固定key获取访问地址【结束】  **/

	/**  获取数据，各type分开处理【开始】  **/
	this.getData = function(key,type){				//key：	表格关键字；
													//type：	数据类型：图文、列表、饼状图、柱状图、折线图、多边形
		if(type == "图文"){
			var data = this.getDataTW(key);
		}else if(type == "列表"){
			var data = this.getDataLB(key);
		}else if(type == "饼状图" || type == "柱状图" || type == "折线图"|| type == "多边形"){
			var data = this.getDataOther(key,type);
		}

		return data;
	}
	/**  获取数据，各type分开处理【结束】  **/

	//*****  图文大框【开始】  *****//

	/**  获取图文数据——基础【开始】  **/
	this.getDataTW = function(key,list){
		var x = this.XU;

		var obj_attr = this.getValByKey(key);

		x.cut_list(obj_attr);

		if(list == null){
			list = x.tw_attr_list;
		}
		var my = this;

		$.ajax({
		    type: 'get',
		    url: this.out_path + obj_attr['path'],
		    success: function (result) {
		    	if(result.length == 1){
		    		var res = result[0];

		     		if(obj_attr["key"] != undefined && obj_attr["key"] != null && obj_attr["key"] != ""){
		     			res = res[obj_attr["key"]];
		     		}

			     	for(var i = 0 ; i < list.length ; i ++){
			     		var item = list[i];
			     		var val = res[item['key']];

			     		val = my.setUnit(item,val);

			     		item["val"] = val;
			     	}
		    	}else if(result.length > 1){

		    		for(var i = 0 ; i < list.length ; i ++){
			     		var item = list[i];

			     		if(item['get_val_way'] == "sum"){
				     		val = my.getValTWSum(result,item);
				     	}else if(item['get_val_way'] == "get"){
				     		val = my.getValTWGet(result,item);
				     	}
				     	item["val"] = val;
			     	}
		    	}
		    },
		    error : function(xhr,textStatus,errorThrown){
		    	console.log("调用[key]：“" + key + "”时失去登录状态，请重新登录");
		    }
		});

		return list;
	}
	/**  获取图文数据——基础【结束】  **/

	/**  获取图文数据——需要统计【开始】  **/
	this.getValTWSum = function(result,item){
		var sum = 0;
		for(var i = 0 ; i < result.length ; i ++){
			if(result[i][item["group_by_key"]] == item["dtl"]){
				sum += parseInt(result[i][item["key"]]);
			}
		}
		return sum;
	}
	/**  获取图文数据——需要统计【结束】  **/

	/**  获取图文数据——从list中获取【开始】  **/
	this.getValTWGet = function(result,item){
		for(var i = 0 ; i < result.length ; i ++){
			if(result[i][item["get_by_key"]] == item["dtl"]){
				var val = result[i][item["key"]];
				val = this.setUnit(item,val);

				val = parseInt(val);

				for (let key in item) {
					if(key.indexOf("key") > 0){
						var val_head = key.split("key")[0];
						var some_val = result[i][item[key]];
						item[val_head + "val"] = some_val;
					}
				}
				return val;
			}
		}
	}
	/**  获取图文数据——从list中获取【结束】  **/


	/**  获取图文数据——单位提取工具【开始】  **/
	this.setUnit = function(item,val){
		if(Boolean(item['del_unit'])){		//	去除单位
			for(var num = 2 ; ; num ++){
				var val_char = val[val.length - num];

				var val_num = parseInt(val_char);

				if(!isNaN(val_num)){
					item["unit"] = val.slice( val.length - num + 1,val.length );
					val = val.slice( 0 ,val.length - num + 1);
					break;
				}
			}
		}
		return val;
	}
	/**  获取图文数据——单位提取工具【结束】  **/
	//*****  图文大框【结束】  *****//

	//*****  列表大框【开始】  *****//
	this.getDataLB = function(key){
		var x = this.XU;

		var obj_attr = this.getValByKey(key);
		if(obj_attr['path'] == undefined){
			return this.getDataLB_dis(key);
		}
		x.cut_list(obj_attr);

		var list = x.lb_attr_list;
		if(list[0] != undefined && "tw" == list[0]['change']){
			return this.getDataLB_changeTW(key);
		}
		var my = this;
		$.ajax({
		    type: 'get',
		    url: this.out_path + obj_attr['path'],
		    success: function (result) {
		    	var data_list = result;
		    	var key = obj_attr["key"];
		    	if(key != null){
		    		result[0] = result[0][key];
		    	}

		    	obj_attr = list[0];
		    	var key = obj_attr["key"];
		    	if(key != null){
		    		data_list = result[0][key];
		    	}else{
		    		data_list = result[0];
		    	}

		    	var obj_data = result[0];

		    	var data_list = obj_data[obj_attr["key"]];

		    	var keys = obj_attr["keys"];

		    	var vals = [];

		    	var len = data_list.length;
		    	if(len == undefined || len == null){
		    		for(var i = 0 ; i < keys.length ; i ++){
		    			var key = keys[i];

		    			var val_str = data_list[key]+"";
		    			var key_vals = val_str.split(obj_attr["key_cut_sign"]);

		    			for(var j = 0 ; j < key_vals.length ; j ++){
		    				var val_item;
			    			if(i == 0){
			    				val_item = {};
			    				val_item[key] = key_vals[j];
			    				vals[j] = val_item;
			    			}else{
			    				val_item = vals[j];
			    				val_item[key] = key_vals[j];
			    			}
		    			}
		    		}
		    	}else{
		    		for(var i = 0 ; i < len ; i ++){
			    		var data = data_list[i];

			    		var vals_item = {};
			    		for(var j = 0 ; j < keys.length ; j ++){
			    			if(keys[j] == "AUTO"){
			    				vals_item[keys[j]] = i + 1;
			    			}else{
			    				vals_item[keys[j]] = data[keys[j]];
			    			}
			    		}
			    		vals[i] = vals_item;
			    	}
		    	}


		    	obj_attr["vals"] = vals;

		    },
		    error : function(xhr,textStatus,errorThrown){
		    	console.log("调用[key]：“" + key + "”时失去登录状态，请重新登录");
		    }
		});
		return list;
	}

	this.getDataLB_changeTW = function(key){
		var x = this.XU;

		var obj_attr = this.getValByKey(key);

		x.cut_list(obj_attr);

		var list = x.ts_attr_list;

		var lb_list = x.lb_attr_list;

		var datas = this.getDataTW(key,list);

		var ret = [];
		for(var i = 0 ; i < datas.length ; i ++){
			var item = {};
			var data = datas[i];
			item[data["gkey"]] = data["dtl"];
			item[data["gval"]] = data["val"];
			ret[i] = item;
		}
		lb_list[0]["vals"] = ret;

		return lb_list;
	}
	/**  获取图文数据——直接读取配置文件【开始】  **/
	this.getDataLB_dis = function(key){
		var x = this.XU;

		var obj_attr = this.getValByKey(key);
		x.cut_list(obj_attr);

		var list = x.lb_attr_list;

		var my = this;
		var vals = [];
		$.ajax({
	        url: './static/dispose.xml',
	        dataType: 'xml',
	        success: function (data) {
	        	var object_list = $(data).find("object[key='" + key + "']");
	        	var attr_list = object_list.children("attr_list");
	        	var lb = attr_list.children("attr[name='lb']");
	        	var option_list = lb.children("vals").children("option");

	        	for(var i = 0 ; i < option_list.length ; i ++){
	        		var opt = $(option_list[i]);

	        		var keys = list[0]["keys"];
	        		var val = {};
	        		for(var j = 0 ; j < keys.length ; j ++){
	        			var k = keys[j];
	        			val[k] = opt.children(k).html();
	        		}
	        		vals[i] = val;
	        	}
	        	list[0]["vals"] = vals;
	        }
	   	});
		return list;
	}
	/**  获取图文数据——直接读取配置文件【结束】  **/
	//*****  列表大框【结束】  *****//


	//*****  饼状图大框【开始】  *****//
	this.getDataOther = function(key,type){

		var x = this.XU;

		var obj_attr = this.getValByKey(key);

		x.cut_list(obj_attr);
		var list;
		if(type == "饼状图"){
			list = x.bzt_attr_list;
		}else if(type == "柱状图"){
			list = x.zzt_attr_list;
		}else if(type == "折线图"){
			list = x.zxt_attr_list;
		}else if(type == "多边形"){
			list = x.dbx_attr_list;
		}
		var my = this;

		$.ajax({
		    type: 'get',
		    async: false,
		    url: this.out_path + obj_attr['path'],
		    success: function (result) {
		    	var data_list = result;
		    	var key = obj_attr["key"];
		    	if(key != null){
		    		result[0] = result[0][key];
		    	}

		    	obj_attr = list[0];
		    	var key = obj_attr["key"];
		    	if(key != null){
		    		data_list = result[0][key];
		    	}else{
		    		data_list = result[0];
		    	}

		    	var group = obj_attr["group"];

		    	var keys = obj_attr["keys"];
		    	if(group == null){
		    		var back_list = [];
			    	for(var i = 0 ; i < data_list.length ; i ++){

			    		var obj = {};
			    		var data = data_list[i]
			    		for(var j = 0 ; j < keys.length ; j ++){
			    			key = keys[j];
			    			var val = data[key];
			    			obj[key] = val;
			    		}
			    		back_list[i] = obj;
			    	}

			    	obj_attr["vals"] = back_list;
		    	}else{
		    		var back_list = {};

		    		var group_key = [];
		    		var group_list = [];
		    		var k = 0;
		    		for(var i = 0 ; i < data_list.length ; i ++){
		    			var obj = {};
			    		var data = data_list[i]

			    		var j = 0;
			    		for(var j = 0 ; j < group_key.length ; j ++){
			    			var gkey = group_key[j];
			    			if(gkey == data[group]){
			    				break;
			    			}
			    		}

			    		var my_list = [];
			    		if(j == group_key.length){
			    			group_list[k] = [];
			    			back_list[data[group]] = group_list;
			    			group_key[k] = data[group];
			    			my_list = group_list[k];
			    			k ++;
			    		}else{
			    			my_list = group_list[j];
			    		}

			    		for(j = 0 ; j < keys.length ; j ++){
			    			key = keys[j];
			    			var val = data[key];
			    			obj[key] = val;
			    		}
			    		my_list[my_list.length] = obj;
		    		}
		    		obj_attr["vals"] = back_list;
		    	}
		    },
		    error : function(xhr,textStatus,errorThrown){
		    	console.log("调用[key]：“" + key + "”时失去登录状态，请重新登录");
		    }
		});

		return list;
	}
	//*****  饼状图大框【结束】  *****//

	/**  自动登录，一般会自动【开始】  **/
	if(login == "" || login == undefined || login == null || login){
		return this.login();
	}
	/**  自动登录，一般会自动【结束】  **/
}

/**  处理XML的工具【开始】  **/
function XMLUTIL(path){
	this.keys;
	this.objs;

	this.tw_attr_list;			//图文属性列表
	this.lb_attr_list;			//列表属性列表
	this.bzt_attr_list;			//饼状图属性列表
	this.zzt_attr_list;			//柱状图属性列表
	this.zxt_attr_list;			//折现图属性列表
	this.dbx_attr_list;			//多边形属性列表

	this.ts_attr_list;			//特殊属性列表
	/**  获取XML，入参的地址是请求头【开始】  **/
	this.getXML = function(path){
		var keys = {};
		var objs = [];
		var x = this;
		$.ajax({
	        url: './static/dispose.xml',
	        dataType: 'xml',
	        async: false,
	        success: function (data) {
	        	var object_list = $(data).find("object");

	        	for(var i = 0 ; i < object_list.length ; i ++){
	        		var obj = $(object_list[i]);
	        		var key = obj.attr("key");
	        		keys[key] = i;

	        		var attr_list = $(obj).children();

	        		var obj = {};
	        		for(var j = 0 ; j < attr_list.length ; j ++){
	        			var attr_obj = $(attr_list[j]);
	        			var nodeName = attr_obj[0].nodeName;
	        			obj['name'] = key;

	        			if(nodeName.indexOf("list") != -1){
	        				var rs = x.get_attr_list(attr_obj);
	        				obj[nodeName] = rs;
	        			}else{
	        				obj[nodeName] = attr_obj.html();
	        			}

	        		}
	        		objs[i] = obj;
	        	}

	            //aa = $(aa).children("path").html();
	        }
	   });
	   this.keys = keys;		//获取所有的key及其序号，让XML对象寻找更快
	   this.objs = objs;		//XML封装对象寻找更快
	}
	/**  获取XML，入参的地址是请求头【结束】  **/

	/**  专门封装变量attr属性【开始】  **/
	/**  获取XML变量attr属性【开始】  **/
	this.get_attr_list = function(obj){
		var attr_list = $(obj).children("attr");
		var rs = [];
		for(var i = 0 ; i < attr_list.length ; i ++){

			var atr = $(attr_list[i]);

			var rs_attr = [];
			if(atr.attr("name") == "tw" || atr.attr("name") == "ts"){
				rs_attr = this.get_attr_list_tw(atr);
			}else if(		atr.attr("name") == "lb"
						|| 	atr.attr("name") == "bzt"
						|| 	atr.attr("name") == "zzt"
						|| 	atr.attr("name") == "zxt"
						||  atr.attr("name") == "dbx"){
				rs_attr = this.get_attr_list_other(atr);
			}

			rs[i] = rs_attr;
		}
		return rs;
	}
	/**  获取XML变量attr属性【结束】  **/

	/**  获取XML图文变量attr属性【开始】  **/
	this.get_attr_list_tw = function(atr){
		var attrs = atr.children();

		var rs_attr = {};
		var name = atr.attr("name");
		var k = atr.attr("gkey");
		var v = atr.attr("gval");
		if(name != "" && name != undefined){
			rs_attr['name'] = name;
		}
		if(k != "" && k != undefined){
			rs_attr['gkey'] = k;
		}
		if(v != "" && v != undefined){
			rs_attr['gval'] = v;
		}

		for(var j = 0 ; j < attrs.length ; j ++){
			var nodeName = attrs[j].nodeName;
			var html = $(attrs[j]).html();
			rs_attr[nodeName] = html;
		}
		return rs_attr;
	}
	/**  获取XML图文变量attr属性【结束】  **/

	/**  获取XML其他变量attr属性【开始】  **/
	this.get_attr_list_other = function(atr){
		var attrs = atr.children();

		var rs_attr = {};
		var name = atr.attr("name");

		if(name != "" && name != undefined)
			rs_attr['name'] = name;

		for(var i = 0 ; i < attrs.length ; i ++){
			var nodeName = attrs[i].nodeName;
			var html = $(attrs[i]).html();

			if(nodeName == "option"){
				break;
			}else{
				rs_attr[nodeName] = html;
			}
		}

		attrs = atr.children("option");
		var titles = [],keys = [];
		for(var i = 0 ; i < attrs.length ; i ++){
			var	attr_item = $(attrs[i]);
			var key = attr_item.children("key").html();
			var title = attr_item.children("dtl").html();

			keys[i] = key;
			titles[i] = title;
		}
		rs_attr['keys'] = keys;
		rs_attr['titles'] = titles;
		return rs_attr;
	}
	/**  获取XML其他变量attr属性【结束】  **/
	/**  专门封装变量attr属性【结束】  **/

	/**  切断所有属性，分成x个，分别为：图文、列表、饼状图、柱状图、折线图【开始】  **/
	this.cut_list = function(list){
		var tw = [],lb = [],bzt = [],zzt = [],zxt = [],dbx = [],ts = [];
		var tw_i = 0,lb_i = 0,bzt_i = 0,zzt_i = 0,zxt_i = 0,dbx_i = 0,ts_i = 0;

		list = list['attr_list'];
		for(var i = 0 ; i < list.length ; i++){
			var name = list[i]['name'];
			if(name == "tw"){
				tw[tw_i] = list[i];
				tw_i++;
			}else if(name == "lb"){
				lb[lb_i] = list[i];
				lb_i++;
			}else if(name == "bzt"){
				bzt[bzt_i] = list[i];
				bzt_i++;
			}else if(name == "zzt"){
				zzt[zzt_i] = list[i];
				zzt_i++;
			}else if(name == "zxt"){
				zxt[zxt_i] = list[i];
				zxt_i++;
			}else if(name == "dbx"){
				dbx[dbx_i] = list[i];
				dbx_i++;
			}else if(name == "ts"){
				ts[ts_i] = list[i];
				ts_i++;
			}
		}
		this.tw_attr_list = tw;
		this.lb_attr_list = lb;
		this.bzt_attr_list = bzt;
		this.zzt_attr_list = zzt;
		this.zxt_attr_list = zxt;
		this.dbx_attr_list = dbx;
		this.ts_attr_list = ts;
	}
	/**  切断所有属性，分成x个，分别为：图文、列表、饼状图、柱状图、折线图【结束】  **/

	/**  自动获取XML【开始】  **/
	return this.getXML(path);
}
/**  处理XML的工具【结束】  **/
