const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const getPosts = async () => await fetch(`${baseUrl}/posts`).then(res => res.json());