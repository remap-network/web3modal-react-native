import { Platform } from 'react-native';

export const getCustomWallets = () => {
  const wallets = [
    {
      id: 'rn-wallet',
      name: 'Wallet(RN)',
      image_url:
        'https://docs.walletconnect.com/assets/images/web3walletLogo-54d3b546146931ceaf47a3500868a73a.png',
      mobile_link: 'rn-web3wallet://',
      link_mode: 'https://lab.web3modal.com/rn_walletkit'
    },
    {
      id: 'flutter-wallet',
      name: 'Wallet(Flutter)',
      image_url:
        'https://docs.walletconnect.com/assets/images/web3walletLogo-54d3b546146931ceaf47a3500868a73a.png',
      mobile_link: 'wcflutterwallet://',
      link_mode: 'https://lab.web3modal.com/flutter_walletkit'
    }
  ];

  if (Platform.OS === 'android') {
    wallets.push({
      id: 'android-wallet',
      name: 'Wallet(Android)',
      image_url:
        'https://docs.walletconnect.com/assets/images/web3walletLogo-54d3b546146931ceaf47a3500868a73a.png',
      mobile_link: 'kotlin-web3wallet://',
      link_mode: 'https://lab.web3modal.com/wallet'
    });
  } else if (Platform.OS === 'ios') {
    wallets.push({
      id: 'ios-wallet',
      name: 'Wallet(iOS)',
      image_url:
        'https://docs.walletconnect.com/assets/images/web3walletLogo-54d3b546146931ceaf47a3500868a73a.png',
      mobile_link: 'walletapp://',
      link_mode: 'https://lab.web3modal.com/wallet'
    });
  }

  return wallets;
};
