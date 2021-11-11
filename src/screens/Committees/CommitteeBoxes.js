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

const CommitteeBoxes = () => {
  return (
    <>      
      <CCol xs="12" xl="12">
      <CRow>
        
        <CCol xs="12" xl="12">
          <CRow>
            <CCol sm="6" md="4">
              <Link to="/YuvaCommittee">
                <CWidgetProgressIcon
                  className="mb-0"
                  header="100"
                  text="Yuva Committee Member"
                  color="gradient-success"
                  inverse
                >
                  <CIcon name="cil-people" height="36" />
                </CWidgetProgressIcon>
              </Link>
            </CCol>
            <CCol sm="6" md="4">
              <Link to="/PragatiMandal">
                <CWidgetProgressIcon
                  header="150"
                  text="Pragati Mandal Committee Member"
                  color="gradient-warning"
                  inverse
                >
                  <CIcon name="cil-people" height="36" />
                </CWidgetProgressIcon>
              </Link>
            </CCol>
            <CCol sm="6" md="4">
              <Link to="/BaresiCommittee">
                <CWidgetProgressIcon
                  header="350"
                  text="Baresi Committee Member"
                  color="gradient-info"
                  inverse
                >
                  <CIcon name="cil-people" height="36" />
                </CWidgetProgressIcon>
              </Link>
            </CCol>
            <CCol sm="6" md="4">

              <CWidgetProgressIcon
                header="350"
                text="Committee Member"
                color="gradient-primary"
                inverse
              >
                <CIcon name="cil-people" height="36" />
              </CWidgetProgressIcon>

            </CCol>




          </CRow>

        </CCol>
      </CRow>
      </CCol>
    </>
  )
}

export default CommitteeBoxes
