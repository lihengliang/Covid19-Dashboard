export interface Summary {
    cases?: number;
    recovered?: number;
    deaths?: number;
    todayCases?: number;
    todayDeaths?: number;
    todayRecovered?: number;
    active?: number;
    critical?: number;
    tests?: number;
}

export interface Historical {
    country?: string;
    province?: string[];
    timeline?: Timeline;
}

export interface Timeline {
    cases?: any[];
    deaths?: any[];
    recovered?: any[];
}

export interface StateSummary {
    cases?: number;
    recovered?: number;
    deaths?: number;
    active?: number;
    state?: string;
}

export interface NewsSummary {
    status?: string;
    totalResults?: number;
    articles?: Article;
}

export interface Article {
    source?: NewsSource;
    author?: string;
    title?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
}

export interface NewsSource {
    id?: string;
    name?: string;
}
