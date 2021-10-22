# Carousel
An easy carousel.

### Sample usage
```
import Carousel from './easy-carousel';
const images = [
    "imagee1", "imagee2", "imagee3", "imagee4"
]
const Carousel = ()=>{
    return (
        <Carousel 
            images={images} 
            delay={2000} 
        />
    )
}
export default Carousel

```
## props
props  | type | Default
------------- | ------------- | -------------
images  | Array | []
delay  | Number(ms) | 2000
buttons | Boolean | true
width | Number(px) | 500
height | Number(px) | 230

### Source code
[Github](https://github.com/himrd95/carousel)
