"use strict";(()=>{var g=JSON.parse('{"github":{"repository":"chatkristen/blogger-pwa","branch":"main"},"pwa":{"oneSignalEnabled":true,"oneSignalSDK":"https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js","oneSignalConfig":{"appId":"d56abbf2-6dd3-4a00-93f2-c633bb99b3d0","allowLocalhostAsSecureOrigin":true},"logs":true,"serviceWorker":{"source":"/app/serviceworker.js","scope":"/"}},"build":{"hash":"PdeIBcCkCPDUbWnXtBcwq"}}');var l="IS_LAZIED",d=String(!0),u=["keydown","mouseover","touchmove","touchstart","scroll","click"],f=new Promise(t=>{function n(){try{return localStorage.getItem(l)===d}catch(r){return!0}}function o(r=!0){try{r?localStorage.setItem(l,d):localStorage.removeItem(l)}catch(s){}}function e(r){o(!0),t({type:r.type.toLowerCase()});for(let s of u)window.removeEventListener(s,e)}if(n())t({type:"local"});else{(document.documentElement.scrollTop!==0||document.body&&document.body.scrollTop!==0)&&e({type:"scroll"});for(let r of u)window.addEventListener(r,e)}});var i=g.pwa,a=(t,n)=>{if(i.logs){console.groupCollapsed.apply(console,Array.isArray(t)?t:[t]);for(let o of n)console.log.apply(console,Array.isArray(o)?o:[o]);console.groupEnd()}};if("serviceWorker"in navigator){navigator.serviceWorker.register(i.serviceWorker.source,{scope:i.serviceWorker.scope}).then(n=>{var e;let o=[];n.scope&&o.push([`Scope: ${n.scope}`]),(e=n.active)!=null&&e.scriptURL&&o.push([`Script:  ${n.active.scriptURL}`]),o.push(["Build by: Fineshop Design"],["Developer site: https://fineshopdesign.com"]),a(["%cService Worker: Registered Successfully","color: green"],o)}).catch(n=>{a(["%cService Worker: Registration Failed","color: red"],["Error:",n])});let t=n=>o=>{o.init(n).then(()=>{let e=[["Version:",o.VERSION]],r=o.config,s=o.User.PushSubscription,h=o.Notifications,p=window.location.origin;if(r){e.push(["App ID:",r.appId]),e.push(["Origin:",r.origin]),e.push(["Site Name:",r.siteName]);let c=r.userConfig;c&&(c.serviceWorkerParam&&e.push(["Scope:",p+c.serviceWorkerParam.scope]),e.push(["Script:",p+c.path+c.serviceWorkerPath]))}s.id&&e.push(["Subscription ID:",s.id]),e.push(["Notification:",h.permissionNative]),a(["%cOneSignal: Initialized Successfully","color: green"],e)}).catch(e=>{a(["%cOneSignal: Initialization Failed","color: red"],["Error:",e])})};if(i.oneSignalEnabled){let n=Object.assign({},i.oneSignalConfig);window.OneSignalDeferred=window.OneSignalDeferred||[],window.OneSignalDeferred.push(t(n)),typeof OneSignal=="undefined"&&f.then(()=>{let o=document.createElement("script");o.src=i.oneSignalSDK,o.async=!0,o.defer=!0;let e=document.getElementsByTagName("script")[0];e!=null&&e.parentNode?e.parentNode.insertBefore(o,e):document.head.appendChild(o)})}}})();
