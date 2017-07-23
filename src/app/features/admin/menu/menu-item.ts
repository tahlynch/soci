export class MenuItem {
  constructor(link: string, label: string, icon: string) {
    this.link = link;
    this.label = label;
    this.icon = icon;
  }

  link: string;
  label: string;
  icon: string;
}
