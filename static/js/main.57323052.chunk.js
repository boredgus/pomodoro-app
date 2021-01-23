(this["webpackJsonppomodoro-app"]=this["webpackJsonppomodoro-app"]||[]).push([[0],{33:function(e,t,r){},35:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),o=r.n(c),i=r(14),a=r.n(i),s=r(10),l=r(9),u=r(13);function d(e){return{type:"SET_THEME_COLOR",color:e}}var j={shade:"red",darkColor:"#EE423E",lightColor:"#F7937B"};var m=r(16),b=r(7);function h(e,t){return{type:"SET_TIME",minutes:e,seconds:t}}function O(e){return{type:"SET_CURRENT_STATE",currentState:e}}var p={isStarted:!1,autoStart:!1,time:{minutes:25,seconds:0},session:25,shortBreak:5,longBreak:15,currentState:"pomodoro"};var x=Object(u.b)({timer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TIME_VALUE":return Object(b.a)(Object(b.a)({},e),{},Object(m.a)({},t.sort,t.time));case"SET_TIME":return Object(b.a)(Object(b.a)({},e),{},{time:{minutes:t.minutes,seconds:t.seconds}});case"CHANGE_MODE":return Object(b.a)(Object(b.a)({},e),{},{isStarted:!e.isStarted});case"STOP_TIMER":return Object(b.a)(Object(b.a)({},e),{},{isStarted:!1,buttonText:"START"});case"SET_CURRENT_STATE":return Object(b.a)(Object(b.a)({},e),{},{currentState:t.currentState});case"TOGGLE_AUTO_START":return Object(b.a)(Object(b.a)({},e),{},{autoStart:!e.autoStart});default:return e}},colorTheme:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_THEME_COLOR":switch(t.color){case"red":return{shade:t.color.toLowerCase(),darkColor:"#EE423E",lightColor:"#F7937B"};case"blue":return{shade:t.color.toLowerCase(),darkColor:"#0268B3",lightColor:"#608DC8"};case"green":return{shade:t.color.toLowerCase(),darkColor:"#03A863",lightColor:"#69C499"};default:return e}default:return e}}}),g=Object(u.c)(x);g.subscribe((function(){}));var f=g,T=(r(33),r(3));var k=function(e){return Object(n.jsx)("header",{children:Object(n.jsxs)("ul",{className:"header",children:[Object(n.jsx)("li",{children:Object(n.jsxs)(s.b,{to:"".concat(C,"/"),id:"logo-link",children:[Object(n.jsx)("img",{src:"./logo.png",alt:"tomato icon"}),Object(n.jsx)("p",{className:"title",children:"TOMOTIMER"})]})}),Object(n.jsxs)("li",{className:"nav",children:[Object(n.jsx)(s.b,{to:"".concat(C,"/faq"),children:"FAQ"}),Object(n.jsx)(s.b,{to:"".concat(C,"/settings"),children:"Settings"})]})]})})};var v=0;function y(){var e=Object(l.c)((function(e){return e})),t=Object(l.c)((function(e){return e.colorTheme})),r=Object(l.c)((function(e){return e.timer})),o=r.isStarted,i=r.session,a=r.shortBreak,s=r.longBreak,u=r.currentState,j=r.autoStart,m=Object(l.c)((function(e){return e.timer.time})),b=m.minutes,p=m.seconds,x=Object(l.b)();Object(c.useEffect)((function(){return o||x(h(function(e){switch(e.colorTheme.shade){case"red":return e.timer.session;case"green":return e.timer.shortBreak;case"blue":return e.timer.longBreak}}(e),0)),function(){return x({type:"STOP_TIMER"})}}),[]);var g=null;function f(e,t){clearTimeout(g),x({type:"STOP_TIMER"}),x(d(e)),x(O("red"===e?"pomodoro":"break")),x(h(t,0))}function T(){clearTimeout(g),x({type:"CHANGE_MODE"}),document.querySelector("audio#button-clicked").play()}return Object(c.useEffect)((function(){o&&(g=setTimeout((function(){p>0?x(h(b,p-1)):b>0?x(h(b-1,59)):function(){clearTimeout(g);var e=document.querySelector("audio#timer-ended");e.play();for(var t=1;t<3;t++)setTimeout((function(){e.play()}),770*t);x({type:"STOP_TIMER"}),"break"===u?(x(d("red")),x(h(i,0)),x(O("session"))):(x(d("green")),x(h(a,0)),x(O("break")));j&&T()}()}),1e3))}),[o,p]),Object(c.useEffect)((function(){!function(e){var t=e.darkColor,r=e.lightColor,n=e.shade;switch(document.querySelectorAll("main .timer-container .options li").forEach((function(e){e.className="",e.style.backgroundColor=""})),document.querySelector("main .timer-container").style.backgroundColor=r,document.querySelector("main .timer-container button").style.color=t,n){case"red":document.querySelectorAll("main .timer-container .options li")[0].className="active";break;case"green":document.querySelectorAll("main .timer-container .options li")[1].className="active";break;case"blue":document.querySelectorAll("main .timer-container .options li")[2].className="active"}document.querySelector("main .timer-container .options li.active").style.backgroundColor=t}(t)}),[t]),Object(c.useEffect)((function(){document.title=document.querySelector(".timer-container p").innerHTML+" "+u+" | TomoTimer"}),[p,b,u]),Object(n.jsx)("main",{children:Object(n.jsxs)("div",{className:"timer-container",children:[Object(n.jsxs)("ul",{className:"options",children:[Object(n.jsx)("li",{className:"active",onClick:function(){return f("red",i)},children:"Pomodoro"}),Object(n.jsx)("li",{onClick:function(){return f("green",a)},children:"Short break"}),Object(n.jsx)("li",{onClick:function(){return f("blue",s)},children:"Long break"})]}),Object(n.jsxs)("p",{children:[b<10?"0"+b:b,":",p<10?"0"+p:p]}),Object(n.jsxs)("button",{onClick:function(){return T()},children:[" ",o?"STOP":"START"," "]}),Object(n.jsx)("audio",{id:"button-clicked",children:Object(n.jsx)("source",{src:"./button_clicked.mp3"})}),Object(n.jsx)("audio",{id:"timer-ended",children:Object(n.jsx)("source",{src:"./timer-ended.mp3"})})]})})}function S(){return document.title="FAQ | TomoTimer",Object(n.jsxs)("main",{className:"narrow-container",children:[Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:" What is TOMOTIMER? "}),Object(n.jsx)("p",{children:"Tomotimer is a customizable pomodoro timer that works on desktop. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"What is Pomodoro technique?"}),Object(n.jsx)("p",{children:"The Pomodoro Technique is a time management technique invented in the late 1980s by Francesco Cirillo and was named after a tomato shaped timer he used to track his work when he was a university student."}),Object(n.jsx)("p",{children:'The idea is very simple: When faced with a large task, break it down into smaller individual tasks, break those tasks down into short time intervals (called "Pomodoros") and space them out by short and long breaks.'}),Object(n.jsx)("p",{children:"This makes you work in short sprints to make sure you are consistently being productive. And you also get to take regular breaks, which helps improve motivation and keeps you creative."})]}),Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{children:"How to use it?"}),Object(n.jsxs)("ol",{children:[Object(n.jsx)("li",{children:"Choose a task you want to accomplish."}),Object(n.jsx)("li",{children:"Start the Pomodoro Timer."}),Object(n.jsx)("li",{children:"Focus and work on the task until the signal sounds."}),Object(n.jsx)("li",{children:"Take a short break (3-5 minutes)."}),Object(n.jsx)("li",{children:"Take a long break after every 4 completed Pomodoros."})]}),Object(n.jsx)("p",{className:"postscriptum",children:"P.S.:: there are set default and common values, but you can customize any stage duration as you like in any moment."}),Object(n.jsx)("p",{className:"postscriptum",children:"P.S.S.:: if you have any suggestions about how to update this app, give me know it in any comfortable for you way \u25bc"})]})]})}function E(){var e=Object(l.c)((function(e){return e.timer})),t=e.session,r=e.shortBreak,c=e.longBreak,o=e.autoStart;document.title="Settings | TomoTimer";var i=Object(l.b)();function a(e){var t,r;i((t=e.target.id,r=e.target.value,{type:"SET_TIME_VALUE",sort:t,time:r}))}return Object(n.jsxs)("main",{className:"narrow-container",children:[Object(n.jsx)("h2",{children:"TIMER SETTINGS"}),Object(n.jsxs)("div",{className:"settings-box",children:[Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("label",{children:"Pomodoro"}),Object(n.jsx)("input",{id:"session",type:"number",value:t,onChange:a,min:"1",max:"180"})]}),Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("label",{children:"Short break"}),Object(n.jsx)("input",{id:"shortBreak",type:"number",value:r,onChange:a,min:"1",max:"20"})]}),Object(n.jsxs)("div",{className:"item",children:[Object(n.jsx)("label",{children:"Long break"}),Object(n.jsx)("input",{id:"longBreak",type:"number",value:c,onChange:a,min:"1",max:"60"})]})]}),Object(n.jsxs)("div",{className:"settings-row",children:[Object(n.jsx)("label",{children:"Auto start next level?"}),Object(n.jsx)("input",{id:"autoStart",type:"checkbox",value:"autoStart",checked:o,onChange:function(){return i({type:"TOGGLE_AUTO_START"})}})]}),Object(n.jsx)("img",{src:"./pomodoro_line.png",alt:"tomato line"})]})}function w(e){return Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"contacts",children:[Object(n.jsx)("a",{href:"https://telegram.me/kotank",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/telegram-512.png",alt:"Telegram"})}),Object(n.jsx)("a",{href:"https://github.com/boredgus",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg",alt:"GitHub"})}),Object(n.jsx)("a",{href:"mailto:daha.kyiv@gmail.com",target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"https://image.flaticon.com/icons/png/512/281/281769.png",alt:"Gmail"})})]})})}window.onscroll=function(){var e=window.pageYOffset,t=document.querySelector("header");e>60&&e>v?t.classList.add("out"):t.classList.remove("out"),v=e};var C="/pomodoro-app";var _=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(k,{}),Object(n.jsxs)(T.c,{children:[Object(n.jsx)(T.a,{exact:!0,path:"".concat(C,"/"),children:Object(n.jsx)(y,{})}),Object(n.jsx)(T.a,{path:"".concat(C,"/faq"),children:Object(n.jsx)(S,{})}),Object(n.jsx)(T.a,{path:"".concat(C,"/settings"),children:Object(n.jsx)(E,{})})]}),Object(n.jsx)(w,{})]})};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(s.a,{children:Object(n.jsx)(l.a,{store:f,children:Object(n.jsx)(_,{})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.57323052.chunk.js.map