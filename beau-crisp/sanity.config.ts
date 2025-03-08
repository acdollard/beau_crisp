import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import post from './schemas/post'
import workoutPlan from './schemas/workoutPlan'
import user from './schemas/user'

export default defineConfig({
  name: 'default',
  title: 'Beau Crisp',

  projectId: 'agaaxyz0',
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: [post, workoutPlan, user],
  },
})
