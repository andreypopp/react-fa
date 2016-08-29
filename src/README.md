## React-fa 
### Icon Component API

**Props in `[]` are optional**

|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|name       |`string`|`undefined`|Required: Name of the Font Awesome Icon     |
|[className]|`string`|`undefined`|Set a CSS class for extra styles            |
|[size]     |`string`|`undefined`|Increase size: 'lg', '2x', '3x', '4x', '5x' |
|[rotate]   |`string`|`undefined`|Rotate by deg:'90', '180', '270'            |
|[flip]     |`string`|`undefined`|Flips Icon: 'horizontal', 'vertical'        |
|[fixedWidth]|`boolean`|`false`|Set Icon to a fixed width                   |
|[spin]     |`boolean`| `false`|Rotate Icon|
|[pulse]     |`boolean`|`false`|Rotate Icon in 8 steps|
|[stack]     |`string` |`undefined`|Stack Icons: '1x', '2x'. [More Info][]
|[inverse]   |`boolean`|`false`|Inverse the Icon color|
|[Component] |`string/func`|`span`|Alternate DOM element |

### IconStack Component API
|Prop       |Type    |Default    |Description                                 |
|-----------|:------:|:---------:|--------------------------------------------|
|[children] |`node`|`undefined`|Required: Child elements |
|[size]     |`string`|`undefined`|Increase size: 'lg', '2x', '3x', '4x', '5x' |
|[className]|`string`|`undefined`|Set a CSS class for extra styles            |



[More Info]: http://fontawesome.io/examples/ 'Scroll to stacked icons'
