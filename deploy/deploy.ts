import dotenv from "dotenv";
import * as hre from "hardhat";
import { Deployer as ZkDeployer } from "@matterlabs/hardhat-zksync-deploy";
import { Wallet as ZkWallet } from "zksync-ethers";
import { BoxUups__factory } from "../typechain-types";

dotenv.config();

async function main() {
    const contractName = "BoxUups";
    console.log("Deploying " + contractName + "...");

    const zkWallet = new ZkWallet(process.env.WALLET_PRIVATE_KEY!);

    // Deploy contract
    const deployer = new ZkDeployer(hre, zkWallet);

    const contract = await deployer.loadArtifact(contractName);
    const box = await hre.zkUpgrades.deployProxy(
        deployer.zkWallet,
        contract,
        [0],
        { initializer: "initialize" }
    );

    await box.waitForDeployment();
    console.log(contractName + " deployed to:", await box.getAddress());

    // Encode arguments in Hex format and print them, to be used for the contract verification of the proxy
    const boxUupsInterface = BoxUups__factory.createInterface();
    let encodedProxyArguments = boxUupsInterface.encodeFunctionData(
        "initialize",
        [0]
    );
    console.log("Encoded proxy arguments for proxy verification:");
    console.log(encodedProxyArguments);

    // Print the box value
    box.connect(zkWallet);
    const value = await box.retrieve();
    console.log("Box value is: ", value);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
