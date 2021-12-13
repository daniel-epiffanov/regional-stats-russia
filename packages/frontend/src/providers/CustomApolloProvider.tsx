import { FC, useState } from 'react'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from '@apollo/client'
import { hostApi } from '../helpers/host'

const client = new ApolloClient({
	uri: hostApi,
	cache: new InMemoryCache(),
})

const CustomApolloProvider: FC = ({ children }) => (
	<ApolloProvider client={client}>
		{children}
	</ApolloProvider>
)

export default CustomApolloProvider
