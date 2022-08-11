import * as Font from "expo-font";

const useFonts = async () => {
    await Font.loadAsync({
        SourceSansProRegular : require("../assets/fonts/SourceSansPro-Regular.ttf"),
        SourceSansProBold : require("../assets/fonts/SourceSansPro-Bold.ttf"),
        SourceSansProItalic : require('../assets/fonts/SourceSansPro-Italic.ttf'),
        SourceSansProSemiBold : require('../assets/fonts/SourceSansPro-SemiBold.ttf'),
        // All other fonts here
    });
};

export default useFonts;
