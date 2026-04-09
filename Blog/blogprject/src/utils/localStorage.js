const STORAGE_KEY = 'kodex_blogs_data';

export const saveBlogs = (blogs) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const loadBlogs = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return [];
  }
};
