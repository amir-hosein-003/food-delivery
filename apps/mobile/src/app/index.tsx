import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { Href, router } from "expo-router";
// import { UserRole } from "@food-delivery/types";

import { useAuth } from "@/context/auth-context";
import { Redirect } from "expo-router";

const Index = () => {
  const { user, isLoading } = useAuth();
  if (isLoading) return null;

  if (!user) return <Redirect href={"/login"} />;

  // if (user.role === UserRole.CUSTOMER) return <Redirect href={"/(customer)"} />;
  // if (user.role === UserRole.RESTAURANT_OWNER)
  //   return <Redirect href={"/(owner)"} />;
  // if (user.role === UserRole.DRIVER) return <Redirect href={"/(driver)"} />;

  return <Redirect href="/login" />;
};

export default Index;
