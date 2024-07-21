
# WhatsApp Web Loader and Content Switch

This project demonstrates a web page with a loading screen that transitions smoothly to the main content page after 3 seconds. The loading screen features a slider animation.

## Table of Contents
- [Demo](#demo)
- [Live Link](#live-link)
- [Setup](#setup)
- [File Structure](#file-structure)
- [How It Works](#how-it-works)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

Below is a demonstration of the switching between the loader page and the main content page:

![Demo](./images/demo.gif)

## Live Link

You can view the live demo of this project [here](#).

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/anas-aqeel/Frontend-Projects.git
   cd HTML-CSS
   ```
2. Navigate to the project directory:
   ```bash
   cd Whatsapp
   ```
3. Open `index.html` in your web browser.

## File Structure

```
/whatsapp
  /images
    - logo.svg
    - demo.gif
  /pages
    - content.html
    - content.css
    - loader.html
    - loader.css
    - loader.js
  - index.html
```

- **images/**: Contains the logo and demo GIF.
- **pages/**: Contains the loader and content HTML, CSS, and JavaScript files.
- **index.html**: The main entry point of the project that handles the page transitions.

## How It Works

- **index.html**: This file initializes the loading screen by dynamically loading `loader.html`. After 3 seconds, it transitions to `content.html`.
- **loader.html**: Displays the WhatsApp logo and a slider animation. The animation is controlled by `loader.js`.
- **content.html**: Contains the main content of the page.
- **loader.js**: Handles the slider animation on the loader page.
- **loader.css**: Styles for the loader page.
- **content.css**: Styles for the content page.

### Page Transition Logic

- **Fade In/Out**: The transition between pages is handled using CSS classes `.fade` and `.fade-out`, which control the opacity of the elements.

## Technologies Used

- HTML
- CSS
- JavaScript

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
