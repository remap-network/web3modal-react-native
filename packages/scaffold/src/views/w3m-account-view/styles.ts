import { Spacing } from '@reown/appkit-ui-react-native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    zIndex: 1,
    top: Spacing.l,
    right: Spacing.xl
  },
  copyButton: {
    marginLeft: Spacing['4xs']
  },
  networkButton: {
    marginVertical: Spacing.xs
  },
  upgradeButton: {
    marginBottom: Spacing.s
  }
});
