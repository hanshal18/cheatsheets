# CSS3 Cheatsheet

### Selectors
- Universal Selector: *
- Element Selector: element
- Class Selector: .class
- ID Selector: #id
- Attribute Selector: [attribute] or [attribute=value]
- Pseudo-classes: :hover, :focus, :nth-child(n), :last-child, :first-child, :nth-of-type(n), etc.
- Pseudo-elements: ::before, ::after, ::first-line, ::first-letter

### Box Model
- width: Sets the width of an element.
- height: Sets the height of an element.
- padding: Sets the space between the element's border and its content.
- border: Sets the border around an element.
- margin: Sets the space outside the element's border.
- Display and Positioning
- display: block, inline, inline-block, flex, grid, none
- position: static, relative, absolute, fixed, sticky
- top, right, bottom, left: Positioning properties.
- z-index: Controls the stacking order of elements.

### Flexbox
- display: flex: Enables flexbox on the container.
- flex-direction: row, column, row-reverse, column-reverse
- justify-content: flex-start, center, space-between, space-around, space-evenly
- align-items: flex-start, center, flex-end, baseline, stretch
- align-self: auto, flex-start, center, flex-end, baseline, stretch
- flex-wrap: nowrap, wrap, wrap-reverse
- flex: flex-grow, flex-shrink, flex-basis

### Grid Layout
- display: grid: Enables grid layout on the container.
- grid-template-columns: Defines the number and size of columns.
- grid-template-rows: Defines the number and size of rows.
- grid-column: Specifies the column span.
- grid-row: Specifies the row span.
- grid-gap: Defines the space between grid items.

### Typography
- font-family: Defines the font.
- font-size: Sets the font size.
- font-weight: normal, bold, bolder, lighter, or numeric values.
- font-style: normal, italic, oblique
- line-height: Sets the distance between lines of text.
- text-align: left, right, center, justify
- text-transform: uppercase, lowercase, capitalize, none
- letter-spacing: Adjusts spacing between characters.
- word-spacing: Adjusts spacing between words.

### Colors and Backgrounds
- color: Sets the text color.
- background-color: Sets the background color.
- background-image: Sets a background image.
- background-size: auto, cover, contain
- background-position: left, right, top, bottom, center, or specific values.
- background-repeat: repeat, repeat-x, repeat-y, no-repeat

### Borders and Outlines
- border: border-width, border-style, border-color
- border-radius: Rounds the corners of an element.
- outline: Similar to border but doesn’t affect layout. outline-width, outline-style, outline-color

### Transitions and Animations
- transition: transition-property, transition-duration, transition-timing-function, transition-delay
- animation: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode

### Transforms
- transform: rotate(), scale(), translate(), skew()
- transform-origin: Defines the point of origin for transformations.

### Opacity and Visibility
- opacity: Sets the transparency level of an element.
- visibility: visible, hidden, collapse

### Media Queries
- @media: Defines different styles for different devices or screen sizes. Example:
```
@media (max-width: 600px) {
  /* Styles for screens smaller than 600px */
}
```

### Custom Properties (CSS Variables)
- --variable-name: Define a custom property.
- var(--variable-name): Use the custom property value.

### Gradients
- background: linear-gradient(direction, color1, color2, ...): Creates a linear gradient background.
- background: radial-gradient(shape size at position, color1, color2, ...): Creates a radial gradient background.


# 1. Color and Background Properties

background: A shorthand property for setting multiple background properties.
```
div {
  background: url('image.jpg') no-repeat center center;
}
```

background-color: Sets the background color of an element.
```
div {
  background-color: lightblue;
}
```

background-image: Specifies an image as the background.
```
div {
  background-image: url('image.jpg');
}
```

background-repeat: Defines how the background image is repeated.
```
div {
  background-repeat: repeat-x; /* Repeat only horizontally */
}
```

background-position: Sets the starting position of a background image.
```
div {
  background-position: top right; /* Position at the top right */
}
```

background-size: Specifies the size of the background image.
```
div {
  background-size: cover; /* Cover the entire element */
}
```

background-clip: Defines how far the background extends within an element.
```
div {
  background-clip: content-box; /* Background is clipped to the content box */
}
```

background-origin: Specifies the positioning area of the background image.
```
div {
  background-origin: padding-box; /* Background starts from the padding box */
}
```

background-attachment: Sets whether the background image scrolls with the page or is fixed.
```
div {
  background-attachment: fixed; /* Background image is fixed */
}
```

