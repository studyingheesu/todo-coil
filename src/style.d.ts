// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    darkTextColor: string;
    whiteColor: string;
    bgColor: string;
    secondBgColor: string;
    secondAccentColor: string;
    primaryColor: string;
    accentColor: string;
  }
}
