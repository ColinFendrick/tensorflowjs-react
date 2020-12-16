import useAppContext from '../../hooks/useAppContext';

const Home = () => {
	const { appState } = useAppContext();

	return (
		<div>
      React Skeleton
			<ul>
				{appState.healthy ? <div>Healthy</div> : <div>Cannot establish connection</div>}
			</ul>
		</div>
	);
};

export default Home;
