import {useState,useEffect,useRef,useMemo} from 'react'
import React from 'react'
import {RM} from '../lib'
import {Rv,Mag,Glow,Par,useIn} from './ui'
import {NAV,S,MS} from '../data'

export default function Timeline(){
  const ref=useRef(null),[p,setP]=useState(0);
  useEffect(()=>{const f=()=>{const r=ref.current.getBoundingClientRect();setP(Math.min(1,Math.max(0,(innerHeight*.75-r.top)/r.height)))};addEventListener('scroll',f,{passive:true});f();return()=>removeEventListener('scroll',f)},[]);
  const items=[['Software Engineering','Ghana Communication Technology University'],['Coding Bootcamp','Codetrain — 1-year software development bootcamp'],['Professional Experience','Frontend / Web Development']];
  return <div className="tl" ref={ref}><div className="fill" style={{height:p*260}}/>
    {items.map(([h,d],i)=><div key={h} className={'tli'+(p>(i+.3)/3.2?' in':'')}><h3>{h}</h3><p>{d}</p></div>)}</div>;
}
