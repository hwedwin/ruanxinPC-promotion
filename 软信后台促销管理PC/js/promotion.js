//所有下拉框
            $(function(){
				//当列表项被点击时，把列表项的值放在输入框里面，
				$(".dropdown").delegate("li", "click", function(e){
					var v = $(this).attr("data-value"),
						drop = $(this).closest(".dropdown");
					drop.attr("data-value", v);
					drop.find(".editor").val(v);
					$(this).parent().hide();
					e.stopPropagation();
				}).delegate(".trigger", "click", function(e){    //当下拉按钮被点击时，显示数据列表
					$(this).closest(".dropdown").find("ul").show();
					e.stopPropagation();  //阻止冒泡，因为冒泡到 document 的时候，会隐藏列表
				}).delegate(".search input", "click", function(e){
					e.stopPropagation(); 
				}).delegate(".search input", "keyup", function(e){    //当检测到列表中的输入框的时候，启动过滤，不满足的项隐藏
					var v = $.trim(this.value), list = $(this).closest("ul").children("li");
					if(v == "") {    //特殊情况，过滤输入框中没有值的时候迭代所有的列表项并显示它们
						list.each(function(){
							if(this.className.indexOf("search") != -1) {return;}//不考虑过滤输入框所在的列表项
							$(this).text(this.innerText || this.textContent).show();
						});
					} else {
						list.each(function(){   //迭代列表，
							if(this.className.indexOf("search") != -1) {return;}  //不考虑过滤输入框所在的列表项
							var lv = $(this).text();   //列表的文本
							if(lv.indexOf(v) === -1) {   //不匹配过滤文本，就隐藏
								$(this).hide();
							} else {                 //匹配，把匹配的文本替换会含有标记的文本（红色）
								$(this).html(lv.replace(v, '<span class="hot">'+v+'</span>')).show();
							}
						});
					}
					
				});
				
				$(this).click(function(){   //当数据列表在显示时，如果点击了页面其它区域，则隐藏列表
					$(".dropdown ul:visible").hide();   
				});
				//加载数据，数据列表中的每一项是一个列表，为了模拟select，每个列表项目还包括一个自定义的属性 data-value,用于保存此列表项的值
				$("#load").click(function(){
					var p = $(".dropdown ul");
					var fragment = document.createDocumentFragment(), li;  //临时容器，为了避免多次添加引起页面高频率重绘
					for(var i=1, len=30;i<len;i++) {
						li = document.createElement("li");
						li.setAttribute("data-value", i);
						li.innerHTML = i;
						fragment.appendChild(li);
						//$('<li data-value="' + i + '">' + i + '</li>').appendTo(fragment);
					}
					p.append(fragment);  //将临时容器添加到无序列表里面，一次添加效率高
				});
			});

//点击新增按钮，显示折扣盒子的内容
$(document).ready(function(){
	$(".PromoBut").click(function(){
		$(".discBox").show();
	});
});
$(document).ready(function(){
	$(".Promoremove").click(function(){
		$(".discBox").hide();
	});
});
$(document).ready(function(){
	$(".Promoyes").click(function(){
		$(".discBox").hide();
	});
});

//折扣栏中Box2中下拉列表
$(document).ready(function(){
	$(".dBox2boxList").click(function(){
		$(".dBox2boxList input").css("background","#EEEEEE")
	});
});
//点击按钮，展开下拉列表
$(document).ready(function(){
	$(".dBox2boxOpen1").click(function(){
		$("#boxList1").toggle();
		$(".dBox2boxOpen1>img").toggle();
	});
});
$(document).ready(function(){
	$(".dBox2boxOpen6").click(function(){
		$("#boxList6").toggle();
		$(".dBox2boxOpen6>img").toggle();
	});
});
$(document).ready(function(){
	$(".dBox2boxOpen2").click(function(){
		$("#boxList2").toggle();
		$(".dBox2boxOpen2>img").toggle();
	});
});
$(document).ready(function(){
	$(".dBox2boxOpen3").click(function(){
		$("#boxList3").toggle();
		$(".dBox2boxOpen3>img").toggle();
	});
});
$(document).ready(function(){
	$(".dBox2boxOpen4").click(function(){
		$("#boxList4").toggle();
		$(".dBox2boxOpen4>img").toggle();
	});
});
$(document).ready(function(){
	$(".dBox2boxOpen5").click(function(){
		$("#boxList5").toggle();
		$(".dBox2boxOpen5>img").toggle();
	});
});

//点击新增按钮，显示优惠券（红包）盒子的内容
$(document).ready(function(){
	$(".CouponBtn").click(function(){
		$(".coupBox").show();
	});
});
$(document).ready(function(){
	$(".Coupremove").click(function(){
		$(".coupBox").hide();
	});
});
$(document).ready(function(){
	$(".Coupyes").click(function(){
		$(".coupBox").hide();
	});
});

//点击新增按钮，显示满X优惠盒子的内容
$(document).ready(function(){
	$(".reachBtn").click(function(){
		$(".reachBox").show();
	});
});
$(document).ready(function(){
	$(".reachremove").click(function(){
		$(".reachBox").hide();
	});
});
$(document).ready(function(){
	$(".reachyes").click(function(){
		$(".reachBox").hide();
	});
});
//点击新增按钮，显示赠送盒子的内容
$(document).ready(function(){
	$(".giveBtu").click(function(){
		$(".giveBox").show();
	});
});
$(document).ready(function(){
	$(".giveremove").click(function(){
		$(".giveBox").hide();
	});
});
$(document).ready(function(){
	$(".giveyes").click(function(){
		$(".giveBox").hide();
	});
});