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

#### JavaScript Objects and Classes

**Object literals**

```
const obj = {
  a: 3;
  b: 'fish';
}

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

**Constructor**

Any function that returns an object is considered a constructor and can be invoked with the new operator.

```
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

**Classes**
You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

Private properties defined with #

```
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```

**Inheritance**

Use super to access class being inherited including functions and access to public variables

```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```

#### Local Storage

**Main Functions**

| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |

A local storage value must be of type string, number, or boolean. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with JSON.stringify() on insertion, and parse it back to JavaScript with JSON.parse() when retrieved.

#### Promises

JavaScript executes as a single threaded application. That means there is only ever one piece of code executing at the same time. However, the fact that it does not execute concurrently does not mean that it does not execute in parallel. You can asynchronously execute code with the use of a JavaScript Promise. Because the execution is asynchronous the promise object can be in one of three states at any given point in time.

pending - Currently running asynchronously
fulfilled - Completed successfully
rejected - Failed to complete
You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs.

We can demonstrate asynchronous execution by using the standard JavaScript setTimeout function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also a for loop outside the promise so that both code blocks are running in parallel.

```
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```

**Resolving and Rejecting**

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to fulfilled when things complete correctly, or to rejected when an error happens. The promise executor function takes two functions as parameters, resolve and reject. Calling resolve sets the promise to the fulfilled state, and calling reject sets the promise to the rejected state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the pending state.

```
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you then wait ten seconds and the log the coinToss promise object again, the state will either show as fulfilled or rejected depending upon the way the coin landed.

```
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

**Then, Catch, Finally**

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: then, catch, and finally. The then function is called if the promise is fulfilled, catch is called if the promise is rejected, and finally is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either heads or tails.

```
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the then, catch and finally functions to the coinToss object in order to handle each of the possible results.

```
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

**The Observer Pattern**

Promises are the standard way to do asynchronous processing in JavaScript, but they are not the only way. The Observer pattern, popularized by web programming frameworks such as Angular, use a model called Observer. The major difference between Observers and Promises is that Promises immediately begin to execute when the Promise is created, but Observers form a pipeline that you then pass an execution object into. This allows Observers to be reused, and the result of executing an Observable to be saved as a history of a particular execution.

#### Async/Await

**Async**

One important restriction for working with await is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the async keyword. Applying the async keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

```
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```

The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

**Await**

The async keyword declares that a function returns a promise. The await keyword wraps a call to the async function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate await in action with the cow promise from above. If we log the output from invoking cow then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

```
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```

By combining async, to define functions that return promises, with await, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

**Putting it all together**

You can see the benefit for async/await clearly by considering a case where multiple promises are required. For example, when calling the fetch web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

```
const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
```

With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

```
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse));
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```

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

