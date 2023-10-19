# Notes File

## Introduction

### Github

Using GitHub is an effective way to track different versions of a file and allow people to work together on a project. The cycle of pulling a file, editing it, committing it and then pushing it back to GitHub is a great technique to minimize merge conflicts, although it may not always be successful. Repitition seems like the best way to learn all of this.

### Servers

Servers and AWS/EC2

- 127.0.0.1 - Points to own machine (Localhost)
- HTTPS (Secure transfer of data)
- HTTPS: 443 (Special Port for https)
  - Port -> Door into castle
    - Many doors to get into the castle, port can be designated for specific information or traffic
- Special ports for SSH () and HTTP ()
  - HTTP port is not as secure
- Server is castle surrounding services
- Can use a gateway to direct person to other ports in the castle
- We will have gateway (Caddy) that directs to either simon or startup services
- Root domain will be leased for the semester
  - Subdomain for each service
- SSH into server
  - ssh -i key ubuntu@44.193.162.38
- IP Address: 44.193.162.38

DNS and AWS/Route53

- Domain name costs money
- You have to choose and pay for domain name, then associate it with the server
- NS and SOA DNS records come automatically when you get a domain name
- Using \* in the record name allows it to apply to all subdomains
- Certain domains are more expensive than others.
- A request for a domain name requires time to process.
- [subdomain.]\*secondary.top
- Root domain -> secondary.top
- Record types
  - A/AAAA
  - CNAME -> Alias
  - SOA and NS -> Automatically created

Caddy, HTTPS, TLS, certs

- Caddy handles web certificates (importance for HTTPS), serves up HTML, CSS, and JavaScript files and acts as a gateway for subdomain requests to Simon and startup services
- Caddy incorporates Let's Encrypt ACME Protocol
  - Creates certificates for free that enable widespread use of HTTPS
- Changing the CaddyFile using VI to use the domain name allows your site to use HTTPS and be more secure
- Most browsers now expect HTTPS - Caddy allows this
- You can use the domain name in place of the IP address to ssh into the server
  - ssh -i ~/keys/production.pem ubuntu@rabbitholes.click
- VI
  - Use i to insert, ctrl + c to escape insert
  - x to delete whatever is to the left, X to delete whatever is to the right
  - :wq to save changes and exit file
- HTTPS -> Verifies that the site is legitimate to avoid malicious code being put on device
  - Looks for web cert

## HTML

### Basic HTML file

```
<!DOCTYPE html>
<html lang ="eng">
  <head>
    <title>First HTML </title>
  </head>

  <body>
    Hello world
  </body>

</html>
```

Use MDN WebDocs or W3Schools for help with different elements or information

### Assignments

#### HTML Structure Assignment

Tags

- a href = "link"
  - anchor text to hyperlink
- div
  - specifies a specific block division
- nav
  - navigation inputs
- aside
  - aside content from main item
- table
  - table row (tr), table header (th), table data (td)
- main
  - main content on page
- section
  - part of main content
- script
  - JavaScript
- head
  - header information
- title
  - title of the page
- meta
  - metadata for the page
- include
  - external content reference
- body
  - body content
- header
- footer
- span
  - inline span of content
- h<1-9>
  - text headers 1-9 (1 is largest, 9 is smallest)
- p
  - paragraph of text
- b
  - bring attention
- ol, ul
  - ordered, unordered list
- li
  - list item
- img
  - graphical image reference
- dialog
  - interactive component such as a confirmation
- form
  - collection of user input
- input
  - user input field
- audio
  - audio content
- video
  - video content
- svg
  - scalable vector graphic content
- iframe
  - inline frame of another HTML page

Some characters have to use special entities to show up on the page as they are used in HTML. For example:

- &amp;
- &lt;
- &gt;
- &quot;
- &apos;
- &#128512;

#### HTML Input Assignment

