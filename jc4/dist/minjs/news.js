!function(r,d,e){var n,a=["page","down","up"],l=ZZJK_adConfig,p={s:0,l:10,c:1,t:"asdf",sign:"asdf",math:Math.random().toString(36).slice(2),appKey:l[CHANNEL_NAME].appKey,appSecret:l[CHANNEL_NAME].appSecret,cid:"1557922176194341",cnt:"10",scene_type:"cs"},t="http://adapi.ydtad.com:8089/search/news/clistNew";!function(){if("object"!=typeof sessionStorage)return;try{sessionStorage.setItem("isStore",1),sessionStorage.removeItem("isStore")}catch(e){return alert("您正处于无痕模式浏览本站")}}();!function(){function n(e,t){p.c=t,sessionStorage.setItem("pagecount",e),sessionStorage.setItem("crateId",t)}d(".find_nav_list").css("left",sessionStorage.getItem("left")+"px"),d(".find_nav_list li").each(function(){if(d(this).find("a").text()==sessionStorage.getItem("pagecount"))return d(".sideline").css({left:d(this).position().left+13}),d(".sideline").css({width:d(this).outerWidth()-26}),d(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur"),n(sessionStorage.getItem("pagecount"),d(this).find("a").attr("data-zzjkc-crate")),!1;d(".sideline").css({left:13}),d(".find_nav_list li").eq(0).addClass("find_nav_cur").siblings().removeClass("find_nav_cur")});var l=d(".find_nav_list li").first().width();d(".sideline").width(l-26),d(".find_nav_list li").on("click",function(){r.document.title=d(this).find("a").text(),l=d(this).width(),d(".sideline").stop(!0),d(".sideline").css({left:d(this).position().left+13}),d(".sideline").css({width:l-26}),d(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");var e,t=(d(".find_nav").width()-l)/2,s=parseInt(d(this).position().left);e=s<=t?0:t-s<=c-o?c-o:t-s,d(".find_nav_list").animate({left:e},300),sessionStorage.setItem("left",e);var i=d(this).find("a").text(),a=d(this).find("a").attr("data-zzjkc-crate");n(i,a),p.c=Number(a),m(p)});var o=d(".find_nav_list").width(),c=d(".find_nav_left").width();d(".find_nav_list").on("touchstart",function(e){var t=(e=e||r.event).originalEvent.targetTouches[0];x1=t.pageX,y1=t.pageY,ty_left=parseInt(d(this).css("left"))}),d(".find_nav_list").on("touchmove",function(e){var t=(e=e||r.event).originalEvent.targetTouches[0],s=t.pageX,i=t.pageY;0<=ty_left+s-x1?d(this).css("left",0):ty_left+s-x1<=c-o?d(this).css("left",c-o):d(this).css("left",ty_left+s-x1),0<Math.abs(i-y1)&&e.preventDefault()})}();var i={showtips:function(e){console.log(e),d(".freshtip").html(e).show(),d(".freshtip").is(":hidden")||setTimeout(function(){d(".freshtip").hide()},1e3)},timestampToTime:function(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+(t.getDate()<10?"0"+t.getDate()+" ":t.getDate()+" ")+(t.getHours()<10?"0"+t.getHours()+":":t.getHours()+":")+(t.getMinutes()<10?"0"+t.getMinutes()+":":t.getMinutes()+":")+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},mergeObj:function(e,t){var s={};for(var i in e)e.hasOwnProperty(i)&&(s[i]=e[i]);for(var a in t)t.hasOwnProperty(a)&&(s[a]=t[a]);return s},report:function(e,t){if((e=(e=e||"/img").replace(/^null/,"/img"))&&t){var s=document.createElement("img"),i=[];for(var a in t)(t[a]||0===t[a])&&i.push(a+"="+encodeURIComponent(t[a]));s.onload=s.onerror=function(){s=s.onload=s.onerror=null},s.src=e+(e.indexOf("?")<0?"?":"&")+i.join("&")}},clipImg:function(e){e.each(function(e,t){t.onload=function(){var e=this.width,t=this.height;t<e?this.classList.add("iMGAUTOheight"):e<=t?this.classList.add("iMGAUTOwidth"):(this.style.width="100%",this.style.height="100%")}})},chechData:function(e,t,s){if(sessionStorage.getItem("chechData")){var i=JSON.parse(sessionStorage.getItem("chechData")).data;t==a[2]&&i.push.apply(i,s),sessionStorage.setItem("chechData",JSON.stringify({key:e,data:t==a[0]?s:t==a[1]?s:i}))}else sessionStorage.setItem("chechData",JSON.stringify({key:e,data:s}))}},o={formatDate:function(e){var t=function(e){var t=e.split("");t.splice(4,0,"/"),t.splice(7,0,"/"),t.splice(10,0,"/"),t.splice(13,0,"/"),t.splice(16,0,"/");var s=t.join("").split("/");return new Date(s[0]+"/"+s[1]+"/"+s[2]).getTime()+3600*s[3]*1e3+60*s[4]*1e3+1e3*s[5]}(e),s=new Date(t),i=parseInt(Date.parse(new Date(t))/1e3),a=parseInt(Date.parse(new Date)/1e3),n=new Date,l=n.getFullYear(),o=parseInt(n.getMonth())+1,c=n.getDate(),r=parseInt(Date.parse(new Date(l+"/"+o+"/"+c+" 00:00:00"))/1e3),d=(n.getHours(),n.getMinutes(),r-86400),p="";if(i<d)p=s.getMonth()+"月"+s.getDate()+"日";else if(d<i&&i<r)p="昨天 "+("0"+s.getHours()).slice(-2)+":"+("0"+s.getMinutes()).slice(-2);else{var m=a-i;m<=60?p="刚刚":60<m&&m<=3600?p=parseInt(m/60)+"分前":3600<m&&(p=parseInt(m/3600)+"小时前")}return p},readAd:function(e,t,a){a=a||1;var n=(t=t.slice()).length,s="21"==p.c?l[CHANNEL_NAME].priclist:l[CHANNEL_NAME].newsListAD;return s=s.sort(function(){return.5-Math.random()}).slice(0,5),e&&function(e,t,s){for(var i=0;i<n;i++)s[i]&&t.splice((a+1)*i,0,s[i])}(0,t,s),t},getdata:function(e,t,s,i){var a=this;d.ajax({url:e,type:"post",dataType:"jsonp",data:t,timeout:8e3,jsonp:"callback",success:function(e){200==e.code?i.call(a,e.newsEntityList.slice(0,6)):n.endSuccess()},error:function(e){n.endErr()}})},mistakeClick:function(){var s=l[CHANNEL_NAME].probability.newsList;if(1!=arguments.length)return!1;var i=arguments[0].dom;return i.each(function(e,t){d(t).is(".AD-box")&&Math.random()<=s&&0!==e&&(d(i[e]).prev().append(t),t.style.opacity="0.001",t.style.position="absolute",t.style.top="0px",t.style.width="100%",i.splice(e,1),console.log(e,"标识"))}),i},render:function(){var e=arguments[0],t=0,s="";console.log(e),arguments[1]||(e=this.readAd(!0,e));var i=15<e.length;if(0<e.length)for(;t<e.length;t++)"图片"!=e[t].category&&e[t].pics&&e[t].pics.length<3?s+=this.styleimg1(e[t],t):"图片"!=e[t].category&&e[t].pics&&3<=e[t].pics.length&&!e[t].type?s+=this.styleimg3(e[t],t):"图片"==e[t].category?s+=this.styleimg1(e[e.length-1],t):(e[t].type="ad")&&(s+=this.adStyle(e[t],t,i));try{var a=l[CHANNEL_NAME].probability.newsList}catch(e){console.warn(e);a=""}return a&&"{}"!=typeof a?{dom:this.mistakeClick.call(this,{dom:d(s),data:e}),data:e}:{dom:d(s),data:e}},styleimg3:function(e,t){return'<li class="n-item will-active news-item splitter container newsBox"><a tagid="'+t+'"                    href="'+("http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+e.id+"&staticFile="+CHANNEL_NAME+"File")+'"                    class="n-item-link n-multipic" title="'+e.title+'">                    <div class="n-title element"><span>'+e.title+'</span></div>                    <div class="n-img-wrapper">                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+e.pics[0]+'">                            </div>                        </div>                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+e.pics[1]+'">                            </div>                        </div>                        <div class="img fixed-size size-3-2" data-img-width="1/3">                            <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                                  src=""  data-src="'+e.pics[2]+'">                            </div>                        </div>                    </div>                    <div class="n-desc"><span class="info element"><span>'+("undefined"==e.source?"":e.source)+'</span>                            <span class="n-ptime"></span><span style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(e.createdatemmsshh)+'</span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                    </div>                </a>            </li>'},styleimg1:function(e,t){return'<li class="n-item will-active news-item splitter container single-pic-item newsBox"><a tagid="'+t+'"                     href="'+("http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail.html?id="+e.id+"&staticFile="+CHANNEL_NAME+"File")+'"                    class="n-item-link n-single-pic" title="'+e.title+'">                    <div class="img fixed-size size-3-2" data-img-width="1/3">                        <div class="content" style="overflow:hidden;"><img class="thumbnail-box mescroll-lazy-in"                              src="" data-src="'+e.pics[0]+'">                        </div>                    </div>                    <div class="n-title element"><span>'+e.title+'</span></div>                    <div class="n-desc"><span class="info element"><span>'+("undefined"==e.source?"":e.source)+'</span>                            <span class="n-ptime"></span><span style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(e.createdatemmsshh)+'</span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                    </div>                </a>  </li>'},pricImg:function(e,t){return'<li class="n-item container will-active splitter image-item big-pic-item"><a                    href="'+("http://news.zizhengjiankang.com/"+CHANNEL_NAME+"File/webview/detail_img.html?id="+e.id+"&staticFile="+CHANNEL_NAME+"File")+'?type=pic"  class="n-item-link"                    title="'+e.title+'" tagid="'+t+'">                    <div class="n-title element"><span>'+e.title+'</span></div>                    <div class="image-img img fixed-size size-2-1">                        <div class="content"  data-image-count="'+e.imageCount+'"><img class="thumbnail-box"                                src="" data-src="'+e.pics[0]+'">                        </div>                    </div>                    <div class="n-desc"><span class="info element"><span style="color: #f96363;">'+("undefined"==e.source?"":e.source)+'</span><span class="n-ptime" style="margin-left:5px;display:inline-block;transform: scale(.9);">'+this.formatDate(e.createdatemmsshh)+'</span></span>                        <div class="cash element" style="display:none">                            <div>已发放:2.9元</div>                            <div>阅读赚钱</div>                        </div>                    </div>                </a></li>'},adStyle:function(e,t,s){var i=e.s+"_"+Math.random();return e.domid=i,'<li class="n-item will-active news-item splitter container AD-box"><a                    href="javascript:;"                    class="n-item-link n-multipic" tagid="'+t+'">                    <div class="adbox" style="width:100%;position:relative;height:'+("21"==p.c?"220px":"105px")+'" data-ZZJK-s='+e.s+'><div id="'+i+'">'+c.init(e,s)+'</div></div>                     <div class="n-desc"><span class="info element"><span></span>                            <span class="n-ptime">刚刚</span></span>                        <div class="cash element" style="display:none">                            <div>已发放:10元</div>                            <div>阅读赚钱</div>                        </div>                    </div>     </a></li>'}};function m(e){e.s=0,d("#mescroll .news-list").empty(),n.showUpScroll(),o.getdata(t,e,a[0],function(e){var t=this.render.apply(this,[e]);i.chechData(p.c,a[0],t.data),i.clipImg(t.dom.find("img")),d(".ZZJK_L .news-list").prepend(t.dom),n.endUpScroll(),n.lazyLoad(200)})}var c=new ZZJKAD;d("#pu-widget .linkAD").attr("href",l[CHANNEL_NAME].linkAD.newslist),sessionStorage.getItem("crateId")&&""!=sessionStorage.getItem("crateId")||(sessionStorage.setItem("crateId",1),p.c=1),n=new MeScroll("mescroll",{down:{auto:!1,callback:function(){var s;p.s+=5,s=p,o.getdata(t,s,a[1],function(e){d("#mescroll .news-list").empty();var t=this.render.apply(this,[e]);i.chechData(s.c,a[1],t.data),i.clipImg(t.dom.find("img")),d(".ZZJK_L .news-list").prepend(t.dom),n.lazyLoad(200),n.endSuccess(),i.showtips("为你更新"+t.data.length+"条内容")})}},up:{auto:!1,isBounce:!1,callback:function(e){var s;p.s+=5,s=p,o.getdata(t,s,a[2],function(e){var t=this.render.apply(this,[e]);i.chechData(s.c,a[2],t.data),i.clipImg(t.dom.find("img")),d(".ZZJK_L .news-list").append(t.dom),n.lazyLoad(200),n.endSuccess()})},offset:500,lazyLoad:{use:!0,attr:"data-src",offset:300},onScroll:function(e){100<e.preScrollY?d(".scroll-top .icon-backTop").show():d(".scroll-top .icon-backTop").hide()}},htmlNodata:'<p class="upwarp-nodata">-- 无更多相关了 --</p>',scrollbar:{use:!0,barClass:"mescroll-bar"}}),sessionStorage.getItem("chechData")?function(){p.c=sessionStorage.getItem("crateId");var e=o.render.apply(o,[JSON.parse(sessionStorage.getItem("chechData")).data,!0]);i.clipImg(e.dom.find("img")),d(".ZZJK_L .news-list").append(e.dom),n.lazyLoad(200),sessionStorage.getItem("scrollTop")&&1<Number(sessionStorage.getItem("scrollTop"))?d(".mescroll").scrollTop(sessionStorage.getItem("scrollTop")):d(".mescroll").scrollTop(1)}():m(p),d("#mescroll .news-list").on("click","li a",function(){sessionStorage.setItem("scrollTop",d(".mescroll").scrollTop())}),r.onbeforeunload=function(){sessionStorage.setItem("scrollTop",d(".mescroll").scrollTop())}}(window,jQuery);