import { StatisticsYears } from '../../../../sharedTypes/gqlQueries'
import statisticsModel from '../mongoModels/statistics'
import { ResolverFnAsync } from './types/ResolverFn'

const statisticsYears: ResolverFnAsync<StatisticsYears> = async (parent, args, ctx) => {
	const mongoRes = await statisticsModel.distinct('mainSections.subSections.yearValues.year')
	return mongoRes
}

export default statisticsYears
