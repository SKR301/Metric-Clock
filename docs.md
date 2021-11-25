# Metric-Clock
A clock to tell time in metric(10) system. **v1.1.0**

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
If done correctly the above command would result in something like: <br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143491078-5573e380-0f94-4f21-8743-a849dd6aa832.png" alt="demo"/>
</p>
The output may vary depending on the day/time you use it.

## - now(format)
`format: string value representing the format for output or empty`<br>
`return: Metric datetime in given format`<br>

The now function display the current metric time in provided format. It takes a string as a parameter which represent the format you want you output in, and returns the current data and time. You can modify the format as you like, by default it's <br />**Time: %Hh:%Mm:%Ss\nDate: %dd-%mm-%yy** Given below are list of available formatting variable keywords<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143493078-8070610b-4c56-430a-95f4-9fbb0fd98bd8.png" alt="format_keyowrds"/>
</p>

Following code shows an example on how to use it

```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>{clock.now('Current metric time: %H hour , %M minute and %S second')}</Text> 
		<Text>{clock.now('Current metric day is %d of %m month [I will tell the year next time]')}</Text> 
		</View>
	);
}
```
Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143493447-0ad2df70-a13d-435b-8d1b-40a8d956758e.png" alt="format_keyowrds"/>
</p>
