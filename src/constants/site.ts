import { Award, BookOpen, Users } from 'lucide-react';
import type { FacultyMember, Notice, SchoolEvent } from '../types/content';

export const navigation = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/academics', label: 'Academics' },
  { path: '/faculty', label: 'Faculty' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/notices', label: 'Notices' },
  { path: '/events', label: 'Events' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
] as const;

export const featureCards = [
  { icon: BookOpen, title: 'Strong Academics', text: 'A balanced curriculum that builds knowledge, creativity and critical thinking.' },
  { icon: Users, title: 'Caring Community', text: 'Dedicated teachers and a supportive environment where every child belongs.' },
  { icon: Award, title: 'Character & Values', text: 'We nurture responsibility, confidence, kindness and leadership.' },
] as const;

export const notices: Notice[] = [
  { id: 'n1', date: 'SEP 04', title: 'Admissions Open for New Academic Session', description: 'Important information for students and parents. Please contact the school office for details.' },
  { id: 'n2', date: 'SEP 03', title: 'Parent Orientation Programme', description: 'Important information for students and parents. Please contact the school office for details.' },
  { id: 'n3', date: 'SEP 02', title: 'Annual Sports Day — Registration Open', description: 'Important information for students and parents. Please contact the school office for details.' },
  { id: 'n4', date: 'SEP 01', title: 'Mid-Term Assessment Schedule', description: 'Important information for students and parents. Please contact the school office for details.' },
];

export const events: SchoolEvent[] = [
  { id: 'e1', date: '12', month: 'OCT', title: 'Annual Sports Day', location: 'Campus · 9:00 AM onwards' },
  { id: 'e2', date: '19', month: 'OCT', title: 'Science & Innovation Fair', location: 'Campus · 9:00 AM onwards' },
  { id: 'e3', date: '26', month: 'OCT', title: 'Cultural Festival', location: 'Campus · 9:00 AM onwards' },
  { id: 'e4', date: '02', month: 'NOV', title: 'Parent–Teacher Meet', location: 'Campus · 9:00 AM onwards' },
];

export const faculty: FacultyMember[] = [
  { id: 'f1', name: 'Principal', role: 'MySchool Education Team', initials: 'P' },
  { id: 'f2', name: 'Head of Academics', role: 'MySchool Education Team', initials: 'H' },
  { id: 'f3', name: 'Primary Coordinator', role: 'MySchool Education Team', initials: 'P' },
  { id: 'f4', name: 'Senior Faculty', role: 'MySchool Education Team', initials: 'S' },
];
