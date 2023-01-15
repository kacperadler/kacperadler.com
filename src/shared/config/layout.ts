import { Roboto_Mono } from '@next/font/google';

const robotoMono = Roboto_Mono({ weight: '400', subsets: ['latin'] });

export const layout = `${robotoMono} max-w-4xl p-4 mx-auto dark:prose-invert`;
