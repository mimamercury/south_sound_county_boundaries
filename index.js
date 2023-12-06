import * as path from 'path'
import { readJson } from '@editorialapp/datatools/json'
import * as dirname from '@editorialapp/datatools/dirname'

const dataDirectory = dirname.join(import.meta.url, 'data')
const thurstonFilepath = path.join(dataDirectory, 'thurston.geojson')

const thurstonGeojson = await readJson(thurstonFilepath)

/**
 * @param {'thurston'} county_slug 
 * @return {Object} GeoJSON of county boundary
 */
export function getGeojson (county_slug) {
    return thurstonGeojson
}
