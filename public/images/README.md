# Service Icons - Image Folder

This folder contains the service icons/images used in your repair website.

## Current Images (SVG Placeholders)

- **washing-machine.svg** - Washing Machine Repair icon
- **refrigerator.svg** - Refrigerator Repair icon  
- **air-conditioner.svg** - Air Conditioner Service icon
- **electrical.svg** - Electrical Work icon
- **geyser.svg** - Geyser & Water Heater icon
- **plumbing.svg** - Plumbing & Drainage icon

## How to Replace with Your Own Images

### Option 1: Use Your Own PNG/JPG Images
1. Replace the SVG files with your PNG or JPG images
2. Keep the **exact same filenames** (e.g., `washing-machine.png`)
3. Image size recommended: 200x200px or 300x300px

### Option 2: Use Different Image Formats
1. Update the file extensions in:
   - `src/components/ServiceCard.jsx` (line with `getImagePath`)
   - `src/components/Header.jsx` (line with `serviceNames`)
   
   Change `.svg` to `.png` or `.jpg`

### Example:
```javascript
// In ServiceCard.jsx
return `/images/${serviceName}.png`; // Instead of .svg
```

## Image Guidelines

- **Format**: PNG (transparent background) or JPG
- **Size**: 200x200px to 400x400px for best quality
- **Color**: Match your brand colors (Blue, Teal, Orange)
- **Style**: Professional, clean, modern look

## Where Images Are Displayed

1. **Service Cards** - Main services section (80x80px display)
2. **Dropdown Menu** - Header Services dropdown (30x30px display)

Your website will automatically fallback to emoji icons if images fail to load.
