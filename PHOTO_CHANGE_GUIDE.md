
# How to Change Photos in Your Ghana Welcome Platform

## Home Page Gallery (src/components/home/GallerySection.tsx)
To change the gallery images on the home page:

1. Open `src/components/home/GallerySection.tsx`
2. Find the `galleryImages` array (around line 8)
3. Replace the URLs with your desired images:

```typescript
const galleryImages = [
  "YOUR_NEW_IMAGE_URL_1",
  "YOUR_NEW_IMAGE_URL_2", 
  "YOUR_NEW_IMAGE_URL_3",
  // Add more images as needed
];
```

## Events & Places Images (src/pages/EventsAndPlaces.tsx)
To change event images and galleries:

1. Open `src/pages/EventsAndPlaces.tsx`
2. Find the `events` array (around line 7)
3. For each event, update:
   - `image`: Main event image URL
   - `gallery`: Array of gallery image URLs

```typescript
{
  id: 1,
  title: "Your Event",
  image: "YOUR_MAIN_IMAGE_URL",
  gallery: [
    "GALLERY_IMAGE_1_URL",
    "GALLERY_IMAGE_2_URL",
    // Add more gallery images
  ]
}
```

## Cultural Training Icons
To change lesson icons, update the `icon` field in your Supabase `cultural_lessons` table or modify the `iconMap` in `src/pages/CulturalTraining.tsx`.

## Buddy Profile Pictures
Buddy avatars are automatically generated or can be set via the `avatar_url` field when signing up to become a buddy.

## Tips for Image URLs:
- Use Unsplash: `https://images.unsplash.com/photo-[ID]?w=800&h=600&fit=crop`
- Use your own hosted images
- Ensure images are web-optimized (reasonable file size)
- Use consistent aspect ratios for better layout
