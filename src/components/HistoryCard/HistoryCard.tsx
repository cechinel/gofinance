import React from 'react';
import { Amount, Container, Title } from './HistoryCardStyle';

interface HistoryCardProps {
	title: string;
	amount: number;
	color: string;
}

export function HistoryCard({ title, amount, color }: HistoryCardProps) {
	return (
		<Container color={color}>
			<Title>{title}</Title>
			<Amount>{amount}</Amount>
		</Container>
	);
}
