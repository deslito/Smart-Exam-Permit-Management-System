import Constants from 'expo-constants';

const {
  EXPO_PUBLIC_API_BASE_URL,
  EXPO_PUBLIC_ENV,
  EXPO_PUBLIC_QR_CODE_BASE_URL,
} = Constants.expoConfig?.extra || {};

if (!EXPO_PUBLIC_API_BASE_URL) {
  throw new Error('Missing EXPO_PUBLIC_API_BASE_URL in app config');
}
if (!EXPO_PUBLIC_QR_CODE_BASE_URL) {
  throw new Error('Missing EXPO_PUBLIC_QR_CODE_BASE_URL in app config');
}

const config = {
  API_BASE_URL: EXPO_PUBLIC_API_BASE_URL,
  ENV: EXPO_PUBLIC_ENV ?? 'development',
  QR_CODE_BASE_URL: EXPO_PUBLIC_QR_CODE_BASE_URL,
};

export default config;
export const { API_BASE_URL, ENV, QR_CODE_BASE_URL } = config;