"use strict";(()=>{var e={};e.id=501,e.ids=[501],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3992:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>v,patchFetch:()=>y,requestAsyncStorage:()=>c,routeModule:()=>d,serverHooks:()=>h,staticGenerationAsyncStorage:()=>l});var a={};r.r(a),r.d(a,{GET:()=>p});var i=r(49303),o=r(88716),n=r(60670),s=r(87070);function u(e,t){return Math.floor(Math.random()*(t-e+1))+e}async function p(){let e=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(e=>({name:e,deposit:u(100,500),withdraw:u(200,600)})),t=s.NextResponse.json(e);return t.headers.set("Cache-Control","no-store"),t}let d=new i.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/weekly-activity/route",pathname:"/api/weekly-activity",filename:"route",bundlePath:"app/api/weekly-activity/route"},resolvedPagePath:"C:\\Users\\haris\\Desktop\\gitSoa\\app\\api\\weekly-activity\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:c,staticGenerationAsyncStorage:l,serverHooks:h}=d,v="/api/weekly-activity/route";function y(){return(0,n.patchFetch)({serverHooks:h,staticGenerationAsyncStorage:l})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,972],()=>r(3992));module.exports=a})();