import { format as fnsFormat } from 'date-fns'

export const formatDate = (
  timestamp: string,
  format: string = 'MMMM dd, yyyy, hh:mm:ss a',
) => {
  return fnsFormat(new Date(timestamp), format)
}
