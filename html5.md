# HTML Cheatsheet
What is HTML?
HTML (HyperText Markup Language) is the standard language used to create webpages. It provides the structure of a webpage using a variety of elements and tags. HTML tags are the building blocks that define the content, layout, and format of your website.

## Basic Structure of an HTML Document
An HTML document typically starts with a declaration and includes a head and a body section.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Webpage</title>
</head>
<body>
    <h1>Welcome to My Webpage!</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>
```

## Common HTML Tags
Here are some of the most common HTML tags and their uses:

### 1. Document Structure Tags
- ```<!DOCTYPE html>```: Declares the document type and version of HTML.
- ```<html>```: The root element of an HTML page.
- ```<head>```: Contains meta-information about the document (title, character set, etc.).
- ```<title>```: Sets the title of the webpage (appears in the browser tab).
- ```<body>```: Contains the content of the webpage (text, images, links, etc.).

### 2. Text Formatting Tags

#### Headings
- ```<h1>``` to ```<h6>```: Define headings, with ```<h1>``` being the largest and ```<h6>``` the smallest.

```
<h1>Main Heading</h1>
<h2>Subheading</h2
```

#### Paragraphs and Text
```<p>```: Defines a paragraph.

```
<p>This is a paragraph of text.</p>
<strong>: Bold text (important).
<em>: Italic text (emphasized).
<br>: Line break.
<hr>: Horizontal rule (line).
```

### 3. Lists

#### Ordered List
```<ol>```: Creates an ordered list (numbered).

```
<ol>
    <li>First item</li>
    <li>Second item</li>
</ol>
```

#### Unordered List

```<ul>```: Creates an unordered list (bulleted).

```
<ul>
    <li>First item</li>
    <li>Second item</li>
</ul>
```

### 4. Links and Images

#### Links
```<a href="url">```: Creates a hyperlink.
```<a href="https://www.example.com">Visit Example</a>```

#### Images
```<img src="image.jpg" alt="description">```: Embeds an image.
```<img src="logo.png" alt="Company Logo">```

### 5. Multimedia Elements

#### Audio
```<audio controls>```: Embeds audio with playback controls.
```
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

#### Video
```<video width="320" height="240" controls>```: Embeds video with playback controls.
```
<video width="320" height="240" controls>
    <source src="movie.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```


### 6. Forms and Buttons

#### Form
```<form>```: Creates a form for user input.
```
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>
```

The ```<input>``` tag is used to create various types of user input fields in forms. The type of input is specified using the type attribute.

##### Common Input Types
- Text Input
```<input type="text" name="username" placeholder="Enter your username">```
  - Description: Allows the user to enter single-line text.
  - Attributes:
    - name: Identifies the input when the form is submitted.
    - placeholder: Shows a hint about what to enter.

- Password Input
```<input type="password" name="password" placeholder="Enter your password">```
  - Description: Allows the user to enter a password (masked input).
  - Attributes: Same as text input.

- Email Input
```<input type="email" name="email" placeholder="Enter your email">```
  - Description: Allows the user to enter an email address (with validation).
  - Attributes: Same as text input.
    - Validation: The browser checks for a valid email format.

- Number Input
```<input type="number" name="age" min="0" max="120" placeholder="Enter your age">```
  - Description: Allows the user to enter a numeric value.
  - Attributes:
    - min: Minimum value.
    - max: Maximum value.
    - step: Incremental value.
- Range Input
```<input type="range" name="volume" min="0" max="100" value="50">```
  - Description: Creates a slider for selecting a number within a range.
  - Attributes: Same as number input.

- Checkbox Input
```<input type="checkbox" name="subscribe" value="yes"> Subscribe to newsletter```
  - Description: Allows the user to select one or more options.
  - Attributes:
    - value: The value sent to the server if checked.

- Radio Input
```
<input type="radio" name="gender" value="male"> Male
<input type="radio" name="gender" value="female"> Female
```
  - Description: Allows the user to select one option from a set.
  - Attributes: Same as checkbox input. The name attribute groups radio buttons.

- File Input
  ```<input type="file" name="fileUpload">```
  - Description: Allows the user to upload files.
  - Attributes:
    - accept: Specifies the file types that are acceptable (e.g., accept="image/*" for images).

