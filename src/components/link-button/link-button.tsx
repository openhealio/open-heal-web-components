import { Component, Host, Prop, Watch, h } from '@stencil/core';

export type LinkButtonType = 'primary' | 'secondary';

@Component({
  tag: 'link-button',
  styleUrl: 'link-button.scss',
  shadow: true,
})
export class LinkButton {
  @Prop() color: LinkButtonType;

  @Watch('color')
  validateColor(newColor: string) {
    if (!['primary', 'secondary'].includes(newColor)) {
      this.color = 'primary';
    }
  }
  componentWillLoad() {
    this.validateColor(this.color);
  }

  render() {
    return (
      <Host>
        <span class={`${this.color}-color`}>
          <slot></slot>
        </span>
      </Host>
    );
  }
}
