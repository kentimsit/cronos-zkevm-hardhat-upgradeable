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

In order to increase the chances of successful deployment, the gasPrice set as network option in the `hardhat.config.ts` should be 10 x higher than the network's gas price on Testnet. This is because Ethereum Sepolia's gas price is volatile. To determine the network's gas price, run `npx ts-node ./deploy/gasprice.ts`.

To deploy the contracts (implementation contract and proxy):

```bash
# Deploy on Cronos zkEVM Testnet
npx hardhat run ./deploy/deploy.ts
```

Example of outputs

```
Deploying BoxUups...
Implementation contract was deployed to 0xdeBcbC81fAffe50D72D584439a57aee24a1aaB0b
UUPS proxy was deployed to 0x7fC491168CCB3D1942b21b0d48D2b2bEAA818C8C
BoxUups deployed to: 0x7fC491168CCB3D1942b21b0d48D2b2bEAA818C8C
Encoded proxy arguments for proxy verification:
0xfe4b84df0000000000000000000000000000000000000000000000000000000000000000
Box value is:  0n
```

Contract verification on blockchain explorer:

```bash
# Verify implementation contract on Cronos zkEVM Testnet

npx hardhat verify --network cronosZkevmSepoliaTestnet 0xdeBcbC81fAffe50D72D584439a57aee24a1aaB0b

# Verify proxy contract on Cronos zkEVM Testnet
# This takes 2 arguments after the proxy's address: the address of the implementation contract
# And the encoded arguments printed by the deploy.ts script

npx hardhat verify --network cronosZkevmSepoliaTestnet 0x7fC491168CCB3D1942b21b0d48D2b2bEAA818C8C 0xdeBcbC81fAffe50D72D584439a57aee24a1aaB0b 0xfe4b84df0000000000000000000000000000000000000000000000000000000000000000
```
