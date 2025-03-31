
/**
 * Format list of breed names
 * @param {Array} breeds - List of breed names
 * @returns {Array} - Formatted list of breed names
 * @example
 * const breeds = ['bulldog', 'poodle', 'beagle'];
 * const formattedBreeds = formatBreedNames(breeds);
 * console.log(formattedBreeds); // [{ breed: 'bulldog', selected: false, visible: false}, ...]
 * @description
 * This function takes an array of breed names and formats them into an array of objects.
 * Each object contains the breed name, a selected property (default false), and a visible property (default false).
 * The function is useful for managing the state of breed names in a UI component.
 */

export default function formatBreedNames(breeds) {
  const randomizedBreeds = randomizeArray(breeds);
  return randomizedBreeds.map((breed) => ({
    name: breed,
    selected: false,
    visible: false,
  }));
}

export function randomizeArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}