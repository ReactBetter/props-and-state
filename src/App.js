import Image from './components/Image';
import './App.css';

const App = () => {
	return (
		<div className="App">
    		<Image src="/monalisa.jpg" alt="Mona Lisa" />
    		<Image src="/teacups.jpg" alt="Ride The Teacups" />
		</div>
	);
}

export default App;
