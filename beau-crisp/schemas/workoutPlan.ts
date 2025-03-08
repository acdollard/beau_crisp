export default {
  name: 'workoutPlan',
  title: 'Workout Plans',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'workouts',
      title: 'Workouts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
            },
            {
              name: 'exercises',
              title: 'Exercises',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'exercise',
                      title: 'Exercise',
                      type: 'string',
                    },
                    {
                      name: 'sets',
                      title: 'Sets',
                      type: 'number',
                    },
                    {
                      name: 'reps',
                      title: 'Reps',
                      type: 'string',
                    },
                    {
                      name: 'notes',
                      title: 'Notes',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
} 