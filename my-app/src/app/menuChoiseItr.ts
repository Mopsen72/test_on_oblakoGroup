export interface MenuChoiser {
    placeholder: string;
    menuPoint: {
        title: string;
        isActive: boolean;
        id: string;
    }[];
    classList: string;
    classListbody: string;
}


