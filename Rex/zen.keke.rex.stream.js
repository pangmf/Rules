WidgetMetadata = {
  id: "zen.keke.rex.stream",
  title: "可可影视播放源",
  description: "从可可影视搜索正片、按集取流，自动刷新匿名会话与动态域名，过滤不可播放线路。仅使用无需登录会员及加速权限的片源。",
  author: "TG@ZenMoFiShi",
  site: "https://kekys.com",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  modules: [{
    id: "loadResource",
    title: "可可影视",
    functionName: "loadResource",
    description: "电影、电视剧、动漫和综艺多线路播放源",
    type: "stream",
    cacheDuration: 0,
    requiresWebView: false,
    params: []
  }]
};

var KKCrypto=(()=>{var $=(k=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(k,{get:(u,A)=>(typeof require!="undefined"?require:u)[A]}):k)(function(k){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+k+'" is not supported')});var I=(k,u)=>()=>{try{return u||k((u={exports:{}}).exports,u),u.exports}catch(A){throw u=0,A}};var N=I((O,rr)=>{(function(k,u){typeof O=="object"?rr.exports=O=u():typeof define=="function"&&define.amd?define([],u):k.CryptoJS=u()})(O,function(){var k=k||(function(u,A){var w;if(typeof window!="undefined"&&window.crypto&&(w=window.crypto),typeof self!="undefined"&&self.crypto&&(w=self.crypto),typeof globalThis!="undefined"&&globalThis.crypto&&(w=globalThis.crypto),!w&&typeof window!="undefined"&&window.msCrypto&&(w=window.msCrypto),!w&&typeof global!="undefined"&&global.crypto&&(w=global.crypto),!w&&typeof $=="function")try{w=$("crypto")}catch(r){}var K=function(){if(w){if(typeof w.getRandomValues=="function")try{return w.getRandomValues(new Uint32Array(1))[0]}catch(r){}if(typeof w.randomBytes=="function")try{return w.randomBytes(4).readInt32LE()}catch(r){}}throw new Error("Native crypto module could not be used to get secure random number.")},H=Object.create||(function(){function r(){}return function(e){var v;return r.prototype=e,v=new r,r.prototype=null,v}})(),P={},n=P.lib={},m=n.Base=(function(){return{extend:function(r){var e=H(this);return r&&e.mixIn(r),(!e.hasOwnProperty("init")||this.init===e.init)&&(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var r=this.extend();return r.init.apply(r,arguments),r},init:function(){},mixIn:function(r){for(var e in r)r.hasOwnProperty(e)&&(this[e]=r[e]);r.hasOwnProperty("toString")&&(this.toString=r.toString)},clone:function(){return this.init.prototype.extend(this)}}})(),_=n.WordArray=m.extend({init:function(r,e){r=this.words=r||[],e!=A?this.sigBytes=e:this.sigBytes=r.length*4},toString:function(r){return(r||x).stringify(this)},concat:function(r){var e=this.words,v=r.words,h=this.sigBytes,C=r.sigBytes;if(this.clamp(),h%4)for(var z=0;z<C;z++){var F=v[z>>>2]>>>24-z%4*8&255;e[h+z>>>2]|=F<<24-(h+z)%4*8}else for(var B=0;B<C;B+=4)e[h+B>>>2]=v[B>>>2];return this.sigBytes+=C,this},clamp:function(){var r=this.words,e=this.sigBytes;r[e>>>2]&=4294967295<<32-e%4*8,r.length=u.ceil(e/4)},clone:function(){var r=m.clone.call(this);return r.words=this.words.slice(0),r},random:function(r){for(var e=[],v=0;v<r;v+=4)e.push(K());return new _.init(e,r)}}),d=P.enc={},x=d.Hex={stringify:function(r){for(var e=r.words,v=r.sigBytes,h=[],C=0;C<v;C++){var z=e[C>>>2]>>>24-C%4*8&255;h.push((z>>>4).toString(16)),h.push((z&15).toString(16))}return h.join("")},parse:function(r){for(var e=r.length,v=[],h=0;h<e;h+=2)v[h>>>3]|=parseInt(r.substr(h,2),16)<<24-h%8*4;return new _.init(v,e/2)}},l=d.Latin1={stringify:function(r){for(var e=r.words,v=r.sigBytes,h=[],C=0;C<v;C++){var z=e[C>>>2]>>>24-C%4*8&255;h.push(String.fromCharCode(z))}return h.join("")},parse:function(r){for(var e=r.length,v=[],h=0;h<e;h++)v[h>>>2]|=(r.charCodeAt(h)&255)<<24-h%4*8;return new _.init(v,e)}},p=d.Utf8={stringify:function(r){try{return decodeURIComponent(escape(l.stringify(r)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(r){return l.parse(unescape(encodeURIComponent(r)))}},y=n.BufferedBlockAlgorithm=m.extend({reset:function(){this._data=new _.init,this._nDataBytes=0},_append:function(r){typeof r=="string"&&(r=p.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes},_process:function(r){var e,v=this._data,h=v.words,C=v.sigBytes,z=this.blockSize,F=z*4,B=C/F;r?B=u.ceil(B):B=u.max((B|0)-this._minBufferSize,0);var W=B*z,q=u.min(W*4,C);if(W){for(var t=0;t<W;t+=z)this._doProcessBlock(h,t);e=h.splice(0,W),v.sigBytes-=q}return new _.init(e,q)},clone:function(){var r=m.clone.call(this);return r._data=this._data.clone(),r},_minBufferSize:0}),E=n.Hasher=y.extend({cfg:m.extend(),init:function(r){this.cfg=this.cfg.extend(r),this.reset()},reset:function(){y.reset.call(this),this._doReset()},update:function(r){return this._append(r),this._process(),this},finalize:function(r){r&&this._append(r);var e=this._doFinalize();return e},blockSize:512/32,_createHelper:function(r){return function(e,v){return new r.init(v).finalize(e)}},_createHmacHelper:function(r){return function(e,v){return new b.HMAC.init(r,v).finalize(e)}}}),b=P.algo={};return P})(Math);return k})});var Q=I((T,er)=>{(function(k,u){typeof T=="object"?er.exports=T=u(N()):typeof define=="function"&&define.amd?define(["./core"],u):u(k.CryptoJS)})(T,function(k){return(function(){var u=k,A=u.lib,w=A.WordArray,K=u.enc,H=K.Base64={stringify:function(n){var m=n.words,_=n.sigBytes,d=this._map;n.clamp();for(var x=[],l=0;l<_;l+=3)for(var p=m[l>>>2]>>>24-l%4*8&255,y=m[l+1>>>2]>>>24-(l+1)%4*8&255,E=m[l+2>>>2]>>>24-(l+2)%4*8&255,b=p<<16|y<<8|E,r=0;r<4&&l+r*.75<_;r++)x.push(d.charAt(b>>>6*(3-r)&63));var e=d.charAt(64);if(e)for(;x.length%4;)x.push(e);return x.join("")},parse:function(n){var m=n.length,_=this._map,d=this._reverseMap;if(!d){d=this._reverseMap=[];for(var x=0;x<_.length;x++)d[_.charCodeAt(x)]=x}var l=_.charAt(64);if(l){var p=n.indexOf(l);p!==-1&&(m=p)}return P(n,m,d)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};function P(n,m,_){for(var d=[],x=0,l=0;l<m;l++)if(l%4){var p=_[n.charCodeAt(l-1)]<<l%4*2,y=_[n.charCodeAt(l)]>>>6-l%4*2,E=p|y;d[x>>>2]|=E<<24-x%4*8,x++}return w.create(d,x)}})(),k.enc.Base64})});var Y=I((V,tr)=>{(function(k,u){typeof V=="object"?tr.exports=V=u(N()):typeof define=="function"&&define.amd?define(["./core"],u):u(k.CryptoJS)})(V,function(k){return(function(){var u=k,A=u.lib,w=A.WordArray,K=A.Hasher,H=u.algo,P=[],n=H.SHA1=K.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(m,_){for(var d=this._hash.words,x=d[0],l=d[1],p=d[2],y=d[3],E=d[4],b=0;b<80;b++){if(b<16)P[b]=m[_+b]|0;else{var r=P[b-3]^P[b-8]^P[b-14]^P[b-16];P[b]=r<<1|r>>>31}var e=(x<<5|x>>>27)+E+P[b];b<20?e+=(l&p|~l&y)+1518500249:b<40?e+=(l^p^y)+1859775393:b<60?e+=(l&p|l&y|p&y)-1894007588:e+=(l^p^y)-899497514,E=y,y=p,p=l<<30|l>>>2,l=x,x=e}d[0]=d[0]+x|0,d[1]=d[1]+l|0,d[2]=d[2]+p|0,d[3]=d[3]+y|0,d[4]=d[4]+E|0},_doFinalize:function(){var m=this._data,_=m.words,d=this._nDataBytes*8,x=m.sigBytes*8;return _[x>>>5]|=128<<24-x%32,_[(x+64>>>9<<4)+14]=Math.floor(d/4294967296),_[(x+64>>>9<<4)+15]=d,m.sigBytes=_.length*4,this._process(),this._hash},clone:function(){var m=K.clone.call(this);return m._hash=this._hash.clone(),m}});u.SHA1=K._createHelper(n),u.HmacSHA1=K._createHmacHelper(n)})(),k.SHA1})});var Z=I((M,nr)=>{(function(k,u){typeof M=="object"?nr.exports=M=u(N()):typeof define=="function"&&define.amd?define(["./core"],u):u(k.CryptoJS)})(M,function(k){(function(){var u=k,A=u.lib,w=A.Base,K=u.enc,H=K.Utf8,P=u.algo,n=P.HMAC=w.extend({init:function(m,_){m=this._hasher=new m.init,typeof _=="string"&&(_=H.parse(_));var d=m.blockSize,x=d*4;_.sigBytes>x&&(_=m.finalize(_)),_.clamp();for(var l=this._oKey=_.clone(),p=this._iKey=_.clone(),y=l.words,E=p.words,b=0;b<d;b++)y[b]^=1549556828,E[b]^=909522486;l.sigBytes=p.sigBytes=x,this.reset()},reset:function(){var m=this._hasher;m.reset(),m.update(this._iKey)},update:function(m){return this._hasher.update(m),this},finalize:function(m){var _=this._hasher,d=_.finalize(m);_.reset();var x=_.finalize(this._oKey.clone().concat(d));return x}})})()})});var ar=I((U,ir)=>{(function(k,u){typeof U=="object"?ir.exports=U=u(N()):typeof define=="function"&&define.amd?define(["./core"],u):u(k.CryptoJS)})(U,function(k){return(function(u){var A=k,w=A.lib,K=w.WordArray,H=w.Hasher,P=A.algo,n=[];(function(){for(var p=0;p<64;p++)n[p]=u.abs(u.sin(p+1))*4294967296|0})();var m=P.MD5=H.extend({_doReset:function(){this._hash=new K.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(p,y){for(var E=0;E<16;E++){var b=y+E,r=p[b];p[b]=(r<<8|r>>>24)&16711935|(r<<24|r>>>8)&4278255360}var e=this._hash.words,v=p[y+0],h=p[y+1],C=p[y+2],z=p[y+3],F=p[y+4],B=p[y+5],W=p[y+6],q=p[y+7],t=p[y+8],c=p[y+9],g=p[y+10],a=p[y+11],S=p[y+12],D=p[y+13],L=p[y+14],R=p[y+15],i=e[0],o=e[1],s=e[2],f=e[3];i=_(i,o,s,f,v,7,n[0]),f=_(f,i,o,s,h,12,n[1]),s=_(s,f,i,o,C,17,n[2]),o=_(o,s,f,i,z,22,n[3]),i=_(i,o,s,f,F,7,n[4]),f=_(f,i,o,s,B,12,n[5]),s=_(s,f,i,o,W,17,n[6]),o=_(o,s,f,i,q,22,n[7]),i=_(i,o,s,f,t,7,n[8]),f=_(f,i,o,s,c,12,n[9]),s=_(s,f,i,o,g,17,n[10]),o=_(o,s,f,i,a,22,n[11]),i=_(i,o,s,f,S,7,n[12]),f=_(f,i,o,s,D,12,n[13]),s=_(s,f,i,o,L,17,n[14]),o=_(o,s,f,i,R,22,n[15]),i=d(i,o,s,f,h,5,n[16]),f=d(f,i,o,s,W,9,n[17]),s=d(s,f,i,o,a,14,n[18]),o=d(o,s,f,i,v,20,n[19]),i=d(i,o,s,f,B,5,n[20]),f=d(f,i,o,s,g,9,n[21]),s=d(s,f,i,o,R,14,n[22]),o=d(o,s,f,i,F,20,n[23]),i=d(i,o,s,f,c,5,n[24]),f=d(f,i,o,s,L,9,n[25]),s=d(s,f,i,o,z,14,n[26]),o=d(o,s,f,i,t,20,n[27]),i=d(i,o,s,f,D,5,n[28]),f=d(f,i,o,s,C,9,n[29]),s=d(s,f,i,o,q,14,n[30]),o=d(o,s,f,i,S,20,n[31]),i=x(i,o,s,f,B,4,n[32]),f=x(f,i,o,s,t,11,n[33]),s=x(s,f,i,o,a,16,n[34]),o=x(o,s,f,i,L,23,n[35]),i=x(i,o,s,f,h,4,n[36]),f=x(f,i,o,s,F,11,n[37]),s=x(s,f,i,o,q,16,n[38]),o=x(o,s,f,i,g,23,n[39]),i=x(i,o,s,f,D,4,n[40]),f=x(f,i,o,s,v,11,n[41]),s=x(s,f,i,o,z,16,n[42]),o=x(o,s,f,i,W,23,n[43]),i=x(i,o,s,f,c,4,n[44]),f=x(f,i,o,s,S,11,n[45]),s=x(s,f,i,o,R,16,n[46]),o=x(o,s,f,i,C,23,n[47]),i=l(i,o,s,f,v,6,n[48]),f=l(f,i,o,s,q,10,n[49]),s=l(s,f,i,o,L,15,n[50]),o=l(o,s,f,i,B,21,n[51]),i=l(i,o,s,f,S,6,n[52]),f=l(f,i,o,s,z,10,n[53]),s=l(s,f,i,o,g,15,n[54]),o=l(o,s,f,i,h,21,n[55]),i=l(i,o,s,f,t,6,n[56]),f=l(f,i,o,s,R,10,n[57]),s=l(s,f,i,o,W,15,n[58]),o=l(o,s,f,i,D,21,n[59]),i=l(i,o,s,f,F,6,n[60]),f=l(f,i,o,s,a,10,n[61]),s=l(s,f,i,o,C,15,n[62]),o=l(o,s,f,i,c,21,n[63]),e[0]=e[0]+i|0,e[1]=e[1]+o|0,e[2]=e[2]+s|0,e[3]=e[3]+f|0},_doFinalize:function(){var p=this._data,y=p.words,E=this._nDataBytes*8,b=p.sigBytes*8;y[b>>>5]|=128<<24-b%32;var r=u.floor(E/4294967296),e=E;y[(b+64>>>9<<4)+15]=(r<<8|r>>>24)&16711935|(r<<24|r>>>8)&4278255360,y[(b+64>>>9<<4)+14]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360,p.sigBytes=(y.length+1)*4,this._process();for(var v=this._hash,h=v.words,C=0;C<4;C++){var z=h[C];h[C]=(z<<8|z>>>24)&16711935|(z<<24|z>>>8)&4278255360}return v},clone:function(){var p=H.clone.call(this);return p._hash=this._hash.clone(),p}});function _(p,y,E,b,r,e,v){var h=p+(y&E|~y&b)+r+v;return(h<<e|h>>>32-e)+y}function d(p,y,E,b,r,e,v){var h=p+(y&b|E&~b)+r+v;return(h<<e|h>>>32-e)+y}function x(p,y,E,b,r,e,v){var h=p+(y^E^b)+r+v;return(h<<e|h>>>32-e)+y}function l(p,y,E,b,r,e,v){var h=p+(E^(y|~b))+r+v;return(h<<e|h>>>32-e)+y}A.MD5=H._createHelper(m),A.HmacMD5=H._createHmacHelper(m)})(Math),k.MD5})});var X=I((j,or)=>{(function(k,u,A){typeof j=="object"?or.exports=j=u(N(),Y(),Z()):typeof define=="function"&&define.amd?define(["./core","./sha1","./hmac"],u):u(k.CryptoJS)})(j,function(k){return(function(){var u=k,A=u.lib,w=A.Base,K=A.WordArray,H=u.algo,P=H.MD5,n=H.EvpKDF=w.extend({cfg:w.extend({keySize:128/32,hasher:P,iterations:1}),init:function(m){this.cfg=this.cfg.extend(m)},compute:function(m,_){for(var d,x=this.cfg,l=x.hasher.create(),p=K.create(),y=p.words,E=x.keySize,b=x.iterations;y.length<E;){d&&l.update(d),d=l.update(m).finalize(_),l.reset();for(var r=1;r<b;r++)d=l.finalize(d),l.reset();p.concat(d)}return p.sigBytes=E*4,p}});u.EvpKDF=function(m,_,d){return n.create(d).compute(m,_)}})(),k.EvpKDF})});var fr=I((J,sr)=>{(function(k,u,A){typeof J=="object"?sr.exports=J=u(N(),X()):typeof define=="function"&&define.amd?define(["./core","./evpkdf"],u):u(k.CryptoJS)})(J,function(k){k.lib.Cipher||(function(u){var A=k,w=A.lib,K=w.Base,H=w.WordArray,P=w.BufferedBlockAlgorithm,n=A.enc,m=n.Utf8,_=n.Base64,d=A.algo,x=d.EvpKDF,l=w.Cipher=P.extend({cfg:K.extend(),createEncryptor:function(t,c){return this.create(this._ENC_XFORM_MODE,t,c)},createDecryptor:function(t,c){return this.create(this._DEC_XFORM_MODE,t,c)},init:function(t,c,g){this.cfg=this.cfg.extend(g),this._xformMode=t,this._key=c,this.reset()},reset:function(){P.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var c=this._doFinalize();return c},keySize:128/32,ivSize:128/32,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:(function(){function t(c){return typeof c=="string"?q:F}return function(c){return{encrypt:function(g,a,S){return t(a).encrypt(c,g,a,S)},decrypt:function(g,a,S){return t(a).decrypt(c,g,a,S)}}}})()}),p=w.StreamCipher=l.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),y=A.mode={},E=w.BlockCipherMode=K.extend({createEncryptor:function(t,c){return this.Encryptor.create(t,c)},createDecryptor:function(t,c){return this.Decryptor.create(t,c)},init:function(t,c){this._cipher=t,this._iv=c}}),b=y.CBC=(function(){var t=E.extend();t.Encryptor=t.extend({processBlock:function(g,a){var S=this._cipher,D=S.blockSize;c.call(this,g,a,D),S.encryptBlock(g,a),this._prevBlock=g.slice(a,a+D)}}),t.Decryptor=t.extend({processBlock:function(g,a){var S=this._cipher,D=S.blockSize,L=g.slice(a,a+D);S.decryptBlock(g,a),c.call(this,g,a,D),this._prevBlock=L}});function c(g,a,S){var D,L=this._iv;L?(D=L,this._iv=u):D=this._prevBlock;for(var R=0;R<S;R++)g[a+R]^=D[R]}return t})(),r=A.pad={},e=r.Pkcs7={pad:function(t,c){for(var g=c*4,a=g-t.sigBytes%g,S=a<<24|a<<16|a<<8|a,D=[],L=0;L<a;L+=4)D.push(S);var R=H.create(D,a);t.concat(R)},unpad:function(t){var c=t.words[t.sigBytes-1>>>2]&255;t.sigBytes-=c}},v=w.BlockCipher=l.extend({cfg:l.cfg.extend({mode:b,padding:e}),reset:function(){var t;l.reset.call(this);var c=this.cfg,g=c.iv,a=c.mode;this._xformMode==this._ENC_XFORM_MODE?t=a.createEncryptor:(t=a.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,g&&g.words):(this._mode=t.call(a,this,g&&g.words),this._mode.__creator=t)},_doProcessBlock:function(t,c){this._mode.processBlock(t,c)},_doFinalize:function(){var t,c=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(c.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),c.unpad(t)),t},blockSize:128/32}),h=w.CipherParams=K.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),C=A.format={},z=C.OpenSSL={stringify:function(t){var c,g=t.ciphertext,a=t.salt;return a?c=H.create([1398893684,1701076831]).concat(a).concat(g):c=g,c.toString(_)},parse:function(t){var c,g=_.parse(t),a=g.words;return a[0]==1398893684&&a[1]==1701076831&&(c=H.create(a.slice(2,4)),a.splice(0,4),g.sigBytes-=16),h.create({ciphertext:g,salt:c})}},F=w.SerializableCipher=K.extend({cfg:K.extend({format:z}),encrypt:function(t,c,g,a){a=this.cfg.extend(a);var S=t.createEncryptor(g,a),D=S.finalize(c),L=S.cfg;return h.create({ciphertext:D,key:g,iv:L.iv,algorithm:t,mode:L.mode,padding:L.padding,blockSize:t.blockSize,formatter:a.format})},decrypt:function(t,c,g,a){a=this.cfg.extend(a),c=this._parse(c,a.format);var S=t.createDecryptor(g,a).finalize(c.ciphertext);return S},_parse:function(t,c){return typeof t=="string"?c.parse(t,this):t}}),B=A.kdf={},W=B.OpenSSL={execute:function(t,c,g,a,S){if(a||(a=H.random(64/8)),S)var D=x.create({keySize:c+g,hasher:S}).compute(t,a);else var D=x.create({keySize:c+g}).compute(t,a);var L=H.create(D.words.slice(c),g*4);return D.sigBytes=c*4,h.create({key:D,iv:L,salt:a})}},q=w.PasswordBasedCipher=F.extend({cfg:F.cfg.extend({kdf:W}),encrypt:function(t,c,g,a){a=this.cfg.extend(a);var S=a.kdf.execute(g,t.keySize,t.ivSize,a.salt,a.hasher);a.iv=S.iv;var D=F.encrypt.call(this,t,c,S.key,a);return D.mixIn(S),D},decrypt:function(t,c,g,a){a=this.cfg.extend(a),c=this._parse(c,a.format);var S=a.kdf.execute(g,t.keySize,t.ivSize,c.salt,a.hasher);a.iv=S.iv;var D=F.decrypt.call(this,t,c,S.key,a);return D}})})()})});var vr=I((G,cr)=>{(function(k,u,A){typeof G=="object"?cr.exports=G=u(N(),Q(),ar(),X(),fr()):typeof define=="function"&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],u):u(k.CryptoJS)})(G,function(k){return(function(){var u=k,A=u.lib,w=A.BlockCipher,K=u.algo,H=[],P=[],n=[],m=[],_=[],d=[],x=[],l=[],p=[],y=[];(function(){for(var r=[],e=0;e<256;e++)e<128?r[e]=e<<1:r[e]=e<<1^283;for(var v=0,h=0,e=0;e<256;e++){var C=h^h<<1^h<<2^h<<3^h<<4;C=C>>>8^C&255^99,H[v]=C,P[C]=v;var z=r[v],F=r[z],B=r[F],W=r[C]*257^C*16843008;n[v]=W<<24|W>>>8,m[v]=W<<16|W>>>16,_[v]=W<<8|W>>>24,d[v]=W;var W=B*16843009^F*65537^z*257^v*16843008;x[C]=W<<24|W>>>8,l[C]=W<<16|W>>>16,p[C]=W<<8|W>>>24,y[C]=W,v?(v=z^r[r[r[B^z]]],h^=r[r[h]]):v=h=1}})();var E=[0,1,2,4,8,16,32,64,128,27,54],b=K.AES=w.extend({_doReset:function(){var r;if(!(this._nRounds&&this._keyPriorReset===this._key)){for(var e=this._keyPriorReset=this._key,v=e.words,h=e.sigBytes/4,C=this._nRounds=h+6,z=(C+1)*4,F=this._keySchedule=[],B=0;B<z;B++)B<h?F[B]=v[B]:(r=F[B-1],B%h?h>6&&B%h==4&&(r=H[r>>>24]<<24|H[r>>>16&255]<<16|H[r>>>8&255]<<8|H[r&255]):(r=r<<8|r>>>24,r=H[r>>>24]<<24|H[r>>>16&255]<<16|H[r>>>8&255]<<8|H[r&255],r^=E[B/h|0]<<24),F[B]=F[B-h]^r);for(var W=this._invKeySchedule=[],q=0;q<z;q++){var B=z-q;if(q%4)var r=F[B];else var r=F[B-4];q<4||B<=4?W[q]=r:W[q]=x[H[r>>>24]]^l[H[r>>>16&255]]^p[H[r>>>8&255]]^y[H[r&255]]}}},encryptBlock:function(r,e){this._doCryptBlock(r,e,this._keySchedule,n,m,_,d,H)},decryptBlock:function(r,e){var v=r[e+1];r[e+1]=r[e+3],r[e+3]=v,this._doCryptBlock(r,e,this._invKeySchedule,x,l,p,y,P);var v=r[e+1];r[e+1]=r[e+3],r[e+3]=v},_doCryptBlock:function(r,e,v,h,C,z,F,B){for(var W=this._nRounds,q=r[e]^v[0],t=r[e+1]^v[1],c=r[e+2]^v[2],g=r[e+3]^v[3],a=4,S=1;S<W;S++){var D=h[q>>>24]^C[t>>>16&255]^z[c>>>8&255]^F[g&255]^v[a++],L=h[t>>>24]^C[c>>>16&255]^z[g>>>8&255]^F[q&255]^v[a++],R=h[c>>>24]^C[g>>>16&255]^z[q>>>8&255]^F[t&255]^v[a++],i=h[g>>>24]^C[q>>>16&255]^z[t>>>8&255]^F[c&255]^v[a++];q=D,t=L,c=R,g=i}var D=(B[q>>>24]<<24|B[t>>>16&255]<<16|B[c>>>8&255]<<8|B[g&255])^v[a++],L=(B[t>>>24]<<24|B[c>>>16&255]<<16|B[g>>>8&255]<<8|B[q&255])^v[a++],R=(B[c>>>24]<<24|B[g>>>16&255]<<16|B[q>>>8&255]<<8|B[t&255])^v[a++],i=(B[g>>>24]<<24|B[q>>>16&255]<<16|B[t>>>8&255]<<8|B[c&255])^v[a++];r[e]=D,r[e+1]=L,r[e+2]=R,r[e+3]=i},keySize:256/32});u.AES=w._createHelper(b)})(),k.AES})});var dr=I((_r,hr)=>{var ur=N();Q();Y();Z();vr();hr.exports=ur});return dr();})();