function determineParity (value) {
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

function determineParity (value) {
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
  log.insertAdjacentHTML( "beforeend", `${thisPromiseContent}) Started<br>`);

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

#### October 24 Class - Simon

JavaScript helps us move from 4 or 5 separate DOMs to having one DOM

- JS inserts into the HTML rather than being explicitly built in HTML

## Midterm notes

### Console commands

| chmod | change permissions to read, right, execute |
| pwd | output path to working directory/current folder |
| cd | change directory (file) |
| ls | list files in current folder |
| vim | console editor for editing code |
| nano | text editor |
| mkdir | create folder/directory |
| mv | move |
| rm | remove |
| man | display user manual for commands in terminalw |
| ssh | secure shell - secure log in to remote machine and execute commands |
| ps | status of active processes |
| wget | download files and interact with REST APIs |
| sudo | perform action as administrator/superuser |
| ls -la | list all files, including hidden files |

### DOM

### HTML

span element has default CSS diplay property value of nothing

### CSS

- Box model (inside to outside)
  - content
  - padding
  - border
  - margin
  - position

### JavaScript

- Correct syntax for creating object

```
let obj = {
  a: 'jake',
  b: 'hey guys',
  m: 12
}
```

for/in - use to loop through properties of an object
for/of - use to loop through values of an iterable object

## Web Service

### Assignments

#### URL

Example
`https://byu.edu:443/cs/260/student?filter=accepted#summary`

Syntax:
`<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>`

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |

**URL, URN, URI**

You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be urn:isbn:10,0765350386. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

#### Ports

Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.

The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. Here is the link to IANA's registry.

Common ports:

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

Your ports:

As an example of how ports are used we can look at your web server. When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.

Caddy is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.

Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore cannot use port 3000 for your startup service. Instead you use port 4000 for your startup service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.

#### HTTP

See HTTP exchange using `curl`
`curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html`

**HTTP Request:**

```
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

General Request:

```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]

```

In the above example, we are asking to GET a resource found at the path /hypertext/WWW/Helping.html. The version used by the request is HTTP/1.1. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a MIME type as defined by internet governing body IANA. In this case we are asking for HTML.

**Response**

Response to above request

```
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

HTTP Response Syntax:

```
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

The major difference from the request syntax is that the first line represents the version and the status of the response.

**HTTP Verbs**

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

**Status Codes**

Five Blocks:

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Common Codes:

| Code | Text                                                                                                                                                 | Meaning |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 100  | Continue The service is working on the request                                                                                                       |
| 200  | Success The requested resource was found and returned as appropriate.                                                                                |
| 201  | Created The request was successful and a new resource was created.                                                                                   |
| 204  | No Content The request was successful but no resource is returned.                                                                                   |
| 304  | Not Modified The cached version of the resource is still valid.                                                                                      |
| 307  | Permanent redirect The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request The request was malformed or invalid.                                                                                                    |
| 401  | Unauthorized The request did not provide a valid authentication token.                                                                               |
| 403  | Forbidden The provided authentication token is not authorized for the resource.                                                                      |
| 404  | Not found An unknown resource was requested.                                                                                                         |
| 408  | Request timeout The request takes too long.                                                                                                          |
| 409  | Conflict The provided resource represents an out of date version of the resource.                                                                    |
| 418  | I'm a teapot The service refuses to brew coffee in a teapot.                                                                                         |
| 429  | Too many requests The client is making too many requests in too short of a time period.                                                              |
| 500  | Internal server error The server failed to properly process the request.                                                                             |
| 503  | Service unavailable The server is temporarily down. The client should try again with an exponential back off.                                        |

**Headers**

| Header                      | Example                              | Meaning                                                                                              |
| --------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                 |
| Accept                      | image/\*                             | What content format the client accepts. This may include wildcards.                                  |
| Content-Type                | text/html; charset=utf-8             | The format of the response content. These are described using standard MIME types.                   |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                           |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                     |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins. |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                     |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                       |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                      |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                           |

**Cookies**

HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the cookie. Cookies are generated by a server and passed to the client as an HTTP header.

```
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```

The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.

```
HTTP/2 200
Cookie: myAppCookie=tasty
```

HTTP versions:

| Year | Version | Features |
| 1990 | HTTP0.9 | one line, no versions, only get |
| 1996 | HTTP1 | get/post, header, status codes, content-type |
| 1997 | HTTP1.1 | put/patch/delete/options, persistent connection |
| 2015 | HTTP2 | multiplex, server push, binary representation |
| 2022 | HTTP3 | QUIC for transport protocol, always encrypted |

#### CORS

Same Origin Policy (SOP) - Only allows site to fulfill requests from itself

CORS allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed. The server may say that all origins are allowed, for example if they are a general purpose image provider, or only a specific origin is allowed, for example if they are a bank's authentication service. If the server doesn't specify what origin is allowed then the browser assumes that it must be the same origin.

Going back to our hacker example, the HTTP request from the hacker site (byu.iinstructure.com) to the course's authentication service (byu.instructure.com) would look like the following.

```
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
```

Response:

```
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
```

Notice that with CORS, _it is the browser that is protecting the user from accessing the course website's authentication endpoint from the wrong origin_. CORS is only meant to alert the user that something nefarious is being attempted. A hacker can still proxy requests through their own server to the course website and completely ignore the Access-Control-Allow-Origin header. Therefore the course website needs to implement its own precautions to stop a hacker from using its services inappropriately.

Test services you want to use to make sure they will allow you to make requests

### Class notes

#### October 26 Class - URL, Ports, HTTP, Fetch, CORS, Service Design

- Fetch
  - Method to access web service using JS
  - returns JSON object and other information about site
- Endpoints (what your site has to do because other services don't)
  - Users
  - Scores
  - Which choices selected
- Endpoints may call other services such as a database
  - Pull high scores
  - represented by URLs

HTTP uses by default port 80

-v -> verbose (list out what is going on)

curl sends out a request to the server

```
const r = await fetch ('https://api.quotable.io/random');
// pulls JSON out of response from fetch
const j = await r.json();
console.log(j.value);
```

Use network tab in console

**URL**

Uniform resource locator
https://byu.edu:443/api/city?q=pro#3

- scheme - https://
- domain - byu.edu
- port - :443
- pathway - /api/city
- parameters - ?q=pro
- anchor - #3

Necessary parts:

- scheme
- domain

Path tells you where specifically you want to go on the site

Ports

- 22 - SSH
- 443 - HTTPS
- 80 - HTTP
- 20 - File Transfer protocol (FTP)

Caddy listens to port 443 and 80

- redirects to 443 if accessed using 80
- looks to see if a subdomain is available and redirect to that port if necessary

HTTP for fetch request

- GET is default for fetch request
- Specify if GET is not what you are doing
- Accept anything use _/_

```
method   path            version
POST /api/city?q=provo HTTP/1.1
Host: cs260.click
User-Agent: curl/7.77.0
Content-Length: 14
Accept: application/json, text/plain

Body {"name": "tim"}
```

Methods

- GET
- POST
- PUT
- DELETE
- OPTIONS

Response

```
HTTP/1.1 200 OK
Content-Type
```

HTTP Status Codes
2xx: 200 Success, 204 No Content
3xx: 301/302 redirect, 304 not modified
4xx (front end): 400 bad request, 404 not found, 403 forbidden, 429 too many requests
5xx(back end): 500 server error, 503

HTTP content types

Cookies are handled with fetch requests

- save information between sessions on a site (settings, log in info, recently viewed stuff)
- store server information in local storage rather than having to go back and forth between server to get info

Cache control

- page may already reside on machine or on cache server
- cache may have timeout for when data might become stale

```
fetch ('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userID: 1,
  }),
  headers: {
    'Content-type': 'application/json',
  },
})
.then((response) => response.json())
.then((jsonResponse) => {
  console.log(jsonReponse);
});

