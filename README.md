# Simple Project with Tailwind CSS

This is a simple project that utilizes Tailwind CSS to quickly and efficiently create styles.
[Original Layout](https://www.figma.com/community/file/992410574427069906)

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js: [Download](https://nodejs.org/)
- npm (Node.js package manager): Usually comes pre-installed with Node.js.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto-tailwind.git
2. Navigate to the project directory:
   ```bash
   cd responsive-website
3. Install project dependencies
   ```bash
   npm install
## Usage

After installing the dependencies, you can run the project locally. Tailwind CSS is already configured and ready to use.

1. Start the Tailwind CSS build process:
   ```bash
   npx tailwindcss -i ./src/style.css -o ./dist/style.css --watch
2. Begin editing files in the src/ directory to customize the project according to your needs.

## Tailwind CSS + Browsersync:
If you want to add automatic browser refresh with Tailwind CSS and Browsersync

1. Install Browsersync globally if it's not already installed:
    ```bash
    npm install -g browser-sync
2. Start the Browsersync server:
    ```bash
   browser-sync start --server --files "**/*.html, **/*.css"
3. When you save an HTML or CSS file, Browsersync will detect the changes and automatically refresh the browser to reflect the changes.

## Customization

You can customize Tailwind CSS styles by editing the tailwind.config.js file. Refer to the official Tailwind CSS documentation for more information on customizing styles: [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation).

## Contribution

Feel free to contribute to this project. Simply fork the repository, make the desired changes, and submit a pull request.