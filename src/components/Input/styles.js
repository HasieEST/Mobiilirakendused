import { StyleSheet } from "react-native";

import { colors } from "../../utils/colors";

export const styles = StyleSheet.create(
    {
        container: {
            marginBottom: 20
        },
        inputContainer: {
            borderColor: colors.grey,
            borderWidth: 1,
            borderRadius: 14,
            flexDirection: 'row',
            alignItems: 'center'
        },
        input: {
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 20,

        },
        label: {
            marginBottom: 8,
            color: colors.blue,
            fontWeight: '500'
        },
        eye: {
            width: 24,
            height: 24,
            marginHorizontal: 16
        }
    }
)