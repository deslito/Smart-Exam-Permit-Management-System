import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TextInputProps,
  Pressable,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useToast } from '@/components/ui/useToast';
import { useAuth } from '@/contexts/AuthContext';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

// Role-specific themes (matching loginPage)
const roleThemes = {
  admin: {
    primary: "#0057B7",
    hover: "#003366",
    bg: "#f0f8ff",
    accent: "#FFE600",
  },
  invigilator: {
    primary: "#F7941D",
    hover: "#B6D531",
    bg: "#fff8f0",
    accent: "#003366",
  },
  student: {
    primary: "#228b22",
    hover: "#0057B7",
    bg: "#f0fff0",
    accent: "#003366",
  },
} as const;

interface ChangePasswordModalProps {
  isVisible: boolean;
  onClose: () => void;
  userRole?: 'admin' | 'invigilator' | 'student';
}

// Themed TextInput component (matching loginPage)
interface ThemedTextInputProps extends TextInputProps {
  theme: {
    primary: string;
    bg: string;
    hover?: string;
    accent?: string;
  };
}

// Update ThemedTextInput to have consistent padding
function ThemedTextInput({ theme, style, ...rest }: ThemedTextInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      {...rest}
      style={[
        tw`rounded-md py-3`, // Increased vertical padding
        {
          backgroundColor: theme.bg,
          borderColor: isFocused ? theme.primary : '#ccc',
          borderWidth: isFocused ? 2 : 1,
          borderBottomColor: theme.primary,
          borderBottomWidth: 4,
          paddingLeft: 16, // Consistent left padding
          paddingRight: 48, // Space for the icon (icon width + padding)
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          height: 48, // Fixed height for consistency
          ...Platform.select({ web: { outlineWidth: 0 } }),
        },
        style,
      ]}
      placeholderTextColor="#888"
      underlineColorAndroid="transparent"
      selectionColor={theme.primary}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}

// Update the PasswordToggle component's positioning
const PasswordToggle = ({
  showPassword,
  setShowPassword,
  theme,
}: {
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  theme: typeof roleThemes[keyof typeof roleThemes];
}) => (
  <Pressable
    onPress={() => setShowPassword(!showPassword)}
    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    style={[
      tw`absolute`,
      {
        right: 16, // consistent right padding
        top: '50%',
        zIndex: 10,
      },
    ]}
  >
    <Ionicons
      name={showPassword ? "eye-off" : "eye"}
      size={24}
      color={theme.primary}
    />
  </Pressable>
);

export default function ChangePasswordModal({ 
  isVisible, 
  onClose, 
  userRole = 'student' 
}: ChangePasswordModalProps) {
  // Add password visibility state
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const { changePassword } = useAuth();

  const theme = roleThemes[userRole];
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      showToast('error', 'Passwords do not match');
      return;
    }

    if (newPassword.length < 6) {
      showToast('error', 'New password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      await changePassword(currentPassword, newPassword);
      showToast('success', 'Password changed successfully');
      onClose();
      // Reset form
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      showToast('error', error instanceof Error ? error.message : 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center p-8`}>
        <View style={[
          tw`bg-white w-full max-w-md rounded-2xl p-8`, // Increased padding from p-6 to p-8
          {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 10,
            elevation: 5,
          }
        ]}>
          {/* Header */}
          <View style={tw`flex-row items-center mb-8`}> {/* Increased margin from mb-6 to mb-8 */}
            <Feather name="lock" size={24} color={theme.primary} />
            <Text style={[tw`text-xl font-bold ml-3`, { color: theme.primary }]}> {/* Increased margin from ml-2 to ml-3 */}
              Change Password
            </Text>
            <Pressable
              style={tw`ml-auto`}
              onPress={onClose}
            >
              <Feather name="x" size={24} color="#666" />
            </Pressable>
          </View>

          {/* Form Fields */}
          <View style={tw`my-6`}> {/* Increased spacing from my-4 to my-6 */}
            <View style={tw`relative`}>
              <Text style={tw`text-sm font-medium text-gray-700 mb-1`}>
                Current Password
              </Text>
              <ThemedTextInput
                theme={theme}
                secureTextEntry={!showCurrentPassword}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder="Enter current password"
              />
              <PasswordToggle 
                showPassword={showCurrentPassword}
                setShowPassword={setShowCurrentPassword}
                theme={theme}
              />
            </View>

            <View style={tw`relative`}>
              <Text style={tw`text-sm font-medium text-gray-700 mb-1 mt-3`}>
                New Password
              </Text>
              <ThemedTextInput
                theme={theme}
                secureTextEntry={!showNewPassword}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter new password"
              />
              <PasswordToggle 
                showPassword={showNewPassword}
                setShowPassword={setShowNewPassword}
                theme={theme}
              />
            </View>

            <View style={tw`relative`}>
              <Text style={tw`text-sm font-medium text-gray-700 mb-1 mt-3`}>
                Confirm New Password
              </Text>
              <ThemedTextInput
                theme={theme}
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm new password"
              />
              <PasswordToggle 
                showPassword={showConfirmPassword}
                setShowPassword={setShowConfirmPassword}
                theme={theme}
              />
            </View>
          </View>

          {/* Buttons */}
          <View style={tw`flex-row justify-end mt-10 mx-6`}> {/* Increased margin and spacing */}
            <Pressable
              style={[
                tw`px-8 py-3 rounded-xl`, // Increased horizontal padding from px-4 to px-6
                {
                  backgroundColor: 'transparent',
                  borderWidth: 1,
                  borderColor: theme.primary,
                }
              ]}
              onPress={onClose}
            >
              <Text style={{ color: theme.primary }}>Cancel</Text>
            </Pressable>

            <Animated.View style={animatedStyle}>
              <Pressable
                style={[
                  tw`px-8 py-3 rounded-xl flex-row items-center justify-center min-w-[120px]`, // Added min-width and justify-center
                  {
                    backgroundColor: theme.primary,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                    opacity: loading ? 0.7 : 1,
                    borderWidth: 1,
                    borderColor: theme.accent,
                  }
                ]}
                onPress={handleChangePassword}
                disabled={loading}
                onPressIn={() => { scale.value = withSpring(0.96) }}
                onPressOut={() => { scale.value = withSpring(1) }}
              >
                {loading ? (
                  <ActivityIndicator color="white" size="small" />
                ) : (
                  <>
                    <Feather name="save" size={16} color="white" style={tw`mr-1`} /> {/* Increased margin from mr-1 to mr-2 */}
                    <Text style={tw`text-white font-semibold`}>Save Changes</Text>
                  </>
                )}
              </Pressable>
            </Animated.View>
          </View>
        </View>
      </View>
    </Modal>
  );
}