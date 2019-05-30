1. npm install slate slate-react and immutable
2. `import { Editor } from 'slate-react'`
3. See error
4. `Import { Value } from 'slate'`
5. Create value with `const value = Value.fromJSON({...})`
6. To render text the Value needs at least one document property,
A document needs a block, and a block needs text.
7. Add state to component with `const [value, setValue] = useState(value)`
8. Add `onKeyDown` prop to Editor component
```jsx
onKeyDown={(event, editor) => {
  if (event.metaKey && event.key === 'b') {
    event.preventDefault()
    editor.toggleMark('bold')
  }
}}
```
9. `if (event.metaKey && event.key === 'b') editor.toggleMark('bold')` then we want to make text bold
10. `event.preventDefault()` to make sure there are no side effects
11. Now define  the renderMark prop:

```jsx
renderMark={(props, editor, next) => {
  const { mark: { type } } = props

  if (type === 'bold') {
    return <strong>{props.children}</strong>
  }

  return next()
}}
```