var KK_CONSTANTS = {"domain_key":"6630633962623732396339333961333530623565353630343966643536326663","domain_iv":"64393662323132333338656337373563","api_key":"617974357779356166776d7772706231396b3973337073783364796d7964306e","api_iv":"623374303639696a793770697277306a","sign_key":"6b736767737234747036646966646f316333696d386671643367"};

var KK_PREFIX = "keke.rex.v1.";
var KK_DEFAULTS = {
  cache: ["https://vcache.ybsdkl.cn", "https://vcache.shkjbd.com", "https://vcache.srnffc.cn", "https://vcache.mjrlin.cn"],
  logic: ["https://vlogic.ybsdkl.cn", "https://vlogic.shkjbd.com", "https://vlogic.srnffc.cn", "https://vlogic.mjrlin.cn"]
};
var KK_PRIORITY = ["hongniu", "haohua", "xinlang", "subo", "dbzy", "ikun", "guangsu", "feifan", "baofeng", "liangzi", "1080zy", "suoni", "dyttzy", "wujin"];
var kkDevicePromise;
var kkSessionPromise;
var kkBootstrapPromise;
var kkSession;
var kkHosts = { cache: KK_DEFAULTS.cache.slice(), logic: KK_DEFAULTS.logic.slice() };
var kkDiscoveryUsed = false;

