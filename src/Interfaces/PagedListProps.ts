/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PagedListProps {
    items: any[];
    pageSize: number;
    renderItem: (item: any) => JSX.Element;
}