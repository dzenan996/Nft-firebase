import { useEffect, useState } from "react";
import UploadForm from "../components/UploadForm";
import NFTCard from "../components/NFTCard";
import { db } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function Home() {
  const [nfts, setNfts] = useState<any[]>([]);

  useEffect(() => {
    const loadNFTs = async () => {
      const q = query(collection(db, "nfts"), where("status", "==", "approved"));
      const snapshot = await getDocs(q);
      setNfts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    loadNFTs();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Pi NFT Marketplace</h1>
      <UploadForm />
      {nfts.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
}
