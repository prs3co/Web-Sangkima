import mongoose from 'mongoose'

const { Schema } = mongoose

const potencySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Potency || mongoose.model('Potency', potencySchema)