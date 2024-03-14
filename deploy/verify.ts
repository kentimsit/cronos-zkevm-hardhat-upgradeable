import dotenv from "dotenv";
import * as hre from "hardhat";
import { Deployer as ZkDeployer } from "@matterlabs/hardhat-zksync-deploy";
import { Wallet as ZkWallet } from "zksync-ethers";

dotenv.config();

async function verifyContract(data: {
    address: string;
    contract: string;
    constructorArguments: string;
    bytecode: string;
}) {
    const verificationRequestId: number = await hre.run("verify:verify", {
        ...data,
        noCompile: true,
    });
    return verificationRequestId;
}
