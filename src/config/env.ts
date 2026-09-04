const getEnv = (key: string, fallback = ''): string => {
  const value = import.meta.env[key];
  return typeof value === 'string' && value.length > 0 ? value : fallback;
};

export const env = Object.freeze({
  appName: getEnv('VITE_APP_NAME', 'MySchool'),
  apiBaseUrl: getEnv('VITE_API_BASE_URL', '/api'),
  environment: getEnv('MODE', 'development'),
  enableAnalytics: getEnv('VITE_ENABLE_ANALYTICS', 'false') === 'true',
});
