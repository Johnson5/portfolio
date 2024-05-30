export const validateString = (value: unknown, length: number) => {
  if (!value || typeof value !== "string" || value.length > length) {
    return false;
  }
  return true;
};
