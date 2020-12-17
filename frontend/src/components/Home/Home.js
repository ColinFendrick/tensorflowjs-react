import useAppContext from '../../hooks/useAppContext';
import Info from '../Info/Info';

const Home = () => {
	const { appState } = useAppContext();
	console.log(appState.data);
	return (
		<div>
      Model Info

			{appState.data.format && <Info title='Format' value={appState.data.format} />}
			{appState.data.modelTopology && (
				<>
					<Info title='Config' value={appState.data.modelTopology.class_name} />
					<br />
					{appState.data.modelTopology.config.layers.map((el, i) => (
						<Info title={`Layer ${i}`} value={el.class_name} key={`layer-${i}`} />
					))}
				</>
			)}

		</div>
	);
};

export default Home;
