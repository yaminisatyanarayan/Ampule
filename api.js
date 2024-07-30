// src/api.js
import axios from 'axios';

const API_BASE_URL = ' http://127.0.0.1:5000/result';

export const fetchResult = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/result`);
    return response.data;
  } catch (error) {
    console.error('Error fetching result:', error);
    throw error;
  }
};

export const fetchVideoFeed = () => {
  return `${API_BASE_URL}/video_feed`;
};
