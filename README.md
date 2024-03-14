# Cronos zkEVM Hardhat project template for upgradeable contract

## Installation

Define Node version:

```bash
nvm use 20
```

This project was created by creating a standard hardhat project, and then migrating it to be compatible with ZK Stack using the instructions described in the ZK Sync documentation.

If you are using a project already created like this one, you can install it with `npm install`.

To write smart contracts, use the OpenZeppelin version supported by the dependencies ("@openzeppelin/contracts": "^4.9.5”) and compiler. OpenZeppelin V5 is not supported.

## Compile and test contracts

The frequently used shell commands are:

```bash
# Compile all smart contracts
npx hardhat compile
# Run tests
npx hardhat test
# Check test coverage (this may throw errors)
npx hardhat coverage
```

## Deploy a smart contract directly on L2 (Cronos zkEVM Testnet)

To deploy a smart contract to Cronos zkEVM Testnet, select `cronosZkevmSepoliaTestnet` as the `defaultNetwork` in `hardhat.config.ts`.

The frequently used shell commands are:

```bash
# Deploy on Cronos zkEVM Testnet
npx hardhat run ./deploy/deploy.ts

$ Implementation contract was deployed to 0xdeBcbC81fAffe50D72D584439a57aee24a1aaB0b
$ UUPS proxy was deployed to 0xe39d23C9622dF24E9E88b1090D05A3C2824e7874
$ BoxUups deployed to: 0xe39d23C9622dF24E9E88b1090D05A3C2824e7874

# Verify on Cronos zkEVM Testnet
npx hardhat verify --network cronosZkevmSepoliaTestnet 0xdeBcbC81fAffe50D72D584439a57aee24a1aaB0b

npx hardhat verify --network cronosZkevmSepoliaTestnet 0xe39d23C9622dF24E9E88b1090D05A3C2824e7874

```