function kkText(value) {
  return String(value == null ? "" : value).replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/&#39;/g, "'").replace(/&quot;/g, '"').trim();
}

function kkHeader(headers, name) {
  var result = "";
  Object.keys(headers || {}).some(function (key) {
    if (key.toLowerCase() !== name.toLowerCase()) return false;
    result = String(headers[key]);
    return true;
  });
  return result;
}

function kkStatus(response) {
  return Number(response && (response.statusCode || response.status)) || 0;
}

function kkHttpOK(response) {
  var status = kkStatus(response);
  return status >= 200 && status < 300;
}

async function kkStored(key) {
  try {
    var value = await Widget.storage.get(KK_PREFIX + key);
    return typeof value === "string" ? JSON.parse(value) : value;
  } catch (error) { return null; }
}

async function kkSave(key, value) {
  try { await Widget.storage.set(KK_PREFIX + key, JSON.stringify(value)); } catch (error) {}
}

async function kkDevice() {
  if (!kkDevicePromise) kkDevicePromise = (async function () {
    var value = await kkStored("device");
    if (!value || !value.deviceId || !value.deviceCreatedAt) {
      var id = "";
      for (var i = 0; i < 16; i++) id += Math.floor(Math.random() * 16).toString(16);
      value = { deviceId: id, deviceCreatedAt: String(Date.now()) };
      await kkSave("device", value);
    }
    return value;
  })();
  return await kkDevicePromise;
}

