export const capitalizeFirstLetter = (category: string) => {
  return category
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
