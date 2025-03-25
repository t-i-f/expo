import { View } from 'react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { router } from 'expo-router';
import { Text } from '@/components/ui/text';
import { Image } from 'expo-image';
import { cssInterop } from 'nativewind';

const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

cssInterop(Image, { className: "style" })

export default function RootScreen() {
    return (
        <View
            className="flex-1 items-start justify-start bg-white">
            <Image
                source={ {{{cover}}} }
                placeholder=\{{ blurhash }}
            contentFit="cover"
            className="w-full h-2/5"
            />

            <View className="flex-grow w-full items-center justify-center">
                <View>
                    <Image
                        contentFit="contain"
                        className="h-20 mb-8"
                        source={ {{{logo}}} }
                    />
                    <Text className="text-2xl text-center">
                        {{ tagline1 }}{'\n'}{{ tagline2 }}
                    </Text>
                </View>

            </View>

            <View
                className="w-full h-fit px-4 pb-4">
                <View>
                    <View className="py-2">
                        <Button onPress={() => { router.navigate("/login") }} className="h-[7vh]">
                            <ButtonText className="text-xl">Let's Go</ButtonText>
                        </Button>
                    </View>
                    {{#if onboarding}}
                    <View className="py-2">
                        <Button onPress={() => { router.navigate("/onboarding") }} variant="outline" className='h-[7vh]'>
                            <ButtonText className="text-xl">Let Me See First</ButtonText>
                        </Button>
                    </View>
                    {{/if}}
                </View>

            </View>
        </View>
    );
}
