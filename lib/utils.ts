/**
 * Utility function to combine class names
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Utility function to format dates, etc.
 */
export const formatDate = (date: Date): string => {
  // TODO: Implement date formatting
  return date.toLocaleDateString();
};
