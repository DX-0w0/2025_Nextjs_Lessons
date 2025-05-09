'use server'

import { uploadImage } from '@/lib/cloundinary'
import { storePost, updatePostLikeStatus } from '@/lib/posts'
import { revalidatePath } from 'next/cache'
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

  let imageUrl

  try {
    imageUrl = await uploadImage(image)
  } catch (error) {
    throw new Error('Image uploaded failed, post was not created!!')
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  })

  revalidatePath('/', 'layout')
  redirect('/feed')
}

export async function togglePostLikeStatus(postId) {
  await updatePostLikeStatus(postId, 2)
  revalidatePath('/', 'layout')
}
