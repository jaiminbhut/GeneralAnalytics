const commonColor = {
  colors: {
    commonWhite: '#FFFFFF',
    commonBlack: '#000000',
  },
};

const light = {
  colors: {
    background: '#FFFFFF',
    black: '#FFFFFF',
    white: '#161C24',
    text: '#212B36',
    lightBackground: '#FFFFFF',
    gray: '#637381',
    disable: '#919EAB',
    blue: '#0075F3',
    divider: 'rgba(145, 158, 171, 0.24)',
    ...commonColor.colors,
  },
};

const dark = {
  colors: {
    background: '#161C24',
    black: '#000000',
    white: '#FFFFFF',
    text: '#828282',
    lightBackground: '#212B36',
    gray: '#637381',
    disable: '#919EAB',
    blue: '#0075F3',
    divider: 'rgba(145, 158, 171, 0.24)',
    ...commonColor.colors,
  },
};

export const Colors = { light, dark };
