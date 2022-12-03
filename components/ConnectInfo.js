import ConnectButton from "./Buttons/Connect";

export default function ({ isConnected, setIsConnected, setAddress }) {
  return (
    <div className="mt-8 md:mt-0  w-full md:basis-1/2 flex flex-col text-center md:text-left md:ml-8">
      <p className="font-outfit text-connect-blue text-2xl md:text-5xl font-medium">
        Connect Wallet
      </p>
      <p className="font-outfit text-xs mt-2 md:text-lg md:mb-24">
        Choose from the listed wallets to connect
        <br /> your wallet.
      </p>
      <ConnectButton
        src="/metamask.svg"
        setAddress={setAddress}
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />
      <ConnectButton
        src="/Coinbase.svg"
        setAddress={setAddress}
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />
      <ConnectButton
        src="/Bitpay.svg"
        setAddress={setAddress}
        isConnected={isConnected}
        setIsConnected={setIsConnected}
      />
      <p className="font-outfit text-xs mt-2 md:text-lg text-connect-blue text-center">
        More options
      </p>
    </div>
  );
}
