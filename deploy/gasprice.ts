// npx ts-node ./deploy/gasprice.ts

import { Provider as ZkProvider } from "zksync-ethers";

import * as dotenv from "dotenv";
dotenv.config();

async function main() {
    const CRONOS_ZKEVM_TESTNET_URL = "https://rpc-zkevm-t0.cronos.org";
    const l2Provider = new ZkProvider(CRONOS_ZKEVM_TESTNET_URL);
    const gasPriceOriginal = await l2Provider.getGasPrice();
    console.log("Gas price: ", gasPriceOriginal.toString(10)), "Gwei";
}

main();