async function store () {
  const rs = await fetch ('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userID: 1,
  }),
  headers: {
    'Content-type': 'application/json',
  },
});
console.log(rs);
const js = await rs.json();
console.log(js);
console.log(js.content);

const rg = await fetch ('https://jsonplaceholder.typicode.com/posts');
console.log(rg);
const jg = await rg.json();
console.log(jg);
console.log(jg[0]);

document.querySelector();
```

#### October 31 Class - CORS, Design, Node.js, Express

HTTP - send a request, receive a response (enables communication)
fetch () - JavaScript method for doing HTTP (default is GET)

Cross site request forgery
wellsfargo.com / welsfargo.com

- Possible for websites to get something from your site using GET, allowing access to someone's account

Same origin policy

- origin: wellsfargo.com
- only allow fetch to: wellsfargo.com
  - only fulfills requests from that site/server
- creates issues if you want to fetch data from other web services

**CORS**

White list specific addresses

```
GET /api/auth/login HTTP/2
Host: wellsfargo.com
Origin: https://welsfargo.com

HTTP/2 200 OK

```

```
//Request
Host: cs260.click //request to
Origin: https://hacker.click //origin of request

//Reject Response
Access-Control-Allow-Origin: https://cs260.click //allowed from
Access-Control-Allow-Methods: GET, PUT, POST, DELETE

