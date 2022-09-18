import { gql } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';

export default gql`
	${fs.readFileSync(path.join(__dirname, 'statData.graphql'), 'utf8')}
	${fs.readFileSync(path.join(__dirname, 'coordsPolygons.graphql'), 'utf8')}
	${fs.readFileSync(path.join(__dirname, 'statRating.graphql'), 'utf8')}

	input SD {
		year: Int
	}

	type Query {
		regionNames(regionType: String): [String],
		annualStatsYears: [Int],
		annualStatsMainCategoryNames: [String],
		annualStatsSubCategoryNames(mainCategoryName: String): [String],
		annualStatsSubSubCategoryNames(
			mainCategoryName: String
			subCategoryName: String
		): [String],
		coordsPolygons(regionType: String): [CoordsPolygons],
		
	}
	`;

// eslint-disable-next-line max-len
// statRating(year: Int, mainCategory: String, subCategory: String, subSubCategory: String, regionNames: [String]): [StatRating],
// eslint-disable-next-line max-len
// statData(regionName: String, mainCategory: String, subCategory: String, subSubCategory: String): StatData,
