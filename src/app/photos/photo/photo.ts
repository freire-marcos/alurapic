
export interface Photo {

    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: string;
    likes: number;
    comments: number;
    userId: number;
}