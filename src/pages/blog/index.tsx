import { DynamicHead } from '@/components/share'
import AppBannerImg from '@/components/share/AppBannerImg'
import { useRouter } from 'next/router'
import React from 'react'

function BlogPage() {
  const router = useRouter()
  return (
    <>
      <DynamicHead title="Blogs - GMQ Global"  canonicalPath={router?.pathname} />
    </>
  )
}

export default BlogPage
