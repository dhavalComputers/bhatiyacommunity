import React from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CWidgetProgressIcon
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from "@coreui/icons-react";
import { Link } from "react-router-dom";

import {YuvaCommitteeData} from './CommitteesData'
import CommitteeBoxes from './CommitteeBoxes';

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

const YuvaCommittee = () => {
  return (
    <>      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                Yuva Committee
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={YuvaCommitteeData}
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

export default YuvaCommittee
