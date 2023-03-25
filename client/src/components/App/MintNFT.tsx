export const MintNFTForm = function () {
  return (
    <form>
      <label htmlFor='tokenId'>Token ID</label>
      <input id='tokenId' placeholder='420' />
      <button>Mint</button>
    </form>
  );
};
