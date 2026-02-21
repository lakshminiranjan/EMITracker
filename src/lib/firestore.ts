import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from './firebase';
import type { AppUser, EMI, Subscription } from '@/types';

export const createOrUpdateUser = async (user: AppUser) => {
  await setDoc(doc(db, 'users', user.id), user, { merge: true });
};

export const fetchUser = async (userId: string) => {
  const snapshot = await getDoc(doc(db, 'users', userId));
  return snapshot.exists() ? (snapshot.data() as AppUser) : null;
};

export const addEmi = async (emi: Omit<EMI, 'id'>) => {
  await addDoc(collection(db, 'emis'), emi);
};

export const addSubscription = async (subscription: Omit<Subscription, 'id'>) => {
  await addDoc(collection(db, 'subscriptions'), subscription);
};

export const fetchUserEmis = async (userId: string) => {
  const q = query(collection(db, 'emis'), where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => ({ id: item.id, ...(item.data() as Omit<EMI, 'id'>) }));
};

export const fetchUserSubscriptions = async (userId: string) => {
  const q = query(collection(db, 'subscriptions'), where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((item) => ({ id: item.id, ...(item.data() as Omit<Subscription, 'id'>) }));
};
