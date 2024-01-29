import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncMenus = (userId, menuUpdated) => {
  const cachette = doc(db, "users", userId )
  const nourriture = {
    username: userId,
    menu: menuUpdated
  }
  setDoc(cachette, nourriture)
}

export const getMenu = async (userId) => {
  const docRef = doc(db, "users", userId)
  const docSnapshot = await getDoc(docRef)
  if (docSnapshot.exists()) {
    const {menu} = docSnapshot.data() // le username de la data ne nous interesse donc on extrait que le menu
    return menu
  }
}
