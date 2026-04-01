import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function analyzePhoto(imageUrl: string) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: 'Analyze this photograph and provide constructive feedback on composition, lighting, technical aspects, and suggest improvements. Keep it concise but helpful.',
            },
            {
              type: 'image_url',
              image_url: { url: imageUrl },
            },
          ],
        },
      ],
      max_tokens: 300,
    })

    return response.choices[0]?.message?.content || 'Unable to analyze image'
  } catch (error) {
    console.error('Error analyzing photo:', error)
    throw new Error('Failed to analyze photo')
  }
}

export { openai }
