// Helper function to extract image URL from Strapi coverImage
export const extractImageUrl = (coverImage: any): string => {
  if (!coverImage) {
    return '';
  }
  return (
    coverImage.formats?.medium?.url ||
    coverImage.formats?.small?.url ||
    coverImage.url ||
    ''
  );
};
