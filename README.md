# `⏳ Time Swap`

A sleek, simple, web app that allows users to effortlessly convert between date/time and Unix timestamp.

[![GitHub last commit][last-commit-shield]][last-commit-url]
[![CI Status][ci-status-shield]][ci-status-url]
[![Maintainability][maintainability-shield]][maintainability-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

## Features
- Automatically convert date/time to Unix timestamp and vice-versa
- Support for various time zones
- Clean, user-friendly interface
- Automatically detects and sets the local time zone
- Option to quickly select GMT timezone
- Dark/Light mode switcher

## Technologies Used
- HTML5
- CSS3
- JavaScript

## Getting Started

### Prerequisites
To run this project, you'll need:
- A modern web browser

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/jobearrr/time-swap.git
    ```
2. Navigate to the project directory:
    ```bash
    cd time-swap
    ```

### Usage
1. Open `index.html` in your web browser.

2. Use the input fields to:
    - Select or enter a date and time.
    - Choose a time zone from the dropdown list or select the GMT checkbox to use GMT.

3. Click "Convert to Unix Timestamp" to get the Unix timestamp for the provided date/time and timezone.

4. Enter a Unix timestamp and click "Convert to Date/Time" to see the equivalent date/time in the selected timezone.

## Project Structure
``` bash
time-swap/
├── index.html   # Contains the HTML structure for the web application.
├── styles.css   # Contains the CSS styles to make it look clean and modern.
├── script.js    # Contains the JavaScript code to handle the conversion logic.
└── README.md
```

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch:
    ```bash
    git checkout -b feature/my-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m '✨ Add my feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/my-feature
    ```
5. Open a pull request.

## License
This project is licensed under the MIT License.

<!-- Markdown references https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[last-commit-shield]: https://img.shields.io/github/last-commit/jobearrr/time-swap?style=flat
[last-commit-url]: https://github.com/jobearrr/time-swap/commits/master
[ci-status-shield]: https://github.com/jobearrr/time-swap/actions/workflows/static.yml/badge.svg
[ci-status-url]: https://github.com/jobearrr/time-swap/actions/workflows/static.yml

[maintainability-shield]: https://api.codeclimate.com/v1/badges/e5086485a346d3c0cb65/maintainability
[maintainability-url]: https://codeclimate.com/github/jobearrr/time-swap/maintainability

[license-shield]: https://img.shields.io/github/license/jobearrr/time-swap.svg
[license-url]: https://github.com/jobearrr/time-swap?tab=MIT-1-ov-file#readme
[linkedin-shield]: https://img.shields.io/badge/-jobertsa-0072b1?style=flat&logo=Linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/jobertsa
