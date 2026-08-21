import { logs202608 } from './2026-08'

// Aggregate all monthly logs here
export const ALL_LOGS = [
  ...logs202608,
].sort((a, b) => new Date(b.date) - new Date(a.date))

export const LOG_TAGS = ['All', 'Daily Log', 'Enjoying Math']
