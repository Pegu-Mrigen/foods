"use client"
import { useProfile } from '@/components/UseProfile'
import UserForm from '@/components/layout/UserForm'
import UserTabs from '@/components/layout/UserTabs'
import React from 'react'

const EditUserPage = () => {
const {loading, userData} = useProfile()

if(loading){
    return "Loading user info... "
}
if(!userData.admin){
    return "Not an admin"
}

  return (
    <section className='mt-8 mx-auto'>
        <UserTabs isAdmin={true} />
        <div className="mt-8">
            User info form

            <div>
                <UserForm />
            </div>
        </div>
    </section>
  )
}

export default EditUserPage