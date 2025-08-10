export const projects = [
  {
    slug: 'packnship',
    title: 'PackNShip',
    image: 'https://i.ibb.co/r2rZxDDq/Screenshot-from-2025-06-30-17-14-39.png',
    liveLink: 'https://picknship-2f8cb.web.app/',
    github: 'https://github.com/Arif-Rabbani-188/PackNShip-client-side',
    server: 'https://github.com/Arif-Rabbani-188/PackNShip-server-side',
    description: 'Full‑stack B2B logistics platform (React, Tailwind, Express, MongoDB, Firebase Auth) enabling secure cart + order flow.',
    details: {
      summary: 'PackNShip streamlines small business logistics—browse services, add to a persistent cart, and manage orders in an authenticated experience.',
      features: [
        'Protected routes with Firebase authentication',
        'Role-aware UI segments (user vs admin potential)',
        'MongoDB persistence for cart & service data',
        'Responsive, accessible UI with Tailwind + DaisyUI components',
        'Optimistic UI interactions & loading states'
      ],
      tech: ['React', 'TailwindCSS', 'Express.js', 'MongoDB', 'Firebase', 'JWT'],
      challenges: [
        'Designing secure protected routes & token flow with Firebase/JWT',
        'Synchronizing cart state between client cache and MongoDB without race conditions',
        'Maintaining responsive layout across dense data tables + mobile cards'
      ],
      improvements: [
        'Add role-based admin dashboard & analytics',
        'Introduce queue-based order processing (e.g., Redis)',
        'Add integration tests & skeleton loading for perceived speed'
      ],
    }
  },
  {
    slug: 'roommateme',
    title: 'RoomMateMe',
    image: 'https://i.ibb.co/HT1mZ4j7/Screenshot-from-2025-06-30-17-15-22.png',
    liveLink: 'https://roommateme-18b2b.web.app/home',
    github: 'https://github.com/Arif-Rabbani-188/RoomMateMe-client-side',
    server: 'https://github.com/Arif-Rabbani-188/RoomMateMe-server-side',
    description: 'Platform to discover compatible roommates with profiles & secure interaction.',
    details: {
      summary: 'RoomMateMe reduces friction in finding living partners by combining profile filtering with a clean interface.',
      features: [
        'User profiles with core preferences',
        'Authentication & guarded navigation',
        'Responsive grid & mobile-first flow',
        'Server API for profile + match data'
      ],
      tech: ['React', 'TailwindCSS', 'Express.js', 'MongoDB', 'Firebase'],
      challenges: [
        'Structuring flexible profile schema for evolving preferences',
        'Filtering logic performance on larger result sets',
        'Consistent auth state across refresh & tab duplication'
      ],
      improvements: [
        'Add real-time chat with WebSockets',
        'Implement advanced matchmaking scoring',
        'Add email / push notifications for new compatible profiles'
      ],
    }
  },
  {
    slug: 'festscopebd',
    title: 'FestScopeBD',
    image: 'https://i.ibb.co/twFhtcFf/Screenshot-from-2025-06-30-18-08-09.png',
    liveLink: 'https://festscopbd.web.app/',
    github: 'https://github.com/Arif-Rabbani-188/FestScopeBD',
    description: 'Event discovery app focused on local festivals & happenings in Bangladesh.',
    details: {
      summary: 'FestScopeBD aggregates festivals and events with a simple browse & filter experience for quick discovery.',
      features: [
        'Location & date oriented browsing',
        'Mobile-first layout prioritizing scroll clarity',
        'Fast image loading & card hover cues'
      ],
      tech: ['React', 'TailwindCSS', 'Client-side Routing'],
      challenges: [
        'Normalizing inconsistent event data sources',
        'Ensuring fast perceived load with many images',
        'Creating accessible filtering for mobile users'
      ],
      improvements: [
        'Add server-side API & search indexing',
        'Offline caching / PWA support',
        'User accounts for saving & sharing events'
      ],
    }
  }
];

export const findProject = (slug) => projects.find(p => p.slug === slug);
