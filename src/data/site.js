const isDev = typeof process !== 'undefined' && process.env.NODE_ENV === 'development';

export const URLS = {
  portfolio: isDev ? 'http://localhost:3000/' : 'https://dwlee-log.github.io/',
  research: isDev ? 'http://localhost:3003/' : 'https://dwlee-log.github.io/research/',
  math: isDev ? 'http://localhost:3001/math/' : 'https://dwlee-log.github.io/math/',
  projects: isDev ? 'http://localhost:3002/' : 'https://dwlee-log.github.io/projects/',
};

export const SITE = {
  name: 'Dongwoo Lee',
  title: 'Dongwoo Lee - Portfolio & Academic Archive',
  description:
    'Dongwoo Lee is an undergraduate student interested in digital healthcare, mathematics, and quantum computing.',
  email: 'hepsdata@gmail.com',
  location: 'Dongtan, South Korea',
  github: 'https://github.com/dwlee-log',
  portfolio: URLS.portfolio,
}

export const NAV_ITEMS = [
  { label: 'Home', href: '/', key: 'portfolio' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Research', href: URLS.research, key: 'research', external: true },
  { label: 'Math', href: URLS.math, key: 'math', external: true },
  { label: 'Software', href: URLS.projects, key: 'projects', external: true },
  { label: 'Notes', href: '/logs', key: 'logs' },
]



export const SOCIALS = [
  {
    name: 'GitHub',
    handle: '@dwlee-log',
    href: 'https://github.com/dwlee-log',
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