# 2. Box Model Properties

margin: Sets the outer margin of an element.
```
div {
  margin: 20px; /* 20px margin on all sides */
}
```

margin-top, margin-right, margin-bottom, margin-left: Specifies margins for each side.
```
div {
  margin-top: 10px; /* Top margin */
  margin-right: 15px; /* Right margin */
  margin-bottom: 20px; /* Bottom margin */
  margin-left: 25px; /* Left margin */
}
```

padding: Sets the inner padding of an element.
```
div {
  padding: 15px; /* 15px padding on all sides */
}
```

padding-top, padding-right, padding-bottom, padding-left: Specifies padding for each side.
```
div {
  padding-top: 10px; /* Top padding */
  padding-right: 15px; /* Right padding */
  padding-bottom: 20px; /* Bottom padding */
  padding-left: 25px; /* Left padding */
}
```

border: A shorthand property for setting border properties (width, style, color).
```
div {
  border: 2px solid black; /* 2px solid black border */
}
```

border-width: Sets the width of the border.
```
div {
  border-width: 2px; /* 2px border width */
}
```

border-style: Specifies the style of the border (e.g., solid, dashed).
```
div {
  border-style: dashed; /* Dashed border */
}
```

border-color: Sets the color of the border.
```
div {
  border-color: red; /* Red border */
}
```

border-radius: Rounds the corners of an element’s border box.
```
div {
  border-radius: 10px; /* Rounded corners */
}
```

box-shadow: Applies shadow effects around an element's frame.
```
div {
  box-shadow: 5px 5px 10px grey; /* Shadow with offset and blur */
}
```

outline: A shorthand property for setting the outline properties.
```
div {
  outline: 2px solid blue; /* 2px solid blue outline */
}
```

outline-width: Sets the width of the outline.
```
div {
  outline-width: 3px; /* 3px outline width */
}
```

outline-style: Specifies the style of the outline.
```
div {
  outline-style: dotted; /* Dotted outline */
}
```

outline-color: Sets the color of the outline.
```
div {
  outline-color: green; /* Green outline */
}
```

overflow: Specifies how to handle content that overflows an element's box.
```
div {
  overflow: hidden; /* Hide overflow content */
}
```

overflow-x: Controls the horizontal overflow behavior.
```
div {
  overflow-x: auto; /* Horizontal scroll if needed */
}
```

overflow-y: Controls the vertical overflow behavior.
```
div {
  overflow-y: scroll; /* Always show vertical scrollbar */
}
```

# 3. Text and Font Properties

color: Sets the color of text.
```
p {
  color: blue; /* Blue text color */
}
```

font: A shorthand property for setting font-related properties.
```
p {
  font: italic small-caps bold 16px/1.5 "Arial"; /* Font properties */
}
```

font-family: Specifies the font of the text.
```
p {
  font-family: "Times New Roman", serif; /* Font family */
}
```

font-size: Sets the size of the font.
```
p {
  font-size: 18px; /* Font size */
}
```

font-style: Specifies the style of the font (e.g., normal, italic).
```
p {
  font-style: italic; /* Italic text */
}
```

font-weight: Sets the weight (thickness) of the font.
```
p {
  font-weight: bold; /* Bold text */
}
```

font-variant: Controls the use of small-caps fonts.
```
p {
  font-variant: small-caps; /* Small caps */
}
```

font-size-adjust: Maintains the aspect ratio of fonts when switching between font families.
```
p {
  font-size-adjust: 0.5; /* Maintain aspect ratio */
}
```

line-height: Sets the height of a line box.
```
p {
  line-height: 1.5; /* Line height of 1.5 */
}
```

text-align: Aligns the text inside an element (e.g., left, right, center).
```
p {
  text-align: center; /* Centered text */
}
```

text-decoration: Sets text decoration (e.g., underline, overline).
```
p {
  text-decoration: underline; /* Underlined text */
}
```

text-transform: Controls the capitalization of text (e.g., uppercase, lowercase).
```
p {
  text-transform: uppercase; /* Uppercase text */
}
```

text-indent: Indents the first line of text in a block.
```
p {
  text-indent: 30px; /* Indent the first line by 30px */
}
```

text-shadow: Applies shadow to text.
```
p {
  text-shadow: 2px 2px 5px grey; /* Shadow effect on text */
}
```

letter-spacing: Sets the spacing between characters.
```
p {
  letter-spacing: 2px; /* 2px spacing between letters */
}
```

