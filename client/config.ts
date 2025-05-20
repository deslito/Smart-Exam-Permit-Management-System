import Constants from 'expo-constants';

const {
  EXPO_PUBLIC_API_BASE_URL,
  EXPO_PUBLIC_ENV,
} = Constants.expoConfig?.extra || {};

if (!EXPO_PUBLIC_API_BASE_URL) {
  throw new Error('Missing EXPO_PUBLIC_API_BASE_URL in app config');
}

const config = {
  API_BASE_URL: EXPO_PUBLIC_API_BASE_URL,
  ENV: EXPO_PUBLIC_ENV ?? 'development', // fallback just in case
};

export default config;
export const { API_BASE_URL, ENV } = config;