import mongoose from 'mongoose'

const { Schema } = mongoose

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Blog || mongoose.model('Blog', blogSchema)