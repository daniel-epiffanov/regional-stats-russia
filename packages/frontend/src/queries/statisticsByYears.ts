import axios from 'axios'
import { StatisticsByYearsQuery } from '../../../../sharedTypes/gqlQueries'

import { hostApi } from '../helpers/host'

interface Options {
	selectedRegion: string,
	mainSectionName: string,
	subSectionTitle: string,
	startYear: number
	endYear: number
}

type StatisticsByYearsFn = (options: Options) => Promise<StatisticsByYearsQuery | null>

type SingleSelectionResponse = { statisticsByYears: StatisticsByYearsQuery }

const statisticsByYearsQuery: StatisticsByYearsFn = async (options) => {
	const {
		selectedRegion, mainSectionName, subSectionTitle, startYear, endYear,
	} = options

	const query = `
	query {
		statisticsByYears (
			regionName: "${selectedRegion}",
			mainSectionName: "${mainSectionName}",
			subSectionTitle: "${subSectionTitle}",
			startYear: ${startYear},
			endYear: ${endYear}
		) {
			year,
			value
		}
	}`

	const axiosResponse = await axios.post<SingleSelectionResponse>(hostApi, { query })
	const { statisticsByYears } = axiosResponse.data
	if (!statisticsByYears) return null
	return statisticsByYears
}

export default statisticsByYearsQuery
