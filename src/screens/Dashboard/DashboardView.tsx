import React, { useCallback, useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HightlightCard } from '../../components/HightlightCard/HightlightCard';
import {
	TransactionCard,
	TransactionCardProps,
} from '../../components/TransactionCard/TransactionCardView';
import {
	Container,
	Header,
	HightlightCards,
	Icon,
	Photo,
	Title,
	TransactionList,
	Transactions,
	User,
	UserContainer,
	UserGreeting,
	UserInfo,
	UserName,
	LogoutButton,
} from './DashboardViewStyled';
import { useFocusEffect } from '@react-navigation/native';

export interface DataListProps extends TransactionCardProps {
	id: string;
}

export function DashboardView() {
	const [data, setData] = useState<DataListProps[]>([]);

	const loadTransactions = async () => {
		const dataKey = '@gofinances:transactions';
		const response = await AsyncStorage.getItem(dataKey);
		const transactions = response ? JSON.parse(response) : [];
		console.log('transactions ', transactions);
		const transactionsFormatted: DataListProps[] = transactions.map(
			(item: DataListProps) => {
				const amount = Number(item.amount).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});

				const dateFormatted = Intl.DateTimeFormat('pt-BR', {
					day: '2-digit',
					month: '2-digit',
					year: '2-digit',
				}).format(new Date(item.date));

				return {
					id: item.id,
					name: item.name,
					amount,
					transactionType: item.transactionType,
					date: dateFormatted,
					category: item.category,
				};
			}
		);

		setData(transactionsFormatted);
	};

	useEffect(() => {
		loadTransactions();
	}, []);

	useFocusEffect(
		useCallback(() => {
			loadTransactions();
		}, [])
	);

	return (
		<Container>
			<Header>
				<UserContainer>
					<UserInfo>
						<Photo
							source={{
								uri: 'https://avatars.githubusercontent.com/u/1832092?v=4',
							}}
						/>
						<User>
							<UserGreeting>Olar, </UserGreeting>
							<UserName>Alexandre</UserName>
						</User>
					</UserInfo>

					<LogoutButton onPress={() => {}}>
						<Icon name="power" />
					</LogoutButton>
				</UserContainer>
			</Header>

			<HightlightCards>
				<HightlightCard
					title="Entradas"
					amount="R$ 17.500,00"
					lastTransaction="ijasoija soija soijaasas"
					type="down"
				/>
				<HightlightCard
					title="Saídas"
					amount="R$ 500,00"
					lastTransaction="ijasoija soija soijaasas"
					type="up"
				/>
				<HightlightCard
					title="Total"
					amount="R$ 17.000,00"
					lastTransaction="ijasoija soija soijaasas"
					type="total"
				/>
			</HightlightCards>

			<Transactions>
				<Title>Listagem</Title>

				<TransactionList
					data={data}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <TransactionCard data={item} />}
				/>
			</Transactions>
		</Container>
	);
}
