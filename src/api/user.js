import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../fakeData/fakeMenu"

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId)
  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const userRecieved = docSnapshot.data()
    return userRecieved
  }
}

export const addNewUser = (userId) => {
  const docRef = doc(db, "users", userId)
  const food = {
    username: userId,
    menu: fakeMenu.LARGE,
  }
  setDoc(docRef, food)
}

export const authenticateUser = async (userId) => {
  const existingUser = await getUser(userId)
  if (!existingUser) {
    addNewUser(userId)
  }
}
