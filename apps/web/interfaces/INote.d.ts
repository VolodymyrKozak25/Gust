export default interface INote {
    createdAt: string;
    isPermanent: boolean;
    time: string;
    title?: string;
    text: string;
}