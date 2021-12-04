import AsyncStorage from '@react-native-async-storage/async-storage';
// import useFocusEffect from '@react-navigation/core/lib/typescript/src/useFocusEffect';
// import { addMonths, subMonths } from 'date-fns';
import React, { useCallback, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { HistoryCard } from '../../components/HistoryCard/HistoryCard';
import { categories } from '../../utils/categories';
import { Container, Content, Header, Title } from './ResumeViewStyle';

interface TransactionData {
	transactionType: 'positive' | 'negative';
	name: string;
	amount: number;
	category: string;
	date: string;
}

interface CategoryData {
	key: string;
	name: string;
	total: number;
	totalFormatted: string;
	color: string;
	// percent: string;
}

export function ResumeView() {
	const [isLoading, setIsLoading] = useState(false);
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
		[]
	);

	const theme = useTheme();

	// function handleDateChange(action: 'next' | 'prev') {
	// 	if (action === 'next') {
	// 		setSelectedDate(addMonths(selectedDate, 1));
	// 	} else {
	// 		setSelectedDate(subMonths(selectedDate, 1));
	// 	}
	// }

	const loadData = async () => {
		setIsLoading(true);
		const dataKey = '@gofinance:transactions';
		const response = await AsyncStorage.getItem(dataKey);
		const responseFormatted = response ? JSON.parse(response) : [];

		const expensives = responseFormatted.filter(
			(expensive: TransactionData) =>
				expensive.transactionType === 'negative'
		);

		// const expensivesTotal = expensives.reduce(
		// 	(acumullator: number, expensive: TransactionData) => {
		// 		return acumullator + Number(expensive.amount);
		// 	},
		// 	0
		// );

		const totalByCategory: CategoryData[] = [];

		categories.forEach((category) => {
			let categorySum = 0;

			expensives.forEach((expensive: TransactionData) => {
				if (expensive.category === category.key) {
					categorySum += Number(expensive.amount);
				}
			});

			if (categorySum > 0) {
				const totalFormatted = categorySum.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});

				// const percent = `${(
				// 	(categorySum / expensivesTotal) *
				// 	100
				// ).toFixed(0)}%`;

				totalByCategory.push({
					key: category.key,
					name: category.name,
					color: category.color,
					total: categorySum,
					totalFormatted,
					// percent,
				});
			}
		});

		setTotalByCategories(totalByCategory);
		setIsLoading(false);
	}

    useEffect(() =>{
        loadData();
    }, [])

	return (
		<Container>
			<Header>
				<Title>Resumo por categoria</Title>
			</Header>

			<Content>
				{totalByCategories.map((item) => (
					<HistoryCard
                        key={item.key}
						title={item.name}
						amount={item.total}
						color={item.color}
					/>
				))}
			</Content>
		</Container>
	);
}
