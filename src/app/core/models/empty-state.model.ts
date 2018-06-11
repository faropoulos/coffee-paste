export class EmptyState {
    icon: string;
    title: string;
    subtitle: string;
    constructor(options) {
        this.icon = options.icon;
        this.title = options.title;
        this.subtitle = options.subtitle || null;
    }
}