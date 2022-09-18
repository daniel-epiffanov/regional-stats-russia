export type GqlAnnualStatsYears = ReadonlyArray<number>
export type GqlRegionNames = ReadonlyArray<string>
export type GqlAnnualStatsCategoryNames = ReadonlyArray<string>

type Polygon = Readonly<{
	type: 'Polygon' | 'MultiPolygon',
	coordinates: ReadonlyArray<ReadonlyArray<ReadonlyArray<string>>>
}>

type GqlCoordsPolygon = Readonly<{
	geometry: Polygon,
	properties: Readonly<{
		regionName: string
	}>,
}>

export type GqlCoordsPolygons = ReadonlyArray<GqlCoordsPolygon>


export type RegionTypeArg = 'region' | 'federalDistrict'




// data to be gotten by query arguments
export type GqlStatData = Readonly<{
	name: string,
	measure: string,
	parentMeasure?: string,
	yearValues: ReadonlyArray<Readonly<{
		year: number,
		value: number,
		prettyValue: string,
		percent: number,
	}>>,
	flag: url,
}>

export type GqlStatYearValuePercents = ReadonlyArray<Readonly<{
	percent: number,
	year: number,
	value: number
}>>
export type GqlStatYearMeanPercents = ReadonlyArray<Readonly<{
	percent: number,
	year: number,
	mean: number
}>>

export type GqlStatRating = Readonly<{
	value: number,
	place: number,
	regionName: string,
	flag: string,
	prettyValue: string,
}>

export type GqlMapRegionNames = ReadonlyArray<string>

