import LocalizedStrings from "react-native-localization";
import ru from "./ru.json";
import en from "./en.json";
import tech from "./tech.json"

const strings = new LocalizedStrings({
    ...ru, ...en, ...tech
})

export default strings