(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[687],{17537:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mint",function(){return t(20631)}])},67333:function(e,n,t){"use strict";var a=t(85893),s=t(11163),i=t(214),r=t.n(i),o=t(36485);n.Z=function(e){(0,s.useRouter)();var n=e.getDesign,t=e.getText;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"".concat(r().mainLogo," logoAddParams"),children:(0,a.jsx)("a",{href:(0,o.Rg)("index"),children:(0,a.jsx)("img",{src:n("logoUri","uri",(0,o.Vh)("images/logo.png","mainLogo")),alt:t("Stake NFT - earn ERC20","MainPage_Header")})})})})}},77695:function(e,n,t){"use strict";var a=t(85893),s=t(214),i=t.n(s),r=t(27129),o=t(44423);n.Z=function(e){var n=e.tokenId,t=e.tokenUri,s=e.isApproved,c=e.onDeStake,u=e.onStake,l=e.isFetchUri,p=e.deStakeId,d=e.stakeId,m=e.isStaking,y=e.isDeStaking,g=e.isApproveDo,f=e.isApproveId,h=e.isMinted;return(0,a.jsxs)("div",{className:"".concat(i().nftBox," nftTokenBox"),children:[!1!==t&&(0,r.Z)(t)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h3",{children:["#",n]}),(0,a.jsx)("img",{src:t})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h3",{children:["#",n]}),l&&(0,a.jsx)("h2",{children:"Fetch info"})]}),h?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("a",{className:"".concat(i().mainButton," ").concat(i().spacerBottom," primaryButton"),href:(0,o.R)("stake"),children:"Go to staking"})}):(0,a.jsxs)(a.Fragment,{children:[null!==c&&(0,a.jsx)("button",{disabled:y||m||g,className:"".concat(i().mainButton," ").concat(i().spacerBottom," primaryButton"),onClick:c,children:y&&p===n?(0,a.jsx)(a.Fragment,{children:"De-staking..."}):(0,a.jsx)(a.Fragment,{children:"De-stake"})}),null!==u&&(0,a.jsx)("button",{className:"".concat(i().mainButton," ").concat(i().spacerBottom," primaryButton"),onClick:u,disabled:y||m||g,children:m&&d===n?(0,a.jsx)(a.Fragment,{children:"Staking..."}):(0,a.jsx)(a.Fragment,{children:g&&f===n?(0,a.jsx)(a.Fragment,{children:"Approving..."}):(0,a.jsx)(a.Fragment,{children:s?"Stake":"Approve & Stake"})})})]})]},n.toString())}},20631:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var a=t(47568),s=t(26042),i=t(69396),r=t(34051),o=t.n(r),c=t(85893),u=t(67294),l=t(214),p=t.n(l),d=t(78967),m=t(53419),y=t(15200),g=t(67333),f=t(36485),h=t(76969),T=t(61936),b=t(42474),v=t.n(b),x=t(77695),k=t(40589),w=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"tokenURI","type":"string"}],"name":"claimNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"string","name":"tokenURI","type":"string"}],"name":"mintNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]'),F=t(64262),M=t(5329),N=function(e){var n=e.storageData,t=e.isOwner,r=e.addNotify,l=e.getText,b=e.getDesign,N=["https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/apple.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/bar.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/bell.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/cherry.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/lemon.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/orange.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/plum.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/seven.png","https://github.com/shendel/crypto-casino/raw/master/public/images/games/slots/symbols/water-melon.png"],j=(0,u.useState)(null===n||void 0===n?void 0:n.chainId),S=j[0],I=j[1],C=(0,u.useState)(null===n||void 0===n?void 0:n.nftCollection),P=C[0],_=C[1],B=(0,u.useState)({}),A=B[0],O=B[1],D=(0,u.useState)(!1),E=D[0],Z=D[1],R=(0,u.useState)(!1),U=R[0],W=R[1],L=(0,u.useState)(!1),V=L[0],X=L[1],J=(0,u.useState)(!1),Y=J[0],G=J[1],H=(0,u.useState)(!1),q=H[0],z=H[1],K=(0,u.useState)(!1),Q=K[0],$=K[1],ee=(0,u.useState)(!1),ne=ee[0],te=ee[1],ae=(0,u.useState)(!1),se=ae[0],ie=ae[1],re=(0,u.useState)(!1),oe=re[0],ce=re[1],ue=(0,u.useState)({}),le=ue[0],pe=ue[1],de=function(e,n){var t=!1;try{t=e.message.replace("Internal JSON-RPC error.",""),t=JSON.parse(t)}catch(a){}switch(t&&t.message?t.message:e.message){case"execution reverted: You don't own this token!":console.log("You dont own this token");break;case"MetaMask Tx Signature: User denied transaction signature.":console.log("Transaction denied");break;case"execution reverted: ERC721: invalid token ID":console.log("Invalid token ID");break;default:console.log("Unkrnown error",e.message)}},me=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!V||"".concat(U)!="".concat(S)){e.next=4;break}V.eth.getAccounts().then((function(e){G(e[0]);var n=new V.eth.Contract(w,P);z(n);var t=new V.eth.Contract(k.Mt,P);$(t),(0,h.Z)(P,S).then((function(e){console.log(">>> nft info fetched",e),O(e),Z(!0)})).catch((function(e){console.log(">>> fail fetch nft info",e)}))})).catch((function(e){console.log(">>> initOnWeb3Ready",e),de(e)})),e.next=8;break;case 4:return e.next=6,(0,d.IC)();case 6:e.sent&&ye();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){n&&n.chainId&&n.nftCollection&&(I(n.chainId),_(n.nftCollection))}),[n]),(0,u.useEffect)((function(){var e;e="on useEffect activeWeb3 initOnWeb3Ready",console.log(e),S&&P&&me()}),[V,S,P]);var ye=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,d.pE)({onBeforeConnect:function(){te(!0)},onSetActiveChain:W,onConnected:function(e,n){X(n),te(!1)},onError:function(e){console.log(">>>> connectWithMetamask",e),de(e),te(!1)},needChainId:S});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,a.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y&&Q&&(ie(!0),r("Confirm transaction for mint NFT"),n=v().randomBytes(32).toString("hex"),console.log(A),(0,T.Z)({activeWeb3:V,contractAddress:P,method:"mintRandom",weiAmount:A.NFTStakeInfo.mintPrice,args:["0x".concat(n)],onTrx:function(e){console.log(">> onTrx",e),r("NFT mint TX ".concat(e),"success")},onSuccess:function(e){console.log(">> onSuccess",e),r("NFT mint transaction broadcasted","success")},onError:function(e){console.log(">> onError",e),r("Fail mint NFT. ".concat(e.message?e.message:""),"error")},onFinally:function(e){var n,t,a,s,i,o;if(console.log(">> onFinally",e),(null===e||void 0===e||null===(n=e.events)||void 0===n||null===(t=n.Mint)||void 0===t||null===(a=t.returnValues)||void 0===a?void 0:a.tokenUri)&&(null===e||void 0===e||null===(s=e.events)||void 0===s||null===(i=s.Mint)||void 0===i||null===(o=i.returnValues)||void 0===o?void 0:o.tokenId)){var c=e.events.Mint.returnValues,u=c.tokenId,l=c.tokenUri;pe({tokenId:u,tokenUri:l}),r("NFT #".concat(u," minted!"),"success")}ie(!1),ce(!0)}}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=(0,a.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y||!q){e.next=15;break}return ie(!0),r("Confirm transaction for mint demo NFT"),e.prev=3,n=N[Math.floor(Math.random()*N.length)],e.next=7,(0,m.A)(Y,q,"claimNFT",[n]);case 7:t=e.sent,q.methods.claimNFT(n).send(t).then((function(){ce(!0),ie(!1),r("Demo NFT minted! Now you can test stake farm.","success")})).catch((function(e){r("Mint demo NFT transaction failed","error"),ie(!1)})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),r("Mint demo NFT transaction failed","error"),ie(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),he=(0,F.T_)(S);return(0,c.jsxs)("div",{className:p().container,children:[(0,y.Z)("mint",t),(0,g.Z)({getText:l,getDesign:b}),(0,c.jsx)("h1",{className:"".concat(p().h1," pageTitle"),children:l("MintPage_Title","Mint Demo NFTs for test")}),(0,c.jsx)("hr",{className:"".concat(p().divider," ").concat(p().spacerTop)}),Y?(0,c.jsx)(c.Fragment,{children:E?(0,c.jsx)(c.Fragment,{children:A.isNFTStakeToken?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{className:"mintPageSubTitle",children:l("MintPage_Managed_Title","Mint NFT")}),(0,c.jsx)("div",{className:"mintPageTextBeforePrice",children:l("MintPage_TextBeforePrice")}),(0,c.jsx)("div",{className:"".concat(p().mintPageDesc," mintPagePrice"),children:l("MintPage_Managed_PriceInfo","Mint price is %amount% %currency%",{amount:(0,M.m)(A.NFTStakeInfo.mintPrice,he.nativeCurrency.decimals),currency:he.nativeCurrency.symbol})}),(0,c.jsx)("div",{className:"mintPageTextAfterPrice",children:l("MintPage_TextAfterPrice")}),(0,c.jsx)("div",{className:p().mintPageMintedHolder,children:(0,c.jsx)("button",{disabled:se,className:"".concat(p().mainButton," primaryButton"),onClick:ge,children:se?"Minting NFT...":oe?"Mint some one":"Mint NFT"})}),le&&le.tokenId&&le.tokenUri&&(0,c.jsx)(c.Fragment,{children:(0,x.Z)((0,i.Z)((0,s.Z)({},le),{isMinted:!0}))})]}):(0,c.jsx)(c.Fragment,{children:oe?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h2",{children:"Demo NFT minted"}),(0,c.jsx)("a",{href:(0,f.Rg)("stake"),className:"".concat(p().mainButton," primaryButton"),children:"Go to Stake NFT"})]}):(0,c.jsx)("button",{disabled:se,className:"".concat(p().mainButton," primaryButton"),onClick:fe,children:se?"Minting NFT...":"Mint NFT"})})}):(0,c.jsx)("div",{children:l("MinPage_Loading","Loading...")})}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"mintBeforeConnectWallet",children:l("StakePage_BeforeConnect_Text")}),(0,c.jsx)("button",{disabled:ne,className:"".concat(p().mainButton," primaryButton"),onClick:ye,children:ne?"Connecting":"Connect Wallet"}),(0,c.jsx)("div",{className:"mintAfterConnectWallet",children:l("StakePage_AfterConnect_Text")})]})]})}}},function(e){e.O(0,[497,252,774,888,179],(function(){return n=17537,e(e.s=n);var n}));var n=e.O();_N_E=n}]);