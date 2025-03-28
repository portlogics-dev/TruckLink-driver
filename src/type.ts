import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  MainStack: undefined;
  AuthStack: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  forgotPassword: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type MainStackParamList = {
  Home: undefined;
  OrderHistory: undefined;
  Settings: undefined;
};

export type MainStackScreenProps<T extends keyof MainStackParamList> =
  NativeStackScreenProps<MainStackParamList, T>;

// useNavigation type
declare module "@react-navigation/native" {
  type RootParamList = RootStackParamList;
}
