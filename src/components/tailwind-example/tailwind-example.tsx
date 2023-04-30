import { Component, h } from '@stencil/core';

@Component({
  tag: 'tailwind-example-component',
  styleUrl: 'tailwind-example.scss',
  shadow: true,
})
export class TailwindExampleComponent {
  render() {
    return (
      <div class="bg-indigo-500 p-6 rounded-md flex justify-center text-bold-teste">
        <h1 class="text-white font-sans">This is a Stencil component using Tailwind</h1>
      </div>
    );
  }
}
