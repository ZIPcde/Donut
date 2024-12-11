// src/config.js
const config = {
    baseURL: process.env.VUE_APP_API_BASE_URL || 'http://localhost:3000',
    imageBaseURL: process.env.VUE_APP_IMAGE_BASE_URL || 'http://localhost:3000/api/images',
};

export default config;
