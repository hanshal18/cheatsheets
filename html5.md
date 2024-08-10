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






1. Document Metadata
```<html>```: Root element of an HTML document.
```<head>```: Contains metadata and links to resources like stylesheets and scripts.
```<title>```: Defines the title of the document (displayed in the browser's title bar or tab).
```<meta>```: Provides metadata about the document (e.g., charset, viewport settings).
```<link>```: Links to external resources (e.g., stylesheets).
```<style>```: Contains internal CSS styles.
```<base>```: Specifies a base URL for relative URLs.

2. Sections and Grouping
```<body>```: Contains the content of the document.
```<header>```: Represents introductory content or navigational links.
```<nav>```: Defines navigation links.
```<main>```: Specifies the main content of the document.
```<section>```: Defines a section in the document.
```<article>```: Represents a self-contained piece of content.
```<aside>```: Contains content indirectly related to the main content.
```<footer>```: Defines the footer for a section or the entire document.
```<h1>, <h2>, <h3>, <h4>, <h5>, <h6>```: Define headings, with ````<h1>``` being the highest level and ```<h6> ```the lowest.
```<p>```: Defines a paragraph.
```<hr>```: Creates a horizontal rule (line).
```<pre>```: Displays preformatted text.

3. Text Content
```<a>```: Defines a hyperlink.
```<strong>```: Indicates strong importance (typically bold text).
```<em>```: Indicates emphasized text (typically italicized).
```<small>```: Defines smaller text.
```<s>```: Represents text that is no longer accurate or relevant (strikethrough).
```<cite>```: Represents the title of a work.
```<q>```: Defines a short inline quotation.
```<blockquote>```: Defines a long quotation.
```<code>```: Represents a single line of code.
```<samp>```: Represents sample output from a computer program.
```<kbd>```: Represents user input (typically keyboard input).
```<var>```: Represents a variable in a mathematical expression or programming context.
```<abbr>```: Defines an abbreviation or acronym.
```<b>```: Represents bold text (not semantically important).
```<i>```: Represents italic text (not semantically important).
```<mark>```: Highlights text.
```<ruby>```: Defines a ruby annotation (used for pronunciation).
```<rt>```: Defines the pronunciation of characters in a ruby annotation.
```<rp>```: Defines what to show in browsers that do not support ruby annotations.
```<bdi>```: Isolates a span of text that might be formatted in a different direction from the surrounding text.
```<bdo>```: Overrides the current text direction.

4. Lists
```<ul>```: Defines an unordered list.
```<ol>```: Defines an ordered list.
```<li>```: Defines a list item.
```<dl>```: Defines a description list.
```<dt>```: Defines a term in a description list.
```<dd>```: Defines a description in a description list.

5. Links and Anchors
```<a>```: Defines a hyperlink.

6. Forms
```<form>```: Defines an HTML form for user input.
```<input>```: Defines an input control.
```<textarea>```: Defines a multiline text input control.
```<button>```: Defines a clickable button.
```<select>```: Defines a drop-down list.
```<option>```: Defines options in a drop-down list.
```<optgroup>```: Groups related options in a drop-down list.
```<label>```: Defines a label for an ```<input>``` element.
```<fieldset>```: Groups related elements in a form.
```<legend>```: Defines a caption for a ```<fieldset>``` element.
```<datalist>```: Contains a list of predefined options for an ```<input>``` element.
```<output>```: Represents the result of a calculation or user action.

7. Tables
```<table>```: Defines a table.
```<caption>```: Defines a caption for a table.
```<thead>```: Groups the header content in a table.
```<tbody>```: Groups the body content in a table.
```<tfoot>```: Groups the footer content in a table.
```<tr>```: Defines a row in a table.
```<td>```: Defines a cell in a table row.
```<th>```: Defines a header cell in a table.

8. Embedded Content
```<img>```: Embeds an image.
```<iframe>```: Embeds another HTML document within the current document.
```<embed>```: Embeds external content (e.g., multimedia).
```<object>```: Defines an embedded object (e.g., multimedia, documents).
```<param>```: Defines parameters for an ```<object>``` element.
```<video>```: Embeds a video player.
```<audio>```: Embeds an audio player.
```<source>```: Specifies multiple media resources for ```<video>``` and ```<audio>```.
```<track>```: Provides text tracks for ```<video>``` and ```<audio>``` elements.

9. Scripts and Interactivity
```<script>```: Defines client-side JavaScript.
```<noscript>```: Defines alternative content for browsers that do not support scripting.

10. Inline Frames
```<iframe>```: Defines an inline frame (used to embed another document).

11. Web Components
```<template>```: Defines a template that can be instantiated later.
```<slot>```: Defines a placeholder inside a ```<template>``` for content distribution.

12. Miscellaneous
```<canvas>```: Defines a drawing area for graphics (used with JavaScript).
```<svg>```: Defines scalable vector graphics.
```<math>```: Embeds mathematical expressions (part of MathML).

## Deprecated Tags (Not Recommended)
```<font>```: Specifies font size, color, and face (use CSS instead).
```<center>```: Centers content (use CSS instead).
```<big>```: Increases text size (use CSS instead).
```<blink>```: Makes text blink (not supported in modern browsers). 