Elements for accepting input of user data
| Element | Meaning | Example |
| ------- | ------- | ------- |
| form | Input container and submission | `<form action="form.html" method="post">` |
| fieldset | Labeled input grouping | `<fieldset> ... </fieldset>` |
| input | Multiple types of user input | `<input type="" />` |
| select | Selection dropdown | `<select><option>1</option></select>` |
| optgroup | Grouped selection dropdown | `<optgroup><option>1</option></optgroup>` |
| option | Selection option | `<option selected>option2</option>` |
| textarea | Multiline text input | `<textarea></textarea>` |
| label | Individual input label | `<label for="range">Range: </label>` |
| output | Output of input | `<output for="range">0</output>` |
| meter | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

- form element used to be the only way to send a user's input to the web server as part of a request to see a new page
  - Most often used as a container now that we use JavaScript to perform this function

##### Options for input type attributes

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

Example of setting type attribute:

```
<label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
```

##### Common attributes of input elements

| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

You can specify a required attribute so that the attribute must be entered before submitting it.
The pattern attribute on text, search, url, tel, email, and password inputs has a regular expression that must be matched by the input.

If you want to change the default on input type color, it has to be in hexadecimal form (i.e. red is #FF0000)

Range requires some JS

A placeholder displays the provided text in the box as instructions to the user on what information should be input.

#### HTML Media Assignment

##### External Media

Use src to link in audio, video or images using the link

img

- alt gives alternate text for the image

audio

- controls gives the user access to the controls for the playback of the audio
- autoplay attribute starts the playback as soon as the file is loaded
- loop attribute keeps audio playing over and over again

video

- controls
- autoplay
- `crossorigin="anonymous"`
  - May need to be used if you are requesting files from a different domain than the one serving your content
- On churchofjesuschrist.org you can get the link for video by left clicking on the video, clicking on asset info, then clicking on the copy icon next to the desired resolution.

##### Internal Media

svg

- render graphics in inline HTML

canvas

- facilitates 2D drawing and animation
- drawing requires JS

#### Simon HTML Assignment

- When using the deploy script, it does not matter where the key is stored, so long as you specify the directory wherein it is contained.

  - Use the following deployment script making sure to give the right path to the key

    ```
    ./deployFiles.sh -k ~/keys/key.pem -h rabbitholes.click -s simon
    ```

- The Document Object Model is critical to understanding how the page is setup.
- Don't be afraid to create several layers of tags inside of other tags if that is what is needed for the structure
- Be aware of stylistic changes you will want to make, and consider creating classes for groups of objects for whom the formatting should be the same.

### Class Notes

#### Simon HTML

- clone the simon repository and deploy it to the server to see it.
- use live server to test small changes
- html element is highest level element in the language
- head element contains metadata, what title will show on the tab
- link has attribute rel(relation) icon, references image for the icon
  - icon on the tab
  - link in simon uses link to file on server, but you can use an image from the internet
- body is what is on the page
- Header shows at the top
  - superscript tag with registered trademark tag (`&reg;`)
  - navigation bar with list items
    - menu is like unordered list
- main is main section of the page
- footer is like document footer
  - br element is like newline, pushes to the next line
- The class attribute allows you to make changes to all elements of the same type

#### Startup HTML

- to use a button to access another page on your site, use the following code

```
<button type="button" onclick"window.location.href='page.html'">
```

Creating an ellipse in HTML

- You can also create circles and other shapes

```
<svg height="400" width="400">
<circle cx="150" cy="150" r="100" stroke="gray"
  stroke-width="2" fill="green" />
</svg>
```

## CSS

### Class Notes

#### September 21

- Some styling can be done inline in HTML by using style attribute

#### September 26 - Rules, Box Model, Fonts, Animation, Grid, Flex

<details>

<summary>Rules</summary>

```
<body>
  <p style="color:red">CSS</p>
</body>
```

- style attribute allows embedding CSS right into HTML without having a special file.
- Shorthand for rules

- selector that rule is applied to
  - rule (can have many declarations)
    - property (color)
    - declaration (recognized by colon)
    - value (green)

Example:

```
p {
  color: green;
}
```

If you want to put it straight into HTML file

```
<head>
  <style>
  p {
    color: green;
  }
  </style>
</head>
```

Link to style sheet in header:

```
<link rel="stylesheet" href="styles.css" />
```

Multiple declarations in a rule:

```
p {
  color: rgb(51, 112, 169);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  padding: 1em;
  transform: rotate(-45deg);
}
```

- font size 3em means that it will be 3 times the default size of the parent m in that font

Precedence

1. Inline attribute
1. Declaration in style section of HTML
1. Outside file

Nested elements

- Will inherit from parent element unless the current element has overriding style

Selectors

- element
  - Example: div
  - Apply to any div element
- ID
  - Example: #root
  - element with attribute id='root'
- class
  - Example: .highlight
  - Any element with attribute class='highlight'
- element class
  - Example: p.highlight
  - paragraphs with attribute class='highlight'
- List
  - Example: body, section
  - Body or selection elements
- descendants
  - body section
  - any section that is a descendant of a body
- children
  - Example: section > p
  - List of direct children
- pseudo
  - state based

Declarations

- background-color
- border
- color
- font
- px
- pt
- %

</details>

<details>

<summary>Box Model</summary>

Think of every element as a box

1. content
1. padding
1. border
1. margin

</details>

<details>

<summary>Fonts</summary>

Fonts are an element of design that should be considered
Pick the right combo of fonts in conjunction with what you are doing.

Including fonts that are not basic:

```
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.woff2');
}

p {
  font-family: Quicksand;
}
```

or

```
@import
url("https://fonts.googleapis.com/css2?family=RubikMicrobe&display=swap");

p {
  font-family: "Rubik Microbe";
}
```

- Pulls directly from the internet to get the font
- display=swap tells it to use another font, then shows the font when it has loaded

</details>

<details>

<summary> Animation </summary>

```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```

</details>

#### September 28 Class

<details>

<summary>Responsive, Grid, Flex</summary>

Display

- None
  - Doesn't show up
- Block
  - Length of parent element it is inside
- Inline
  - As long as your content
- Flex
  - Everything in element is displayed in flex manner
  - space out nicely
- Grid
  - Displayed as grid elements in a table
  - Adapt to size of screen or parent element

```
<META
  NAME="VIEWPORT"
  CONTENT="WIDTH=DEVICE-WIDTH, INITIAL-SCALE=1"
/>
```

Tells browser not to do mobile optimization because code takes care of it

Media queries (helps websites adapt in specified ways based on size or orientation of website.)

```
@media (orientation: portrait) {
  div {
    transform: rotate(270deg);
  }
}

/* When in portrait stack content */
@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}

/* When size gets smaller than 500 pixels, cause aside element to disappear */
@media ((orientaion: portrait) and (max-height: 500px)) {
  aside {
    display: none;
  }
}
```

Float

- Keeps item on specified area (i.e. keep aside on right side)

```
aside {
  float: right;
  padding: 3em;
}
```

Grid

```
<div class="container>
  <div class="card"></div>
  <div class="card"></div>
    <div class="card"></div>
</div>

<style>


.container {
  display: grid;
  grid-template-columns:
    repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}

</style>
```

Flex

- Allows nesting, flexibility
- HTML holds the pieces

```
body {
  display: flex;

  /* spread from the top to the bottom */
  flex-direction: column;

  margin: 0;

  height: 100vh;
}

header {
  flex: 0 80px;
}

footer {
  flex: 0 30px;
}

main {
  flex: 1;

  /* children inside main element will also flex */
  display: flex;
  flex-direction: row;
}

```

children under a flex will need an associated number

- total number will cut page up into equal sized portions and divy them up based on specifications
  - i.e. 1,3,1 gives 1/5 of page to first child, 3/5 to second child, 1/5 to third child

media queries help have flex element with unchanging size until the viewport has reached certain size at which time they disappear

</details>

<details>

<summary>CSS Frameworks</summary>

Package of common patterns

- Bootstrap is most common
- Predefined CSS files

How to include:

```
<head>
...
  <link rel="stylesheet"
  href = "Link.css"
/>

<body>
  ...
  <script
    src"Link.js"
  ></script>
</body>

```

Bootstrap styled button

```
<button type="button" class="btn btn-primary">Bootstrap</button>
```

</details>

#### October 3 Class - Simon CSS

- Use bootstrap framework to supplement design
- Many challenging designs are already included in bootstrap

### Assignments

Flex

- using flex

## JavaScript

### Assignments

### Class Notes

#### October 3 Class - JavaScript (JS) Intro

- JavaScript is for behavior/computation
- Manipulates the DOM
- Helps maintain portions of the DOM between different pages
- JavaScript is built into Chrome and can be used on a local machine

Playgrounds

- CodePen
- VS Code
- Browser
- Node.js

<details>

<summary>Putting out "Hello world"</summary>

```
// Puts it out to the console
console.log('Hello' + ' ' + 'world');


// Using action on list and lambda function
const words = ['hello', 'world'];

// Throw away function takes each word and puts it out to the console. Method on the object
words.forEach((word) => {
  console.log(word);
});

//Use regular function
function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
```

</details>

<details>

<summary>Add JS to HTML</summary>

```
<head>
  <script src="index.js"> </script>
</head>
<body>
  <script>
    function sayGoodbye () {
      alert('Goodbye');
    }
  </script>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <button onclick="let i=1;i++;console.log(i)">press me</button>
</body>
```

</details>

JavaScript Walkthrough

- use strict
  - Keeps you from doing messy things with variables
  - Don't use var, use let (for something that can be changed) or const (for something that cannot be changed)
  - Tells you if you are doing something illegal

#### October 5 Class - Functions, Objects, Classes

JavaScript Walkthrough

- JS is weakly typed language
- variables are not restricted to one type (variable that was a number can be redefined as string)
- JS will automatically convert certain types if you add different types together
- Seems to favor strings

- === is strict equality
- == sort of equality (0 == false will work, but 0 === false will return false)
  - close enough to same value

falsy

- (0, -0, ' ', NaN, null, undefined)
- truthy = !falsy

```
for (let i = 1; i < 3; i++) {
  // Prints out for and then each number
  // Backticks, $ and brackets important around something being evaluated
  console.log(`for ${i}`);
};

```

<details>

<summary>Functions</summary>

Anonymous function:

```
let f = function (i) {
  return i;
};

console.log(f(3));
```

Optional parameters need default values

```
let f = function (a, b, c = 'rat') {
  return [a, b, c];
};

console.log(f(1));

// returns [1, undefined, 'rat']
```

Arrow Functions

- Anonymous functions
  - shorthand
  - Don't need parentheses if you only need one parameter
  - If there are no parameters or multiple parameters you need parentheses

```
// If no braces are used, whatever is on other side of arrow is returned
const arrow = () => 1;

// Will not return anything
const arrowWithBlock(a) => {
  a;
};

// Will return a
const arrowWithReturn = (a) => {
  return a;
};
```

Closures

- A function and its surrounding state
- Function returns function
- Keeps

```
function dup (i, sep = ':') {
  let dupLimit = i;

  return (t) => {
    let dupCount = dupLimit;
    let out = t;
    while (dupCount-- > 1) {
      out += sep + t;
    }
    return out;
  };
};

// Returns inner function that results from passing in 4 to outer function;
const duplicate4 = dup(4);

```

</details>

#### October 10 Class - Closures, Regex, Template Literals

Closures

- Majority of notes in previous class notes
- Function in previous notes will go through and
- Closure associates function inside of used function with a variable, allowing the inside function to be used later

```
// variable remembers that 4 was passed in
// so you can use duplicate4 multiple times and get the same output
const duplicate4 = dup(4);

// using variable name
console.log(duplicate4('hello'));
// returns hello:hello:hello:hello


// using outer function directly
console.log(dup(3)('again'));
//returns again:again:again
```

Event listener

- window is DOM element
- specific events are picked to trigger an action
- events are defined in JS already (i.e. scroll, click, etc.)
- need as parameters an event and a function to run

```
function debounce (windowMs, windowFunc) {
  let callCount = 0;
  let timeout;
  return function () {
    // change color as the user scrolls
    const color = `hsl(${callCount++}, 100%, 50%)`;
    document.querySelector("body").style.backgroundColor = color;

    // reset time
    clearTimeout(timeout);

    // call windowFunc after time given in windowMs
    // will change back to white after time has passed
    timeout = setTimeout(() => windowFunc, windowMs);
  };
}

window.addEventListener (
  "scroll",
  debounce (500, () => {
    // Look for selector "body" then style with white background color
    documentquerySelector("body").style.backgroundColor = "FFFFFF";
  })
);
```

Template Literals

- Multiple line strings
- variables inside of a string that can be filled in later
- use back tick "`"

```
let header = "Things I like: ";
let tags = ["waffles", "cheese", "onions"];

let html = `<h2>${header}</h2><ul>`;

// Creating list items and appending it to the HTML that will be added
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html;

```

#### October 12 Class - Objects/Classes, JSON, DOM, etc.

<details>

<summary>Objects</summary>

**Strings**

Functions

- s.toUppercase()
- s.toLowerCase()
- s.split(' ') split string whenever this delimiter is found
- s.endsWith('string') (boolean)
- s.replace('x', 'y') replace x with y
- s.slice(3,7) cut out section between these accesses

**Arrays**

```

// iterate over array

//using of accesses values
//in gives keys

for (let entry of numbers) {
  console.log(entry);
  if (entry == 3) break;
}

for (let entry in numbers) {
  console.log(entry);
}

// applies function to apply to each entry in array
console.log (
  'map',
  numbers.map((n) => n * 100)
);

// combines array into sinqle value based on function
console.log (
  'reduce',
  numbers.reduce((p, c) => p + c)
);

// keeps elements that don't return true for function
console.log (
  'filter',
  numbers.filter((n) => n % 2)
);

// returns true if something in array meets the condition
console.log (
  'some',
  numbers.some((n) => n > 5)
);

```

**Objects**

```
// brace indicates object
let obj = {
  animal: 'fish',
};

// adds value count: 3
obj.count = 3;

// can add object to other object
obj.location = {
  cities: ['utah', 'new york'],
  origin: 'ocean',
};

// returns value associated with animal then text live in
// then uses array function join to grab utah and new york and join
// them with the string ' and '
// output would be "fish live in utah and new york"
obj.print = function () {
  return `${this.animal} live in ${this.location.cities.join(' and ')}`;
}

console.log(obj);
console.log(obj.animal);
console.log(obj.print());

// iterator of properties
// gives us key and then value associated with the key
for (const property in obj) {
  console.log(`name:${property}, value:${obj[property]}`)
}


```

**Spread and Rest**

```
// spread
// take array and spread out into pieces

let input = [1,2,3];
// separates the values of original array to keep array
// from being an array and then three individual values
input = [...input, 4, 5, 6];
console.log(input);

// can do with object
let base = { a: 'rat', b: 'cat'};

// Treats info in base as individuals not entire object
console.log({c: 'dog', ...base, d: 'bird' });

// rest
// takes individual values and puts them in an array
const sumAndMultiply (multiplier, ...numbers) => {
  console.log(numbers);
  return numbers.reduce((a, n) => a + multiplier * n);
};

console.log(sumAndMultiply(10, ...input, 7, 8));

```

**Destructuring Arrays**

Taking pieces out of something

```
let x, y, z;

const a = [1, 2];
x = a;
console.log(x);

// returns 1
[x] = a;
console.log(x);

// returns "1, 2"
[x, y] = a;
console.log(x, y);

// 1, 2, undefined
[x, y, z] = a;
console.log(x, y, z);

// 1, 2, 100
[x, y, z=100] = a;
console.log(x, y, z);

// returns 1, 3, [4, 5, 6, 7]
[x, , y, ...z] = [1, 2, 3, 4, 5, 6, 7];
console.log(x, y, z);

```

**Destructuring Parameters**

```
// default values of 3 and 'taco'
// values set from array passed in
function af([a = 3, b = 'taco'] = []) {
  console.log(a, b);
}

// prints out 3, taco
af();

// prints out 20, taco
af([20]);

// using equal sign for parameters because of
// destructuring the parameters
function of({a = 3, b = {animal: 'rat'}} = {}) {
  console.log(`a: ${a} b: ${b.animal}`);
}

// returns a: 10 b: rat
of({a: 10});

// returns a: 3 b: dog
of({b: { animal: 'dog'}});
```

**Destructuring Returns**

```
function of({a = 3, b = 'rat'} = {}) {
  return [a, b, 'cat'];
}

const [x, y, z] = af({a: 10});
// returns "array return: 10 rat cat"
console.log('array return: ', x, y, z);



```

</details>

#### October 17 Class - Promises, Async, Await

**Placement of script tag in HTML**

- In head
  - Reads JS file before looking at the body
- bottom of body
  - allows it to put all of the DOM in place, then make any changes from JS file

**Multithreading**

- not available in JS
- Moves portion of code that will take a while to another thread to run parallel
- Method for doing this in JS is called Promise

**Promise**

- Function that will eventually be resolved, but gives a state (i.e. pending, successful, failed)
- pending -> Push to waiting until space opens up to continue computing
- Asynchronous -> working on multiple things while waiting for things to come back
- Things don't always finish in the same order entered

```
const THRESHOLD_A = 8;
let promiseCount = 0;

function getNumber(resolve, reject) {
  setTimeout (() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      // return value
      resolve(value);
    } else {
      // reject with this message
      reject(`Too large: ${value}`);
    }
  }, Math.random() * 2000 + 1000);
  //random returns between 0 and 1
}

function determinParity (value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", {cause: reason});
  //Allows access to error after function is run
  console.error(err);
  // throwing error prevents testPromise from thinking it was successful
  throw err;
}

function promisGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      // fail promise with message "Still too large: value"
      reject(`Still too large: ${value}`);
    }
    else {
      // if isOdd is true, set parityInfo.wordEvenOdd to be "odd"
      // otherwise set it to be "even"
      // adding new key-value pair to parityInfo object called wordEvenOdd
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

function testPromise() {
  const thisPromiseCount = ++promiseCoount;
  const log = document.getElementById("log");
  //inserting this HTML into element
  log.inserAdjacentHTML( "beforeend", `${thisPromiseContent}) Started<br>`);

  // Need to use new so that it will create a new object
  // because a promise cannot be reused
  // it only takes one use
  // calls constructor for promise
  new Promise(getNumber)
    // call determineParity if returns success, troubleWithGetNumber if fails
    .then(determineParity, troubleWithGetNumber)
    //If fails cascades down and is caught by catch
    .then(promiseGetWord)
    .then((info) => {
      // what we do when it succeeds
      log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Got: ${info.value}, ${info.wordEvenOdd}<br>`);
      return info;
    })
    // what we do when it fails
    .catch((reason) => {
      if (reason.cause) {
       log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Had previously handled error.<br>`);
      }
      else {
        log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Trouble with promiseGetWord(): ${reason}<br>`);
      }
    })
    // what we do whether it fails or succeeds
    .finally((info) => log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise Complete<br><br>`));
  }
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
```

**Async/Await**

- Performs same function as previous program
- await can only be used in function if function is designated as async
- await tells the function that it may take a while but it will complete, don't throw an error

```
const THRESHOLD_A = 8;
let promiseCount = 0;

function getNumber(resolve, reject) {
  setTimeout (() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      // return value
      resolve(value);
    } else {
      // reject with this message
      reject(`Too large: ${value}`);
    }
  }, Math.random() * 2000 + 1000);
  //random returns between 0 and 1
}

function determinParity (value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function promisGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      // fail promise with message "Still too large: value"
      reject(`Still too large: ${value}`);
    }
    else {
      // if isOdd is true, set parityInfo.wordEvenOdd to be "odd"
      // otherwise set it to be "even"
      // adding new key-value pair to parityInfo object called wordEvenOdd
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

async function testPromise() {
  const thisPromiseCount = ++promiseCoount;
  const log = document.getElementById("log");
  //inserting this HTML into element
  log.inserAdjacentHTML( "beforeend", `${thisPromiseContent}) Started<br>`);

  try {
    const number = await new Promise(getNumber);
    try {
      const parity = await determineParity(number);
      const info = await promiseGetWord(parity);
      await log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Got: ${info.value}, ${info.wordEvenOdd}<br>`);
    }
    catch (reason) {
      log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Trouble with promiseGetWord(): ${reason}<br>`);
    }
  }
  catch (reason) {
    console.error("Trouble getting number");
    log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Had previously handled error.<br>`);
  }
  finally {
    log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise Complete<br><br>`));
  }
}

const btn = document.getElementById("make-promise");
btn.addEventListener("click", testPromise);
```

#### October 19 Class - Classes, JSON, DOM, LocalStorage

<details>

<summary>Classes</summary>

```
// base class
class Location {
  // class level variable
  // cannot be accessed from object of type Location
  static defaultPlace = 'east';

  // constructor will set location to location passed in or default value
  constructor(location) {
    this.location = location || Location.defaultPlace;
  }
}

// derived class inherits from other class
class Beach extends Location {
  constructor(name, location, weather = 'sunny') {
    // super calls constructor from Location class
    super(location);
    this.name = name;
    // underscore tells code to treat variable as private
    // outdated way to do it; use #
    this._weather = weather;
  }

  get weather () {
    return this._weather;
  }

  set weather () {
    this._weather = weather;
  }
}

const sunsetBeach = new Beach('Sunset', 'north', 'rainy');
// get function will always be used on right side of a definition
// set function will always be on the left side and set to a different value
sunsetBeach.weather = 'snowing';
const beaches = [sunsetBeach, new Beach('Kailua')];

// Kailua puts out "Sunny weather at Kailua beach on the east shore"
for (let beach of beaches) {
  console.log(`${beach.weather} weather at ${beach.name} beach on the ${beach.location} shore`);
}

```

</details>

**JSON**

- sending or asking for information between applications

```
const obj = {
  name: 'tina',
  alive: true,
  print: () => `${this.name} is ${this.alive}`,
};

console.log('object: ', obj);

// converting to JSON removes functions
const objText = JSON.stringify(obj);
console.log('json: ', objText);
console.log('rehydrate: ', JSON.parse(objText));

```

**DOM**

- Document modeled as tree
- elements are nodes

Manipulation

```
<html>
  <body>
    <p id="t">text1 <span>text2</span></p>
    <p>text3</p>
    <script>
      funtion diplayElement(el) {
        console.log(el.tagName);
        for (const child of el.children) {
          // List of children elements to specified element
          displayElement(child);
        }
      }

      // acting on everything in the document
      displayElement(document);

      const el = document.querySelector('#t');

      el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';

      function insertChild(selector, text) {
        const newChild = document.createElement('div');
        newChild.textContent = text;

        const parentElement = document.querySelector(selector);
        parentElement.appendChild(newChild);
      }

      insertChild('#t', 'new course');

      const submitDataEl = document.querySelector('#t');

      submitDataEl.addEventListener('click', function (event) {console.log('clicked')});

    </script>
  </body>
</html>
```

**LocalStorage**

- Use local storage to have data persist between pages

```
<body>
  <script>
    let user = 'Alice';

    let myObject = {
      name: 'Bob',
      info: {
        favoriteClass: 'CS 260';
        likesCS: true;
      },
    };

    let myArray = [1, 'One', true];

    localStorage.setItem('user', user);
    localStorage.setItem('object', JSON.stringify(myObject));
    localStorage.setItem('array', JSON.stringify(myArray));

    console.log(localStorage.getItem('user'));
    console.log(JSON.parse(localStorage.getItem('object')));
    console.log(JSON.parse(localStorage.getItem('array')));

  </script>
</body>
```

## Web Service

## Database

## Login

## WebSocket

## React
