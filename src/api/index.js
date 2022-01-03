// const apiURL = process.env.REACT_APP_API_URL;
const apiURL = 'https://academy-video-api.herokuapp.com';
export const getFreeItems = async (success, failure) => {
  try {
    const reqOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${apiURL}/content/free-items`, reqOptions);
    const data = await response.json();

    success(data);
  } catch (error) {
    failure(error);
  }
};

const api = {
  getFreeItems,
};

export default api;
