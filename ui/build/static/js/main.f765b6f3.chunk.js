(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){"use strict";a.r(t);for(var n=a(3),r=a.n(n),c=a(22),s=a.n(c),o=(a(50),a(13)),l=a.n(o),p=a(18),i=a(16),u=a(17),g=[],O=["S","D","H","C"],d=["A","2","3","4","5","6","7","8","9","0","K","J","Q"],S=0;S<O.length;S++)for(var y=0;y<d.length;y++)g.push("".concat(d[y]).concat(O[S]));var j=[],m=[],T=!0;g=g.map((function(e){return{tag:e,value:(t=e,d.indexOf(t[0])+1),flipState:!0};var t}));var b=function(){for(var e=g.length;e>0;e--){var t=Math.floor(Math.random()*e);T?j.push(g[t]):m.push(g[t]),T=!T,g.splice(t,1)}return[j,m]},f=a(32),E=a(41);a.n(E).a.config();var h=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"AIzaSyDTBSznQ-O29O9EuuXYkShGJHfj7ZoXpgc",REACT_APP_APP_ID:"1:865349714041:web:24ab5921d592b7897694a8",REACT_APP_AUTH_DOMAIN:"oba-dce9d.firebaseapp.com",REACT_APP_DATABASE_URL:"https://oba-dce9d.firebaseio.com",REACT_APP_MEASUREMENT_ID:"G-1DG17HHVL2",REACT_APP_MESSAGING_SENDER_ID:"865349714041",REACT_APP_PROJECT_ID:"oba-dce9d",REACT_APP_STORAGE_BUCKET:"oba-dce9d.appspot.com"}),_={apiKey:h.REACT_APP_API_KEY,authDomain:h.REACT_APP_AUTH_DOMAIN,databaseURL:h.REACT_APP_DATABASE_URL,projectId:h.REACT_APP_PROJECT_ID,storageBucket:h.REACT_APP_STORAGE_BUCKET,messagingSenderId:h.REACT_APP_MESSAGING_SENDER_ID,appId:h.REACT_APP_APP_ID,measurementId:h.REACT_APP_MEASUREMENT_ID},A=(f.a.initializeApp(_),f.a.auth()),N=(a(62),a(4));function P(e){var t=e.src,a=e.tag,r=e.flipState,c=e.onClick;return Object(N.jsx)(n.Fragment,{children:Object(N.jsx)("img",{className:"card ".concat(r&&"filtered"),src:t,alt:a,onClick:c})})}a(64);var x=a(28),v=a(42),I=a(15),C=a(7),R={setUser:{type:"SET_USER"},setUsername:{type:"SET_USERNAME"},setPassword:{type:"SET_PASSWORD"},setEmail:{type:"SET_EMAIL"},setTC:{type:"SET_TC"},setAuthenticate:{type:"SET_AUTHENTICATE"},setTag:{type:"SET_TAG"},shuffleCards:{type:"SHUFFLE_CARDS"},playerCardPlay:{type:"PLAYER_CARD_PLAY"},opponentCardPlay:{type:"OPPONENT_CARD_PLAY"},setPlayerTurn:{type:"SET_PLAYER_TURN"},setOpponentTurn:{type:"SET_OPPONENT_TURN"},setPlayerMessage:{type:"SET_PLAYER_MESSAGE"},setOpponentMessage:{type:"SET_OPPONENT_MESSAGE"},showResult:{type:"SHOW_RESULT"},updateWinner:{type:"UPDATE_WINNER"},setWinner:{type:"SET_WINNER"},setGameTie:{type:"SET_GAME_TIE"},stopContinueStatus:{type:"STOP_CONTINUE_STATUS"},setLogOut:{type:"SET_LOGOUT"}};var k={playerDeck:JSON.parse(localStorage.getItem("playerdeck"))||[],opponentDeck:JSON.parse(localStorage.getItem("opponentdeck"))||[],playerTurf:JSON.parse(localStorage.getItem("playerturf"))||[],opponentTurf:JSON.parse(localStorage.getItem("opponentturf"))||[],playerTurn:JSON.parse(localStorage.getItem("playerturn"))||!1,opponentTurn:JSON.parse(localStorage.getItem("opponentturn"))||!1,playerTag:"Player One",opponentTag:"Player Two",playerMessage:"",opponentMessage:"",gameTie:!1,continueStatus:!1,email:"",password:"",tag:"",tc:!1,showResult:!1,user:JSON.parse(localStorage.getItem("user"))||null,winner:JSON.parse(localStorage.getItem("winner"))||"",gameEnd:JSON.parse(localStorage.getItem("gameend"))||!1,username:JSON.parse(localStorage.getItem("username"))||"",authenticated:JSON.parse(localStorage.getItem("authenticated"))||!1},w=Object(x.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.setUser.type:return console.log("Adding user state"),localStorage.setItem("user",JSON.stringify(t.user)),Object(C.a)(Object(C.a)({},e),{},{user:t.user});case R.setUsername.type:return console.log("Adding username"),localStorage.setItem("username",JSON.stringify(t.data)),Object(C.a)(Object(C.a)({},e),{},{username:t.data,tag:""});case R.setPassword.type:return console.log("Adding password"),Object(C.a)(Object(C.a)({},e),{},{password:t.data});case R.setEmail.type:return console.log("Adding email"),Object(C.a)(Object(C.a)({},e),{},{email:t.data});case R.setTC.type:return console.log("Updating T&C"),Object(C.a)(Object(C.a)({},e),{},{tc:t.data});case R.setAuthenticate.type:return console.log("Setting authenticate"),localStorage.setItem("authenticated",!0),localStorage.setItem("user",!0),Object(C.a)(Object(C.a)({},e),{},{authenticated:t.data,user:!0,password:"hidden"});case R.setTag.type:return console.log("Tagging errors"),Object(C.a)(Object(C.a)({},e),{},{tag:t.error});case R.shuffleCards.type:console.log("Shuffle cards");var a=Object(i.a)(t.deck,2),n=a[0],r=a[1];return localStorage.setItem("playerdeck",JSON.stringify(n)),localStorage.setItem("opponentdeck",JSON.stringify(r)),localStorage.setItem("playerturf",JSON.stringify([])),localStorage.setItem("opponentturf",JSON.stringify([])),localStorage.setItem("playerturn",!0),localStorage.setItem("opponentturn",!1),localStorage.setItem("gameend",!1),Object(C.a)(Object(C.a)({},e),{},{playerDeck:n,opponentDeck:r,playerTurf:[],opponentTurf:[],playerMessage:"",opponentMessage:"",playerTurn:!0,opponentTurn:!1,showResult:!1,continueStatus:!1,gameEnd:!1});case R.playerCardPlay.type:console.log("Player playing a card");var c=Object(I.a)(e.playerDeck),s=c.findIndex((function(e){return e.tag===t.playCard.tag}));return c.splice(s,1),localStorage.setItem("playerturf",JSON.stringify([].concat(Object(I.a)(e.playerTurf),[t.playCard]))),localStorage.setItem("playerdeck",JSON.stringify(c)),Object(C.a)(Object(C.a)({},e),{},{playerTurf:[].concat(Object(I.a)(e.playerTurf),[t.playCard]),playerDeck:c,playerMessage:"",opponentMessage:""});case R.opponentCardPlay.type:console.log("Opponent playing a card");var o=Object(I.a)(e.opponentDeck),l=o.findIndex((function(e){return e.tag===t.playCard.tag}));return o.splice(l,1),localStorage.setItem("opponentturf",JSON.stringify([].concat(Object(I.a)(e.opponentTurf),[t.playCard]))),localStorage.setItem("opponentdeck",JSON.stringify(o)),Object(C.a)(Object(C.a)({},e),{},{opponentTurf:[].concat(Object(I.a)(e.opponentTurf),[t.playCard]),opponentDeck:o,playerMessage:"",opponentMessage:""});case R.setPlayerTurn.type:return console.log("Setting player turn"),localStorage.setItem("playerturn",!0),localStorage.setItem("opponentturn",!1),Object(C.a)(Object(C.a)({},e),{},{playerTurn:!0,opponentTurn:!1,playerMessage:"",opponentMessage:""});case R.setOpponentTurn.type:return console.log("Setting opponent turn"),localStorage.setItem("opponentturn",!0),localStorage.setItem("playerturn",!1),Object(C.a)(Object(C.a)({},e),{},{opponentTurn:!0,playerTurn:!1,playerMessage:"",opponentMessage:""});case R.setPlayerMessage.type:return console.log("Setting player message"),Object(C.a)(Object(C.a)({},e),{},{playerMessage:t.message,opponentMessage:""});case R.setOpponentMessage.type:return console.log("Setting opponent message"),Object(C.a)(Object(C.a)({},e),{},{opponentMessage:t.message,playerMessage:""});case R.showResult.type:return console.log("Showing result"),Object(C.a)(Object(C.a)({},e),{},{showResult:!0});case R.updateWinner.type:console.log("Updating winner",t.winner);var p=[].concat(Object(I.a)(e.playerTurf),Object(I.a)(e.opponentTurf));if("player"===t.winner){var u=[].concat(Object(I.a)(e.playerDeck),Object(I.a)(p));return localStorage.setItem("playerdeck",JSON.stringify(u)),localStorage.setItem("playerturf",JSON.stringify([])),localStorage.setItem("opponentturf",JSON.stringify([])),Object(C.a)(Object(C.a)({},e),{},{showResult:!1,playerTurf:[],opponentTurf:[],playerDeck:u})}var g=[].concat(Object(I.a)(e.opponentDeck),Object(I.a)(p));return localStorage.setItem("opponentdeck",JSON.stringify(g)),localStorage.setItem("playerturf",JSON.stringify([])),localStorage.setItem("opponentturf",JSON.stringify([])),Object(C.a)(Object(C.a)({},e),{},{showResult:!1,playerTurf:[],opponentTurf:[],opponentDeck:g});case R.setGameTie.type:return console.log("Showing game tie"),Object(C.a)(Object(C.a)({},e),{},{gameTie:!0,continueStatus:!0});case R.setWinner.type:return console.log("Set overall Winner"),localStorage.setItem("winner",JSON.stringify(t.winner)),localStorage.setItem("gameend",!0),Object(C.a)(Object(C.a)({},e),{},{winner:t.winner});case R.stopContinueStatus.type:return console.log("Stopping player continue status"),Object(C.a)(Object(C.a)({},e),{},{gameTie:!1,continueStatus:!1});case R.setLogOut.type:return console.log("Logout user"),localStorage.clear(),localStorage.setItem("playerdeck",JSON.stringify([])),localStorage.setItem("opponentdeck",JSON.stringify([])),localStorage.setItem("playerturf",JSON.stringify([])),localStorage.setItem("opponentturf",JSON.stringify([])),localStorage.setItem("playerturn",!1),localStorage.setItem("opponentturn",!1),localStorage.setItem("gameend",!1),{user:null,authenticated:!1,playerDeck:[],opponentDeck:[],playerTurf:[],opponentTurf:[]};default:return e}}),Object(v.devToolsEnhancer)());function U(){var e=w.getState,t=w.dispatch,a=(e(),Object(u.b)((function(e){return e}))),r=a.playerDeck,c=a.opponentDeck,s=a.playerTurf,o=a.opponentTurf,l=a.playerTag,p=a.opponentTag,g=a.playerMessage,O=a.opponentMessage,d=a.playerTurn,S=a.opponentTurn,y=a.showResult,j=a.gameTie,m=a.gameEnd,T=a.continueStatus,b=a.username,f="".concat("","/img/");console.log("Cards left: ".concat(r.length," / ").concat(c.length));var E=function(e,a){e.preventDefault();var n=e.target.alt.split("/"),r=Object(i.a)(n,3),c=r[0],l=r[1],p=r[2];"player"===l?s.length===o.length?(h({tag:c,value:p}),t(T?{type:"SET_PLAYER_MESSAGE",message:"Pick one more"}:{type:"SET_OPPONENT_TURN"})):T?(h({tag:c,value:p}),t({type:"SET_OPPONENT_TURN"}),t({type:"STOP_CONTINUE_STATUS"})):t({type:"SET_PLAYER_MESSAGE",message:"Not your turn"}):s.length!==o.length?T?t({type:"SET_OPPONENT_MESSAGE",message:"Not your turn"}):s.length-o.length<=2?(_({tag:c,value:p}),s.length-o.length===1?t({type:"SET_PLAYER_TURN"}):t({type:"SET_OPPONENT_MESSAGE",message:"Pick one more"})):t({type:"SET_OPPONENT_MESSAGE",message:"Not your turn"}):t({type:"SET_OPPONENT_MESSAGE",message:"Not your turn"})},h=function(e){t({type:"PLAYER_CARD_PLAY",playCard:e})},_=function(e){t({type:"OPPONENT_CARD_PLAY",playCard:e})};Object(n.useEffect)((function(){if(1===s.length&&1===o.length)if(A(s)!==A(o)){var e=A(s)>A(o)?"player":"opponent";setTimeout((function(){t({type:"SHOW_RESULT"})}),2e3),setTimeout((function(){t({type:"UPDATE_WINNER",winner:e})}),5e3)}else setTimeout((function(){t({type:"SHOW_RESULT"}),t({type:"SET_GAME_TIE"})}),2e3);else if(s.length===o.length&&s.length%2===1)if(A(s)!==A(o)){var a=A(s)>A(o)?"player":"opponent";setTimeout((function(){t({type:"SHOW_RESULT"})}),2e3),setTimeout((function(){t({type:"UPDATE_WINNER",winner:a})}),5e3)}else setTimeout((function(){t({type:"SHOW_RESULT"}),t({type:"SET_GAME_TIE"})}),2e3);else if(0===r.length||0===c.length){var n=0===r.length?"Player Two":"Player One";setTimeout((function(){t({type:"SHOW_RESULT"})}),2e3),setTimeout((function(){t({type:"SET_WINNER",winner:n})}),5e3)}return function(){console.log("Clean-up dashboard")}}),[r,c]);var A=function(e){return e.map((function(e){return parseInt(e.value,10)})).reduce((function(e,t){return e+t}),0)};return Object(N.jsxs)("div",{className:"dashboard",children:[Object(N.jsxs)("div",{className:"player",children:[r.map((function(e,t){return Object(N.jsx)(P,{tag:"".concat(e.tag,"/player/").concat(e.value),flipState:e.flipState,src:"".concat(f).concat(e.tag,".png"),onClick:function(e,t){return E(e)}},t)})),Object(N.jsx)("p",{className:"player-tag ".concat(d&&"active"),children:b||l})]}),Object(N.jsxs)("div",{className:"game-board",children:[Object(N.jsx)("div",{className:"player-message",children:g}),Object(N.jsxs)("div",{className:"card-board",children:[Object(N.jsx)("div",{className:"left-hand",children:s.map((function(e,t){return Object(N.jsx)(P,{tag:"".concat(e.tag,"/player/").concat(e.value),flipState:e.flipState,src:y?"".concat(f).concat(e.tag,".png"):"".concat(f,"XX.png")},t)}))}),Object(N.jsx)("div",{className:"result-board",children:y?Object(N.jsxs)(n.Fragment,{children:[Object(N.jsx)("br",{}),"Player One",Object(N.jsx)("br",{}),A(s),Object(N.jsx)("br",{}),"||",Object(N.jsx)("br",{}),A(o),Object(N.jsx)("br",{}),"Player Two",Object(N.jsx)("br",{}),"-------------- ",Object(N.jsx)("br",{}),j?Object(N.jsx)("span",{children:T&&Object(N.jsx)(N.Fragment,{children:"GAME TIE, PICK TWO CARDS EACH!!!"})}):Object(N.jsx)(N.Fragment,{children:m?Object(N.jsx)(N.Fragment,{children:A(s)>A(o)?"Player One WINS":"Player Two WINS"}):Object(N.jsx)(N.Fragment,{children:A(s)>A(o)?"Player One takes all":"Player Two takes all"})}),Object(N.jsx)("br",{}),"-------------- ",Object(N.jsx)("br",{})]}):Object(N.jsx)(n.Fragment,{})}),Object(N.jsx)("div",{className:"right-hand",children:o.map((function(e,t){return Object(N.jsx)(P,{tag:"".concat(e.tag,"/opponent/").concat(e.value),flipState:e.flipState,src:y?"".concat(f).concat(e.tag,".png"):"".concat(f,"XX.png")},t)}))})]}),Object(N.jsx)("div",{className:"player-message",children:O})]}),Object(N.jsxs)("div",{className:"player",children:[Object(N.jsx)("p",{className:"player-tag ".concat(S&&"active"),children:p}),c.map((function(e,t){return Object(N.jsx)(P,{tag:"".concat(e.tag,"/opponent/").concat(e.value),flipState:e.flipState,src:"".concat(f,"XX.png"),onClick:function(e){return E(e)}},t)}))]})]})}var D=a(24),M=a.n(D),L=a(43),J=a.n(L);a(100);function G(e){var t=w.getState,a=w.dispatch;t();return Object(N.jsxs)("div",{className:"input_section",children:[Object(N.jsx)("label",{children:e.label}),Object(N.jsx)("input",{type:e.type,name:e.name,value:e.value,pattern:e.pattern,maxLength:e.maxLength,placeholder:e.placeholder,onChange:function(e){var t,n=e.target,r=n.name;t="checkbox"===n.type?n.checked:n.value,console.log(r,t,"SET_".concat(r.toUpperCase())),a({type:"SET_".concat(r.toUpperCase()),data:t})},required:!0}),Object(N.jsx)("span",{style:{marginTop:"0.7em",display:"inline",color:"red",fontSize:"0.8em"},children:e.tag})]})}a(101);function W(e){return Object(N.jsx)("button",{className:e.classname,type:"button",name:e.name,url:e.url,onClick:e.onClick,disabled:e.disabled,children:e.name})}a(102);function H(){var e=w.getState,t=w.dispatch,a=(e(),Object(u.b)((function(e){return e}))),r=a.email,c=a.password,s=a.username,o=a.tc,g=a.tag,O=Object(n.useState)(!1),d=Object(i.a)(O,2),S=d[0],y=d[1],j=Object(n.useState)(!1),m=Object(i.a)(j,2),T=m[0],b=m[1],f="/auth/get_username/".concat(s),E=function(){var e=Object(p.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!T){e.next=13;break}if(!s){e.next=10;break}return e.next=5,M()({method:"GET",url:"".concat(f),headers:{"Content-Type":"application/json"}});case 5:a=e.sent,t({type:"SET_PUBLIC_DATA",publicData:a.data}),a.data.success?_():t({type:"SET_TAG",error:"Username already taken"}),e.next=11;break;case 10:t({type:"SET_TAG",error:"Username not supplied"});case 11:e.next=14;break;case 13:h();case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),y(!1),t({type:"SET_TAG",error:e.t0.message?"Username taken, please choose another":"Error found"});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.signInWithEmailAndPassword(r,c).then(function(){var e=Object(p.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M()({method:"POST",url:"/auth/login",data:{email:r,password:c},headers:{"Content-Type":"application/json"}});case 2:n=e.sent,console.log("User logged in"),y(!1),t({type:"SET_USER",user:n.data}),t({type:"SET_AUTHENTICATE",data:!0});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e.message),y(!1),t({type:"SET_TAG",error:e.message.indexOf("no user")>-1?"Account not found, please select signup":e.message})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.createUserWithEmailAndPassword(r,c).then(function(){var e=Object(p.a)(l.a.mark((function e(a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M()({method:"POST",url:"/auth",data:{email:r,password:c,username:s},headers:{"Content-Type":"application/json"}});case 2:n=e.sent,console.log("User signed up"),y(!1),t({type:"SET_USER",user:n.data}),t({type:"SET_AUTHENTICATE",data:!0});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("It's an error",e.message),y(!1),t({type:"SET_TAG",error:e.message.indexOf("already")>-1?"Account already exist, please select login":e.message})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=T?!r||!c||!s||!o:!r||!c;return Object(N.jsx)("div",{className:"homepage-banner",children:Object(N.jsx)("div",{className:"homepage-top",children:Object(N.jsxs)("div",{className:"tag-home",children:[Object(N.jsx)("h1",{className:"title-home",children:"MintCard App"}),Object(N.jsxs)("p",{className:"slide-home",children:[T?"SIGNUP":"",Object(N.jsx)("span",{className:"mode",onClick:function(){return b(!T)},children:T?"click to login ?":"click to signup ?"}),T?"":"LOGIN"]}),Object(N.jsx)(G,{label:"Email",type:"text",value:r,defalutValue:r,name:"email",placeholder:"Enter your email",required:!0}),Object(N.jsx)(G,{label:"Password",type:"password",value:c,name:"password",placeholder:"Enter your password",required:!0}),T&&Object(N.jsx)(G,{label:"Username - github",type:"text",value:s,name:"username",placeholder:"Enter your github username"}),Object(N.jsx)("span",{className:"tag",children:g}),T&&Object(N.jsxs)("div",{className:"tc ".concat(!o&&"tc-red"),children:[Object(N.jsx)(G,{type:"checkbox",value:o,name:"tc"}),Object(N.jsx)("span",{children:"Accept Terms & Conditions"})]}),S?Object(N.jsx)(J.a,{type:"ThreeDots",color:"#00bfff",height:80,width:80}):Object(N.jsx)(W,{name:T?"SIGNUP":"LOGIN",classname:"btn",onClick:function(){y(!0),E()},disabled:P})]})})})}a(103);var F=a(44),Y=a(31),B=a(45);var K=function(){var e=w.getState,t=w.dispatch,a=(e(),Object(u.b)((function(e){return e})).user,Object(u.b)((function(e){return e})).authenticated),r=Object(n.useState)(!1),c=Object(i.a)(r,2),s=c[0],o=(c[1],function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.signOut().then((function(){console.log("User logged out"),t({type:"SET_LOGOUT"})})).catch((function(e){console.log(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){return function(){console.log("Clean-up App.js")}}),[]),Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)("div",{className:"tabs",children:[Object(N.jsxs)("p",{className:"shuffle",onClick:function(){var e=b();console.log(e);var a=Object(i.a)(e,2),n=a[0],r=a[1];t({type:"SHUFFLE_CARDS",deck:[n,r]})},children:["Shuffle",Object(N.jsx)(F.a,{})]}),Object(N.jsxs)("p",{className:"save",children:["Save Game",Object(N.jsx)(Y.a,{})]}),!s&&Object(N.jsxs)("p",{className:"rules",children:["Rules",Object(N.jsx)(B.a,{})]}),Object(N.jsxs)("p",{className:"logout",onClick:function(){return o()},children:["Logout",Object(N.jsx)(Y.a,{})]})]}),a&&Object(N.jsx)(U,{}),!a&&Object(N.jsx)(H,{})]})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,105)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(u.a,{store:w,children:Object(N.jsx)(K,{})})}),document.getElementById("root")),X()},50:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.f765b6f3.chunk.js.map