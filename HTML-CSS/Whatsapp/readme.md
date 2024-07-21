
# WhatsApp Web 

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

![Demo](./images/demo.png)

## Live Link

You can view the live demo of this project [here](https://whatsapp-omega-seven.vercel.app/).

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/anas-aqeel/Frontend-Projects.git
   ```
2. Navigate to the project directory:
   ```bash
   cd HTML-CSS
   cd Whatsapp
   ```
3. Open `index.html` in your web browser.

## File Structure

```
/whatsapp
  /images
    - logo.svg
    - demo.png
  /pages
    - content.css
    - loader.css
    - loader.js
  - .gitignore
  - index.html
  - index.js
  - readme.md
```

- **images/**: Contains the logo and demo image.
- **pages/**: Contains the CSS and JavaScript files for the loader and content.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **index.html**: The main entry point of the project that includes both the loader and content.
- **index.js**: JavaScript file that controls the visibility of the loader and content sections.
- **readme.md**: Documentation for the project.

## How It Works

- **index.html**: This file contains both the loader and the content sections. It links to both the `loader.css` and `content.css` stylesheets.
- **index.js**: Handles the logic for showing the loader, hiding the content initially, and then switching to the content after 3 seconds.
- **loader.js**: Manages the slider animation on the loader page.
- **loader.css**: Styles for the loader page.
- **content.css**: Styles for the content page.

### Page Transition Logic

- **Initial State**: The loader is displayed and the content is hidden using the `.hidden` class.
- **After 3 Seconds**: The loader is hidden and the content is displayed. The loader CSS is removed to prevent conflicts, and the content CSS is applied.

## Technologies Used

- HTML
- CSS
- JavaScript

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
