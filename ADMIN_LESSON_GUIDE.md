
# Adding Cultural Lessons Manually

To manually add cultural lessons to the Eshu platform, you can use the Supabase SQL Editor or connect directly to your database.

## Database Table: `cultural_lessons`

The lessons are stored in the `cultural_lessons` table with the following structure:

- `id`: Auto-generated unique identifier
- `title`: The lesson title (text)
- `description`: Brief description of the lesson (text)
- `duration`: Estimated time to complete (e.g., "15 minutes")
- `difficulty`: Difficulty level ("Beginner", "Intermediate", "Advanced")
- `icon`: Icon name from Lucide React (e.g., "Users", "MapPin", "Heart")
- `content`: JSON array containing the lesson content sections
- `created_at`: Auto-generated timestamp

## Adding a New Lesson

### Option 1: Using Supabase SQL Editor

1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Use this template to insert a new lesson:

```sql
INSERT INTO cultural_lessons (title, description, duration, difficulty, icon, content)
VALUES (
  'Your Lesson Title',
  'Brief description of what this lesson covers',
  '20 minutes',
  'Beginner',
  'Users',
  '[
    {
      "type": "text",
      "content": "Introduction paragraph explaining the topic..."
    },
    {
      "type": "heading",
      "content": "Section Title"
    },
    {
      "type": "text",
      "content": "More detailed explanation with examples..."
    },
    {
      "type": "list",
      "content": [
        "First important point",
        "Second important point",
        "Third important point"
      ]
    }
  ]'::jsonb
);
```

### Option 2: Using a Database Client

Connect to your PostgreSQL database and insert records directly.

## Content Structure

The `content` field is a JSON array that supports different content types:

### Text Content
```json
{
  "type": "text",
  "content": "Your paragraph text here..."
}
```

### Headings
```json
{
  "type": "heading",
  "content": "Section Title"
}
```

### Lists
```json
{
  "type": "list",
  "content": [
    "First item",
    "Second item",
    "Third item"
  ]
}
```

## Example Complete Lesson

```sql
INSERT INTO cultural_lessons (title, description, duration, difficulty, icon, content)
VALUES (
  'Ghanaian Greetings and Social Etiquette',
  'Learn the proper ways to greet people and basic social customs in Ghana',
  '25 minutes',
  'Beginner',
  'Users',
  '[
    {
      "type": "text",
      "content": "Greetings are extremely important in Ghanaian culture and set the tone for all social interactions. Taking time to greet people properly shows respect and builds relationships."
    },
    {
      "type": "heading",
      "content": "Common Greetings"
    },
    {
      "type": "text",
      "content": "In Ghana, greetings vary by time of day and the local language. Here are some essential greetings in English and Twi:"
    },
    {
      "type": "list",
      "content": [
        "Good morning - Maakye (Twi)",
        "Good afternoon - Maaha (Twi)",
        "Good evening - Maadwo (Twi)",
        "How are you? - Wo ho te sɛn? (Twi)"
      ]
    },
    {
      "type": "heading",
      "content": "Greeting Etiquette"
    },
    {
      "type": "list",
      "content": [
        "Always greet the eldest person first",
        "Use your right hand for handshakes",
        "Take time - dont rush greetings",
        "Ask about family and health"
      ]
    }
  ]'::jsonb
);
```

## Available Icons

You can use any icon from Lucide React. Popular choices for lessons include:
- `Users` (for social topics)
- `MapPin` (for location-based topics)
- `Heart` (for cultural values)
- `Home` (for domestic topics)
- `Utensils` (for food topics)
- `Music` (for entertainment topics)
- `Book` (for educational topics)

## Lesson Difficulty Levels

- **Beginner**: Basic concepts for newcomers
- **Intermediate**: More complex topics requiring some cultural knowledge
- **Advanced**: Deep cultural insights and nuanced topics

## Tips for Creating Good Lessons

1. Keep content concise and scannable
2. Use headings to break up long sections
3. Include practical examples
4. End with actionable takeaways
5. Consider cultural sensitivity
6. Test the content structure in the app before publishing
