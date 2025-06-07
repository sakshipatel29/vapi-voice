import Agent from '@/components/agent'
import React from 'react'

const page = () => {
  return (
    <>
      <div>home page</div>
      <Agent userName='You' userId='user1' type='generate'/>
    </>
  )
}

export default page