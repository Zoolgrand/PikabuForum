import { getAuth } from 'firebase/auth';

export function getCurrentUser() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  return currentUser;
}

