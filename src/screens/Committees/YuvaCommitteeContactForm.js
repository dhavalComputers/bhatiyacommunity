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

import {YuvaCommitteeData} from './CommitteesData'

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

const YuvaCommitteeContactForm = () => {
  return (
    <>      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
                Yuva Committee Contact Information Form
            </CCardHeader>
            <CCardBody>
            
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdpKUooaY_Z_Oa0LjZEdCfvAxR6Dk4svCVRjBvtarj3fOQfkQ/viewform?embedded=true" width="100%" height="1050" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
       
    </>
  )
}

export default YuvaCommitteeContactForm
