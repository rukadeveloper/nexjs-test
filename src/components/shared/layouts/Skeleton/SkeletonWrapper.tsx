import React from 'react'

import SkeletonHeader from './SkeletonHeader'
import SkeletonHeader2 from './SkeletonHeader2'

export default function SkeletonWrapper() {
  return (
    <div>
      <SkeletonHeader />
      <SkeletonHeader2 />
    </div>
  )
}
