import React, {Fragment ,useEffect, useState } from 'react'
import Formula from './Formula'
export default function   ({formulae}) { 


return (
      <Fragment>
          {
              formulae.map((formula)=>{
                  return <Formula formula= {formula} />
              })
          }
      </Fragment>
)

}