word-spacing: Sets the spacing between words.
```
p {
  word-spacing: 5px; /* 5px spacing between words */
}
```

white-space: Controls how whitespace inside an element is handled.
```
p {
  white-space: nowrap; /* No line breaks */
}
```

direction: Sets the text direction (e.g., ltr, rtl).
```
p {
  direction: rtl; /* Right-to-left text direction */
}
```

text-overflow: Specifies how overflowed text that is not displayed is signaled to the user.
```
p {
  text-overflow: ellipsis; /* Show "..." for overflowed text */
}
```

text-justify: Specifies the justification method for text.
```
p {
  text-justify: inter-word; /* Justify text between words */
}
```

# 4. List Properties

list-style: A shorthand property for setting list style properties.
```
ul {
  list-style: square; /* Square bullet points */
}
```

list-style-type: Specifies the type of list item marker (e.g., disc, circle).
```
ul {
  list-style-type: circle; /* Circle bullet points */
}
```

list-style-position: Sets the position of the list item marker (inside or outside).
```
ul {
  list-style-position: inside; /* Marker inside the list item */
}
```

list-style-image: Specifies an image as the list item marker.
```
ul {
  list-style-image: url('marker.png'); /* Custom bullet image */
}
```

# 5. Positioning Properties

position: Specifies the type of positioning method (static, relative, absolute, fixed, sticky).
```
div {
  position: relative; /* Relative positioning */
}
```

top, right, bottom, left: Offsets for positioned elements.
```
div {
  position: absolute;
  top: 20px; /* 20px from the top */
  left: 30px; /* 30px from the left */
}
```

z-index: Controls the vertical stacking order of overlapping elements.
```
div {
  position: absolute;
  z-index: 10; /* Stacking order */
}
```

# 6. Display and Visibility Properties

display: Specifies the display behavior (e.g., block, inline, flex).
```
div {
  display: flex; /* Flexbox layout */
}
```

visibility: Specifies whether an element is visible or hidden (visible, hidden).
```
div {
  visibility: hidden; /* Element is hidden */
}
```

opacity: Sets the transparency level of an element.
```
div {
  opacity: 0.5; /* 50% transparency */
}
```

# 7. Flexbox Properties

flex: A shorthand property for flex-grow, flex-shrink, and flex-basis.
```
.flex-item {
  flex: 1; /* Grow to fill space */
}
```

flex-direction: Defines the direction of flex items (row, column).
```
.flex-container {
  flex-direction: row; /* Horizontal layout */
}
```

flex-wrap: Specifies whether flex items should wrap onto multiple lines.
```
.flex-container {
  flex-wrap: wrap; /* Allow items to wrap */
}
```

flex-flow: A shorthand for flex-direction and flex-wrap.
```
.flex-container {
  flex-flow: column wrap; /* Vertical layout that wraps */
}
```

justify-content: Aligns flex items along the main axis.
```
.flex-container {
  justify-content: center; /* Center items */
}
```

align-items: Aligns flex items along the cross axis.
```
.flex-container {
  align-items: stretch; /* Stretch items to fill container */
}
```

align-content: Aligns flex lines when there is extra space in the cross axis.
```
.flex-container {
  align-content: space-between; /* Space between lines */
}
```

align-self: Overrides the align-items value for specific flex items.
```
.flex-item {
  align-self: flex-end; /* Align this item to the end */
}
```
# 8. Grid Layout Properties

grid: A shorthand for grid-template-rows, grid-template-columns, and grid-template-areas.
```
.grid-container {
  display: grid;
  grid: 100px auto / 1fr 2fr; /* 1 row of 100px, 1 auto; 2 columns */
}
```

grid-template-rows: Defines the number and size of rows in a grid.
```
.grid-container {
  grid-template-rows: 100px 200px; /* Two rows of specified heights */
}
```

grid-template-columns: Defines the number and size of columns in a grid.
```
.grid-container {
  grid-template-columns: 1fr 2fr; /* Two columns with different widths */
}
```

grid-template-areas: Defines named grid areas.
```
.grid-container {
  grid-template-areas: "header header" "sidebar content";
}
```

grid-column: Specifies a grid item's size and position in the column axis.
```
.grid-item {
  grid-column: 1 / 3; /* Span from column 1 to 3 */
}
```

grid-row: Specifies a grid item's size and position in the row axis.
```
.grid-item {
  grid-row: 2; /* Position in the second row */
}
```

