# Useful commands
- TO find process ocupying a port - lsof -i :port
- To kill directly on Linux: fuser -n tcp -k <port-number> 

# Exercises (in class)
- Aug 25 - exercise 2 : 14, 15, 16, 17, 18, 19 (almost done in class), 20, 21, 22, 38, 38b, 39 (optional), 40 (optional)
- Aug 26 - exercises 27, 28, 29, 30

# Exercises (self-study - part of quiz/hands-on)
- Build a form of your choice with various types of inputs. Suggestions - travel booking (say hotel reservation, airline search, user profile form etc.). Style it neatly using CSS.
- Design a 4-column layout
- Design a 3-column layout with first column being twice the width of 2nd and 3rd columns
- Make the Telstra page responsive - take a look at how Telstra page shows up and make it according to that (for various devices)
- Exercises 23, 26 from exercises.md
- Calculator implementation in JS
- Exercises 24, 25 from exercises.md
- React
    - 16-Stopwatch (in demos)
    - Exercises 10, 11

# Self-exploration (part of quiz/hands-on)
## CSS
- rem - multiple of root element value
- max-width and min-width
- explore border related properties
- explore margin related properties
- font and text related properties - text-align, text-transform
- clear property (used along with float)

## Bootstrap
- Please explore buttons, card, alert, form, navbar

## Node.JS
- __filename for a node.js script
- ~ usage in semver
- totalmem(), freemem(), userInfo() of os module
- process object's pid, cwd()
- process.exit()
- 'exit' event of process object
- path module's parse(), dirname(), basename(), extname()
- explore events emitted by streams
- Error handling in Express in detail - http://expressjs.com/en/guide/error-handling.html

## JS
- bactick strings
- !==
- while, do..while
- 2d arrays
- Function apply(), i.e. Function.prototype.apply() - when is it useful (when compared to call)
- getElementsByClassName(), getElementsByTagName()
- DOM node inserBefore() method to add a child before another child
- seting, checking, removing attributes
- removing class, checking if a class exists
- how can we figure out if shift key or ctrl key is pressed when button is clicked?
- Array reduce() method

## MongoDB
- Explore how to connect to MongoDB server - https://docs.mongodb.com/drivers/node/quick-start. Connect to some DB (say persons), and get a document from a collection using findOne() (say person with name John) and print in console.


# Self-exploration (not part of quiz)
## CSS
- background-position, background-size, background-repeat, background (shorthand)
- pseudo element (will be covered later)
- clearfix class (not easy)
- Reading exercise (background properties) - CSS image sprite - https://css-tricks.com/css-sprites/
- Play the game [Flex box froggy](https://flexboxfroggy.com/)

## JS
- Object.seal(), Object.freeze(), Object.defineProperty()
- How to define static member functions of a class
- Concept of mixins in JavaScript
- Can we add new nodes directly to children[] NodeList etc.?
- why style and script dynamically injected dont work
- event bubbling and event.stopPropagation()

## TS
- The "unknown" type vs "any" type

## Node.js
- Using read stream to read a file (you have to use the events fired on the read stream object)

## MongoDB
- populate() function to get nested object in query

## Workshops Server and Awesome Store Server
- Class application will use this - You can find the Workshops Server [here](http://workshops-server.herokuapp.com/)
- For practice - You can find the Awesome Store Server [here](https://awesome-store-server.herokuapp.com)

## References
- [Emmet syntax for easy HTML coding](https://emmet.io/)
- [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web) - Good and comprehensive reference for all front-end web technologies
- [Good book on JS (free)](https://eloquentjavascript.net/)
- [The Modern JavaScript Tutorial - javascript.info](https://javascript.info/) - Great for learning JavaScript in-depth
- [For CSS - Kevin Powell's channel on YouTube](https://www.youtube.com/user/KepowOb)

## Node
- [Using Node.js with TypeScript](https://developer.okta.com/blog/2018/11/15/node-express-typescript)

## Further study
- [One page tutorial on ES2015 features](https://babeljs.io/docs/en/learn)
- [Wes Bos JavaScript 30 course - 30 apps built using JS](https://wesbos.com/javascript30/)
- [How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)