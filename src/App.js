import logo from './logo.svg';
import './App.css';
import Carousel from './Components/Carousel';
const images = [
	'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg',
	'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__340.jpg',
	'https://media.istockphoto.com/photos/first-person-point-of-view-of-a-woman-paddling-on-a-stand-up-paddle-picture-id1288844330?b=1&k=20&m=1288844330&s=170667a&w=0&h=nckXG0H5kPDbgDpC8iTObsiqG7Jwt6CeLuJ2WxdOTp4=',
	'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
	'https://images.unsplash.com/photo-1634756988236-8c06ce9fa1f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
];

function App() {
	return (
		<div className='App'>
			<Carousel
				images={images}
				buttons={false}
				width={400}
				delay={1000}
			/>
		</div>
	);
}

export default App;
