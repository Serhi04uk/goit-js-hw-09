const e=document.querySelector(".form");console.log(e);const o=(e,o)=>new Promise(((t,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?t({position:e,delay:o}):n({position:e,delay:o})}),o)}));e.addEventListener("submit",(function(e){e.preventDefault();const{amount:t,delay:n,step:l}=e.currentTarget.elements;console.log(t.value);let s=Number(n.value),i=Number(l.value);for(let e=0;e<+t.value;e+=1)o(e+1,s).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),s+=i}));
//# sourceMappingURL=03-promises.d6e9e8ec.js.map
