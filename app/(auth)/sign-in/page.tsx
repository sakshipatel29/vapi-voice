import AuthForm from '@/components/auth-form'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <AuthForm type="sign-in" />
    </div>
  )
}

export default page