import React from 'react'

function PlanLayout({children}) {
  return (
    <div style={{width: "100%", maxwidth: "500px", margin: 'auto'}}>
        {children}
    </div>
  )
}

export default PlanLayout