grid-area: Assigns a name to a grid item.
```
.grid-item {
  grid-area: content; /* Named area */
}
```

grid-auto-flow: Controls how the auto-placement algorithm works.
```
.grid-container {
  grid-auto-flow: dense; /* Fill empty spaces */
}
```

grid-gap: Sets the gap (spacing) between grid items.
```
.grid-container {
  grid-gap: 10px; /* 10px gap between items */
}
```

grid-column-gap: Sets the gap between grid columns.
```
.grid-container {
  grid-column-gap: 20px; /* 20px gap between columns */
}
```

grid-row-gap: Sets the gap between grid rows.
```
.grid-container {
  grid-row-gap: 15px; /* 15px gap between rows */
}
```

# 9. Transitions and Animations Properties

transition: A shorthand property for transition properties (duration, timing function, delay).
```
div {
  transition: all 0.3s ease; /* Smooth transition for all properties */
}
```

transition-property: Specifies the name of the CSS property to which the transition is applied.
```
div {
  transition-property: background-color; /* Only transition background color */
}
```

transition-duration: Defines how long the transition takes to complete.
```
div {
  transition-duration: 0.5s; /* 0.5 seconds */
}
```

transition-timing-function: Describes how the intermediate property values are calculated.
```
div {
  transition-timing-function: linear; /* Linear transition */
}
```

transition-delay: Specifies when the transition will start.
```
div {
  transition-delay: 0.2s; /* 0.2 seconds delay before starting */
}
```

animation: A shorthand property for animation properties.
```
div {
  animation: fade-in 2s ease-in; /* Animation with name and duration */
}
```

animation-name: Specifies the name of the keyframes to use for the animation.
```
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

animation-duration: Defines how long the animation lasts.
```
div {
  animation-duration: 3s; /* 3 seconds duration */
}
```

animation-timing-function: Describes how the animation progresses.
```
div {
  animation-timing-function: ease-in-out; /* Ease in and out */
}
```

animation-delay: Specifies when the animation will start.
```
div {
  animation-delay: 1s; /* 1 second delay before starting */
}
```

animation-iteration-count: Defines how many times an animation should be played.
```
div {
  animation-iteration-count: infinite; /* Infinite iterations */
}
```

animation-direction: Specifies whether the animation should play in reverse on alternate cycles.
```
div {
  animation-direction: alternate; /* Alternate direction on each iteration */
}
```

animation-fill-mode: Specifies how a CSS animation should apply styles to its target before and after its execution.
```
div {
  animation-fill-mode: forwards; /* Retain the styles of the last keyframe */
}
```

animation-play-state: Specifies whether the animation is running or paused.
```
div {
  animation-play-state: paused; /* Animation is paused */
}
```

# 10. Transform Properties

transform: Applies a 2D or 3D transformation to an element.
```
div {
  transform: rotate(45deg); /* Rotate 45 degrees */
}
```

transform-origin: Defines the point of origin for transformations.
```
div {
  transform-origin: center; /* Transform around the center */
}
```

backface-visibility: Determines whether the back face of an element is visible when facing the user.
```
div {
  backface-visibility: hidden; /* Hide back face */
}
```

perspective: Defines how far the object is from the viewer.
```
.perspective {
  perspective: 1000px; /* Perspective effect */
}
```

# 11. Miscellaneous Properties

cursor: Specifies the type of cursor to be displayed when pointing over an element.
```
div {
  cursor: pointer; /* Pointer cursor */
}
```

opacity: Sets the transparency level of an element.
```
div {
  opacity: 0.7; /* 70% opacity */
}
```

overflow: Specifies how to handle content that overflows an element's box.
```
div {
  overflow: scroll; /* Scrollbars for overflow content */
}
```

resize: Specifies if an element is resizable by the user.
```
div {
  resize: both; /* Allow resizing both horizontally and vertically */
}
```

visibility: Specifies whether an element is visible or hidden.
```
div {
  visibility: hidden; /* Element is hidden */
}
```

filter: Applies visual effects like blur or brightness to an element.
```
img {
  filter: blur(5px); /* Blur effect */
}
```

clip-path: Defines a visible region of an element.
```
div {
  clip-path: circle(50%); /* Clip to a circle */
}
```

object-fit: Defines how an <img> or <video> should be resized to fit its container.
```
img {
  object-fit: cover; /* Cover the entire container */
}
```

object-position: Specifies the alignment of the content within its box.
```
img {
  object-position: top; /* Align the top */
}
```
