import { buildFeedbackPath, extractFeedback } from '.'

function handler(req, res) {
  //   if (req.method === 'DELETE') {} // How to handle delete on a item
  const feedbackId = req.query.feedbackId
  const filepath = buildFeedbackPath()
  const data = extractFeedback(filepath)
  const selectedFeedback = data.find((feedback) => feedback.id === feedbackId)

  res.status(200).json({
    feedback: selectedFeedback,
  })
}

export default handler
