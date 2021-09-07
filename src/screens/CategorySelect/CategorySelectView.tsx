import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Forms/Button/Button';
import { categories } from '../../utils/categories';
import {
	Category,
	Container,
	Footer,
	Header,
	Icon,
	Name,
	Separator,
	Title,
} from './CategoryViewStyle';

interface Category {
	key: string;
	name: string;
}

interface Props {
	category: Category;
	setCategory: (category: Category) => void;
	closeSelectCategory: () => void;
}

export const CategorySelect: React.FC<Props> = ({
	category,
	setCategory,
	closeSelectCategory,
}) => {
	const handleCategorySelect = (category: Category) =>
		setCategory(category);

	return (
		<Container>
			<Header>
				<Title>Categoria</Title>
			</Header>

			<FlatList
				data={categories}
				style={{ flex: 1, width: '100%' }}
				keyExtractor={(item) => item.key}
				renderItem={({ item }) => (
					<Category
						onPress={() => handleCategorySelect(item)}
						isActive={category.key === item.key}
					>
						<Icon name={item.icon} />
						<Name>{item.name}</Name>
					</Category>
				)}
				ItemSeparatorComponent={() => <Separator />}
			/>

			<Footer>
				<Button title="Selecionar" onPress={closeSelectCategory} />
			</Footer>
		</Container>
	);
}
