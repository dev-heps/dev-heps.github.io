import { logs202608 } from './2026-08'

// Aggregate all monthly logs here
export const ALL_LOGS = [
  ...logs202608,
].sort((a, b) => new Date(b.date) - new Date(a.date))

// Dynamically extract unique tags from logs
const uniqueTags = Array.from(new Set(ALL_LOGS.map((l) => l.tag).filter(Boolean)))
export const LOG_TAGS = ['All', ...uniqueTags]