(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},7559:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>f,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>u}),r(3395),r(3658),r(5866);var n=r(3191),i=r(8716),s=r(7922),a=r.n(s),o=r(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3395)),"D:\\sweetdesign\\deepgram\\frontend\\src\\app\\page.jsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,3658)),"D:\\sweetdesign\\deepgram\\frontend\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\sweetdesign\\deepgram\\frontend\\src\\app\\page.jsx"],d="/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7306:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1664:()=>{},9904:(e,t,r)=>{Promise.resolve().then(r.bind(r,8690))},2481:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(1174),i=r(8374),s=r(326),a=i._(r(7577)),o=n._(r(962)),l=n._(r(815)),u=r(3078),c=r(5248),d=r(1206);r(576);let f=r(131),p=n._(r(6820)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,s,a){let o=null==e?void 0:e.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){let[t,r]=a.version.split(".",2),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}globalThis.__NEXT_IMAGE_IMPORTED=!0;let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:o,width:l,decoding:u,className:c,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:v,fill:b,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:w,setShowAltText:_,sizesInput:j,onLoad:S,onError:P,...C}=e;return(0,s.jsx)("img",{...C,...h(f),loading:m,width:l,height:o,decoding:u,"data-nimg":b?"fill":"1",className:c,style:d,sizes:i,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(P&&(e.src=e.src),e.complete&&g(e,p,y,x,w,v,j))},[r,p,y,x,w,P,v,j,t]),onLoad:e=>{g(e.currentTarget,p,y,x,w,v,j)},onError:e=>{_(!0),"empty"!==p&&w(!0),P&&P(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&o.default.preload?(o.default.preload(r.src,n),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(d.ImageConfigContext),i=(0,a.useMemo)(()=>{let e=m||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:o,onLoadingComplete:l}=e,g=(0,a.useRef)(o);(0,a.useEffect)(()=>{g.current=o},[o]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[y,x]=(0,a.useState)(!1),[w,_]=(0,a.useState)(!1),{props:j,meta:S}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:y,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v,{...j,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:_,sizesInput:e.sizes,ref:t}),S.priority?(0,s.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3484:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.AmpContext},1157:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.HeadManagerContext},1206:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.ImageConfigContext},131:(e,t,r)=>{"use strict";e.exports=r(1616).vendored.contexts.RouterContext},8710:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},3078:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return o}}),r(576);let n=r(380),i=r(5248);function s(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function o(e,t){var r;let o,l,u,{src:c,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:v,height:b,fill:y=!1,style:x,overrideSrc:w,onLoad:_,onLoadingComplete:j,placeholder:S="empty",blurDataURL:P,fetchPriority:C,layout:M,objectFit:E,objectPosition:O,lazyBoundary:R,lazyRoot:z,...A}=e,{imgConf:I,showAltText:T,blurComplete:k,defaultLoader:N}=t,D=I||i.imageConfigDefault;if("allSizes"in D)o=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t);o={...D,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=A.loader||N;delete A.loader,delete A.srcSet;let U="__next_img_default"in L;if(U){if("custom"===o.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(M){"fill"===M&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(x={...x,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!d&&(d=t)}let q="",G=a(v),B=a(b);if("object"==typeof(r=c)&&(s(r)||void 0!==r.src)){let e=s(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,u=e.blurHeight,P=P||e.blurDataURL,q=e.src,!y){if(G||B){if(G&&!B){let t=G/e.width;B=Math.round(e.height*t)}else if(!G&&B){let t=B/e.height;G=Math.round(e.width*t)}}else G=e.width,B=e.height}}let H=!p&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:q)||c.startsWith("data:")||c.startsWith("blob:"))&&(f=!0,H=!1),o.unoptimized&&(f=!0),U&&c.endsWith(".svg")&&!o.dangerouslyAllowSVG&&(f=!0),p&&(C="high");let W=a(h),F=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:O}:{},T?{}:{color:"transparent"},x),V=k||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:B,blurWidth:l,blurHeight:u,blurDataURL:P||"",objectFit:F.objectFit})+'")':'url("'+S+'")',$=V?{backgroundSize:F.objectFit||"cover",backgroundPosition:F.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:a,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,n)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:o({config:t,src:r,quality:s,width:l[c]})}}({config:o,src:c,unoptimized:f,width:G,quality:W,sizes:d,loader:L});return{props:{...A,loading:H?"lazy":m,fetchPriority:C,width:G,height:B,decoding:"async",className:g,style:{...F,...$},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:y}}}},815:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return d}});let n=r(1174),i=r(8374),s=r(326),a=i._(r(7577)),o=n._(r(8003)),l=r(3484),u=r(1157),c=r(8710);function d(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(576);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(f,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let s=!0,a=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){a=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?s=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,a.useContext)(l.AmpStateContext),n=(0,a.useContext)(u.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},380:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:a}=e,o=n?40*n:t,l=i?40*i:r,u=o&&l?"viewBox='0 0 "+o+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5248:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},9029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return o}});let n=r(1174),i=r(3078),s=r(2481),a=n._(r(6820));function o(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=s.Image},6820:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},8003:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(7577),i=()=>{},s=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),i(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),i(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},8690:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(326),i=r(7577),s=r(9029),a=r.n(s);let o=function(e,t){switch(t.type){case"reset":return{messages:[],finalTranscripts:[],interimTranscript:""};case"transcript_interim":return{...e,interimTranscript:t.content};case"transcript_final":return{...e,finalTranscripts:[...e.finalTranscripts,t.content],interimTranscript:""};case"assistant":{let r=[];return e.finalTranscripts.length>0&&r.push({role:"user",content:e.finalTranscripts.join(" ")}),r.push({role:"assistant",content:t.content}),{...e,messages:[...e.messages,...r],finalTranscripts:[],interimTranscript:""}}default:return e}},l={src:"/_next/static/media/mic.fcf852fd.svg",height:24,width:24,blurWidth:0,blurHeight:0},u={src:"/_next/static/media/mic-off.96b2642c.svg",height:24,width:24,blurWidth:0,blurHeight:0},c={messages:[],finalTranscripts:[],interimTranscript:""},d=function(){let[e,t]=(0,i.useReducer)(o,c),[r,s]=(0,i.useState)(!1),[d,f]=(0,i.useState)(!1),p=(0,i.useRef)(null),m=(0,i.useRef)(null),g=(0,i.useRef)(null),h=(0,i.useRef)(null),v=(0,i.useRef)(null),b=(0,i.useRef)([]),y=(0,i.useRef)(null);async function x(){let e=await navigator.mediaDevices.getUserMedia({audio:!0});m.current=new MediaRecorder(e),m.current.addEventListener("dataavailable",e=>{e.data.size>0&&p.current.readyState==WebSocket.OPEN&&p.current.send(e.data)}),m.current.start(250)}async function w(){t({type:"reset"});try{p.current=new WebSocket("wss://ai-groq-deepgram.onrender.com/listen"),p.current.binaryType="arraybuffer",p.current.onmessage=e=>{if(e.data instanceof ArrayBuffer){var r;r=e.data,b.current.push(new Uint8Array(r)),h.current&&!h.current.updating&&h.current.appendBuffer(b.current.shift())}else!function(e){let r=JSON.parse(e);"finish"===r.type?_():("transcript_final"===r.type&&v.current.readyState===HTMLMediaElement.HAVE_ENOUGH_DATA&&function(){b.current=[];let e=h.current.buffered;e.length>0&&(h.current.updating&&h.current.abort(),v.current.currentTime=e.end(e.length-1))}(),t(r))}(e.data)},p.current.onclose=()=>{_()},await x(),function(){if(g.current="MediaSource"in window?new MediaSource:"ManagedMediaSource"in window?new ManagedMediaSource:(console.log("No MediaSource API available"),null),!g.current)return;g.current.addEventListener("sourceopen",()=>{MediaSource.isTypeSupported("audio/mpeg")&&(h.current=g.current.addSourceBuffer("audio/mpeg"),h.current.addEventListener("updateend",()=>{b.current.length>0&&!h.current.updating&&h.current.appendBuffer(b.current.shift())}))});let e=URL.createObjectURL(g.current);v.current=new Audio(e),v.current.play()}(),s(!0),f(!0)}catch(e){console.log("Error starting conversation:",e),_()}}function _(){p.current&&p.current.close(),m.current&&m.current.stream&&(m.current.stop(),m.current.stream.getTracks().forEach(e=>e.stop())),v.current&&(v.current.pause(),URL.revokeObjectURL(v.current.src),v.current=null),g.current&&(h.current&&(g.current.removeSourceBuffer(h.current),h.current=null),g.current=null),b.current=[],s(!1),f(!1)}let j=[...e.finalTranscripts,e.interimTranscript].join(" ");return(0,n.jsxs)("div",{className:"flex flex-col h-svh pt-14 pb-4",children:[(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[n.jsx("div",{className:`wave ${r?"running":""}`}),n.jsx("p",{className:"mt-14 text-[13px] text-primary-orange",children:r?'You can also end the conversation by saying "bye" or "goodbye"':"Click here to start a voice conversation with the assistant"}),(0,n.jsxs)("div",{className:"flex items-center mt-3 gap-6",children:[n.jsx("button",{className:"w-48 border border-primary-orange text-primary-orange font-semibold px-4 py-2 rounded-2xl hover:bg-primary-orange/5",onClick:r?_:w,children:r?"End conversation":"Start conversation"}),n.jsx("button",{className:"h-9 w-9 flex justify-center items-center bg-primary-orange rounded-full shadow-lg hover:opacity-70 disabled:opacity-70",onClick:function(){d?m.current.pause():m.current.resume(),f(!d)},disabled:!r,children:n.jsx(a(),{src:d?l:u,height:21,width:21,alt:"microphone"})})]})]}),n.jsx("div",{className:"w-full max-w-[600px] mt-6 mx-auto overflow-y-auto",children:(0,n.jsxs)("div",{className:"flex flex-col items-start p-4 rounded-lg space-y-3",children:[e.messages.map(({role:e,content:t},r)=>n.jsx("div",{className:"user"===e?"user-bubble":"assistant-bubble",children:t},r)),j&&n.jsx("div",{className:"user-bubble",children:j}),n.jsx("div",{ref:y})]})})]})}},3658:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>a});var n=r(9510),i=r(988),s=r.n(i);r(186);let a={title:"Voice assistant"};function o({children:e}){return n.jsx("html",{lang:"en",className:s().variable,children:n.jsx("body",{children:e})})}},3395:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>s,default:()=>o});var n=r(8570);let i=(0,n.createProxy)(String.raw`D:\sweetdesign\deepgram\frontend\src\app\page.jsx`),{__esModule:s,$$typeof:a}=i;i.default;let o=(0,n.createProxy)(String.raw`D:\sweetdesign\deepgram\frontend\src\app\page.jsx#default`)},186:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[271],()=>r(7559));module.exports=n})();