# South Sound county boundaries

## Data sources
- Thurston County boundary downloaded manually from [Thurston GeoData Center](https://gisdata-thurston.opendata.arcgis.com/datasets/thurston::thurston-county-border/explore?location=47.006437,-122.669602,10.11)

## Todo
- Pierce County
- Mason County
- Kitsap County

## Usage

```js
import { getGeojson } from 'south_sound_county_boundaries'

const thurston = getGeojson('thurston')
```

## License
[ISC](LICENSE.md)
