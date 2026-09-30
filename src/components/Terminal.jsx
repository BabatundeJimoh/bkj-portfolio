import {useState,useEffect,useRef,useMemo} from 'react'
import React from 'react'
import {RM} from '../lib'
import {Rv,Mag,Glow,Par,useIn} from './ui'
import {NAV,S,MS} from '../data'

export default function Terminal(){
  const cmds=[['whoami','Benjamin Kofi Jimoh'],['role','Software Developer'],['stack','React · JavaScript · Node.js · MongoDB'],['status','Building something new...']];
  const [out,setOut]=useState([]),[typing,setTyping]=useState('');
  useEffect(()=>{let dead=false;const sl=t=>new Promise(r=>setTimeout(r,RM?0:t));
    (async()=>{for(const [c,r] of cmds){for(let i=1;i<=c.length;i++){if(dead)return;setTyping(c.slice(0,i));await sl(70)}await sl(250);setOut(o=>[...o,[c,r]]);setTyping('');await sl(350)}})();
    return()=>{dead=true}},[]);
  return <div className="term m"><div className="tb"><i/><i/><i/><span>bkj@workspace ~</span></div>
    <div className="tc" aria-label="Terminal: Benjamin Kofi Jimoh, Software Developer, React JavaScript Node.js MongoDB">
      {out.map(([c,r])=><React.Fragment key={c}><b>$</b> {c}{'\n'}<u>{r}</u>{'\n\n'}</React.Fragment>)}
      <b>$</b> {typing}<span className="cur"/></div></div>;
}
