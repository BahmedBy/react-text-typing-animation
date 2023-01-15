# react-text-typing-animation

This package allow to you to use text typing animation in reactjs

## Get stared

to use it you should install npm package, you can run:

### `npm i react-text-typing-animation`

or if you are using yarn:
### `yarn add react-text-typing-animation`

### Examples
Let's start with a simple example

The code below will type `hello world`  characters one after another

```js
import './App.css';
import TypingText from 'react-text-typing-animation'
function App() {
  const sync=useSyncAnimation()
  return (
    <div className="App">
    <TypingText text={"hello world"} />
    </div>
  );
}

export default App;

```
### `TypingText` Component
 This is the main component who the responsible for typing animation 
and have the flowing attributes:

 | Name          | Description                                                                                                                                                                         |
|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
 | text          | the text you apply animation to it . if you want return to line use `\n`                                                                                                            |
| className     | style of text, css class                                                                                                                                                            |
| delay         | `number` represent the time to wait before the animation starts in `ms`                                                                                                             |
 | speed         | speed of Animation `default value 1` <br/>this repsent the gap time between typing two characters : `speed * 100ms`<br/>the highest value of speed get slower animation             |
 | cursor        | cursor is the typing cursor `default value &#124;`                                                                                                                                  |                                                                                                                             |
 | showCursorEnd | boolean attribute default value `false`<br/> if showCursorEnd is `true` cursor will stay disable in the end of animation                                                            |
| reverse       | boolean attribute default value `false`<br/> if reverse is `true` `TypingText` component will start delete animation after the typing animation end                                 |
| deleteSpeed   | default value is value of speed<br/>like speed this repsent the gap time between delete two characters : 'deleteSpeed * 100ms' <br/>the highest value of speed get slower animation |
| loop          | boolean attribute default value false <br/> if loop is true the animation will start again every time is finished                                                                   |
| sync          | `useSyncAnimation` hooks, ths used to synchronized multi animation                                                                                                                  |
| order         | `number` attribute represent the order of execution                                                                                                                                 |

### useSyncAnimation() hooks

 useSyncAnimation () hooks use to synchronized many animation and make them execute one after one
 
### Example 
```js
    ...
    const sync=useSyncAnimation();
    ...
    <TypingText text={"first animation"} order={0} sync={sync}/>
    <TypingText text={"second animation"} order={1} sync={sync}/>
    ...
```

The code above will make second animation start after first animation end

useSyncAnimation execute animations on base of them  order, it's started by 0 than 1 , 2 ...

### Note:
   
- don't make gap between orders
- don't make loop=true when you use useSyncAnimation hooks



