import React, { PureComponent } from 'react'
import {
    BackHandler,
    Animated,
    Easing,
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native'

import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers,
    NavigationActions
} from 'react-navigation'

import { connect } from 'react-redux'

import Home from './containers/Home'
import Cart from './containers/Cart'
import User from './containers/User'
import Category from './containers/Category'
import Search from './containers/Search'
import Login from './containers/Login'

const Loading = () =>
    <View style={styles.container}>
        <ActivityIndicator />
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const HomeNavigator = TabNavigator(
    {
        Home: { screen: Home },
        Category: { screen: Category },
        Cart: { screen: Cart },
        User: { screen: User }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazyLoad: true,
        tabBarOptions: {
            activeTintColor: '#ff0000'
        }
    }
)

const AppNavigation = StackNavigator(
    {
        Home: {
            screen: HomeNavigator
        },
        Search: { screen: Search },
        Login: {
            screen: Login
        }
    },
    {   
        headerMode: 'screen'
    }
)
@connect(({ router }) => ({ router })   )
class Router extends PureComponent {
    render() {
        const { dispatch, app, router } = this.props
        const navigation = addNavigationHelpers({ dispatch, state: router })
        return <AppNavigation navigation={navigation} />
    }
}

export function routerReducer(state, action = {}) {
    return AppNavigation.router.getStateForAction(action, state)
}

export default Router
