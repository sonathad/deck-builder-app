import { useState } from "react";

type Article = {
    id: number,
    title: string,
    content: string,
    img: string,
}

const incomingArticles: Article[] = [
    {
        id: 1,
        title: "Lorem Ipsum Dolor Sit Amet 1",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        title: "Lorem Ipsum Dolor Sit Amet 2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        title: "Lorem Ipsum Dolor Sit Amet 3",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        title: "Lorem Ipsum Dolor Sit Amet 4",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 5,
        title: "Lorem Ipsum Dolor Sit Amet 5",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 6,
        title: "Lorem Ipsum Dolor Sit Amet 6",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 7,
        title: "Lorem Ipsum Dolor Sit Amet 7",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 8,
        title: "Lorem Ipsum Dolor Sit Amet 8",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 9,
        title: "Lorem Ipsum Dolor Sit Amet 9",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 10,
        title: "Lorem Ipsum Dolor Sit Amet 10",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 11,
        title: "Lorem Ipsum Dolor Sit Amet 11",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 12,
        title: "Lorem Ipsum Dolor Sit Amet 12",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 13,
        title: "Lorem Ipsum Dolor Sit Amet 13",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 14,
        title: "Lorem Ipsum Dolor Sit Amet 14",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 15,
        title: "Lorem Ipsum Dolor Sit Amet 15",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 16,
        title: "Lorem Ipsum Dolor Sit Amet 16",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 17,
        title: "Lorem Ipsum Dolor Sit Amet 17",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 18,
        title: "Lorem Ipsum Dolor Sit Amet 18",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 19,
        title: "Lorem Ipsum Dolor Sit Amet 19",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    },
    {
        id: 20,
        title: "Lorem Ipsum Dolor Sit Amet 20",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio.",
        img: "https://via.placeholder.com/150"
    }
];


export default function ArticleList() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [articles, setArticles] = useState<Article[]>(incomingArticles);

    return (
        <div className="max-w-7xl m-auto p-2">
            <h2>Latest News</h2>
            <div className="flex gap-2 justify-center items-center flex-wrap">
                {articles.map(article => <ArticleCard key={article.id} article={article} />)}
            </div>
        </div>

    );
}

function ArticleCard({ article }: { article: Article }) {
    return (
        <div className="max-w-md border-2 border-blue-600 rounded-md hover:border-blue-400 duration-300">
            <a href="#">
                <img src="https://wsrv.nl/?url=https://s3.duellinksmeta.com/mdm_img/content/guides/volcanics-jul24.webp&w=1400&output=webp&we&n=-1&maxage=7d" alt="card image" />
                <div className="p-2">
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                </div>

            </a>

        </div>
    );
}