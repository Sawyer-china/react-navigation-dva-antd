import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { NavigationActions } from 'react-navigation'

// @connect()  es7 的语法 修饰器 如果对这个不是很了解请看 阮大爷的 教程  http://es6.ruanyifeng.com/
@connect()
class Home extends Component {
    static navigationOptions = {
        title: 'Category',
        tabBarLabel: '商品分类',
        headerTitle: '商品分类',
        tabBarIcon: ({ tintColor, focused }) =>
            // focused 当前 tab 被选择  !focused  未被选中
            // tintColor tabNavigator 传入的配置颜色
            <Ionicons
                name={focused ? 'ios-browsers-outline' : 'ios-browsers-outline'}
                size={26}
                style={{ color: tintColor }}
            />
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 20 }}>这是商品分类页</Text>
                <Button
                    type="warning"
                    onClick={() => {
                        this.props.dispatch(
                            NavigationActions.navigate({ routeName: 'Search' })
                        )
                    }}
                >
                    点我到搜索页面
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 32,
        height: 32
    }
})

export default Home
