(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{64914:function(e){e.exports=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"version",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"},{name:"_extraData",type:"bytes"}],name:"approveAndCall",outputs:[{name:"success",type:"bool"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,type:"function"},{inputs:[{name:"_initialAmount",type:"uint256"},{name:"_tokenName",type:"string"},{name:"_decimalUnits",type:"uint8"},{name:"_tokenSymbol",type:"string"}],type:"constructor"},{payable:!1,type:"fallback"},{anonymous:!1,inputs:[{indexed:!0,name:"_from",type:"address"},{indexed:!0,name:"_to",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"_owner",type:"address"},{indexed:!0,name:"_spender",type:"address"},{indexed:!1,name:"_value",type:"uint256"}],name:"Approval",type:"event"}]},54997:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return n(17043)}])},67333:function(e,t,n){"use strict";var a=n(85893),s=n(11163),r=n(214),o=n.n(r),i=n(36485);t.Z=function(e){(0,s.useRouter)();var t=e.getDesign,n=e.getText;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"".concat(o().mainLogo," logoAddParams"),children:(0,a.jsx)("a",{href:(0,i.Rg)("index"),children:(0,a.jsx)("img",{src:t("logoUri","uri",(0,i.Vh)("images/logo.png","mainLogo")),alt:n("Stake NFT - earn ERC20","MainPage_Header")})})})})}},15200:function(e,t,n){"use strict";var a=n(29815),s=n(85893),r=n(44423),o=n(214),i=n.n(o),c=n(11163),u=n(36485),l=[{id:"index",title:"Home",link:"index"}].concat((0,a.Z)((0,u.Sn)("EnabledDemoMind",!0)?[{id:"mint",title:"Mint NFT",link:"mint"}]:[]),[{id:"stake",title:"Stake",link:"stake"},{id:"settings",title:"Settings",link:"settings",adminOnly:!0}]);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(0,c.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("nav",{className:"".concat(i().mainNav," headerNavMenu"),children:l.map((function(n){return n.adminOnly&&!t?null:(0,s.jsx)("a",{className:e===n.id?"".concat(i().active," headerNavActive"):"",href:(0,r.R)(n.link),children:n.title},n.id)}))}),(0,s.jsx)("div",{className:i().mainNavSeperator})]})}},77695:function(e,t,n){"use strict";var a=n(85893),s=n(214),r=n.n(s),o=n(27129),i=n(44423);t.Z=function(e){var t=e.tokenId,n=e.tokenUri,s=e.isApproved,c=e.onDeStake,u=e.onStake,l=e.isFetchUri,p=e.deStakeId,d=e.stakeId,m=e.isStaking,f=e.isDeStaking,y=e.isApproveDo,h=e.isApproveId,k=e.isMinted;return(0,a.jsxs)("div",{className:"".concat(r().nftBox," nftTokenBox"),children:[!1!==n&&(0,o.Z)(n)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h3",{children:["#",t]}),(0,a.jsx)("img",{src:n})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h3",{children:["#",t]}),l&&(0,a.jsx)("h2",{children:"Fetch info"})]}),k?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{className:"".concat(r().mainButton," ").concat(r().spacerBottom," primaryButton"),href:(0,i.R)("stake"),children:"Go to staking"})}):(0,a.jsxs)(a.Fragment,{children:[null!==c&&(0,a.jsx)("button",{disabled:f||m||y,className:"".concat(r().mainButton," ").concat(r().spacerBottom," primaryButton"),onClick:c,children:f&&p===t?(0,a.jsx)(a.Fragment,{children:"De-staking..."}):(0,a.jsx)(a.Fragment,{children:"De-stake"})}),null!==u&&(0,a.jsx)("button",{className:"".concat(r().mainButton," ").concat(r().spacerBottom," primaryButton"),onClick:u,disabled:f||m||y,children:m&&d===t?(0,a.jsx)(a.Fragment,{children:"Staking..."}):(0,a.jsx)(a.Fragment,{children:y&&h===t?(0,a.jsx)(a.Fragment,{children:"Approving..."}):(0,a.jsx)(a.Fragment,{children:s?"Stake":"Approve & Stake"})})})]})]},t.toString())}},53419:function(e,t,n){"use strict";n.d(t,{A:function(){return c}});var a=n(47568),s=n(29815),r=n(34051),o=n.n(r),i=n(44431),c=function(){var e=(0,a.Z)(o().mark((function e(t,n,a,r,c){var u,l,p,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={from:t,gas:"0"},c&&(l.value=new i.BigNumber(c)),e.next=5,(u=n.methods)[a].apply(u,(0,s.Z)(r)).estimateGas(l);case 5:return p=e.sent,d=new i.BigNumber(new i.BigNumber(p).multipliedBy(1.05).toFixed(0)).toString(16),l.gas="0x"+d,e.abrupt("return",l);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,s,r){return e.apply(this,arguments)}}()},27129:function(e,t){"use strict";t.Z=function(e){return""!==e}},17043:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return F}});var a=n(47568),s=n(14924),r=n(26042),o=n(69396),i=n(34051),c=n.n(i),u=n(85893),l=(n(2593),n(35553)),p=n(67294),d=n(214),m=n.n(d),f=n(78967),y=n(53419),h=n(15200),k=n(67333),v=n(77695),g=n(64914),b=n.n(g),x=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),w=n(73853),S=n(99312),T=n(64262),N=new(n(81586).vU)(x),j=function(e){console.log(e)},F=function(e){var t=e.storageData,n=e.isOwner,i=(e.openConfirmWindow,e.addNotify),d=e.getText,g=e.getDesign,F=(0,p.useState)(null===t||void 0===t?void 0:t.chainId),_=F[0],C=F[1],A=(0,p.useState)(null===t||void 0===t?void 0:t.nftCollection),M=A[0],R=A[1],I=(0,p.useState)(null===t||void 0===t?void 0:t.rewardToken),B=I[0],Z=I[1],D=(0,p.useState)(null===t||void 0===t?void 0:t.farmContract),E=D[0],U=D[1],O=(0,p.useState)(!1),Y=O[0],P=O[1],L=(0,p.useState)(!1),W=L[0],H=L[1],V=(0,p.useState)(!1),G=V[0],J=V[1],X=(0,p.useState)(!1),q=X[0],z=X[1],K=(0,p.useState)(!1),Q=K[0],$=K[1],ee=(0,p.useState)(!1),te=ee[0],ne=ee[1],ae=(0,p.useState)(!1),se=ae[0],re=ae[1],oe=(0,p.useState)(!0),ie=(oe[0],oe[1]),ce=(0,p.useState)(!1),ue=ce[0],le=ce[1],pe=(0,p.useState)(!1),de=pe[0],me=pe[1],fe=(0,p.useState)(!1),ye=fe[0],he=fe[1],ke=(0,p.useState)(!1),ve=ke[0],ge=ke[1],be=(0,p.useState)(!1),xe=be[0],we=be[1],Se=(0,p.useState)(!0),Te=(Se[0],Se[1]),Ne=(0,p.useState)(!1),je=(Ne[0],Ne[1]),Fe=(0,p.useState)(!1),_e=Fe[0],Ce=Fe[1],Ae=(0,p.useState)(!0),Me=Ae[0],Re=Ae[1],Ie=(0,p.useState)(!1),Be=Ie[0],Ze=Ie[1],De=(0,p.useState)(!1),Ee=De[0],Ue=De[1],Oe=(0,p.useState)(!0),Ye=(Oe[0],Oe[1]),Pe=(0,p.useState)(!0),Le=Pe[0],We=Pe[1],He=(0,p.useState)(!1),Ve=(He[0],He[1]),Ge=(0,p.useState)([]),Je=Ge[0],Xe=Ge[1],qe=(0,p.useState)({}),ze=qe[0],Ke=qe[1],Qe=(0,p.useState)(!1),$e=Qe[0],et=Qe[1],tt=(0,p.useState)(!1),nt=(tt[0],tt[1]),at=(0,p.useState)([]),st=at[0],rt=at[1],ot=(0,p.useState)({}),it=ot[0],ct=ot[1],ut=(0,p.useState)(!0),lt=ut[0],pt=ut[1],dt=(0,p.useState)(!1),mt=(dt[0],dt[1],(0,p.useState)(!0)),ft=mt[0],yt=mt[1],ht=(0,p.useState)(!1),kt=(ht[0],ht[1]),vt=(0,p.useState)(!1),gt=(vt[0],vt[1]),bt=(0,p.useState)(!1),xt=bt[0],wt=bt[1],St=(0,p.useState)(!1),Tt=St[0],Nt=St[1],jt=(0,p.useState)(!1),Ft=jt[0],_t=jt[1],Ct=(0,p.useState)(!1),At=Ct[0],Mt=Ct[1],Rt=(0,p.useState)(!1),It=Rt[0],Bt=Rt[1],Zt=(0,p.useState)(!1),Dt=Zt[0],Et=Zt[1],Ut=(0,p.useState)(!1),Ot=Ut[0],Yt=Ut[1],Pt=(0,p.useState)(!1),Lt=Pt[0],Wt=Pt[1],Ht=(0,p.useState)(!1);Ht[0],Ht[1];(0,p.useEffect)((function(){t&&t.chainId&&t.nftCollection&&t.rewardToken&&t.farmContract&&(C(t.chainId),R(t.nftCollection),Z(t.rewardToken),U(t.farmContract))}),[t]);var Vt=function(e,t){var n=!1;try{n=e.message.replace("Internal JSON-RPC error.",""),n=JSON.parse(n)}catch(a){}switch(n&&n.message?n.message:e.message){case"execution reverted: You don't own this token!":console.log("You dont own this token");break;case"MetaMask Tx Signature: User denied transaction signature.":console.log("Transaction denied");break;case"execution reverted: ERC721: invalid token ID":console.log("Invalid token ID");break;default:console.log("Unkrnown error",e.message)}},Gt=function(){j("do fetchAvailableReward");try{le(!1),ie(!0),q.methods.availableRewards(G).call().then((function(e){re(e),ie(!1)}))}catch(e){console.log(">>> fail fetchAvailableReward"),Vt(e),le(!0)}},Jt=function(){j("do fetchTotalRewardBalance"),Re(!0),Ze(!1),ye&&ye.methods.balanceOf(E).call().then((function(e){Ce(e),Re(!1)})).catch((function(e){Ze(!0),console.log(">>> fetchTotalRewardBalance",e),Vt(e)}))},Xt=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j("do fetchIsApproved"),Ye(!0);try{Q.methods.isApprovedForAll(G,E).call().then((function(e){Ue(e),Ye(!1)}))}catch(t){console.log(">>> fail check is approved"),Vt(t),Ye(!1)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),qt=function(e){return j("do fetchTokenUris"),new Promise((function(t,n){if(G&&Q&&te){var a=e.map((function(e){return{target:M,tokenId:e,callData:N.encodeFunctionData("tokenURI",[e])}}));te.methods.aggregate(a).call().then((function(n){var a={};n.returnData.forEach((function(t,n){var s=N.decodeFunctionResult("tokenURI",t)[0];a[e[n]]=s})),t(a)})).catch((function(e){Vt(e),n()}))}else n()}))},zt=function(){var e=(0,a.Z)(c().mark((function e(){var t,n,a,s,r,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j("do fetchUserNfts"),!(G&&Q&&te)||Le){e.next=33;break}return yt(!0),kt(!1),t=!1,n=!1,a=0,s=0,e.prev=8,e.next=11,Q.methods.totalSupply().call();case 11:a=e.sent,t=!0,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.log("Fail fetch total supply");case 18:return e.prev=18,e.next=21,Q.methods.MAX_SUPPLY().call();case 21:s=e.sent,n=!0,e.next=28;break;case 25:e.prev=25,e.t1=e.catch(18),console.log("Fail fetch max supply");case 28:if(console.log("hasMaxSupply",n),console.log("hasTotalSupply",t),console.log("maxSupply",s),console.log("totalSupply",a),n||t){for(gt(!0),r=[],o=1;o<=(t?a:s);o++)r.push({target:M,callData:N.encodeFunctionData("ownerOf",[o])});te.methods.aggregate(r).call().then((function(e){var t=[];e.returnData.forEach((function(e,n){N.decodeFunctionResult("ownerOf",e)[0]===G&&t.push(n+1)})),rt(t),yt(!1),pt(!0),qt(t).then((function(e){ct(e),pt(!1)})).catch((function(e){pt(!1)}))})).catch((function(e){console.log(">>> fetchUserNfts",e),kt(!0),Vt(e)}))}case 33:case"end":return e.stop()}}),e,null,[[8,15],[18,25]])})));return function(){return e.apply(this,arguments)}}();(0,p.useEffect)((function(){zt()}),[G,Q,te,q,Le]);(0,p.useEffect)((function(){ye&&(j("on useEffect rewardTokenContract"),ye&&(Ze(!1),je(!1),Te(!0),ye.methods.decimals().call().then((function(e){ye.methods.symbol().call().then((function(t){Te(!1),we(e),ge(t),Jt()})).catch((function(e){console.log(">>> reward token info - fail fetch symbol"),Ze(!0),je(!0)}))})).catch((function(e){console.log(">>> reward token info - fail fetch decimals"),Ze(!0),je(!0)}))))}),[ye]),(0,p.useEffect)((function(){q&&G&&(j("on useEffect farmContract && address"),Gt(),j("do fetchStakedNfts"),G&&q&&(Ve(!1),nt(!1),We(!0),q.methods.getStakedTokens(G).call().then((function(e){e=e.map((function(e){return e.tokenId})),Xe(e),We(!1),et(!0),qt(e).then((function(e){Ke(e),et(!1)})).catch((function(e){et(!1),nt(!0)}))})).catch((function(e){Ve(!0),console.log(">>> fail fetchStakedNfts",e),Vt(e)}))))}),[G,q]),(0,p.useEffect)((function(){G&&Q&&(j("on useEffect address && nftContract"),Xt())}),[G,Q]);var Kt=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W||"".concat(Y)!="".concat(_)){e.next=4;break}W.eth.getAccounts().then((function(e){J(e[0]);var t=new W.eth.Contract(S,T.Ce[Y]);console.log(t),ne(t);var n=new W.eth.Contract(x,M);$(n);var a=new W.eth.Contract(b(),B);he(a);var s=new W.eth.Contract(w.Mt,E);z(s)})).catch((function(e){console.log(">>> initOnWeb3Ready",e),Vt(e)})),e.next=8;break;case 4:return e.next=6,(0,f.IC)();case 6:e.sent&&nn();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Qt(){return(Qt=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G||!q){e.next=7;break}return me(!0),i("Confirm transaction..."),e.next=5,(0,y.A)(G,q,"claimRewards",[]);case 5:t=e.sent,q.methods.claimRewards().send(t).then((function(e){Gt(),Jt(),me(!1),i("Reward claimed","success")})).catch((function(e){me(!1),console.log(">>> claimRewards",e),Vt(e),i("Fail claim reward","error")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $t(e){return en.apply(this,arguments)}function en(){return en=(0,a.Z)(c().mark((function e(t){var n,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(G&&q&&Q)){e.next=22;break}if(n=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Nt(!0),_t(t),i("Confirm stake transaction"),e.next=6,(0,y.A)(G,q,"stake",[t]);case 6:n=e.sent,q.methods.stake(t).send(n).then((function(){var e=Je;e.push(t),Xe(e),Ke((0,o.Z)((0,r.Z)({},ze),(0,s.Z)({},"".concat(t),it[t]))),rt(st.filter((function(e){return"".concat(e)!=="".concat(t)}))),ct((0,o.Z)((0,r.Z)({},it),(0,s.Z)({},"".concat(t),!1))),Nt(!1),_t(!1),i("NFT Staked!","success")})).catch((function(e){i("Stake transaction failed","error"),console.log(">> stakeNft",e),Vt(e),Nt(!1),_t(!1)})),e.next=17;break;case 10:e.prev=10,e.t0=e.catch(0),i("Stake transaction failed","error"),console.log(">> stakeNft calc gas",e.t0),Vt(e.t0),Nt(!1),_t(!1);case 17:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),Ee){e.next=21;break}return Yt(t),Et(!0),i("Confirm approve transaction"),e.prev=6,e.next=9,(0,y.A)(G,Q,"setApprovalForAll",[E,!0]);case 9:u=e.sent,Q.methods.setApprovalForAll(E,!0).send(u).then(function(){var e=(0,a.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ue(!0),Et(!1),i("Successfull approved!","success"),n();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){i("Fail approve transaction","error"),console.log(">> stakeNft do approve",e),Et(!1),Vt(e)})),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(6),i("Fail approve transaction","error"),console.log(">>> stakeNft do approve calc gas",e.t0),Et(!1),Vt(e.t0);case 19:e.next=22;break;case 21:n();case 22:case"end":return e.stop()}}),e,null,[[6,13]])}))),en.apply(this,arguments)}function tn(){return(tn=(0,a.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G||!q){e.next=18;break}return e.prev=1,Mt(!0),Bt(t),i("Confirm withdraw transaction"),e.next=7,(0,y.A)(G,q,"withdraw",[t]);case 7:n=e.sent,q.methods.withdraw(t).send(n).then((function(e){var n=st;n.push(t),rt(n),Xe(Je.filter((function(e){return e!==t}))),ct((0,o.Z)((0,r.Z)({},it),(0,s.Z)({},"".concat(t),ze[t]))),Ke((0,o.Z)((0,r.Z)({},ze),(0,s.Z)({},"".concat(t),!1))),Mt(!1),Bt(!1),i("NFT withdrawed","success")})).catch((function(e){console.log(">>> withdraw",e),Vt(e),Mt(!1),Bt(!1),i("Withdraw NFT transaction failed","error")})),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(">>> withdraw calc gas",e.t0),Vt(e.t0),Mt(!1),Bt(!1),i("Withdraw NFT transaction failed","error");case 18:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}(0,p.useEffect)((function(){j("on useEffect activeWeb3 initOnWeb3Ready"),_&&M&&B&&E&&Kt()}),[W,_,M,B,E]);var nn=function(){var e=(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(">>> connectWithMetamask",_),(0,f.pE)({onBeforeConnect:function(){Wt(!0)},onSetActiveChain:P,onConnected:function(e,t){H(t),Wt(!1)},onError:function(e){console.log(">>>> connectWithMetamask",e),Vt(e),Wt(!1)},needChainId:_});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),an=("".concat(m().stakeCustomNftHolder),"".concat(m().mainButton," ").concat(m().spacerBottom," primaryButton"),function(e){var t=e.message;e.onReload;return(0,u.jsx)("b",{children:t})});return(0,u.jsxs)("div",{className:m().container,children:[(0,h.Z)("stake",n),(0,k.Z)({getText:d,getDesign:g}),(0,u.jsx)("h1",{className:"".concat(m().h1," pageTitle"),children:d("StakePage_Title","Stake Your NFTs - Earn ERC20")}),(0,u.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),G?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"stakeBeforeYourReward",children:d("StakePage_BeforeYourReward_Text")}),(0,u.jsx)("h2",{className:"stakeYourRewardLabel",children:d("StakePage_YourRewardLabel","Your reward")}),(0,u.jsx)("div",{className:"stakeAfterYourReward",children:d("StakePage_AfterYourReward_Text")}),(0,u.jsxs)("div",{className:m().tokenGrid,children:[(0,u.jsxs)("div",{className:"".concat(m().tokenItem," stakeRewardAndBank"),children:[(0,u.jsx)("h3",{className:m().tokenLabel,children:"Claimable Rewards"}),(0,u.jsx)("p",{className:m().tokenValue,children:ue?(0,u.jsx)(u.Fragment,{children:an({message:"ERROR"})}):(0,u.jsx)("b",{children:se&&!1!==xe&&!1!==ve?"".concat(l.bM(se,xe)," ").concat(ve):"Loading..."})})]}),(0,u.jsxs)("div",{className:"".concat(m().tokenItem," stakeRewardAndBank"),children:[(0,u.jsx)("h3",{className:m().tokenLabel,children:"Stake Farm balance"}),(0,u.jsx)("p",{className:m().tokenValue,children:Be?(0,u.jsx)(u.Fragment,{children:an({message:"ERROR"})}):(0,u.jsx)("b",{children:Me||!_e||!1===xe||!1===ve?"Loading...":"".concat(l.bM(_e,xe)," ").concat(ve)})})]})]}),(0,u.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),(0,u.jsxs)("b",{className:"stakePageConnectedWallet",children:["Connected wallet ",G]}),(0,u.jsx)("button",{disabled:de,className:"".concat(m().mainButton," ").concat(m().spacerTop," primaryButton"),onClick:function(){return function(){return Qt.apply(this,arguments)}()},children:de?"Receiving an award...":"Claim Rewards"}),(0,u.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),(0,u.jsx)("h2",{className:"stakeYourStakedNfts",children:d("StakePage_YourStakedNfts","Your Staked NFTs")}),(0,u.jsx)("div",{className:"stakeYourStakedNftsDesc",children:d("StakePage_YourStakedNfts_Desc")}),(0,u.jsx)("div",{className:m().nftBoxGrid,children:Le?(0,u.jsx)("p",{className:m().tokenValue,children:(0,u.jsx)("b",{children:"Loading..."})}):(0,u.jsx)(u.Fragment,{children:Je.length>0?(0,u.jsx)(u.Fragment,{children:null===Je||void 0===Je?void 0:Je.map((function(e){return(0,v.Z)({tokenId:e,tokenUri:!!ze[e]&&ze[e],isApproved:Ee,onDeStake:function(){return function(e){return tn.apply(this,arguments)}(e)},onStake:null,isFetchUri:$e,deStakeId:It,stakeId:Ft,isStaking:Tt,isDeStaking:At,isApproveDo:Dt,isApproveId:Ot})}))}):(0,u.jsx)("p",{className:m().tokenValue,children:(0,u.jsx)("b",{children:"You dont have staked NFTs."})})})}),(0,u.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),(0,u.jsx)("h2",{className:"stakeYourUnstakedNfts",children:d("StakePage_YourUnStakedNfts","Your Unstaked NFTs")}),(0,u.jsx)("div",{className:"stakeYourUnstakedNftsDesc",children:d("StakePage_YourUnStakedNfts_Desc")}),(0,u.jsx)("div",{className:m().nftBoxGrid,children:ft?(0,u.jsx)("p",{className:m().tokenValue,children:(0,u.jsx)("b",{children:"Loading..."})}):(0,u.jsx)(u.Fragment,{children:st.length>0?(0,u.jsx)(u.Fragment,{children:null===st||void 0===st?void 0:st.map((function(e){return(0,v.Z)({tokenId:e,tokenUri:!!it[e]&&it[e],isApproved:Ee,onDeStake:null,onStake:function(){return $t(e)},isFetchUri:lt,deStakeId:It,stakeId:Ft,isStaking:Tt,isDeStaking:At,isApproveDo:Dt,isApproveId:Ot})}))}):(0,u.jsx)("p",{className:m().tokenValue,children:(0,u.jsx)("b",{children:"You dont have Unstaked NFTs."})})})})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"stakeBeforeConnectWallet",children:d("StakePage_BeforeConnect_Text")}),(0,u.jsx)("button",{disabled:Lt,className:"".concat(m().mainButton," primaryButton"),onClick:nn,children:Lt?"Connecting":"Connect Wallet"}),(0,u.jsx)("div",{className:"stakeAfterConnectWallet",children:d("StakePage_AfterConnect_Text")})]}),!1]})}},99312:function(e){"use strict";e.exports=JSON.parse('[{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')}},function(e){e.O(0,[497,853,774,888,179],(function(){return t=54997,e(e.s=t);var t}));var t=e.O();_N_E=t}]);