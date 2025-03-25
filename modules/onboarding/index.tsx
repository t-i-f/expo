import { Image } from 'expo-image';
import React from 'react';

import { cssInterop } from 'nativewind';
import Onboarding from 'react-native-onboarding-swiper';
import { router } from 'expo-router';
import LocalStorage from '@/features/AsyncStorage/LocalStorage';

cssInterop(Image, { className: "style" })


export default function OnboardingScreen() {

    const onDone = React.useCallback(async () => {
        await LocalStorage.set('onboarding', true);
        router.replace('/home');
    }, []);

    return (
        <Onboarding onSkip={onDone} onDone={onDone} pages={[
            {
                backgroundColor: '#678FB4',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{blue_image}}} } />,
                title: '{{blue_title}}',
                subtitle: '{{blue_subtitle}}'
            },
            {
                backgroundColor: '#ff9100',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{orange_image}}} } />,
                title: '{{orange_title}}',
                subtitle: '{{orange_subtitle}}'
            },
            {
                backgroundColor: '#9B90BC',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{purple_image}}} } />,
                title: '{{purple_title}}',
                subtitle: '{{purple_subtitle}}'
            },
            {
                backgroundColor: '#22bcb5',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{green_image}}} } />,
                title: '{{green_title}}',
                subtitle: '{{green_subtitle}}'
            },
            {
                backgroundColor: '#FF8A80',
                image: <Image className="flex flex-col w-60 h-60" source={ {{{red_image}}} } />,
                title: '{{red_title}}',
                subtitle: '{{red_subtitle}}'
            },
        ]} />
    );
};
