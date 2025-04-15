'use server'

import { storePost } from '@/lib/posts'
import { redirect } from 'next/navigation'

//When passing into useFormState as the action the createPost function will receive 2 arg instead of one, prevState then the formData.
//Instead of just having formData as the only arg if used without useFormData
export async function createPost(prevState, formData) {
  const title = formData.get('title')
  const image = formData.get('image')
  const content = formData.get('content')

  let errors = []

  if (!title || title.trim() === 0) {
    errors.push('Title is required.')
  }
  if (!content || content.trim() === 0) {
    errors.push('Content is required')
  }
  if (!image || image.size === 0) {
    errors.push('Image is required')
  }

  if (errors.length > 0) {
    return { errors }
  }

  await storePost({
    imageUrl: '',
    title,
    content,
    userId: 1,
  })

  redirect('/feed')
}
