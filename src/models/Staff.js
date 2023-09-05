import mongoose from 'mongoose'

const { Schema } = mongoose

const staffSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Staff || mongoose.model('Staff', staffSchema)