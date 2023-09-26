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

    - `  ./deployFiles.sh -k ~/keys/key.pem -h rabbitholes.click -s simon`

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

<details>

<summary>Responsive, Grid, Flex</summary>

</details>

## JavaScript

## Web Service

## Database

## Login

## WebSocket

## React
