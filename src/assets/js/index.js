/**
 * Created by w on 2016/8/16.
 */
//    终端检测函数
// var ua = parseUA();
// function parseUA() {
//     var u = navigator.userAgent;
//     var u2 = navigator.userAgent.toLowerCase();
//     return { //移动终端浏览器版本信息
//         trident: u.indexOf('Trident') > -1, //IE内核
//         presto: u.indexOf('Presto') > -1, //opera内核
//         webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
//         gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
//         mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
//         ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
//         android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
//         iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
//         iPad: u.indexOf('iPad') > -1, //是否iPad
//         webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
//         iosv: u.substr(u.indexOf('iPhone OS') + 9, 3),
//         weixin: u2.match(/MicroMessenger/i) == "micromessenger",
//         taobao: u.indexOf('AliApp(TB') > -1,
//     };
// }
// // 资源预加载   图片，音频，视频，js，css等文件资源都可以
// var images = new Array();
// preload();
// function preload() {
//     for (i = 0; i < preload.arguments.length; i++) {
//         images[i] = new Image();
//         images[i].src = preload.arguments[i]
//     }
// }


(function(w){
	var dom = {
		getId: function(obj) {
	        return document.getElementById(obj);
	    },
	    getClass: function(obj, className) {
	        if (obj && obj.getElementsByClassName) {
	            return obj.getElementsByClassName(className);
	        } else {
	            var arr = [],
	                collections = obj.getElementsByTagName('*'),
	                len = collections.length;
	            for (var i = 0; i < len; i++) {
	                if (collections[i].className.indexOf(className) > -1) {
	                    if (collections[i].className == className) {
	                        arr.push(collections[i]);
	                    }
	                }
	            }
	            return arr;
	        }
	    },
	    addClass: function(element, className) {
	        if (!dom.hasClass(element, className)) {
	            if (!element.className) {
	                element.className += className;
	            } else {
	                element.className += " " + className;
	            }
	        }
	    },
	    removeClass: function(element, className) {
	        if (dom.hasClass(element, className)) {
	            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	            element.className = element.className.replace(reg, ' ');
	        }
	    },
	    hasClass: function(element, className) {
	        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
	        return element.className.match(reg);
	    },
	    getStyle: function(obj, style) {
	        if (!obj) {
	            return;
	        }
	        var css = obj.currentStyle ? obj.currentStyle[style] : getComputedStyle(obj, false)[style];
	        return css;
	    },
	    getPrev: function(obj) {
	        var prev = obj.previousSibling.nodeType != 1 ? obj.previousSibling.previousSibling : obj.previousSibling;　　
	        return prev;
	    },
	    getNext: function(obj) {
	        var next = obj.nextSibling.nodeType != 1 ? obj.nextSibling.nextSibling : obj.nextSibling;　　
	        return next;
	    },
	    siblings: function(elm) {
	        var a = [];
	        var b = elm.parentNode.children;
	        for (var i = 0; i < b.length; i++) {
	            if (b[i] != elm) {
	                a.push(b[i]);
	            }
	        }
	        return a;
		},
		isIos: function() {
			var u = navigator.userAgent;
			return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
		}
	}
	w.dom = dom;

	var arr_text_01 = ['市场变化如何','如何让经纪人更专业','脱口而出小区的成交情况','行业走势如何','竞争对手及自身目标小区目标区域市占如何','价格变化情况','热门楼盘在哪',
	'哪些小区成为下个爆点楼盘','成交难易','不同户型热门程度','有数有真相','增添客户信任感'];
	
	var arr_text_02 = ['存量市场','二手房变化最为敏感','投策定位','市场变化如何最快捕捉','哪有细化到小区可多维度统计交叉分析的二手供应成交数据','最烦写市场报告','尤其分析二手房市场',
	'数据缺失','漫天虚假','无法统计'];

	var arr_text_03 = ['手上没有数据','无从判断','原始数据太多','如何撰写二手房研究报告','网络上的数据鱼龙混杂','如何寻找到更精准的报告数据','如何快速分析数据',
	'瞬间完成研究报告'];

	var arr_text_04 = ['一键就知，高频更新','如何全方位的评估一套房产价值风险','成交情况如何','哪些小区应该进入白名单','持续热销品','变现能力如何？','如何快速获知房产市场波动',
	'从城市到小区','从量价走势到挂牌成交结构'];

	w.runSwiper = function() {
		
		var oSwiperWrapper = document.getElementById('swiperWrapper');
		var aSwiperSlids = oSwiperWrapper.getElementsByClassName('swiper-slide');
		var swiper = new Swiper('.swiper-container', {
			direction: 'vertical',
			//pagination: '.swiper-pagination',
			on: {
				init: function () { },
				slideChange: function() {
					var index = this.activeIndex;
					if( index == 9 ) {
						return document.getElementById('topArrow').style.display = "none";
					}
					document.getElementById('topArrow').style.display = "block";
					switch( index ) {
						case 0:
						break;
						case 1:
							w.pushText(arr_text_01,"slide_01");
						break;
						case 3:
							w.pushText(arr_text_02,"slide_02");
						break;
						case 5:
							w.pushText(arr_text_03,"slide_03");
						break;
						case 7:
							w.pushText(arr_text_04,"slide_04");
						break;
					}
				},
				touchEnd: function() {}
			}
		});
	}

	// 添加文本方法
	w.pushText = function(arr,dom) {
		var oSlide_01 = document.getElementById(dom);
		oSlide_01.innerHTML = '';
		var i = 0,
		timer = setInterval(function() {
			var newDiv = document.createElement('div');
			newDiv.className = 'layer t'+(i+1);
			newDiv.innerHTML = arr[i];
			oSlide_01.appendChild(newDiv);
			i++;
			if( i>arr.length-1 ) {
				clearInterval(timer);
			}
		},200);
	}

	/**
	 * 倒计时
	 * 
	 */
	w.TimerEnd = function(){};
	w.TimerEnd.prototype = {
	    init: function (obj, iNum) {
	        this.oSecond = document.getElementById(obj);
	        this.timer = null;
	        this.iSecond = 60;
	        if (!this.oSecond) return;
	        this.interval(iNum);
	    },
	    interval: function (iNum) {
	        var _this = this;
			var isec = iNum ? iNum : _this.iSecond;
			dom.addClass(_this.oSecond,'disable');
	        this.timer = setInterval(function () {
	            _this.oSecond.innerHTML = isec <= 10 ? "0" + --isec + "S" : --isec + "S";
	            if (isec <= 0) {
					clearInterval(_this.timer);
					dom.removeClass(_this.oSecond,'disable');
	                _this.oSecond.innerHTML = "获取验证码";
	            }
	        }, 1000);
	    }
	};

	return w;

})(window);
