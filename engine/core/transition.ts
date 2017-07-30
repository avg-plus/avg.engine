export interface Transition {
    init(element: any);
    fadeEnter(color: string);
    fadeLeave(color: string);
}