import {useState,useEffect,useRef,useMemo} from 'react'
import React from 'react'
import {RM} from '../lib'
import {Rv,Mag,Glow,Par,useIn} from './ui'
import {NAV,S,MS} from '../data'

export default function Chat(){
  const [n,setN]=useState(RM?MS.length:1);
  useEffect(()=>{if(RM)return;const t=setInterval(()=>setN(x=>x>=MS.length?1:x+1),1800);return()=>clearInterval(t)},[]);
  return <div className="chat"><div className="side"><div/><div/><div/><div/></div>
    <div className="msgs">{MS.slice(0,n).map(([s,t],i)=><div key={i} className={'bub '+s}>{t}<small>{s==='r'?'delivered':'now'}</small></div>)}</div></div>;
}
