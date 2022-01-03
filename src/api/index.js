

export const getCategories = async (success, failure) => {
  try {
    const response = await fetch(`${url}/content/free-items`, reqOptions);
    const categories = await response.json();
    success(categories);
  } catch (error) {
    failure(error);
  }
}
