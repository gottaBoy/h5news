$(function(){var n,a=["page","down","up"],l=ZZJK_adConfig,r={s:0,l:5,c:1,t:"asdf",sign:"asdf",math:Math.random().toString(36).slice(2),appKey:l[CHANNEL_NAME].appKey,appSecret:l[CHANNEL_NAME].appSecret,cid:"1557922176194341",cnt:"10",scene_type:"cs"},t="http://adapi.ydtad.com:8089/search/news/clistNew";!function(){if("object"!=typeof sessionStorage)return;try{sessionStorage.setItem("isStore",1),sessionStorage.removeItem("isStore")}catch(e){return alert("您正处于无痕模式浏览本站")}}();!function(){function n(e,t){r.c=t,sessionStorage.setItem("pagecount",e),sessionStorage.setItem("crateId",t)}$(".find_nav_list").css("left",sessionStorage.getItem("left")+"px"),$(".find_nav_list li").each(function(){if($(this).find("a").text()==sessionStorage.getItem("pagecount"))return $(".sideline").css({left:$(this).position().left+13}),$(".sideline").css({width:$(this).outerWidth()-26}),$(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur"),n(sessionStorage.getItem("pagecount"),$(this).find("a").attr("data-zzjkc-crate")),!1;$(".sideline").css({left:13}),$(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur")});var l=$(".find_nav_list li").first().width();$(".sideline").width(l-26),$(".find_nav_list li").on("click",function(){window.document.title=$(this).find("a").text(),l=$(this).width(),$(".sideline").stop(!0),$(".sideline").css({left:$(this).position().left+13}),$(".sideline").css({width:l-26}),$(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");var e,t=($(".find_nav").width()-l)/2,i=parseInt($(this).position().left);e=i<=t?0:t-i<=c-o?c-o:t-i,$(".find_nav_list").animate({left:e},300),sessionStorage.setItem("left",e);var s=$(this).find("a").text(),a=$(this).find("a").attr("data-zzjkc-crate");n(s,a),r.c=Number(a),d(r)});var o=$(".find_nav_list").width(),c=$(".find_nav_left").width();$(".find_nav_list").on("touchstart",function(e){var t=(e=e||window.event).originalEvent.targetTouches[0];x1=t.pageX,y1=t.pageY,ty_left=parseInt($(this).css("left"))}),$(".find_nav_list").on("touchmove",function(e){var t=(e=e||window.event).originalEvent.targetTouches[0],i=t.pageX,s=t.pageY;0<=ty_left+i-x1?$(this).css("left",0):ty_left+i-x1<=c-o?$(this).css("left",c-o):$(this).css("left",ty_left+i-x1),0<Math.abs(s-y1)&&e.preventDefault()})}();var s={showtips:function(e){console.log(e),$(".freshtip").html(e).show(),$(".freshtip").is(":hidden")||setTimeout(function(){$(".freshtip").hide()},1e3)},timestampToTime:function(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+(t.getDate()<10?"0"+t.getDate()+" ":t.getDate()+" ")+(t.getHours()<10?"0"+t.getHours()+":":t.getHours()+":")+(t.getMinutes()<10?"0"+t.getMinutes()+":":t.getMinutes()+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},mergeObj:function(e,t){var i={};for(var s in e)e.hasOwnProperty(s)&&(i[s]=e[s]);for(var a in t)t.hasOwnProperty(a)&&(i[a]=t[a]);return i},report:function(e,t){if((e=(e=e||"/img").replace(/^null/,"/img"))&&t){var i=document.createElement("img"),s=[];for(var a in t)(t[a]||0===t[a])&&s.push(a+"="+encodeURIComponent(t[a]));i.onload=i.onerror=function(){i=i.onload=i.onerror=null},i.src=e+(e.indexOf("?")<0?"?":"&")+s.join("&")}},clipImg:function(e){e.each(function(e,t){t.onload=function(){var e=this.width,t=this.height;t<e?this.classList.add("iMGAUTOheight"):e<=t?this.classList.add("iMGAUTOwidth"):(this.style.width="100%",this.style.height="100%")}})},chechData:function(e,t,i){if(sessionStorage.getItem("chechData")){var s=JSON.parse(sessionStorage.getItem("chechData")).data;t==a[2]&&s.push.apply(s,i),sessionStorage.setItem("chechData",JSON.stringify({key:e,data:t==a[0]?i:t==a[1]?i:s}))}else sessionStorage.setItem("chechData",JSON.stringify({key:e,data:i}))}},o={formatDate:function(e){var t=function(e){var t=e.split("");t.splice(4,0,"/"),t.splice(7,0,"/"),t.splice(10,0,"/"),t.splice(13,0,"/"),t.splice(16,0,"/");var i=t.join("").split("/");return new Date(i[0]+"/"+i[1]+"/"+i[2]).getTime()+3600*i[3]*1e3+60*i[4]*1e3+1e3*i[5]}(e),i=new Date(t),s=parseInt(Date.parse(new Date(t))/1e3),a=parseInt(Date.parse(new Date)/1e3),n=new Date,l=n.getFullYear(),o=parseInt(n.getMonth())+1,c=n.getDate(),r=parseInt(Date.parse(new Date(l+"/"+o+"/"+c+" 00:00:00"))/1e3),d=(n.getHours(),n.getMinutes(),r-86400),p="";if(s<d)p=i.getMonth()+"月"+i.getDate()+"日";else if(d<s&&s<r)p="昨天 "+("0"+i.getHours()).slice(-2)+":"+("0"+i.getMinutes()).slice(-2);else{var m=a-s;m<=60?p="刚刚":60<m&&m<=3600?p=parseInt(m/60)+"分钟前":3600<m&&(p=parseInt(m/3600)+"小时前")}return p},readAd:function(e,t,a){a=a||1;var n=(t=t.slice()).length,i=function(e){for(var t,i,s=e.length;s;)i=Math.floor(Math.random()*s--),t=e[s],e[s]=e[i],e[i]=t;return e.slice(0,5)}(i="21"==r.c?l[CHANNEL_NAME].priclist:l[CHANNEL_NAME].newsListAD);return e&&function(e,t,i){for(var s=0;s<n;s++)i[s]&&t.splice((a+1)*s,0,i[s])}(0,t,i),t},getdata:function(e,t,i,s){var a=this;$.ajax({url:e,type:"post",dataType:"jsonp",data:t,timeout:8e3,jsonp:"callback",success:function(e){200==e.code?s.call(a,e.newsEntityList):n.endSuccess()},error:function(e){n.endErr()}})},mistakeClick:function(){var i=l[CHANNEL_NAME].probability.newsList;if(1!=arguments.length)return!1;var s=arguments[0].dom;return s.each(function(e,t){$(t).is(".AD-box")&&Math.random()<=i&&0!==e&&($(s[e]).prev().append(t),t.style.opacity="0.001",t.style.position="absolute",t.style.top="0px",t.style.width="100%",s.splice(e,1))}),s},render:function(){var e=arguments[0],t=0,i="";arguments[1]||l.hasOwnProperty("isc")||p.getP()||(e=this.readAd(!0,e));var s=25<e.length;if(0<e.length)for(;t<e.length;t++)"图片"!=e[t].category&&e[t].pics&&e[t].pics.length<3?i+=this.styleimg1(e[t],t):"图片"!=e[t].category&&e[t].pics&&3<=e[t].pics.length&&!e[t].type?i+=this.styleimg3(e[t],t):"图片"==e[t].category?i+=this.pricImg(e[t],t):(e[t].type="ad")&&(l.hasOwnProperty("isc")||p.getP()||(i+=this.adStyle(e[t],t,s)));try{var a=l[CHANNEL_NAME].probability.newsList}catch(e){console.warn(e);a=""}return a&&"{}"!=typeof a?{dom:this.mistakeClick.call(this,{dom:$(i),data:e}),data:e}:{dom:$(i),data:e}},styleimg3:function(e,t){return'<li class="n-item will-active news-item splitter container newsBox"><a tagid="'+t+'"                    href="'+("http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+e.id+"&staticFile="+CHANNEL_NAME+"File")+'"                    class="n-item-link n-multipic" title="'+e.title+'">                    <div class="n-title element"><span>'+e.title+'</span></div>                    <div class="n-img-wrapper">                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+e.pics[0]+'">                            </div>                        </div>                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+e.pics[1]+'">                            </div>                        </div>                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+e.pics[2]+'">                            </div>                        </div>                    </div>                    <div class="n-desc"><span class="info element"><span>'+("undefined"==e.source?"":e.source)+'</span>                            <span class="n-ptime"></span><span style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(e.createdatemmsshh)+'</span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                    </div>                </a>            </li>'},styleimg1:function(e,t){return'<li class="n-item will-active news-item splitter container single-pic-item newsBox"><a tagid="'+t+'"                     href="'+("http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+e.id+"&staticFile="+CHANNEL_NAME+"File")+'"                    class="n-item-link n-single-pic" title="'+e.title+'">                    <div class="img fixed-size size-3-2" data-img-width="1/3">                        <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                              src="" data-src="'+e.pics[0]+'">                        </div>                    </div>                    <div class="n-title element"><span>'+e.title+'</span></div>                    <div class="n-desc"><span class="info element"><span>'+("undefined"==e.source?"":e.source)+'</span>                            <span class="n-ptime"></span><span style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(e.createdatemmsshh)+'</span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                    </div>                </a>  </li>'},pricImg:function(e,t){return'<li class="n-item container will-active splitter image-item big-pic-item"><a                    href="'+("http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail_img.html?id="+e.id+"&staticFile="+CHANNEL_NAME+"File")+'?type=pic"  class="n-item-link"                    title="'+e.title+'" tagid="'+t+'">                    <div class="n-title element"><span>'+e.title+'</span></div>                    <div class="image-img img fixed-size size-2-1">                        <div class="content"  data-image-count="'+e.imageCount+'"><img class="thumbnail-box"                                src="" data-src="'+e.pics[0]+'">                        </div>                    </div>                    <div class="n-desc"><span class="info element"><span style="color: #f96363;">'+("undefined"==e.source?"":e.source)+'</span><span class="n-ptime" style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(e.createdatemmsshh)+'</span></span>                        <div class="cash element" style="display:none">                            <div>已发放:2.9元</div>                            <div>阅读赚钱</div>                        </div>                    </div>                </a></li>'},adStyle:function(e,t,i){var s=e.s+"_"+Math.random().toString(16).slice(2);return e.domid=s,'<li class="n-item will-active news-item splitter container AD-box"><a                    href="javascript:;"                    class="n-item-link n-multipic" tagid="'+t+'">                    <div class="adbox" style="width:100%;position:relative;height:'+("21"==r.c?"220px":"105px")+'" data-ZZJK-s='+e.s+'><div id="'+s+'">'+c.init(e,i)+'</div></div>                     <div class="n-desc"><span class="info element"><span></span>                            <span class="n-ptime">刚刚</span></span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                    </div>     </a></li>'}};function d(e){e.s=0,$("#mescroll .news-list").empty(),n.showUpScroll(),o.getdata(t,e,a[0],function(e){p.setDown();var t=this.render.apply(this,[e]);s.chechData(r.c,a[0],t.data),s.clipImg(t.dom.find("img")),$(".ZZJK_L .news-list").prepend(t.dom),n.endUpScroll(),n.lazyLoad(200)})}var c=new ZZJKAD,p=new ZZJK_R;ZZJK_adConfig.hasOwnProperty("isc")||$("#pu-widget .linkAD").attr("href",l[CHANNEL_NAME].linkAD.newslist),sessionStorage.getItem("crateId")&&""!=sessionStorage.getItem("crateId")||(sessionStorage.setItem("crateId",1),r.c=1),n=new MeScroll("mescroll",{down:{auto:!1,callback:function(){var i;r.s+=5,i=r,o.getdata(t,i,a[1],function(e){p.setDown(),$("#mescroll .news-list").empty();var t=this.render.apply(this,[e]);s.chechData(i.c,a[1],t.data),s.clipImg(t.dom.find("img")),$(".ZZJK_L .news-list").prepend(t.dom),n.lazyLoad(200),n.endSuccess(),s.showtips("为你更新"+t.data.length+"条内容")})}},up:{auto:!1,isBounce:!1,callback:function(e){var i;r.s+=5,i=r,o.getdata(t,i,a[2],function(e){p.setUp();var t=this.render.apply(this,[e]);s.chechData(i.c,a[2],t.data),s.clipImg(t.dom.find("img")),$(".ZZJK_L .news-list").append(t.dom),n.lazyLoad(200),n.endSuccess()})},offset:500,lazyLoad:{use:!0,attr:"data-src",offset:300},onScroll:function(e){100<e.preScrollY?$(".scroll-top .icon-backTop").show():$(".scroll-top .icon-backTop").hide()}},htmlNodata:'<p class="upwarp-nodata">-- 无更多相关了 --</p>',scrollbar:{use:!0,barClass:"mescroll-bar"}}),sessionStorage.getItem("chechData")?function(){r.c=sessionStorage.getItem("crateId");var e=o.render.apply(o,[JSON.parse(sessionStorage.getItem("chechData")).data,!0]);s.clipImg(e.dom.find("img")),$(".ZZJK_L .news-list").append(e.dom),n.lazyLoad(200),sessionStorage.getItem("scrollTop")&&1<Number(sessionStorage.getItem("scrollTop"))?$(".mescroll").scrollTop(sessionStorage.getItem("scrollTop")):$(".mescroll").scrollTop(1)}():d(r),$("#mescroll .news-list").on("click","li a",function(){sessionStorage.setItem("scrollTop",$(".mescroll").scrollTop())}),window.onbeforeunload=function(){sessionStorage.setItem("scrollTop",$(".mescroll").scrollTop())}});