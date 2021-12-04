import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardView } from '../screens/Dashboard/DashboardView';
import { RegisterView } from '../screens/Register/RegisterView';
import { ResumeView } from '../screens/Resume/ResumeView';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
	const theme = useTheme();

	return (
		<Navigator
			screenOptions={{
				tabBarActiveTintColor: theme.colors.secondary,
				tabBarInactiveTintColor: theme.colors.text,
				tabBarLabelPosition: 'beside-icon',
				headerShown: false,
				tabBarStyle: {
					paddingVertical: Platform.OS === 'ios' ? 20 : 0,
					height: 88,
				},
			}}
		>
			<Screen
				name="Listagem"
				component={DashboardView}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name="format-list-bulleted"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Screen
				name="Cadastrar"
				component={RegisterView}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name="attach-money"
							size={size}
							color={color}
						/>
					),
				}}
			/>

			<Screen
				name="Resumo"
				component={ResumeView}
				options={{
					tabBarIcon: ({ size, color }) => (
						<MaterialIcons
							name="pie-chart"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Navigator>
	);
}
