(()=>{var ru=0,ec=1,au=2;var xh=1,ou=2,wn=3,$n=0,Ie=1,we=2,qn=0,Yn=1,ce=2,nc=3,ic=4,lu=5,li=100,cu=101,hu=102,uu=103,du=104,fu=200,pu=201,mu=202,gu=203,no=204,io=205,vu=206,xu=207,_u=208,yu=209,Mu=210,bu=211,Su=212,Eu=213,wu=214,so=0,ro=1,ao=2,zi=3,oo=4,lo=5,co=6,ho=7,_h=0,Tu=1,Au=2,fn=0,Ru=1,Cu=2,Pu=3,Iu=4,Lu=5,Du=6,Uu=7;var ta=300,ki=301,Hi=302,Ss=303,uo=304,ea=306,Vi=1e3,ui=1001,fo=1002,We=1003,Nu=1004;var Ys=1005;var dn=1006,Sa=1007;var An=1008;var Pn=1009,yh=1010,Mh=1011,Es=1012,Tl=1013,di=1014,Ze=1015,Nn=1016,Al=1017,Rl=1018,Gi=1020,bh=35902,Sh=1021,Eh=1022,Ge=1023,wh=1024,Th=1025,Fi=1026,Wi=1027,Cl=1028,Pl=1029,Ah=1030,Il=1031;var Ll=1033,Sr=33776,Er=33777,wr=33778,Tr=33779,po=35840,mo=35841,go=35842,vo=35843,xo=36196,_o=37492,yo=37496,Mo=37808,bo=37809,So=37810,Eo=37811,wo=37812,To=37813,Ao=37814,Ro=37815,Co=37816,Po=37817,Io=37818,Lo=37819,Do=37820,Uo=37821,Ar=36492,No=36494,Fo=36495,Rh=36283,Oo=36284,Bo=36285,zo=36286;var Rr=2300,ko=2301,Ea=2302,sc=2400,rc=2401,ac=2402;var Fu=3200,Ou=3201;var Ch=0,Bu=1,un="",Pe="srgb",jn="srgb-linear",na="linear",re="srgb";var xi=7680;var oc=519,zu=512,ku=513,Hu=514,Ph=515,Vu=516,Gu=517,Wu=518,Xu=519,lc=35044;var cc="300 es",Rn=2e3,Cr=2001,Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=1234567,xs=Math.PI/180,ws=180/Math.PI;function gi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[s&255]+Re[s>>8&255]+Re[s>>16&255]+Re[s>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function Dl(s,t){return(s%t+t)%t}function qu(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Yu(s,t,e){return s!==t?(e-s)/(t-s):0}function _s(s,t,e){return(1-e)*s+e*t}function Zu(s,t,e,n){return _s(s,t,1-Math.exp(-e*n))}function $u(s,t=1){return t-Math.abs(Dl(s,t*2)-t)}function Ju(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Ku(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function ju(s,t){return s+Math.random()*(t-s)}function td(s){return s*(.5-Math.random())}function ed(s){s!==void 0&&(hc=s);let t=hc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nd(s){return s*xs}function id(s){return s*ws}function sd(s){return(s&s-1)===0&&s!==0}function rd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ad(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function od(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),d=r((n-t)/2),m=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Di(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var is={DEG2RAD:xs,RAD2DEG:ws,generateUUID:gi,clamp:Ee,euclideanModulo:Dl,mapLinear:qu,inverseLerp:Yu,lerp:_s,damp:Zu,pingpong:$u,smoothstep:Ju,smootherstep:Ku,randInt:Qu,randFloat:ju,randFloatSpread:td,seededRandom:ed,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:ad,setQuaternionFromProperEuler:od,normalize:Le,denormalize:Di},et=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],v=i[0],g=i[3],p=i[6],b=i[1],S=i[4],x=i[7],L=i[2],R=i[5],P=i[8];return r[0]=a*v+o*b+l*L,r[3]=a*g+o*S+l*R,r[6]=a*p+o*x+l*P,r[1]=c*v+h*b+u*L,r[4]=c*g+h*S+u*R,r[7]=c*p+h*x+u*P,r[2]=f*v+d*b+m*L,r[5]=f*g+d*S+m*R,r[8]=f*p+d*x+m*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,m=e*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=f*v,t[4]=(h*e-i*l)*v,t[5]=(i*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wa=new Vt;function Ih(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ts(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ld(){let s=Ts("canvas");return s.style.display="block",s}var uc={};function gs(s){s in uc||(uc[s]=!0,console.warn(s))}function cd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hd(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ud(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Kt={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===un?na:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var dc=[.64,.33,.3,.6,.15,.06],fc=[.2126,.7152,.0722],pc=[.3127,.329],mc=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Kt.define({[jn]:{primaries:dc,whitePoint:pc,transfer:na,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:dc,whitePoint:pc,transfer:re,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:fc,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}});var _i,Ho=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{_i===void 0&&(_i=Ts("canvas")),_i.width=t.width,_i.height=t.height;let n=_i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=_i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ts("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},dd=0,Pr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ta(i[a].image)):r.push(Ta(i[a]))}else r=Ta(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ho.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fd=0,Fe=class s extends Jn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=ui,i=ui,r=dn,a=An,o=Ge,l=Pn,c=s.DEFAULT_ANISOTROPY,h=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=gi(),this.name="",this.source=new Pr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ta)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case fo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case fo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=ta;Fe.DEFAULT_ANISOTROPY=1;var fe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(d+1)/2,L=(p+1)/2,R=(h+f)/4,P=(u+v)/4,I=(m+g)/4;return S>x&&S>L?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=P/n):x>L?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=R/i,r=I/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=P/r,i=I/r),this.set(n,i,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vo=class extends Jn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Pr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ze=class extends Vo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ir=class extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Go=class extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=We,this.minFilter=We,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],d=r[a+1],m=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=v;return}if(u!==v||l!==f||c!==d||h!==m){let g=1-o,p=l*f+c*d+h*m+u*v,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let L=Math.sqrt(S),R=Math.atan2(L,p*b);g=Math.sin(g*R)/L,o=Math.sin(o*R)/L}let x=o*b;if(l=l*g+f*x,c=c*g+d*x,h=h*g+m*x,u=u*g+v*x,g===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],m=r[a+3];return t[e]=o*m+h*u+l*d-c*f,t[e+1]=l*m+h*f+c*u-o*d,t[e+2]=c*m+h*d+o*f-l*u,t[e+3]=h*m-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){let d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Aa.copy(this).projectOnVector(t),this.sub(Aa)}reflect(t){return this.sub(Aa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Aa=new T,vc=new pn,In=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zs.copy(n.boundingBox)),Zs.applyMatrix4(t.matrixWorld),this.union(Zs)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),$s.subVectors(this.max,cs),yi.subVectors(t.a,cs),Mi.subVectors(t.b,cs),bi.subVectors(t.c,cs),kn.subVectors(Mi,yi),Hn.subVectors(bi,Mi),ei.subVectors(yi,bi);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ei.z,ei.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ei.z,0,-ei.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ei.y,ei.x,0];return!Ra(e,yi,Mi,bi,$s)||(e=[1,0,0,0,1,0,0,0,1],!Ra(e,yi,Mi,bi,$s))?!1:(Js.crossVectors(kn,Hn),e=[Js.x,Js.y,Js.z],Ra(e,yi,Mi,bi,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},yn=[new T,new T,new T,new T,new T,new T,new T,new T],sn=new T,Zs=new In,yi=new T,Mi=new T,bi=new T,kn=new T,Hn=new T,ei=new T,cs=new T,$s=new T,Js=new T,ni=new T;function Ra(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ni.fromArray(s,r);let o=i.x*Math.abs(ni.x)+i.y*Math.abs(ni.y)+i.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pd=new In,hs=new T,Ca=new T,Ln=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):pd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);let e=hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(Ca)),this.expandByPoint(hs.copy(t.center).sub(Ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new T,Pa=new T,Ks=new T,Vn=new T,Ia=new T,Qs=new T,La=new T,Xi=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Pa.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Pa);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=Vn.dot(this.direction),l=-Vn.dot(Ks),c=Vn.lengthSq(),h=Math.abs(1-a*a),u,f,d,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){let v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Pa).addScaledVector(Ks,f),d}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,r){Ia.subVectors(e,t),Qs.subVectors(n,t),La.crossVectors(Ia,Qs);let a=this.direction.dot(La),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let l=o*this.direction.dot(Qs.crossVectors(Vn,Qs));if(l<0)return null;let c=o*this.direction.dot(Ia.cross(Vn));if(c<0||l+c>a)return null;let h=-o*Vn.dot(La);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,d,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,d,m,v,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,d,m,v,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+m*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=m+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f+v*o,e[4]=m*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-m,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,m=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=m+d*o,e[1]=d+m*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,m=o*h,v=o*u;e[0]=l*h,e[4]=m*c-d,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=d*c-m,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=m*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+m,e[10]=f-v*u}else if(t.order==="XZY"){let f=a*l,d=a*c,m=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=d*u-m,e[2]=m*u-d,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,n){let i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Gn.crossVectors(n,He),Gn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Gn.crossVectors(n,He)),Gn.normalize(),js.crossVectors(He,Gn),i[0]=Gn.x,i[4]=js.x,i[8]=He.x,i[1]=Gn.y,i[5]=js.y,i[9]=He.y,i[2]=Gn.z,i[6]=js.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],v=n[6],g=n[10],p=n[14],b=n[3],S=n[7],x=n[11],L=n[15],R=i[0],P=i[4],I=i[8],E=i[12],y=i[1],C=i[5],F=i[9],O=i[13],z=i[2],Z=i[6],V=i[10],j=i[14],G=i[3],at=i[7],pt=i[11],yt=i[15];return r[0]=a*R+o*y+l*z+c*G,r[4]=a*P+o*C+l*Z+c*at,r[8]=a*I+o*F+l*V+c*pt,r[12]=a*E+o*O+l*j+c*yt,r[1]=h*R+u*y+f*z+d*G,r[5]=h*P+u*C+f*Z+d*at,r[9]=h*I+u*F+f*V+d*pt,r[13]=h*E+u*O+f*j+d*yt,r[2]=m*R+v*y+g*z+p*G,r[6]=m*P+v*C+g*Z+p*at,r[10]=m*I+v*F+g*V+p*pt,r[14]=m*E+v*O+g*j+p*yt,r[3]=b*R+S*y+x*z+L*G,r[7]=b*P+S*C+x*Z+L*at,r[11]=b*I+S*F+x*V+L*pt,r[15]=b*E+S*O+x*j+L*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+v*(+e*l*d-e*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+g*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],m=t[12],v=t[13],g=t[14],p=t[15],b=u*g*c-v*f*c+v*l*d-o*g*d-u*l*p+o*f*p,S=m*f*c-h*g*c-m*l*d+a*g*d+h*l*p-a*f*p,x=h*v*c-m*u*c+m*o*d-a*v*d-h*o*p+a*u*p,L=m*u*l-h*v*l-m*o*f+a*v*f+h*o*g-a*u*g,R=e*b+n*S+i*x+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return t[0]=b*P,t[1]=(v*f*r-u*g*r-v*i*d+n*g*d+u*i*p-n*f*p)*P,t[2]=(o*g*r-v*l*r+v*i*c-n*g*c-o*i*p+n*l*p)*P,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*P,t[4]=S*P,t[5]=(h*g*r-m*f*r+m*i*d-e*g*d-h*i*p+e*f*p)*P,t[6]=(m*l*r-a*g*r-m*i*c+e*g*c+a*i*p-e*l*p)*P,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*d+e*l*d)*P,t[8]=x*P,t[9]=(m*u*r-h*v*r-m*n*d+e*v*d+h*n*p-e*u*p)*P,t[10]=(a*v*r-m*o*r+m*n*c-e*v*c-a*n*p+e*o*p)*P,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*P,t[12]=L*P,t[13]=(h*v*i-m*u*i+m*n*f-e*v*f-h*n*g+e*u*g)*P,t[14]=(m*o*i-a*v*i-m*n*l+e*v*l+a*n*g-e*o*g)*P,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*P,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,m=r*u,v=a*h,g=a*u,p=o*u,b=l*c,S=l*h,x=l*u,L=n.x,R=n.y,P=n.z;return i[0]=(1-(v+p))*L,i[1]=(d+x)*L,i[2]=(m-S)*L,i[3]=0,i[4]=(d-x)*R,i[5]=(1-(f+p))*R,i[6]=(g+b)*R,i[7]=0,i[8]=(m+S)*P,i[9]=(g-b)*P,i[10]=(1-(f+v))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Si.set(i[0],i[1],i[2]).length(),a=Si.set(i[4],i[5],i[6]).length(),o=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);let c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Rn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,m;if(o===Rn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Cr)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Rn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,d=(n+i)*h,m,v;if(o===Rn)m=(a+r)*u,v=-2*u;else if(o===Cr)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Si=new T,rn=new ie,md=new T(0,0,0),gd=new T(1,1,1),Gn=new T,js=new T,He=new T,xc=new ie,_c=new pn,$e=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _c.setFromEuler(this),this.setFromQuaternion(_c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var As=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vd=0,yc=new T,Ei=new pn,bn=new ie,tr=new T,us=new T,xd=new T,_d=new pn,Mc=new T(1,0,0),bc=new T(0,1,0),Sc=new T(0,0,1),Ec={type:"added"},yd={type:"removed"},wi={type:"childadded",child:null},Da={type:"childremoved",child:null},Te=class s extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new T,e=new $e,n=new pn,i=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Vt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new As,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(t,e){return Ei.setFromAxisAngle(t,e),this.quaternion.premultiply(Ei),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(us,tr,this.up):bn.lookAt(tr,us,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),Ei.setFromRotationMatrix(bn),this.quaternion.premultiply(Ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),wi.child=t,this.dispatchEvent(wi),wi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yd),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),wi.child=t,this.dispatchEvent(wi),wi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,_d,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Te.DEFAULT_UP=new T(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var an=new T,Sn=new T,Ua=new T,En=new T,Ti=new T,Ai=new T,wc=new T,Na=new T,Fa=new T,Oa=new T,Ba=new fe,za=new fe,ka=new fe,ci=class s{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),an.subVectors(t,e),i.cross(an);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){an.subVectors(i,e),Sn.subVectors(n,e),Ua.subVectors(t,e);let a=an.dot(an),o=an.dot(Sn),l=an.dot(Ua),c=Sn.dot(Sn),h=Sn.dot(Ua),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return Ba.setScalar(0),za.setScalar(0),ka.setScalar(0),Ba.fromBufferAttribute(t,e),za.fromBufferAttribute(t,n),ka.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Ba,r.x),a.addScaledVector(za,r.y),a.addScaledVector(ka,r.z),a}static isFrontFacing(t,e,n,i){return an.subVectors(n,e),Sn.subVectors(t,e),an.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),an.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ti.subVectors(i,n),Ai.subVectors(r,n),Na.subVectors(t,n);let l=Ti.dot(Na),c=Ai.dot(Na);if(l<=0&&c<=0)return e.copy(n);Fa.subVectors(t,i);let h=Ti.dot(Fa),u=Ai.dot(Fa);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ti,a);Oa.subVectors(t,r);let d=Ti.dot(Oa),m=Ai.dot(Oa);if(m>=0&&d<=m)return e.copy(r);let v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return o=c/(c-m),e.copy(n).addScaledVector(Ai,o);let g=h*m-d*u;if(g<=0&&u-h>=0&&d-m>=0)return wc.subVectors(r,i),o=(u-h)/(u-h+(d-m)),e.copy(i).addScaledVector(wc,o);let p=1/(g+v+f);return a=v*p,o=f*p,e.copy(n).addScaledVector(Ti,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},er={h:0,s:0,l:0};function Ha(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Pt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Kt.workingColorSpace){if(t=Dl(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ha(a,r,t+1/3),this.g=Ha(a,r,t),this.b=Ha(a,r,t-1/3)}return Kt.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Kt.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ee(Ce.r*255,0,255))*65536+Math.round(Ee(Ce.g*255,0,255))*256+Math.round(Ee(Ce.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ce.copy(this),e);let n=Ce.r,i=Ce.g,r=Ce.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Pe){Kt.fromWorkingColorSpace(Ce.copy(this),t);let e=Ce.r,n=Ce.g,i=Ce.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(er);let n=_s(Wn.h,er.h,e),i=_s(Wn.s,er.s,e),r=_s(Wn.l,er.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ce=new Pt;Pt.NAMES=Lh;var Md=0,Dn=class extends Jn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=gi(),this.name="",this.blending=Yn,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xi,this.stencilZFail=xi,this.stencilZPass=xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yn&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Je=class extends Dn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new T,nr=new et,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=Ze,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lc&&(t.usage=this.usage),t}};var Lr=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Dr=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},bd=0,Ye=new ie,Va=new Te,Ri=new T,Ve=new In,ds=new In,Me=new T,Zt=class s extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Dr:Lr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Va.lookAt(t),Va.updateMatrix(),this.applyMatrix4(Va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(Ve.min,ds.min),Ve.expandByPoint(Me),Me.addVectors(Ve.max,ds.max),Ve.expandByPoint(Me)):(Ve.expandByPoint(ds.min),Ve.expandByPoint(ds.max))}Ve.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Me.fromBufferAttribute(o,c),l&&(Ri.fromBufferAttribute(t,c),Me.add(Ri)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new T,l[I]=new T;let c=new T,h=new T,u=new T,f=new et,d=new et,m=new et,v=new T,g=new T;function p(I,E,y){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let C=1/(d.x*m.y-m.x*d.y);isFinite(C)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(C),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(C),o[I].add(v),o[E].add(v),o[y].add(v),l[I].add(g),l[E].add(g),l[y].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let I=0,E=b.length;I<E;++I){let y=b[I],C=y.start,F=y.count;for(let O=C,z=C+F;O<z;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let S=new T,x=new T,L=new T,R=new T;function P(I){L.fromBufferAttribute(i,I),R.copy(L);let E=o[I];S.copy(E),S.sub(L.multiplyScalar(L.dot(E))).normalize(),x.crossVectors(R,E);let C=x.dot(l[I])<0?-1:1;a.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,E=b.length;I<E;++I){let y=b[I],C=y.start,F=y.count;for(let O=C,z=C+F;O<z;O+=3)P(t.getX(O+0)),P(t.getX(O+1)),P(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),v=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)f[m++]=c[d++]}return new ae(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tc=new ie,ii=new Xi,ir=new Ln,Ac=new T,sr=new T,rr=new T,ar=new T,Ga=new T,or=new T,Rc=new T,lr=new T,Dt=class extends Te{constructor(t=new Zt,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ga.fromBufferAttribute(u,t),a?or.addScaledVector(Ga,h):or.addScaledVector(Ga.sub(e),h))}e.add(or)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),ii.copy(t.ray).recast(t.near),!(ir.containsPoint(ii.origin)===!1&&(ii.intersectSphere(ir,Ac)===null||ii.origin.distanceToSquared(Ac)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),ii.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=a[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,L=S;x<L;x+=3){let R=o.getX(x),P=o.getX(x+1),I=o.getX(x+2);i=cr(this,p,t,n,c,h,u,R,P,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let b=o.getX(g),S=o.getX(g+1),x=o.getX(g+2);i=cr(this,a,t,n,c,h,u,b,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,v=f.length;m<v;m++){let g=f[m],p=a[g.materialIndex],b=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let x=b,L=S;x<L;x+=3){let R=x,P=x+1,I=x+2;i=cr(this,p,t,n,c,h,u,R,P,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=m,p=v;g<p;g+=3){let b=g,S=g+1,x=g+2;i=cr(this,a,t,n,c,h,u,b,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function Sd(s,t,e,n,i,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===$n,o),l===null)return null;lr.copy(o),lr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:s}}function cr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,sr),s.getVertexPosition(l,rr),s.getVertexPosition(c,ar);let h=Sd(s,t,e,n,sr,rr,ar,Rc);if(h){let u=new T;ci.getBarycoord(Rc,sr,rr,ar,u),i&&(h.uv=ci.getInterpolatedAttribute(i,o,l,c,u,new et)),r&&(h.uv1=ci.getInterpolatedAttribute(r,o,l,c,u,new et)),a&&(h.normal=ci.getInterpolatedAttribute(a,o,l,c,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new T,materialIndex:0};ci.getNormal(sr,rr,ar,f.normal),h.face=f,h.barycoord=u}return h}var Oe=class s extends Zt{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,i,a,2),m("x","z","y",1,-1,t,n,-e,i,a,3),m("x","y","z",1,-1,t,e,n,i,r,4),m("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function m(v,g,p,b,S,x,L,R,P,I,E){let y=x/P,C=L/I,F=x/2,O=L/2,z=R/2,Z=P+1,V=I+1,j=0,G=0,at=new T;for(let pt=0;pt<V;pt++){let yt=pt*C-O;for(let zt=0;zt<Z;zt++){let te=zt*y-F;at[v]=te*b,at[g]=yt*S,at[p]=z,c.push(at.x,at.y,at.z),at[v]=0,at[g]=0,at[p]=R>0?1:-1,h.push(at.x,at.y,at.z),u.push(zt/P),u.push(1-pt/I),j+=1}}for(let pt=0;pt<I;pt++)for(let yt=0;yt<P;yt++){let zt=f+yt+Z*pt,te=f+yt+Z*(pt+1),Y=f+(yt+1)+Z*(pt+1),it=f+(yt+1)+Z*pt;l.push(zt,te,it),l.push(te,Y,it),G+=6}o.addGroup(d,G,E),d+=G,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){let t={};for(let e=0;e<s.length;e++){let n=qi(s[e]);for(let i in n)t[i]=n[i]}return t}function Ed(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Dh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var wd={clone:qi,merge:De},Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xt=class extends Dn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ur=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new T,Cc=new et,Pc=new et,Ue=class extends Ur{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ws*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Cc,Pc),e.subVectors(Pc,Cc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ci=-90,Pi=1,Wo=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ue(Ci,Pi,t,e);i.layers=this.layers,this.add(i);let r=new Ue(Ci,Pi,t,e);r.layers=this.layers,this.add(r);let a=new Ue(Ci,Pi,t,e);a.layers=this.layers,this.add(a);let o=new Ue(Ci,Pi,t,e);o.layers=this.layers,this.add(o);let l=new Ue(Ci,Pi,t,e);l.layers=this.layers,this.add(l);let c=new Ue(Ci,Pi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Nr=class extends Fe{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Xo=class extends ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Nr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Oe(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:qn});r.uniforms.tEquirect.value=e;let a=new Dt(i,r),o=e.minFilter;return e.minFilter===An&&(e.minFilter=dn),new Wo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Wa=new T,Rd=new T,Cd=new Vt,Tn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Wa.subVectors(n,e).cross(Rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Wa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cd.getNormalMatrix(t),i=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new Ln,hr=new T,Rs=class{constructor(t=new Tn,e=new Tn,n=new Tn,i=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],m=i[9],v=i[10],g=i[11],p=i[12],b=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,g-d,x-p).normalize(),n[1].setComponents(l+r,f+c,g+d,x+p).normalize(),n[2].setComponents(l+a,f+h,g+m,x+b).normalize(),n[3].setComponents(l-a,f-h,g-m,x-b).normalize(),n[4].setComponents(l-o,f-u,g-v,x-S).normalize(),e===Rn)n[5].setComponents(l+o,f+u,g+v,x+S).normalize();else if(e===Cr)n[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(t){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(t.matrixWorld),this.intersectsSphere(si)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(hr.x=i.normal.x>0?t.max.x:t.min.x,hr.y=i.normal.y>0?t.max.y:t.min.y,hr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Pd(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],v=u[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var ve=class s extends Zt{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,d=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let b=p*f-a;for(let S=0;S<c;S++){let x=S*u-r;m.push(x,-b,0),v.push(0,0,1),g.push(S/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let S=b+c*p,x=b+c*(p+1),L=b+1+c*(p+1),R=b+1+c*p;d.push(S,x,R),d.push(x,L,R)}this.setIndex(d),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ef=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,If=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ff=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,up=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Id,alphahash_pars_fragment:Ld,alphamap_fragment:Dd,alphamap_pars_fragment:Ud,alphatest_fragment:Nd,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Hd,beginnormal_vertex:Vd,bsdfs:Gd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:$d,color_fragment:Jd,color_pars_fragment:Kd,color_pars_vertex:Qd,color_vertex:jd,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:Ef,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:yf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:bf,lights_pars_begin:Sf,lights_toon_fragment:wf,lights_toon_pars_fragment:Tf,lights_phong_fragment:Af,lights_phong_pars_fragment:Rf,lights_physical_fragment:Cf,lights_physical_pars_fragment:Pf,lights_fragment_begin:If,lights_fragment_maps:Lf,lights_fragment_end:Df,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Nf,logdepthbuf_pars_vertex:Ff,logdepthbuf_vertex:Of,map_fragment:Bf,map_pars_fragment:zf,map_particle_fragment:kf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Gf,morphinstance_vertex:Wf,morphcolor_vertex:Xf,morphnormal_vertex:qf,morphtarget_pars_vertex:Yf,morphtarget_vertex:Zf,normal_fragment_begin:$f,normal_fragment_maps:Jf,normal_pars_fragment:Kf,normal_pars_vertex:Qf,normal_vertex:jf,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:ep,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:sp,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:hp,roughnessmap_fragment:up,roughnessmap_pars_fragment:dp,shadowmap_pars_fragment:fp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:vp,skinning_pars_vertex:xp,skinning_vertex:_p,skinnormal_vertex:yp,specularmap_fragment:Mp,specularmap_pars_fragment:bp,tonemapping_fragment:Sp,tonemapping_pars_fragment:Ep,transmission_fragment:wp,transmission_pars_fragment:Tp,uv_pars_fragment:Ap,uv_pars_vertex:Rp,uv_vertex:Cp,worldpos_vertex:Pp,background_vert:Ip,background_frag:Lp,backgroundCube_vert:Dp,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Fp,depth_vert:Op,depth_frag:Bp,distanceRGBA_vert:zp,distanceRGBA_frag:kp,equirect_vert:Hp,equirect_frag:Vp,linedashed_vert:Gp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:qp,meshlambert_vert:Yp,meshlambert_frag:Zp,meshmatcap_vert:$p,meshmatcap_frag:Jp,meshnormal_vert:Kp,meshnormal_frag:Qp,meshphong_vert:jp,meshphong_frag:tm,meshphysical_vert:em,meshphysical_frag:nm,meshtoon_vert:im,meshtoon_frag:sm,points_vert:rm,points_frag:am,shadow_vert:om,shadow_frag:lm,sprite_vert:cm,sprite_frag:hm},lt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},hn={basic:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:De([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:De([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:De([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:De([lt.points,lt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:De([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:De([lt.common,lt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:De([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:De([lt.sprite,lt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:De([lt.common,lt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:De([lt.lights,lt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};hn.physical={uniforms:De([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var ur={r:0,b:0,g:0},ri=new $e,um=new ie;function dm(s,t,e,n,i,r,a){let o=new Pt(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function m(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function v(b){let S=!1,x=m(b);x===null?p(o,l):x&&x.isColor&&(p(x,1),S=!0);let L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,S){let x=m(S);x&&(x.isCubeTexture||x.mapping===ea)?(h===void 0&&(h=new Dt(new Oe(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:qi(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ri.copy(S.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(um.makeRotationFromEuler(ri)),h.material.toneMapped=Kt.getTransfer(x.colorSpace)!==re,(u!==x||f!==x.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Dt(new ve(2,2),new Xt({name:"BackgroundMaterial",uniforms:qi(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,d=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(ur,Dh(s)),n.buffers.color.setClear(ur.r,ur.g,ur.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(b,S=1){o.set(b),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:g}}function fm(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,C,F,O,z){let Z=!1,V=u(O,F,C);r!==V&&(r=V,c(r.object)),Z=d(y,O,F,z),Z&&m(y,O,F,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,x(y,C,F,O),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,F){let O=F.wireframe===!0,z=n[y.id];z===void 0&&(z={},n[y.id]=z);let Z=z[C.id];Z===void 0&&(Z={},z[C.id]=Z);let V=Z[O];return V===void 0&&(V=f(l()),Z[O]=V),V}function f(y){let C=[],F=[],O=[];for(let z=0;z<e;z++)C[z]=0,F[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:O,object:y,attributes:{},index:null}}function d(y,C,F,O){let z=r.attributes,Z=C.attributes,V=0,j=F.getAttributes();for(let G in j)if(j[G].location>=0){let pt=z[G],yt=Z[G];if(yt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(yt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(yt=y.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function m(y,C,F,O){let z={},Z=C.attributes,V=0,j=F.getAttributes();for(let G in j)if(j[G].location>=0){let pt=Z[G];pt===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(pt=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(pt=y.instanceColor));let yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),z[G]=yt,V++}r.attributes=z,r.attributesNum=V,r.index=O}function v(){let y=r.newAttributes;for(let C=0,F=y.length;C<F;C++)y[C]=0}function g(y){p(y,0)}function p(y,C){let F=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;F[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),z[y]!==C&&(s.vertexAttribDivisor(y,C),z[y]=C)}function b(){let y=r.newAttributes,C=r.enabledAttributes;for(let F=0,O=C.length;F<O;F++)C[F]!==y[F]&&(s.disableVertexAttribArray(F),C[F]=0)}function S(y,C,F,O,z,Z,V){V===!0?s.vertexAttribIPointer(y,C,F,z,Z):s.vertexAttribPointer(y,C,F,O,z,Z)}function x(y,C,F,O){v();let z=O.attributes,Z=F.getAttributes(),V=C.defaultAttributeValues;for(let j in Z){let G=Z[j];if(G.location>=0){let at=z[j];if(at===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){let pt=at.normalized,yt=at.itemSize,zt=t.get(at);if(zt===void 0)continue;let te=zt.buffer,Y=zt.type,it=zt.bytesPerElement,Mt=Y===s.INT||Y===s.UNSIGNED_INT||at.gpuType===Tl;if(at.isInterleavedBufferAttribute){let rt=at.data,Ct=rt.stride,Ot=at.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<G.locationSize;Ut++)p(G.location+Ut,rt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<G.locationSize;Ut++)g(G.location+Ut);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Ut=0;Ut<G.locationSize;Ut++)S(G.location+Ut,yt/G.locationSize,Y,pt,Ct*it,(Ot+yt/G.locationSize*Ut)*it,Mt)}else{if(at.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt,at.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let rt=0;rt<G.locationSize;rt++)g(G.location+rt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let rt=0;rt<G.locationSize;rt++)S(G.location+rt,yt/G.locationSize,Y,pt,yt*it,yt/G.locationSize*rt*it,Mt)}}else if(V!==void 0){let pt=V[j];if(pt!==void 0)switch(pt.length){case 2:s.vertexAttrib2fv(G.location,pt);break;case 3:s.vertexAttrib3fv(G.location,pt);break;case 4:s.vertexAttrib4fv(G.location,pt);break;default:s.vertexAttrib1fv(G.location,pt)}}}}b()}function L(){I();for(let y in n){let C=n[y];for(let F in C){let O=C[F];for(let z in O)h(O[z].object),delete O[z];delete C[F]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;let C=n[y.id];for(let F in C){let O=C[F];for(let z in O)h(O[z].object),delete O[z];delete C[F]}delete n[y.id]}function P(y){for(let C in n){let F=n[C];if(F[y.id]===void 0)continue;let O=F[y.id];for(let z in O)h(O[z].object),delete O[z];delete F[y.id]}}function I(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function pm(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)a(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*f[v];e.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(P){return!(P!==Ge&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let I=P===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Pn&&n.convert(P)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ze&&!I)}function l(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=m>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:L,maxSamples:R}}function gm(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Tn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let b=r?0:n,S=b*4,x=p.clippingState||null;l.value=x,x=h(m,f,S,d);for(let L=0;L!==S;++L)x[L]=e[L];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=l.value,m!==!0||g===null){let p=d+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=d;S!==v;++S,x+=4)a.copy(u[S]).applyMatrix4(b,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function vm(s){let t=new WeakMap;function e(a,o){return o===Ss?a.mapping=ki:o===uo&&(a.mapping=Hi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ss||o===uo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Xo(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yi=class extends Ur{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ui=4,Ic=[.125,.215,.35,.446,.526,.582],hi=20,Xa=new Yi,Lc=new Pt,qa=null,Ya=0,Za=0,$a=!1,oi=(1+Math.sqrt(5))/2,Ii=1/oi,Dc=[new T(-oi,Ii,0),new T(oi,Ii,0),new T(-Ii,0,oi),new T(Ii,0,oi),new T(0,oi,-Ii),new T(0,oi,Ii),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Zi=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Ya,Za),this._renderer.xr.enabled=$a,t.scissorTest=!1,dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Ya=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),$a=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Nn,format:Ge,colorSpace:jn,depthBuffer:!1},i=Uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xm(r)),this._blurMaterial=_m(r,t,e)}return i}_compileMaterial(t){let e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,i){let o=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Lc),h.toneMapping=fn,h.autoClear=!1;let d=new Je({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),m=new Dt(new Oe,d),v=!1,g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,v=!0):(d.color.copy(Lc),v=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let S=this._cubeSize;dr(i,b*S,p>2?S:0,S,S),h.setRenderTarget(i),v&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ki||t.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nc());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dc[(i-r-1)%Dc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Dt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):hi;g>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hi}`);let p=[],b=0;for(let P=0;P<hi;++P){let I=P/v,E=Math.exp(-I*I/2);p.push(E),P===0?b+=E:P<g&&(b+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:S}=this;f.dTheta.value=m,f.mipInt.value=S-n;let x=this._sizeLods[i],L=3*x*(i>S-Ui?i-S+Ui:0),R=4*(this._cubeSize-x);dr(e,L,R,3*x,2*x),l.setRenderTarget(e),l.render(u,Xa)}};function xm(s){let t=[],e=[],n=[],i=s,r=s-Ui+1+Ic.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Ui?l=Ic[a-s+Ui-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,v=3,g=2,p=1,b=new Float32Array(v*m*d),S=new Float32Array(g*m*d),x=new Float32Array(p*m*d);for(let R=0;R<d;R++){let P=R%3*2/3-1,I=R>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];b.set(E,v*m*R),S.set(f,g*m*R);let y=[R,R,R,R,R,R];x.set(y,p*m*R)}let L=new Zt;L.setAttribute("position",new ae(b,v)),L.setAttribute("uv",new ae(S,g)),L.setAttribute("faceIndex",new ae(x,p)),t.push(L),i>Ui&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uc(s,t,e){let n=new ze(s,t,e);return n.texture.mapping=ea,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function dr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function _m(s,t,e){let n=new Float32Array(hi),i=new T(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Nc(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Fc(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ym(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ss||l===uo,h=l===ki||l===Hi;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Zi(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Zi(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Mm(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&gs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function bm(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);for(let m in f.morphAttributes){let v=f.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}f.removeEventListener("dispose",a),delete i[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let m in f)t.update(f[m],s.ARRAY_BUFFER);let d=u.morphAttributes;for(let m in d){let v=d[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],s.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,m=u.attributes.position,v=0;if(d!==null){let b=d.array;v=d.version;for(let S=0,x=b.length;S<x;S+=3){let L=b[S+0],R=b[S+1],P=b[S+2];f.push(L,R,R,P,P,L)}}else if(m!==void 0){let b=m.array;v=m.version;for(let S=0,x=b.length/3-1;S<x;S+=3){let L=S+0,R=S+1,P=S+2;f.push(L,R,R,P,P,L)}}else return;let g=new(Ih(f)?Dr:Lr)(f,1);g.version=v;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Sm(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,m){m!==0&&(s.drawElementsInstanced(n,d,r,f*a,m),e.update(d,n,m))}function h(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,n,1)}function u(f,d,m,v){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,v,0,m);let p=0;for(let b=0;b<m;b++)p+=d[b]*v[b];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Em(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wm(s,t,e){let n=new WeakMap,i=new fe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;d===!0&&(S=1),m===!0&&(S=2),v===!0&&(S=3);let x=o.attributes.position.count*S,L=1;x>t.maxTextureSize&&(L=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let R=new Float32Array(x*L*4*u),P=new Ir(R,x,L,u);P.type=Ze,P.needsUpdate=!0;let I=S*4;for(let y=0;y<u;y++){let C=g[y],F=p[y],O=b[y],z=x*L*4*y;for(let Z=0;Z<C.count;Z++){let V=Z*I;d===!0&&(i.fromBufferAttribute(C,Z),R[z+V+0]=i.x,R[z+V+1]=i.y,R[z+V+2]=i.z,R[z+V+3]=0),m===!0&&(i.fromBufferAttribute(F,Z),R[z+V+4]=i.x,R[z+V+5]=i.y,R[z+V+6]=i.z,R[z+V+7]=0),v===!0&&(i.fromBufferAttribute(O,Z),R[z+V+8]=i.x,R[z+V+9]=i.y,R[z+V+10]=i.z,R[z+V+11]=O.itemSize===4?i.w:1)}}f={count:u,texture:P,size:new et(x,L)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let m=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Tm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Fr=class extends Fe{constructor(t,e,n,i,r,a,o,l,c,h=Fi){if(h!==Fi&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fi&&(n=di),n===void 0&&h===Wi&&(n=Gi),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:We,this.minFilter=l!==void 0?l:We,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nh=new Fe,Oc=new Fr(1,1),Fh=new Ir,Oh=new Go,Bh=new Nr,Bc=[],zc=[],kc=new Float32Array(16),Hc=new Float32Array(9),Vc=new Float32Array(4);function ss(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Bc[i];if(r===void 0&&(r=new Float32Array(i),Bc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ia(s,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Am(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function Cm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function Pm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function Im(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Vc.set(n),s.uniformMatrix2fv(this.addr,!1,Vc),_e(e,n)}}function Lm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;Hc.set(n),s.uniformMatrix3fv(this.addr,!1,Hc),_e(e,n)}}function Dm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(xe(e,n))return;kc.set(n),s.uniformMatrix4fv(this.addr,!1,kc),_e(e,n)}}function Um(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function Fm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function Om(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function Bm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function km(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function Hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function Vm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Oc.compareFunction=Ph,r=Oc):r=Nh,e.setTexture2D(t||r,i)}function Gm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Oh,i)}function Wm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bh,i)}function Xm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Fh,i)}function qm(s){switch(s){case 5126:return Am;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Im;case 35675:return Lm;case 35676:return Dm;case 5124:case 35670:return Um;case 35667:case 35671:return Nm;case 35668:case 35672:return Fm;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return zm;case 36295:return km;case 36296:return Hm;case 35678:case 36198:case 36298:case 36306:case 35682:return Vm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(s,t){s.uniform1fv(this.addr,t)}function Zm(s,t){let e=ss(t,this.size,2);s.uniform2fv(this.addr,e)}function $m(s,t){let e=ss(t,this.size,3);s.uniform3fv(this.addr,e)}function Jm(s,t){let e=ss(t,this.size,4);s.uniform4fv(this.addr,e)}function Km(s,t){let e=ss(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Qm(s,t){let e=ss(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function jm(s,t){let e=ss(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function t0(s,t){s.uniform1iv(this.addr,t)}function e0(s,t){s.uniform2iv(this.addr,t)}function n0(s,t){s.uniform3iv(this.addr,t)}function i0(s,t){s.uniform4iv(this.addr,t)}function s0(s,t){s.uniform1uiv(this.addr,t)}function r0(s,t){s.uniform2uiv(this.addr,t)}function a0(s,t){s.uniform3uiv(this.addr,t)}function o0(s,t){s.uniform4uiv(this.addr,t)}function l0(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Nh,r[a])}function c0(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Oh,r[a])}function h0(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bh,r[a])}function u0(s,t,e){let n=this.cache,i=t.length,r=ia(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Fh,r[a])}function d0(s){switch(s){case 5126:return Ym;case 35664:return Zm;case 35665:return $m;case 35666:return Jm;case 35674:return Km;case 35675:return Qm;case 35676:return jm;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}var qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qm(e.type)}},Yo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}},Zo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Ja=/(\w+)(\])?(\[|\.)?/g;function Gc(s,t){s.seq.push(t),s.map[t.id]=t}function f0(s,t,e){let n=s.name,i=n.length;for(Ja.lastIndex=0;;){let r=Ja.exec(n),a=Ja.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Gc(e,c===void 0?new qo(o,s,t):new Yo(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Zo(o),Gc(e,u)),e=u}}}var Bi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);f0(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Wc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var p0=37297,m0=0;function g0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Xc=new Vt;function v0(s){Kt._getMatrix(Xc,Kt.workingColorSpace,s);let t=`mat3( ${Xc.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(s)){case na:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function qc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+g0(s.getShaderSource(t),a)}else return i}function x0(s,t){let e=v0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _0(s,t){let e;switch(t){case Ru:e="Linear";break;case Cu:e="Reinhard";break;case Pu:e="Cineon";break;case Iu:e="ACESFilmic";break;case Du:e="AgX";break;case Uu:e="Neutral";break;case Lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fr=new T;function y0(){Kt.getLuminanceCoefficients(fr);let s=fr.x.toFixed(4),t=fr.y.toFixed(4),e=fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function b0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function S0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function vs(s){return s!==""}function Yc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(s){return s.replace(E0,T0)}var w0=new Map;function T0(s,t){let e=Wt[t];if(e===void 0){let n=w0.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return $o(e)}var A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $c(s){return s.replace(A0,R0)}function R0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function C0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function P0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case ea:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I0(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Hi&&(t="ENVMAP_MODE_REFRACTION"),t}function L0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function D0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function U0(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=C0(e),c=P0(e),h=I0(e),u=L0(e),f=D0(e),d=M0(e),m=b0(r),v=i.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(vs).join(`
`),p.length>0&&(p+=`
`)):(g=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),p=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==fn?_0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,x0("linearToOutputTexel",e.outputColorSpace),y0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),a=$o(a),a=Yc(a,e),a=Zc(a,e),o=$o(o),o=Yc(o,e),o=Zc(o,e),a=$c(a),o=$c(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+g+a,x=b+p+o,L=Wc(i,i.VERTEX_SHADER,S),R=Wc(i,i.FRAGMENT_SHADER,x);i.attachShader(v,L),i.attachShader(v,R),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function P(C){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(v).trim(),O=i.getShaderInfoLog(L).trim(),z=i.getShaderInfoLog(R).trim(),Z=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(Z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,L,R);else{let j=qc(i,L,"vertex"),G=qc(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+j+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||z==="")&&(V=!1);V&&(C.diagnostics={runnable:Z,programLog:F,vertexShader:{log:O,prefix:g},fragmentShader:{log:z,prefix:p}})}i.deleteShader(L),i.deleteShader(R),I=new Bi(i,v),E=S0(i,v)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(v,p0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=R,this}var N0=0,Jo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ko(t),e.set(t,n)),n}},Ko=class{constructor(t){this.id=N0++,this.code=t,this.usedTimes=0}};function F0(s,t,e,n,i,r,a){let o=new As,l=new Jo,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,y,C,F,O){let z=F.fog,Z=O.geometry,V=E.isMeshStandardMaterial?F.environment:null,j=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=j&&j.mapping===ea?j.image.height:null,at=m[E.type];E.precision!==null&&(d=i.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));let pt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yt=pt!==void 0?pt.length:0,zt=0;Z.morphAttributes.position!==void 0&&(zt=1),Z.morphAttributes.normal!==void 0&&(zt=2),Z.morphAttributes.color!==void 0&&(zt=3);let te,Y,it,Mt;if(at){let se=hn[at];te=se.vertexShader,Y=se.fragmentShader}else te=E.vertexShader,Y=E.fragmentShader,l.update(E),it=l.getVertexShaderID(E),Mt=l.getFragmentShaderID(E);let rt=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Ot=O.isInstancedMesh===!0,Ut=O.isBatchedMesh===!0,Jt=!!E.map,J=!!E.matcap,nt=!!j,A=!!E.aoMap,At=!!E.lightMap,Q=!!E.bumpMap,vt=!!E.normalMap,ot=!!E.displacementMap,It=!!E.emissiveMap,mt=!!E.metalnessMap,w=!!E.roughnessMap,_=E.anisotropy>0,B=E.clearcoat>0,X=E.dispersion>0,K=E.iridescence>0,q=E.sheen>0,bt=E.transmission>0,ct=_&&!!E.anisotropyMap,gt=B&&!!E.clearcoatMap,qt=B&&!!E.clearcoatNormalMap,tt=B&&!!E.clearcoatRoughnessMap,xt=K&&!!E.iridescenceMap,Lt=K&&!!E.iridescenceThicknessMap,Nt=q&&!!E.sheenColorMap,_t=q&&!!E.sheenRoughnessMap,Yt=!!E.specularMap,Gt=!!E.specularColorMap,oe=!!E.specularIntensityMap,D=bt&&!!E.transmissionMap,ht=bt&&!!E.thicknessMap,W=!!E.gradientMap,$=!!E.alphaMap,ft=E.alphaTest>0,ut=!!E.alphaHash,kt=!!E.extensions,me=fn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(me=s.toneMapping);let Ae={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:te,fragmentShader:Y,defines:E.defines,customVertexShaderID:it,customFragmentShaderID:Mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&O._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&O.instanceColor!==null,instancingMorph:Ot&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:jn,alphaToCoverage:!!E.alphaToCoverage,map:Jt,matcap:J,envMap:nt,envMapMode:nt&&j.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:At,bumpMap:Q,normalMap:vt,displacementMap:f&&ot,emissiveMap:It,normalMapObjectSpace:vt&&E.normalMapType===Bu,normalMapTangentSpace:vt&&E.normalMapType===Ch,metalnessMap:mt,roughnessMap:w,anisotropy:_,anisotropyMap:ct,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:qt,clearcoatRoughnessMap:tt,dispersion:X,iridescence:K,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:q,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:Yt,specularColorMap:Gt,specularIntensityMap:oe,transmission:bt,transmissionMap:D,thicknessMap:ht,gradientMap:W,opaque:E.transparent===!1&&E.blending===Yn&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ft,alphaHash:ut,combine:E.combine,mapUv:Jt&&v(E.map.channel),aoMapUv:A&&v(E.aoMap.channel),lightMapUv:At&&v(E.lightMap.channel),bumpMapUv:Q&&v(E.bumpMap.channel),normalMapUv:vt&&v(E.normalMap.channel),displacementMapUv:ot&&v(E.displacementMap.channel),emissiveMapUv:It&&v(E.emissiveMap.channel),metalnessMapUv:mt&&v(E.metalnessMap.channel),roughnessMapUv:w&&v(E.roughnessMap.channel),anisotropyMapUv:ct&&v(E.anisotropyMap.channel),clearcoatMapUv:gt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:_t&&v(E.sheenRoughnessMap.channel),specularMapUv:Yt&&v(E.specularMap.channel),specularColorMapUv:Gt&&v(E.specularColorMap.channel),specularIntensityMapUv:oe&&v(E.specularIntensityMap.channel),transmissionMapUv:D&&v(E.transmissionMap.channel),thicknessMapUv:ht&&v(E.thicknessMap.channel),alphaMapUv:$&&v(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(vt||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Z.attributes.uv&&(Jt||$),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:me,decodeVideoTexture:Jt&&E.map.isVideoTexture===!0&&Kt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:It&&E.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===we,flipSided:E.side===Ie,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(E){let y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)y.push(C),y.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(y,E),S(y,E),y.push(s.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function b(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let y=m[E.type],C;if(y){let F=hn[y];C=wd.clone(F.uniforms)}else C=E.uniforms;return C}function L(E,y){let C;for(let F=0,O=h.length;F<O;F++){let z=h[F];if(z.cacheKey===y){C=z,++C.usedTimes;break}}return C===void 0&&(C=new U0(s,y,E,r),h.push(C)),C}function R(E){if(--E.usedTimes===0){let y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function P(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:L,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:I}}function O0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function B0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Qc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,d,m,v,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function o(u,f,d,m,v,g){let p=a(u,f,d,m,v,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,m,v,g){let p=a(u,f,d,m,v,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||B0),n.length>1&&n.sort(f||Kc),i.length>1&&i.sort(f||Kc)}function h(){for(let u=t,f=s.length;u<f;u++){let d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function z0(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Qc,s.set(n,[a])):i>=r.length?(a=new Qc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function k0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Pt};break;case"SpotLight":e={position:new T,direction:new T,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new T,halfWidth:new T,halfHeight:new T};break}return s[t.id]=e,e}}}function H0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var V0=0;function G0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function W0(s){let t=new k0,e=H0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let i=new T,r=new ie,a=new ie;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,m=0,v=0,g=0,p=0,b=0,S=0,x=0,L=0,R=0,P=0;c.sort(G0);for(let E=0,y=c.length;E<y;E++){let C=c[E],F=C.color,O=C.intensity,z=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*O,u+=F.g*O,f+=F.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],O);P++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=C.shadow.matrix,b++}n.directional[d]=V,d++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(F).multiplyScalar(O),V.distance=z,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[v]=V;let j=C.shadow;if(C.map&&(n.spotLightMap[L]=C.map,L++,j.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[v]=j.matrix,C.castShadow){let G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=Z,x++}v++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(F).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=V,g++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let j=C.shadow,G=e.get(C);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=V,m++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=lt.LTC_FLOAT_1,n.rectAreaLTC2=lt.LTC_FLOAT_2):(n.rectAreaLTC1=lt.LTC_HALF_1,n.rectAreaLTC2=lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==d||I.pointLength!==m||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==L||I.numLightProbes!==P)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,I.directionalLength=d,I.pointLength=m,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=L,I.numLightProbes=P,n.version=V0++)}function l(c,h){let u=0,f=0,d=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),u++}else if(S.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(g),d++}else if(S.isRectAreaLight){let x=n.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),f++}else if(S.isHemisphereLight){let x=n.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function jc(s){let t=new W0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function X0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new jc(s),t.set(i,[o])):r>=a.length?(o=new jc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Qo=class extends Dn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},jo=class extends Dn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Z0(s,t,e){let n=new Rs,i=new et,r=new et,a=new fe,o=new Qo({depthPacking:Ou}),l=new jo,c={},h=e.maxTextureSize,u={[$n]:Ie,[Ie]:$n,[we]:we},f=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:q0,fragmentShader:Y0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new Zt;m.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Dt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let p=this.type;this.render=function(R,P,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let E=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),F=s.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let O=p!==wn&&this.type===wn,z=p===wn&&this.type!==wn;for(let Z=0,V=R.length;Z<V;Z++){let j=R[Z],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let at=G.getFrameExtents();if(i.multiply(at),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/at.x),i.x=r.x*at.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/at.y),i.y=r.y*at.y,G.mapSize.y=r.y)),G.map===null||O===!0||z===!0){let yt=this.type!==wn?{minFilter:We,magFilter:We}:{};G.map!==null&&G.map.dispose(),G.map=new ze(i.x,i.y,yt),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();let pt=G.getViewportCount();for(let yt=0;yt<pt;yt++){let zt=G.getViewport(yt);a.set(r.x*zt.x,r.y*zt.y,r.x*zt.z,r.y*zt.w),F.viewport(a),G.updateMatrices(j,yt),n=G.getFrustum(),x(P,I,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===wn&&b(G,I),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,y,C)};function b(R,P){let I=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ze(i.x,i.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(P,null,I,f,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(P,null,I,d,v,null)}function S(R,P,I,E){let y=null,C=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)y=C;else if(y=I.isPointLight===!0?l:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let F=y.uuid,O=P.uuid,z=c[F];z===void 0&&(z={},c[F]=z);let Z=z[O];Z===void 0&&(Z=y.clone(),z[O]=Z,P.addEventListener("dispose",L)),y=Z}if(y.visible=P.visible,y.wireframe=P.wireframe,E===wn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:u[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,I.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let F=s.properties.get(y);F.light=I}return y}function x(R,P,I,E,y){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);let O=t.update(R),z=R.material;if(Array.isArray(z)){let Z=O.groups;for(let V=0,j=Z.length;V<j;V++){let G=Z[V],at=z[G.materialIndex];if(at&&at.visible){let pt=S(R,at,E,y);R.onBeforeShadow(s,R,P,I,O,pt,G),s.renderBufferDirect(I,null,O,pt,R,G),R.onAfterShadow(s,R,P,I,O,pt,G)}}}else if(z.visible){let Z=S(R,z,E,y);R.onBeforeShadow(s,R,P,I,O,Z,null),s.renderBufferDirect(I,null,O,Z,R,null),R.onAfterShadow(s,R,P,I,O,Z,null)}}let F=R.children;for(let O=0,z=F.length;O<z;O++)x(F[O],P,I,E,y)}function L(R){R.target.removeEventListener("dispose",L);for(let I in c){let E=c[I],y=R.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}var $0={[so]:ro,[ao]:co,[oo]:ho,[zi]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:zi};function J0(s,t){function e(){let D=!1,ht=new fe,W=null,$=new fe(0,0,0,0);return{setMask:function(ft){W!==ft&&!D&&(s.colorMask(ft,ft,ft,ft),W=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ut,kt,me,Ae){Ae===!0&&(ft*=me,ut*=me,kt*=me),ht.set(ft,ut,kt,me),$.equals(ht)===!1&&(s.clearColor(ft,ut,kt,me),$.copy(ht))},reset:function(){D=!1,W=null,$.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,W=null,$=null,ft=null;return{setReversed:function(ut){if(ht!==ut){let kt=t.get("EXT_clip_control");ht?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let me=ft;ft=null,this.setClear(me)}ht=ut},getReversed:function(){return ht},setTest:function(ut){ut?rt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ut){W!==ut&&!D&&(s.depthMask(ut),W=ut)},setFunc:function(ut){if(ht&&(ut=$0[ut]),$!==ut){switch(ut){case so:s.depthFunc(s.NEVER);break;case ro:s.depthFunc(s.ALWAYS);break;case ao:s.depthFunc(s.LESS);break;case zi:s.depthFunc(s.LEQUAL);break;case oo:s.depthFunc(s.EQUAL);break;case lo:s.depthFunc(s.GEQUAL);break;case co:s.depthFunc(s.GREATER);break;case ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}$=ut}},setLocked:function(ut){D=ut},setClear:function(ut){ft!==ut&&(ht&&(ut=1-ut),s.clearDepth(ut),ft=ut)},reset:function(){D=!1,W=null,$=null,ft=null,ht=!1}}}function i(){let D=!1,ht=null,W=null,$=null,ft=null,ut=null,kt=null,me=null,Ae=null;return{setTest:function(se){D||(se?rt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(se){ht!==se&&!D&&(s.stencilMask(se),ht=se)},setFunc:function(se,en,xn){(W!==se||$!==en||ft!==xn)&&(s.stencilFunc(se,en,xn),W=se,$=en,ft=xn)},setOp:function(se,en,xn){(ut!==se||kt!==en||me!==xn)&&(s.stencilOp(se,en,xn),ut=se,kt=en,me=xn)},setLocked:function(se){D=se},setClear:function(se){Ae!==se&&(s.clearStencil(se),Ae=se)},reset:function(){D=!1,ht=null,W=null,$=null,ft=null,ut=null,kt=null,me=null,Ae=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,b=null,S=null,x=null,L=null,R=null,P=new Pt(0,0,0),I=0,E=!1,y=null,C=null,F=null,O=null,z=null,Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,j=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=j>=2);let at=null,pt={},yt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),te=new fe().fromArray(yt),Y=new fe().fromArray(zt);function it(D,ht,W,$){let ft=new Uint8Array(4),ut=s.createTexture();s.bindTexture(D,ut),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<W;kt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,$,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(ht+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return ut}let Mt={};Mt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),Mt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Mt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(s.DEPTH_TEST),a.setFunc(zi),Q(!1),vt(ec),rt(s.CULL_FACE),A(qn);function rt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Ct(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function Ot(D,ht){return u[D]!==ht?(s.bindFramebuffer(D,ht),u[D]=ht,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ut(D,ht){let W=d,$=!1;if(D){W=f.get(ht),W===void 0&&(W=[],f.set(ht,W));let ft=D.textures;if(W.length!==ft.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,kt=ft.length;ut<kt;ut++)W[ut]=s.COLOR_ATTACHMENT0+ut;W.length=ft.length,$=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,$=!0);$&&s.drawBuffers(W)}function Jt(D){return m!==D?(s.useProgram(D),m=D,!0):!1}let J={[li]:s.FUNC_ADD,[cu]:s.FUNC_SUBTRACT,[hu]:s.FUNC_REVERSE_SUBTRACT};J[uu]=s.MIN,J[du]=s.MAX;let nt={[fu]:s.ZERO,[pu]:s.ONE,[mu]:s.SRC_COLOR,[no]:s.SRC_ALPHA,[Mu]:s.SRC_ALPHA_SATURATE,[_u]:s.DST_COLOR,[vu]:s.DST_ALPHA,[gu]:s.ONE_MINUS_SRC_COLOR,[io]:s.ONE_MINUS_SRC_ALPHA,[yu]:s.ONE_MINUS_DST_COLOR,[xu]:s.ONE_MINUS_DST_ALPHA,[bu]:s.CONSTANT_COLOR,[Su]:s.ONE_MINUS_CONSTANT_COLOR,[Eu]:s.CONSTANT_ALPHA,[wu]:s.ONE_MINUS_CONSTANT_ALPHA};function A(D,ht,W,$,ft,ut,kt,me,Ae,se){if(D===qn){v===!0&&(Ct(s.BLEND),v=!1);return}if(v===!1&&(rt(s.BLEND),v=!0),D!==lu){if(D!==g||se!==E){if((p!==li||x!==li)&&(s.blendEquation(s.FUNC_ADD),p=li,x=li),se)switch(D){case Yn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ce:s.blendFunc(s.ONE,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ce:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,S=null,L=null,R=null,P.set(0,0,0),I=0,g=D,E=se}return}ft=ft||ht,ut=ut||W,kt=kt||$,(ht!==p||ft!==x)&&(s.blendEquationSeparate(J[ht],J[ft]),p=ht,x=ft),(W!==b||$!==S||ut!==L||kt!==R)&&(s.blendFuncSeparate(nt[W],nt[$],nt[ut],nt[kt]),b=W,S=$,L=ut,R=kt),(me.equals(P)===!1||Ae!==I)&&(s.blendColor(me.r,me.g,me.b,Ae),P.copy(me),I=Ae),g=D,E=!1}function At(D,ht){D.side===we?Ct(s.CULL_FACE):rt(s.CULL_FACE);let W=D.side===Ie;ht&&(W=!W),Q(W),D.blending===Yn&&D.transparent===!1?A(qn):A(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let $=D.stencilWrite;o.setTest($),$&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function vt(D){D!==ru?(rt(s.CULL_FACE),D!==C&&(D===ec?s.cullFace(s.BACK):D===au?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),C=D}function ot(D){D!==F&&(V&&s.lineWidth(D),F=D)}function It(D,ht,W){D?(rt(s.POLYGON_OFFSET_FILL),(O!==ht||z!==W)&&(s.polygonOffset(ht,W),O=ht,z=W)):Ct(s.POLYGON_OFFSET_FILL)}function mt(D){D?rt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function w(D){D===void 0&&(D=s.TEXTURE0+Z-1),at!==D&&(s.activeTexture(D),at=D)}function _(D,ht,W){W===void 0&&(at===null?W=s.TEXTURE0+Z-1:W=at);let $=pt[W];$===void 0&&($={type:void 0,texture:void 0},pt[W]=$),($.type!==D||$.texture!==ht)&&(at!==W&&(s.activeTexture(W),at=W),s.bindTexture(D,ht||Mt[D]),$.type=D,$.texture=ht)}function B(){let D=pt[at];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){te.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function _t(D){Y.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Y.copy(D))}function Yt(D,ht){let W=c.get(ht);W===void 0&&(W=new WeakMap,c.set(ht,W));let $=W.get(D);$===void 0&&($=s.getUniformBlockIndex(ht,D.name),W.set(D,$))}function Gt(D,ht){let $=c.get(ht).get(D);l.get(ht)!==$&&(s.uniformBlockBinding(ht,$,D.__bindingPointIndex),l.set(ht,$))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},at=null,pt={},u={},f=new WeakMap,d=[],m=null,v=!1,g=null,p=null,b=null,S=null,x=null,L=null,R=null,P=new Pt(0,0,0),I=0,E=!1,y=null,C=null,F=null,O=null,z=null,te.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Ct,bindFramebuffer:Ot,drawBuffers:Ut,useProgram:Jt,setBlending:A,setMaterial:At,setFlipSided:Q,setCullFace:vt,setLineWidth:ot,setPolygonOffset:It,setScissorTest:mt,activeTexture:w,bindTexture:_,unbindTexture:B,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:xt,texImage3D:Lt,updateUBOMapping:Yt,uniformBlockBinding:Gt,texStorage2D:qt,texStorage3D:tt,texSubImage2D:q,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Nt,viewport:_t,reset:oe}}function th(s,t,e,n){let i=K0(n);switch(e){case Sh:return s*t;case wh:return s*t;case Th:return s*t*2;case Cl:return s*t/i.components*i.byteLength;case Pl:return s*t/i.components*i.byteLength;case Ah:return s*t*2/i.components*i.byteLength;case Il:return s*t*2/i.components*i.byteLength;case Eh:return s*t*3/i.components*i.byteLength;case Ge:return s*t*4/i.components*i.byteLength;case Ll:return s*t*4/i.components*i.byteLength;case Sr:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wr:case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mo:case vo:return Math.max(s,16)*Math.max(t,8)/4;case po:case go:return Math.max(s,8)*Math.max(t,8)/2;case xo:case _o:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case yo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case So:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Eo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case To:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Po:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Io:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Do:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Uo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ar:case No:case Fo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rh:case Oo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Bo:case zo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K0(s){switch(s){case Pn:case yh:return{byteLength:1,components:1};case Es:case Mh:case Nn:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case di:case Tl:case Ze:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Q0(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,_){return d?new OffscreenCanvas(w,_):Ts("canvas")}function v(w,_,B){let X=1,K=mt(w);if((K.width>B||K.height>B)&&(X=B/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let q=Math.floor(X*K.width),bt=Math.floor(X*K.height);u===void 0&&(u=m(q,bt));let ct=_?m(q,bt):u;return ct.width=q,ct.height=bt,ct.getContext("2d").drawImage(w,0,0,q,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+bt+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(w,_,B,X,K=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=_;if(_===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8)),_===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),_===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8)),_===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),_===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),_===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),_===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),_===s.RGBA){let bt=K?na:Kt.getTransfer(X);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=bt===re?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(w,_){let B;return w?_===null||_===di||_===Gi?B=s.DEPTH24_STENCIL8:_===Ze?B=s.DEPTH32F_STENCIL8:_===Es&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===Gi?B=s.DEPTH_COMPONENT24:_===Ze?B=s.DEPTH_COMPONENT32F:_===Es&&(B=s.DEPTH_COMPONENT16),B}function L(w,_){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==We&&w.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function R(w){let _=w.target;_.removeEventListener("dispose",R),I(_),_.isVideoTexture&&h.delete(_)}function P(w){let _=w.target;_.removeEventListener("dispose",P),y(_)}function I(w){let _=n.get(w);if(_.__webglInit===void 0)return;let B=w.source,X=f.get(B);if(X){let K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(w),Object.keys(X).length===0&&f.delete(B)}n.remove(w)}function E(w){let _=n.get(w);s.deleteTexture(_.__webglTexture);let B=w.source,X=f.get(B);delete X[_.__cacheKey],a.memory.textures--}function y(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)s.deleteFramebuffer(_.__webglFramebuffer[X][K]);else s.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)s.deleteFramebuffer(_.__webglFramebuffer[X]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=w.textures;for(let X=0,K=B.length;X<K;X++){let q=n.get(B[X]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(w)}let C=0;function F(){C=0}function O(){let w=C;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),C+=1,w}function z(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function Z(w,_){let B=n.get(w);if(w.isVideoTexture&&ot(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){let X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(B,w,_);return}}e.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+_)}function V(w,_){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Y(B,w,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+_)}function j(w,_){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Y(B,w,_);return}e.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+_)}function G(w,_){let B=n.get(w);if(w.version>0&&B.__version!==w.version){it(B,w,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+_)}let at={[Vi]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[fo]:s.MIRRORED_REPEAT},pt={[We]:s.NEAREST,[Nu]:s.NEAREST_MIPMAP_NEAREST,[Ys]:s.NEAREST_MIPMAP_LINEAR,[dn]:s.LINEAR,[Sa]:s.LINEAR_MIPMAP_NEAREST,[An]:s.LINEAR_MIPMAP_LINEAR},yt={[zu]:s.NEVER,[Xu]:s.ALWAYS,[ku]:s.LESS,[Ph]:s.LEQUAL,[Hu]:s.EQUAL,[Wu]:s.GEQUAL,[Vu]:s.GREATER,[Gu]:s.NOTEQUAL};function zt(w,_){if(_.type===Ze&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===Sa||_.magFilter===Ys||_.magFilter===An||_.minFilter===dn||_.minFilter===Sa||_.minFilter===Ys||_.minFilter===An)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,at[_.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,at[_.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,at[_.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,pt[_.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,pt[_.minFilter]),_.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===We||_.minFilter!==Ys&&_.minFilter!==An||_.type===Ze&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(w,_){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",R));let X=_.source,K=f.get(X);K===void 0&&(K={},f.set(X,K));let q=z(_);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[q].usedTimes++;let bt=K[w.__cacheKey];bt!==void 0&&(K[w.__cacheKey].usedTimes--,bt.usedTimes===0&&E(_)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return B}function Y(w,_,B){let X=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=s.TEXTURE_3D);let K=te(w,_),q=_.source;e.bindTexture(X,w.__webglTexture,s.TEXTURE0+B);let bt=n.get(q);if(q.version!==bt.__version||K===!0){e.activeTexture(s.TEXTURE0+B);let ct=Kt.getPrimaries(Kt.workingColorSpace),gt=_.colorSpace===un?null:Kt.getPrimaries(_.colorSpace),qt=_.colorSpace===un||ct===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=v(_.image,!1,i.maxTextureSize);tt=It(_,tt);let xt=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),Nt=S(_.internalFormat,xt,Lt,_.colorSpace,_.isVideoTexture);zt(X,_);let _t,Yt=_.mipmaps,Gt=_.isVideoTexture!==!0,oe=bt.__version===void 0||K===!0,D=q.dataReady,ht=L(_,tt);if(_.isDepthTexture)Nt=x(_.format===Wi,_.type),oe&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,Nt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Nt,tt.width,tt.height,0,xt,Lt,null));else if(_.isDataTexture)if(Yt.length>0){Gt&&oe&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,Yt[0].width,Yt[0].height);for(let W=0,$=Yt.length;W<$;W++)_t=Yt[W],Gt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,_t.width,_t.height,xt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,W,Nt,_t.width,_t.height,0,xt,Lt,_t.data);_.generateMipmaps=!1}else Gt?(oe&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,tt.width,tt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,xt,Lt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,tt.width,tt.height,0,xt,Lt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Gt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,Yt[0].width,Yt[0].height,tt.depth);for(let W=0,$=Yt.length;W<$;W++)if(_t=Yt[W],_.format!==Ge)if(xt!==null)if(Gt){if(D)if(_.layerUpdates.size>0){let ft=th(_t.width,_t.height,_.format,_.type);for(let ut of _.layerUpdates){let kt=_t.data.subarray(ut*ft/_t.data.BYTES_PER_ELEMENT,(ut+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ut,_t.width,_t.height,1,xt,kt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,tt.depth,xt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Nt,_t.width,_t.height,tt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,_t.width,_t.height,tt.depth,xt,Lt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Nt,_t.width,_t.height,tt.depth,0,xt,Lt,_t.data)}else{Gt&&oe&&e.texStorage2D(s.TEXTURE_2D,ht,Nt,Yt[0].width,Yt[0].height);for(let W=0,$=Yt.length;W<$;W++)_t=Yt[W],_.format!==Ge?xt!==null?Gt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,_t.width,_t.height,xt,Lt,_t.data):e.texImage2D(s.TEXTURE_2D,W,Nt,_t.width,_t.height,0,xt,Lt,_t.data)}else if(_.isDataArrayTexture)if(Gt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Nt,tt.width,tt.height,tt.depth),D)if(_.layerUpdates.size>0){let W=th(tt.width,tt.height,_.format,_.type);for(let $ of _.layerUpdates){let ft=tt.data.subarray($*W/tt.data.BYTES_PER_ELEMENT,($+1)*W/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,xt,Lt,ft)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,xt,Lt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,tt.width,tt.height,tt.depth,0,xt,Lt,tt.data);else if(_.isData3DTexture)Gt?(oe&&e.texStorage3D(s.TEXTURE_3D,ht,Nt,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,xt,Lt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,tt.width,tt.height,tt.depth,0,xt,Lt,tt.data);else if(_.isFramebufferTexture){if(oe)if(Gt)e.texStorage2D(s.TEXTURE_2D,ht,Nt,tt.width,tt.height);else{let W=tt.width,$=tt.height;for(let ft=0;ft<ht;ft++)e.texImage2D(s.TEXTURE_2D,ft,Nt,W,$,0,xt,Lt,null),W>>=1,$>>=1}}else if(Yt.length>0){if(Gt&&oe){let W=mt(Yt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Nt,W.width,W.height)}for(let W=0,$=Yt.length;W<$;W++)_t=Yt[W],Gt?D&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,xt,Lt,_t):e.texImage2D(s.TEXTURE_2D,W,Nt,xt,Lt,_t);_.generateMipmaps=!1}else if(Gt){if(oe){let W=mt(tt);e.texStorage2D(s.TEXTURE_2D,ht,Nt,W.width,W.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Lt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Nt,xt,Lt,tt);g(_)&&p(X),bt.__version=q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function it(w,_,B){if(_.image.length!==6)return;let X=te(w,_),K=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+B);let q=n.get(K);if(K.version!==q.__version||X===!0){e.activeTexture(s.TEXTURE0+B);let bt=Kt.getPrimaries(Kt.workingColorSpace),ct=_.colorSpace===un?null:Kt.getPrimaries(_.colorSpace),gt=_.colorSpace===un||bt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let qt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let $=0;$<6;$++)!qt&&!tt?xt[$]=v(_.image[$],!0,i.maxCubemapSize):xt[$]=tt?_.image[$].image:_.image[$],xt[$]=It(_,xt[$]);let Lt=xt[0],Nt=r.convert(_.format,_.colorSpace),_t=r.convert(_.type),Yt=S(_.internalFormat,Nt,_t,_.colorSpace),Gt=_.isVideoTexture!==!0,oe=q.__version===void 0||X===!0,D=K.dataReady,ht=L(_,Lt);zt(s.TEXTURE_CUBE_MAP,_);let W;if(qt){Gt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Yt,Lt.width,Lt.height);for(let $=0;$<6;$++){W=xt[$].mipmaps;for(let ft=0;ft<W.length;ft++){let ut=W[ft];_.format!==Ge?Nt!==null?Gt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Yt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,0,0,ut.width,ut.height,Nt,_t,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft,Yt,ut.width,ut.height,0,Nt,_t,ut.data)}}}else{if(W=_.mipmaps,Gt&&oe){W.length>0&&ht++;let $=mt(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Yt,$.width,$.height)}for(let $=0;$<6;$++)if(tt){Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,xt[$].width,xt[$].height,Nt,_t,xt[$].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,xt[$].width,xt[$].height,0,Nt,_t,xt[$].data);for(let ft=0;ft<W.length;ft++){let kt=W[ft].image[$].image;Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,kt.width,kt.height,Nt,_t,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Yt,kt.width,kt.height,0,Nt,_t,kt.data)}}else{Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Nt,_t,xt[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,Nt,_t,xt[$]);for(let ft=0;ft<W.length;ft++){let ut=W[ft];Gt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,0,0,Nt,_t,ut.image[$]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,ft+1,Yt,Nt,_t,ut.image[$])}}}g(_)&&p(s.TEXTURE_CUBE_MAP),q.__version=K.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Mt(w,_,B,X,K,q){let bt=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),gt=S(B.internalFormat,bt,ct,B.colorSpace),qt=n.get(_),tt=n.get(B);if(tt.__renderTarget=_,!qt.__hasExternalTextures){let xt=Math.max(1,_.width>>q),Lt=Math.max(1,_.height>>q);K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?e.texImage3D(K,q,gt,xt,Lt,_.depth,0,bt,ct,null):e.texImage2D(K,q,gt,xt,Lt,0,bt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,w),vt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,K,tt.__webglTexture,0,Q(_)):(K===s.TEXTURE_2D||K>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,K,tt.__webglTexture,q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(w,_,B){if(s.bindRenderbuffer(s.RENDERBUFFER,w),_.depthBuffer){let X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,q=x(_.stencilBuffer,K),bt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Q(_);vt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,q,_.width,_.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,q,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,q,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,w)}else{let X=_.textures;for(let K=0;K<X.length;K++){let q=X[K],bt=r.convert(q.format,q.colorSpace),ct=r.convert(q.type),gt=S(q.internalFormat,bt,ct,q.colorSpace),qt=Q(_);B&&vt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,gt,_.width,_.height):vt(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,gt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,gt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);let K=X.__webglTexture,q=Q(_);if(_.depthTexture.format===Fi)vt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(_.depthTexture.format===Wi)vt(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ot(w){let _=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ct(_.__webglFramebuffer,w)}else if(B){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=s.createRenderbuffer(),rt(_.__webglDepthbuffer[X],w,!1);else{let K=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[X];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),rt(_.__webglDepthbuffer,w,!1);else{let X=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,K)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(w,_,B){let X=n.get(w);_!==void 0&&Mt(X.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Ot(w)}function Jt(w){let _=w.texture,B=n.get(w),X=n.get(_);w.addEventListener("dispose",P);let K=w.textures,q=w.isWebGLCubeRenderTarget===!0,bt=K.length>1;if(bt||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=_.version,a.memory.textures++),q){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let gt=0;gt<_.mipmaps.length;gt++)B.__webglFramebuffer[ct][gt]=s.createFramebuffer()}else B.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)B.__webglFramebuffer[ct]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ct=0,gt=K.length;ct<gt;ct++){let qt=n.get(K[ct]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&vt(w)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<K.length;ct++){let gt=K[ct];B.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);let qt=r.convert(gt.format,gt.colorSpace),tt=r.convert(gt.type),xt=S(gt.internalFormat,qt,tt,gt.colorSpace,w.isXRRenderTarget===!0),Lt=Q(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,xt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),zt(s.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)Mt(B.__webglFramebuffer[ct][gt],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else Mt(B.__webglFramebuffer[ct],w,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);g(_)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,gt=K.length;ct<gt;ct++){let qt=K[ct],tt=n.get(qt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),zt(s.TEXTURE_2D,qt),Mt(B.__webglFramebuffer,w,qt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),g(qt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,X.__webglTexture),zt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)Mt(B.__webglFramebuffer[gt],w,_,s.COLOR_ATTACHMENT0,ct,gt);else Mt(B.__webglFramebuffer,w,_,s.COLOR_ATTACHMENT0,ct,0);g(_)&&p(ct),e.unbindTexture()}w.depthBuffer&&Ot(w)}function J(w){let _=w.textures;for(let B=0,X=_.length;B<X;B++){let K=_[B];if(g(K)){let q=b(w),bt=n.get(K).__webglTexture;e.bindTexture(q,bt),p(q),e.unbindTexture()}}}let nt=[],A=[];function At(w){if(w.samples>0){if(vt(w)===!1){let _=w.textures,B=w.width,X=w.height,K=s.COLOR_BUFFER_BIT,q=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(w),ct=_.length>1;if(ct)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);let qt=n.get(_[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,B,X,0,0,B,X,K,s.NEAREST),l===!0&&(nt.length=0,A.length=0,nt.push(s.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(nt.push(q),A.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,A)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[gt]);let qt=n.get(_[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,qt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let _=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Q(w){return Math.min(i.maxSamples,w.samples)}function vt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ot(w){let _=a.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function It(w,_){let B=w.colorSpace,X=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==jn&&B!==un&&(Kt.getTransfer(B)===re?(X!==Ge||K!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),_}function mt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Ut,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=vt}function j0(s,t){function e(n,i=un){let r,a=Kt.getTransfer(i);if(n===Pn)return s.UNSIGNED_BYTE;if(n===Al)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===yh)return s.BYTE;if(n===Mh)return s.SHORT;if(n===Es)return s.UNSIGNED_SHORT;if(n===Tl)return s.INT;if(n===di)return s.UNSIGNED_INT;if(n===Ze)return s.FLOAT;if(n===Nn)return s.HALF_FLOAT;if(n===Sh)return s.ALPHA;if(n===Eh)return s.RGB;if(n===Ge)return s.RGBA;if(n===wh)return s.LUMINANCE;if(n===Th)return s.LUMINANCE_ALPHA;if(n===Fi)return s.DEPTH_COMPONENT;if(n===Wi)return s.DEPTH_STENCIL;if(n===Cl)return s.RED;if(n===Pl)return s.RED_INTEGER;if(n===Ah)return s.RG;if(n===Il)return s.RG_INTEGER;if(n===Ll)return s.RGBA_INTEGER;if(n===Sr||n===Er||n===wr||n===Tr)if(a===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===_o||n===yo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xo||n===_o)return a===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===yo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mo||n===bo||n===So||n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Io||n===Lo||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===So)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===To)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ao)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ro)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Co)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Po)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Io)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Do)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return a===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===No||n===Fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return a===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===No)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rh||n===Oo||n===Bo||n===zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var tl=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ne=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},tg={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let g=e.getJointPose(v,n),p=this._getHandJoint(c,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,el=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Fe,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xt({vertexShader:eg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nl=class extends Jn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,v=new el,g=e.getContextAttributes(),p=null,b=null,S=[],x=[],L=new et,R=null,P=new Ue;P.viewport=new fe;let I=new Ue;I.viewport=new fe;let E=[P,I],y=new tl,C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=S[Y];return it===void 0&&(it=new ys,S[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=S[Y];return it===void 0&&(it=new ys,S[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=S[Y];return it===void 0&&(it=new ys,S[Y]=it),it.getHandSpace()};function O(Y){let it=x.indexOf(Y.inputSource);if(it===-1)return;let Mt=S[it];Mt!==void 0&&(Mt.update(Y.inputSource,Y.frame,c||a),Mt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<S.length;Y++){let it=x[Y];it!==null&&(x[Y]=null,S[Y].disconnect(it))}C=null,F=null,v.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,b=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(L),i.renderState.layers===void 0){let it={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new ze(d.framebufferWidth,d.framebufferHeight,{format:Ge,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let it=null,Mt=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=g.stencil?Wi:Fi,Mt=g.stencil?Gi:di);let Ct={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Ct),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new ze(f.textureWidth,f.textureHeight,{format:Ge,type:Pn,depthTexture:new Fr(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(Y){for(let it=0;it<Y.removed.length;it++){let Mt=Y.removed[it],rt=x.indexOf(Mt);rt>=0&&(x[rt]=null,S[rt].disconnect(Mt))}for(let it=0;it<Y.added.length;it++){let Mt=Y.added[it],rt=x.indexOf(Mt);if(rt===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=x.length){x.push(Mt),rt=Ot;break}else if(x[Ot]===null){x[Ot]=Mt,rt=Ot;break}if(rt===-1)break}let Ct=S[rt];Ct&&Ct.connect(Mt)}}let V=new T,j=new T;function G(Y,it,Mt){V.setFromMatrixPosition(it.matrixWorld),j.setFromMatrixPosition(Mt.matrixWorld);let rt=V.distanceTo(j),Ct=it.projectionMatrix.elements,Ot=Mt.projectionMatrix.elements,Ut=Ct[14]/(Ct[10]-1),Jt=Ct[14]/(Ct[10]+1),J=(Ct[9]+1)/Ct[5],nt=(Ct[9]-1)/Ct[5],A=(Ct[8]-1)/Ct[0],At=(Ot[8]+1)/Ot[0],Q=Ut*A,vt=Ut*At,ot=rt/(-A+At),It=ot*-A;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(It),Y.translateZ(ot),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ct[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let mt=Ut+ot,w=Jt+ot,_=Q-It,B=vt+(rt-It),X=J*Jt/w*mt,K=nt*Jt/w*mt;Y.projectionMatrix.makePerspective(_,B,X,K,mt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function at(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let it=Y.near,Mt=Y.far;v.texture!==null&&(v.depthNear>0&&(it=v.depthNear),v.depthFar>0&&(Mt=v.depthFar)),y.near=I.near=P.near=it,y.far=I.far=P.far=Mt,(C!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,F=y.far),P.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,y.layers.mask=P.layers.mask|I.layers.mask;let rt=Y.parent,Ct=y.cameras;at(y,rt);for(let Ot=0;Ot<Ct.length;Ot++)at(Ct[Ot],rt);Ct.length===2?G(y,P,I):y.projectionMatrix.copy(P.projectionMatrix),pt(Y,y,rt)};function pt(Y,it,Mt){Mt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(Mt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ws*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let yt=null;function zt(Y,it){if(h=it.getViewerPose(c||a),m=it,h!==null){let Mt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let rt=!1;Mt.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Ot=0;Ot<Mt.length;Ot++){let Ut=Mt[Ot],Jt=null;if(d!==null)Jt=d.getViewport(Ut);else{let nt=u.getViewSubImage(f,Ut);Jt=nt.viewport,Ot===0&&(t.setRenderTargetTextures(b,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(b))}let J=E[Ot];J===void 0&&(J=new Ue,J.layers.enable(Ot),J.viewport=new fe,E[Ot]=J),J.matrix.fromArray(Ut.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ut.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ot===0&&(y.matrix.copy(J.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(J)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){let Ot=u.getDepthInformation(Mt[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,i.renderState)}}for(let Mt=0;Mt<S.length;Mt++){let rt=x[Mt],Ct=S[Mt];rt!==null&&Ct!==void 0&&Ct.update(rt,it,c||a)}yt&&yt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),m=null}let te=new Uh;te.setAnimationLoop(zt),this.setAnimationLoop=function(Y){yt=Y},this.dispose=function(){}}},ai=new $e,ig=new ie;function sg(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Dh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,b,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,b,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Ie&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Ie&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),S=b.envMap,x=b.envMapRotation;S&&(g.envMap.value=S,ai.copy(x),ai.x*=-1,ai.y*=-1,ai.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),g.envMapRotation.value.setFromMatrix4(ig.makeRotationFromEuler(ai)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ie&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rg(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let x=S.program;n.uniformBlockBinding(b,x)}function c(b,S){let x=i[b.id];x===void 0&&(m(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",g));let L=S.program;n.updateUBOMapping(b,L);let R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){let S=u();b.__bindingPointIndex=S;let x=s.createBuffer(),L=b.__size,R=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,L,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let S=i[b.id],x=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,P=x.length;R<P;R++){let I=Array.isArray(x[R])?x[R]:[x[R]];for(let E=0,y=I.length;E<y;E++){let C=I[E];if(d(C,R,E,L)===!0){let F=C.__offset,O=Array.isArray(C.value)?C.value:[C.value],z=0;for(let Z=0;Z<O.length;Z++){let V=O[Z],j=v(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,F+z,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,z),z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(b,S,x,L){let R=b.value,P=S+"_"+x;if(L[P]===void 0)return typeof R=="number"||typeof R=="boolean"?L[P]=R:L[P]=R.clone(),!0;{let I=L[P];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return L[P]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function m(b){let S=b.uniforms,x=0,L=16;for(let P=0,I=S.length;P<I;P++){let E=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,C=E.length;y<C;y++){let F=E[y],O=Array.isArray(F.value)?F.value:[F.value];for(let z=0,Z=O.length;z<Z;z++){let V=O[z],j=v(V),G=x%L,at=G%j.boundary,pt=G+at;x+=at,pt!==0&&L-pt<j.storage&&(x+=L-pt),F.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=j.storage}}}let R=x%L;return R>0&&(x+=L-R),b.__size=x,b.__cache={},this}function v(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function g(b){let S=b.target;S.removeEventListener("dispose",g);let x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(let b in i)s.deleteBuffer(i[b]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Or=class{constructor(t={}){let{canvas:e=ld(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let m=new Uint32Array(4),v=new Int32Array(4),g=null,p=null,b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this.toneMapping=fn,this.toneMappingExposure=1;let x=this,L=!1,R=0,P=0,I=null,E=-1,y=null,C=new fe,F=new fe,O=null,z=new Pt(0),Z=0,V=e.width,j=e.height,G=1,at=null,pt=null,yt=new fe(0,0,V,j),zt=new fe(0,0,V,j),te=!1,Y=new Rs,it=!1,Mt=!1,rt=new ie,Ct=new ie,Ot=new T,Ut=new fe,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function nt(){return I===null?G:1}let A=n;function At(M,U){return e.getContext(M,U)}try{let M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),A===null){let U="webgl2";if(A=At(U,M),A===null)throw At(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,vt,ot,It,mt,w,_,B,X,K,q,bt,ct,gt,qt,tt,xt,Lt,Nt,_t,Yt,Gt,oe,D;function ht(){Q=new Mm(A),Q.init(),Gt=new j0(A,Q),vt=new mm(A,Q,t,Gt),ot=new J0(A,Q),vt.reverseDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),It=new Em(A),mt=new O0,w=new Q0(A,Q,ot,mt,vt,Gt,It),_=new vm(x),B=new ym(x),X=new Pd(A),oe=new fm(A,X),K=new bm(A,X,It,oe),q=new Tm(A,K,X,It),Nt=new wm(A,vt,w),tt=new gm(mt),bt=new F0(x,_,B,Q,vt,oe,tt),ct=new sg(x,mt),gt=new z0,qt=new X0(Q),Lt=new dm(x,_,B,ot,q,d,l),xt=new Z0(x,q,vt),D=new rg(A,It,vt,ot),_t=new pm(A,Q,It),Yt=new Sm(A,Q,It),It.programs=bt.programs,x.capabilities=vt,x.extensions=Q,x.properties=mt,x.renderLists=gt,x.shadowMap=xt,x.state=ot,x.info=It}ht();let W=new nl(x,A);this.xr=W,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(M){M!==void 0&&(G=M,this.setSize(V,j,!1))},this.getSize=function(M){return M.set(V,j)},this.setSize=function(M,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=M,j=U,e.width=Math.floor(M*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(V*G,j*G).floor()},this.setDrawingBufferSize=function(M,U,k){V=M,j=U,G=k,e.width=Math.floor(M*k),e.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,U,k,H){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,k,H),ot.viewport(C.copy(yt).multiplyScalar(G).round())},this.getScissor=function(M){return M.copy(zt)},this.setScissor=function(M,U,k,H){M.isVector4?zt.set(M.x,M.y,M.z,M.w):zt.set(M,U,k,H),ot.scissor(F.copy(zt).multiplyScalar(G).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){ot.setScissorTest(te=M)},this.setOpaqueSort=function(M){at=M},this.setTransparentSort=function(M){pt=M},this.getClearColor=function(M){return M.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(M=!0,U=!0,k=!0){let H=0;if(M){let N=!1;if(I!==null){let st=I.texture.format;N=st===Ll||st===Il||st===Pl}if(N){let st=I.texture.type,dt=st===Pn||st===di||st===Es||st===Gi||st===Al||st===Rl,St=Lt.getClearColor(),Et=Lt.getClearAlpha(),Bt=St.r,Ht=St.g,wt=St.b;dt?(m[0]=Bt,m[1]=Ht,m[2]=wt,m[3]=Et,A.clearBufferuiv(A.COLOR,0,m)):(v[0]=Bt,v[1]=Ht,v[2]=wt,v[3]=Et,A.clearBufferiv(A.COLOR,0,v))}else H|=A.COLOR_BUFFER_BIT}U&&(H|=A.DEPTH_BUFFER_BIT),k&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),qt.dispose(),mt.dispose(),_.dispose(),B.dispose(),q.dispose(),oe.dispose(),D.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Yl),W.removeEventListener("sessionend",Zl),ti.stop()};function $(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let M=It.autoReset,U=xt.enabled,k=xt.autoUpdate,H=xt.needsUpdate,N=xt.type;ht(),It.autoReset=M,xt.enabled=U,xt.autoUpdate=k,xt.needsUpdate=H,xt.type=N}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function kt(M){let U=M.target;U.removeEventListener("dispose",kt),me(U)}function me(M){Ae(M),mt.remove(M)}function Ae(M){let U=mt.get(M).programs;U!==void 0&&(U.forEach(function(k){bt.releaseProgram(k)}),M.isShaderMaterial&&bt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,H,N,st){U===null&&(U=Jt);let dt=N.isMesh&&N.matrixWorld.determinant()<0,St=nu(M,U,k,H,N);ot.setMaterial(H,dt);let Et=k.index,Bt=1;if(H.wireframe===!0){if(Et=K.getWireframeAttribute(k),Et===void 0)return;Bt=2}let Ht=k.drawRange,wt=k.attributes.position,jt=Ht.start*Bt,le=(Ht.start+Ht.count)*Bt;st!==null&&(jt=Math.max(jt,st.start*Bt),le=Math.min(le,(st.start+st.count)*Bt)),Et!==null?(jt=Math.max(jt,0),le=Math.min(le,Et.count)):wt!=null&&(jt=Math.max(jt,0),le=Math.min(le,wt.count));let he=le-jt;if(he<0||he===1/0)return;oe.setup(N,H,St,k,Et);let Be,ee=_t;if(Et!==null&&(Be=X.get(Et),ee=Yt,ee.setIndex(Be)),N.isMesh)H.wireframe===!0?(ot.setLineWidth(H.wireframeLinewidth*nt()),ee.setMode(A.LINES)):ee.setMode(A.TRIANGLES);else if(N.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),ot.setLineWidth(Rt*nt()),N.isLineSegments?ee.setMode(A.LINES):N.isLineLoop?ee.setMode(A.LINE_LOOP):ee.setMode(A.LINE_STRIP)}else N.isPoints?ee.setMode(A.POINTS):N.isSprite&&ee.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Rt=N._multiDrawStarts,_n=N._multiDrawCounts,ne=N._multiDrawCount,nn=Et?X.get(Et).bytesPerElement:1,vi=mt.get(H).currentProgram.getUniforms();for(let ke=0;ke<ne;ke++)vi.setValue(A,"_gl_DrawID",ke),ee.render(Rt[ke]/nn,_n[ke])}else if(N.isInstancedMesh)ee.renderInstances(jt,he,N.count);else if(k.isInstancedBufferGeometry){let Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,_n=Math.min(k.instanceCount,Rt);ee.renderInstances(jt,he,_n)}else ee.render(jt,he)};function se(M,U,k){M.transparent===!0&&M.side===we&&M.forceSinglePass===!1?(M.side=Ie,M.needsUpdate=!0,qs(M,U,k),M.side=$n,M.needsUpdate=!0,qs(M,U,k),M.side=we):qs(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),p=qt.get(k),p.init(U),S.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let H=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let st=N.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){let St=st[dt];se(St,k,N),H.add(St)}else se(st,k,N),H.add(st)}),S.pop(),p=null,H},this.compileAsync=function(M,U,k=null){let H=this.compile(M,U,k);return new Promise(N=>{function st(){if(H.forEach(function(dt){mt.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){N(M);return}setTimeout(st,10)}Q.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let en=null;function xn(M){en&&en(M)}function Yl(){ti.stop()}function Zl(){ti.start()}let ti=new Uh;ti.setAnimationLoop(xn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(M){en=M,W.setAnimationLoop(M),M===null?ti.stop():ti.start()},W.addEventListener("sessionstart",Yl),W.addEventListener("sessionend",Zl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,I),p=qt.get(M,S.length),p.init(U),S.push(p),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Ct),Mt=this.localClippingEnabled,it=tt.init(this.clippingPlanes,Mt),g=gt.get(M,b.length),g.init(),b.push(g),W.enabled===!0&&W.isPresenting===!0){let st=x.xr.getDepthSensingMesh();st!==null&&ba(st,U,-1/0,x.sortObjects)}ba(M,U,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(at,pt),J=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,J&&Lt.addToRenderList(g,M),this.info.render.frame++,it===!0&&tt.beginShadows();let k=p.state.shadowsArray;xt.render(k,M,U),it===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let st=U.cameras;if(N.length>0)for(let dt=0,St=st.length;dt<St;dt++){let Et=st[dt];Jl(H,N,M,Et)}J&&Lt.render(M);for(let dt=0,St=st.length;dt<St;dt++){let Et=st[dt];$l(g,M,Et,Et.viewport)}}else N.length>0&&Jl(H,N,M,U),J&&Lt.render(M),$l(g,M,U);I!==null&&(w.updateMultisampleRenderTarget(I),w.updateRenderTargetMipmap(I)),M.isScene===!0&&M.onAfterRender(x,M,U),oe.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],it===!0&&tt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ba(M,U,k,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){H&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);let dt=q.update(M),St=M.material;St.visible&&g.push(M,dt,St,k,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){let dt=q.update(M),St=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Ut.copy(dt.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(St)){let Et=dt.groups;for(let Bt=0,Ht=Et.length;Bt<Ht;Bt++){let wt=Et[Bt],jt=St[wt.materialIndex];jt&&jt.visible&&g.push(M,dt,jt,k,Ut.z,wt)}}else St.visible&&g.push(M,dt,St,k,Ut.z,null)}}let st=M.children;for(let dt=0,St=st.length;dt<St;dt++)ba(st[dt],U,k,H)}function $l(M,U,k,H){let N=M.opaque,st=M.transmissive,dt=M.transparent;p.setupLightsView(k),it===!0&&tt.setGlobalState(x.clippingPlanes,k),H&&ot.viewport(C.copy(H)),N.length>0&&Xs(N,U,k),st.length>0&&Xs(st,U,k),dt.length>0&&Xs(dt,U,k),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Jl(M,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ze(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Nn:Pn,minFilter:An,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));let st=p.state.transmissionRenderTarget[H.id],dt=H.viewport||C;st.setSize(dt.z,dt.w);let St=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(z),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),J&&Lt.render(k);let Et=x.toneMapping;x.toneMapping=fn;let Bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),it===!0&&tt.setGlobalState(x.clippingPlanes,H),Xs(M,k,H),w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let wt=0,jt=U.length;wt<jt;wt++){let le=U[wt],he=le.object,Be=le.geometry,ee=le.material,Rt=le.group;if(ee.side===we&&he.layers.test(H.layers)){let _n=ee.side;ee.side=Ie,ee.needsUpdate=!0,Kl(he,k,H,Be,ee,Rt),ee.side=_n,ee.needsUpdate=!0,Ht=!0}}Ht===!0&&(w.updateMultisampleRenderTarget(st),w.updateRenderTargetMipmap(st))}x.setRenderTarget(St),x.setClearColor(z,Z),Bt!==void 0&&(H.viewport=Bt),x.toneMapping=Et}function Xs(M,U,k){let H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=M.length;N<st;N++){let dt=M[N],St=dt.object,Et=dt.geometry,Bt=H===null?dt.material:H,Ht=dt.group;St.layers.test(k.layers)&&Kl(St,U,k,Et,Bt,Ht)}}function Kl(M,U,k,H,N,st){M.onBeforeRender(x,U,k,H,N,st),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,U,k,H,M,st),N.transparent===!0&&N.side===we&&N.forceSinglePass===!1?(N.side=Ie,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,M,st),N.side=$n,N.needsUpdate=!0,x.renderBufferDirect(k,U,H,N,M,st),N.side=we):x.renderBufferDirect(k,U,H,N,M,st),M.onAfterRender(x,U,k,H,N,st)}function qs(M,U,k){U.isScene!==!0&&(U=Jt);let H=mt.get(M),N=p.state.lights,st=p.state.shadowsArray,dt=N.state.version,St=bt.getParameters(M,N.state,st,U,k),Et=bt.getProgramCacheKey(St),Bt=H.programs;H.environment=M.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(M.isMeshStandardMaterial?B:_).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Bt===void 0&&(M.addEventListener("dispose",kt),Bt=new Map,H.programs=Bt);let Ht=Bt.get(Et);if(Ht!==void 0){if(H.currentProgram===Ht&&H.lightsStateVersion===dt)return jl(M,St),Ht}else St.uniforms=bt.getUniforms(M),M.onBeforeCompile(St,x),Ht=bt.acquireProgram(St,Et),Bt.set(Et,Ht),H.uniforms=St.uniforms;let wt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=tt.uniform),jl(M,St),H.needsLights=su(M),H.lightsStateVersion=dt,H.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ht,H.uniformsList=null,Ht}function Ql(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Bi.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function jl(M,U){let k=mt.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function nu(M,U,k,H,N){U.isScene!==!0&&(U=Jt),w.resetTextureUnits();let st=U.fog,dt=H.isMeshStandardMaterial?U.environment:null,St=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:jn,Et=(H.isMeshStandardMaterial?B:_).get(H.envMap||dt),Bt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ht=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),wt=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,le=!!k.morphAttributes.color,he=fn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(he=x.toneMapping);let Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=Be!==void 0?Be.length:0,Rt=mt.get(H),_n=p.state.lights;if(it===!0&&(Mt===!0||M!==y)){let qe=M===y&&H.id===E;tt.setState(H,M,qe)}let ne=!1;H.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==_n.state.version||Rt.outputColorSpace!==St||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==Et||H.fog===!0&&Rt.fog!==st||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==tt.numPlanes||Rt.numIntersection!==tt.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==Ht||Rt.morphTargets!==wt||Rt.morphNormals!==jt||Rt.morphColors!==le||Rt.toneMapping!==he||Rt.morphTargetsCount!==ee)&&(ne=!0):(ne=!0,Rt.__version=H.version);let nn=Rt.currentProgram;ne===!0&&(nn=qs(H,U,N));let vi=!1,ke=!1,os=!1,ue=nn.getUniforms(),cn=Rt.uniforms;if(ot.useProgram(nn.program)&&(vi=!0,ke=!0,os=!0),H.id!==E&&(E=H.id,ke=!0),vi||y!==M){ot.buffers.depth.getReversed()?(rt.copy(M.projectionMatrix),hd(rt),ud(rt),ue.setValue(A,"projectionMatrix",rt)):ue.setValue(A,"projectionMatrix",M.projectionMatrix),ue.setValue(A,"viewMatrix",M.matrixWorldInverse);let Bn=ue.map.cameraPosition;Bn!==void 0&&Bn.setValue(A,Ot.setFromMatrixPosition(M.matrixWorld)),vt.logarithmicDepthBuffer&&ue.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ue.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,ke=!0,os=!0)}if(N.isSkinnedMesh){ue.setOptional(A,N,"bindMatrix"),ue.setOptional(A,N,"bindMatrixInverse");let qe=N.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ue.setValue(A,"boneTexture",qe.boneTexture,w))}N.isBatchedMesh&&(ue.setOptional(A,N,"batchingTexture"),ue.setValue(A,"batchingTexture",N._matricesTexture,w),ue.setOptional(A,N,"batchingIdTexture"),ue.setValue(A,"batchingIdTexture",N._indirectTexture,w),ue.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(A,"batchingColorTexture",N._colorsTexture,w));let ls=k.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&Nt.update(N,k,nn),(ke||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,ue.setValue(A,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(cn.envMap.value=Et,cn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(cn.envMapIntensity.value=U.environmentIntensity),ke&&(ue.setValue(A,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&iu(cn,os),st&&H.fog===!0&&ct.refreshFogUniforms(cn,st),ct.refreshMaterialUniforms(cn,H,G,j,p.state.transmissionRenderTarget[M.id]),Bi.upload(A,Ql(Rt),cn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bi.upload(A,Ql(Rt),cn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ue.setValue(A,"center",N.center),ue.setValue(A,"modelViewMatrix",N.modelViewMatrix),ue.setValue(A,"normalMatrix",N.normalMatrix),ue.setValue(A,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let qe=H.uniformsGroups;for(let Bn=0,zn=qe.length;Bn<zn;Bn++){let tc=qe[Bn];D.update(tc,nn),D.bind(tc,nn)}}return nn}function iu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function su(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(M,U,k){mt.get(M.texture).__webglTexture=U,mt.get(M.depthTexture).__webglTexture=k;let H=mt.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){let k=mt.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,k=0){I=M,R=U,P=k;let H=!0,N=null,st=!1,dt=!1;if(M){let Et=mt.get(M);if(Et.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(Et.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(Et.__hasExternalTextures)w.rebindTextures(M,mt.get(M.texture).__webglTexture,mt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let wt=M.depthTexture;if(Et.__boundDepthTexture!==wt){if(wt!==null&&mt.has(wt)&&(M.width!==wt.image.width||M.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let Bt=M.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(dt=!0);let Ht=mt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?N=Ht[U][k]:N=Ht[U],st=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?N=mt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[k]:N=Ht,C.copy(M.viewport),F.copy(M.scissor),O=M.scissorTest}else C.copy(yt).multiplyScalar(G).floor(),F.copy(zt).multiplyScalar(G).floor(),O=te;if(ot.bindFramebuffer(A.FRAMEBUFFER,N)&&H&&ot.drawBuffers(M,N),ot.viewport(C),ot.scissor(F),ot.setScissorTest(O),st){let Et=mt.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,k)}else if(dt){let Et=mt.get(M.texture),Bt=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Et.__webglTexture,k||0,Bt)}E=-1},this.readRenderTargetPixels=function(M,U,k,H,N,st,dt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){ot.bindFramebuffer(A.FRAMEBUFFER,St);try{let Et=M.texture,Bt=Et.format,Ht=Et.type;if(!vt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&k>=0&&k<=M.height-N&&A.readPixels(U,k,H,N,Gt.convert(Bt),Gt.convert(Ht),st)}finally{let Et=I!==null?mt.get(I).__webglFramebuffer:null;ot.bindFramebuffer(A.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,H,N,st,dt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=mt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(St=St[dt]),St){let Et=M.texture,Bt=Et.format,Ht=Et.type;if(!vt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-H&&k>=0&&k<=M.height-N){ot.bindFramebuffer(A.FRAMEBUFFER,St);let wt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,wt),A.bufferData(A.PIXEL_PACK_BUFFER,st.byteLength,A.STREAM_READ),A.readPixels(U,k,H,N,Gt.convert(Bt),Gt.convert(Ht),0);let jt=I!==null?mt.get(I).__webglFramebuffer:null;ot.bindFramebuffer(A.FRAMEBUFFER,jt);let le=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await cd(A,le,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,wt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,st),A.deleteBuffer(wt),A.deleteSync(le),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,k=0){M.isTexture!==!0&&(gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);let H=Math.pow(2,-k),N=Math.floor(M.image.width*H),st=Math.floor(M.image.height*H),dt=U!==null?U.x:0,St=U!==null?U.y:0;w.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,dt,St,N,st),ot.unbindTexture()},this.copyTextureToTexture=function(M,U,k=null,H=null,N=0){M.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let st,dt,St,Et,Bt,Ht,wt,jt,le,he=M.isCompressedTexture?M.mipmaps[N]:M.image;k!==null?(st=k.max.x-k.min.x,dt=k.max.y-k.min.y,St=k.isBox3?k.max.z-k.min.z:1,Et=k.min.x,Bt=k.min.y,Ht=k.isBox3?k.min.z:0):(st=he.width,dt=he.height,St=he.depth||1,Et=0,Bt=0,Ht=0),H!==null?(wt=H.x,jt=H.y,le=H.z):(wt=0,jt=0,le=0);let Be=Gt.convert(U.format),ee=Gt.convert(U.type),Rt;U.isData3DTexture?(w.setTexture3D(U,0),Rt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Rt=A.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Rt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);let _n=A.getParameter(A.UNPACK_ROW_LENGTH),ne=A.getParameter(A.UNPACK_IMAGE_HEIGHT),nn=A.getParameter(A.UNPACK_SKIP_PIXELS),vi=A.getParameter(A.UNPACK_SKIP_ROWS),ke=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,he.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,he.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Et),A.pixelStorei(A.UNPACK_SKIP_ROWS,Bt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ht);let os=M.isDataArrayTexture||M.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let cn=mt.get(M),ls=mt.get(U),qe=mt.get(cn.__renderTarget),Bn=mt.get(ls.__renderTarget);ot.bindFramebuffer(A.READ_FRAMEBUFFER,qe.__webglFramebuffer),ot.bindFramebuffer(A.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let zn=0;zn<St;zn++)os&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(M).__webglTexture,N,Ht+zn),M.isDepthTexture?(ue&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,mt.get(U).__webglTexture,N,le+zn),A.blitFramebuffer(Et,Bt,st,dt,wt,jt,st,dt,A.DEPTH_BUFFER_BIT,A.NEAREST)):ue?A.copyTexSubImage3D(Rt,N,wt,jt,le+zn,Et,Bt,st,dt):A.copyTexSubImage2D(Rt,N,wt,jt,le+zn,Et,Bt,st,dt);ot.bindFramebuffer(A.READ_FRAMEBUFFER,null),ot.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ue?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Rt,N,wt,jt,le,st,dt,St,Be,ee,he.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Rt,N,wt,jt,le,st,dt,St,Be,he.data):A.texSubImage3D(Rt,N,wt,jt,le,st,dt,St,Be,ee,he):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,N,wt,jt,st,dt,Be,ee,he.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,N,wt,jt,he.width,he.height,Be,he.data):A.texSubImage2D(A.TEXTURE_2D,N,wt,jt,st,dt,Be,ee,he);A.pixelStorei(A.UNPACK_ROW_LENGTH,_n),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ne),A.pixelStorei(A.UNPACK_SKIP_PIXELS,nn),A.pixelStorei(A.UNPACK_SKIP_ROWS,vi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ke),N===0&&U.generateMipmaps&&A.generateMipmap(Rt),ot.unbindTexture()},this.copyTextureToTexture3D=function(M,U,k=null,H=null,N=0){return M.isTexture!==!0&&(gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0),gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,k,H,N)},this.initRenderTarget=function(M){mt.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),ot.unbindTexture()},this.resetState=function(){R=0,P=0,I=null,ot.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var $i=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Cs=class extends Fe{constructor(t=null,e=1,n=1,i,r,a,o,l,c=We,h=We,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class extends ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Li=new ie,eh=new ie,pr=[],nh=new In,ag=new ie,fs=new Dt,ps=new Ln,Ps=class extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ji(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ag)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),nh.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(nh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),ps.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(fs.geometry=this.geometry,fs.material=this.material,fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Li),eh.multiplyMatrices(n,Li),fs.matrixWorld=eh,fs.raycast(t,pr);for(let a=0,o=pr.length;a<o;a++){let l=pr[a];l.instanceId=r,l.object=this,e.push(l)}pr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ji(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cs(new Float32Array(i*this.count),i,this.count,Cl,Ze));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ke=class extends Dn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Br=new T,zr=new T,ih=new ie,ms=new Xi,mr=new Ln,Ka=new T,sh=new T,mn=class extends Te{constructor(t=new Zt,e=new Ke){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Br.fromBufferAttribute(e,i-1),zr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Br.distanceTo(zr);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;ih.copy(i).invert(),ms.copy(t.ray).applyMatrix4(ih);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){let p=h.getX(v),b=h.getX(v+1),S=gr(this,t,ms,l,p,b);S&&e.push(S)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(d),p=gr(this,t,ms,l,v,g);p&&e.push(p)}}else{let d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,g=m-1;v<g;v+=c){let p=gr(this,t,ms,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){let v=gr(this,t,ms,l,m-1,d);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gr(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(Br.fromBufferAttribute(a,i),zr.fromBufferAttribute(a,r),e.distanceSqToSegment(Br,zr,Ka,sh)>n)return;Ka.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ka);if(!(l<t.near||l>t.far))return{distance:l,point:sh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var rh=new T,ah=new T,Un=class extends mn{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)rh.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+rh.distanceTo(ah);t.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var il=class extends Dn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},oh=new ie,sl=new Xi,vr=new Ln,xr=new T,Kn=class extends Te{constructor(t=new Zt,e=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(i),vr.radius+=r,t.ray.intersectsSphere(vr)===!1)return;oh.copy(i).invert(),sl.copy(t.ray).applyMatrix4(oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=f,v=d;m<v;m++){let g=c.getX(m);xr.fromBufferAttribute(u,g),lh(xr,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let m=f,v=d;m<v;m++)xr.fromBufferAttribute(u,m),lh(xr,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lh(s,t,e,n,i,r,a){let o=sl.distanceSqToPoint(s);if(o<e){let l=new T;sl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var kr=class extends Fe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=e||(a.isVector2?new et:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,i=[],r=[],a=[],o=new T,l=new ie;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ee(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,m))}a[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(Ee(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Is=class extends Qe{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new et){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},rl=class extends Is{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nl(){let s=0,t=0,e=0,n=0;function i(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var _r=new T,Qa=new Nl,ja=new Nl,to=new Nl,Ls=class extends Qe{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(_r.subVectors(i[0],i[1]).add(i[0]),c=_r);let u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(_r.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_r),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Qa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,v,g),ja.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,v,g),to.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ja.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),to.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Qa.calc(l),ja.calc(l),to.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ch(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,l=s*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*s+e}function og(s,t){let e=1-s;return e*e*t}function lg(s,t){return 2*(1-s)*s*t}function cg(s,t){return s*s*t}function Ms(s,t,e,n){return og(s,t)+lg(s,e)+cg(s,n)}function hg(s,t){let e=1-s;return e*e*e*t}function ug(s,t){let e=1-s;return 3*e*e*s*t}function dg(s,t){return 3*(1-s)*s*s*t}function fg(s,t){return s*s*s*t}function bs(s,t,e,n,i){return hg(s,t)+ug(s,e)+dg(s,n)+fg(s,i)}var Hr=class extends Qe{constructor(t=new et,e=new et,n=new et,i=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bs(t,i.x,r.x,a.x,o.x),bs(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},al=class extends Qe{constructor(t=new T,e=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(bs(t,i.x,r.x,a.x,o.x),bs(t,i.y,r.y,a.y,o.y),bs(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Vr=class extends Qe{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Qe{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends Qe{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ms(t,i.x,r.x,a.x),Ms(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends Qe{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Ms(t,i.x,r.x,a.x),Ms(t,i.y,r.y,a.y),Ms(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ch(o,l.x,c.x,h.x,u.x),ch(o,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new et().fromArray(i))}return this}},cl=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:Ls,CubicBezierCurve:Hr,CubicBezierCurve3:al,EllipseCurve:Is,LineCurve:Vr,LineCurve3:ol,QuadraticBezierCurve:Gr,QuadraticBezierCurve3:ll,SplineCurve:Wr}),hl=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new cl[i.type]().fromJSON(i))}return this}},Ki=class extends hl{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Vr(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Gr(this.currentPoint.clone(),new et(t,e),new et(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new Hr(this.currentPoint.clone(),new et(t,e),new et(n,i),new et(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,a,o,l),this}absellipse(t,e,n,i,r,a,o,l){let c=new Is(t,e,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var Qi=class s extends Zt{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new T,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(o,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xr=class s extends Zt{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],d=[],m=0,v=[],g=n/2,p=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(d,2));function b(){let x=new T,L=new T,R=0,P=(e-t)/n;for(let I=0;I<=r;I++){let E=[],y=I/r,C=y*(e-t)+t;for(let F=0;F<=i;F++){let O=F/i,z=O*l+o,Z=Math.sin(z),V=Math.cos(z);L.x=C*Z,L.y=-y*n+g,L.z=C*V,u.push(L.x,L.y,L.z),x.set(Z,P,V).normalize(),f.push(x.x,x.y,x.z),d.push(O,1-y),E.push(m++)}v.push(E)}for(let I=0;I<i;I++)for(let E=0;E<r;E++){let y=v[E][I],C=v[E+1][I],F=v[E+1][I+1],O=v[E][I+1];(t>0||E!==0)&&(h.push(y,C,O),R+=3),(e>0||E!==r-1)&&(h.push(C,F,O),R+=3)}c.addGroup(p,R,0),p+=R}function S(x){let L=m,R=new et,P=new T,I=0,E=x===!0?t:e,y=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,g*y,0),f.push(0,y,0),d.push(.5,.5),m++;let C=m;for(let F=0;F<=i;F++){let z=F/i*l+o,Z=Math.cos(z),V=Math.sin(z);P.x=E*V,P.y=g*y,P.z=E*Z,u.push(P.x,P.y,P.z),f.push(0,y,0),R.x=Z*.5+.5,R.y=V*.5*y+.5,d.push(R.x,R.y),m++}for(let F=0;F<i;F++){let O=L+F,z=C+F;x===!0?h.push(z,z+1,O):h.push(z+1,z,O),I+=3}c.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ji=class extends Ki{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Ki().fromJSON(i))}return this}},pg={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=zh(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=_g(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let m=e;m<i;m+=e)u=s[m],f=s[m+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Ds(r,a,e,o,l,d,0),a}};function zh(s,t,e,n,i){let r,a;if(i===Pg(s,t,e,n)>0)for(r=t;r<e;r+=n)a=hh(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=hh(r,s[r],s[r+1],a);return a&&sa(a,a.next)&&(Ns(a),a=a.next),a}function fi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(sa(e,e.next)||pe(e.prev,e,e.next)===0)){if(Ns(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ds(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Eg(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?gg(s,n,i,r):mg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ns(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=vg(fi(s),t,e),Ds(s,t,e,n,i,r,2)):a===2&&xg(s,t,e,n,i,r):Ds(fi(s),t,e,n,i,r,1);break}}}function mg(s){let t=s.prev,e=s,n=s.next;if(pe(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Ni(i,o,r,l,a,c,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gg(s,t,e,n){let i=s.prev,r=s,a=s.next;if(pe(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,m=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=ul(d,m,t,e,n),b=ul(v,g,t,e,n),S=s.prevZ,x=s.nextZ;for(;S&&S.z>=p&&x&&x.z<=b;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=g&&S!==i&&S!==a&&Ni(o,h,l,u,c,f,S.x,S.y)&&pe(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Ni(o,h,l,u,c,f,x.x,x.y)&&pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=g&&S!==i&&S!==a&&Ni(o,h,l,u,c,f,S.x,S.y)&&pe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=b;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=g&&x!==i&&x!==a&&Ni(o,h,l,u,c,f,x.x,x.y)&&pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function vg(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!sa(i,r)&&kh(i,n,n.next,r)&&Us(i,r)&&Us(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ns(n),Ns(n.next),n=s=r),n=n.next}while(n!==s);return fi(n)}function xg(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ag(a,o)){let l=Hh(a,o);a=fi(a,a.next),l=fi(l,l.next),Ds(a,t,e,n,i,r,0),Ds(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function _g(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=zh(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Tg(c));for(i.sort(yg),r=0;r<i.length;r++)e=Mg(i[r],e);return e}function yg(s,t){return s.x-t.x}function Mg(s,t){let e=bg(s,t);if(!e)return t;let n=Hh(e,s);return fi(n,n.next),fi(e,e.next)}function bg(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Ni(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Us(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Sg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function Sg(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function Eg(s,t,e,n){let i=s;do i.z===0&&(i.z=ul(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,wg(i)}function wg(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function ul(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Tg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Ni(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Ag(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Rg(s,t)&&(Us(s,t)&&Us(t,s)&&Cg(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||sa(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function sa(s,t){return s.x===t.x&&s.y===t.y}function kh(s,t,e,n){let i=Mr(pe(s,t,e)),r=Mr(pe(s,t,n)),a=Mr(pe(e,n,s)),o=Mr(pe(e,n,t));return!!(i!==r&&a!==o||i===0&&yr(s,e,t)||r===0&&yr(s,n,t)||a===0&&yr(e,s,n)||o===0&&yr(e,t,n))}function yr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Mr(s){return s>0?1:s<0?-1:0}function Rg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&kh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Us(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function Cg(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Hh(s,t){let e=new dl(s.i,s.x,s.y),n=new dl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function hh(s,t,e,n){let i=new dl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ns(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function dl(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pg(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Zn=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];uh(t),dh(n,t);let a=t.length;e.forEach(uh);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,dh(n,e[l]);let o=pg.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function uh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function dh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Fs=class s extends Zt{constructor(t=new ji([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Ft(i,3)),this.setAttribute("uv",new Ft(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Ig,S,x=!1,L,R,P,I;p&&(S=p.getSpacedPoints(h),x=!0,f=!1,L=p.computeFrenetFrames(h,!1),R=new T,P=new T,I=new T),f||(g=0,d=0,m=0,v=0);let E=o.extractPoints(c),y=E.shape,C=E.holes;if(!Zn.isClockWise(y)){y=y.reverse();for(let J=0,nt=C.length;J<nt;J++){let A=C[J];Zn.isClockWise(A)&&(C[J]=A.reverse())}}let O=Zn.triangulateShape(y,C),z=y;for(let J=0,nt=C.length;J<nt;J++){let A=C[J];y=y.concat(A)}function Z(J,nt,A){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(nt,A)}let V=y.length,j=O.length;function G(J,nt,A){let At,Q,vt,ot=J.x-nt.x,It=J.y-nt.y,mt=A.x-J.x,w=A.y-J.y,_=ot*ot+It*It,B=ot*w-It*mt;if(Math.abs(B)>Number.EPSILON){let X=Math.sqrt(_),K=Math.sqrt(mt*mt+w*w),q=nt.x-It/X,bt=nt.y+ot/X,ct=A.x-w/K,gt=A.y+mt/K,qt=((ct-q)*w-(gt-bt)*mt)/(ot*w-It*mt);At=q+ot*qt-J.x,Q=bt+It*qt-J.y;let tt=At*At+Q*Q;if(tt<=2)return new et(At,Q);vt=Math.sqrt(tt/2)}else{let X=!1;ot>Number.EPSILON?mt>Number.EPSILON&&(X=!0):ot<-Number.EPSILON?mt<-Number.EPSILON&&(X=!0):Math.sign(It)===Math.sign(w)&&(X=!0),X?(At=-It,Q=ot,vt=Math.sqrt(_)):(At=ot,Q=It,vt=Math.sqrt(_/2))}return new et(At/vt,Q/vt)}let at=[];for(let J=0,nt=z.length,A=nt-1,At=J+1;J<nt;J++,A++,At++)A===nt&&(A=0),At===nt&&(At=0),at[J]=G(z[J],z[A],z[At]);let pt=[],yt,zt=at.concat();for(let J=0,nt=C.length;J<nt;J++){let A=C[J];yt=[];for(let At=0,Q=A.length,vt=Q-1,ot=At+1;At<Q;At++,vt++,ot++)vt===Q&&(vt=0),ot===Q&&(ot=0),yt[At]=G(A[At],A[vt],A[ot]);pt.push(yt),zt=zt.concat(yt)}for(let J=0;J<g;J++){let nt=J/g,A=d*Math.cos(nt*Math.PI/2),At=m*Math.sin(nt*Math.PI/2)+v;for(let Q=0,vt=z.length;Q<vt;Q++){let ot=Z(z[Q],at[Q],At);rt(ot.x,ot.y,-A)}for(let Q=0,vt=C.length;Q<vt;Q++){let ot=C[Q];yt=pt[Q];for(let It=0,mt=ot.length;It<mt;It++){let w=Z(ot[It],yt[It],At);rt(w.x,w.y,-A)}}}let te=m+v;for(let J=0;J<V;J++){let nt=f?Z(y[J],zt[J],te):y[J];x?(P.copy(L.normals[0]).multiplyScalar(nt.x),R.copy(L.binormals[0]).multiplyScalar(nt.y),I.copy(S[0]).add(P).add(R),rt(I.x,I.y,I.z)):rt(nt.x,nt.y,0)}for(let J=1;J<=h;J++)for(let nt=0;nt<V;nt++){let A=f?Z(y[nt],zt[nt],te):y[nt];x?(P.copy(L.normals[J]).multiplyScalar(A.x),R.copy(L.binormals[J]).multiplyScalar(A.y),I.copy(S[J]).add(P).add(R),rt(I.x,I.y,I.z)):rt(A.x,A.y,u/h*J)}for(let J=g-1;J>=0;J--){let nt=J/g,A=d*Math.cos(nt*Math.PI/2),At=m*Math.sin(nt*Math.PI/2)+v;for(let Q=0,vt=z.length;Q<vt;Q++){let ot=Z(z[Q],at[Q],At);rt(ot.x,ot.y,u+A)}for(let Q=0,vt=C.length;Q<vt;Q++){let ot=C[Q];yt=pt[Q];for(let It=0,mt=ot.length;It<mt;It++){let w=Z(ot[It],yt[It],At);x?rt(w.x,w.y+S[h-1].y,S[h-1].x+A):rt(w.x,w.y,u+A)}}}Y(),it();function Y(){let J=i.length/3;if(f){let nt=0,A=V*nt;for(let At=0;At<j;At++){let Q=O[At];Ct(Q[2]+A,Q[1]+A,Q[0]+A)}nt=h+g*2,A=V*nt;for(let At=0;At<j;At++){let Q=O[At];Ct(Q[0]+A,Q[1]+A,Q[2]+A)}}else{for(let nt=0;nt<j;nt++){let A=O[nt];Ct(A[2],A[1],A[0])}for(let nt=0;nt<j;nt++){let A=O[nt];Ct(A[0]+V*h,A[1]+V*h,A[2]+V*h)}}n.addGroup(J,i.length/3-J,0)}function it(){let J=i.length/3,nt=0;Mt(z,nt),nt+=z.length;for(let A=0,At=C.length;A<At;A++){let Q=C[A];Mt(Q,nt),nt+=Q.length}n.addGroup(J,i.length/3-J,1)}function Mt(J,nt){let A=J.length;for(;--A>=0;){let At=A,Q=A-1;Q<0&&(Q=J.length-1);for(let vt=0,ot=h+g*2;vt<ot;vt++){let It=V*vt,mt=V*(vt+1),w=nt+At+It,_=nt+Q+It,B=nt+Q+mt,X=nt+At+mt;Ot(w,_,B,X)}}}function rt(J,nt,A){l.push(J),l.push(nt),l.push(A)}function Ct(J,nt,A){Ut(J),Ut(nt),Ut(A);let At=i.length/3,Q=b.generateTopUV(n,i,At-3,At-2,At-1);Jt(Q[0]),Jt(Q[1]),Jt(Q[2])}function Ot(J,nt,A,At){Ut(J),Ut(nt),Ut(At),Ut(nt),Ut(A),Ut(At);let Q=i.length/3,vt=b.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);Jt(vt[0]),Jt(vt[1]),Jt(vt[3]),Jt(vt[1]),Jt(vt[2]),Jt(vt[3])}function Ut(J){i.push(l[J*3+0]),i.push(l[J*3+1]),i.push(l[J*3+2])}function Jt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new cl[i.type]().fromJSON(i)),new s(n,t.options)}},Ig={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new et(r,a),new et(o,l),new et(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],m=t[i*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new et(a,1-l),new et(c,1-u),new et(f,1-m),new et(v,1-p)]:[new et(o,1-l),new et(h,1-u),new et(d,1-m),new et(g,1-p)]}};function Lg(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var qr=class s extends Zt{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new T,m=new et;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let p=r+g/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,h.push(m.x,m.y)}u+=f}for(let v=0;v<i;v++){let g=v*(n+1);for(let p=0;p<n;p++){let b=p+g,S=b,x=b+n+1,L=b+n+2,R=b+1;o.push(S,x,R),o.push(x,L,R)}}this.setIndex(o),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Yr=class s extends Zt{constructor(t=new ji([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ft(i,3)),this.setAttribute("normal",new Ft(r,3)),this.setAttribute("uv",new Ft(a,2));function c(h){let u=i.length/3,f=h.extractPoints(e),d=f.shape,m=f.holes;Zn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){let b=m[g];Zn.isClockWise(b)===!0&&(m[g]=b.reverse())}let v=Zn.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){let b=m[g];d=d.concat(b)}for(let g=0,p=d.length;g<p;g++){let b=d[g];i.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,p=v.length;g<p;g++){let b=v[g],S=b[0]+u,x=b[1]+u,L=b[2]+u;n.push(S,x,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Dg(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let a=e[t.shapes[i]];n.push(a)}return new s(n,t.curveSegments)}};function Dg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var ts=class s extends Zt{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,f=new T,d=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let b=[],S=p/n,x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let L=0;L<=e;L++){let R=L/e;u.x=-t*Math.cos(i+R*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(i+R*r)*Math.sin(a+S*o),m.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),g.push(R+x,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let S=h[p][b+1],x=h[p][b],L=h[p+1][b],R=h[p+1][b+1];(p!==0||a>0)&&d.push(S,x,R),(p!==n-1||l<Math.PI)&&d.push(x,L,R)}this.setIndex(d),this.setAttribute("position",new Ft(m,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Os=class s extends Zt{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new T,u=new T,f=new T;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let v=m/i*r,g=d/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let v=(i+1)*d+m-1,g=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,b=(i+1)*d+m;a.push(v,g,b),a.push(g,p,b)}this.setIndex(a),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var on=class extends Dn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function br(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ug(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var es=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends es{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sc,endingEnd:sc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case rc:r=t,o=2*e-n;break;case ac:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case rc:a=t,l=2*n-e;break;case ac:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),v=m*m,g=v*m,p=-f*g+2*f*v-f*m,b=(1+f)*g+(-1.5-2*f)*v+(-.5+f)*m+1,S=(-1-d)*g+(1.5+d)*v+.5*m,x=d*g-d*v;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+b*a[c+L]+S*a[l+L]+x*a[u+L];return r}},pl=class extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},ml=class extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=br(e,this.TimeBufferType),this.values=br(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:br(t.times,Array),values:br(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new fl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case ko:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Ug(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ea,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let v=e[u+m];if(v!==e[f+m]||v!==e[d+m]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=ko;var pi=class extends ln{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Rr;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends ln{};gl.prototype.ValueTypeName="color";var vl=class extends ln{};vl.prototype.ValueTypeName="number";var xl=class extends es{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)pn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Zr=class extends ln{InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};Zr.prototype.ValueTypeName="quaternion";Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends ln{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Rr;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends ln{};_l.prototype.ValueTypeName="vector";var fh={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},yl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null}}},Ng=new yl,Bs=class{constructor(t){this.manager=t!==void 0?t:Ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ml=class extends Bs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=fh.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;let o=Ts("img");function l(){h(),fh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}};var $r=class extends Bs{constructor(t){super(t)}load(t,e,n,i){let r=new Fe,a=new Ml(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},zs=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Jr=class extends zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},eo=new ie,ph=new T,mh=new T,bl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rs,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sl=class extends bl{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Sl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Kr=class extends zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Qr=class extends Zt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Fl="\\[\\]\\.:\\/",Fg=new RegExp("["+Fl+"]","g"),Ol="[^"+Fl+"]",Og="[^"+Fl.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",Ol),zg=/(WCOD+)?/.source.replace("WCOD",Og),kg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ol),Hg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ol),Vg=new RegExp("^"+Bg+zg+kg+Hg+"$"),Gg=["material","materials","bones","map"],El=class{constructor(t,e,n){let i=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(t){let e=Vg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=El;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rv=new Float32Array(1);var gh=new ie,jr=class{constructor(t,e,n=0,i=1/0){this.ray=new Xi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new As,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gh),this}intersectObject(t,e=!0,n=[]){return wl(t,this,n,e),n.sort(vh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)wl(t[i],this,n,e);return n.sort(vh),n}};function vh(s,t){return s.distance-t.distance}function wl(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)wl(r[a],t,e,!0)}}var Qn=class extends Un{constructor(t=10,e=10,n=4473924,i=8947848){n=new Pt(n),i=new Pt(i);let r=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,d=0,m=-o;f<=e;f++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let v=f===r?n:i;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}let h=new Zt;h.setAttribute("position",new Ft(l,3)),h.setAttribute("color",new Ft(c,3));let u=new Ke({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var ks="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",Vh=`
float h21(vec2 p){ p = fract(p*vec2(123.34, 456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
  return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
float fbm(vec2 p){ float a=0., w=.5; for(int i=0;i<5;i++){ a+=w*vn(p); p=p*2.03+17.1; w*=.5; } return a; }
`;function Hs(s){let t=new Dt(new ve(2,2),s);t.frustumCulled=!1;let e=new $i;return e.add(t),{scene:e,mesh:t}}var ra={exposure:1,contrast:1.05,sat:1,bloom:.6,threshold:.8,shadows:[1,1,1],highlights:[1,1,1],vignette:.55,grain:.06,ca:.0025,lift:0},aa=class{constructor(t,{msaa:e=4}={}){this.r=t,this.cam=new Yi(-1,1,1,-1,0,1);let n={type:Nn,depthBuffer:!0};this.rtA=new ze(4,4,{...n,samples:e}),this.rtB=new ze(4,4,{...n,samples:e}),this.rtMix=new ze(4,4,{type:Nn,depthBuffer:!1}),this.levels=[];for(let i=0;i<6;i++)this.levels.push(new ze(4,4,{type:Nn,depthBuffer:!1}));this.mixQ=Hs(new Xt({vertexShader:ks,depthTest:!1,depthWrite:!1,uniforms:{tA:{value:null},tB:{value:null},t:{value:0},time:{value:0},aspect:{value:1},glowCol:{value:new Pt(1,.82,.66)}},fragmentShader:`
        varying vec2 vUv; uniform sampler2D tA, tB; uniform float t, time, aspect; uniform vec3 glowCol;
        ${Vh}
        void main(){
          vec2 uv = vUv;
          if (t <= 0.0) { gl_FragColor = texture2D(tA, uv); return; }
          if (t >= 1.0) { gl_FragColor = texture2D(tB, uv); return; }
          float n = fbm(vec2(uv.x*aspect, uv.y)*2.6 + vec2(0.0, time*0.04));
          n = n*0.85 + (1.0-length(uv-0.5))*0.15;
          float edge = mix(-0.08, 1.02, t);
          float m = smoothstep(edge-0.05, edge+0.05, n);           // 1 = still A
          float bell = sin(t*3.14159);
          vec2 disp = vec2(n-0.5, fbm(uv*3.1+5.0)-0.5) * 0.035 * bell;
          vec3 a = texture2D(tA, uv + disp*(1.0-m)).rgb;
          vec3 b = texture2D(tB, uv - disp*m).rgb;
          float rim = exp(-abs(n-edge)*55.0) * bell;
          gl_FragColor = vec4(mix(b, a, m) + rim*glowCol*1.4, 1.0);
        }`})),this.preQ=Hs(new Xt({vertexShader:ks,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},threshold:{value:.8},texel:{value:new et}},fragmentShader:`varying vec2 vUv; uniform sampler2D tSrc; uniform float threshold; uniform vec2 texel;
        void main(){
          vec3 c = texture2D(tSrc, vUv+texel*vec2(-1,-1)).rgb + texture2D(tSrc, vUv+texel*vec2(1,-1)).rgb
                 + texture2D(tSrc, vUv+texel*vec2(-1,1)).rgb + texture2D(tSrc, vUv+texel*vec2(1,1)).rgb;
          c *= 0.25;
          float br = max(c.r, max(c.g, c.b));
          float k = 0.5; float soft = clamp(br - threshold + k, 0.0, 2.0*k); soft = soft*soft/(4.0*k+1e-4);
          float w = max(soft, br - threshold) / max(br, 1e-4);
          gl_FragColor = vec4(min(c*w, vec3(40.0)), 1.0);
        }`})),this.downQ=Hs(new Xt({vertexShader:ks,depthTest:!1,depthWrite:!1,uniforms:{tSrc:{value:null},texel:{value:new et}},fragmentShader:`varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 texel;
        void main(){ vec2 o = texel;
          vec3 s = texture2D(tSrc, vUv).rgb*4.0 + texture2D(tSrc, vUv+vec2(-o.x,-o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,-o.y)).rgb
                 + texture2D(tSrc, vUv+vec2(-o.x,o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,o.y)).rgb;
          gl_FragColor = vec4(s/8.0, 1.0); }`})),this.upQ=Hs(new Xt({vertexShader:ks,depthTest:!1,depthWrite:!1,transparent:!0,blending:ce,uniforms:{tSrc:{value:null},texel:{value:new et},w:{value:1}},fragmentShader:`varying vec2 vUv; uniform sampler2D tSrc; uniform vec2 texel; uniform float w;
        void main(){ vec2 o = texel;
          vec3 s = texture2D(tSrc, vUv+vec2(-o.x*2.0,0.)).rgb + texture2D(tSrc, vUv+vec2(o.x*2.0,0.)).rgb
                 + texture2D(tSrc, vUv+vec2(0.,-o.y*2.0)).rgb + texture2D(tSrc, vUv+vec2(0.,o.y*2.0)).rgb
                 + (texture2D(tSrc, vUv+vec2(-o.x,-o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,-o.y)).rgb
                 +  texture2D(tSrc, vUv+vec2(-o.x,o.y)).rgb + texture2D(tSrc, vUv+vec2(o.x,o.y)).rgb)*2.0;
          gl_FragColor = vec4(s/12.0*w, 1.0); }`})),this.finalQ=Hs(new Xt({vertexShader:ks,depthTest:!1,depthWrite:!1,uniforms:{tScene:{value:null},tBloom:{value:null},res:{value:new et(1,1)},time:{value:0},bloom:{value:.6},exposure:{value:1},contrast:{value:1},sat:{value:1},shadows:{value:new T(1,1,1)},highlights:{value:new T(1,1,1)},vignette:{value:.5},grain:{value:.05},ca:{value:.002},fade:{value:0},invert:{value:0},lift:{value:0},flash:{value:0}},fragmentShader:`
        varying vec2 vUv;
        uniform sampler2D tScene, tBloom; uniform vec2 res; uniform float time, bloom, exposure, contrast, sat, vignette, grain, ca, fade, invert, lift, flash;
        uniform vec3 shadows, highlights;
        ${Vh}
        vec3 aces(vec3 x){ const float a=2.51, b=0.03, c=2.43, d=0.59, e=0.14; return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0); }
        vec3 toSRGB(vec3 c){ return mix(c*12.92, 1.055*pow(c, vec3(1.0/2.4))-0.055, step(0.0031308, c)); }
        void main(){
          vec2 uv = vUv; vec2 d = uv - 0.5; d.x *= res.x/res.y; float r2 = dot(d, d);
          vec2 off = (uv-0.5) * ca * (0.4 + r2*2.0);
          vec3 col = vec3(texture2D(tScene, uv - off).r, texture2D(tScene, uv).g, texture2D(tScene, uv + off).b);
          col += texture2D(tBloom, uv).rgb * bloom;
          col *= exposure;
          col += flash;
          col = aces(col);
          col = toSRGB(col);
          float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
          col = mix(vec3(l), col, sat);
          col = (col - 0.5) * contrast + 0.5;
          col *= mix(shadows, highlights, smoothstep(0.05, 0.85, l));
          col = col*(1.0-lift) + lift*vec3(0.06,0.055,0.05);
          col *= 1.0 - vignette * smoothstep(0.15, 0.95, r2*1.6);
          float g = h21(uv*res + vec2(fract(time*7.13)*311.0, fract(time*3.71)*173.0)) - 0.5;
          col += g * grain * (1.15 - l*0.7);
          col = mix(col, 1.0 - col, invert);
          col *= 1.0 - fade;
          gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
        }`})),this.grade={...ra},this.w=this.h=0}setSize(t,e,n=1){let i=Math.round(t*n),r=Math.round(e*n);if(i===this.w&&r===this.h&&t===this.ow)return;this.w=i,this.h=r,this.ow=t,this.oh=e,this.rtA.setSize(i,r),this.rtB.setSize(i,r),this.rtMix.setSize(i,r);let a=Math.max(1,i>>1),o=Math.max(1,r>>1);for(let l of this.levels)l.setSize(a,o),a=Math.max(1,a>>1),o=Math.max(1,o>>1);this.finalQ.mesh.material.uniforms.res.value.set(t,e),this.mixQ.mesh.material.uniforms.aspect.value=i/r}_pass(t,e){this.r.setRenderTarget(e),this.r.render(t.scene,this.cam)}render(t,e,n,i,r,a={}){let o=this.r;o.autoClear=!0,(n<1||!e)&&(o.setRenderTarget(this.rtA),o.clear(),o.render(t.scene,t.camera)),e&&n>0&&(o.setRenderTarget(this.rtB),o.clear(),o.render(e.scene,e.camera));let l;if(e&&n>0&&n<1){let m=this.mixQ.mesh.material.uniforms;m.tA.value=this.rtA.texture,m.tB.value=this.rtB.texture,m.t.value=n,m.time.value=i,this._pass(this.mixQ,this.rtMix),l=this.rtMix.texture}else l=e&&n>=1?this.rtB.texture:this.rtA.texture;let c=r,h=this.preQ.mesh.material.uniforms;h.tSrc.value=l,h.threshold.value=c.threshold,h.texel.value.set(1/this.w,1/this.h),this._pass(this.preQ,this.levels[0]);let u=this.downQ.mesh.material.uniforms;for(let m=1;m<this.levels.length;m++)u.tSrc.value=this.levels[m-1].texture,u.texel.value.set(1/this.levels[m-1].width,1/this.levels[m-1].height),this._pass(this.downQ,this.levels[m]);let f=this.upQ.mesh.material.uniforms;o.autoClear=!1;for(let m=this.levels.length-1;m>0;m--)f.tSrc.value=this.levels[m].texture,f.texel.value.set(1/this.levels[m].width,1/this.levels[m].height),f.w.value=1,this._pass(this.upQ,this.levels[m-1]);o.autoClear=!0;let d=this.finalQ.mesh.material.uniforms;d.tScene.value=l,d.tBloom.value=this.levels[0].texture,d.time.value=i,d.bloom.value=c.bloom,d.exposure.value=c.exposure,d.contrast.value=c.contrast,d.sat.value=c.sat,d.shadows.value.fromArray(c.shadows),d.highlights.value.fromArray(c.highlights),d.vignette.value=c.vignette,d.grain.value=c.grain,d.ca.value=c.ca,d.lift.value=c.lift??0,d.fade.value=a.fade??0,d.invert.value=a.invert??0,d.flash.value=a.flash??0,this._pass(this.finalQ,null)}};function Gh(s,t,e){let n={};for(let i of Object.keys(ra)){let r=s[i]??ra[i],a=t[i]??ra[i];n[i]=Array.isArray(r)?r.map((o,l)=>o+(a[l]-o)*e):r+(a-r)*e}return n}var Qt=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),Tt=(s,t,e)=>s+(t-s)*e,ye=(s,t,e)=>{let n=Qt((e-s)/(t-s));return n*n*(3-2*n)},Wh=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;var Vs=(s,t,e,n)=>Tt(s,t,1-Math.exp(-e*n));function Xh(s){let t=s>>>0,e=()=>{t|=0,t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296};return e.range=(n,i)=>n+(i-n)*e(),e.int=(n,i)=>Math.floor(n+(i-n+1)*e()),e.pick=n=>n[Math.floor(e()*n.length)],e.chance=n=>e()<n,e}function Fn(s){let t=Math.sin(s*127.1+311.7)*43758.5453;return t-Math.floor(t)}var Wg=["C","C\u266F","D","E\u266D","E","F","F\u266F","G","A\u266D","A","B\u266D","B"],be=s=>Wg[(Math.round(s)%12+12)%12]+(Math.floor(Math.round(s)/12)-1),oa=s=>typeof window<"u"&&window.__ASSETS&&window.__ASSETS[s]||s,Xe=s=>440*Math.pow(2,(s-69)/12);function qh(s,t={}){let e=new Xt({side:Ie,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{map:{value:s},exposure:{value:t.exposure??1},tint:{value:new Pt(...t.tint??[1,1,1])},sat:{value:t.sat??1},blur:{value:t.blur??1},yaw:{value:t.yaw??0},pitch:{value:t.pitch??0},floorDark:{value:t.floorDark??0},skyDark:{value:t.skyDark??0},contrast:{value:t.contrast??1},opacity:{value:1}},vertexShader:"varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }",fragmentShader:`
      varying vec3 vDir; uniform sampler2D map; uniform float exposure, sat, blur, yaw, pitch, floorDark, skyDark, contrast, opacity; uniform vec3 tint;
      void main(){
        vec3 d = normalize(vDir);
        float cy = cos(pitch), sy = sin(pitch); d = vec3(d.x, cy*d.y - sy*d.z, sy*d.y + cy*d.z);
        float c = cos(yaw), s = sin(yaw); d = vec3(c*d.x - s*d.z, d.y, s*d.x + c*d.z);
        float u = atan(d.z, d.x) * 0.15915494 + 0.5; float v = asin(clamp(d.y, -1.0, 1.0)) * 0.31830989 + 0.5;
        float u2 = fract(u + 0.5) - 0.5;
        float dxu = dFdx(u), dyu = dFdy(u), dxu2 = dFdx(u2), dyu2 = dFdy(u2);
        vec2 gx = vec2(abs(dxu) < abs(dxu2) ? dxu : dxu2, dFdx(v)) * blur;
        vec2 gy = vec2(abs(dyu) < abs(dyu2) ? dyu : dyu2, dFdy(v)) * blur;
        vec3 col = textureGrad(map, vec2(u, v), gx, gy).rgb;
        float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
        col = mix(vec3(l), col, sat);
        col = pow(max(col, 0.0), vec3(contrast));
        col *= tint * exposure;
        col *= mix(1.0, 1.0 - floorDark, smoothstep(0.05, -0.35, d.y));
        col *= mix(1.0, 1.0 - skyDark, smoothstep(0.1, 0.8, d.y));
        gl_FragColor = vec4(col * opacity, 1.0);
      }`}),n=new Dt(new ts(400,64,32),e);return n.renderOrder=-10,n.frustumCulled=!1,n.userData.u=e.uniforms,n}var la=class{constructor(t="assets/"){this.base=t,this.tex={},this.loader=new $r,this.pmrem=null,this.envs={},this.images={}}async loadTextures(t,e){let n=0;await Promise.all(t.map(async([i,r,a={}])=>{let o=await this.loader.loadAsync(oa(this.base+"tex/"+r));o.colorSpace=a.linear?un:Pe,o.anisotropy=a.equirect?1:4,a.equirect&&(o.wrapS=Vi,o.minFilter=An,o.generateMipmaps=!0),a.repeat&&(o.wrapS=o.wrapT=Vi),this.tex[i]=o,this.images[i]=o.image,n++,e&&e(n/t.length)}))}envMap(t,e){if(this.envs[e])return this.envs[e];this.pmrem||(this.pmrem=new Zi(t));let n=this.tex[e];n.mapping=Ss;let i=this.pmrem.fromEquirectangular(n);return n.mapping=ta,this.envs[e]=i.texture,i.texture}pixels(t,e,n){let i=this.images[t],r=document.createElement("canvas");r.width=e??i.width,r.height=n??i.height;let a=r.getContext("2d",{willReadFrequently:!0});return a.drawImage(i,0,0,r.width,r.height),{data:a.getImageData(0,0,r.width,r.height).data,w:r.width,h:r.height}}},Yh=[["dawn","dawn.jpg",{equirect:!0}],["desert","desert.jpg",{equirect:!0}],["sunset","sunset.jpg",{equirect:!0}],["forest","forest.jpg",{equirect:!0}],["night","night.jpg",{equirect:!0}],["dark","dark.jpg",{equirect:!0}],["city","city.jpg",{equirect:!0}],["canal","canal.jpg",{equirect:!0}],["earthNight","earth_night.jpg",{equirect:!0}],["blueMarble","blue_marble.jpg",{equirect:!0}],["japan","japan_lights.png",{}],["greenland","greenland.jpg",{}]];var ca=class{constructor(){this.ev=[],this.sorted=!0}clear(){this.ev.length=0}push(t){this.ev.length&&t.t<this.ev[this.ev.length-1].t&&(this.sorted=!1),this.ev.push(t),this.ev.length>6e3&&!this.film&&this.ev.splice(0,2e3)}load(t){this.ev=t.slice().sort((e,n)=>e.t-n.t),this.sorted=!0,this.film=!0}_sort(){this.sorted||(this.ev.sort((t,e)=>t.t-e.t),this.sorted=!0)}_lower(t){let e=0,n=this.ev.length;for(;e<n;){let i=e+n>>1;this.ev[i].t<t?e=i+1:n=i}return e}recent(t,e,n){this._sort();let i=[],r=this._lower(t-e),a=this._lower(t+1e-6);for(let o=r;o<a;o++){let l=this.ev[o];(!n||l.tag===n||Array.isArray(n)&&n.includes(l.tag))&&i.push(l)}return i}pulse(t,e,n){let i=0;for(let r of this.recent(t,e*6,n))i+=(r.vel??1)*Math.exp(-(t-r.t)/e);return i}last(t,e){let n=this.recent(t,30,e);return n.length?n[n.length-1]:null}};var Xg={piano:["A0","C1","Ds1","Fs1","A1","C2","Ds2","Fs2","A2","C3","Ds3","Fs3","A3","C4","Ds4","Fs4","A4","C5","Ds5","Fs5","A5","C6","Ds6","Fs6","A6","C7","Ds7","Fs7","A7","C8"],cello:["C2","G2","C3","G3","C4","G4","C5"],guitar:["E2","A2","D3","G3","B3","E4","A4","E5"],violin:["A3","C4","E4","G4","C5","E5","A5","C6"]};function qg(s){let t=/^([A-G])(s?)(-?\d)$/.exec(s),e={C:0,D:2,E:4,F:5,G:7,A:9,B:11}[t[1]];return 12*(parseInt(t[3],10)+1)+e+(t[2]?1:0)}async function Zh(s,t,e,n=Xg){let i={},r=[],a=0,o=0;for(let[l,c]of Object.entries(n)){i[l]=[];for(let h of c)o++,r.push((async()=>{let f=await(await fetch(oa(`${t}aud/${l}/${h}.mp3`))).arrayBuffer(),d=await s.decodeAudioData(f);i[l].push({midi:qg(h),buf:d}),a++,e&&e(a/o)})())}await Promise.all(r);for(let l in i)i[l].sort((c,h)=>c.midi-h.midi);return i}function Yg(s,t,e,n=.6,i=7){let r=s.sampleRate,a=Math.floor(r*t),o=s.createBuffer(2,a,r),l=i,c=()=>(l=l*1664525+1013904223>>>0,l/4294967296*2-1);for(let h=0;h<2;h++){let u=o.getChannelData(h),f=0;for(let d=0;d<a;d++){let m=d/r,v=Math.pow(1-d/a,e)*Math.exp(-m*1.2),g=n*Math.exp(-m*.9)+.05;f=f+g*(c()-f),u[d]=f*v*(m<.012?m/.012:1)}}return o}var ha=class{constructor(t,e,n){this.ctx=t,this.samples=e,this.events=n;let i=t;this.master=i.createGain(),this.master.gain.value=.9,this.comp=i.createDynamicsCompressor(),this.comp.threshold.value=-16,this.comp.knee.value=12,this.comp.ratio.value=3,this.comp.attack.value=.01,this.comp.release.value=.25,this.limiter=i.createDynamicsCompressor(),this.limiter.threshold.value=-2,this.limiter.knee.value=0,this.limiter.ratio.value=20,this.limiter.attack.value=.002,this.limiter.release.value=.1,this.master.connect(this.comp),this.comp.connect(this.limiter),this.limiter.connect(i.destination),this.analyser=i.createAnalyser(),this.analyser.fftSize=2048,this.limiter.connect(this.analyser),this.reverb=i.createConvolver(),this.reverb.buffer=Yg(i,5.5,2.2,.55),this.revIn=i.createGain(),this.revIn.gain.value=1,this.revIn.connect(this.reverb),this.revOut=i.createGain(),this.revOut.gain.value=.55,this.reverb.connect(this.revOut),this.revOut.connect(this.master),this.delay=i.createDelay(2),this.delay.delayTime.value=.387,this.fb=i.createGain(),this.fb.gain.value=.38,this.dlp=i.createBiquadFilter(),this.dlp.type="lowpass",this.dlp.frequency.value=3200,this.delIn=i.createGain(),this.delIn.connect(this.delay),this.delay.connect(this.dlp),this.dlp.connect(this.fb),this.fb.connect(this.delay),this.delOut=i.createGain(),this.delOut.gain.value=.5,this.dlp.connect(this.delOut),this.delOut.connect(this.master),this.delOut.connect(this.revIn);let r=i.createBuffer(1,i.sampleRate*3,i.sampleRate),a=r.getChannelData(0),o=99;for(let l=0;l<a.length;l++)o=o*1664525+1013904223>>>0,a[l]=o/4294967296*2-1;this.noiseBuf=r,this.buses={}}bus(t,e=1){if(this.buses[t])return this.buses[t];let n=this.ctx,i=n.createGain(),r=n.createBiquadFilter();r.type="lowpass",r.frequency.value=2e4,r.Q.value=.7;let a=n.createGain();a.gain.value=e,i.connect(r),r.connect(a),a.connect(this.master);let o=n.createBiquadFilter();o.type="lowpass",o.frequency.value=2e4;let l=n.createGain();l.gain.value=e,o.connect(l),l.connect(this.revIn);let c=n.createBiquadFilter();c.type="lowpass",c.frequency.value=2e4;let h=n.createGain();h.gain.value=e,c.connect(h),h.connect(this.delIn);let u={name:t,input:i,filter:r,out:a,wet:o,wetGain:l,dly:c,dlyGain:h,filters:[r,o,c]};return this.buses[t]=u,u}emit(t,e,n,i,r){this.events&&this.events.push({t:e,tag:t,midi:n,vel:i,...r||{}})}_voiceOut(t,e,{pan:n=0,rev:i=.25,dly:r=0}){let a=this.ctx,o=a.createGain(),l=o;if(n){let c=a.createStereoPanner();c.pan.value=Math.max(-1,Math.min(1,n)),o.connect(c),l=c}if(l.connect(t.input),i>0){let c=a.createGain();c.gain.value=i,l.connect(c),c.connect(t.wet)}if(r>0){let c=a.createGain();c.gain.value=r,l.connect(c),c.connect(t.dly)}return o}sample(t,e,n,i,r={}){let a=this.samples[e];if(!a||!a.length)return;let o=this.bus(t),l=a[0];for(let b of a)Math.abs(b.midi-n)<Math.abs(l.midi-n)&&(l=b);let c=this.ctx,h=c.createBufferSource();h.buffer=l.buf;let u=(n-l.midi)*100+(r.detune||0);h.playbackRate.value=Math.pow(2,u/1200);let f=r.vel??.7,d=this._voiceOut(o,i,r),m=(r.gain??1)*f*f,v=r.attack??.003;d.gain.setValueAtTime(0,i),d.gain.linearRampToValueAtTime(m,i+v);let g=l.buf.duration/h.playbackRate.value,p=i+g;if(r.dur!=null){let b=r.release??.6,S=i+Math.max(v+.01,r.dur);d.gain.setValueAtTime(m,S),d.gain.setTargetAtTime(0,S,b/4),p=Math.min(p,S+b*1.6)}else r.fadeEnd&&(d.gain.setValueAtTime(m,Math.max(i+v,p-1.2)),d.gain.linearRampToValueAtTime(0,p));if(r.lowpass){let b=c.createBiquadFilter();b.type="lowpass",b.frequency.value=r.lowpass,h.connect(b),b.connect(d)}else h.connect(d);return h.start(i,r.offset||0),h.stop(p+.05),r.silent||this.emit(r.tag||e,i,n,f,{dur:r.dur??g,detune:r.detune||0,pan:r.pan||0,ring:r.ring,user:r.user,px:r.px,pz:r.pz,inst:e}),h}synth(t,e,n={}){let i=this.ctx,r=this.bus(t),a=n.freq??440,o=n.dur??.2,l=this._voiceOut(r,e,n),c=n.vel??.5,h=n.attack??.005,u=n.release??.12,f=n.decay??0,d=c*(n.gain??.25);l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(d,e+h),f&&l.gain.setTargetAtTime(d*(n.sustain??.3),e+h,f/3),l.gain.setValueAtTime(f?d*(n.sustain??.3):d,e+Math.max(o,h+.001)),l.gain.setTargetAtTime(0,e+Math.max(o,h+.001),u/4);let m=l;if(n.cutoff){let b=i.createBiquadFilter();b.type=n.ftype||"lowpass",b.Q.value=n.q??1,b.frequency.setValueAtTime(n.cutoff,e),n.env&&(b.frequency.setValueAtTime(n.cutoff+n.env,e),b.frequency.setTargetAtTime(n.cutoff,e+.002,n.envTime??.08)),b.connect(l),m=b}let v=[],g=n.types||[n.type||"sine"],p=n.spread??0;return g.forEach((b,S)=>{let x=i.createOscillator();x.type=b,x.frequency.setValueAtTime(n.glideFrom??a,e),n.glideFrom&&x.frequency.exponentialRampToValueAtTime(a,e+(n.glide??.05)),n.sweepTo&&x.frequency.exponentialRampToValueAtTime(n.sweepTo,e+o),x.detune.value=(S-(g.length-1)/2)*p+(n.detune||0);let L=i.createGain();L.gain.value=1/g.length,x.connect(L),L.connect(m),x.start(e),x.stop(e+o+u*2+.05),v.push(x)}),n.tag&&this.emit(n.tag,e,n.midi??0,c,{dur:o,freq:a,pan:n.pan||0,step:n.step}),v}noise(t,e,n={}){let i=this.ctx,r=this.bus(t),a=i.createBufferSource();a.buffer=this.noiseBuf,a.loop=!0;let o=n.dur??.05,l=n.vel??.5,c=this._voiceOut(r,e,n),h=l*(n.gain??.3),u=n.attack??.001,f=n.release??.05;c.gain.setValueAtTime(0,e),c.gain.linearRampToValueAtTime(h,e+u),c.gain.setValueAtTime(h,e+Math.max(o,u)),c.gain.setTargetAtTime(0,e+Math.max(o,u),f/4);let d=a,m=n.filters||(n.ftype?[[n.ftype,n.freq??1e3,n.q??1]]:[]);for(let[v,g,p]of m){let b=i.createBiquadFilter();b.type=v,b.frequency.setValueAtTime(g,e),n.sweepTo&&v!=="highpass"&&b.frequency.exponentialRampToValueAtTime(n.sweepTo,e+o),b.Q.value=p,d.connect(b),d=b}d.connect(c),a.start(e,n.offset??e*7.919%2.5),a.stop(e+o+f*2+.05),n.tag&&this.emit(n.tag,e,n.midi??0,l,{dur:o,pan:n.pan||0})}_params(t){let e=this.bus(t);return[e.out.gain,e.wetGain.gain,e.dlyGain.gain]}fadeBus(t,e,n,i){for(let r of this._params(t))r.cancelScheduledValues(e),r.setValueAtTime(r.value,e),r.linearRampToValueAtTime(n,e+i)}setBusGain(t,e,n){for(let i of this._params(t))i.setValueAtTime(n,e)}rampBusGain(t,e,n){for(let i of this._params(t))i.linearRampToValueAtTime(n,e)}setBusLowpass(t,e,n,i=.15){for(let r of this.bus(t).filters)r.frequency.setTargetAtTime(n,e,i)}};var gn=class{constructor(t,e,n){this.e=t,this.bus=e,this.r=Xh(n),this.cursor=0,this.t0=0,this.p={},this.stopAt=1/0}start(t){this.t0=t,this.cursor=t+(this.lead??.25),this.init&&this.init()}schedule(t){let e=0;for(;this.cursor<t&&this.cursor<this.stopAt&&e++<400;)this.step(this.cursor)}pn(t,e,n={}){return this.e.sample(this.bus,"piano",t,e,{gain:.95,rev:.35,...n})}},Bl=class extends gn{constructor(t,e,n=1,i={}){super(t,e,n),this.coda=!!i.coda,this.lead=i.lead??.8,this.n=0}step(t){let e=this.coda?[[69,.55],[57,.4],[64,.3]]:[[69,.6],[57,.42],[76,.3],[64,.36],[71,.32],[73,.28]],[n,i]=e[this.n%e.length];this.pn(n,t,{vel:i,rev:.5}),this.e.synth(this.bus,t+.05,{freq:Xe(n)*2,dur:3.5,attack:1.2,release:5,vel:.12,gain:.25,pan:this.r.range(-.3,.3),rev:.8}),this.n++,this.cursor=t+(this.coda?7.5:this.r.range(8.5,10.5))}tap(t,e){let n=[57,61,64,66,69,71,73,76,78,81],i=n[Math.max(0,Math.min(n.length-1,Math.floor((e*.5+.5)*n.length)))];this.pn(i,t,{vel:.55,rev:.5})}},rs=[[37,44,53,60,63],[37,46,55,63,65],[36,43,51,58,65],[41,48,51,58,60],[42,49,53,56,60],[44,51,53,58,60],[34,41,49,56,60],[39,46,53,60,67]],Zg=[61,63,65,68,70],zl=class extends gn{constructor(t,e,n=11){super(t,e,n),this.bar=0,this.beat=60/62,this.lead=.3}get chord(){return rs[this.bar%rs.length]}step(t){let e=this.r,n=rs[this.bar%rs.length],i=this.beat*3,r=i*1.7;this.pn(n[0]-(this.bar%4===0?12:0),t,{vel:.5,dur:r,release:1.5,tag:"bass"});let a=t+this.beat*e.range(.4,.7);if(n.slice(1).forEach((l,c)=>{this.pn(l,a,{vel:.42-c*.03+e.range(-.03,.03),dur:r,release:1.4,pan:-.3+c*.15}),a+=e.range(.07,.13)}),this.bar%4===3){let l=72+e.int(0,2)*2;for(let c=0;c<4;c++){let h=t+this.beat*(1+c*.5);[0,5,10].forEach((u,f)=>this.pn(l+u,h+f*.012,{vel:.34+c*.03,dur:this.beat*.9,release:1.2,tag:"melody",pan:.2})),l+=2}}else{let l=e.int(2,4),c=n.slice(2).map(u=>u+12).concat(Zg.map(u=>u+12)).filter(u=>u>=70&&u<=89),h=t+this.beat*e.range(1,1.3);for(let u=0;u<l;u++){let f=e.pick(c);this.pn(f,h,{vel:e.range(.35,.5),dur:this.beat*1.4,release:1.3,tag:"melody",pan:e.range(-.2,.4)}),h+=this.beat*e.pick([.5,.75,1])*e.range(.95,1.1)}}this.bar++,this.cursor=t+i*this.r.range(.98,1.06)}key(t,e){this.pn(e,t,{vel:.55,dur:2.5,release:1.5,tag:"melody"});let i=rs[(this.bar+7)%rs.length].slice(1).map(r=>r+12*Math.round((e-7-r)/12)).find(r=>r<e&&r>e-9);i&&this.pn(i,t+.03,{vel:.35,dur:2.5,release:1.5})}},$g=[33,29,31,28],$h=[[57,60,64,69,72,76],[53,57,60,65,69,72],[55,59,62,67,71,74],[52,55,59,64,67,71]],Jg=[[0,76],[3,79],[6,81],[8,79],[10,76],[12,74],[14,76],[16,72],[20,74],[22,76],[24,79],[27,81],[30,84]],kl=class extends gn{constructor(t,e,n=21){super(t,e,n),this.bpm=116,this.s16=60/this.bpm/4,this.i=0,this.lead=.1,this.mask=[1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1],this.cut=1800,this.intro=0}init(){this.i=0}step(t){let e=this.i,n=e%16,i=Math.floor(e/16),r=i%4,a=$g[r],o=this.e,l=this.bus,c=n%2===1?this.s16*.08:0,h=t+c,u=Math.min(1,i/2);n%4===0&&o.synth(l,h,{freq:46,glideFrom:160,glide:.06,dur:.18,release:.2,vel:.95,gain:1,tag:"kick"}),(n===4||n===12)&&i>=1&&(o.noise(l,h,{dur:.09,release:.16,vel:.6,gain:.55,filters:[["bandpass",1900,.8]],rev:.25,tag:"snare"}),o.synth(l,h,{freq:190,glideFrom:240,glide:.03,dur:.05,release:.08,vel:.5,gain:.35})),o.noise(l,h,{dur:n%4===2?.07:.018,release:.03,vel:(n%4===2?.45:.25)*u,gain:.35,filters:[["highpass",7500,.7]],pan:.25,tag:"hat"});let f=[0,null,12,0,null,0,12,null,0,null,12,0,null,7,12,0];if(f[n]!=null&&i>=0){let d=a+12+f[n];o.synth(l,h,{freq:Xe(d),midi:d,types:["sawtooth","square"],spread:9,dur:this.s16*.8,release:.06,vel:.62,gain:.32,cutoff:260,env:1400,envTime:.06,q:6,tag:"bass"})}if(this.mask[n]&&i>=1){let d=$h[r],m=[0,1,2,3,4,5,4,3][n%8]+(n>=8,0),v=d[m%d.length]+(n>=8?12:0);o.synth(l,h,{freq:Xe(v),midi:v,type:"square",dur:this.s16*.55,release:.05,vel:.5,gain:.16,cutoff:this.cut,env:2500,envTime:.05,q:4,dly:.35,pan:n%2?.35:-.35,rev:.1,tag:"arp",step:n})}if(i>=4&&Math.floor(i/2)%2===0){let d=i%2*16+n;for(let[m,v]of Jg)m===d&&o.synth(l,h,{freq:Xe(v),midi:v,types:["square","sawtooth"],spread:12,glideFrom:Xe(v-2),glide:.04,dur:this.s16*1.7,release:.15,vel:.55,gain:.2,cutoff:2600,env:1800,envTime:.12,q:2,dly:.25,rev:.25,tag:"lead"})}n===0&&i>=2&&$h[r].slice(0,4).forEach((d,m)=>o.synth(l,h,{freq:Xe(d),midi:d,types:["sawtooth","sawtooth"],spread:14,attack:.02,dur:this.s16*14,release:.4,vel:.35,gain:.07,cutoff:900,q:1,rev:.35,pan:-.4+m*.27})),this.i++,this.cursor=t+this.s16}toggle(t){this.mask[t]=this.mask[t]?0:1}},Jh=[[38,[57,62,65,69,76]],[34,[58,62,65,69,74]],[31,[58,62,65,69,74]],[33,[57,62,64,67,73]],[29,[57,60,65,69,72]],[28,[55,60,64,67,72]],[38,[57,60,65,69,74]],[33,[57,61,64,67,76]]],ua=[74,77,79,81,84,86,89],Hl=class extends gn{constructor(t,e,n=31){super(t,e,n),this.beat=60/66,this.bar=0,this.lead=.2,this.mel=2}step(t){let e=this.r,[n,i]=Jh[this.bar%Jh.length],r=this.beat*3,a=this.e,o=this.bus;if(a.sample(o,"cello",n+12,t,{vel:.55,attack:.25,dur:r*.98,release:1.2,gain:.9,rev:.4,tag:"cello"}),i.slice(1).forEach((l,c)=>a.sample(o,"violin",l,t+c*.04,{vel:.42,attack:1.1,dur:r*1.02,release:1.8,gain:.55,rev:.55,pan:-.5+c*.33,tag:"strings"})),[n+24,i[1],i[2],i[1]+12,i[2],i[1]].forEach((l,c)=>this.pn(l,t+c*this.beat*.5,{vel:.22,dur:this.beat*1.2,release:.9,pan:-.25})),this.bar%8>=2||this.bar>=8){let l=[[0,1.5,2],[0,1,2],[0,2],[.5,1,1.5,2]],c=e.pick(l);for(let h of c){this.mel=Math.max(0,Math.min(ua.length-1,this.mel+e.pick([-2,-1,-1,1,1,2,0])));let u=ua[this.mel];this.pn(u,t+h*this.beat,{vel:e.range(.48,.62),dur:this.beat*1.6,release:1,tag:"melody",pan:.1}),this.bar%4===3&&this.pn(u-12,t+h*this.beat+.01,{vel:.3,dur:this.beat*1.6,release:1})}}this.bar++,this.cursor=t+r}phrase(t,e){let n=e%ua.length;for(let i=0;i<4;i++)this.pn(ua[n],t+i*this.beat*.75,{vel:.55,dur:1.2,release:1,tag:"melody"}),n=Math.max(0,Math.min(6,n+this.r.pick([-1,1,2,-2])))}},as=[[48,[52,59,62,67]],[45,[55,61,65]],[50,[53,60,64,69]],[43,[53,59,64]],[40,[55,62,64,71]],[45,[55,58,61,64]],[50,[53,60,64,69]],[49,[53,59,63,67]]],Vl=class extends gn{constructor(t,e,n=41){super(t,e,n),this.e8=60/132/2,this.i=0,this.lead=.2}get chordIdx(){return Math.floor(this.i/8)%as.length}step(t){let e=this.r,n=this.e,i=this.bus,r=this.i,a=r%8,o=Math.floor(r/8),[l,c]=as[o%as.length],h=()=>e.range(-.008,.012);(a===0||a===4)&&n.sample(i,"guitar",a===0?l:l+7-(l+7>55?12:0),t+h(),{vel:.62,gain:1.15,dur:this.e8*3.2,release:.4,pan:-.15,rev:.25,tag:"bass"}),(o%2===0?[0,3,5]:[2,4,7]).includes(a)&&c.forEach((d,m)=>n.sample(i,"guitar",d,t+m*.011+h(),{vel:.5+e.range(-.05,.05),gain:1.1,dur:this.e8*1.7,release:.25,pan:.15,rev:.28,tag:"guitar"}));for(let d=0;d<2;d++)n.noise(i,t+d*this.e8/2,{dur:.03,release:.04,vel:(d?.32:.18)+e.range(0,.06),gain:.18,filters:[["highpass",5200,.6]],pan:.45});if((o%2===0?[0,3,6]:[2,4]).includes(a)&&n.noise(i,t,{dur:.012,release:.03,vel:.28,gain:.3,filters:[["bandpass",2300,6]],pan:-.4,tag:"rim"}),a===0&&o>=2){let d=c.filter(v=>v>=52).map(v=>v-12*(v>62?1:0)),m=e.pick(d);n.sample(i,"cello",m,t+.05,{vel:.55,attack:.35,dur:this.e8*7.5,release:1,gain:.95,rev:.45,pan:.05,tag:"cello"})}a===5&&o%4===3&&[c[c.length-1]+12,c[c.length-2]+12].forEach((d,m)=>this.pn(d,t+m*this.e8,{vel:.4,dur:1.2,release:1,tag:"melody",pan:.35})),this.i++,this.cursor=t+this.e8*(a%2===1?.96:1.04)}strum(t,e=1){let[,n]=as[this.chordIdx];(e>0?n:n.slice().reverse()).forEach((r,a)=>this.e.sample(this.bus,"guitar",r+12,t+a*.025,{vel:.6,gain:1.1,dur:2,release:.6,rev:.4,tag:"guitar"}))}stringPluck(t,e){let[n,i]=as[this.chordIdx],r=[n,n+7].concat(i).sort((o,l)=>o-l),a=r[Math.min(r.length-1,Math.round(e/5*(r.length-1)))];this.e.sample(this.bus,"guitar",a+(e>2?12:0),t,{vel:.6,gain:1.1,dur:2.2,release:.7,rev:.4,tag:"guitar",pan:-.4+e*.16})}pluck(t,e,n={}){let[,i]=as[this.chordIdx],r=i[Math.floor((e*.5+.5)*i.length)%i.length]+12;this.e.sample(this.bus,"guitar",r,t,{vel:.65,gain:1.1,dur:2.5,release:.8,rev:.45,tag:"guitar",user:1,...n})}},Gl=class extends gn{constructor(t,e,n=51){super(t,e,n),this.lead=.4,this.nextPiano=0,this.nextSub=0,this.grid=.125}init(){this.nextPiano=this.t0+1.2,this.nextSub=this.t0+.5}step(t){let e=this.r,n=this.e,i=this.bus;if(t>=this.nextPiano){let r=e.pick([60,64,71,74,67,78,55,62]);this.pn(r,t,{vel:e.range(.38,.55),rev:.55,tag:"piano"}),e.chance(.3)&&this.pn(r+e.pick([7,11,14]),t+e.range(.6,1.4),{vel:.3,rev:.55,tag:"piano"}),this.nextPiano=t+e.range(3.5,6.5)}if(t>=this.nextSub&&(n.synth(i,t,{freq:48,dur:.5,release:.6,vel:.7,gain:.55,tag:"sub"}),this.nextSub=t+this.grid*16*e.pick([1,2])),e.chance(.55)){let r=e.int(2,7),a=e.pick([1e3,2e3,4e3,8e3,3150,6300,12500]),o=e.pick([this.grid/2,this.grid/4,this.grid]);for(let l=0;l<r;l++){let c=t+l*o;e.chance(.65)?n.synth(i,c,{freq:Math.min(16e3,a*(e.chance(.2)?2:1)),dur:e.pick([.012,.02,.04]),attack:5e-4,release:.004,vel:.35,gain:.12,pan:e.range(-.9,.9),rev:.05,tag:"blip",midi:a}):n.noise(i,c,{dur:.004,release:.002,vel:.6,gain:.35,filters:[["highpass",2500,.5]],pan:e.range(-.9,.9),tag:"click"})}}e.chance(.07)&&n.synth(i,t,{freq:e.pick([440,880,1e3]),dur:e.range(.4,1.4),attack:.002,release:.01,vel:.25,gain:.08,pan:e.range(-.5,.5),tag:"tone"}),this.cursor=t+this.grid*this.r.pick([2,4,4,6,8])}tap(t,e,n){let i=400*Math.pow(2,(e*.5+.5)*5);for(let r=0;r<4;r++)this.e.synth(this.bus,t+r*.03,{freq:i*(1+r*.5),dur:.02,attack:5e-4,release:.005,vel:.45,gain:.14,pan:e,tag:"blip",midi:i});this.e.noise(this.bus,t,{dur:.004,release:.002,vel:.7,gain:.4,filters:[["highpass",2500,.5]],pan:e,tag:"click"}),n>.3&&this.pn(this.r.pick([71,74,76,79]),t,{vel:.45,rev:.6,tag:"piano"})}},Wl=class extends gn{constructor(t,e,n=61){super(t,e,n),this.lead=.2,this.loops=[{per:7.3,notes:[45,52,59],det:[-35,-10],vel:.42,off:.3},{per:11.1,notes:[78,85],det:[5,25],vel:.3,off:2.2},{per:13.7,notes:[37],det:[-25,-15],vel:.48,off:4},{per:17.9,notes:[64,66],det:[-20,-5],vel:.32,off:6.5}],this.bucket=0,this.rain=1}init(){this.loops.forEach(t=>{t.next=this.t0+t.off}),this.nDrone=this.t0,this.nWind=this.t0+1,this.nRain=this.t0,this.nBed=this.t0,this.nBub=this.t0+.5}step(t){let e=this.r,n=this.e,i=this.bus;for(let r of this.loops)t>=r.next&&(r.notes.forEach((a,o)=>this.pn(a,r.next+o*e.range(.05,.25),{vel:r.vel,detune:e.range(r.det[0],r.det[1]),rev:.55,tag:"piano",pan:e.range(-.5,.5)})),r.next+=r.per);for(t>=this.nDrone&&([33,40,45.07].forEach((r,a)=>n.synth(i,t,{freq:Xe(r),types:["triangle","sine"],spread:7,attack:4,dur:9,release:5,vel:.5,gain:.12,cutoff:700,pan:-.3+a*.3,rev:.6})),this.nDrone=t+9),t>=this.nWind&&(n.noise(i,t,{dur:7,attack:3,release:3,vel:.4,gain:.08,filters:[["bandpass",500,.8]],sweepTo:900,pan:e.range(-.6,.6),rev:.3}),this.nWind=t+8),t>=this.nBed&&(n.noise(i,t,{dur:4.5,attack:1,release:1.5,vel:.5*this.rain,gain:.085,filters:[["highpass",1800,.5],["lowpass",9e3,.5]],pan:e.range(-.3,.3)}),this.nBed=t+4);this.nRain<t+.25;){let r=this.nRain,a=e.range(1800,4800);n.synth(i,r,{freq:a,sweepTo:a*.55,dur:.018,attack:8e-4,release:.01,vel:e.range(.08,.2)*this.rain,gain:.25,pan:e.range(-1,1),rev:.2,tag:"drop",midi:a}),this.nRain+=-Math.log(1-e())/(6*this.rain+.5)}for(;this.nBub<t+.25;){let r=this.nBub,a=e.range(280,700);n.synth(i,r,{freq:a,sweepTo:a*e.range(1.6,2.4),dur:.035,attack:.002,release:.01,vel:e.range(.1,.2),gain:.22,pan:e.range(-.6,.6),rev:.35,tag:"bubble",midi:a}),this.nBub+=-Math.log(1-e())/1.6}this.cursor=t+.25}drop(t,e,n,i={}){let r=[57,59,61,64,66,69,71,73,76],a=r[Math.max(0,Math.min(r.length-1,Math.floor((n*.5+.5)*r.length)))];this.pn(a,t,{vel:.55,detune:this.r.range(-38,22),rev:.55,tag:"piano",pan:e*.6,user:1,...i})}},Gs=[45,52,57,59,61,64,66,69,71,73,76,81],Xl=class extends gn{constructor(t,e,n=71){super(t,e,n),this.lead=1,this.k=0,this.nPad=0}init(){this.nPad=this.t0}step(t){let e=this.r,n=this.e,i=this.bus;t>=this.nPad&&([45,52].forEach(o=>n.synth(i,t,{freq:Xe(o),types:["sine","triangle"],spread:4,attack:5,dur:10,release:6,vel:.4,gain:.07,rev:.7})),this.nPad=t+12),e.chance(.35)&&n.noise(i,t-.7,{dur:.5,attack:.45,release:.5,vel:.35,gain:.08,filters:[["bandpass",900,.7]],tag:"breath"});let r=[7,4,9,2,11,5,0,8,3,10,6,1],a=r[this.k%12];if(this.pn(Gs[a],t,{vel:e.range(.36,.52),rev:.6,tag:"piano",ring:a}),e.chance(.3)){let o=r[(this.k+5)%12];this.pn(Gs[o],t+e.range(.4,1.1),{vel:.3,rev:.6,tag:"piano",ring:o})}this.k++,this.cursor=t+e.range(2.6,5.2)}ring(t,e){this.pn(Gs[e],t,{vel:.55,rev:.6,tag:"piano",ring:e})}},Kh={prelude:Bl,debussy:zl,ymo:kl,screen:Hl,casa:Vl,sine:Gl,nature:Wl,twelve:Xl};var On=[{id:"prelude",roman:"\u5E8F",years:"1952 \u2014 2023",cn:"\u4E00\u4E2A\u97F3",en:"A Single Tone",dcn:"\u4E00\u4E2A\u97F3\u88AB\u6309\u4E0B\uFF0C\u7136\u540E\u5F00\u59CB\u6D88\u5931\u3002\u4ED6\u7528\u4E00\u751F\u503E\u542C\u8FD9\u6BB5\u6D88\u5931\u3002",den:"A note is struck and begins to vanish. He spent a lifetime listening to that vanishing.",hcn:"\u8F7B\u89E6\u4EFB\u610F\u5904\uFF0C\u5F39\u4E0B\u4E00\u4E2A\u97F3",hen:"Tap anywhere to strike a note",mat:"Salamander Grand Piano \xB7 \u771F\u5B9E\u5F55\u97F3\u6CE2\u5F62 recorded waveform \xB7 Poly Haven \u201Cmoonless golf\u201D CC0",grade:{exposure:1,bloom:.9,threshold:.55,sat:.8,vignette:.75,grain:.07,ca:.002,contrast:1.08,shadows:[.92,.96,1.05],highlights:[1.02,1,.97]}},{id:"debussy",roman:"I",years:"1952 \u2014 1977",cn:"\u5FB7\u5F6A\u897F\u7684\u5B69\u5B50",en:"Debussy\u2019s Child",dcn:"\u751F\u4E8E\u4E1C\u4EAC\u3002\u5C11\u5E74\u65F6\u8FF7\u604B\u5FB7\u5F6A\u897F\uFF1B\u5728\u4E1C\u4EAC\u827A\u672F\u5927\u5B66\u5B66\u4E60\u4F5C\u66F2\uFF0C\u4E5F\u94BB\u7814\u7535\u5B50\u4E0E\u6C11\u65CF\u97F3\u4E50\u3002",den:"Born in Tokyo. Devoted to Debussy as a boy; at Tokyo University of the Arts he studied composition, electronic and ethnic music.",hcn:"\u8F7B\u89E6\u7434\u952E\u6F14\u594F\uFF0C\u548C\u58F0\u4F1A\u81EA\u52A8\u8DDF\u968F",hen:"Tap the keys; the harmony follows you",mat:"Poly Haven \u201CKiara 1 Dawn\u201D CC0 \xB7 \u53CD\u5C04\u4E8E\u6F06\u9762 reflected in lacquer",grade:{exposure:1,bloom:.55,threshold:.9,sat:.92,vignette:.6,grain:.05,ca:.0018,contrast:1.04,shadows:[.96,.95,1.03],highlights:[1.05,1,.94]}},{id:"ymo",roman:"II",years:"1978 \u2014 1983",cn:"\u9EC4\u8272\u9B54\u672F",en:"Yellow Magic",dcn:"\u4E0E\u7EC6\u91CE\u6674\u81E3\u3001\u9AD8\u6865\u5E78\u5B8F\u7EC4\u6210\u9EC4\u8272\u9B54\u672F\u4EA4\u54CD\u4E50\u56E2\uFF08YMO\uFF09\uFF0C\u5408\u6210\u5668\u4E0E\u97F3\u5E8F\u5668\u628A\u4E1C\u4EAC\u7684\u7535\u5B50\u6D41\u884C\u4E50\u9001\u5F80\u4E16\u754C\u3002",den:"With Haruomi Hosono and Yukihiro Takahashi he formed Yellow Magic Orchestra; synthesizers and sequencers carried Tokyo\u2019s electropop worldwide.",hcn:"\u8F7B\u89E6\u5916\u5708 16 \u6B65\u97F3\u5E8F\u5668\u5F00\u5173\u97F3\u7B26 \xB7 \u4E0A\u4E0B\u62D6\u52A8\u8C03\u6EE4\u6CE2",hen:"Tap the 16-step ring to toggle notes \xB7 drag up/down for filter",mat:"NASA Earth at Night (Black Marble) \xB7 \u516C\u6709\u9886\u57DF public domain",grade:{exposure:1.05,bloom:1.1,threshold:.6,sat:1.05,vignette:.6,grain:.06,ca:.0035,contrast:1.12,shadows:[.95,.95,1.08],highlights:[1.06,.98,.94]}},{id:"screen",roman:"III",years:"1983 \u2014 1990",cn:"\u94F6\u5E55\u4E0A\u7684\u65CB\u5F8B",en:"Melodies for the Screen",dcn:"\u300A\u5723\u8BDE\u5FEB\u4E50\uFF0C\u52B3\u4F26\u65AF\u5148\u751F\u300B\u300A\u672B\u4EE3\u7687\u5E1D\u300B\u300A\u906E\u853D\u7684\u5929\u7A7A\u300B\u3002\u4E94\u58F0\u97F3\u9636\u7684\u65CB\u5F8B\u5728\u897F\u65B9\u7BA1\u5F26\u4E50\u91CC\u627E\u5230\u56DE\u58F0\u3002",den:"Merry Christmas, Mr. Lawrence; The Last Emperor; The Sheltering Sky. Pentatonic lines found their echo in the orchestra.",hcn:"\u62D6\u52A8\u8F6C\u52A8\u80F6\u7247 \xB7 \u8F7B\u89E6\u753B\u683C\u594F\u51FA\u4E00\u53E5\u65CB\u5F8B",hen:"Drag to turn the film \xB7 tap a frame for a phrase",mat:"Poly Haven \u201CQuarry 01\u201D \u6C99\u6F20 desert CC0 \xB7 \u753B\u683C\u53D6\u81EA frames from Poly Haven CC0 panoramas",grade:{exposure:1,bloom:.75,threshold:.75,sat:.82,vignette:.7,grain:.09,ca:.0025,contrast:1.1,shadows:[.95,.92,.9],highlights:[1.08,1,.86]}},{id:"casa",roman:"IV",years:"2001",cn:"\u5BB6 \xB7 \u6CE2\u8428\u8BFA\u74E6",en:"Casa \xB7 Bossa Nova",dcn:"\u4E0E\u83AB\u96F7\u4F26\u9C8D\u59C6\u592B\u5987\u5728\u91CC\u7EA6\u70ED\u5185\u5362\u82E5\u5BBE\u7684\u6545\u5C45\uFF0C\u7528\u82E5\u5BBE\u7684\u94A2\u7434\u5F55\u4E0B\u300ACasa\u300B\uFF0C\u5411\u6CE2\u8428\u8BFA\u74E6\u81F4\u610F\u3002",den:"With Jaques and Paula Morelenbaum he recorded Casa in Jobim\u2019s house in Rio, on Jobim\u2019s own piano.",hcn:"\u5212\u8FC7\u7434\u5F26\u626B\u5F26 \xB7 \u8F7B\u89E6\u6C34\u9762\u62E8\u4E00\u4E2A\u97F3",hen:"Swipe across the strings to strum \xB7 tap the water to pluck",mat:"Poly Haven \u201CVenice Sunset\u201D CC0 \xB7 \u6C34\u9762\u5012\u5F71 reflected in water \xB7 \u5C3C\u9F99\u5F26\u5409\u4ED6\u4E0E\u5927\u63D0\u7434\u91C7\u6837 nylon guitar & cello samples",grade:{exposure:.95,bloom:.5,threshold:1,sat:1,vignette:.65,grain:.05,ca:.002,contrast:1.05,shadows:[.94,.97,1.04],highlights:[1.04,.98,.92]}},{id:"sine",roman:"V",years:"2002 \u2014 2007",cn:"\u6B63\u5F26\u4E0E\u566A\u58F0",en:"Sine and Noise",dcn:"\u4E0E\u963F\u5C14\u74E6\xB7\u8BFA\u6258\u5408\u4F5C\uFF0C\u94A2\u7434\u88AB\u524A\u51CF\u6210\u7A00\u758F\u7684\u97F3\u7B26\uFF0C\u4E0E\u6B63\u5F26\u6CE2\u3001\u7535\u5B50\u566A\u97F3\u4EA4\u9519\u3002\u5BC2\u9759\u4E5F\u662F\u4E50\u8C31\u3002",den:"With Alva Noto the piano was pared to sparse notes among sine tones and clicks. Silence is part of the score.",hcn:"\u8F7B\u89E6\u53D1\u51FA\u8109\u51B2 \xB7 \u6A2A\u5411\u4F4D\u7F6E\u51B3\u5B9A\u9891\u7387",hen:"Tap to fire pulses \xB7 horizontal position sets frequency",mat:"Salamander Grand Piano A4 \xB7 \u771F\u5B9E\u5F55\u97F3\u7684\u9891\u8C31 spectrum of a real recording",grade:{exposure:1,bloom:.7,threshold:.7,sat:0,vignette:.45,grain:.045,ca:.004,contrast:1.15,shadows:[1,1,1],highlights:[1,1,1]}},{id:"nature",roman:"VI",years:"2008 \u2014 2017",cn:"\u51B0\u5DDD \xB7 \u6D77\u5578 \xB7 \u68EE\u6797",en:"Ice \xB7 Flood \xB7 Forest",dcn:"\u5317\u6781\u5708\u7684\u51B0\u5DDD\u878D\u6C34\uFF1B\u88AB\u6D77\u5578\u6D78\u6CE1\u3001\u7531\u5927\u81EA\u7136\u91CD\u65B0\u8C03\u97F3\u7684\u94A2\u7434\uFF1B\u300Aasync\u300B\u91CC\u6BCF\u4E2A\u58F0\u97F3\u6309\u81EA\u5DF1\u7684\u65F6\u95F4\u547C\u5438\u3002",den:"Meltwater in the Arctic; a piano drowned by the tsunami and retuned by nature; in async every sound keeps its own time.",hcn:"\u8F7B\u89E6\u843D\u4E0B\u96E8\u6EF4 \xB7 \u957F\u6309\uFF1A\u628A\u6C34\u6876\u6263\u5728\u5934\u4E0A\u542C\u96E8",hen:"Tap to let rain fall \xB7 hold: listen to the rain through a bucket",mat:"NASA Blue Marble \u683C\u9675\u5170 Greenland \xB7 Poly Haven \u201CForest Slope\u201D CC0",grade:{exposure:1,bloom:.6,threshold:.8,sat:.7,vignette:.7,grain:.07,ca:.0022,contrast:1.06,shadows:[.9,.97,1.05],highlights:[.98,1.01,1.03]}},{id:"twelve",roman:"VII",years:"2023",cn:"12",en:"Ars longa, vita brevis",dcn:"\u4E03\u5341\u4E00\u5C81\u751F\u65E5\u90A3\u5929\u53D1\u884C\u7684\u300A12\u300B\uFF0C\u50CF\u4E00\u672C\u58F0\u97F3\u65E5\u8BB0\u3002\u540C\u5E74\u4E09\u6708\uFF0C\u4ED6\u79BB\u5F00\u4E86\u3002\u827A\u672F\u957F\u4E45\uFF0C\u4EBA\u751F\u77ED\u6682\u3002",den:"Released on his 71st birthday, 12 reads like a diary in sound. He died that March. Ars longa, vita brevis.",hcn:"\u8F7B\u89E6\u5341\u4E8C\u9053\u5149\u73AF",hen:"Touch the twelve rings",mat:"Poly Haven \u201CDikhololo Night\u201D CC0 \xB7 \u771F\u5B9E\u661F\u7A7A real night sky",grade:{exposure:1,bloom:.85,threshold:.6,sat:.85,vignette:.7,grain:.06,ca:.002,contrast:1.06,shadows:[.9,.94,1.08],highlights:[1,.99,1]}}],Qh=[["\u5F71\u50CF\u7D20\u6750 Imagery","Poly Haven HDRI \u5168\u666F\uFF08CC0\uFF09\uFF1AKiara 1 Dawn \xB7 Quarry 01 \xB7 Venice Sunset \xB7 Forest Slope \xB7 Dikhololo Night \xB7 Moonless Golf \xB7 Potsdamer Platz \xB7 San Giuseppe Bridge"],["\u5730\u7403\u5F71\u50CF Earth","NASA Earth Observatory\uFF1ABlack Marble \u591C\u95F4\u706F\u5149 \xB7 Blue Marble\uFF08\u516C\u6709\u9886\u57DF public domain\uFF09"],["\u94A2\u7434 Piano","Salamander Grand Piano \u2014 Alexander Holm\uFF08CC BY 3.0\uFF09\uFF0Cvia Tone.js audio"],["\u4E50\u5668 Instruments","\u5C3C\u9F99\u5F26\u5409\u4ED6\u3001\u5927\u63D0\u7434\u3001\u5C0F\u63D0\u7434\u91C7\u6837 nylon guitar, cello, violin \u2014 tonejs-instruments, Nicholaus Brosowsky\uFF08CC BY 3.0\uFF09"],["\u97F3\u4E50 Music","\u5168\u90E8\u4E3A\u539F\u521B\u751F\u6210\u97F3\u4E50\uFF0C\u6A21\u4EFF\u5404\u65F6\u671F\u98CE\u683C\uFF0C\u4E0D\u5F15\u7528\u5742\u672C\u9F99\u4E00\u7684\u65CB\u5F8B \xB7 All music is original and generative, written in the manner of each period; no Sakamoto melodies are quoted"]];var Se=class{constructor(t,e){this.app=t,this.meta=e,this.scene=new $i,this.scene.background=new Pt(0),this.camera=new Ue(42,16/9,.05,900),this.par=new et,this.camPos=new T,this.camTgt=new T}addEnv(t,e){return this.envMesh=qh(this.app.assets.tex[t],e),this.envU=this.envMesh.userData.u,this.scene.add(this.envMesh),this.envMesh}useEnvMap(t,e=1){this.scene.environment=this.app.assets.envMap(this.app.renderer,t),this.scene.environmentIntensity=e}setAspect(t){this.camera.aspect=t,this.camera.updateProjectionMatrix(),this._f=null}pose(t){return{pos:new T(0,0,10),tgt:new T}}applyCamera(t,e,n){let{pos:i,tgt:r,fov:a}=this.pose(t,n),o=this.camera,l=o.aspect,c=a||this.baseFov||o.fov;this.baseFov=c;let h=c,u=0,f=0;if(!n.film)if(l<1.2){let d=Math.min(2,Math.sqrt(1.78/l));h=is.radToDeg(2*Math.atan(Math.tan(is.degToRad(c)/2)*d)),f=.42*(this.liftPortrait??1)}else u=.16*(this.shiftWide??1),f=.06;if((h!==this._f||u!==this._sx||f!==this._sy)&&(o.fov=h,o.updateProjectionMatrix(),o.projectionMatrix.elements[8]=-u,o.projectionMatrix.elements[9]=-f,o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),this._f=h,this._sx=u,this._sy=f),!n.film){this.par.x=Vs(this.par.x,n.pointer.x,2.2,e),this.par.y=Vs(this.par.y,n.pointer.y,2.2,e);let d=this.parallax??.6,m=new T().subVectors(r,i).cross(new T(0,1,0)).normalize();i.addScaledVector(m,this.par.x*d).add(new T(0,this.par.y*d*.5,0))}this.camera.position.copy(i),this.camera.lookAt(r)}build(){}update(){}down(){}move(){}up(){}},Kg=new Set([0,2,4,5,7,9,11]),Qg={1:-.12,3:.12,6:-.14,8:0,10:.14};function da({first:s=21,last:t=108,keyW:e=.235,ivory:n=15393488,ebony:i=394758,chaos:r=0,seed:a=1}={}){let o=new Ne,l=[],c=0;for(let F=s;F<=t;F++){let O=F%12;Kg.has(O)?(l.push({m:F,white:!0,x:c*e}),c++):l.push({m:F,white:!1,x:(c-.5+(Qg[O]||0))*e})}let h=c*e;l.forEach(F=>{F.x-=h/2-e/2});let u=new Oe(e*.94,.22,1.5);u.translate(0,-.11,.75);let f=new Oe(e*.55,.24,.95);f.translate(0,.06,.475);let d=new on({color:n,roughness:.3}),m=new on({color:i,roughness:.14}),v=l.filter(F=>F.white),g=l.filter(F=>!F.white),p=new Ps(u,d,v.length),b=new Ps(f,m,g.length);p.userData.keys=v,b.userData.keys=g,o.add(p,b);let S=a,x=()=>(S=S*16807%2147483647,S/2147483647-.5);l.forEach(F=>{F.press=0,F.jy=r*x()*.18,F.jr=r*x()*.12,F.jz=r*x()*.12,F.jt=r*x()*.08});let L=new Map(l.map(F=>[F.m,F])),R=new ie,P=new pn,I=new $e,E=new T,y=new T(1,1,1);function C(){for(let[F,O]of[[p,v],[b,g]])O.forEach((z,Z)=>{I.set(-z.press*.075+z.jr,z.jt,0),P.setFromEuler(I),E.set(z.x,z.jy,-.75+z.jz+(z.white?0:-0)),R.compose(E,P,y),F.setMatrixAt(Z,R)}),F.instanceMatrix.needsUpdate=!0}return C(),{group:o,keys:l,byMidi:L,width:h,wMesh:p,bMesh:b,sync:C,keyAt(F){return!F||F.instanceId==null?null:F.object.userData.keys[F.instanceId]}}}function fa(s,t={}){let n=[];for(let a=0;a<16;a++)n.push(new fe(0,0,-100,0));let i=new Xt({transparent:!1,uniforms:{map:{value:s},time:{value:0},ripples:{value:n},yaw:{value:t.yaw??0},deep:{value:new Pt(...t.deep??[.01,.02,.03])},exposure:{value:t.exposure??1.4},tint:{value:new Pt(...t.tint??[1,1,1])},sat:{value:t.sat??1},waveAmp:{value:t.waveAmp??1},fogCol:{value:new Pt(...t.fog??[0,0,0])},fogFar:{value:t.fogFar??80}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`
      varying vec3 vW; uniform sampler2D map; uniform float time, yaw, exposure, sat, waveAmp, fogFar; uniform vec3 deep, tint, fogCol; uniform vec4 ripples[16];
      // height gradient in one pass (analytic), cheaper than finite differences
      vec2 grad(vec2 p){
        vec2 g = vec2(0.0);
        vec2 k1 = vec2(0.80, 0.60)*1.6;  g += 0.030*cos(dot(p,k1) + time*1.10)*k1;
        vec2 k2 = vec2(-0.50, 0.85)*2.3; g += 0.022*cos(dot(p,k2) + time*1.45)*k2;
        vec2 k3 = vec2(0.95, -0.30)*4.1; g += 0.012*cos(dot(p,k3) + time*2.10)*k3;
        vec2 k4 = vec2(-0.20, -0.98)*7.3; g += 0.007*cos(dot(p,k4) + time*2.90)*k4;
        vec2 k5 = vec2(0.60, -0.80)*13.0; g += 0.004*cos(dot(p,k5) + time*3.70)*k5;
        g *= waveAmp;
        for (int i = 0; i < 16; i++) {
          vec4 r = ripples[i]; float age = time - r.z; if (age < 0.0 || age > 6.0) continue;
          vec2 dv = p - r.xy; float d = length(dv) + 1e-4; float x = d - age*1.6; if (abs(x) > 1.6) continue;
          float env = r.w * 0.06 * exp(-age*0.7) * exp(-x*x*3.0); float ph = d*9.0 - age*14.0;
          float dWd = env * (-6.0*x*sin(ph) + 9.0*cos(ph));
          g += dWd * dv / d;
        }
        return g;
      }
      vec3 sampleEnv(vec3 d, float lod){
        float c = cos(yaw), s = sin(yaw); d = vec3(c*d.x - s*d.z, d.y, s*d.x + c*d.z);
        vec2 uv = vec2(atan(d.z, d.x)*0.15915494 + 0.5, asin(clamp(d.y,-1.0,1.0))*0.31830989 + 0.5);
        return textureLod(map, uv, lod).rgb;
      }
      void main(){
        vec2 g = grad(vW.xz);
        vec3 N = normalize(vec3(-g.x, 1.0, -g.y));
        vec3 V = normalize(cameraPosition - vW);
        vec3 R = reflect(-V, N); R.y = abs(R.y);
        vec3 refl = sampleEnv(R, 1.5);
        float l = dot(refl, vec3(0.2126,0.7152,0.0722)); refl = mix(vec3(l), refl, sat) * tint * exposure;
        refl += pow(max(l - 0.8, 0.0), 2.0) * 2.5 * tint; // let bright sky glints bloom
        float fres = 0.03 + 0.97*pow(1.0 - max(dot(N, V), 0.0), 5.0);
        vec3 col = mix(deep, refl, clamp(fres*1.25, 0.0, 1.0));
        float dist = length(vW - cameraPosition);
        col = mix(col, fogCol, smoothstep(fogFar*0.35, fogFar, dist));
        gl_FragColor = vec4(col, 1.0);
      }`}),r=0;return i.userData.addRipple=(a,o,l,c=1)=>{n[r%16].set(a,o,l,c),r++},i}function tn(s,t,{size:e=.05,color:n=[1,1,1],opacity:i=.6,additive:r=!0}={}){let a=new Float32Array(s*3),o=new Float32Array(s);for(let u=0;u<s;u++){let f=t(u);a.set(f,u*3),o[u]=Math.random()}let l=new Zt;l.setAttribute("position",new ae(a,3)),l.setAttribute("seed",new ae(o,1));let c=new Xt({transparent:!0,depthWrite:!1,blending:r?ce:Yn,uniforms:{time:{value:0},size:{value:e},color:{value:new Pt(...n)},opacity:{value:i},drift:{value:new T(0,.02,0)},boost:{value:0},pxr:{value:1}},vertexShader:`attribute float seed; uniform float time, size, boost, pxr; uniform vec3 drift; varying float vA;
      void main(){ vec3 p = position + drift*time + vec3(sin(time*0.3+seed*40.0), cos(time*0.23+seed*17.0), sin(time*0.19+seed*9.0))*0.15;
        vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
        float tw = 0.55 + 0.45*sin(time*(0.7+seed*1.7) + seed*60.0);
        vA = tw*(1.0+boost*seed); gl_PointSize = size*pxr*(300.0/-mv.z)*(0.6+seed*0.8); }`,fragmentShader:`uniform vec3 color; uniform float opacity; varying float vA;
      void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5, 0.0, length(d)); gl_FragColor = vec4(color*a*opacity*vA, a*opacity*vA); }`}),h=new Kn(l,c);return h.frustumCulled=!1,h}var pa=class extends Se{build(){this.addEnv("dark",{exposure:.22,sat:.5,blur:2.5,tint:[.75,.85,1.1],floorDark:.5,skyDark:.55,yaw:1.2});let t=this.N=1400,e=new Zt;this.wpos=new Float32Array(t*3);for(let r=0;r<t;r++)this.wpos[r*3]=(r/(t-1)-.5)*14;e.setAttribute("position",new ae(this.wpos,3)),this.wave=new mn(e,new Ke({color:new Pt(1.6,1.5,1.35),transparent:!0,opacity:1,blending:ce,depthWrite:!1})),this.wave.position.y=1,this.scene.add(this.wave),this.ghosts=[];for(let r=0;r<3;r++){let a=new mn(e,new Ke({color:new Pt(.5,.62,.9),transparent:!0,opacity:.18/(r+1),blending:ce,depthWrite:!1}));a.position.set(0,1,-.15*(r+1)),a.scale.y=1+.25*(r+1),this.scene.add(a),this.ghosts.push(a)}let n=new Zt().setFromPoints(Array.from({length:257},(r,a)=>{let o=a/256*Math.PI*2;return new T(Math.cos(o),0,Math.sin(o))}));this.rings=[];for(let r=0;r<14;r++){let a=new mn(n,new Ke({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1}));a.position.y=-.6,this.scene.add(a),this.rings.push(a)}let i=new Qn(80,80,2240576,1120288);i.position.y=-.62,i.material.transparent=!0,i.material.opacity=.25,this.scene.add(i),this.dust=tn(900,()=>[(Math.random()-.5)*30,Math.random()*8-1,(Math.random()-.5)*30],{size:.035,color:[.8,.85,1],opacity:.35}),this.scene.add(this.dust),this.tables=new Map}sampleFor(t){let e=this.app.samples?.piano;if(!e)return null;let n=e[0];for(let i of e)Math.abs(i.midi-t)<Math.abs(n.midi-t)&&(n=i);return n}rms(t){if(this.tables.has(t))return this.tables.get(t);let e=t.buf.getChannelData(0),n=1024,i=new Float32Array(Math.ceil(e.length/n));for(let r=0;r<i.length;r++){let a=0;for(let o=0;o<n;o++){let l=e[r*n+o]||0;a+=l*l}i[r]=Math.sqrt(a/n)}return this.tables.set(t,i),i}pose(t,e){let n=10.5-Math.min(t,30)*.06;return e&&e.film?{pos:new T(Math.sin(t*.05)*.8,.95,n+1.5),tgt:new T(0,2.75,0),fov:42}:{pos:new T(Math.sin(t*.05)*.8,1.7,n),tgt:new T(0,.5,0)}}update(t,e,n){let i=n.ev.recent(n.abs,14,["piano","bass","melody"]),r=this.N,a=this.wpos;for(let u=0;u<r;u++)a[u*3+1]=0;let o=0,l=null;for(let u of i){let f=this.sampleFor(u.midi);if(!f)continue;let d=Math.pow(2,((u.midi-f.midi)*100+(u.detune||0))/1200),m=f.buf.sampleRate,v=f.buf.getChannelData(0),g=n.abs-u.t;if(g<0)continue;let p=g*d*m,b=.03*m*d,S=(u.vel??.6)*3.2,x=this.rms(f),L=Math.floor(p/1024);o+=(x[L]||0)*(u.vel??.6);for(let R=0;R<r;R++){let P=Math.floor(p+R/r*b),I=Math.sin(Math.PI*R/(r-1));a[R*3+1]+=(v[P]||0)*S*(.35+.65*I)}l=u}this.wave.geometry.attributes.position.needsUpdate=!0;let c=Qt(o*6,0,1.5);this.wave.material.color.setRGB(.5+c*1.4,.5+c*1.3,.5+c*1.15),this.rings.forEach(u=>u.material.opacity=0),i.slice(-this.rings.length).forEach((u,f)=>{let d=n.abs-u.t,m=this.rings[f];m.scale.setScalar(.3+d*1.6),m.material.opacity=Qt(Math.exp(-d*.32)*(u.vel??.6)*1.4*Math.min(1,d*8),0,1)}),this.dust.material.uniforms.time.value=t,this.envU.exposure.value=(n.film?.13:.18)+c*.12;let h=[];if(l){let u=n.abs-l.t;h.push(`${be(l.midi)}  ${Xe(l.midi).toFixed(2)} Hz`,`t + ${u.toFixed(2)} s`,`${(20*Math.log10(Math.max(o,1e-5)/.08)).toFixed(1)} dB`)}n.hud(h)}down(t,e){e.play("tap",t.x)}};var ma=class extends Se{build(){this.addEnv("dawn",{exposure:.62,sat:.8,blur:2.2,tint:[1,.92,.95],floorDark:.35,yaw:2.4}),this.useEnvMap("dawn",1),this.parallax=.9;let t=this.kb=da({});this.scene.add(t.group);let e=t.width/2+.7,n=new ji;n.moveTo(-e,.9),n.lineTo(e,.9),n.lineTo(e,7.5),n.bezierCurveTo(e,13,1.5,15,-.5,20.5),n.bezierCurveTo(-1.6,23.5,-3.8,25.2,-e,25.2),n.lineTo(-e,.9);let i=new on({color:394758,roughness:.07,metalness:0,envMapIntensity:1.9}),r=new on({color:2759184,roughness:.55,envMapIntensity:.5}),a=n.clone(),o=new Ki,l=n.getPoints(80),c=l.reduce((C,F)=>C+F.x,0)/l.length,h=l.reduce((C,F)=>C+F.y,0)/l.length;l.slice().reverse().forEach((C,F)=>{let O=new et(Tt(C.x,c,.035),Tt(C.y,h,.03));F===0?o.moveTo(O.x,O.y):o.lineTo(O.x,O.y)}),a.holes.push(o);let u=new Dt(new Fs(a,{depth:3,bevelEnabled:!0,bevelSize:.06,bevelThickness:.06,bevelSegments:2,curveSegments:40}),i);u.rotation.x=-Math.PI/2,u.position.y=.15-3,this.scene.add(u);let f=new Dt(new Yr(n,60),r);f.rotation.x=-Math.PI/2,f.position.y=-1.4,this.scene.add(f);let d=new Dt(new Fs(n,{depth:.12,bevelEnabled:!0,bevelSize:.04,bevelThickness:.03,bevelSegments:2,curveSegments:60}),i);d.rotation.x=-Math.PI/2,d.position.x=e;let m=new Ne;m.position.set(-e,.24,0),m.add(d),m.rotation.z=.62,this.scene.add(m);let v=new Dt(new Oe(t.width+1.6,.55,.35),i);v.position.set(0,-.35,.95),this.scene.add(v);let g=new Dt(new Oe(t.width+.4,.7,.5),i);g.position.set(0,.2,-1.05),this.scene.add(g);let p=88,b=24,S=[],x=[],L=[];this.strX=[],this.strLen=[];for(let C=0;C<p;C++){let O=t.keys[C].x*.96,z=4.2+18.5*Math.pow(1-C/87,1.25);this.strX.push(O),this.strLen.push(z);let Z=-1.6,V=Z-z,j=O-(1-C/87)*1.6;for(let G=0;G<b;G++)for(let at of[G/b,(G+1)/b])S.push(Tt(O,j,at),-.25,Tt(Z,V,at)),x.push(at),L.push(C)}let R=new Zt;R.setAttribute("position",new Ft(S,3)),R.setAttribute("aU",new Ft(x,1)),R.setAttribute("aI",new Ft(L,1)),this.ampData=new Float32Array(512),this.ampTex=new Cs(this.ampData,128,1,Ge,Ze),this.ampTex.needsUpdate=!0,this.strMat=new Xt({transparent:!0,depthWrite:!1,blending:ce,uniforms:{amp:{value:this.ampTex},time:{value:0}},vertexShader:`attribute float aU, aI; uniform sampler2D amp; uniform float time; varying float vA; varying float vU;
        void main(){ float a = texture2D(amp, vec2((aI+0.5)/128.0, 0.5)).r; vec3 p = position;
          float f = 30.0 + aI*2.2; p.y += a*0.09*sin(3.14159*aU)*sin(time*f + aI);
          vA = a; vU = aU; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,fragmentShader:`varying float vA; varying float vU;
        void main(){ vec3 steel = vec3(0.32, 0.30, 0.28); vec3 hot = vec3(2.4, 1.6, 0.85);
          float edge = smoothstep(0.0, 0.04, vU)*smoothstep(1.0, 0.96, vU);
          gl_FragColor = vec4((steel*0.35 + hot*vA)*edge, 1.0); }`}),this.strings=new Un(R,this.strMat),this.strings.frustumCulled=!1,this.scene.add(this.strings);let P=new Dt(new Oe(t.width,.12,.3),new on({color:5904146,roughness:.9}));P.position.set(0,-.12,-1.75),this.scene.add(P);let I=160,E=new Zt;this.mpos=new Float32Array(I*3),this.ma=new Float32Array(I),E.setAttribute("position",new ae(this.mpos,3)),E.setAttribute("aA",new ae(this.ma,1)),this.motes=new Kn(E,new Xt({transparent:!0,depthWrite:!1,blending:ce,uniforms:{pxr:{value:1}},vertexShader:"attribute float aA; varying float vA; uniform float pxr; void main(){ vA=aA; vec4 mv=modelViewMatrix*vec4(position,1.0); gl_Position=projectionMatrix*mv; gl_PointSize=pxr*(10.0+40.0*aA)*(6.0/-mv.z); }",fragmentShader:"varying float vA; void main(){ float d=length(gl_PointCoord-0.5); float a=smoothstep(0.5,0.0,d); gl_FragColor=vec4(vec3(1.6,1.25,0.9)*a*vA, a*vA); }"})),this.motes.frustumCulled=!1,this.scene.add(this.motes),this.MN=I;let y=new ns(16770768,1.2);y.position.set(6,12,8),this.scene.add(y),this.scene.add(new Kr(4210768,.4))}pose(t,e){if(e&&e.film){let i=ye(0,1,t/(e.dur||24)),r=new T(Tt(3.5,9.5,i),Tt(1.6,7.8,i),Tt(4.2,7,i)),a=new T(Tt(.5,-1.5,i),Tt(.1,-.6,i),Tt(-.2,-7,i));return{pos:r,tgt:a,fov:Tt(30,42,i)}}let n=.35+Math.sin(t*.04)*.25;return{pos:new T(Math.sin(n)*17+2,11.5,Math.cos(n)*14+2),tgt:new T(-.5,-.8,-6.5),fov:40}}update(t,e,n){let i=this.kb,r=n.ev.recent(n.abs,10,["bass","melody","piano"]);for(let c of i.keys)c.press=0;let a=new Float32Array(88),o=null;for(let c of r){let h=i.byMidi.get(Math.round(c.midi));if(!h)continue;let u=n.abs-c.t;if(u<0)continue;let f=Math.min(c.dur??1,1.6),d=Qt(u/.03)*(1-ye(f,f+.18,u));h.press=Math.max(h.press,d*(.6+.6*(c.vel??.6)));let m=Math.round(c.midi)-21,v=.7+3.2*(1-m/87);a[m]+=(c.vel??.6)*Math.exp(-u/v)*1.3,o=c}i.sync();for(let c=0;c<88;c++)this.ampData[c*4]=Math.min(a[c],2);this.ampTex.needsUpdate=!0,this.strMat.uniforms.time.value=t;let l=r.filter(c=>c.tag==="melody"||c.tag==="piano");for(let c=0;c<this.MN;c++)this.ma[c]=0;l.slice(-this.MN/8).forEach((c,h)=>{let u=Math.round(c.midi)-21;if(u<0||u>87)return;let f=n.abs-c.t;for(let d=0;d<8;d++){let m=h*8+d,v=(c.t*13.7+d*7.1)%1;this.mpos[m*3]=this.strX[u]+Math.sin(v*40+f)*.4,this.mpos[m*3+1]=-.2+f*(.6+v*.8),this.mpos[m*3+2]=-1.6-this.strLen[u]*(.15+v*.35),this.ma[m]=Math.exp(-f*.5)*(c.vel??.5)*Qt(f*4)}}),this.motes.geometry.attributes.position.needsUpdate=!0,this.motes.geometry.attributes.aA.needsUpdate=!0,this.motes.material.uniforms.pxr.value=n.pxr,n.hud(o?[`${be(o.midi)}  ${Xe(o.midi).toFixed(1)} Hz`,"\u2669 = 62   3/4","D\u266D \xB7 \u5E73\u884C\u548C\u5F26 planing"]:["\u2669 = 62   3/4"])}down(t,e){let n=e.raycast(t,[this.kb.wMesh,this.kb.bMesh]);if(n){let o=this.kb.keyAt(n);o&&e.play("key",o.m);return}let i=Math.floor((t.x*.5+.5)*52),r=this.kb.keys.filter(o=>this.kb.byMidi.get(o.m)&&[0,2,4,5,7,9,11].includes(o.m%12)),a=r[Qt(i,0,r.length-1)];a&&e.play("key",a.m)}};var ga=class extends Se{build(t){this.parallax=1.2;let e=this.app.assets.tex.earthNight,n=new Xt({uniforms:{map:{value:e},pulse:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vN=normalize(mat3(modelMatrix)*normal); vV=normalize(cameraPosition-w.xyz); gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform sampler2D map; uniform float pulse, time; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main(){ vec3 c = texture2D(map, vUv).rgb; float l = dot(c, vec3(0.3,0.5,0.2));
          float lights = smoothstep(0.012, 0.13, l);
          vec3 base = c*vec3(0.5,0.6,0.9)*1.6;
          vec3 glow = vec3(1.0,0.62,0.28)*lights*(2.2+pulse*2.5);
          float fr = pow(1.0-max(dot(vN,vV),0.0), 3.0);
          vec3 atm = mix(vec3(0.15,0.3,0.9), vec3(1.0,0.25,0.15), 0.25+0.25*sin(time*0.2))*fr*1.6;
          gl_FragColor = vec4(base+glow+atm, 1.0); }`});this.globe=new Dt(new ts(3.2,96,64),n);let i=is.degToRad(139.7),r=Math.cos(i),a=-Math.sin(i);this.globeYaw=Math.atan2(-r,a),this.globePivot=new Ne,this.globePivot.add(this.globe),this.globePivot.position.set(-3.5,6.8,-13),this.globe.rotation.y=this.globeYaw,this.globePivot.rotation.x=is.degToRad(30),this.scene.add(this.globePivot),this.stars=tn(1500,()=>{let p=new T().randomDirection().multiplyScalar(120+Math.random()*60);return[p.x,Math.abs(p.y)*.8+5,p.z]},{size:.5,color:[.85,.9,1],opacity:.5}),this.scene.add(this.stars);let o=this.app.assets.pixels("japan"),l=o.w,c=o.h,h=[],u=[133.5,117.5];for(let p=0;p<c;p++)for(let b=0;b<l;b++){let S=o.data[(p*l+b)*4]/255;if(S<.16)continue;let x=(b/l-.5)*11,L=(p/c-.5)*9.8,R=Math.hypot(b-u[0],p-u[1])/100;h.push(x,L,S,R)}this.count=h.length/4;let f=new Oe(11/l*.82,1,9.8/c*.82);f.translate(0,.5,0);let d=new Qr;d.index=f.index,d.attributes.position=f.attributes.position,d.attributes.normal=f.attributes.normal,d.setAttribute("aData",new Ji(new Float32Array(h),4)),d.instanceCount=this.count,this.kicks=Array(6).fill(-99),this.cityMat=new Xt({uniforms:{kicks:{value:this.kicks.slice()},time:{value:0},snare:{value:0},arp:{value:0},hat:{value:0},lift:{value:1}},vertexShader:`attribute vec4 aData; uniform float kicks[6]; uniform float time, snare, arp, hat, lift; varying float vL; varying float vW; varying float vY;
        void main(){ float l = aData.z, d = aData.w; float wave = 0.0;
          for (int i=0;i<6;i++){ float age = time - kicks[i]; if (age < 0.0 || age > 3.0) continue; float front = age*3.2; wave += exp(-pow((d - front)*3.0, 2.0)) * exp(-age*1.1); }
          float h = (0.04 + l*l*1.6) * lift * (0.35 + 0.65*clamp(wave + snare*0.35*l + hat*0.12, 0.0, 2.0)) + arp*l*0.25;
          vec3 p = position; p.y *= h; p.xz += aData.xy; vL = l; vW = wave; vY = position.y;
          gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,fragmentShader:`varying float vL; varying float vW; varying float vY;
        void main(){ vec3 sodium = vec3(1.0,0.5,0.16); vec3 white = vec3(1.0,0.92,0.82); vec3 red = vec3(1.0,0.12,0.08);
          vec3 c = mix(sodium, white, smoothstep(0.5,1.0,vL)) * (0.5 + vL*1.6);
          c = mix(c, red*2.4, clamp(vW*0.8,0.0,1.0)*0.75);
          c *= 0.35 + 0.65*vY;
          gl_FragColor = vec4(c, 1.0); }`}),this.city=new Dt(d,this.cityMat),this.city.frustumCulled=!1,this.scene.add(this.city);let m=new Dt(new ve(12,10.8),new Je({color:460812}));m.rotation.x=-Math.PI/2,m.position.y=-.01,this.scene.add(m);let v=new Qn(120,120,5904916,2755850);v.position.y=-.03,this.scene.add(v),this.steps=[];for(let p=0;p<16;p++){let b=-Math.PI/2+p/16*Math.PI*2,S=new Dt(new Oe(.9,.25,.45),new Je({color:16777215}));S.position.set(Math.cos(b)*7.6,.12,Math.sin(b)*7.6),S.rotation.y=-b,S.userData.step=p,this.scene.add(S),this.steps.push(S)}this.mask=[1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1];let g=new Dt(new qr(7.05,7.08,128),new Je({color:8396824,side:we}));g.rotation.x=-Math.PI/2,g.position.y=.01,this.scene.add(g)}pose(t,e){if(e&&e.film){let i=e.dur||22,r=ye(0,1,t/i),a=Tt(-.25,.55,r),o=new T(Math.sin(a)*Tt(6,13,r),Tt(7.5,6.2,r),Tt(-3.5,0,r)+Math.cos(a)*Tt(6,13,r)),l=new T(Tt(0,.6,r),Tt(4.2,.3,ye(.1,.6,r)),Tt(-9,-.5,ye(.05,.6,r)));return{pos:o,tgt:l,fov:Tt(38,44,r)}}let n=t*.05+.3;return{pos:new T(Math.sin(n)*14,8.5,Math.cos(n)*14),tgt:new T(0,1.2,-1.5),fov:44}}update(t,e,n){let i=n.ev.recent(n.abs,3.2,"kick").slice(-6),r=this.cityMat.uniforms.kicks.value;for(let f=0;f<6;f++)r[f]=i[f]?i[f].t-n.abs+t:-99;let a=this.cityMat.uniforms;if(a.time.value=t,a.snare.value=n.ev.pulse(n.abs,.12,"snare"),a.hat.value=n.ev.pulse(n.abs,.05,"hat"),a.arp.value=n.ev.pulse(n.abs,.09,"arp")*.5+n.ev.pulse(n.abs,.25,"lead")*.6,a.lift.value=n.film?ye(0,6,t):1,this.globe.material.uniforms.pulse.value=n.ev.pulse(n.abs,.2,"kick")*.6,this.globe.material.uniforms.time.value=t,this.globe.rotation.y=this.globeYaw+Math.sin(t*.05)*.12,!n.film){let f=new T(0,1.2,-1.5).sub(this.camera.position).setY(0).normalize();this.globePivot.position.set(f.x*21-f.z*5,3.2,f.z*21+f.x*5)}this.stars.material.uniforms.time.value=t;let o=n.composer?.mask||this.mask,l=n.ev.last(n.abs,"arp"),c=l&&n.abs-l.t<.14?l.step:-1,h=n.ev.last(n.abs,"hat");this.steps.forEach((f,d)=>{let m=o[d],v=d===c?1:0;f.material.color.setRGB(m?.5+v*2.6:.06,m?.48+v*.25:.06,m?.46+v*.15:.08),f.scale.y=1+v*2.5});let u=n.ev.last(n.abs,"bass");n.hud(["116 BPM   4/4   16 steps",u?`bass ${be(u.midi)}`:"",`${this.count} \u5149\u70B9 light points \xB7 35.7\xB0N 139.7\xB0E`])}down(t,e){let n=e.raycast(t,this.steps);if(n){e.play("toggle",n.object.userData.step);return}this.dragY=t.y}move(t,e){this.dragY!=null&&e.composer&&(e.composer.cut=300+Math.pow(Qt(t.y*.5+.5),2)*6e3)}up(){this.dragY=null}};var vn=["canal","city","forest","sunset","dawn","night","desert","dark"];function jg(s){let n=document.createElement("canvas");n.width=384*vn.length,n.height=280;let i=n.getContext("2d");vn.forEach((a,o)=>{let l=s.images[a],c=l.width,h=l.height,u=c*(.18+o*.11%.5),f=h*.3,d=c*.2,m=d*280/384;i.drawImage(l,u,f,d,Math.min(m,h*.5),o*384,0,384,280)});let r=new kr(n);return r.colorSpace=Pe,r.anisotropy=4,r}var tv=`
  uniform sampler2D atlas; uniform float time, scroll, nFrames, warm, glow; varying vec2 vUv; varying float vFade; varying float vSY;
  float h(float x){ return fract(sin(x*91.7)*43758.5); }
  void main(){
    float u = vUv.x + scroll; float fi = floor(u); float fu = fract(u); float v = vUv.y;
    vec3 base = vec3(0.012, 0.008, 0.006);
    float inImg = step(0.14, v)*step(v, 0.86)*step(0.03, fu)*step(fu, 0.97);
    float idx = mod(fi, nFrames);
    vec2 iuv = vec2((idx + (fu-0.03)/0.94)/nFrames, (v-0.14)/0.72);
    vec3 img = texture2D(atlas, iuv).rgb;
    float l = dot(img, vec3(0.3,0.59,0.11));
    img = mix(vec3(l), img, 0.55) * mix(vec3(1.0), vec3(1.15,0.95,0.7), warm);
    img *= 0.75 + 0.5*smoothstep(0.0, 0.25, min(fu, 1.0-fu));
    float scratch = step(0.9965, h(floor(fu*300.0) + fi*7.0)) * 0.4;
    img += scratch;
    // perforations: four per frame on each edge
    float pu = fract(fu*4.0); float edge = step(v, 0.11) + step(0.89, v);
    float pv = abs(fract(v*9.0)-0.5);
    float hole = edge * step(0.3, pu) * step(pu, 0.7) * step(abs(v - (v < 0.5 ? 0.055 : 0.945)), 0.03);
    vec3 col = mix(base, img*glow, inImg) + hole*vec3(1.2, 1.05, 0.85)*glow*0.3;
    float a = (0.88 + 0.12*inImg) * vFade;
    // keep the lower band calm so subtitles and captions stay readable
    col *= mix(0.35, 1.0, smoothstep(-0.95, -0.42, vSY));
    gl_FragColor = vec4(col*vFade, 1.0);
  }`;function ev(s,t,e,n){let i=[],r=[],a=[],o=s.computeFrenetFrames(e,!1),l=s.getLength();for(let h=0;h<=e;h++){let u=s.getPointAt(h/e),f=o.binormals[h];for(let d of[-.5,.5])i.push(u.x+f.x*t*d,u.y+f.y*t*d,u.z+f.z*t*d),r.push(h/e*l/(t*.73),d+.5);if(h<e){let d=h*2;a.push(d,d+1,d+2,d+1,d+3,d+2)}}let c=new Zt;return c.setAttribute("position",new Ft(i,3)),c.setAttribute("uv",new Ft(r,2)),c.setIndex(a),c.computeVertexNormals(),new Dt(c,n)}var va=class extends Se{build(){this.addEnv("desert",{exposure:.5,sat:.7,blur:2.2,tint:[1.12,.94,.74],floorDark:.25,yaw:.9,contrast:1.1}),this.parallax=1,this.atlas=jg(this.app.assets),this.ribbons=[],[[[-14,1.5,4],[-6,3.5,0],[0,2.2,-2],[6,4.5,-5],[14,3,-9]],[[-12,6.5,-8],[-4,5,-3],[3,6.8,1],[9,5.2,3],[16,7,0]],[[-16,-.5,-4],[-7,.8,-7],[1,-.2,-10],[8,1.2,-6],[15,.4,-2]]].forEach((i,r)=>{let a=new Ls(i.map(c=>new T(...c)),!1,"centripetal"),o=new Xt({side:we,uniforms:{atlas:{value:this.atlas},time:{value:0},scroll:{value:0},nFrames:{value:vn.length},warm:{value:.6+r*.15},glow:{value:.95}},vertexShader:"varying vec2 vUv; varying float vFade; varying float vSY; void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.0); vFade = 1.0 - smoothstep(9.0, 17.0, abs(w.x)); vec4 cp=projectionMatrix*viewMatrix*w; vSY = cp.y/cp.w; gl_Position=cp; }",fragmentShader:tv}),l=ev(a,1.9,260,o);l.userData.k=r,l.userData.len=a.getLength(),this.scene.add(l),this.ribbons.push(l)}),this.screenMat=new Xt({uniforms:{atlas:{value:this.atlas},a:{value:0},b:{value:1},mixv:{value:0},flick:{value:1},n:{value:vn.length}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D atlas; uniform float a, b, mixv, flick, n; varying vec2 vUv;
        void main(){ vec3 ca = texture2D(atlas, vec2((a+vUv.x)/n, vUv.y)).rgb; vec3 cb = texture2D(atlas, vec2((b+vUv.x)/n, vUv.y)).rgb;
          vec3 c = mix(ca, cb, mixv); float l = dot(c, vec3(0.3,0.59,0.11)); c = mix(vec3(l), c, 0.75)*vec3(1.08,0.98,0.86);
          vec2 d = vUv-0.5; c *= 1.0 - dot(d,d)*1.4; gl_FragColor = vec4(c*flick*0.62, 1.0); }`}),this.screen=new Dt(new ve(16,11.6),this.screenMat),this.screen.position.set(0,6,-26),this.scene.add(this.screen);let e=new Xr(7.5,.15,44,48,1,!0);e.rotateX(Math.PI/2),e.translate(0,0,0),this.beamMat=new Xt({transparent:!0,depthWrite:!1,blending:ce,side:we,uniforms:{time:{value:0},power:{value:.12}},vertexShader:"varying vec3 vN; varying vec3 vV; varying float vZ; varying vec3 vP; void main(){ vec4 w=modelMatrix*vec4(position,1.0); vN=normalize(mat3(modelMatrix)*normal); vV=normalize(cameraPosition-w.xyz); vZ=uv.y; vP=position; gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float time, power; varying vec3 vN; varying vec3 vV; varying float vZ; varying vec3 vP;
        float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
        void main(){ float f = pow(abs(dot(vN, vV)), 1.6); float s = 0.85 + 0.15*sin(vP.z*0.9 + time*1.7)*sin(atan(vP.y,vP.x)*7.0 + time);
          gl_FragColor = vec4(vec3(1.0,0.86,0.62)*f*power*s*(0.4+0.6*vZ), 1.0); }`}),this.beam=new Dt(e,this.beamMat),this.beam.position.set(0,6,-4),this.beam.lookAt(0,6,-26),this.scene.add(this.beam),this.dust=tn(1600,()=>{let i=-24+Math.random()*40,r=Math.random()*(7.5*(1-(i+26)/44)),a=Math.random()*6.28;return[Math.cos(a)*r,6+Math.sin(a)*r,i]},{size:.06,color:[1,.85,.6],opacity:.45}),this.scene.add(this.dust);let n=new ve(36,.5,300,6);this.silkMat=new Xt({side:we,uniforms:{time:{value:0},swell:{value:0}},vertexShader:`uniform float time, swell; varying vec3 vN; varying vec3 vW; varying vec2 vUv;
        vec3 P(vec2 q){ float x=q.x; float y=q.y + sin(x*0.35+time*0.6)*1.2 + sin(x*0.13-time*0.3)*0.8*(1.0+swell); float z=sin(x*0.22+time*0.45)*2.5 + q.y*sin(x*0.5+time)*0.6; return vec3(x, y, z); }
        void main(){ vUv=uv; vec3 p=P(position.xy); vec3 px=P(position.xy+vec2(0.05,0.0)); vec3 py=P(position.xy+vec2(0.0,0.05));
          vN=normalize(cross(px-p, py-p)); vec4 w=modelMatrix*vec4(p,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,fragmentShader:`varying vec3 vN; varying vec3 vW; varying vec2 vUv;
        void main(){ vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW); if(dot(N,V)<0.0) N=-N; vec3 L=normalize(vec3(0.3,0.6,0.7));
          float sheen = pow(1.0-abs(dot(N,V)), 2.0); float d = max(dot(N,L),0.0); float spec = pow(max(dot(reflect(-L,N),V),0.0), 24.0);
          vec3 red = vec3(0.3, 0.02, 0.016); vec3 c = red*(0.25+0.9*d) + vec3(1.0,0.35,0.25)*sheen*0.5 + vec3(1.0,0.75,0.6)*spec*0.6;
          float edge = smoothstep(0.0,0.08,vUv.y)*smoothstep(1.0,0.92,vUv.y); float fade = 1.0 - smoothstep(10.0, 18.0, abs(vW.x));
          gl_FragColor = vec4(c*edge*fade, 1.0); }`}),this.silk=new Dt(n,this.silkMat),this.silk.position.set(0,8.8,-12),this.scene.add(this.silk),this.scrollV=0,this.scrollX=0}pose(t,e){if(e&&e.film){let i=ye(0,1,t/(e.dur||26));return{pos:new T(Tt(-6,4,i),Tt(2.5,4.8,i),Tt(14,5,i)),tgt:new T(Tt(-1,.5,i),Tt(3.2,5,i),Tt(-4,-18,i)),fov:Tt(46,38,i)}}let n=Math.sin(t*.06)*.35;return{pos:new T(Math.sin(n)*15,4.2,Math.cos(n)*14),tgt:new T(0,3.5,-8),fov:46}}update(t,e,n){let i=n.ev.recent(n.abs,60,"melody"),r=i.length,a=i[r-1],o=a?n.abs-a.t:9,l=this.screenMat.uniforms;l.a.value=(r+vn.length-1)%vn.length,l.b.value=r%vn.length,l.mixv.value=Qt(o/.35);let c=.94+.06*Math.sin(t*2*Math.PI*24),h=n.ev.pulse(n.abs,1.5,"strings");l.flick.value=c*(.85+.25*Qt(h*.3)),this.beamMat.uniforms.time.value=t,this.beamMat.uniforms.power.value=.09+.05*Qt(h*.25)+.05*Math.exp(-o*2),this.scrollV=Tt(this.scrollV,0,1-Math.exp(-e*1.5)),this.scrollX+=e*(.12+this.scrollV),this.ribbons.forEach((f,d)=>{f.material.uniforms.scroll.value=this.scrollX*(d%2?-1:1)*(.8+d*.2)+d*3.3,f.material.uniforms.time.value=t}),this.silkMat.uniforms.time.value=t,this.silkMat.uniforms.swell.value=Qt(h*.15),this.dust.material.uniforms.time.value=t;let u=n.ev.last(n.abs,"cello");n.hud(["\u2669 = 66   3/4   D \u5C0F\u8C03\u4E94\u58F0 minor pentatonic",a?`melody ${be(a.midi)}`:"",u?`cello ${be(u.midi)}`:"","24 fps"])}down(t,e){this.drag={x:t.x,moved:0};let n=e.raycast(t,this.ribbons);if(n&&n.uv){let i=n.object,r=n.uv.x+i.material.uniforms.scroll.value,a=(Math.floor(r)%vn.length+vn.length)%vn.length;e.play("phrase",a)}}move(t){this.drag&&(this.scrollV+=(t.x-this.drag.x)*6,this.drag.x=t.x)}up(){this.drag=null}};var nv=[40,45,50,55,59,64],xa=class extends Se{build(){this.addEnv("sunset",{exposure:.34,sat:.95,blur:1.6,tint:[1.05,.95,.9],floorDark:.7,yaw:3.55}),this.parallax=.7,this.waterMat=fa(this.app.assets.tex.sunset,{yaw:3.55,exposure:.5,deep:[.012,.02,.03],tint:[1.05,.95,.9],fog:[.25,.2,.2],fogFar:140});let e=new Dt(new ve(400,400),this.waterMat);e.rotation.x=-Math.PI/2,this.scene.add(e),this.water=e,this.strings=[];for(let n=0;n<6;n++){let i=new ve(22,.016+(5-n)*.004,220,1),r=new Xt({transparent:!0,depthWrite:!1,blending:ce,side:we,uniforms:{amp:{value:0},time:{value:0},f:{value:9+n*3.1},glow:{value:0}},vertexShader:"uniform float amp, time, f; varying float vU; void main(){ vec3 p=position; float u=(p.x+11.0)/22.0; vU=u; p.y += amp*0.22*sin(3.14159*u)*sin(time*f*6.0) + amp*0.05*sin(6.2832*u*3.0)*sin(time*f*13.0); gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0); }",fragmentShader:"uniform float glow; varying float vU; void main(){ float e = smoothstep(0.0,0.08,vU)*smoothstep(1.0,0.92,vU); vec3 c = mix(vec3(0.55,0.5,0.45), vec3(2.2,1.6,1.1), clamp(glow,0.0,1.0)); gl_FragColor = vec4(c*e*(0.35+glow*1.6), 1.0); }"}),a=new Dt(i,r);a.position.set(0,1.25+n*.17,3.2-n*.02),a.userData.s=n,this.scene.add(a),this.strings.push(a)}this.roseMat=new Xt({transparent:!0,depthWrite:!1,blending:ce,uniforms:{time:{value:0},glow:{value:0}},vertexShader:"varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float time, glow; varying vec2 vP;
        void main(){ float r = length(vP); float a = atan(vP.y, vP.x);
          float band = smoothstep(4.0,4.05,r)*smoothstep(5.6,5.55,r);
          float rings = 0.5+0.5*cos(r*40.0); float tiles = step(0.5, fract(a*48.0/6.2832 + floor(r*6.0)*0.5));
          float pat = mix(rings, tiles, step(4.5, r)*step(r, 5.1));
          float inner = smoothstep(3.95,4.0,r)*smoothstep(4.1,4.05,r) + smoothstep(5.55,5.6,r)*smoothstep(5.7,5.65,r);
          vec3 c = vec3(1.0,0.72,0.45)*(band*pat*0.35 + inner*1.2)*(0.6+glow);
          gl_FragColor = vec4(c, 1.0); }`}),this.rose=new Dt(new Qi(6,128),this.roseMat),this.rose.position.set(0,4.2,-38),this.scene.add(this.rose),this.motes=tn(500,()=>[(Math.random()-.5)*40,.3+Math.random()*6,-30+Math.random()*34],{size:.05,color:[1,.8,.6],opacity:.35}),this.scene.add(this.motes),this.lastRipple=-1}pose(t,e){let n=Math.sin(t*.7)*.05;if(e&&e.film){let i=ye(0,1,t/(e.dur||24));return{pos:new T(Tt(-2.5,1.5,i),Tt(1.2,2.6,i)+n,Tt(9.5,7.5,i)),tgt:new T(Tt(.5,0,i),Tt(1.8,2.6,i),-20),fov:Tt(34,40,i)}}return{pos:new T(Math.sin(t*.05)*1.5,2+n,8.5),tgt:new T(0,2,-20),fov:40}}update(t,e,n){let i=this.waterMat.uniforms;i.time.value=t;let r=n.ev.recent(n.abs,4,["guitar","bass"]),a=[0,0,0,0,0,0];for(let u of r){let f=0;for(let m=0;m<6;m++)u.midi>=nv[m]-1&&(f=m);let d=n.abs-u.t;d<0||(a[f]+=(u.vel??.5)*Math.exp(-d*2.2)*Qt(d*40))}this.strings.forEach((u,f)=>{u.material.uniforms.amp.value=Math.min(a[f],1.6),u.material.uniforms.glow.value=Math.min(a[f]*1.4,1.2),u.material.uniforms.time.value=t});let o=n.ev.recent(n.abs,.6,["bass","guitar"]).filter(u=>u.tag==="bass"||u.user);for(let u of o)if(u.t>this.lastRipple){this.lastRipple=u.t;let f=u.px??(Fn(u.t*3.1)-.5)*10,d=u.pz??-2-Fn(u.t*7.7)*10;this.waterMat.userData.addRipple(f,d,u.t-n.abs+t,u.user?1.4:.8)}let l=n.ev.pulse(n.abs,1.2,"cello");this.roseMat.uniforms.glow.value=Qt(l*.6)+n.ev.pulse(n.abs,.4,"melody")*.4,this.motes.material.uniforms.time.value=t;let c=n.ev.last(n.abs,"guitar"),h=n.ev.last(n.abs,"cello");n.hud(["\u2669 = 132   bossa nova",c?`guitar ${be(c.midi)}`:"",h?`cello ${be(h.midi)}`:"","22.9\xB0S 43.2\xB0W"])}stringY(){return this.strings.map(t=>t.position.clone().project(this.camera).y)}down(t,e){this.prev={x:t.x,y:t.y};let n=this.stringY(),i=Math.min(...n)-.08,r=Math.max(...n)+.08;if(t.y<i||t.y>r){let a=e.raycast(t,[this.water]);a&&e.play("pluck",t.x,{px:a.point.x,pz:a.point.z})}}move(t,e){if(!this.prev)return;let n=this.stringY(),i=t.y<this.prev.y?[5,4,3,2,1,0]:[0,1,2,3,4,5];for(let r of i)(this.prev.y-n[r])*(t.y-n[r])<0&&e.play("string",r);this.prev={x:t.x,y:t.y}}up(){this.prev=null}};function iv(s,t=180,e=90){let n=s.getChannelData(0),i=s.sampleRate,r=1024,a=Math.floor(Math.min(n.length-r,i*7)/t),o=new Float32Array(t*e),l=60,c=9e3,h=Array.from({length:e},(d,m)=>l*Math.pow(c/l,m/(e-1))),u=new Float32Array(r);for(let d=0;d<r;d++)u[d]=.5-.5*Math.cos(2*Math.PI*d/(r-1));for(let d=0;d<t;d++){let m=d*a;for(let v=0;v<e;v++){let g=2*Math.PI*h[v]/i,p=0,b=0,S=Math.cos(g),x=Math.sin(g),L=1,R=0;for(let P=0;P<r;P++){let I=n[m+P]*u[P];p+=I*L,b-=I*R;let E=L*S-R*x;R=L*x+R*S,L=E}o[d*e+v]=Math.sqrt(p*p+b*b)}}let f=0;for(let d of o)f=Math.max(f,d);for(let d=0;d<o.length;d++)o[d]=Math.max(0,(20*Math.log10(o[d]/f+1e-6)+72)/72);return{out:o,frames:t,bins:e}}var _a=class extends Se{build(){this.parallax=.35;let t=this.app.samples.piano,e=t.find(d=>d.midi===69)||t[Math.floor(t.length/2)],{out:n,frames:i,bins:r}=iv(e.buf),a=[],o=[],l=[];for(let d=0;d<i;d++)for(let m=0;m<r;m++){let v=n[d*r+m];a.push((d/(i-1)-.5)*22,v*3.2,(m/(r-1)-.5)*9),o.push(v),l.push(d/(i-1))}let c=new Zt;c.setAttribute("position",new Ft(a,3)),c.setAttribute("aV",new Ft(o,1)),c.setAttribute("aF",new Ft(l,1)),this.specMat=new Xt({transparent:!0,depthWrite:!1,blending:ce,uniforms:{scan:{value:-1},lift:{value:1},pxr:{value:1},time:{value:0}},vertexShader:`attribute float aV, aF; uniform float scan, lift, pxr, time; varying float vB;
        void main(){ vec3 p = position; float near = exp(-pow((aF - scan)*24.0, 2.0)); p.y *= lift*(0.65 + 0.6*near);
          vB = aV*aV*(0.7 + 2.5*near) + 0.1; vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv; gl_PointSize = pxr*(2.0 + 3.0*aV*near + 1.5*aV)*(26.0/-mv.z); }`,fragmentShader:"varying float vB; void main(){ vec2 d=gl_PointCoord-0.5; if(dot(d,d)>0.25) discard; gl_FragColor = vec4(vec3(vB), 1.0); }"}),this.spec=new Kn(c,this.specMat),this.spec.frustumCulled=!1,this.scene.add(this.spec);let h=[];for(let d=0;d<r;d+=6)for(let m=0;m<i-1;m++)for(let v of[m,m+1])h.push((v/(i-1)-.5)*22,n[v*r+d]*3.2,(d/(r-1)-.5)*9);let u=new Zt;u.setAttribute("position",new Ft(h,3)),this.ridgeMat=new Ke({color:10132122,transparent:!0,opacity:.5,blending:ce,depthWrite:!1}),this.ridges=new Un(u,this.ridgeMat),this.scene.add(this.ridges),this.traces=[];for(let d=0;d<4;d++){let v=new Zt,g=new Float32Array(1600*3);for(let b=0;b<1600;b++)g[b*3]=(b/1599-.5)*30;v.setAttribute("position",new ae(g,3));let p=new mn(v,new Ke({color:16777215,transparent:!0,opacity:0,blending:ce,depthWrite:!1}));p.position.set(0,4.6+d*.5,-3),this.scene.add(p),this.traces.push(p)}this.barMat=new Xt({uniforms:{seed:{value:0},amt:{value:0},time:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float seed, amt, time; varying vec2 vUv; float h(float x){ return fract(sin(x*12.9898+seed*78.233)*43758.5453); }
        void main(){ float x = vUv.x*420.0; float b = step(0.55, h(floor(x))) * step(0.3, h(floor(x*0.25)+3.0)); float band = step(abs(vUv.y-0.5), 0.5);
          float row = step(0.5, h(floor(vUv.y*18.0)+floor(x*0.05)));
          gl_FragColor = vec4(vec3(b*mix(1.0,row,0.35)*amt*band), 1.0); }`}),this.bars=new Dt(new ve(60,2.2),this.barMat),this.bars.position.set(0,-2.6,-6),this.scene.add(this.bars);let f=new Qn(40,40,1842204,1118481);f.position.y=-.02,this.scene.add(f),this.fx={invert:0,flash:0}}pose(t,e){if(e&&e.film){let n=ye(0,1,t/(e.dur||20));return{pos:new T(Tt(-13,9,n),Tt(8.5,6,n),Tt(23,25,n)),tgt:new T(Tt(-3,2,n),1.4,0),fov:28}}return{pos:new T(Math.sin(t*.04)*9,8.5,24),tgt:new T(0,1,0),fov:30}}update(t,e,n){let i=n.ev.last(n.abs,"piano"),r=i?n.abs-i.t:99;this.specMat.uniforms.scan.value=r<5?r/5:-1,this.specMat.uniforms.lift.value=.7+.5*Math.exp(-r*.4),this.specMat.uniforms.pxr.value=n.pxr,this.ridgeMat.opacity=.35+.4*Math.exp(-r*.5);let a=n.ev.recent(n.abs,1.2,["blip","tone"]);this.traces.forEach((d,m)=>{let v=a[a.length-1-m];if(!v){d.material.opacity=0;return}let g=n.abs-v.t,p=v.freq||v.midi||1e3,b=d.geometry.attributes.position.array,S=b.length/3,x=Math.min(p/160,60),L=Math.exp(-g*(v.tag==="tone"?1.5:6));for(let R=0;R<S;R++){let P=R/(S-1);b[R*3+1]=Math.sin(P*x*2*Math.PI+g*40)*.22*L*Math.sin(Math.PI*P)}d.geometry.attributes.position.needsUpdate=!0,d.material.opacity=Qt(L*1.4)});let o=n.ev.pulse(n.abs,.05,"click"),l=n.ev.pulse(n.abs,.08,"blip"),c=n.ev.last(n.abs,"click");this.barMat.uniforms.seed.value=c?Math.floor(c.t*1e3)%997:0,this.barMat.uniforms.amt.value=Qt(o*.6+l*.2);let h=n.ev.pulse(n.abs,.25,"sub");this.fx.flash=Qt(o*.04,0,.12)+h*.02,this.fx.invert=o>2.2?1:0;let u=a[a.length-1],f=n.abs.toFixed(3).padStart(8,"0");n.hud([`${f} s`,u?`${Math.round(u.freq||u.midi)} Hz  sine`:"sine",i?`${be(i.midi)} \xB7 t + ${r.toFixed(2)} s`:"","A4 \xB7 1024-pt STFT \xB7 60 Hz \u2013 9 kHz"])}down(t,e){e.play("tap",t.x,t.y)}};var ya=class extends Se{build(){this.addEnv("forest",{exposure:.36,sat:.5,blur:2.6,tint:[.82,.95,1.08],floorDark:.8,yaw:.6,contrast:1.1}),this.useEnvMap("forest",.8),this.parallax=.9,this.waterMat=fa(this.app.assets.tex.forest,{yaw:.6,exposure:.7,deep:[.006,.012,.014],tint:[.8,.95,1.05],sat:.55,waveAmp:.35,fog:[.02,.03,.035],fogFar:90}),this.water=new Dt(new ve(300,300),this.waterMat),this.water.rotation.x=-Math.PI/2,this.scene.add(this.water);let e=this.app.assets.pixels("greenland",296,114),n=new ve(15,1710/296,295,113),i=n.attributes.position;for(let f=0;f<i.count;f++){let d=f%296,v=(Math.floor(f/296)*296+d)*4,g=e.data[v]/255,p=e.data[v+1]/255,b=e.data[v+2]/255,S=.3*g+.59*p+.11*b,L=b-g>.15&&S<.45?-.12:.02+Math.pow(Qt((S-.3)/.7),1.3)*.42;i.setZ(f,L)}for(let f=0;f<6;f++){let d=new Float32Array(i.count);for(let m=0;m<i.count;m++)d[m]=i.getZ(m);for(let m=1;m<113;m++)for(let v=1;v<295;v++){let g=m*296+v;i.setZ(g,(d[g]*4+d[g-1]+d[g+1]+d[g-296]+d[g+296])/8)}}n.computeVertexNormals();let r=this.app.assets.tex.greenland;r.anisotropy=4,this.ice=new Dt(n,new on({map:r,roughness:.6,metalness:0,envMapIntensity:.35,color:11122372})),this.ice.rotation.x=-Math.PI/2,this.ice.position.set(1.5,.06,-7.5),this.scene.add(this.ice);let a=new ns(14674687,.75);a.position.set(-6,9,4),this.scene.add(a),this.scene.add(new Jr(8952234,1052688,.35)),this.kb=da({first:48,last:84,chaos:1,seed:7,ivory:14275264}),this.kb.group.position.set(-3.6,.02,3.2),this.kb.group.rotation.set(.05,.55,-.1),this.kb.group.scale.setScalar(1.15),this.scene.add(this.kb.group);let o=5200,l=new Float32Array(o*2*3),c=new Float32Array(o*2*3),h=new Float32Array(o*2);for(let f=0;f<o;f++){let d=[Math.random(),Math.random(),Math.random()];for(let m=0;m<2;m++)c.set(d,(f*2+m)*3),h[f*2+m]=m}let u=new Zt;u.setAttribute("position",new ae(l,3)),u.setAttribute("aSeed",new ae(c,3)),u.setAttribute("aEnd",new ae(h,1)),this.rainMat=new Xt({transparent:!0,depthWrite:!1,blending:ce,uniforms:{time:{value:0},amt:{value:1}},vertexShader:`attribute vec3 aSeed; attribute float aEnd; uniform float time; varying float vE;
        void main(){ float H = 16.0; float sp = 9.0 + aSeed.z*5.0; float y = mod(aSeed.y*H - time*sp, H) - 1.0;
          vec3 p = vec3((aSeed.x-0.5)*44.0, y, -30.0 + aSeed.z*44.0); p.x += y*0.06; p.y -= aEnd*(0.25+aSeed.z*0.3); p.x -= aEnd*0.02;
          vE = aEnd; gl_Position = projectionMatrix*modelViewMatrix*vec4(p,1.0); }`,fragmentShader:"uniform float amt; varying float vE; void main(){ gl_FragColor = vec4(vec3(0.55,0.65,0.75)*(1.0-vE)*0.32*amt, 1.0); }"}),this.rain=new Un(u,this.rainMat),this.rain.frustumCulled=!1,this.scene.add(this.rain),this.lastDrop=-1,this.lastNote=-1,this.fx={vignette:0,exposure:0}}pose(t,e){if(e&&e.film){let i=ye(0,1,t/(e.dur||26));return{pos:new T(Tt(-1,3.5,i),Tt(1.6,9.5,i),Tt(8,7.5,i)),tgt:new T(Tt(-3.4,1,i),Tt(.2,0,i),Tt(2.6,-6.5,i)),fov:Tt(34,46,i)}}let n=.25+Math.sin(t*.045)*.3;return{pos:new T(Math.sin(n)*9+.5,10.5,Math.cos(n)*8+3.5),tgt:new T(0,0,-4.2),fov:46}}update(t,e,n){this.waterMat.uniforms.time.value=t,this.rainMat.uniforms.time.value=t;let i=n.bucket||0;this.rainMat.uniforms.amt.value=1-i*.6,this.fx.vignette=i*1.6,this.fx.exposure=-i*.35;for(let o of n.ev.recent(n.abs,.5,"drop"))if(o.t>this.lastDrop){if(this.lastDrop=o.t,Fn(o.t*91.3)>.66)continue;this.waterMat.userData.addRipple((Fn(o.t*3.3)-.5)*18,-Fn(o.t*5.1)*14+4,o.t-n.abs+t,.35)}let r=this.kb;for(let o of r.keys)o.press=0;let a=null;for(let o of n.ev.recent(n.abs,6,"piano")){let l=n.abs-o.t,c=r.byMidi.get(Math.round(o.midi))||r.byMidi.get(48+(Math.round(o.midi)%12+12));if(c){if(c.press=Math.max(c.press,Qt(l/.03)*(1-ye(.6,.9,l))),o.t>this.lastNote){this.lastNote=o.t;let h=new T(c.x,0,.2);r.group.localToWorld(h),this.waterMat.userData.addRipple(o.user?o.px??h.x:h.x+(Fn(o.t)-.5)*3,o.user?o.pz??h.z:h.z-1-Fn(o.t*2)*3,o.t-n.abs+t,1.3)}a=o}}r.sync(),n.hud(["async \xB7 7.3 s \xB7 11.1 s \xB7 13.7 s \xB7 17.9 s",a?`${be(a.midi)}  ${a.detune>0?"+":"\u2212"}${Math.abs(a.detune||0).toFixed(0)} \xA2`:"","72\xB0N 40\xB0W \xB7 Greenland",i>.5?"\u6C34\u6876 bucket \xB7 lowpass 420 Hz":""])}down(t,e){this.holdStart=e.now,this.downP=t;let n=e.raycast(t,[this.water]);e.play("drop",t.x,t.y,n?{px:n.point.x,pz:n.point.z}:{})}up(){this.holdStart=null}};var Ma=class extends Se{build(){this.addEnv("night",{exposure:.17,sat:.7,blur:1,tint:[.7,.82,1.2],floorDark:.85,yaw:.4,contrast:1.6}),this.stars=tn(2600,()=>{let e=new T().randomDirection();return e.y=Math.abs(e.y)*.9+.08,e.normalize().multiplyScalar(300),[e.x,e.y,e.z]},{size:.9,color:[.9,.93,1],opacity:.7}),this.scene.add(this.stars),this.parallax=.8,this.rings=[],this.hits=[],this.group=new Ne,this.group.position.set(0,3.2,-2),this.scene.add(this.group);for(let e=0;e<12;e++){let n=.7+e*.42,i=new Dt(new Os(n,.012+e*.0012,8,220),new Je({color:16777215,transparent:!0,blending:ce,depthWrite:!1})),r=new Ne;r.add(i),r.userData={i:e,ax:(e%2?1:-1)*(.06+e*.012),ph:e*.7},this.group.add(r),this.rings.push(i);let a=new Dt(new Os(n,.16,6,64),new Je({visible:!1}));a.userData.i=e,r.add(a),this.hits.push(a)}this.core=tn(1,()=>[0,0,0],{size:1.6,color:[1,.95,.85],opacity:.8}),this.group.add(this.core),this.embers=tn(700,()=>[(Math.random()-.5)*18,Math.random()*12-2,-8+Math.random()*12],{size:.06,color:[.9,.92,1],opacity:.4}),this.embers.material.uniforms.drift.value.set(0,.06,0),this.scene.add(this.embers);let t=new Dt(new Qi(60,64),new Je({color:131845}));t.rotation.x=-Math.PI/2,t.position.y=-1.2,this.scene.add(t)}pose(t,e){if(e&&e.film){let n=ye(0,1,t/(e.dur||26));return{pos:new T(Tt(-3,.5,n),Tt(1.6,3,n),Tt(16,9.5,n)),tgt:new T(0,Tt(3.6,3.2,n),-2),fov:Tt(42,38,n)}}return{pos:new T(Math.sin(t*.05)*3,2.8,12),tgt:new T(0,3.2,-2),fov:42}}update(t,e,n){let i=new Array(12).fill(0),r=null;for(let o of n.ev.recent(n.abs,30,"piano")){let l=o.ring??Gs.indexOf(Math.round(o.midi));if(l<0)continue;let c=n.abs-o.t;i[l]+=(o.vel??.5)*Math.exp(-c/5.5)*Qt(c*20),r=o}this.rings.forEach((o,l)=>{let c=Qt(i[l]*1.8);o.material.color.setRGB(.05+c*1.5,.055+c*1.4,.07+c*1.25);let h=o.parent,u=h.userData;h.rotation.x=Math.sin(t*.07+u.ph)*u.ax*3+1.25,h.rotation.y=Math.cos(t*.05+u.ph)*u.ax*2,o.scale.setScalar(1+c*.015*Math.sin(t*30+l))});let a=i.reduce((o,l)=>o+l,0);this.core.material.uniforms.opacity.value=.25+Qt(a*.25)*.8,this.core.material.uniforms.time.value=t,this.core.material.uniforms.pxr.value=n.pxr,this.embers.material.uniforms.pxr.value=n.pxr,this.embers.material.uniforms.time.value=t,this.stars.material.uniforms.time.value=t*.3,this.embers.material.uniforms.boost.value=n.ev.pulse(n.abs,.8,"breath")*2,n.hud([r?`${be(r.midi)}  \xB7  ring ${(r.ring??0)+1} / 12`:"12","sustain pedal down","2023.01.17"])}down(t,e){let n=e.raycast(t,this.hits);n?e.play("ring",n.object.userData.i):e.play("ring",Math.floor(Qt(Math.hypot(t.x,t.y-.1)/.9)*11.99))}};var jh={prelude:pa,debussy:ma,ymo:ga,screen:va,casa:xa,sine:_a,nature:ya,twelve:Ma};function tu(s){let t=[];return s.traverse(e=>{let n=e.material&&e.material.uniforms;n&&n.pxr&&t.push(n.pxr)}),t}var $t=s=>document.querySelector(s),eu=55,sv=2.6,ql=class{constructor(){this.canvas=$t("#stage");let t=matchMedia("(pointer: coarse)").matches;this.dpr=Math.min(window.devicePixelRatio||1,t?1.5:1.75),this.renderer=new Or({canvas:this.canvas,antialias:!1,powerPreference:"high-performance"}),this.renderer.outputColorSpace=jn,this.renderer.toneMapping=fn,this.renderer.setPixelRatio(1),this.pipe=new aa(this.renderer,{msaa:t?2:4}),this.assets=new la("assets/"),this.events=new ca,this.movements=On.map(()=>null),this.cur=0,this.trans=null,this.started=!1,this.auto=!0,this.muted=!1,this.pointer={x:0,y:0,down:!1},this.perf0=performance.now(),this.bucket=0,this.bucketTarget=0,this.lang="both",this.hudLines="",this.raycaster=new jr}now(){return this.started&&this.clock?this.clock():(performance.now()-this.perf0)/1e3}async load(){let t=$t("#load-bar"),e=0,n=0,i=()=>{t.style.transform=`scaleX(${(e*.45+n*.55).toFixed(3)})`},r=window.AudioContext||window.webkitAudioContext;this.ctx=new r({latencyHint:"interactive"});let[a,o]=await Promise.all([this.assets.loadTextures(Yh,l=>{e=l,i()}),Zh(this.ctx,"assets/",l=>{n=l,i()})]);this.samples=o,this.engine=new ha(this.ctx,o,this.events),this.build(0),this.resize(),$t("#intro").classList.add("ready"),$t("#enter").disabled=!1,$t("#enter").focus({preventScroll:!0}),setTimeout(()=>this.build(1),300)}build(t){if(this.movements[t])return this.movements[t];let e=On[t],n=new jh[e.id](this,e);return n.build(),n.pxr=tu(n.scene),n.setAspect(this.w/this.h||16/9),n.start=this.now(),this.movements[t]=n,n}async enter(){$t("#enter").disabled=!0;try{await Promise.race([this.ctx.resume(),new Promise(t=>setTimeout(t,1500))])}catch{}this.audioOK=this.ctx.state==="running",this.started=!0,this.clock=this.audioOK?()=>this.ctx.currentTime:()=>(performance.now()-this.perf0)/1e3,this.audioOK||($t("#load-msg").textContent="\u58F0\u97F3\u672A\u80FD\u542F\u52A8\uFF0C\u753B\u9762\u4ECD\u4F1A\u56DE\u5E94 \xB7 Sound could not start; visuals still respond"),$t("#intro").classList.add("gone"),document.body.classList.add("started"),setTimeout(()=>{$t("#intro").hidden=!0},1200),this.events.clear(),this.startMusic(this.cur,.2);for(let t of this.movements)t&&(t.start=this.now());this.lastTouch=this.now(),this.sched=setInterval(()=>this.tick(),50),document.addEventListener("visibilitychange",()=>{this.audioOK&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}startMusic(t,e=0){let n=On[t].id,i=this.now()+e;if(this.composer){let a=this.composer;a.stopAt=i,this.engine.fadeBus(a.bus,i,0,2.8)}this.engine.bus(n),this.engine.setBusLowpass(n,i,2e4,.01),this.engine.fadeBus(n,i,0,.01),this.engine.fadeBus(n,i+.02,1,1.6);let r=Kh[n];this.composer=new r(this.engine,n,1e3+Math.floor(Math.random()*1e6)),this.composer.start(i)}tick(){this.composer&&this.composer.schedule(this.now()+.35)}go(t){if(t=(t+On.length)%On.length,t===this.cur||this.trans)return;let e=this.build(t);e.start=this.now(),this.trans={from:this.cur,to:t,t0:this.now()},this.started&&this.startMusic(t,.15),this.cur=t,this.caption(t),t+1<On.length&&setTimeout(()=>this.build(t+1),1500)}caption(t){let e=On[t],n=$t("#caption");n.classList.remove("in"),n.offsetWidth,$t("#c-roman").textContent=e.roman,$t("#c-years").textContent=e.years,$t("#c-cn").textContent=e.cn,$t("#c-en").textContent=e.en,$t("#c-dcn").textContent=e.dcn,$t("#c-den").textContent=e.den,$t("#c-hcn").textContent=e.hcn,$t("#c-hen").textContent=e.hen,$t("#c-mat").textContent=e.mat,n.classList.add("in"),document.querySelectorAll("#nav button").forEach((i,r)=>{i.setAttribute("aria-current",r===t?"true":"false")})}hud(t){let e=t.filter(Boolean).join(`
`);e!==this.hudLines&&(this.hudLines=e,this.hudEl.textContent=e)}context(t,e){return{ev:this.events,abs:e,film:!1,pointer:this.pointer,pxr:this.h/900,now:e,composer:t===this.movements[this.cur]?this.composer:null,bucket:t.meta.id==="nature"?this.bucket:0,hud:t===this.movements[this.cur]?n=>this.hud(n):()=>{},raycast:(n,i)=>(this.raycaster.setFromCamera(new et(n.x,n.y),t.camera),this.raycaster.intersectObjects(i,!0)[0]||null),play:(n,...i)=>this.play(n,...i)}}play(t,...e){if(!this.started||!this.composer)return;let n=this.now()+.02,i=this.composer;this.lastTouch=this.now();let r={tap:"tap",key:"key",phrase:"phrase",pluck:"pluck",string:"stringPluck",strum:"strum",drop:"drop",ring:"ring"};if(t==="toggle"){i.toggle&&i.toggle(e[0]);return}let a=r[t];a&&i[a]&&i[a](n,...e)}gradeOf(t){let e={...t.meta.grade};return t.fx&&(t.fx.vignette&&(e.vignette=(e.vignette??.5)+t.fx.vignette),t.fx.exposure&&(e.exposure=(e.exposure??1)*(1+t.fx.exposure))),e}frame(){let t=this.now(),e=Math.min(.05,t-(this.lastAbs??t));this.lastAbs=t;let i=this.movements[this.cur]?.meta.id==="nature"&&this.pointer.down&&this.downAt!=null&&t-this.downAt>.35?1:0;this.started&&i!==(this._bucketOn||0)&&(this._bucketOn=i,this.engine.setBusLowpass("nature",t,i?420:2e4,.12)),this.bucket=Vs(this.bucket,i,6,e);let r=this.movements[this.cur],a=r,o=null,l=0;if(this.trans){let m=(t-this.trans.t0)/sv;m>=1?this.trans=null:(a=this.movements[this.trans.from],o=r,l=Wh(Qt(m)))}for(let m of o?[a,o]:[a]){let v=this.context(m,t),g=t-m.start;m.update(g,e,v),m.applyCamera(g,e,v);for(let p of m.pxr)p.value=v.pxr}let c=o?Gh(this.gradeOf(a),this.gradeOf(o),l):this.gradeOf(a),h=a.fx||{},u=o&&o.fx||{},f={invert:o?0:h.invert||0,flash:(h.flash||0)*(1-l)+(u.flash||0)*l,fade:this.started?0:.35};this.pipe.render(a,o,l,t,c,f),this.started&&this.auto&&!this.trans&&t-r.start>eu&&t-this.lastTouch>18&&this.go(this.cur+1);let d=Qt((t-r.start)/eu);this.progEl.style.transform=`scaleX(${this.auto?d.toFixed(3):0})`,requestAnimationFrame(()=>this.frame())}resize(){let t=window.innerWidth,e=window.innerHeight;this.w=t,this.h=e,this.canvas.style.width=t+"px",this.canvas.style.height=e+"px",this.renderer.setSize(Math.round(t*this.dpr),Math.round(e*this.dpr),!1),this.pipe.setSize(Math.round(t*this.dpr),Math.round(e*this.dpr));for(let n of this.movements)n&&n.setAspect(t/e)}bind(){this.hudEl=$t("#hud"),this.progEl=$t("#nav-progress"),document.body.dataset.lang="both",window.addEventListener("resize",()=>this.resize());let t=h=>{let u=this.canvas.getBoundingClientRect();return{x:(h.clientX-u.left)/u.width*2-1,y:-((h.clientY-u.top)/u.height)*2+1}};this.canvas.addEventListener("pointerdown",h=>{let u=t(h);Object.assign(this.pointer,u,{down:!0}),this.downAt=this.now(),this.canvas.setPointerCapture(h.pointerId);let f=this.movements[this.cur];f&&this.started&&!this.trans&&f.down(u,this.context(f,this.now()))}),this.canvas.addEventListener("pointermove",h=>{let u=t(h);Object.assign(this.pointer,u);let f=this.movements[this.cur];f&&this.started&&this.pointer.down&&f.move(u,this.context(f,this.now()))});let e=h=>{this.pointer.down=!1,this.downAt=null;let u=this.movements[this.cur];u&&this.started&&u.up(t(h),this.context(u,this.now()))};this.canvas.addEventListener("pointerup",e),this.canvas.addEventListener("pointercancel",e),$t("#enter").addEventListener("click",()=>this.enter());let n=$t("#nav");On.forEach((h,u)=>{let f=document.createElement("button");f.type="button",f.id=`nav-${h.id}`,f.innerHTML=`<span class="r">${h.roman}</span><span class="y">${h.years.split(" ")[0]}</span>`,f.setAttribute("aria-label",`${h.cn} ${h.en}`),f.addEventListener("click",()=>{this.lastTouch=this.now(),this.go(u)}),n.appendChild(f)}),$t("#prev").addEventListener("click",()=>{this.lastTouch=this.now(),this.go(this.cur-1)}),$t("#next").addEventListener("click",()=>{this.lastTouch=this.now(),this.go(this.cur+1)}),window.addEventListener("keydown",h=>{h.key==="ArrowRight"&&this.go(this.cur+1),h.key==="ArrowLeft"&&this.go(this.cur-1)});let i=$t("#lang"),r=["both","cn","en"],a={both:"\u4E2D / EN",cn:"\u4E2D\u6587",en:"EN"};i.addEventListener("click",()=>{this.lang=r[(r.indexOf(this.lang)+1)%3],document.body.dataset.lang=this.lang,i.textContent=a[this.lang]});let o=$t("#auto");o.addEventListener("click",()=>{this.auto=!this.auto,o.setAttribute("aria-pressed",String(this.auto)),this.movements[this.cur].start=this.now()});let l=$t("#mute");l.addEventListener("click",()=>{this.muted=!this.muted,l.setAttribute("aria-pressed",String(!this.muted)),this.engine&&this.engine.master.gain.setTargetAtTime(this.muted?0:.9,this.ctx.currentTime,.08)}),$t("#info").addEventListener("click",()=>{$t("#credits").hidden=!1}),$t("#close-credits").addEventListener("click",()=>{$t("#credits").hidden=!0});let c=$t("#credit-list");for(let[h,u]of Qh){let f=document.createElement("dt");f.textContent=h;let d=document.createElement("dd");d.textContent=u,c.append(f,d)}}},Ws=new ql;window.__app=Ws;Ws.bind();Ws.caption(0);Ws.load().then(()=>Ws.frame()).catch(s=>{console.error(s),$t("#load-msg").textContent="\u8F7D\u5165\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u9875\u9762 \xB7 Loading failed \u2014 please reload"});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
