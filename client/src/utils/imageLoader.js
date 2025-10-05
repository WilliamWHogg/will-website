// Vite image loader for project images
const imageModules = import.meta.glob('../assets/projects/**/*.{png,jpg,jpeg,gif,webp,svg}', { eager: true });

// Convert '../assets/projects/folder/image.jpg' paths to { folder: { image.jpg: url }}
const imageMap = {};
for (const path in imageModules) {
  const match = path.match(/\/projects\/([^/]+)\/([^/]+)$/);
  if (match) {
    const [, folder, fileName] = match;
    if (!imageMap[folder]) {
      imageMap[folder] = {};
    }
    imageMap[folder][fileName] = imageModules[path].default;
  }
}

export function getProjectImage(folder, fileName) {
  if (!folder || !fileName) return null;
  return imageMap[folder]?.[fileName] || null;
}