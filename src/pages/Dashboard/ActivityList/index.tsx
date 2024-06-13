import { formatDate } from 'date-fns'
import { useAtomValue } from 'jotai'
import React from 'react'
import Card from '../../../components/Card'
import { activitiesAtom } from './state'
import {
  ActivityStatus,
  ActivityTable,
  ActivityTableData,
  ActivityTableHeader,
  ActivityTableRow,
} from './styles'
import { Activity } from './types'

const ActivityList: React.FC = () => {
  const activities = useAtomValue<Activity[]>(activitiesAtom)

  return (
    <Card title="Recent Activities">
      <ActivityTable>
        <thead>
          <tr>
            <ActivityTableHeader>Timestamp</ActivityTableHeader>
            <ActivityTableHeader>Activity</ActivityTableHeader>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <ActivityTableRow key={index}>
              <ActivityTableData>
                {formatDate(activity.timestamp, 'MMM d, yyyy | h:mm a')}
              </ActivityTableData>
              <ActivityTableData>
                <ActivityStatus activity={activity.activity}>
                  {activity.activity}
                </ActivityStatus>
              </ActivityTableData>
            </ActivityTableRow>
          ))}
        </tbody>
      </ActivityTable>
    </Card>
  )
}

export default ActivityList