- URL Input
```<input type="url" name="website" placeholder="Enter your website URL">```
  - Description: Allows the user to enter a URL (with validation).
  - Attributes: Same as email input.

- Search Input
```<input type="search" name="search" placeholder="Search...">```
  - Description: Provides a search field with a specialized input type.
  - Attributes: Same as text input.

- Tel Input
```<input type="tel" name="phone" placeholder="Enter your phone number">```
  - Description: Allows the user to enter a telephone number (with no validation).
  - Attributes: Same as text input.

- Color Input
```<input type="color" name="favoriteColor" value="#ff0000">```
  - Description: Allows the user to select a color.
  - Attributes: value specifies the default color.

##### Input Attributes Common to All Types
- id: Unique identifier for the input.
- class: Specifies a class for styling with CSS.
- required: Indicates that the input must be filled out before submitting the form.
- readonly: Makes the input read-only.
- disabled: Disables the input (cannot be interacted with).
- autofocus: Automatically focuses on the input when the page loads.

#### Textarea 
The ```<textarea>``` tag is used for multi-line text input. It allows users to enter larger amounts of text compared to a single-line input.
```<textarea name="message" rows="4" cols="50" placeholder="Enter your message here..."></textarea>```
  - Description: Creates a text area where users can input multi-line text.
  - Attributes:
  - name: Identifies the textarea when the form is submitted.
  - rows: Specifies the visible number of lines (height).
  - cols: Specifies the visible width of the textarea in characters.
  - placeholder: Shows a hint inside the textarea.
  - required: Indicates that the textarea must be filled out before submitting the form.
  - readonly: Makes the textarea read-only.
  - disabled: Disables the textarea (cannot be interacted with).

#### Buttons

```<button>```: Creates a clickable button.
```<button type="button">Click Me!</button>```

### 7. Divs and Spans
```<div>```: A block-level element used for grouping content.
```
<div>
    <h2>Section Title</h2>
    <p>Content goes here.</p>
</div>
```

```<span>```: An inline element used for styling parts of text.
```<p>This is <span style="color: red;">important</span> text.</p>```

### 8. Page Footer
The ```<footer>``` tag can be used to define the footer for the entire webpage.

```
<footer>
    <p>&copy; 2024 Your Company Name. All rights reserved.</p>
    <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
</footer>
```

# META TAGS, for search engine optimization

### 1. Character Set
Purpose: Specifies the character encoding for the HTML document.
```
<meta charset="UTF-8">
```
Description: This tag declares that the document uses UTF-8 encoding, which supports a wide range of characters and is recommended for modern web applications.

### 2. Viewport
Purpose: Controls the layout on mobile browsers.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Attributes:
width: Sets the width of the viewport (e.g., device-width adjusts it to the width of the device).
initial-scale: Sets the initial zoom level when the page is first loaded (1.0 means no zoom).

### 3. Description
Purpose: Provides a brief description of the webpage.

```
<meta name="description" content="A brief description of the webpage for search engines.">
```
Description: This description may appear in search engine results and can help improve SEO (Search Engine Optimization).

### 4. Keywords
Purpose: Specifies keywords relevant to the webpage.

```
<meta name="keywords" content="HTML, CSS, JavaScript, Web Development">
```
Description: Contains a comma-separated list of keywords. Although this tag is less influential for SEO today, it was historically used to identify the content of the page.

### 5. Author
Purpose: Defines the author of the document.

```
<meta name="author" content="Your Name">
```
Description: This tag specifies the name of the person or organization responsible for the content.

### 6. Robots
Purpose: Provides instructions to web crawlers and search engines.

```
<meta name="robots" content="index, follow">
```
Attributes:
index: Allows the page to be indexed by search engines.
follow: Allows search engines to follow links on the page.
Common Values: noindex, nofollow, noarchive, noodp, noydir.

### 7. Refresh
Purpose: Automatically refreshes the page after a specified time.

```
<meta http-equiv="refresh" content="30">
```
Description: This tag tells the browser to refresh the page every 30 seconds. You can also specify a URL to redirect after a certain time:

```
<meta http-equiv="refresh" content="10; URL='https://example.com'">
```

### 8. Content-Type
Purpose: Specifies the content type and character encoding of the document.

```
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
```
Description: Similar to the charset tag, but an older way to define the document type.

### 9. Application Name
Purpose: Specifies the name of the web application.