//Allow Response
Access-Control-Allow-Origin: https://hacker.click
Access-Control-Allow-Methods: *

```

Caddy CORS/Caching Settings

```
startup.yourdomainhere {
  reverse_proxy * localhost: 4000
  header Cache-Control no-store //don't store cache
  header -server
  header -etag

}
```

**Service Design**

- Look at how your application will be used and design a path of the interactions between individual and server
- Think about it as methods on objects
- For simon
  - Create account
  - Log in
  - Log out
  - get user
  - get scores
  - save scores
- Think in terms of protocols and JSON
  - Transfer protocols - HTTP, HTTPS, UDP
  - HTTP verbs - GET, PUT, POST, DELETE

**Node.js**

- Engine that runs JavaScript in the console
- allows you to use JavaScript on back end and not just front end
- Parts
  - NVM - Node version manager (download and keep up to date)
  - Node - JavaScript runtime
  - NPM - Node Package manager (use to import available code in the expansive library)

```
function countdown () {
  let i = 0;
  while (i++ < 5) {
    console.log (`Counting ... ${i}`);
    document.querySelector('#display').innerHTML += `Counting ... ${i}`;
  }
}
countdown();
```

Create folder, go into it, tell the folder that it needs to download and track what is in there

```
mkdir npmtest
cd npmtest
npm init -y
```

Creates new files in folder

- package.json
- package-lock.json
- node_modules

node_modules can get really big, so add to git ignore to avoid creating a bunch of copies of it.

```
// require accessing that endpoint
// require tells code to import data from service
const giveMeAJoke = require('give-me-a-joke');

giveMeAJoke.getRandomDadJoke((joke) => {
  console.log(joke);
});
```

create index.js that will allow things to be grabbed from it
set up server or machine to listen for calls on a certain port, then fulfill certain

```
const http = require('http');
//create server with specified functionality
// need request object and response object passed in
// will also need next if there is chain of requests
const server = http.createServer(function (req, res) {
  // 200 code for all good, create HTML file
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('<h1>Hello Node.js [${req.method}] ${req.url}</h1>');
  res.end();
});

server.listen(8080, () => {
  console.log('Web service listeneing on port 8080);
});
```

Above code will always put out GET as the default unless you use fetch() to change the method

Run node on file using `node filename`

- Keeps it open until the process is terminated

Don't use live server through VS code to create own local server

- Run server code through VS Code console using node.js

#### November 2 Class - Express, debugging, daemons

**Express**

Create URLs that connect path to specific code

Cookies send info back and forth between server to keep session up
Local storage is used by browser so it doesn't need to reach back to server as often

- express - constructor and default middleware (i.e. authentication, cookies)
- app - express application (info about app)
- req - request object
- res - response object
- route - adding child routing

create new node

```
npm init -y
npm install express

const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.send('<h1>Hello Express!<h1>');
});
```

syntax
`app.use([path] callback(req, res, next))`

pull from public directory to when people request page
`app.use(express.static('public'));`

access somewhere else with response
`app.get('/api/scores', (req, res) => {res.send([1,2,3])});`

use colon before part of path to indicate that value could vary
pass in value entered

```
app.get('/store/:id/:time', (req, res) => {
  res.send({id: req.params.id, time: req.params.time});
});
```

Order Matters!! functions run in the order placed.

final function should use res.send(...)

**Daemons - PM2**
program that keeps backend (node) running

```
pm2 ls
cd ~/services/
```

#### November 7 Class -

## Database

## Login

## WebSocket

## React
