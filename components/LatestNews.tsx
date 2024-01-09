import React from 'react';

interface LatestNewsItem {
    Title: string;
    Date: boolean;
    Url: string;
}

export type LatestNewsProps = {
    background: string;
    datasource: {
        ReadMoreUrl: string;
        News: LatestNewsItem[];
    };
};

const Date = ({ children }) => React.createElement('date', {}, children);

export function LatestNews({ background = '', datasource }: LatestNewsProps) {
    if (!datasource) {
        return null;
    }

    return (
        <div className={`well ${background}`}>
            <h5 className="text-uppercase">News</h5>
            <ul className="media-list">
                {datasource.News.map((item, index) => (
                    <li key={index} className="media">
                        <div className="media-body">
                            <Date>{item.Date}</Date>
                            <h4 className="media-heading">
                                <a href={item.Url}>{item.Title}</a>
                            </h4>
                        </div>
                    </li>
                ))}
            </ul>
            <a href={datasource.ReadMoreUrl} className="btn btn-default">
                Read more
            </a>
        </div>
    );
}
