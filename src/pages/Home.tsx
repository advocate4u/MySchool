import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { featureCards, notices } from '../constants/site';
import { Seo } from '../components/common/Seo';

export function Home() {
  const latestNotice = notices[0];
  return (
    <main>
      <Seo title="Home" description="MySchool — a modern learning community committed to academic excellence, strong values and lifelong learning." />
      <section className="hero"><div className="herooverlay"><div className="container heroContent"><span className="eyebrow">LEARN · LEAD · INSPIRE</span><h1>Where every child<br /><em>finds their spark.</em></h1><p>A modern learning community committed to academic excellence, strong values and a lifelong love of learning.</p><div className="actions"><Link className="button primary" to="/admissions">Explore Admissions <ArrowRight size={18} /></Link><Link className="button ghost" to="/about">Discover MySchool</Link></div></div></div></section>
      <section className="intro container"><div><span className="eyebrow">WELCOME TO MYSCHOOL</span><h2>Growing curious minds and confident hearts.</h2></div><p>At MySchool, education goes beyond textbooks. We create meaningful experiences that help students discover what they love, develop their strengths and prepare for a changing world.</p></section>
      <section className="features"><div className="container featuregrid">{featureCards.map(({ icon: Icon, title, text }) => <article className="feature" key={title}><div className="icon"><Icon /></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="stats"><div className="container statgrid"><div><strong>25+</strong><span>Years of Excellence</span></div><div><strong>1,200+</strong><span>Students</span></div><div><strong>85+</strong><span>Dedicated Faculty</span></div><div><strong>100%</strong><span>Commitment to Growth</span></div></div></section>
      <section className="container homebottom"><div><span className="eyebrow">LATEST</span><h2>What's happening at MySchool?</h2></div><div className="notice"><CalendarDays /><div><b>{latestNotice.title}</b><p>{latestNotice.description}</p></div><Link to="/notices" aria-label="View all notices"><ArrowRight /></Link></div></section>
    </main>
  );
}
