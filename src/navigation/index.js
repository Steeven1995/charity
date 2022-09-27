import React from "react"
import { useAuthentication } from '../../utils/hook/useAuthentification'
import AppStack from './appStack';
import AuthStack from './authStack';

export default function RootNavigation() {
  const { user } = useAuthentication();
  return user ? <AppStack /> : <AuthStack />;
}