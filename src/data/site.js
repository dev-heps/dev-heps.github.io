const isDev = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

export const URLS = {
  portfolio: isDev ? 'http://localhost:3000/' : 'https://dev-heps.github.io/',
  research: isDev ? 'http://localhost:3003/' : 'https://dev-heps.github.io/research-notes/',
  math: isDev ? 'http://localhost:3001/math-archive/' : 'https://dev-heps.github.io/math-archive/',
  projects: isDev ? 'http://localhost:3002/' : 'https://dev-heps.github.io/projects/',
};

export const SITE = {
  name: 'Dongwoo Lee',
  title: 'Dongwoo Lee - Portfolio & Academic Archive',
  description:
    'Dongwoo Lee is an undergraduate researcher interested in digital healthcare, mathematical biology, and quantum computing.',
  email: 'hepsdata@yonsei.ac.kr',
  location: 'Dongtan, South Korea',
  github: 'https://github.com/dev-heps',
  portfolio: URLS.portfolio,
}

export const NAV_ITEMS = [
  { label: 'Portfolio', href: '/', key: 'portfolio' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Research', href: URLS.research, key: 'research', external: true },
  { label: 'Math', href: URLS.math, key: 'math', external: true },
  { label: 'Projects', href: URLS.projects, key: 'projects', external: true },
  { label: 'Logs', href: '/logs', key: 'logs' },
]

export const ARCHIVES = [
  {
    name: 'Research Notes',
    href: URLS.research,
    repo: 'https://github.com/dev-heps/research-notes',
    description: 'Literature reviews, paper summaries, research questions, and experiment logs.',
  },
  {
    name: 'Math Archive',
    href: URLS.math,
    repo: 'https://github.com/dev-heps/math-archive',
    description: 'Mathematics studies, lecture notes, Lean 4 formalizations, and biological modeling.',
  },
  {
    name: 'Projects',
    href: URLS.projects,
    repo: 'https://github.com/dev-heps/projects',
    description: 'Maintained index of tools, software, demos, and source repositories.',
  },
  {
    name: 'Study & Dev Logs',
    href: '/logs',
    description: 'Learning process logs, quick technical notes, and research reflections.',
  },
]

export const SOCIALS = [
  {
    name: 'LinkedIn',
    handle: '@dongwoolee',
    href: 'https://www.linkedin.com/in/dongwoo-lee-158957408',
    icon: 'devicon-linkedin-plain colored',
  },
  {
    name: 'GitHub',
    handle: '@dev-heps',
    href: 'https://github.com/dev-heps',
    icon: 'devicon-github-original',
  },
  {
    name: 'YouTube',
    handle: '@DongwooLee',
    href: 'https://www.youtube.com/@DongwooLee-ti2kv',
    img: 'https://www.svgrepo.com/show/475700/youtube-color.svg',
  },
  {
    name: 'Instagram',
    handle: '@dongwoolee',
    href: 'https://instagram.com',
    img: 'https://www.svgrepo.com/show/452229/instagram-1.svg',
  },
]

export const LANGUAGES = [
  { name: 'C', icon: 'devicon-c-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Lean 4', img: '/lean.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Julia', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg' },
  { name: 'R', icon: 'devicon-r-plain colored' },
  { name: 'MATLAB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg' },
]

export const TOOLS = [
  { name: 'PyTorch', icon: 'devicon-pytorch-original colored' },
  { name: 'TensorFlow', icon: 'devicon-tensorflow-original colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'LaTeX', icon: 'devicon-latex-original' },
]
