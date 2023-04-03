import { useContext } from "react";
import { AuthContext } from "../../context";
import { Button, TextField } from "@mui/material";
import { db } from "../../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function ChatsInput() {
  const { user } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("message"));
    sendMessage(data.get("message"));
    // Login(data.get("email"), data.get("password"));
  };

  async function sendMessage(message) {
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        text: message,
        photoURL: user.photoURL,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return <div style={{ backgroundColor: "blue", height: "100%" }}>Input</div>;
}

export default ChatsInput;