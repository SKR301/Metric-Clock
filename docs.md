# Metric-Clock v1.1.0
A clock to tell time in metric(10) system

## Installation
```shell script
 npm install metric-clock
```
or
```shell script
 npm i metric-clock
```

## Usage:- 
### 1. Importing
Import the package in the file you want to use it along with all other necessary imported libraries
```js
import clock from 'metric-clock'
```
### 2. Using
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
If done correctly the above command would result in something like: <br /><br />
![Demo](https://user-images.githubusercontent.com/47807051/143491078-5573e380-0f94-4f21-8743-a849dd6aa832.png) <br /><br />
The data may vary depending on the day/time you use it.



