import {useState,useEffect,useRef,useMemo} from 'react'
import React from 'react'
import {RM} from '../lib'
import {Rv,Mag,Glow,Par,useIn} from './ui'
import {NAV,S,MS} from '../data'

export default function Tools(){
  const [sel,setSel]=useState(null);
  return <>
    <Rv className="stack">{Object.entries(S).map(([g,items])=><div className="col" key={g}><h3>{g}</h3>
      {Object.keys(items).map(t=><button key={t} className={'chip'+(sel&&sel[0]===t?' on':'')} onMouseEnter={()=>setSel([t,items[t]])} onFocus={()=>setSel([t,items[t]])} onClick={()=>setSel([t,items[t]])}>{t}</button>)}</div>)}</Rv>
    <div id="tip" aria-live="polite">{sel?<><b>{sel[0]}</b> — {sel[1]}</>:'Hover or tap a technology to see how I\'ve used it.'}</div></>;
}
