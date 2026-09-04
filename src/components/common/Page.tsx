import type { ReactNode } from 'react';
import { Seo } from './Seo';

interface PageProps {
  title: string;
  intro: string;
  description?: string;
  children: ReactNode;
}

export function Page({ title, intro, description, children }: PageProps) {
  return (
    <main className="page">
      <Seo title={title} description={description ?? intro} />
      <section className="pagehero">
        <div className="container">
          <span className="eyebrow">MySchool</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>
      <div className="container content">{children}</div>
    </main>
  );
}
