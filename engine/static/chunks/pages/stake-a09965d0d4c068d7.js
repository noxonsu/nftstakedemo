(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{54997:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stake",function(){return n(404)}])},55460:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var a=n(85893),s=n(11163),c=n(214),o=n.n(c),r=n(44423),i=n(10783),u=function(){var e;(0,s.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:o().mainLogo,children:(0,a.jsx)("a",{href:(0,r.R)("index"),children:(0,a.jsx)("img",{src:(e="images/logo.png","./assets/".concat(e)),alt:(0,i.Q)("Stake NFT - earn ERC20","MainPage_Header")})})})})}},404:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(47568),s=n(14924),c=n(26042),o=n(69396),r=n(10797),i=n(34051),u=n.n(i),l=n(85893),d=n(2593),f=n(35553),p=n(67294),h=n(214),m=n.n(h),k=n(78967),v=n(53419),g=n(15200),x=n(55460),S=n(10783),b=n(67297),w=n.n(b),y=function(e){var t=e.tokenId,n=e.tokenUri,a=e.isApproved,s=e.onDeStake,c=e.onStake,o=e.isFetchUri,r=e.deStakeId,i=e.stakeId,u=e.isStaking,d=e.isDeStaking,f=e.isApproveDo,p=e.isApproveId;return(0,l.jsxs)("div",{className:m().nftBox,children:[!1!==n&&w()(n)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{children:["#",t]}),(0,l.jsx)("img",{src:n})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h3",{children:["#",t]}),o&&(0,l.jsx)("h2",{children:"Fetch info"})]}),null!==s&&(0,l.jsx)("button",{disabled:d||u||f,className:"".concat(m().mainButton," ").concat(m().spacerBottom),onClick:s,children:d&&r===t?(0,l.jsx)(l.Fragment,{children:"De-staking..."}):(0,l.jsx)(l.Fragment,{children:"De-stake"})}),null!==c&&(0,l.jsx)("button",{className:"".concat(m().mainButton," ").concat(m().spacerBottom),onClick:c,disabled:d||u||f,children:u&&i===t?(0,l.jsx)(l.Fragment,{children:"Staking..."}):(0,l.jsx)(l.Fragment,{children:f&&p===t?(0,l.jsx)(l.Fragment,{children:"Approving..."}):(0,l.jsx)(l.Fragment,{children:a?"Stake":"Approve & Stake"})})})]},t.toString())},j=n(64914),N=n.n(j),C=n(26566),F=n(73853),T=JSON.parse('[{"constant":false,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'),R=n(64262),I=new(n(81586).vU)(C),A=function(e){console.log(e)},E=function(e){var t=e.storageData,n=e.isOwner,i=(0,p.useState)(null===t||void 0===t?void 0:t.chainId),h=i[0],b=i[1];console.log(">>> storageData",t,h);var w=(0,p.useState)(null===t||void 0===t?void 0:t.nftCollection),j=w[0],E=w[1],Z=(0,p.useState)(null===t||void 0===t?void 0:t.rewardToken),D=Z[0],B=Z[1],M=(0,p.useState)(null===t||void 0===t?void 0:t.farmContract),U=M[0],_=M[1],O=(0,p.useState)(!1),L=O[0],Y=O[1],P=(0,p.useState)(!1),W=P[0],H=P[1],V=(0,p.useState)(!1),G=V[0],J=V[1],X=(0,p.useState)(!1),Q=X[0],$=X[1],q=(0,p.useState)(!1),z=q[0],K=q[1],ee=(0,p.useState)(!1),te=ee[0],ne=ee[1],ae=(0,p.useState)(!1),se=ae[0],ce=ae[1],oe=(0,p.useState)(!0),re=(oe[0],oe[1]),ie=(0,p.useState)(!1),ue=ie[0],le=ie[1],de=(0,p.useState)(!1),fe=de[0],pe=de[1],he=(0,p.useState)(!1),me=he[0],ke=he[1],ve=(0,p.useState)(!1),ge=ve[0],xe=ve[1],Se=(0,p.useState)(!1),be=Se[0],we=Se[1],ye=(0,p.useState)(!0),je=(ye[0],ye[1]),Ne=(0,p.useState)(!1),Ce=(Ne[0],Ne[1]),Fe=(0,p.useState)(!1),Te=Fe[0],Re=Fe[1],Ie=(0,p.useState)(!0),Ae=Ie[0],Ee=Ie[1],Ze=(0,p.useState)(!1),De=Ze[0],Be=Ze[1],Me=(0,p.useState)(!1),Ue=Me[0],_e=Me[1],Oe=(0,p.useState)(!0),Le=(Oe[0],Oe[1]),Ye=(0,p.useState)(!0),Pe=Ye[0],We=Ye[1],He=(0,p.useState)(!1),Ve=(He[0],He[1]),Ge=(0,p.useState)([]),Je=Ge[0],Xe=Ge[1],Qe=(0,p.useState)({}),$e=Qe[0],qe=Qe[1],ze=(0,p.useState)(!1),Ke=ze[0],et=ze[1],tt=(0,p.useState)(!1),nt=(tt[0],tt[1]),at=(0,p.useState)([]),st=at[0],ct=at[1],ot=(0,p.useState)({}),rt=ot[0],it=ot[1],ut=(0,p.useState)(!0),lt=ut[0],dt=ut[1],ft=(0,p.useState)(!1),pt=(ft[0],ft[1],(0,p.useState)(!0)),ht=pt[0],mt=pt[1],kt=(0,p.useState)(!1),vt=(kt[0],kt[1]),gt=(0,p.useState)(!1),xt=(gt[0],gt[1]),St=(0,p.useState)(!1),bt=St[0],wt=St[1],yt=(0,p.useState)(!1),jt=yt[0],Nt=yt[1],Ct=(0,p.useState)(!1),Ft=Ct[0],Tt=Ct[1],Rt=(0,p.useState)(!1),It=Rt[0],At=Rt[1],Et=(0,p.useState)(!1),Zt=Et[0],Dt=Et[1],Bt=(0,p.useState)(!1),Mt=Bt[0],Ut=Bt[1],_t=(0,p.useState)(!1),Ot=_t[0],Lt=_t[1],Yt=(0,p.useState)(!1),Pt=Yt[0],Wt=Yt[1],Ht=(0,p.useState)(!1);Ht[0],Ht[1];(0,p.useEffect)((function(){t&&t.chainId&&t.nftCollection&&t.rewardToken&&t.farmContract&&(b(t.chainId),E(t.nftCollection),B(t.rewardToken),_(t.farmContract))}),[t]);var Vt=(0,p.useState)([]),Gt=Vt[0],Jt=Vt[1],Xt=(0,p.useState)(!1);Xt[0],Xt[1];(0,p.useEffect)((function(){var e=setTimeout((function(){var e=(0,r.Z)(Gt);e.shift(),Jt(e)}),5e3);return function(){return clearTimeout(e)}}),[Gt]);var Qt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=(0,r.Z)(Gt);n.push({msg:e,style:t}),Jt((0,r.Z)(n))},$t=function(e,t){var n=!1;try{n=e.message.replace("Internal JSON-RPC error.",""),n=JSON.parse(n)}catch(a){}switch(n&&n.message?n.message:e.message){case"execution reverted: You don't own this token!":console.log("You dont own this token");break;case"MetaMask Tx Signature: User denied transaction signature.":console.log("Transaction denied");break;case"execution reverted: ERC721: invalid token ID":console.log("Invalid token ID");break;default:console.log("Unkrnown error",e.message)}},qt=function(){A("do fetchAvailableReward");try{le(!1),re(!0),Q.methods.availableRewards(G).call().then((function(e){ce(e),re(!1)}))}catch(e){console.log(">>> fail fetchAvailableReward"),$t(e),le(!0)}},zt=function(){A("do fetchTotalRewardBalance"),Ee(!0),Be(!1),me&&me.methods.balanceOf(U).call().then((function(e){Re(e),Ee(!1)})).catch((function(e){Be(!0),console.log(">>> fetchTotalRewardBalance",e),$t(e)}))},Kt=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A("do fetchIsApproved"),Le(!0);try{z.methods.isApprovedForAll(G,U).call().then((function(e){_e(e),Le(!1)}))}catch(t){console.log(">>> fail check is approved"),$t(t),Le(!1)}case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),en=function(e){return A("do fetchTokenUris"),new Promise((function(t,n){if(G&&z&&te){var a=e.map((function(e){return{target:j,tokenId:e,callData:I.encodeFunctionData("tokenURI",[e])}}));te.methods.aggregate(a).call().then((function(n){var a={};n.returnData.forEach((function(t,n){var s=I.decodeFunctionResult("tokenURI",t)[0];a[e[n]]=s})),t(a)})).catch((function(e){$t(e),n()}))}else n()}))},tn=function(){var e=(0,a.Z)(u().mark((function e(){var t,n,a,s,c,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A("do fetchUserNfts"),!(G&&z&&te)||Pe){e.next=33;break}return mt(!0),vt(!1),t=!1,n=!1,a=0,s=0,e.prev=8,e.next=11,z.methods.totalSupply().call();case 11:a=e.sent,t=!0,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(8),console.log("Fail fetch total supply");case 18:return e.prev=18,e.next=21,z.methods.MAX_SUPPLY().call();case 21:s=e.sent,n=!0,e.next=28;break;case 25:e.prev=25,e.t1=e.catch(18),console.log("Fail fetch max supply");case 28:if(console.log("hasMaxSupply",n),console.log("hasTotalSupply",t),console.log("maxSupply",s),console.log("totalSupply",a),n||t){for(xt(!0),c=[],o=1;o<=(t?a:s);o++)c.push({target:j,callData:I.encodeFunctionData("ownerOf",[o])});te.methods.aggregate(c).call().then((function(e){var t=[];e.returnData.forEach((function(e,n){I.decodeFunctionResult("ownerOf",e)[0]===G&&t.push(n+1)})),ct(t),mt(!1),dt(!0),en(t).then((function(e){it(e),dt(!1)})).catch((function(e){dt(!1)}))})).catch((function(e){console.log(">>> fetchUserNfts",e),vt(!0),$t(e)}))}case 33:case"end":return e.stop()}}),e,null,[[8,15],[18,25]])})));return function(){return e.apply(this,arguments)}}();(0,p.useEffect)((function(){tn()}),[G,z,te,Q,Pe]);(0,p.useEffect)((function(){me&&(A("on useEffect rewardTokenContract"),me&&(Be(!1),Ce(!1),je(!0),me.methods.decimals().call().then((function(e){me.methods.symbol().call().then((function(t){je(!1),we(e),xe(t),zt()})).catch((function(e){console.log(">>> reward token info - fail fetch symbol"),Be(!0),Ce(!0)}))})).catch((function(e){console.log(">>> reward token info - fail fetch decimals"),Be(!0),Ce(!0)}))))}),[me]),(0,p.useEffect)((function(){Q&&G&&(A("on useEffect farmContract && address"),qt(),A("do fetchStakedNfts"),G&&Q&&(Ve(!1),nt(!1),We(!0),Q.methods.getStakedTokens(G).call().then((function(e){e=e.map((function(e){return e.tokenId})),Xe(e),We(!1),et(!0),en(e).then((function(e){qe(e),et(!1)})).catch((function(e){et(!1),nt(!0)}))})).catch((function(e){Ve(!0),console.log(">>> fail fetchStakedNfts",e),$t(e)}))))}),[G,Q]),(0,p.useEffect)((function(){G&&z&&(A("on useEffect address && nftContract"),Kt())}),[G,z]);var nn=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!W||"".concat(L)!="".concat(h)){e.next=4;break}W.eth.getAccounts().then((function(e){J(e[0]);var t=new W.eth.Contract(T,R.Ce[L]);console.log(t),ne(t);var n=new W.eth.Contract(C,j);K(n);var a=new W.eth.Contract(N(),D);ke(a);var s=new W.eth.Contract(F.Mt,U);$(s)})).catch((function(e){console.log(">>> initOnWeb3Ready",e),$t(e)})),e.next=8;break;case 4:return e.next=6,(0,k.IC)();case 6:e.sent&&rn();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function an(){return(an=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G||!Q){e.next=7;break}return pe(!0),Qt("Confirm transaction..."),e.next=5,(0,v.A)(G,Q,"claimRewards",[]);case 5:t=e.sent,Q.methods.claimRewards().send(t).then((function(e){qt(),zt(),pe(!1),Qt("Reward claimed","success")})).catch((function(e){pe(!1),console.log(">>> claimRewards",e),$t(e),Qt("Fail claim reward","error")}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function sn(e){return cn.apply(this,arguments)}function cn(){return cn=(0,a.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(G&&Q&&z)){e.next=22;break}if(n=function(){var e=(0,a.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Nt(!0),Tt(t),Qt("Confirm stake transaction"),e.next=6,(0,v.A)(G,Q,"stake",[t]);case 6:n=e.sent,Q.methods.stake(t).send(n).then((function(){var e=Je;e.push(t),Xe(e),qe((0,o.Z)((0,c.Z)({},$e),(0,s.Z)({},"".concat(t),rt[t]))),ct(st.filter((function(e){return"".concat(e)!=="".concat(t)}))),it((0,o.Z)((0,c.Z)({},rt),(0,s.Z)({},"".concat(t),!1))),Nt(!1),Tt(!1),Qt("NFT Staked!","success")})).catch((function(e){Qt("Stake transaction failed","error"),console.log(">> stakeNft",e),$t(e),Nt(!1),Tt(!1)})),e.next=17;break;case 10:e.prev=10,e.t0=e.catch(0),Qt("Stake transaction failed","error"),console.log(">> stakeNft calc gas",e.t0),$t(e.t0),Nt(!1),Tt(!1);case 17:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),Ue){e.next=21;break}return Lt(t),Ut(!0),Qt("Confirm approve transaction"),e.prev=6,e.next=9,(0,v.A)(G,z,"setApprovalForAll",[U,!0]);case 9:r=e.sent,z.methods.setApprovalForAll(U,!0).send(r).then(function(){var e=(0,a.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_e(!0),Ut(!1),Qt("Successfull approved!","success"),n();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){Qt("Fail approve transaction","error"),console.log(">> stakeNft do approve",e),Ut(!1),$t(e)})),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(6),Qt("Fail approve transaction","error"),console.log(">>> stakeNft do approve calc gas",e.t0),Ut(!1),$t(e.t0);case 19:e.next=22;break;case 21:n();case 22:case"end":return e.stop()}}),e,null,[[6,13]])}))),cn.apply(this,arguments)}function on(){return(on=(0,a.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G||!Q){e.next=18;break}return e.prev=1,At(!0),Dt(t),Qt("Confirm withdraw transaction"),e.next=7,(0,v.A)(G,Q,"withdraw",[t]);case 7:n=e.sent,Q.methods.withdraw(t).send(n).then((function(e){var n=st;n.push(t),ct(n),Xe(Je.filter((function(e){return e!==t}))),it((0,o.Z)((0,c.Z)({},rt),(0,s.Z)({},"".concat(t),$e[t]))),qe((0,o.Z)((0,c.Z)({},$e),(0,s.Z)({},"".concat(t),!1))),At(!1),Dt(!1),Qt("NFT withdrawed","success")})).catch((function(e){console.log(">>> withdraw",e),$t(e),At(!1),Dt(!1),Qt("Withdraw NFT transaction failed","error")})),e.next=18;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(">>> withdraw calc gas",e.t0),$t(e.t0),At(!1),Dt(!1),Qt("Withdraw NFT transaction failed","error");case 18:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}(0,p.useEffect)((function(){A("on useEffect activeWeb3 initOnWeb3Ready"),h&&j&&D&&U&&nn()}),[W,h,j,D,U]);var rn=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(">>> connectWithMetamask",h),(0,k.pE)({onBeforeConnect:function(){Wt(!0)},onSetActiveChain:Y,onConnected:function(e,t){H(t),Wt(!1)},onError:function(e){console.log(">>>> connectWithMetamask",e),$t(e),Wt(!1)},needChainId:h});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),un=(0,l.jsxs)("div",{className:"".concat(m().stakeCustomNftHolder),children:[(0,l.jsx)("b",{children:"Stake NFT by TokenId"}),(0,l.jsx)("input",{type:"number",onChange:function(e){return wt(e.target.value)}}),(0,l.jsx)("button",{className:"".concat(m().mainButton," ").concat(m().spacerBottom),onClick:function(){bt&&(console.log(">>> stake custom nft",bt),sn(d.O$.from(bt).toNumber()))},disabled:Mt||jt||It,children:Ue?"Stake":"Approve & Stake"})]}),ln=function(e){var t=e.message;e.onReload;return(0,l.jsx)("b",{children:t})};return(0,l.jsxs)("div",{className:m().container,children:[(0,g.Z)("stake",n),(0,x.Z)(),(0,l.jsx)("h1",{className:m().h1,children:(0,S.Q)("Stake Your NFTs - Earn ERC20","StakePage_Title")}),(0,l.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),G?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"Your reward"}),(0,l.jsxs)("div",{className:m().tokenGrid,children:[(0,l.jsxs)("div",{className:m().tokenItem,children:[(0,l.jsx)("h3",{className:m().tokenLabel,children:"Claimable Rewards"}),(0,l.jsx)("p",{className:m().tokenValue,children:ue?(0,l.jsx)(l.Fragment,{children:ln({message:"ERROR"})}):(0,l.jsx)("b",{children:se&&!1!==be&&!1!==ge?"".concat(f.bM(se,be)," ").concat(ge):"Loading..."})})]}),(0,l.jsxs)("div",{className:m().tokenItem,children:[(0,l.jsx)("h3",{className:m().tokenLabel,children:"Stake Farm balance"}),(0,l.jsx)("p",{className:m().tokenValue,children:De?(0,l.jsx)(l.Fragment,{children:ln({message:"ERROR"})}):(0,l.jsx)("b",{children:Ae||!Te||!1===be||!1===ge?"Loading...":"".concat(f.bM(Te,be)," ").concat(ge)})})]})]}),(0,l.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),(0,l.jsxs)("b",{children:["Connected wallet ",G]}),(0,l.jsx)("button",{disabled:fe,className:"".concat(m().mainButton," ").concat(m().spacerTop),onClick:function(){return function(){return an.apply(this,arguments)}()},children:fe?"Receiving an award...":"Claim Rewards"}),(0,l.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),(0,l.jsx)("h2",{children:"Your Staked NFTs"}),(0,l.jsx)("div",{className:m().nftBoxGrid,children:Pe?(0,l.jsx)("p",{className:m().tokenValue,children:(0,l.jsx)("b",{children:"Loading..."})}):(0,l.jsx)(l.Fragment,{children:Je.length>0?(0,l.jsx)(l.Fragment,{children:null===Je||void 0===Je?void 0:Je.map((function(e){return y({tokenId:e,tokenUri:!!$e[e]&&$e[e],isApproved:Ue,onDeStake:function(){return function(e){return on.apply(this,arguments)}(e)},onStake:null,isFetchUri:Ke,deStakeId:Zt,stakeId:Ft,isStaking:jt,isDeStaking:It,isApproveDo:Mt,isApproveId:Ot})}))}):(0,l.jsx)("p",{className:m().tokenValue,children:(0,l.jsx)("b",{children:"You dont have staked NFTs."})})})}),(0,l.jsx)("hr",{className:"".concat(m().divider," ").concat(m().spacerTop)}),(0,l.jsx)("h2",{children:"Your Unstaked NFTs"}),un,(0,l.jsx)("div",{className:m().nftBoxGrid,children:ht?(0,l.jsx)("p",{className:m().tokenValue,children:(0,l.jsx)("b",{children:"Loading..."})}):(0,l.jsx)(l.Fragment,{children:st.length>0?(0,l.jsx)(l.Fragment,{children:null===st||void 0===st?void 0:st.map((function(e){return y({tokenId:e,tokenUri:!!rt[e]&&rt[e],isApproved:Ue,onDeStake:null,onStake:function(){return sn(e)},isFetchUri:lt,deStakeId:Zt,stakeId:Ft,isStaking:jt,isDeStaking:It,isApproveDo:Mt,isApproveId:Ot})}))}):(0,l.jsx)("p",{className:m().tokenValue,children:(0,l.jsx)("b",{children:"You dont have Unstaked NFTs."})})})})]}):(0,l.jsx)("button",{disabled:Pt,className:m().mainButton,onClick:rn,children:Pt?"Connecting":"Connect Wallet"}),!1,Gt.length>0&&(0,l.jsx)("div",{className:m().notifyHolder,children:Gt.map((function(e,t){return(0,l.jsx)("div",{className:"".concat(e.style?m()[e.style]:m().info),children:e.msg},t)}))})]})}},24654:function(){}},function(e){e.O(0,[885,586,369,297,821,774,888,179],(function(){return t=54997,e(e.s=t);var t}));var t=e.O();_N_E=t}]);