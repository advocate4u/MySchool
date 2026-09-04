import type { Notice, SchoolEvent } from '../../types/content';
import { apiClient } from './apiClient';

export const contentService = {
  getNotices: () => apiClient<Notice[]>('/notices'),
  getEvents: () => apiClient<SchoolEvent[]>('/events'),
};
