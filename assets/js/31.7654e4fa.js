(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{599:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),t("p",[s._v("nginx将ip配置成https，如：https://192.168.1.1/，以及nginx.conf中proxy_pass转发的配置记录。")])]),s._v(" "),t("h2",{attrs:{id:"将ip配置https"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将ip配置https"}},[s._v("#")]),s._v(" 将ip配置https")]),s._v(" "),t("div",{staticClass:"language-linux line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('nginx: [emerg] no "ssl_certificate" is defined for the "listen ... ssl" directive in /usr/local/nginx/conf/conf.d/upstream.conf:14\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("意思是ssl_certificate没有配置，可是ssl_certificate和ssl_certificate_key都已经配置，网上搜索ssl_certificate必须在http段中先定义， 在server段才配置ssl_certificate已经来不及了， 检查我的nginx配置，ssl_certificate确实只在server段定义，而在http段未定义，加到http段即可。")])]),s._v(" "),t("li",[t("p",[s._v("如果是你域名的话，不需要在http段中定义了，但是ip使用ssl必须在http中配置")])])]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("nginx的配置文件中nginx.conf中加入")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v("  xxx.pem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" xx.key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"proxy-pass转发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proxy-pass转发"}},[s._v("#")]),s._v(" proxy_pass转发")]),s._v(" "),t("p",[s._v("参考 "),t("a",{attrs:{href:"https://www.zifangsky.cn/917.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("nginx的proxy_pass路径转发规则浅析（末尾/问题） | zifangsky的个人博客"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("说白了就是个/，注意这个/，一个/花费了我半个小时。")]),s._v(" "),t("p",[s._v("nginx做反向代理，这边使用的是转发，不是重定向哦")]),s._v(" "),t("p",[s._v("转发：用户看不到真实的地址")]),s._v(" "),t("p",[s._v("重定向：用户访问a链接，跳转到b链接，用户可以看到真实的链接")]),s._v(" "),t("h2",{attrs:{id:"location匹配路径末尾没有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#location匹配路径末尾没有"}},[s._v("#")]),s._v(" location匹配路径末尾没有 /")]),s._v(" "),t("p",[s._v("此时proxy_pass后面的路径必须拼接location的路径：")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v(" "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /sta")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://192.168.1.31/sta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("外面访问：http://192.168.1.30/sta/sta1.html")]),s._v(" "),t("li",[s._v("相当于访问：http://192.168.1.31/sta/sta1.html")])]),s._v(" "),t("h2",{attrs:{id:"location匹配路径末尾有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#location匹配路径末尾有"}},[s._v("#")]),s._v(" location匹配路径末尾有 /")]),s._v(" "),t("h3",{attrs:{id:"_1-proxy-pass后面的路径只有域名且最后没有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-proxy-pass后面的路径只有域名且最后没有"}},[s._v("#")]),s._v(" 1.proxy_pass后面的路径只有域名且最后没有 /")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /sta/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://192.168.1.31")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("外面访问：http://192.168.1.30/sta/sta1.html")]),s._v(" "),t("li",[s._v("相当于访问：http://192.168.1.31/sta/sta1.html")])]),s._v(" "),t("h3",{attrs:{id:"_2-proxy-pass后面的路径只有域名同时最后有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-proxy-pass后面的路径只有域名同时最后有"}},[s._v("#")]),s._v(" 2.proxy_pass后面的路径只有域名同时最后有 /")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /sta/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://192.168.1.31/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("外面访问：http://192.168.1.30/sta/sta1.html")]),s._v(" "),t("li",[s._v("相当于访问：http://192.168.1.31/sta1.html")])]),s._v(" "),t("h3",{attrs:{id:"_3-proxy-pass后面的路径还有其他路径但是最后没有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-proxy-pass后面的路径还有其他路径但是最后没有"}},[s._v("#")]),s._v(" 3.proxy_pass后面的路径还有其他路径但是最后没有 /")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /sta/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://192.168.1.31/abc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("外面访问：http://192.168.1.30/sta/sta1.html")]),s._v(" "),t("li",[s._v("相当于访问：http://192.168.1.31/abcsta1.html")])]),s._v(" "),t("h3",{attrs:{id:"_4-proxy-pass后面的路径还有其他路径同时最后有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-proxy-pass后面的路径还有其他路径同时最后有"}},[s._v("#")]),s._v(" 4.proxy_pass后面的路径还有其他路径同时最后有 /")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /sta/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://192.168.1.31/abc/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("外面访问：http://192.168.1.30/sta/sta1.html")]),s._v(" "),t("li",[s._v("相当于访问：http://192.168.1.31/abc/sta1.html")])]),s._v(" "),t("p",[s._v("附：在nginx上面配置APK文件下载路径：")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ^~ /h5/appdownload/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_redirect off;")]),s._v("\n\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_set_header        Host $host;")]),s._v("\n\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_set_header        X-Real-IP $remote_addr;")]),s._v("\n\t "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;")]),s._v("\n\t  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://192.168.1.31/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t  "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v("   Cookie "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_cookie")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("外面访问：http://test.com/h5/appdownload/Demo_1.0.0.apk")]),s._v(" "),t("li",[s._v("相当于访问：http://192.168.1.31/Demo_1.0.0.apk")])])])}),[],!1,null,null,null);t.default=e.exports}}]);