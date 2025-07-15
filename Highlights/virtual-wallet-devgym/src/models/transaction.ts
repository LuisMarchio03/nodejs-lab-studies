export interface Transaction {
    amount: number;
    senderId: string;
    receiverId: string; 
    createdAt: Date;
    updatedAt: Date;
}