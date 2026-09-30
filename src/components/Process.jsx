import {useState,useEffect,useRef,useMemo} from 'react'
import React from 'react'
import {RM} from '../lib'
import {Rv,Mag,Glow,Par,useIn} from './ui'
import {NAV,S,MS} from '../data'

export default function Process(){
  const D=[['Understand','Understand the problem and requirements.'],['Design','Plan the experience, architecture and interface.'],['Build','Develop the application using modern technologies.'],['Improve','Test, optimize and continuously improve the product.']];
  return <div className="steps">{D.map(([t,d],i)=>{const [ref,on]=useIn();return <div ref={ref} key={t} className={'step'+(on?' in':'')} style={{transitionDelay:i*.1+'s'}}><span className="n m">0{i+1}</span><h3>{t}</h3><p>{d}</p></div>})}</div>;
}