```
<meta name="application-name" content="My Web App">
```
Description: This is useful for defining the application name in some browsers and for bookmarks.

### 10. Theme Color
Purpose: Sets the theme color for the browser's address bar and task switcher on mobile devices.

```
<meta name="theme-color" content="#ff0000">
```
Description: The color specified will be applied to the address bar in supported browsers, enhancing user experience.

### 11. Icon
Purpose: Defines a favicon for the webpage.

```
<link rel="icon" href="favicon.ico" type="image/x-icon">
```
Description: While technically not a <meta> tag, this tag is used in the <head> section to set the favicon, which is the small icon displayed in the browser tab.

### 12. Open Graph Tags
Open Graph tags are used to control how URLs are displayed when shared on social media platforms. While these are not strictly <meta> tags in HTML, they are commonly used for improving social media sharing.

```
<meta property="og:title" content="Webpage Title">
<meta property="og:description" content="Description of the webpage.">
<meta property="og:image" content="https://example.com/image.jpg">
<meta property="og:url" content="https://example.com">
```

![image explaining meta tags](https://raw.githubusercontent.com/hanshal18/cheatsheets/main/Screenshot%202024-08-10%20at%2018.03.50.png)








# Structural Elements
```
<html lang="en">
```
```
<head><meta charset="UTF-8"></head>
```
```
<title>My Page Title</title>
```
```
<body><h1>Welcome!</h1></body>
```
```
<header><h1>Site Header</h1></header>
```
```
<footer><p>Footer Content</p></footer>
```
```
<main><h2>Main Section</h2></main>
```
```
<section><h2>About Us</h2></section>
```
```
<article><h2>Article Title</h2></article>
```
```
<aside><p>Related Links</p></aside>
```
```
<nav><a href="#home">Home</a></nav>
```
```
<h1>Main Title</h1>
```
```
<h2>Subheading</h2>
```
```
<h3>Third Level Heading</h3>
```
```
<h4>Fourth Level Heading</h4>
```
```
<h5>Fifth Level Heading</h5>
```
```
<h6>Sixth Level Heading</h6>
```
```
<div class="container">Content</div>
```

# Text Content
```
<p>This is a paragraph.</p>
```
```
<hr>
```
```
<pre>Preformatted text</pre>
```
```
<blockquote cite="source">Quoted text</blockquote>
```
```
<ol><li>First Item</li></ol>
```
```
<ul><li>Item One</li></ul>
```
```
<li>List Item</li>
```
```
<dl><dt>Term</dt><dd>Definition</dd></dl>
```
```
<dt>Term</dt>
```
```
<dd>Description</dd>
```
```
<figure><img src="image.jpg"><figcaption>Caption</figcaption></figure>
```
```
<figcaption>Image Caption</figcaption>
```
```
<main><h2>Main Content</h2></main>
```
```
<address>Contact us at info@example.com</address>
```
```
<small>Small text</small>
```
```
<strong>Important text</strong>
```
```
<b>Bold text</b>
```
```
<em>Emphasized text</em>
```
```
<i>Italic text</i>
```
```
<mark>Highlighted text</mark>
```
```
<del>Deleted text</del>
```
```
<ins>Inserted text</ins>
```
```
<sub>Subscript text</sub>
```
```
<sup>Superscript text</sup>
```
```
<span class="highlight">Inline text</span>
```
```
<time datetime="2024-08-11">August 11, 2024</time>
```
```
<code>console.log('Hello, World!');</code>
```
```
<var>x = 5</var>
```
```
<samp>Sample output</samp>
```
```
<kbd>Ctrl + C</kbd>
```
```
<cite>Title of a Work</cite>
```
```
<q>Quoted text.</q>
```
```
<abbr title="Hypertext Markup Language">HTML</abbr>
```
```
<data value="2024-08-11">August 11, 2024</data>
```
```
<bdi>Some text</bdi>
```
```
<bdo dir="rtl">Right to left text</bdo>
```
```
<ruby>漢<rt>kan</rt></ruby>
```
```
<rt>Pronunciation</rt>
```
```
<rp>(</rp><ruby>漢<rt>kan</rt></ruby><rp>)</rp>
```
```
<bdi>Text to be isolated</bdi>
```
```
<bdo dir="rtl">Text in right-to-left direction</bdo>
```

# Embedded Content
```
<img src="image.jpg" alt="Image description">
```
```
<audio controls><source src="audio.mp3" type="audio/mpeg">Your browser does not support audio.</audio>
```
```
<video controls><source src="video.mp4" type="video/mp4">Your browser does not support video.</video>
```
```
<source src="video.mp4" type="video/mp4">
```
```
<track kind="subtitles" src="subtitles_en.vtt" srclang="en" label="English">
```
```
<iframe src="https://example.com"></iframe>
```
```
<embed src="file.pdf" width="600" height="500">
```
```
<object data="movie.mp4" type="video/mp4"></object>
```
```
<param name="autoplay" value="true">
```
```
<canvas id="myCanvas" width="200" height="100"></canvas>
```
```
<svg width="100" height="100"><circle cx="50" cy="50" r="40" fill="red" /></svg>
```
```
<math><msup><mi>x</mi><mn>2</mn></msup></math>
```

# Interactive Elements
```
<a href="https://example.com">Visit Example</a>
```
```
<button>Click Me</button>
```
```
<details><summary>More Info</summary><p>Details content.</p></details>
```
```
<dialog open><p>Dialog content.</p><button>Close</button></dialog>
```
```
<input type="text" placeholder="Enter text">
```
```
<select><option value="1">Option 1</option></select>
```
```
<input list="browsers"><datalist id="browsers"><option value="Chrome"><option value="Firefox"></datalist>
```
```
<textarea rows="4" cols="50">Enter text here...</textarea>
```
```
<label for="input">Input Label</label>
```
```
<fieldset><legend>Legend</legend><input type="text"></fieldset>
```
```
<legend>Form Legend</legend>
```
```
<progress value="70" max="100">70%</progress>
```
```
<meter value="0.6">60%</meter>
```
```
<output name="result" for="a b">Result</output>
```
```
<summary>Click to expand</summary>
```

# Table Elements
```
<table><tr><th>Header</th></tr></table>
```
```
<caption>Table Title</caption>
```
```
<thead><tr><th>Header</th></tr></thead>
```
```
<tbody><tr><td>Row 1</td></tr></tbody>
```
```
<tfoot><tr><td>Footer</td></tr></tfoot>
```
```
<tr><td>Table Row</td></tr>
```
```
<th>Table Header</th>
```
```
<td>Table Data</td>
```
```
<col style="background-color:yellow">
```
```
<colgroup><col span="2"></colgroup>
```

# Scripting Elements
```
<script>console.log('Hello!');</script>
```
```
<noscript>Your browser does not support JavaScript.</noscript>
```
```
<template><p>This is a template.</p></template>
```
```
<canvas id="myCanvas" width="200" height="100"></canvas>
```

# Miscellaneous Elements
```
<link rel="stylesheet" href="styles.css">
```
```
<meta charset="UTF-8">
```
```
<style>body { font-family: Arial; }</style>
```
```
<base href="https://example.com/">
```
```
<title>Page Title</title>
```

# Deprecated or Obsolete Elements
```
<applet code="example.class" width="300" height="300"></applet>
```
```
<basefont size="5" color="red">
```
```
<bgsound src="sound.mp3">
```
```
<blink>This text blinks</blink>
```
```
<iframe src="https://example.com"></iframe>
```
```
<marquee>Scrolling Text</marquee>
```
```
<font color="red">Red Text</font>
```
```
<center>This is centered</center>
```
```
<keygen name="name">
```
```
<nextid>
```
```
<nobr>Do not break</nobr>
```
```
<spacer size="20">
```
```
<strike>Strikethrough text</strike>
```
```
<tt>Typewriter text</tt>
```

# Global Attributes (available for all HTML elements)
class:```<div class="example">Content</div>```

id:```<p id="unique">Unique paragraph</p>```

style:``` <span style="color: red;">Styled text</span>```

title:``` <abbr title="Hypertext Markup Language">HTML</abbr>```

data-*:```<div data-info="value">Data Attribute</div>```

lang:```<html lang="en">```

tabindex:```<button tabindex="1">Focusable Button</button>```

hidden:```<div hidden>This is hidden</div>```

contenteditable:```<div contenteditable="true">Editable content</div>```

draggable:```<div draggable="true">Drag me</div>```

spellcheck:```<input type="text" spellcheck="true">```

