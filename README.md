Here is initial 1.0.0 version of Regional Statistics app. It is being developed in a monorepo based on Lerna.

Root URL of the project: http://localhost:3000/

# packages

## Backend
[Backend package](http://localhost:3000)

The graphql access point is ```/api```


```
    type AnnualDataItem {
        year: Int,
        value: Float,
        prettyValue: String,
        annualGrowthPercent: Float,
        totalGrowthPercent: Float,
        regionRank: Int,
    }
    type AnnualStatsItem {
        regionName: String,
        regionFlagUrl: String,
        measure: String,
        parentMeasure: String,
        annualData: [AnnualDataItem],
    }

    type AnnualStatsRating {
        regionName: String,
        regionRank: Int,
        regionFlagUrl: String,
        value: Float,
        prettyValue: String,
        paletteColor: String
    }

    type PointGeometry {
        type: String,
        coordinates: [Float],
    }
    
    type PointProperties {
        regionName: String,
        regionFlagUrl: String
    }
    
    type CoordsPoint {
        properties: PointProperties,
        geometry: PointGeometry
    }

    type PolygonGeometry {
        type: String,
        coordinates: [[[Float]]],
    }
    
    type PolygonProperties {
        regionName: String,
    }
    
    type CoordsPolygon {
        properties: PolygonProperties,
        geometry: PolygonGeometry
    }
    
    type Query {
        regionNames(regionType: String): [String],
        annualStatsYears: [Int],
        annualStatsMainCategoryNames: [String],
        annualStatsSubCategoryNames(mainCategoryName: String): [String],
        annualStats(
            regionType: String,
            mainCategoryName: String,
            subCategoryName: String,
            subSubCategoryName: String
        ): [AnnualStatsItem],
        annualStatsSubSubCategoryNames(
            mainCategoryName: String,
            subCategoryName: String
        ): [String],
        coordsPolygons(regionType: String): [CoordsPolygon],
        coordsPoints(regionType: String): [CoordsPoint],
        annualStatsRating(
            year: Int,
            mainCategoryName: String,
            subCategoryName: String,
            subSubCategoryName: String,
            regionType: String
        ): [AnnualStatsRating],
    }
```

Most of graphql resolvers are covered by tests.

### envs
```
PORT
CORS_ORIGIN
DB_AUTH
```

## Frontend

Devextreme library is the main part of the project. It's was chosen because of its visualization capabilities.

It has a vector map component, which is the key here. The stack of the project is: React, Typescript, @apollo/client, Axios, Lodash, Jest.

Most of the components are covered by tests.
