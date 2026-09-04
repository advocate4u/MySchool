import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Page } from '../components/common/Page';
import { featureCards, faculty, notices, events } from '../constants/site';

export function About() {
  return <Page title="About Our School" intro="A school built around learning, belonging and becoming."><div className="twocol"><div><h2>Our story</h2><p>MySchool is a student-centred learning community designed to help young people become thoughtful, capable and compassionate citizens.</p><p>Our approach combines academic rigour with sports, arts, technology and real-world learning. Every student is encouraged to ask questions, take initiative and learn from experience.</p></div><div className="quote">“Education is not just preparation for life. It is a part of life itself.”</div></div><h2>Vision & Mission</h2><div className="featuregrid">{featureCards.map(({ icon: Icon, title, text }) => <article className="feature" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>)}</div></Page>;
}

export function Academics() {
  return <Page title="Academics" intro="Purposeful learning from early years through senior school."><div className="programs">{['Early Years','Primary School','Middle School','Senior School'].map((name, index) => <article key={name}><span>0{index + 1}</span><h2>{name}</h2><p>Engaging, age-appropriate learning with strong foundations in languages, mathematics, science, humanities, arts and physical education.</p><ChevronDown /></article>)}</div></Page>;
}

export function Faculty() {
  return <Page title="Faculty & Staff" intro="Experienced educators who know every learner matters."><div className="facultygrid">{faculty.map(person => <article className="person" key={person.id}><div className="avatar">{person.initials}</div><h3>{person.name}</h3><p>{person.role}</p></article>)}</div></Page>;
}

export function Admissions() {
  return <Page title="Admissions" intro="Take the first step towards your child's MySchool journey."><div className="admission"><h2>Admission process</h2>{['Submit an enquiry','Visit the school and meet our team','Complete the application','Assessment & interaction','Admission confirmation'].map((step, index) => <div className="step" key={step}><b>{index + 1}</b><span>{step}</span></div>)}<Link className="button primary" to="/contact">Start an Enquiry <ArrowRight size={18} /></Link></div></Page>;
}

export function Notices() {
  return <Page title="News & Notices" intro="Stay up to date with important school announcements."><div className="list">{notices.map(notice => <article key={notice.id}><span>{notice.date}</span><div><h3>{notice.title}</h3><p>{notice.description}</p></div><ArrowRight /></article>)}</div></Page>;
}

export function Events() {
  return <Page title="Events" intro="Learning comes alive through experiences beyond the classroom."><div className="eventgrid">{events.map(event => <article key={event.id}><div className="eventdate"><b>{event.date}</b><span>{event.month}</span></div><h3>{event.title}</h3><p>{event.location}</p></article>)}</div></Page>;
}

export function Gallery() {
  return <Page title="Gallery" intro="A glimpse into everyday life at MySchool."><div className="gallery">{['Learning','Campus','Sports','Arts','Celebrations','Activities'].map((name, index) => <div className={`photo p${index}`} key={name}><span>{name}</span></div>)}</div></Page>;
}

export function Contact() {
  return <Page title="Contact Us" intro="We'd love to hear from you."><div className="contactgrid"><div><h2>Get in touch</h2><p>123 Education Road<br />Your City, India</p><p><b>Phone</b><br />+91 1800 000 000</p><p><b>Email</b><br />info@myschool.edu</p><p><b>Office Hours</b><br />Monday–Saturday · 8:00 AM–4:00 PM</p></div><form onSubmit={event => event.preventDefault()}><label htmlFor="name">Parent / Student Name</label><input id="name" name="name" autoComplete="name" placeholder="Parent / Student Name" required /><label htmlFor="email">Email Address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="Email Address" required /><label htmlFor="phone">Phone Number</label><input id="phone" name="phone" autoComplete="tel" placeholder="Phone Number" required /><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} placeholder="How can we help?" required /><button className="button primary" type="submit">Send Enquiry <ArrowRight size={18} /></button></form></div></Page>;
}
