import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Home: NextPage = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            src="/logo.png"
            height={75}
            width={115}
            style={{
              objectFit: "contain",
            }}
            alt="logo"
          />
        </div>
        <h1 className={styles.h1}> Zpee-NFT's, The Art of Being 👋</h1>
        <p className={styles.explain}>
          Click here and Get your NFT's&rsquo;s Unique NFT's{""}
          <b>
            <a
              href="https://portal.thirdweb.com/solana"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.lightPurple}
            ></a>
          </b>
          .
        </p>

        <WalletMultiButtonDynamic />
      </div>
    </>
  );
};

export default Home;
