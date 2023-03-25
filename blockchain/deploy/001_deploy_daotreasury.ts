import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const owners: string[] = ["0x6636CFD2130Db2BE544BbaD987982d38bDDBe448", "0x8b6db0c11d46c118B0137667637f228ab91EA25C", "0x935CC8Efc9E96C5538f7a376342BA633022079A5"];
const numConfirmationsRequired: number = 2;

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
	const {deployments, getNamedAccounts} = hre;
	const {deploy} = deployments;

	const { deployer } = await getNamedAccounts();

	await deploy('SimulatedDAOTreasury', {
		from: deployer,
		args: [ owners, numConfirmationsRequired ],
	});
};

export default func;
func.tags = ["DAOTreasury"]