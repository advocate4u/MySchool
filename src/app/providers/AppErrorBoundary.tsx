import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props { children: ReactNode }
interface State { hasError: boolean }

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Unhandled application error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <main className="page"><div className="container content"><div className="notice"><div><h2>Something went wrong</h2><p>Please refresh the page and try again.</p></div><button className="button primary" onClick={() => window.location.reload()}>Refresh</button></div></div></main>;
    }
    return this.props.children;
  }
}
