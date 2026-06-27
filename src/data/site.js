export const SITE = {
  name: 'Dongwoo Lee',
  title: 'Dongwoo Lee - Portfolio',
  description:
    'Dongwoo Lee is an undergraduate researcher interested in digital healthcare, mathematical biology, and quantum computing.',
  email: 'hepsdata@yonsei.ac.kr',
  location: 'Dongtan, South Korea',
  github: 'https://github.com/dev-heps',
  portfolio: 'https://dev-heps.github.io/',
}

export const NAV_ITEMS = [
  { label: 'Portfolio', href: '/', key: 'portfolio' },
  { label: 'About', href: '/about', key: 'about' },
  { label: 'Research', href: 'https://dev-heps.github.io/research-notes/', key: 'research', external: true },
  { label: 'Math', href: 'https://dev-heps.github.io/math-archive/', key: 'math', external: true },
  { label: 'Projects', href: 'https://dev-heps.github.io/projects/', key: 'projects', external: true },
  { label: 'Notes', href: '/notes', key: 'notes' },
  { label: 'Reviews', href: '/reviews', key: 'reviews' },
  { label: 'Diary', href: '/diary', key: 'diary' },
]

export const ARCHIVES = [
  {
    name: 'Research Notes',
    href: 'https://dev-heps.github.io/research-notes/',
    repo: 'https://github.com/dev-heps/research-notes',
    description: 'Paper notes, research ideas, and experiment logs.',
  },
  {
    name: 'Math Archive',
    href: 'https://dev-heps.github.io/math-archive/',
    repo: 'https://github.com/dev-heps/math-archive',
    description: 'Math notes, equations, studies, and formalization records.',
  },
  {
    name: 'Projects',
    href: 'https://dev-heps.github.io/projects/',
    repo: 'https://github.com/dev-heps/projects',
    description: 'Project write-ups with source, demo, and maintenance links.',
  },
  {
    name: 'Notes',
    href: '/notes',
    description: 'Short technical notes and unfinished knowledge fragments.',
  },
  {
    name: 'Reviews',
    href: '/reviews',
    description: 'Book, paper, lecture, and tool reviews.',
  },
  {
    name: 'Diary',
    href: '/diary',
    description: 'Personal logs, study process notes, and reflective writing.',
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
