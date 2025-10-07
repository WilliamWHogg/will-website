# Project Images Structure

This folder contains all images for the projects displayed on the website, now organized by project folders.

## New Folder Structure

Each project now has its own folder:
- `string-art-printer/` - String Art Printer project images
- `linear-actuator-system/` - Linear Actuator System images
- `marble-display-machine/` - Marble Display Machine images
- `biomedical-materials-research/` - Biomedical Materials Lab Research images
- `ti6al4v-fatigue-research/` - Ti6Al4V Fatigue Research images
- `advanced-manufacturing-systems/` - Advanced Manufacturing Systems images

## File Naming Convention

### Within each project folder:
- `main.jpg` - Primary thumbnail image (shown on the main grid)
- Additional images with descriptive names:
  - `mechanism.jpg`, `process.jpg`, `result.jpg`
  - `assembly.jpg`, `components.jpg`, `testing.jpg`
  - `setup.jpg`, `analysis.jpg`, `specimens.jpg`

### Image Requirements:
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Recommended size: 800x600 pixels or similar aspect ratio
- Keep file sizes under 2MB for optimal loading

## How Images Work:

1. **Thumbnail**: The first image in the `images` array (usually `main.jpg`) is shown as the card thumbnail
2. **Slideshow**: When a project card is expanded, users can navigate through all images
3. **Order**: Images are displayed in the order specified in the JSON file's `images` array

## Adding New Projects:

1. Create a new folder with your project's folder name (use hyphens, lowercase)
2. Add images to that folder following the naming convention
3. Update the `projects.json` file with the folder name and image list