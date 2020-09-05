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
