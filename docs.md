**DSICLAIMER:** *I have spent a lot of time to create this documentation, so I hope you put the package to some good use.*

# Metric-Clock
A clock to tell time in metric(10) system. **v1.3.0**
<br /><br />

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
All of the functions in the package returns a string value, which you can print with
```js
export default function App() {
	return (
		<View style={styles.container}>
			<Text>{clock.now()}</Text> 	{/* used the lib here*/}
		</View>
	);
}
```
If done correctly, the above command would result in something like: <br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143491078-5573e380-0f94-4f21-8743-a849dd6aa832.png" alt="demo"/>
</p>
The output may vary depending on the day/time you use it.

## - now(format)
`format: (string) => Representing the format for output or empty`<br>
`return: (string) => Metric datetime in given format`<br><br>
The **now** function display the current metric time in provided format. It takes a string as a parameter which represent the format you want you output in, and returns the current data and time. You can modify the format as you like, by default it's <br />**Time: %Hh:%Mm:%Ss\nDate: %dd-%mm-%yy** Given below are list of available formatting variable keywords<br />

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
  <img src="https://user-images.githubusercontent.com/47807051/143493447-0ad2df70-a13d-435b-8d1b-40a8d956758e.png" alt="now"/>
</p>

## - addTime(mint, time)
`mint: (int) => Minutes to add to given time`<br>
`time: (string) => Initial time in {h-mm-ss} format or empty`<br>
`return: (string) => Time after ${mint} minutes from ${time}`<br><br>
As the name suggests it **adds** certain minutes to given metric time in proper format (i.e. h-mm-ss). You can also leave the time part empty in which case it'll add the minutes to current metric time. Following code shows an example on how to use it<br />

```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Adding 10 mints to '5:50:00' = {clock.addTime(10, '5:50:00')}</Text> 					
		<Text>Adding 10 mints to current metric time = {clock.addTime(10)}</Text> 					
		</View>
	);
}
```

Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143624980-4fc1231c-13f1-49db-bb0d-223729dea5d3.png" alt="addTime"/>
</p>

## - subTime(mint, time)
`mint: (int) => Minutes to subtract from given time`<br>
`time: (string) => Initial time in {h-mm-ss} format or empty`<br>
`return: (string) => Time before ${mint} minutes prior to ${time}`<br><br>
As the name suggests it **subtracts** certain minutes to given metric time in proper format (i.e. h-mm-ss). You can also leave the time part empty in which case it'll subtract the minutes from current metric time. Following code shows an example on how to use it<br />

```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Adding 10 mints to '5:50:00' = {clock.subTime(10, '5:50:00')}</Text> 					
		<Text>Adding 10 mints to current metric time = {clock.subTime(10)}</Text> 					
		</View>
	);
}
```

Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143625142-266cf17a-6fa9-4645-8247-4c8bace6172d.png" alt="subTime"/>
</p>

## - addDate(days, date)
`days: (int) => Days to add to given date`<br>
`date: (string) => Initial data in {dd-m-yyyy} format or empty`<br>
`return: (string) => Date after ${days} days after ${date}`<br><br>
As the name suggests it **adds** certain days to given metric date in proper format (i.e. dd-m-yyyy). You can also leave the date part empty in which case it'll add the days to current metric date. Following code shows an example on how to use it<br />

```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Adding 10 days to '50-5-0500' = {clock.addDate(10, '50-5-0500')}</Text> 					
		<Text>Adding 10 days to current metric time = {clock.addDate(10)}</Text> 					
		</View>
	);
}
```

Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143625286-130358c3-53bb-4adf-9d61-21fe9e728ee5.png" alt="addDate"/>
</p>

## - subDate(days, date)
`days: (int) => Days to subtract from given date`<br>
`date: (string) => Initial data in {dd-m-yyyy} format or empty`<br>
`return: (string) => Date before ${days} days prior to ${date}`<br><br>
As the name suggests it **subtracts** certain days from given metric date in proper format (i.e. dd-m-yyyy). You can also leave the date part empty in which case it'll subtracts the days from current metric date. Following code shows an example on how to use it<br />

```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Adding 10 days to '50-5-0500' = {clock.subDate(10, '50-5-0500')}</Text> 					
		<Text>Adding 10 days to current metric time = {clock.subDate(10)}</Text> 					
		</View>
	);
}
```

Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143625382-b3c04865-82dd-4ffa-bfcc-127e6b1fb68c.png" alt="subDate"/>
</p>

## - m2nTime(time)
`time: (string) => Time to convert in {h:mm:ss} format`<br>
`return: (string) => Returns equivalent time in normal clock system`<br><br>
This functions **converts given metric system time to equivalent normal clock system time**. The input format must be h:mm:ss.<br />
Following code shows an example on how to use it
```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Metric('5:50:00') = Normal ('{clock.m2nTime('5:50:00')}')</Text> 			
		</View>
	);
}
```

Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143627652-48ce66d0-4b39-48f9-b290-39a52ed3428e.png" alt="m2nTime"/>
</p>

## - m2nDate(date)
`date: (string) => Date to convert in {dd-m-yyyy} format`<br>
`return: (string) => Returns equivalent date in normal clock system`<br><br>
This functions **converts given metric system date to equivalent normal clock system date**. The input format must be dd-m-yyyy.<br />
Following code shows an example on how to use it
```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Metric('54-2-0730') = Normal ('{clock.m2nDate('54-2-0730')}')</Text>	
		</View>
	);
}
```

Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143637477-9c6e7a77-6aec-4496-8de1-5ee4101a730a.png" alt="m2nDate"/>
</p>

## - n2mTime(time)
`time: (string) => Time to convert in {hh:mm:ss} format`<br>
`return: (string) => Returns equivalent time in metric clock system`<br><br>
This functions **converts given normal system time to equivalent metric clock system time**. The input format must be hh:mm:ss.<br />
Following code shows an example on how to use it
```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Normal ('13:12:00') = Metric ('{clock.n2mTime('13:12:00')}')</Text> 			
		</View>
	);
}
```
Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143639190-b688ff1b-cfbc-4e98-8126-80958d517f8a.png" alt="n2mTime"/>
</p>

## - n2mDate(date)
`date: (string) => Date to convert in {dd-mm-yyyy} format`<br>
`return: (string) => Returns equivalent date in metric clock system`<br><br>
This functions **converts given normal system date to equivalent metric clock system date**. The input format must be dd-mm-yyyy.<br />
Following code shows an example on how to use it
```js
export default function App() {
	return (
		<View style={styles.container}>
		<Text>Normal ('30-11-1999') = Metric ('{clock.n2mDate('30-11-1999')}')</Text> 			
		</View>
	);
}
```

Which results in 
<p align="center">
  <img src="https://user-images.githubusercontent.com/47807051/143640604-2953de75-a30e-48fc-aa8f-8a8b0f6b8bad.png" alt="n2mDate"/>
</p>

*PS: Developer are working on the issues, please be patient and kindly help if you can.*
