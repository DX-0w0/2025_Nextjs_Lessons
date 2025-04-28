'use server'

import { redirect } from 'next/navigation'
import { saveMeal } from './meals'
import { revalidatePath } from 'next/cache'

function isInvaldText(text) {
  return !text || text.trim() === ''
}

export async function shareMeal(prevSate, formData) {
  // 'use server'
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  }

  if (
    isInvaldText(meal.title) ||
    isInvaldText(meal.summary) ||
    isInvaldText(meal.instructions) ||
    isInvaldText(meal.creator) ||
    isInvaldText(meal.creator_email) ||
    !meal.creator_email.includes('@') ||
    !meal.image ||
    meal.image.size === 0
  ) {
    // throw new Error('Invalid Input')   <-- option #1

    // option #2
    return {
      message: 'Invalid Input, please check your input fields',
    }
  }

  await saveMeal(meal)
  revalidatePath('/meals', 'layout')
  redirect('/meals')
}
