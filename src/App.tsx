import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppErrorBoundary } from './app/providers/AppErrorBoundary';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const { About, Academics, Admissions, Contact, Events, Faculty, Gallery, Notices } = {
  About: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.About }))),
  Academics: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.Academics }))),
  Admissions: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.Admissions }))),
  Contact: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.Contact }))),
  Events: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.Events }))),
  Faculty: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.Faculty }))),
  Gallery: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.Gallery }))),
  Notices: lazy(() => import('./pages/StandardPages').then(module => ({ default: module.Notices }))),
};

function RouteFallback() {
  return <main className="page"><div className="container content"><div className="notice"><div><h2>Loading page…</h2><p>Please wait while the page is prepared.</p></div></div></div></main>;
}

export default function App() {
  return (
    <AppErrorBoundary>
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </AppErrorBoundary>
  );
}
