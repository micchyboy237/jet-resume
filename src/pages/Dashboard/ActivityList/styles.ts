import styled from 'styled-components'

export const ActivityTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0; /* Increased margin */
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

export const ActivityTableHeader = styled.th`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tableRowBorder};
  padding: 1rem 0.75rem; /* Increased padding */
  text-align: left;
  background-color: ${({ theme }) => theme.colors.tableHeadBackground};
`

export const ActivityTableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.backgroundLight};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tableRowHighlight};
  }
`

export const ActivityTableData = styled.td`
  padding: 1rem 0.75rem; /* Increased padding */
  border-bottom: 1px solid ${({ theme }) => theme.colors.tableRowBorder};
`

export const ActivityStatus = styled.span<{ activity: string }>`
  padding: 0.5rem 1rem; /* Increased padding */
  margin-right: 0.5rem; /* Added margin for separation */
  border-radius: 0.75rem;
  color: white;
  background-color: ${({ activity }) =>
    activity === 'Logged in'
      ? '#17a2b8'
      : activity === 'Updated profile'
      ? '#ffc107'
      : activity === 'Completed task'
      ? '#28a745'
      : activity === 'Logged out'
      ? '#dc3545'
      : '#6c757d'};
`
