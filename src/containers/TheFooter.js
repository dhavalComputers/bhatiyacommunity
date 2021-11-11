import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">&copy; 2021 Bhatiya Community Portal.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="#" rel="noopener noreferrer" style={{pointerEvents: "none"}}>Dhruv</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
