import styles from './year-group.module.scss';
import { getPostByYear } from '../../../api/writtingsAPI';
import WritingEntryButton from '../entry-button/writting-entry-button';

export default function YearGroup(props) {
    const posts = getPostByYear(props.year);

    return (
        <div className={styles.yearContainer}>
            <div className={styles.lineBreak}></div>
            <div className={styles.year}>{props.year}</div>
            <div className={styles.entriesContainer}>
                {posts.map((post) => (
                    <div
                        key={post.frontMatter.slug}
                        className={styles.buttonGridContainer}
                    >
                        <WritingEntryButton
                            key={post.frontMatter.slug}
                            link={`/writings/${post.frontMatter.slug}`}
                            title={post.frontMatter.title}
                            date={post.frontMatter.date}
                            description={post.frontMatter.description}
                        ></WritingEntryButton>
                    </div>
                ))}
            </div>
        </div>
    );
}