import {useState,useEffect,useRef,useMemo} from 'react'
import React from 'react'
import {RM} from '../lib'

export function useIn(threshold=.2){
  const ref=useRef(null),[on,setOn]=useState(false);
  useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){setOn(true);io.disconnect()}},{threshold});io.observe(ref.current);return()=>io.disconnect()},[]);
  return [ref,on];
}

export function Rv({as:T='div',className='',children,...p}){const [ref,on]=useIn();return <T ref={ref} className={`rv ${on?'in':''} ${className}`} {...p}>{children}</T>}

export function Mag({as:T='a',className='',children,...p}){
  const mv=e=>{if(RM)return;const b=e.currentTarget,r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`};
  return <T className={`btn mg ${className}`} onPointerMove={mv} onPointerLeave={e=>e.currentTarget.style.transform=''} {...p}>{children}</T>;
}

export function Glow(){
  const r=useRef(null);
  useEffect(()=>{const f=e=>{r.current.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`};addEventListener('pointermove',f);return()=>removeEventListener('pointermove',f)},[]);
  return <div id="glow" ref={r}/>;
}

export function Par({children}){
  const r=useRef(null);
  useEffect(()=>{if(RM)return;const f=()=>{const b=r.current.getBoundingClientRect();r.current.style.transform=`translateY(${(b.top+b.height/2-innerHeight/2)/innerHeight*-24}px)`};addEventListener('scroll',f,{passive:true});f();return()=>removeEventListener('scroll',f)},[]);
  return <div className="vis" ref={r}>{children}</div>;
}
