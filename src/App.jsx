import { useState, useEffect, useRef, useMemo } from "react";
import React from "react";
import { RM } from "./lib";
import { Rv, Mag, Glow, Par, useIn } from "./components/ui";
import { NAV, S, MS } from "./data";

import Terminal from "./components/Terminal";
import Tools from "./components/Tools";
import Chat from "./components/Chat";
import Timeline from "./components/Timeline";
import Dash from "./components/Dash";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Image1 from "./images/up-text1.png";
import Image2 from "./images/port2.png"

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Glow />
      ```jsx
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="mx-auto w-full max-w-[1160px]">
          <div className="flex items-center justify-between  px-5 py-3 shadow-lg ">
            {/* Logo */}
            <a
              href="#hero"
              className="group flex items-center gap-2 text-white no-underline"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-[#9F6BFF] to-[#5B8CFF] p-[2px] transition-transform duration-300 group-hover:rotate-6">
                <span className="flex h-full w-full items-center justify-center rounded-[10px] text-white">
                  BJ
                </span>
              </span>

              <span className="hidden text-[15px] font-semibold tracking-tight sm:block">
                Benjamin Jimoh
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {NAV.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="group relative text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {label}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <Mag
                href="#contact"
                className="group flex items-center gap-2 rounded-full border border-white/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5"
              >
                Let's Talk
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Mag>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white transition-all duration-300 hover:bg-white/10 md:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
      ```
      <div id="menu" className={open ? "open" : ""} aria-hidden={!open}>
        <button
          className="burger"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>
        {[...NAV, ["Contact", "contact"]].map(([l, id]) => (
          <a key={id} href={"#" + id} onClick={() => setOpen(false)}>
            {l}
          </a>
        ))}
      </div>
      <header id="hero">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <div className="hg">
            <div>
              <div className="st m">
                <span className="dot" />
                Available for opportunities
              </div>
              <div className="name m">BENJAMIN KOFI JIMOH</div>
              <h1>
                <span className="ln">
                  <span>I build digital</span>
                </span>
                <span className="ln">
                  <span style={{ animationDelay: ".12s" }}>
                    experiences that
                  </span>
                </span>
                <span className="ln">
                  <span
                    style={{ animationDelay: ".24s" }}
                    className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent"
                  >
                    actually work.
                  </span>
                </span>
              </h1>
              <p className="lead">
                a passionate software developer with a strong focus on web
                development. I specialize in creating interactive and
                user-friendly web applications using cutting-edge technologies
                like React.js and Tailwind.
              </p>
              <div className="cta">
                <Mag href="#work" className="p">
                  View My Work
                </Mag>
                <Mag href="#contact">Let's Talk</Mag>
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <span className="frag m" style={{ top: -30, right: 10 }}>
                {"const build = () => ship();"}
              </span>
              <span
                className="frag m"
                style={{ bottom: -34, left: -10, animationDelay: "-3s" }}
              >
                socket.emit('message')
              </span>
              <Terminal />
            </div>
          </div>
        </div>
      </header>
      <section id="about">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <Rv as="h2">Developer profile</Rv>
          <div className="about">
            <Rv>
              <p>
                <strong>
                  Software Engineering student at Ghana Communication Technology
                  University
                </strong>{" "}
                with practical development experience building real-world web
                applications.
              </p>
              <p>
                I work with React, JavaScript, HTML, CSS, Tailwind CSS, Node.js
                and MongoDB, and care about interfaces that feel fast, clear and
                dependable.
              </p>
              <p>
                Based in Ghana. I like products where the details are the point.
              </p>
            </Rv>
            <Timeline />
          </div>
        </div>
      </section>
      <section id="stack">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <Rv as="h2">The tools I build with</Rv>
          <Tools />
        </div>
      </section>
      <section id="work">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <Rv as="h2">Selected work</Rv>
          <article className="proj">
            <Par>
              <div className="ub">
                <i />
                <i />
                <i />
                <span className="m">up-text-frontend.onrender.com</span>
              </div>
                 <img src={Image1} />
            </Par>
            <div className="info">
              <h3>Up-Text</h3>
              <p>
                A real-time messaging platform built for fast and seamless
                communication.
              </p>
              <dl>
                <dt>Problem</dt>
                <dd>
                  Messaging needs to feel instant, and people need to know when
                  a message has arrived.
                </dd>
                <dt>Solution</dt>
                <dd>
                  A Socket.IO backed chat app with private and group
                  conversations, delivery indicators and live notifications.
                </dd>
              </dl>
              <div className="tags m">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Socket.IO</span>
              </div>
              <ul className="feat">
                {[
                  "Real-time messaging",
                  "Private conversations",
                  "Group chats",
                  "Delivery indicators",
                  "Responsive interface",
                  "Real-time notifications",
                  "Message scheduling",
                ].map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="cta">
                <Mag
                  className="p"
                  href="https://up-text-frontend.onrender.com"
                  target="_blank"
                  rel="noopener"
                >
                  View Live ↗
                </Mag>
                <Mag href="https://github.com/BabatundeJimoh/up-text">View Code</Mag>
               
              </div>
            </div>
          </article>
          <article className="proj alt">
            <Par>
              <div className="ub">
                <i />
                <i />
                <i />
                <span className="m">3FiresOven.com</span>
              </div>
          
             
                <img src={Image2} />
            
            </Par>
            <div className="info">
              <h3>3FIRESOVEN</h3>
              <p>3FiresOven, and a regular food truck, where we offer international street food.</p>
              <dl>
                <dt>Problem</dt>
                <dd>What needed solving, and for whom.</dd>
                <dt>Solution</dt>
                <dd>A mobile food truck that serves affordable international street food at convenient locations, allowing customers to experience different cuisines in one place.</dd>
              </dl>
              <div className="cta">
                <Mag className="p" href="https://3firesoven.com/">
                  Live demo ↗
                </Mag>
            
              </div>
            </div>
          </article>
        </div>
      </section>
      <section id="process">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <Rv as="h2">How I build</Rv>
          <Process />
        </div>
      </section>
      <section id="experience" style={{ paddingTop: 0 }}>
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <Rv as="h2">Experience</Rv>
          <Rv className="xp">
            <div>
              <h3>Frontend / Web Developer</h3>
              <span className="m">Web development</span>
            </div>
            <ul>
              {[
                "Developed responsive websites for businesses across various industries.",
                "Collaborated with consultants at Sibe Consult to deliver business-focused web solutions.",
                "Designed and built custom websites for clients at Nexora GH. ",
                "Developed user-friendly interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS. ",
                "Gathered client requirements and implemented feedback throughout development. ",
                "Optimized websites for responsiveness, performance, and accessibility",
                "Supported the full website development lifecycle, from planning to deployment. ",
                "Ehanced clients' online presence through modern, scalable web solutions.",
              ].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Rv>
        </div>
      </section>
      <section id="code">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <Rv as="h2">Behind the code</Rv>
          <Dash />
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <Rv as="h2">Have an idea worth building?</Rv>
          <Rv as="p">Let's turn it into something people can actually use.</Rv>
          <Contact />
          <div className="soc">
            <a href="https://github.com/BabatundeJimoh/up-text">Github</a>
            <a href="https://liin.com/in/babatunde-jimoh-a4147325a">Linkedin</a>
            <a href="mailto:babatunde13533@gmail.com">Gmail</a>
          </div>
        </div>
      </section>
      <footer>
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <div>
            <b>Benjamin Kofi Jimoh</b>
            <br />
            Software Developer
            <br />
            <em>Building useful things, one line of code at a time.</em>
          </div>
          <div>
            © {new Date().getFullYear()} Benjamin Kofi Jimoh
            <br />
            <a  href="https://github.com/BabatundeJimoh/up-text" >Github </a> . <a href="https://www.linkedin.com/in/babatunde-jimoh-a4147325a">Linkedin</a>
          </div>
        </div>
      </footer>
    </>
  );
}
