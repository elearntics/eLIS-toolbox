# eLIS Toolbox

eLIS components for web based eLearning applications

## Learning Unit

### Resource structure

```js
{
  id: '',
  name: '',
  value: '',
  match: '',
  sorted: '',
  media: [],
  author: '' // optional
}
```

### Exercise Types

#### Matching (1:1)

A

```js
{
  id: 'A',
  name: '',
  value: '',
  match: 'B', // id
  author: '' // optional
}
```

B
```js
{
  id: 'B',
  name: '',
  value: '',
  match: 'A', // id
  author: '' // optional
}
```

#### Grouping (1:n)

A
```js
{
  id: 'A',
  name: '',
  value: '',
  match: ['B', 'C', 'D'],
  author: '' // optional
}
```

B / C / D
```js
{
  id: 'B', // C, D
  name: '',
  value: '',
  match: 'A',
  author: '' // optional
}
```

#### Composing (n:n)

A
```js
{
  id: 'A',
  name: '',
  value: '',
  match: ['B', 'C', 'D'],
  sorted: false, // true
  author: '' // optional
}
```

B / C / D
```js
{
  id: 'B', // C, D
  name: '',
  value: '',
  match: 'A',
  author: '' // optional
}
```

## Exercise Structure

```JS
{
  id: '',
  name: '',
  descripion: '',
  author: '', // []
  exercises: [
    [{
      id: '', 
      title: 'Memory Game',
      description: 'My description',
      type: 'match',
      sorted: false,
      components: [
        [{
          id: 'A',
          name: 'cow',
          value: 'Cow',
          match: 'B',
          media: [
            {
              image: 'cow.png',
              audio: 'cow.mp3'
            }
          ]
        },
        {
          id: 'B',
          name: 'cow',
          value: 'Vaca',
          match: 'A',
          media: [
            {
              image: 'cow.png',
              audio: 'cow.mp3'
            }
          ]
        }],
        [{
          id: 'C',
          name: 'dog',
          value: 'Dog',
          match: 'D'
        },
        {
          id: 'D',
          name: 'dog',
          value: 'Perro',
          match: 'C'
        }]
      ]
    }],
    [],
    [],
  ]
}
```