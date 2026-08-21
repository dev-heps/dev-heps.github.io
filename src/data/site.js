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
    'Dongwoo Lee is an undergraduate student interested in digital healthcare, mathematics, and quantum computing.',
  email: 'hepsdata@gmail.com',
  location: 'Dongtan, South Korea',
  github: 'https://github.com/dev-heps',
  portfolio: URLS.portfolio,
}

export const NAV_ITEMS = [
  { label: 'Portfolio', href: '/', key: 'portfolio' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Research', href: URLS.research, key: 'research', external: true },
  { label: 'Math', href: URLS.math, key: 'math', external: true },
  { label: 'Software', href: URLS.projects, key: 'projects', external: true },
  { label: 'Notes', href: '/logs', key: 'logs' },
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
    name: 'Software',
    href: URLS.projects,
    repo: 'https://github.com/dev-heps/projects',
    description: 'Maintained index of tools, software, demos, and source repositories.',
  },
  {
    name: 'Notes & Logs',
    href: '/logs',
    description: 'Learning process logs, quick technical notes, and research reflections.',
  },
]

export const SOCIALS = [
  {
    name: 'GitHub',
    handle: '@dev-heps',
    href: 'https://github.com/dev-heps',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    name: 'YouTube',
    handle: '@DongwooLee',
    href: 'https://www.youtube.com/@DongwooLee-ti2kv',
    img: 'https://www.svgrepo.com/show/475700/youtube-color.svg',
  },
]

export const LANGUAGES = [
  { name: 'C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  { name: 'C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Lean 4', img: '/lean.svg' },
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Julia', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/julia/julia-original.svg' },
  { name: 'R', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg' },
  { name: 'MATLAB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg' },
]

export const TOOLS = [
  { name: 'PyTorch', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'LaTeX', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg' },
]
