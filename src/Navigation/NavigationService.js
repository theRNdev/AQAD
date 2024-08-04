import { NavigationActions, StackActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	_navigator.navigate(routeName,params);
}

function goBack() {
	_navigator.dispatch(NavigationActions.back());
}

function resetNavigation(routeName = 'loginScreen') {
	const resetAction = StackActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({routeName})],
	});
	_navigator.dispatch(resetAction);
}

export default {
	navigate,
	setTopLevelNavigator,
	resetNavigation,
	goBack,
};