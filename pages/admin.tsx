import { useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore";

export default function Admin() {
  const [nfts, setNfts] = useState<any[]>([]);
  const username = "dzenan996"; // Hardkodirano za tvoje potrebe

  useEffect(() => {
    const loadNFTs = async () => {
      const q = query(collection(db, "nfts"), where("status", "==", "pending"));
      const snapshot = await getDocs(q);
      setNfts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    loadNFTs();
  }, []);

  const approveNFT = async (id: string) => {
    await updateDoc(doc(db, "nfts", id), { status: "approved" });
    alert("Approved!");
  };

  const deleteNFT = async (id: string) => {
    await deleteDoc(doc(db, "nfts", id));
    alert("Deleted!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Panel</h1>
      <p>Logged in as: {username}</p>
      {nfts.map((nft) => (
        <div key={nft.id} style={{ border: "1px solid gray", marginBottom: 10, padding: 10 }}>
          <h4>{nft.name}</h4>
          <img src={nft.image} width="200" alt={nft.name} />
          <p>{nft.description}</p>
          <button onClick={() => approveNFT(nft.id)}>Approve</button>
          <button onClick={() => deleteNFT(nft.id)} style={{ marginLeft: 10 }}>Delete</button>
        </div>
      ))}
    </div>
  );
}
