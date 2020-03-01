export interface TodoItem {
    id: string;
    name: string | null;
    completed: boolean;
    required: boolean;
    description: string | null;
}
