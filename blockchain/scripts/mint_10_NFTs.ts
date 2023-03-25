import { ethers, deployments, getNamedAccounts } from "hardhat";

/**
 * Deploys new unFacet and links it with deployed unDiamond
 */

const to = "0x8b6db0c11d46c118B0137667637f228ab91EA25C";

const main = async () => {  
    const { execute, get } = deployments;

    const { deployer } = await getNamedAccounts();

    // const MNFT = await ethers.getContractAt("MockNFT", (await get('MockNFT')).address);

    for (let i = 0; i < 10; i++) {
        await execute('MockNFT', {from: deployer}, 'mint', to);
    }  
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});