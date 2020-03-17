export interface Comment {
    comment: string;
    commentOwner: string;
    commentOwnerId: number;
    likes?: number;
    likedByYou?: boolean;
}