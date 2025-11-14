# Photography Data Structure

This file explains how to add your photography collections to the website.

## File Structure

Organize your photos in the following structure:

```
public/photography/
├── event-name-1/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── photo3.jpg
├── place-name-1/
│   ├── photo1.jpg
│   └── photo2.jpg
└── another-event/
    └── photo1.jpg
```

## Adding a New Collection

1. **Create a folder** in `public/photography/` with a descriptive name (e.g., `sunset-beach-2024` or `taipei-night-market`)

2. **Add your photos** to that folder

3. **Update `photography.ts`** with your collection details:

```typescript
{
  id: "sunset-beach-2024",
  title: "Sunset at the Beach",
  description: "A beautiful sunset captured during summer vacation",
  date: "Summer 2024",
  location: "Beach Name, City",
  photos: [
    {
      src: "/photography/sunset-beach-2024/photo1.jpg",
      alt: "Sunset over the ocean"
    },
    {
      src: "/photography/sunset-beach-2024/photo2.jpg",
      alt: "Waves crashing on the shore"
    },
    // Add more photos...
  ]
}
```

## Photo Requirements

- Supported formats: JPG, PNG, WebP
- Recommended size: 1200-2000px on the longest side
- Keep file sizes reasonable for web (under 500KB per photo is ideal)

## Tips

- Use descriptive folder names (kebab-case recommended)
- Add meaningful alt text for accessibility
- Organize photos chronologically or by theme
- You can add multiple collections to showcase different events/places

