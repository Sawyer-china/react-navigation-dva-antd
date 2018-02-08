import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationActions } from 'react-navigation'

// @connect()  es7 的语法 修饰器 如果对这个不是很了解请看 阮大爷的 教程  http://es6.ruanyifeng.com/
@connect(({ app }) => ({ app }))
class User extends Component {
    static navigationOptions = {
        title: 'User',
        tabBarLabel: '会员中心',
        tabBarIcon: ({ tintColor, focused }) =>
            // focused 当前 tab 被选择  !focused  未被选中
            // tintColor tabNavigator 传入的配置颜色
            <Ionicons
                name={focused ? 'ios-person' : 'ios-person-outline'}
                size={26}
                style={{ color: tintColor }}
            />
    }

    render() {
        console.log(this.props)
        const { isLogin } = this.props.app
        return (
            <View style={styles.container}>
                <Text style={{ marginBottom: 20 }}>会员中心</Text>
                {!isLogin
                    ? <Button
                          type="warning"
                          onClick={() => {
                              this.props.dispatch(
                                  NavigationActions.navigate({
                                      routeName: 'Login'
                                  })
                              )
                          }}
                      >
                          我要登录
                      </Button>
                    : <View>
                          <Text style={{ marginBottom: 20 }}>您已经登录了</Text>
                          <Button
                          type="warning"
                          onClick={() => {
                              console.log('退出成功')
                          }}
                      >
                        退出登录
                      </Button>
                      </View>}
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

export default User
