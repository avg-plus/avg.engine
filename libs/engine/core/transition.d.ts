export interface Transition {
    init(element: any): any;
    fadeEnter(color: number): any;
    fadeLeave(color: number): any;
}
