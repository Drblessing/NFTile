import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const owners: string[] = [];
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