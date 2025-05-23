export default function NFTCard({ nft }: any) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginTop: 20 }}>
      <h4>{nft.name}</h4>
      <img src={nft.image} alt={nft.name} width="200" />
      <p>{nft.description}</p>
      <p>Price: {nft.price} Pi</p>
    </div>
  );
}
