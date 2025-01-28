import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

export default function CheckboxWrap({ id, con } : { id : string, con: string }) {
  return (
    <div className="mt-4 flex items-center gap-4 mb-10">
      <Checkbox id={id} />
      <label htmlFor={id}>{con}</label> 
    </div>
  )
}
