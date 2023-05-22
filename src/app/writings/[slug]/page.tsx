import {
    getAllPosts,
    getPostData,
    formatDate,
} from '../../../api/writtingsAPI';
import { CustomMDX } from '../../../components/content/mdx-remote';
import Link from 'next/link';
import Image from 'next/image';
import BackArrow from '../../../../public/back-arrow.svg';

// Metadata
export async function generateMetadata({ params }) {
    const { slug } = params;
    const { frontMatter } = getPostData(slug);

    return {
        title: frontMatter.title,
    };
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts;
}

export default function WritingEntry({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const { frontMatter, content } = getPostData(slug);

    return (
        <div className='mx-auto max-w-[630px] sm:mt-32'>
            <div className='flex flex-col gap-y-8'>
                <div className='font-serif text-base font-normal italic text-slate-950'>
                    <Link
                        href='/writings'
                        className='text-base font-normal text-slate-950'
                    >
                        <span className='inline-block'>
                            <Image src={BackArrow} alt='Back arrow'></Image>
                        </span>{' '}
                        Writings
                    </Link>
                </div>

                <div className='flex flex-col gap-y-2'>
                    <div className='font-serif text-3xl font-normal text-slate-950'>
                        {frontMatter.title}
                    </div>
                    <div className='text-base font-normal text-neutral-400'>
                        {formatDate(frontMatter.date)}
                    </div>
                </div>

                <div className='prose'>
                    <CustomMDX source={content} />
                </div>
            </div>
        </div>
    );
}
