import * as React from 'react';
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import { useEffect, useState } from 'react';

import {
  abi as mintableABI,
  address as mintableAddress,
} from '../../assets/MyToken.json';

function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

export function MintNFTForm() {
  const [tokenId, setTokenId] = React.useState('');
  const debouncedTokenId = useDebounce(tokenId);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: mintableAddress as `0x${string}`,
    abi: mintableABI,
    functionName: 'safeMint',
    args: [parseInt(debouncedTokenId)],
    enabled: Boolean(debouncedTokenId),
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        write?.();
      }}
    >
      <label for='tokenId'>Token ID</label>
      <input
        id='tokenId'
        onChange={(e) => setTokenId(e.target.value)}
        placeholder='420'
        value={tokenId}
      />
      <button disabled={!write || isLoading}>
        {isLoading ? 'Minting...' : 'Mint'}
      </button>
      {isSuccess && (
        <div>
          Successfully minted your NFT!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </form>
  );
}
