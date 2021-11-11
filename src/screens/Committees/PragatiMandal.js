import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import {PragatiMandalData} from './CommitteesData'
import CommitteeBoxes from './CommitteeBoxes'

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const PragatiMandal = () => {
  return (
    <>      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Pragati Mandal
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={PragatiMandalData}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
       <CommitteeBoxes />
    </>
  )
}

export default PragatiMandal
