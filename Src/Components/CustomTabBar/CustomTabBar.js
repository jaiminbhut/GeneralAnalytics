import Chat from '@/Assets/Icons/chat.svg';
import ChatBlue from '@/Assets/Icons/chatBlue.svg';
import Home from '@/Assets/Icons/home.svg';
import HomeBlue from '@/Assets/Icons/homeBlue.svg';
import Menu from '@/Assets/Icons/menu.svg';
import MenuBlue from '@/Assets/Icons/menuBlue.svg';
import PlusCircle from '@/Assets/Icons/plus_circle.svg';
import PlusCircleBlack from '@/Assets/Icons/plus_circle_black.svg';
import Wallet from '@/Assets/Icons/wallet.svg';
import WalletBlue from '@/Assets/Icons/walletBlue.svg';
import { NAVIGATION } from '@/Constants';
import { Layout, hs, ms, vs } from '@/Theme';
import { useTheme } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import getStyles from './CustomTabBar.styles';

export function CustomTabBar({ state, descriptors, navigation, position }) {
  const colors = useTheme().colors;
  const theme = useColorScheme();
  const styles = getStyles(colors);

  const TabIcons = useCallback((route, isFocused) => {
    return (
      <View>
        {route.name === NAVIGATION.createContent ? (
          <View style={Layout.alignItemsCenter}>
            {theme === 'dark' ? (
              <PlusCircleBlack
                height={ms(48)}
                width={ms(48)}
                style={{ bottom: vs(32) }}
                hitSlop={{
                  top: vs(20),
                  bottom: vs(20),
                  left: hs(20),
                  right: hs(20),
                }}
              />
            ) : (
              <PlusCircle
                height={ms(48)}
                width={ms(48)}
                style={{ bottom: vs(32) }}
                hitSlop={{
                  top: vs(20),
                  bottom: vs(20),
                  left: hs(20),
                  right: hs(20),
                }}
              />
            )}
          </View>
        ) : route.name === NAVIGATION.analytics ? (
          <View style={Layout.alignItemsCenter}>
            <View style={styles.iconBox}>
              {isFocused ? (
                <WalletBlue height={ms(20)} width={ms(20)} />
              ) : (
                <Wallet height={ms(20)} width={ms(20)} />
              )}
            </View>
            <Text
              style={[
                styles.textTabLabel,
                isFocused && styles.textFocusedLabel,
              ]}>
              {route.name}
            </Text>
          </View>
        ) : route.name === NAVIGATION.home ? (
          <View style={Layout.alignItemsCenter}>
            <View style={styles.iconBox}>
              {isFocused ? (
                <HomeBlue height={ms(20)} width={ms(20)} />
              ) : (
                <Home height={ms(20)} width={ms(20)} />
              )}
            </View>
            <Text
              style={[
                styles.textTabLabel,
                isFocused && styles.textFocusedLabel,
              ]}>
              {route.name}
            </Text>
          </View>
        ) : route.name === NAVIGATION.campaign ? (
          <View style={Layout.alignItemsCenter}>
            <View style={styles.iconBox}>
              {isFocused ? (
                <ChatBlue height={ms(24)} width={ms(24)} />
              ) : (
                <Chat height={ms(24)} width={ms(24)} />
              )}
            </View>
            <Text
              style={[
                styles.textTabLabel,
                isFocused && styles.textFocusedLabel,
              ]}>
              {route.name}
            </Text>
          </View>
        ) : (
          <View style={Layout.alignItemsCenter}>
            <View style={styles.iconBox}>
              {isFocused ? (
                <MenuBlue height={ms(14)} width={ms(16)} />
              ) : (
                <Menu height={ms(14)} width={ms(16)} />
              )}
            </View>
            <Text
              style={[
                styles.textTabLabel,
                isFocused && styles.textFocusedLabel,
              ]}>
              {route.name}
            </Text>
          </View>
        )}
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={Layout.fill}
            onLongPress={onLongPress}>
            <View style={Layout.fill}>{TabIcons(route, isFocused)}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
