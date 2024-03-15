export interface Character {
    id: string;
    name: string;
    image: string;
    house: string;
    patronus?: string;
    alive?: boolean;
}

export interface Image {
    id: string;
    imageName: string;
    imageUrl: string;
}

export interface Spell {
    id: string;
    name: string;
    type: string;
    effect: string;
}

export interface Question {
    id: number;
    question: string;
    options: Option[];
}

export interface Option {
    answer: string;
    house: string;
}

export interface ButtonProps {
    name: string;
    onClick: () => void;
}

export interface NavigationCardProps {
    img: string,
    imgName: string,
    text: string,
    onClick: () => void,
}

export interface PaginationProps {
    charactersPerPage: number;
    totalCharacters: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

export interface PhotoProps {
    name: string;
    url: string;
}
