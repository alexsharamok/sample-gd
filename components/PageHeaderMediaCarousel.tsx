interface PageHeaderMediaCarouselItem {
    Active: string;
    Title: string;
    Description: string;
    BackgroundImageUrl: string;
}

export type PageHeaderMediaCarouselProps = {
    datasource: {
        CarouselId: string;
        Items: PageHeaderMediaCarouselItem[];
    };
};

export function PageHeaderMediaCarousel({ datasource }: PageHeaderMediaCarouselProps) {
    if (!datasource) {
        return null;
    }

    const carouselTargetId = `#${datasource.CarouselId}`;

    return (
        <div id={datasource.CarouselId} className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {datasource.Items.map((item, index) => (
                    <li
                        key={index}
                        data-target={carouselTargetId}
                        data-slide-to={index}
                        className={item.Active}
                    ></li>
                ))}
            </ol>

            <div className="carousel-inner" role="listbox">
                {datasource.Items.map((item, index) => RenderItem(item, index))}
            </div>

            <a className="left carousel-control" href={carouselTargetId} role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href={carouselTargetId} role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

function RenderItem(item: PageHeaderMediaCarouselItem, index: number) {
    const bgImage = item.BackgroundImageUrl ? `url('${item.BackgroundImageUrl}')` : null;
    const style = bgImage ? { backgroundImage: bgImage } : null;

    return (
        <div key={index} className={`item ${item.Active}`}>
            <div className="jumbotron jumbotron-xl bg-media" style={style}>
                {/* <video autoPlay loop muted className="video-bg">
                    <source src={item.VideoUrl} type="video/mp4">
                </video> */}

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>{item.Title}</h1>
                            <p className="lead" dangerouslySetInnerHTML={{ __html: item.Description }}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
