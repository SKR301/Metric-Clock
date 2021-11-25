# Metric-Clock
A clock to tell time in metric(10) system. <br />
[Documentations](https://github.com/SKR301/Metric-Clock/blob/doc/docs.md)


## Table of Contents
- [Technologies](#technologies)
- [Library](#library)
- [Contributors](#contributors)

## Technologies
- HTML5
- Bootstrap v4
- Node.js v16.13.0

## Library
[Documentations](https://github.com/SKR301/Metric-Clock/blob/doc/docs.md)
#### 1. Importing
Import the package in the file you want to use it along with all other necessary imported libraries
```js
import clock from 'metric-clock'
```
#### 2. Using
All of the functions in the package return a string value, which you can print with
```js
export default function App() {
	return (
		<View style={styles.container}>
			<Text>{clock.now()}</Text> 	{/* used the lib here*/}
		</View>
	);
}
```

## Contributors
@SKR301- [Saurav Kumar](https://github.com/SKR301) <br/>
@Norkator- [Martin Kankaanranta](https://github.com/norkator) <br/>
@Akshayaap- [Akshay Parmar](https://github.com/Akshayaap) <br />
### Found a bug?
- Raise an issue
### Want to Contribute!
- Fork the repo
- Create a Pull Request
