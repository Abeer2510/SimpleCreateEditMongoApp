import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  text1: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  text2: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  num1: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;