function kkAES(wordArray, key, iv) {
  return KKCrypto.AES.decrypt({ ciphertext: wordArray }, KKCrypto.enc.Hex.parse(key), {
    iv: KKCrypto.enc.Hex.parse(iv), mode: KKCrypto.mode.CBC, padding: KKCrypto.pad.Pkcs7
  }).toString(KKCrypto.enc.Utf8);
}

function kkDecode(response) {
  var data = response && response.data;
  if (data && typeof data === "object" && !Array.isArray(data)) return data;
  if (typeof data !== "string" || !data.trim()) throw new Error("可可接口返回空数据");
  if (/^\s*[\[{]/.test(data)) return JSON.parse(data);
  var bytes = KKCrypto.enc.Base64.parse(data.trim());
  if (kkHeader(response.headers, "encrypted") === "0") return JSON.parse(bytes.toString(KKCrypto.enc.Utf8));
  try { return JSON.parse(kkAES(bytes, KK_CONSTANTS.api_key, KK_CONSTANTS.api_iv)); }
  catch (error) {
    try { return JSON.parse(bytes.toString(KKCrypto.enc.Utf8)); }
    catch (plainError) { throw new Error("可可接口解密失败；客户端需支持 base64Data"); }
  }
}

async function kkHeaders(method, path, params, kind, device, session) {
  var headers = {
    "User-Agent": "com.kkdyD938260715.t201143/3.5.0 Dalvik/2.1.0 (Linux; U; Android 13; Pixel 7 Build/TQ3A.230805.001)",
    appId: "kkdy", os: "android", appVersion: "3.5.0", package: "com.kkdyD938260715.t201143",
    apiVer: "v2", channelId: "c900", st: "2", "x-d-video": "0", "X-CDN": kind === "cache" ? "1" : "0",
    deviceId: device.deviceId, deviceCreatedAt: device.deviceCreatedAt,
    userId: session && session.userId ? String(session.userId) : "0",
    deviceInfo: JSON.stringify({ brand: "Google", model: "Pixel 7", osVersion: "13", osLevel: "33", platform: "android", appVersion: "3.5.0" })
  };
  if (session && session.token) headers["X-Token"] = session.token;
  var ts = String(Date.now());
  var query = Object.keys(params).map(function (key) { return key + "=" + params[key]; }).sort().join("&");
  var chosen = ["appId", "deviceCreatedAt", "deviceId", "st", "userId"].map(function (key) { return key + "=" + headers[key]; }).join("&");
  var canonical = [method.toLowerCase(), path, query, ts, chosen, ""].join("|");
  headers.ts = ts;
  headers.sign = KKCrypto.HmacSHA1(canonical, KKCrypto.enc.Hex.parse(KK_CONSTANTS.sign_key)).toString(KKCrypto.enc.Hex);
  return headers;
}

function kkUniqueHosts(values) {
  var result = [];
  (values || []).forEach(function (url) {
    url = kkText(url).replace(/\/+$/, "");
    if (/^https:\/\/[a-zA-Z0-9.-]+(?::\d+)?$/.test(url) && result.indexOf(url) < 0) result.push(url);
  });
  return result;
}

async function kkDiscover() {
  if (kkDiscoveryUsed) return;
  kkDiscoveryUsed = true;
  var seeds = ["v.kekedh.com", "v.dsmovie2019.tv", "v.ddushe.com"];
  for (var i = 0; i < seeds.length; i++) {
    try {
      var response = await Widget.http.get("https://dns.google/resolve", { params: { name: seeds[i], type: "TXT" } });
      var data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
      var cache = [], logic = [];
      (data.Answer || []).forEach(function (answer) {
        try {
          var text = kkAES(KKCrypto.enc.Base64.parse(String(answer.data || "").replace(/[\s"]/g, "")), KK_CONSTANTS.domain_key, KK_CONSTANTS.domain_iv);
          var fields = text.split(",");
          if (fields.length < 4) return;
          logic.push("https://" + fields[2]); cache.push("https://" + fields[3]);
        } catch (error) {}
      });
      cache = kkUniqueHosts(cache); logic = kkUniqueHosts(logic);
      if (cache.length && logic.length) {
        kkHosts = { cache: cache, logic: logic };
        await kkSave("hosts", kkHosts);
        return;
      }
    } catch (error) {}
  }
}

async function kkRaw(kind, path, input, method, session, allowDiscover) {
  var device = await kkDevice();
  var params = {};
  Object.keys(input || {}).forEach(function (key) {
    if (input[key] != null) params[key] = String(input[key]);
  });
  method = method || "GET";
  if (method === "GET") {
    params.os = "android"; params.appId = "kkdy";
    params.userLevel = String(session && session.level || 0);
  }
  var headers = await kkHeaders(method, path, params, kind, device, session);
  var hosts = kkUniqueHosts(kkHosts[kind]);
  var lastError;
  for (var i = 0; i < Math.min(hosts.length, 2); i++) {
    try {
      var options = { params: params, headers: headers, base64Data: true };
      var response = method === "POST" ? await Widget.http.post(hosts[i] + path, "", options) : await Widget.http.get(hosts[i] + path, options);
      var data = kkDecode(response);
      if (kkStatus(response) >= 500) throw new Error("可可接口暂时不可用");
      if (i > 0) kkHosts[kind] = [hosts[i]].concat(hosts.filter(function (value) { return value !== hosts[i]; }));
      var token = kkHeader(response.headers, "X-Token");
      if (token && session && token !== session.token) { session.token = token; await kkSave("session", session); }
      return { data: data, status: kkStatus(response), token: token };
    } catch (error) { lastError = error; }
  }
  if (allowDiscover !== false && !kkDiscoveryUsed) {
    await kkDiscover();
    return await kkRaw(kind, path, input, method, session, false);
  }
  throw lastError || new Error("可可影视接口连接失败");
}

async function kkBootstrap() {
  if (!kkBootstrapPromise) kkBootstrapPromise = (async function () {
    var storedHosts = await kkStored("hosts");
    if (storedHosts) {
      ["cache", "logic"].forEach(function (kind) {
        kkHosts[kind] = kkUniqueHosts((storedHosts[kind] || []).concat(KK_DEFAULTS[kind]));
      });
    }
    var saved = await kkStored("config");
    if (!saved || !saved.time || Date.now() - saved.time > 6 * 3600000) {
      var response = await kkRaw("cache", "/v5/config/appInit.capi", {}, "GET", null);
      var data = response.data;
      if (!data || !data.urls) throw new Error("可可影视初始化失败");
      saved = { time: Date.now(), urls: { cache: data.urls.cache, logic: data.urls.logic } };
      await kkSave("config", saved);
    }
    ["cache", "logic"].forEach(function (kind) {
      kkHosts[kind] = kkUniqueHosts(kkHosts[kind].concat(saved.urls[kind] || []));
    });
    await kkSave("hosts", kkHosts);
    return true;
  })().catch(function (error) { kkBootstrapPromise = null; throw error; });
  return await kkBootstrapPromise;
}

async function kkLogin(force) {
  if (kkSessionPromise) return await kkSessionPromise;
  kkSessionPromise = (async function () {
    if (!force) {
      var saved = kkSession || await kkStored("session");
      if (saved && saved.token && saved.userId && saved.time && Date.now() - saved.time < 7 * 86400000) {
        kkSession = saved;
        return saved;
      }
    }
    var response = await kkRaw("logic", "/user/anonymous", {}, "POST", null);
    var body = response.data || {};
    var data = body.data || {};
    var token = response.token || data.token;
    if (Number(body.code) !== 200 || !data.id || !token) throw new Error("可可匿名初始化失败：" + kkText(body.message || "请稍后重试"));
    kkSession = { token: token, userId: String(data.id), level: Number(data.level) || 0, time: Date.now() };
    await kkSave("session", kkSession);
    return kkSession;
  })();
  try { return await kkSessionPromise; }
  finally { kkSessionPromise = null; }
}

async function kkApi(kind, path, params) {
  var session = await kkLogin(false);
  var response = await kkRaw(kind, path, params, "GET", session);
  var data = response.data || {};
  if (response.status === 401 || Number(data.code) === 40401 || Number(data.code) === 40100) {
    if (!kkSession || kkSession.token === session.token) await kkLogin(true);
    response = await kkRaw(kind, path, params, "GET", kkSession);
    data = response.data || {};
  }
  if (Number(data.code) !== 200) throw new Error("可可影视：" + kkText(data.message || "片源暂不可用"));
  return data.data;
}

function kkKey(value) {
  return kkText(value).toLowerCase().replace(/\[[^\]]*\]|【[^】]*】|\([^)]*\)|（[^）]*）/g, "").replace(/[\s\-_:：·.,，。!！?？/\\'"“”‘’]/g, "");
}

function kkChineseNumber(value) {
  if (/^\d+$/.test(value)) return Number(value);
  var digits = { "一": 1, "二": 2, "两": 2, "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9, "零": 0 };
  var parts = String(value || "").split("十");
  if (parts.length === 2) return (digits[parts[0]] || 1) * 10 + (digits[parts[1]] || 0);
  return digits[value] || 0;
}

function kkSeason(value) {
  var match = kkText(value).match(/第\s*([一二三四五六七八九十两零\d]+)\s*季|\bseason\s*(\d+)\b|\bs(\d+)\b/i);
  return match ? kkChineseNumber(match[1] || match[2] || match[3]) : 0;
}

function kkBaseTitle(value) {
  return kkKey(kkText(value).replace(/第\s*[一二三四五六七八九十两零\d]+\s*季|\bseason\s*\d+\b|\bs\d+\b/gi, ""));
}

function kkExcluded(item, wanted) {
  if (/解说|预告|花絮|片段/.test(wanted)) return false;
  var labels = (item.labels || []).map(function (entry) { return kkText(entry.name); }).join(" ");
  return /解说|预告|花絮|片段/.test(kkText(item.title) + " " + labels);
}

function kkMatchScore(item, wanted, params) {
  if (!item.id || [1, 2, 3, 4, 6].indexOf(Number(item.channelId)) < 0 || kkExcluded(item, wanted)) return 0;
  var sourceTitle = kkText(item.title);
  if (!/(?:19|20)\d{2}$/.test(wanted)) {
    var declaredYear = kkText(item.year && (item.year.name || item.year.id || item.year));
    sourceTitle = sourceTitle.replace(/([^0-9])((?:19|20)\d{2})$/, function (full, prefix, year) {
      return (declaredYear === year || String(params.year || "") === year) ? prefix : full;
    });
  }
  var key = kkKey(sourceTitle), target = kkKey(wanted);
  if (!key || !target) return 0;
  var season = Number(params.season) || kkSeason(wanted);
  var found = kkSeason(item.title);
  if (season > 1 && found !== season) return 0;
  if (season === 1 && found > 1) return 0;
  var score = key === target ? 100 : 0;
  if (!score && kkBaseTitle(sourceTitle) === kkBaseTitle(wanted)) score = 95;
  if (!score && target.length >= 3 && (key.indexOf(target) >= 0 || target.indexOf(key) >= 0) && Math.abs(key.length - target.length) <= 8) score = 75;
  if (score && params.year && kkText(item.year && (item.year.name || item.year)) === String(params.year)) score += 5;
  return score;
}

function kkChooseEpisode(episodes, requested) {
  var number = Number(requested) || 1;
  if (number < 1 || Math.floor(number) !== number) return null;
  var hasIndex = false;
  for (var i = 0; i < episodes.length; i++) {
    if (episodes[i].index != null && Number(episodes[i].index) > 0) {
      hasIndex = true;
      if (Number(episodes[i].index) === number) return episodes[i];
    }
  }
  for (var j = 0; j < episodes.length; j++) {
    var match = kkText(episodes[j].title).match(/^(?:第\s*)?0*(\d+)\s*(?:[集话話期]|$)/);
    if (match && Number(match[1]) === number) return episodes[j];
  }
  return hasIndex ? null : episodes[number - 1] || null;
}

function kkSourceRank(source) {
  var rank = KK_PRIORITY.indexOf(source.siteId);
  return rank < 0 ? 100 : rank;
}

function kkFreeSources(detail) {
  var seen = {};
  return (detail.playSources || []).filter(function (source) {
    return !Number(source.needLogin) && !Number(source.needAccelerate) && Number(source.total) > 0;
  }).sort(function (a, b) { return kkSourceRank(a) - kkSourceRank(b); }).filter(function (source) {
    if (seen[source.siteId]) return false;
    seen[source.siteId] = true;
    return true;
  });
}

function kkResolve(base, value) {
  value = String(value || "").trim();
  if (/^https?:\/\//i.test(value)) return value;
  var origin = String(base || "").match(/^(https?:)\/\/([^/]+)/i);
  if (!origin) return "";
  if (value.indexOf("//") === 0) return origin[1] + value;
  var root = origin[1] + "//" + origin[2];
  var clean = String(base).split("#")[0];
  if (value.charAt(0) === "?") return clean.split("?")[0] + value;
  if (value.charAt(0) === "#") return clean + value;
  var suffix = (value.match(/[?#].*$/) || [""])[0];
  var relative = value.split(/[?#]/)[0];
  var path = relative.charAt(0) === "/" ? relative : clean.slice(root.length).split("?")[0].replace(/[^/]*$/, "") + relative;
  var stack = [];
  path.split("/").forEach(function (part) {
    if (!part || part === ".") return;
    if (part === "..") stack.pop(); else stack.push(part);
  });
  return root + "/" + stack.join("/") + suffix;
}

async function kkMediaRequest(url, headers, binary) {
  for (var i = 0; i < 4; i++) {
    var response = await Widget.http.get(url, { headers: headers, base64Data: !!binary, allow_redirects: false });
    var status = kkStatus(response);
    if (status >= 300 && status < 400) {
      var location = kkHeader(response.headers, "Location");
      if (!location) throw new Error("播放地址跳转无效");
      url = kkResolve(url, location);
      continue;
    }
    if (!kkHttpOK(response)) throw new Error("媒体请求失败");
    return { response: response, url: url };
  }
  throw new Error("播放地址跳转过多");
}

async function kkProbeBytes(url, headers, minimum) {
  var probeHeaders = {};
  Object.keys(headers).forEach(function (key) { probeHeaders[key] = headers[key]; });
  probeHeaders.Range = "bytes=0-1023";
  var result = await kkMediaRequest(url, probeHeaders, true);
  var data = result.response.data;
  var type = kkHeader(result.response.headers, "Content-Type").toLowerCase();
  if (typeof data !== "string" || /text\/html|application\/json/.test(type)) throw new Error("媒体片段无效");
  var bytes = KKCrypto.enc.Base64.parse(data.replace(/\s/g, ""));
  if (bytes.sigBytes < (minimum || 1)) throw new Error("媒体片段为空");
  return true;
}

async function kkProbeHLS(url, headers, depth) {
  if (depth > 2) throw new Error("播放列表层级过深");
  var result = await kkMediaRequest(url, headers, false);
  var body = String(result.response.data || "");
  if (!/^\s*#EXTM3U/.test(body)) throw new Error("非 HLS 播放列表");
  var lines = body.split(/\r?\n/).map(function (line) { return line.trim(); }).filter(function (line) { return !!line; });
  var variants = [];
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].indexOf("#EXT-X-STREAM-INF:") !== 0) continue;
    var bandwidth = (lines[i].match(/(?:AVERAGE-)?BANDWIDTH=(\d+)/) || ["", "0"])[1];
    for (var j = i + 1; j < lines.length; j++) {
      if (lines[j].charAt(0) === "#") continue;
      variants.push({ url: kkResolve(result.url, lines[j]), bandwidth: Number(bandwidth) });
      break;
    }
  }
  if (variants.length) {
    variants.sort(function (a, b) { return b.bandwidth - a.bandwidth; });
    for (var v = 0; v < Math.min(variants.length, 2); v++) {
      try { return await kkProbeHLS(variants[v].url, headers, depth + 1); } catch (error) {}
    }
    throw new Error("子播放列表不可用");
  }
  var segment = "", init = "", key = "";
  for (var n = 0; n < lines.length; n++) {
    if (lines[n].indexOf("#EXT-X-MAP:") === 0) {
      var map = lines[n].match(/URI="([^"]+)"/);
      if (map) init = kkResolve(result.url, map[1]);
    }
    if (lines[n].indexOf("#EXT-X-KEY:") === 0 && /METHOD=AES-128/.test(lines[n])) {
      var keyMatch = lines[n].match(/URI="([^"]+)"/);
      if (keyMatch) key = kkResolve(result.url, keyMatch[1]);
    }
    if (lines[n].charAt(0) !== "#") { segment = kkResolve(result.url, lines[n]); break; }
  }
  if (!segment) throw new Error("播放列表无媒体片段");
  var probes = [kkProbeBytes(segment, headers, 8)];
  if (init && init !== segment) probes.push(kkProbeBytes(init, headers, 8));
  if (key) probes.push(kkProbeBytes(key, headers, 16));
  await Promise.all(probes);
  return result.url;
}

async function kkProbePlayUrl(url, headers) {
  if (!/^https?:\/\//i.test(url)) throw new Error("无效播放地址");
  if (/\.(mp4|mkv|mov)(?:[?#]|$)/i.test(url)) {
    await kkProbeBytes(url, headers, 32);
    return url;
  }
  return await kkProbeHLS(url, headers, 0);
}

async function kkLine(detail, source, episodeNumber, deadline) {
  if (Date.now() >= deadline) return null;
  try {
    var episodes = await kkApi("cache", "/v2/vod/episodes.capi", {
      vodId: detail.id, siteId: source.siteId, episodeVodId: source.episodeVodId == null ? detail.id : source.episodeVodId
    });
    if (!Array.isArray(episodes)) return null;
    var episode = kkChooseEpisode(episodes, episodeNumber);
    if (!episode || Date.now() >= deadline) return null;
    var playUrls = await kkApi("logic", "/vod/episodePlayUrl", { vodId: detail.id, siteId: source.siteId, episodeId: episode.id });
    if (!Array.isArray(playUrls) || Date.now() >= deadline) return null;
    var headers = { "User-Agent": "okhttp/4.12.0" };
    playUrls = playUrls.slice().sort(function (a, b) {
      return (/h26?5|hevc/i.test(a.type || "") ? 1 : 0) - (/h26?5|hevc/i.test(b.type || "") ? 1 : 0);
    });
    for (var i = 0; i < Math.min(playUrls.length, 2); i++) {
      if (Date.now() >= deadline) return null;
      try {
        var start = Date.now();
        var url = await kkProbePlayUrl(String(playUrls[i].url || ""), headers);
        return {
          name: "可可影视 · " + kkText(source.name) + " · " + (kkText(playUrls[i].name) || "正片"),
          description: kkText(detail.title) + " · " + kkText(episode.title) + " · " + kkText(source.name),
          url: url, headers: headers, customHeaders: headers, _latency: Date.now() - start
        };
      } catch (error) {}
    }
  } catch (error) {}
  return null;
}

async function loadResource(params) {
  params = params || {};
  var wanted = kkText(params.seriesName || params.title);
  if (!wanted) return [];
  var deadline = Date.now() + 18000;
  await kkBootstrap();
  var type = kkText(params.type || params.mediaType).toLowerCase();
  var firstChannel = type === "movie" ? "1" : type === "tv" ? "2" : "0";
  var allItems = [];
  var seenItems = {};
  async function queryChannel(channel, next) {
    var found = await kkApi("logic", "/vod/search/query", { channelId: channel, k: wanted, next: next || "" });
    (found && found.items || []).forEach(function (item) {
      if (!seenItems[item.id]) { seenItems[item.id] = true; allItems.push(item); }
    });
    return found;
  }
  function rankMatches() {
    return allItems.map(function (item) {
      return { item: item, score: kkMatchScore(item, wanted, params) };
    }).filter(function (entry) { return entry.score >= 75; }).sort(function (a, b) { return b.score - a.score; });
  }
  var firstPage = await queryChannel(firstChannel, "");
  var matches = rankMatches();
  if ((!matches.length || matches[0].score < 95) && Date.now() < deadline) {
    var moreChannels = type === "movie" ? ["0"] : firstChannel === "2" ? ["3", "4", "6"] : ["1", "2", "3", "4", "6"];
    await Promise.all(moreChannels.map(async function (channel) {
      try { await queryChannel(channel, ""); } catch (error) {}
    }));
    matches = rankMatches();
  }
  if ((!matches.length || matches[0].score < 95) && firstPage && firstPage.next && Date.now() < deadline) {
    try { await queryChannel(firstChannel, firstPage.next); matches = rankMatches(); } catch (error) {}
  }
  if (!matches.length) return [];
  var detail = await kkApi("cache", "/v2/vod/detail.capi", { vodId: matches[0].item.id });
  if (!detail || kkExcluded(detail, wanted)) return [];
  var episode = params.episode == null ? 1 : Number(params.episode);
  if (!isFinite(episode) || episode < 1 || Math.floor(episode) !== episode) return [];
  var sources = kkFreeSources(detail).slice(0, 8);
  if (!sources.length) return [];
  var resources = await Promise.all(sources.map(function (source) { return kkLine(detail, source, episode, deadline); }));
  var seen = {};
  return resources.filter(function (entry) {
    if (!entry || seen[entry.url]) return false;
    seen[entry.url] = true;
    return true;
  }).sort(function (a, b) { return a._latency - b._latency; }).map(function (entry) {
    delete entry._latency;
    return entry;
  });
}
