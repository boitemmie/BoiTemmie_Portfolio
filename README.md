# Milestone Project 2: The Semantic Portfolio
Build a personal portfolio website to showcase your skills. This site will serve as your digital resume and as you improve youur skills you'll keep adding features and updates, this is also going to teach you new technologies like bootstrap and animate.css



## Project Overview
**Code Name:** *Camaleo Codificatur* from the Scheme

Congratulations on mastering HTML, Advanced CSS, and the basics of Git! You have been commissioned to build a personal portfolio website. This site will serve two purposes:
1.  **Your Digital Identity:** A live website to show future employers.
2.  **Proof of Skill:** A demonstration of your ability to use libraries, frameworks, and version control.

## Learning Objectives
By completing this project, you will demonstrate mastery of:
* **Semantic HTML5** structure.
* **Responsive Design** using a CSS Framework (**Bootstrap 5**).
* **Third-Party Libraries** for interaction (**Animate.css**).
* **Frontend DevOps:** Managing workflow via Forks, Branches, and Pull Requests.

---

## Tech Stack & Constraints

### The "Must-Haves"
* **Framework:** [Bootstrap 5](https://getbootstrap.com/docs/5.3/getting-started/introduction/) (via CDN).
* **Animations:** [Animate.css](https://animate.style/) (via CDN).
* **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/) or [FontAwesome](https://fontawesome.com/).
* **Fonts:** Google Fonts.

### The "Forbidden" List
* **NO Custom JavaScript:** You are not allowed to write your own `.js` files or `<script>` logic yet. You must rely on Bootstrap's pre-built components and CSS for all interactivity.
* **NO Inline Styles:** Do not use `style="..."` in your HTML tags. Use Bootstrap utility classes (e.g., `text-center`, `p-5`) or your own `style.css` file.

---

## 💻 The Workflow (DevOps Protocol)

**IMPORTANT:** Do not work directly on the master branch. You will be graded on your ability to use Git correctly.

1.  **Fork** this repository to your own GitHub account.
2.  **Clone** your fork to your local machine.
3.  **Create a Branch** for each section you build.
    * *Example:* `git checkout -b section/hero-section`
4.  **Commit** your work with meaningful messages.
    * *Good:* `feat: added hero section with animate.css entrance`
    * *Bad:* `updates`
5.  **Push** to your fork.
6.  **Open a Pull Request (PR)** to the original repository for code review.
7.  **Wait for Approval** from [Code Warlock](https://github.com/Code-Warlock) before merging and moving to the next section.

---

## 📄 Page Architecture

The portfolio must be a **Single Page Application** (one long scrollable page) containing the following sections:

### 1. Navigation Bar (Sticky)
* Must stay at the top of the screen while scrolling.
* Links must scroll smoothly to the corresponding section ID (e.g., clicking "About" scrolls to `#about`).
* **Requirement:** Use the Bootstrap Navbar component.

### 2. Hero Section (Header)
* A full-width introduction.
* A professional greeting (e.g., "Hello, I'm BoiTemmie or bla bla bla ship").
* A brief tagline (e.g., "Frontend Developer & UI Designer").
* **Animation:** The text must fade in or slide up using `Animate.css`.
* **CTA Button:** A "View My Work" button that links to the Projects section.

### 3. About Me
* **Layout:** Two-column grid (use Bootstrap Grid `col-md-6`).
* **Content:**
    * Left side: A professional photo of you (or a placeholder avatar).
    * Right side: A brief biography.

### 4. Skills & Tools
* Display the technologies you know (HTML5, CSS3, Git, VS Code, Bootstrap etc.).
* **Visuals:** Use icons for each skill.
* **Layout:** Use Bootstrap Cards or Progress Bars to display proficiency.

### 5. Projects Showcase
* Display your previous work (e.g., *Maledictio Tabularum, the tables website, your frontend mentor projects*).
* **Component:** Use Bootstrap **Cards**.
    * Card Image: Screenshot of the project.
    * Card Title: Project Name.
    * Card Text: Brief description.
    * Card Footer: Two buttons — "View Code" (GitHub Link) and "Live Demo".

### 6. Contact Section
* A visually styled form (Note: It won't actually send emails yet, just make it look good).
* Fields: Name, Email, Subject, Message.
* Submit button.
* Let your socials button (Connect BoiTemmie) be linked to the socials linkTree you created a while back
* **Footer:** Copyright text and social media links (GitHub, LinkedIn, Twitter).

---

## Resources & Documentation
* [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) - Read this for grid and components.
* [Animate.css Documentation](https://animate.style/) - Read this for class names.
* [GitHub Flow Guide](https://docs.github.com/en/get-started/quickstart/github-flow) - Refresher on branching.

* I recommend making researches on other libraries that can help you(AOS, PattensCSS)
* Host this on vercel this time, I'll make SEO changes later on for you as a class

## Submission
Once all sections are complete and merged:
1.  Ensure your code is formatted (indentation is correct).
2.  Check for broken links or missing images.
3.  Submit your final Pull Request with the title: **"Final Submission: Portfolio Project"**.

**Good Luck, BoiTemmie.**
*I am rooting for you, this is our first step into greatness*
