const videos = {

    1: {
        title: "HTML Tutorial - History of HTML - HTML Evolution",
        notes: `html is created by tim Berners-Lee in 1991. history of HTML like Html 1.0,html 2.0, html 3.2 .
                It started at 1989. the first html 1.2 was the first publicly version 
                we need DNS(domain name system), networking ,browser 

                there is a organization called as IETF.
                only making html code doesn't make a site.
                we need to see a lot of think like how to access that site ,who can access ,who can change it and many things . There are some elements which are created by IETF.

                In version HTML 3.2 we got different options like table ,scripting and many other things and in html 4.01 we got a different page for CSS.

                in 2014 we got the latest version where a lot of additional elements in HTML5. Some example are <header>,<footer>,<video>, etc. 

                they added more elements to make the SEO easier.
                `,
        code: "no code for this video",
        image:""
    },

    2: {
        title: "For CS students: What is WWW, DNS, IP, and W3C? Explained Like a Story",
        notes: `WWW(World Wide Web) is a web of hyperlinks which can be used to access any hyperlink through out the internet.
                we can link image, video ,audio and even other links too ,this things are also called as resources.

                Berner developed the first web browser named as worldwideweb later name as Nexus
                W3C was founded byv tim Berners-Lee to guide the development of web standards.
                w3.org manage the site.

                there are certain rules to name and make a website.
                Every server have a IP address.
                ICANN id a organization which tell if that specific name is already taken or not.Basically it manages DNS and IP address.

                we also need to follow TCP/IP rules too.
                `,
        code: "no code for this video",
        image:""
    },

    3: {
        title: "HTML Tutorial - What is HTML - Introduction of HTML",
        notes: `HTML(hyper text markup language) are use to created special documents which can be open by using browsers.
                we using different elements like links, head, bottom, image , etc which are used them through tags.

                extension of html is .html or .htm.
                we use CSS and can link it with html page to add styling in a html page.
                `,
        code: "no code for this video",
        image:""
    },

    4: {
        title: "Complete HTML Tutorial - Relation between HTML, CSS and Javascript",
        notes: `To make working and good website we have to use 3 things, 
                > HTML -it use to make the structure of the site
                > CSS- it use to add styling in a html page.
                > JS - it make a html page interactive.
                `,
        code: "no code for this video",
        image:""
    },

    5: {
        title: "Complete HTML Tutorial - Importance of HTML - Why do we need it?",
        notes: `html is a platform independent and it used to make the structure of a web page.
                it is easy to learn and understand means user friendly
                it works along with CSS and JS to make a web page more stylish and interactive.
                `,
        code: "no code for this video",
        image:""
    },

    6: {
        title: "Complete HTML Tutorial - Understand Basic HTML Page Strcuture and create your first web page",
        notes: `In html which is document it don't have a tool box instead it have tags in which we write elements.

                some basic structure and tags 
                * <html> - define the root of an html document
                * <head> - contains metadata(.title, CSS, Scripts)
                * <title> - sets webpage title
                * <body> - defines the visible content of the page.
                * <h1>,<h2>....<h6> -heading lines.

                most tags have a opening and closing tag like <html>(opening tag) and </html> (closing tag).
                `,        
        code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Welcome to ChiPi Technologies</title>
                </head>
                <body>

                    <h1>ChiPi Technologies Private Limited</h1>

                    <p>ChiPi Technologies is a fast-growing IT training and development company based in India.</p>

                    <h2>Our Services</h2>

                    <h2>Why Choose ChiPi?</h2>

                    <p>We have experienced professionals with over 20 years of industry exposure. Our goal is to make learning easy and effective.</p>

                </body>
                </html> `,
        image: "../img/html 6.3.png"  
    },

    7: {
        title: "HTML Tutorial - How to develop and deploy your website on Github - Step by step - Start to End",
        notes: `To deploy a website on github we need to follow some steps:
                1. Create a repository on github with the name username.github.io
                2. Clone the repository to your local machine using git clone command.
                3. Create an index.html file in the cloned repository and add your website code to it.
                4. Add, commit and push the changes to the remote repository using git commands.
                5. Your website will be live at https://username.github.io after a few minutes.`,
        code: "no code for this video",
        image:""
    },

    8: {
        title: "Complete HTML Tutorial - Header, Paragraph, Bold, Strong, Italic, Emphsize, Underline Tags",
        notes: `types of html tags

                <h1> to <h6> -heading , h1 is the largest and h6 the smallest
                <p> paragraph
                <b> bold text
                <i> italic text
                <u> underline text
                <strong> important(bold) text
                <em> Emphasiaed (italic) text
                <hr> horizantal line
                <code> desplay text as a code
                `,

        code:  `
                <h1>ChiPi Technologies Private Limited</h1>
                <h2>Empowering Future Engineers</h2>
                <h3>Online Training and Real-time Projects</h3>
                <h4>Courses: Web Development, Java, Python</h4>
                <h5>Trusted by Students Across India</h5>
                <h6>Contact: support@chipitechnologies.com</h6>

                <hr>

                <p>
                    ChiPi Technologies offers
                    <b>industry-focused training</b>
                    designed for engineering students who want to build a strong foundation in software development.
                </p>

                <p>
                    Our training sessions are conducted by
                    <i>IT professionals with over 20 years of experience</i>,
                    ensuring that students get real-world exposure.
                </p>

                <p>
                    We help students by providing
                    <u>hands-on coding practice</u>
                    and dedicated sessions for doubt clearance.
                </p>

                <p>
                    <strong>Key Highlights:</strong>
                    Live sessions, project-based learning, placement support, and flexible timing.
                </p>

                <p>
                    <em>
                        Join ChiPi Technologies today and get job-ready before you graduate!
                    </em>
                </p>`,
        image: "../img/html 8.3.png"
    },

    9: {
        title: "HTML Complete Tutorial - Ordered and unorderdered list - OL, UL , and LI tags",
        notes: `More tags which use for list

                <ul> unordered list (bullets)
                <ol> ordered list (numbers)
                <li> list items

                when we want to display a html tag as text instead of making the brower use it then we write it inside <code> tag in special language like: 
                                <code>&lt;ul&gt;</code> 

                it will display <ul> ,which we can't display normally if we write <ul> directly as the vs code will start using it and not display it as a text .
                `,

        code: `
                <p>
                    In HTML, both <code>&lt;ul&gt;</code> (unordered list) and
                    <code>&lt;ol&gt;</code> (ordered list) are used to display lists.
                    The main difference is that:
                </p>

                <ul>
                    <li><code>&lt;ul&gt;</code> shows items with bullets (●, ○, etc.)</li>
                    <li><code>&lt;ol&gt;</code> shows items with numbers or letters (1, 2, 3... or A, B, C...)</li>
                </ul>

                <h3>Unordered List Example - Features of ChiPi Technologies</h3>

                <ul>
                    <li>Weekend Live Online Classes</li>
                    <li>Hands-on Coding Practice</li>
                    <li>Industry-Level Project Guidance</li>
                    <li>Job-Oriented Course Design</li>
                </ul>

                <h3>Ordered List Example - Steps to Enroll at ChiPi</h3>

                <ol>
                    <li>Visit our official website</li>
                    <li>Choose your course (e.g., Java, Python, Web Development)</li>
                    <li>Fill the registration form</li>
                    <li>Attend the orientation session</li>
                    <li>Start learning with live classes</li>
                </ol>

                <hr>

                <h2>Summary</h2>

                <ul>
                    <li><code>&lt;ul&gt;</code> = unordered list (bullets)</li>
                    <li><code>&lt;ol&gt;</code> = ordered list (numbers or letters)</li>
                    <li><code>&lt;li&gt;</code> = defines each item in both types of lists</li>
                </ul>
                `,
        image:"../img/html 9.3.png"
    },

    10: {
        title: "Complete HTML Tutorial - Code Tag and Escape Character",
        notes: `The basic structure of an HTML document is built using the <html>, <head>, <title>, and <body> tags.
                The <html> tag contains the entire webpage code, while <head> stores metadata.
                The <title> tag sets the name displayed on the browser tab.
                The <body> tag contains all the visible content shown to users on the webpage.

                some escape sequence charactor

                < = &lt;
                > = &gt;
                & = &emp;

                there are a lot of them.
                `,

        code:  `
                <h3>&lt;html&gt; Tag</h3>
                <p>
                    The <code>&lt;html&gt;</code> tag is the root of an HTML document.
                    It wraps the entire web page code.
                </p>

                <h3>&lt;head&gt; Tag</h3>
                <p>
                    The <code>&lt;head&gt;</code> tag contains meta-information about
                    the document, such as the title, character set, links to stylesheets, etc.
                </p>

                <h3>&lt;title&gt; Tag</h3>
                <p>
                    The <code>&lt;title&gt;</code> tag defines the title of the page.
                    You can see it in the browser tab. For this page, it is set as:
                    <strong>HTML Tags Demo - ChiPi Technologies.</strong>
                </p>

                <h3>&lt;body&gt; Tag</h3>
                <p>
                    The <code>&lt;body&gt;</code> tag contains all the visible content
                    of the web page like headings, text, images, links, lists, etc.
                    Everything you see here is inside the <code>&lt;body&gt;</code> tag.`,
        
        image:"../img/html 10.3.png"
    },

    11: {
        title: "HTML Complete Tutorial - How to change the numbering format of list and details of Div tag - Div Tag",
        notes: `there are types of ordered list <ol> which are written as type ="1"

                there are 5 of them 
                * "1" - default one
                * "A" - UPPERCASE letter
                * "a" - lowercase letter
                * "I" - UPPERCASE roman
                * "i" - lowercase roman
                `,

        code:  `
                <h2>Ordered List Styles</h2>

                <h3>type="1" (Default - Numbers)</h3>
                <ol type="1">
                    <li>Register on Website</li>
                    <li>Select a Course</li>
                    <li>Start Learning</li>
                </ol>

                <ol type="1">
                    <li>10</li>
                    <li>5</li>
                    <li>1</li>
                </ol>

                <h3>type="A" (Uppercase Letters)</h3>
                <ol type="A">
                    <li>Web Development</li>
                    <li>Java</li>
                    <li>Python</li>
                </ol>

                <h3>type="a" (Lowercase Letters)</h3>
                <ol type="a">
                    <li>Join Orientation</li>
                    <li>Practice Daily</li>
                    <li>Submit Projects</li>
                </ol>

                <h3>type="I" (Uppercase Roman)</h3>
                <ol type="I">
                    <li>Level 1 - HTML</li>
                    <li>Level 2 - CSS</li>
                    <li>Level 3 - JavaScript</li>
                </ol>

                <h3>type="i" (Lowercase Roman)</h3>
                <ol type="i">
                    <li>Introduction</li>
                    <li>Core Concepts</li>
                    <li>Project Demo</li>
                </ol>
        `,

        image:"../img/html 11.3.png"
    },

    12: {
        title: "Complete HTML tutorial - Mastering the Anchor Tag in HTML | Complete Guide with Examples",
        notes: `The <a> tag is used to create hyperlinks in HTML.
                It can link to web pages, email addresses, phone numbers, file downloads, and sections within the same page.
                The href attribute specifies the destination of the link.
                Anchor tags make website navigation easy and interactive.

                example <a href="http://chipitechnologies.com">
                    Visit ChiPi Technologies
                </a>

                in href we can write like href=#aboutus , by this it will go to the aboutus section on that site. to make it work we need to assign a id name as aboutus to where we want to go so when someone click on that #link it will direct them to that part on the link.

                <href =mailto:abs@gmail.com> here mailto is a special word which help to open the mail and send.

                <herf = tel:...> tel help to direct call when we click on it by a phone.

                <herf> tag is also use to put a file on the site and when we click on that link the system will download that file.

                there is a another property of <a> tag which is <target> which help where the link will be open 
                    like if we write <target = _blank> the link will open in a new tab.

                another tag is <rel> which is related to security.
                `,

        code: `
                <p>
                    <a href="http://chipitechnologies.com/">
                        ChiPi Technologies Private Limited
                    </a>
                </p>

                <p>
                    <a href="#aboutus">About Us</a>
                </p>

                <p>
                    noopener - Prevents the new page from accessing your page's window.opener
                </p>

                <p>
                    noreferrer - Prevents sending the referrer URL (your page URL)
                    to the new page
                </p>

                <a href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer">
                Google
                </a>

                <br><br><br>

                <p>
                    <a href="https://www.google.com">Search</a>
                    <a href="https://www.google.com" target="_blank">Google</a>
                </p>

                <p>You can reach us at:</p>

                <ul>
                    <li><a href="https://chipitechnologies.com">Website</a></li>
                    <li><a href="mailto:support@chipitechnologies.com">Email</a></li>
                    <li><a href="tel:+911234567890">Phone</a></li>
                </ul>

                <p>
                    <a href="ComputerFundamentals.pptx">
                        Computer Fundamentals (PowerPoint)
                    </a>
                </p>

                <h1 id="aboutus">About us</h1>

                <p>
                    We are here to spread High-Quality IT Education at a very low fee
                    to ensure that it can reach everyone. To help the students of BCA,
                    BSc CS/IT, MBA IT, Diploma, BE, B Tech, MCA, MSc, we have a
                    "Comprehensive - Full Stack Development program" which will make
                    sure that you get the job right after you complete the degree.
                </p>`,

        image:"../img/html 12.4.png"
    },

    13: {
        title: "Complete HTML tutorial - How to link multiple web pages in your website",
        notes: "no notes for this video",
        code: "",
        image:"../img/html 13.1.png"
    },

    14: {
        title: "Complete HTML5 Tutorial for Beginners | Semantic Elements: Header, Footer, Article, Aside & Address",
        notes: `HTML5 Semantic Tags - Short Notes
                <address> – Contains contact information for a person, author, or organization.
                <article> – Represents independent content such as a blog post, news article, or forum post.
                <aside> – Contains related information that is separate from the main content, often shown as a sidebar.
                <footer> – Defines the footer section of a webpage or content area, usually containing copyright or contact details.
                <header> – Defines the introductory section of a page, often containing a logo, heading, or navigation menu.
                <section> – Represents a thematic section of content, usually with its own heading.
                `,

        code: `
                <header>
                    <h1>ChiPi Technologies Private Limited</h1>

                    <p>
                        Your First Step Toward Becoming a Front-End Developer
                    </p>
                </header>

                <p>
                    Welcome to the world of web development! ChiPi Technologies
                    offers industry-focused training for beginners in HTML, CSS,
                    and JavaScript.
                </p>

                <footer>
                    <p>&copy; 2025 ChiPi Technologies. All rights reserved.</p>
                </footer>`,
        image:"../img/html 14.2.png"
    },

    15: {
        title: "Complete HTML tutorial - Hgroup, Main and Nav element",
        notes: `nav is the menu bar which goes to other related site connected with the main site

                HTML5 Semantic Tags - Short Notes
                <hgroup> – Groups a heading with related content such as a subtitle, tagline, or subheading.
                <main> – Defines the main content of a webpage. It contains the primary information related to the page.
                <nav> – Defines a navigation section that contains links to other pages or sections of the website.
                `,

        code: ` 
                <nav>
                    <p>
                        The <code>&lt;nav&gt;</code> tag is used to define a block of navigation links.
                    </p>

                    <ul>
                        <li><a href="#courses">Courses</a></li>
                        <li><a href="#success">Success Stories</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>

                <!-- Main Section -->
                <main>

                    <!-- hgroup Section -->
                    <hgroup>
                        <h2>Welcome to ChiPi Technologies</h2>
                        <p>
                            Learn HTML, CSS, JavaScript, and become a Front-End Developer
                        </p>
                    </hgroup>

                    <!-- Article Section -->
                    <article id="courses">
                        <h2>Why Learn HTML with ChiPi Technologies?</h2>

                        <p>
                            The <code>&lt;article&gt;</code> tag is used to mark
                            self-contained content. ChiPi Technologies uses it to present
                            tutorials, success stories, and training modules.
                        </p>
                    </article>

                    <!-- Aside Section -->
                    <aside>
                        <h3>ChiPi Tips</h3>

                        <p>
                            Start by learning basic tags like
                            <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>,
                            <code>&lt;ul&gt;</code>, and <code>&lt;a&gt;</code>.
                            Practice by building simple layouts before moving to CSS and JavaScript.
                        </p>
                    </aside>

                </main>`,
        image:"../img/html 15.1.png"
    },

    16: {
        title: "Complete HTML Tutorial - mark, q, small and sup elemnts",
        notes: `HTML Tags - Short Notes
                <a> – Creates hyperlinks to web pages, files, email addresses, or locations within the same page.
                <br> – Inserts a line break and moves content to the next line.
                <code> – Displays text in a code format using a monospace font.
                <mark> – Highlights or marks important text.
                <q> – Defines a short quotation and automatically adds quotation marks.
                <small> – Displays text in a smaller font size.
                <sup> – Displays text as superscript (raised text), such as exponents or footnotes.
                `,

        code:  `
                <h2>1. Anchor Tag (&lt;a&gt;)</h2>
                <p>
                    Visit
                    <a href="https://www.google.com" target="_blank">
                        Google
                    </a>
                </p>

                <h2>2. Line Break Tag (&lt;br&gt;)</h2>
                <p>
                    First Line<br>
                    Second Line<br>
                    Third Line
                </p>

                <h2>3. Code Tag (&lt;code&gt;)</h2>
                <p>
                    HTML list tag:
                    <code>&lt;ul&gt;</code>
                </p>

                <h2>4. Mark Tag (&lt;mark&gt;)</h2>
                <p>
                    HTML is a
                    <mark>very important</mark>
                    language for web development.
                </p>

                <h2>5. Quote Tag (&lt;q&gt;)</h2>
                <p>
                    Tim Berners-Lee said:
                    <q>The Web is for everyone.</q>
                </p>

                <h2>6. Small Tag (&lt;small&gt;)</h2>
                <p>
                    This is normal text.
                    <small>This is smaller text.</small>
                </p>

                <h2>7. Superscript Tag (&lt;sup&gt;)</h2>
                <p>
                    x<sup>2</sup> + y<sup>2</sup> = z<sup>2</sup>
                </p>`,

        image:"../img/html 16.3.png"
    },

    17: {
        title: "Complete HTML Tutorial - sub and time elements",
        notes: `Short Notes
                <sub> – Displays text as subscript (lowered text), commonly used in chemical formulas like H₂O.
                <time> – Represents a specific date or time in a machine-readable format and helps with SEO and accessibility.
                `,

        code: ` 
                <h2>Subscript Tag (&lt;sub&gt;)</h2>

                <p>
                    Water Formula: H<sub>2</sub>O
                </p>

                <p>
                    Carbon Dioxide: CO<sub>2</sub>
                </p>

                <h2>Time Tag (&lt;time&gt;)</h2>

                <p>
                    Exam Date:
                    <time datetime="2026-06-15">
                        June 15, 2026
                    </time>
                </p>

                <p>
                    Class Time:
                    <time datetime="10:00">
                        10:00 AM
                    </time>
                </p>`,

        image: "../img/html 17.2.png"
    },

    18: {
        title: "Complete HTML Tutorial - Detailed explanation of div tag",
        notes: `<div> tag is use to divide and make structure of the web page 
                it a one of the most used tag of html.
                id is an attribute used in div tag which is very imp for css.
                `,

        code: `
                <div>
                    <h1>Abbreviation Examples</h1>

                    <p>
                        <abbr title="HyperText Markup Language">HTML</abbr>
                        is used to create web pages.
                    </p>

                    <p>
                        <abbr title="Cascading Style Sheets">CSS</abbr>
                        is used for styling web pages.
                    </p>

                    <p>
                        <abbr title="JavaScript">JS</abbr>
                        is used to make web pages interactive.
                    </p>

                    <p>
                        <abbr title="Bachelor of Computer Applications">BCA</abbr>
                        is a popular computer science degree.
                    </p>
                </div>`,

        image: "../img/html 18.3.png"
    },

    19: {
        title: "HTML - Complete Tutorial - abbr tag - abbr element",
        notes: `<abbr> it provide the full meaning of a shorted term ,
                we use title in this to do it.
                `,

        code: ` 
                <p>
                    <abbr title="HyperText Markup Language">HTML</abbr>
                    is used to create web pages.
                </p>

                <p>
                    <abbr title="Cascading Style Sheets">CSS</abbr>
                    is used for styling web pages.
                </p>

                <p>
                    <abbr title="JavaScript">JS</abbr>
                    is used to make web pages interactive.
                </p>`,
        image: "../img/html 19.3.png"
    },

    20: {
        title: "HTML Complete Tutorial - Audio, Video and Image tags - Explained with sample code",
        notes: `<audio> – Used to embed and play audio files in a webpage.
                <img> – Used to display images on a webpage.
                <video> – Used to embed and play video files in a webpage.
                this tags got no closing tags.
                we can use an property name as alt in those tag in case if any img, video,or audio not loaded it will show to that alt text.
                `,

        code: `
                <div>
                    <h2>Image Tag (&lt;img&gt;)</h2>

                    <img src="nature.jpg"
                        alt="Nature Image"
                        width="300">
                </div>

                <hr>

                <div>
                    <h2>Audio Tag (&lt;audio&gt;)</h2>

                    <audio controls>
                        <source src="song.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>

                <hr>

                <div>
                    <h2>Video Tag (&lt;video&gt;)</h2>

                    <video width="400" controls>
                        <source src="video.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>`,

        image: "../img/html 20.2.png"
    },

    21: {
        title: "Complete HTML tutorial - What is table tag? Why, when and how to use Table tag.",
        notes: `<table> – Used to create a table in HTML. we use border property of table to add border in it
                <tr> – Defines a table row.
                <td> – Defines a table data cell.
                `,

        code: `
                <table border="1">
    
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Semester</th>
        
                    </tr>

                <tr>
                    <td>Anmol</td>
                    <td>BCA</td>
                    <td>2nd</td>
                </tr>

                <tr>
                    <td>Rahul</td>
                    <td>BCA</td>
                    <td>1st</td>
                </tr>

            </table>`,
        image: "../img/html 21.1.png"
    },

    22: {
        title: "Complete HTML Tutorial - TH tag, table header",
        notes: `<th> this tag means table header. it tell us the head of the table ,its a important tag of a table.
                `,
        code: `
                <table border="1">
    
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Semester</th>
        
                    </tr>

                <tr>
                    <td>Anmol</td>
                    <td>BCA</td>
                    <td>2nd</td>
                </tr>

                <tr>
                    <td>Rahul</td>
                    <td>BCA</td>
                    <td>1st</td>
                </tr>
        
            </table>`,
        image: "../img/html 22.3.png"
    },

    23: {
        title: "Complete HTML Tutorial- Thead, Tbody, Tfoot and Caption tags - With Sample Code- ChiPi Technologies",
        notes: `<thead> – Defines the header section of a table and usually contains column headings.
                <tbody> – Contains the main data rows of the table.
                <tfoot> – Defines the footer section of a table, often used for totals or summaries.
                <caption> – Provides a title or description for the table.

                we can use a property called as 
                <colspan> - to merge two column.
                <width> - to add width to the table like <table width="100%"> 
                <colgroup> - it make the columns in a group uses a property <col> to  use other property like span and style to add colors.
                `,

        code: `
                <table border="1" width="500" height="150">

                    <caption>Student Information</caption>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Marks</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Anmol</td>
                            <td>BCA</td>
                            <td>85</td>
                        </tr>

                        <tr>
                            <td>Rahul</td>
                            <td>BCA</td>
                            <td>90</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colspan="2">Average Marks</td>
                            <td>87.5</td>
                        </tr>
                    </tfoot>

                </table>`,

        image: "../img/html 23.1.png"
    },

    24: {
        title: "Complete HTML Tutorial - How to set the height and width of a table - ChiPi Technologies",
        notes: `width → Sets the width of an element.
                height → Sets the height of an element.
                Values are usually given in pixels (px) when using HTML attributes but it can also be given in % too.
                `,

        code: `
                <table border="1" width="500" height="150">

                    <caption>Student Information</caption>

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Marks</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Anmol</td>
                            <td>BCA</td>
                            <td>85</td>
                        </tr>

                        <tr>
                            <td>Rahul</td>
                            <td>BCA</td>
                            <td>90</td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colspan="2">Average Marks</td>
                            <td>87.5</td>
                        </tr>
                    </tfoot>

                </table>`,

        image: "../img/html 24.1.png"
    },

    25: {
        title: "Complete HTML Tutorial - Table Height and Width - Relative Adjustment - ChiPi Technologies",
        notes: `the width tag when put as % then it is considered as if it in body or div or any other tag.
                As if its in div then it will take 100% of div tag not body and same goes for other tags too
                `,
        code: "no code for this video",
    },

    26: {
        title: "Complete HTML Tutorial - Rowspan and colspan - Merge Rows and Columns - ChiPi Technologies",
        notes: `<rowspan> - use to merge row 
                <colspan> - use to merge column

                it a property of table tag like td.
                `,

        code: "no code for this video",
    },

    27: {
        title: "HTML Tutorial - Create a Real-life Web Page Layout 1 - Table - ChiPi Technologies",
        notes: `we can make html structure by using table tag. we can also make a table inside a table too.
                It make it well structured and organized.
                when u assign a height to a table and not declare it then html automatically fix the height ,normally giving it to the largest row.
                `,

        code: `
                <table border="1" width="100%" height="600">

                    <tr height="60">
                        <td colspan="2" align="center">
                            &lt;header&gt;
                        </td>
                    </tr>

                    <tr height="60">
                        <td colspan="2" align="center">
                            &lt;nav&gt;
                        </td>
                    </tr>

                    <tr height="300">

                        <td width="75%" valign="top">

                            <table border="1" width="100%">
                                <tr>
                                    <td align="center">
                                        &lt;section&gt;
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center">
                                        Heading
                                    </td>
                                </tr>

                                <tr>
                                    <td align="center">
                                        &lt;article&gt;
                                    </td>
                                </tr>
                            </table>

                        </td>

                        <td width="25%" align="center" valign="top">
                            &lt;aside&gt;
                        </td>

                    </tr>

                    <tr height="120">
                        <td colspan="2" align="center">
                            &lt;footer&gt;
                        </td>
                    </tr>

                </table>`,

        image: "../img/html 27.3.png"
    },

    28: {
        title: "HTML Tutorial - Create a Real-life Web Page Layout 2 - Table - ChiPi Technologies",
        notes: "no notes for this video",
        code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Semantic Layout</title>
                </head>
                <body bgcolor="#2b6b73">

                    <table border="3" width="90%" height="600" align="center" bgcolor="#f5f5f5" cellspacing="5">

                        <!-- Header -->
                        <tr height="80">
                            <td colspan="2" align="center" bgcolor="#ffd6d6">
                                <h2>&lt;header&gt;</h2>
                            </td>
                        </tr>

                        <!-- Navigation -->
                        <tr height="70">
                            <td colspan="2" align="center" bgcolor="#d8f1ff">
                                <h2>&lt;nav&gt;</h2>
                            </td>
                        </tr>

                        <!-- Main Content -->
                        <tr height="320">

                            <!-- Section + Article -->
                            <td width="65%" bgcolor="#f7fbe9">

                                <table border="2" width="100%" height="100%" cellspacing="5">

                                    <tr height="40">
                                        <td align="center">
                                            <b>&lt;section&gt;</b>
                                        </td>
                                    </tr>

                                    <tr height="40">
                                        <td align="center" bgcolor="#ffd6d6">
                                            <b>Heading</b>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="center" bgcolor="#e7dcff">
                                            <h2>&lt;article&gt;</h2>
                                        </td>
                                    </tr>

                                </table>

                            </td>

                            <!-- Aside -->
                            <td width="35%" align="center" bgcolor="#f5f5f5">
                                <h2>&lt;aside&gt;</h2>
                            </td>

                        </tr>

                        <!-- Footer -->
                        <tr height="90">
                            <td colspan="2" align="center" bgcolor="#ffe2c4">
                                <h2>&lt;footer&gt;</h2>
                            </td>
                        </tr>

                    </table>

                </body>
                </html>`,

        image: "../img/html 28.2.png"
    },

    29: {
        title: "HTML Tutorial - Create a Real-life Web Page Layout 3 - Table - ChiPi Technologies",
        notes: "no notes for this video",
        code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Web Page Layout</title>
                </head>
                <body bgcolor="#0f5b5b">

                    <table border="6" align="center" width="500" height="380" bgcolor="#ffffff" bordercolor="#ff4d4d" cellspacing="0" cellpadding="0">

                        <!-- Header -->
                        <tr height="60">
                            <td colspan="4" bgcolor="#355bb3" align="center">
                                <font color="white" size="5"><b>Header</b></font>
                            </td>
                        </tr>

                        <!-- Main Area -->
                        <tr height="180">

                            <!-- Menu -->
                            <td width="110" bgcolor="#6f86c7" align="center">
                                <font color="white" size="5"><b>Menu</b></font>
                            </td>

                            <!-- Main -->
                            <td rowspan="2" width="240" bgcolor="#6f86c7" align="center">
                                <font color="white" size="6"><b>Main</b></font>
                            </td>

                            <!-- Ad1 -->
                            <td rowspan="2" width="150" bgcolor="#6f86c7" align="center">
                                <font color="white" size="5"><b>Ad1</b></font>
                            </td>

                        </tr>

                        <!-- Ad2 -->
                        <tr height="80">
                            <td bgcolor="#6f86c7" align="center">
                                <font color="white" size="5"><b>Ad2</b></font>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr height="60">
                            <td colspan="4" bgcolor="#355bb3" align="center">
                                <font color="white" size="5"><b>Footer</b></font>
                            </td>
                        </tr>

                    </table>

                </body>
                </html>`,

        image: "../img/html 29.2.png"
    },

    30: {
        title: "Complete HTML Tutorial - Create a Real-life Web Page Layout 4 - Table - ChiPi Technologies",
        notes: `no notes for this video`,
        code: `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Student Dashboard Layout</title>
                </head>
                <body bgcolor="#0f5b5b">

                <table border="3" width="95%" height="500" align="center" bgcolor="white" cellspacing="0">

                    <!-- Header -->
                    <tr height="70">
                        <td rowspan="4" width="15%" align="center">
                            <h2>Navigation</h2>
                        </td>

                        <td colspan="2" align="center">
                            <h2>Header</h2>
                        </td>
                    </tr>

                    <!-- Student Info -->
                    <tr height="20">
                        <td colspan="2">
                            Student Number: 92837293
                            <span style="float:right;">All Students</span>
                        </td>
                    </tr>

                    <!-- Upper Content -->
                    <tr height="180">

                        <td width="60%">
                            <table border="2" width="100%" height="100%">
                                <tr>
                                    <td></td>
                                </tr>
                            </table>
                        </td>

                        <td width="35%">
                            <table border="2" width="100%" height="100%">
                                <tr height="90">
                                    <td></td>
                                </tr>

                                <tr height="90">
                                    <td></td>
                                </tr>
                            </table>
                        </td>

                    </tr>

                    <!-- Bottom Content -->
                    <tr height="180">
                        <td colspan="2">
                            <table border="2" width="100%" height="100%">
                                <tr>
                                    <td></td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                </table>

                </body>
                </html>`,

        image: "../img/html 30.2.png"
    },

    31: {
        title: "HTML Tutorial - DL, DT, DD Tag - Description List, Description Term, and Description Details",
        notes: `<dl> – Defines a Definition List and acts as a container for terms and their descriptions.
                <dt> – Defines the Definition Term (the word or term being explained).
                <dd> – Defines the Definition Description (the meaning or explanation of the term).

                it just define that a list is making ,its not like ordered list or unordered list. it give a bit or indenting to the <dd>.
                `,

        code: ` 
                <dl>

                    <dt>HTML</dt>
                    <dd>
                        HyperText Markup Language – the standard language for creating web pages.
                    </dd>

                    <dt>CSS</dt>
                    <dd>
                        Cascading Style Sheets – used to style and layout HTML elements.
                    </dd>

                    <dt>JavaScript</dt>
                    <dd>
                        A programming language that allows you to create dynamic and interactive web content.
                    </dd>

                    <dt>DBMS</dt>
                    <dd>
                        Database Management System – software used to store, manage, and retrieve data efficiently.
                    </dd>

                    <dt>SQL</dt>
                    <dd>
                        Structured Query Language – used to interact with databases, especially for inserting, querying, updating, and deleting data.
                    </dd>

                </dl>`,

        image: "../img/html 31.4.png"
    },

    32: {
        title: "HTML Tutorials - Textbox, Label and Button - ChiPi Technologies - Affordable Education For All",
        notes:  `In many html site there are submit options which save your input from the website then we use some html tags like :-

                <form> – Creates a form used to collect user input.
                <input> – Creates input fields such as text, email, password, number, etc.
                <textarea> – Creates a multi-line text input field.
                <button> – Creates a clickable button.
                <select> – Creates a dropdown list, usually used with <option> tags.

                there are more properties of those tags like.
                    <form action="submit" method="post">
                        <label for="name">Name<label>
                        <input type="text" id ="name" name="name">
                        <button type="submit">Submit</button>
                    </form>

                we create a form in which we use all these tags.
                All those input, textarea , button tags are must be inside form tag.
                `,

        code: `
                <form>

                    <br>
                    <br>

                    <label for="fname">First Name</label>

                    <input type="text"
                        placeholder="Enter the first name"
                        name="firstname"
                        id="fname">

                    <br>
                    <br>

                    <label for="lname">Last Name</label>

                    <input type="text"
                        placeholder="Enter the last name"
                        name="lastname"
                        id="lname">

                    <br>
                    <br>

                    <input type="reset" value="Cancel">

                    <input type="submit" value="Save">

                </form>`,

        image: "../img/html 32.1.png"
    },

    33: {
        title: "HTML Tutorials - Radio / Option Button, Checkbox and Button",
        notes: `<input type="radio"> – Allows the user to select only one option from a group of choices.
                <input type="checkbox"> – Allows the user to select one or more options independently.
                <input type="button"> – Creates a clickable button that performs an action, usually with JavaScript.
                `,

        code: `
                <form>

                    <!-- Radio Buttons -->

                    <input type="radio" id="GUI"
                        name="TechnologyName"
                        value="GUI">

                    <label for="GUI">
                        <b>Graphical User Interface</b>
                    </label>
                    <br>

                    <input type="radio" id="Backend"
                        name="TechnologyName"
                        value="Backend">

                    <label for="Backend">
                        <b>Backend Programming</b>
                    </label>
                    <br>

                    <input type="radio" id="ML"
                        name="TechnologyName"
                        value="ML">

                    <label for="ML">
                        <b>Machine Learning</b>
                    </label>

                    <br><br>

                    <!-- Checkboxes -->

                    <input type="checkbox" id="Course"
                        name="Course"
                        value="C">

                    <label for="Course">
                        <b>C Language</b>
                    </label>
                    <br>

                    <input type="checkbox" id="CPlusPlusCourse"
                        name="CPlusPlusCourse"
                        value="CPlusPlus">

                    <label for="CPlusPlusCourse">
                        <b>C++ Language</b>
                    </label>
                    <br>

                    <input type="checkbox" id="JavaCourse"
                        name="JavaCourse"
                        value="Java">

                    <label for="JavaCourse">
                        <b>Java Language</b>
                    </label>
                    <br>

                    <input type="checkbox" id="PythonCourse"
                        name="PythonCourse"
                        value="Python">

                    <label for="PythonCourse">
                        <b>Python Language</b>
                    </label>

                    <br><br>

                    <!-- Buttons -->

                    <input type="button"
                        value="Proceed"
                        onclick="alert('Proceed Clicked')">

                    <input type="button"
                        value="Cancel"
                        onclick="alert('Cancel Clicked')">

                    <input type="reset" value="Reset">

                    <input type="submit" value="Submit">

                </form>`,

        image: "../img/html 33.3.png"
    },

    34: {
        title: "HTML Tutorials - Input Type=Color - How to bring color Pallete to your WebPage - ChiPi Technologies",
        notes: `<input type="color"> - element display a color picker, allowing users to select a color which is submitted as a hexadecimal value.
               `,

        code: `
                <body>

                    <h2>Select a Color</h2>

                    <input type="color">

                </body>`,
        image: "../img/html 34.1.png"
    },

    35: {
        title: "HTML Tutorials - Input Type Password, Date and Select - ChiPi Technologies",
        notes: `<input type="password"> – Creates a secure input field where entered characters are hidden (shown as dots or asterisks).
                <select> – Creates a dropdown list from which the user can choose one or more options.
                <input type="date"> – Provides a calendar-based date picker for selecting a date.
                `,

        code: `
                <form>
                    Password:
                    <input type="password">
                    <br><br>

                    Course:
                    <select>
                        <option>HTML</option>
                        <option>CSS</option>
                        <option>JavaScript</option>
                    </select>
                    <br><br>

                    Date of Birth:
                    <input type="date">
                    <br><br>

                    <input type="submit" value="Submit">

                </form>`,
        image: "../img/html 35.1.png"
    },

    36: {
        title: "HTML Tutorials - Textarea - With Sample Code - ChiPi Technologies - Affordable Education For All",
        notes: `<textarea> is used to create a multi-line text input field.
                It is commonly used for feedback, comments, messages, and descriptions.
                The rows attribute sets the height (number of lines).
                The cols attribute sets the width (number of characters).
                `,

        code: `
                <form>

                    <label for="feedback">Your Feedback:</label>
                    <br>

                    <textarea id="feedback" rows="5" cols="30" placeholder="Enter your feedback here..."></textarea>

                    <br><br>

                    <input type="submit" value="Submit">

                </form>`,

        image: "../img/html 36.2.png"
    },

    37: {
        title: "HTML Tutorials - Input type File - How to do File Upload - ChiPi Technologies",
        notes: `<input type="file"> allows users to browse and select files from their device.
                It is commonly used for uploading documents, images, PDFs, and assignments.
                The selected file can be submitted through a form.
                This input type is often used in registration forms, job applications, and file upload systems.
                `,

        code: `
                <form>

                    <label for="studentName">Student Name:</label>
                    <br>
                    <input type="text"
                        id="studentName"
                        placeholder="Your name please">
                    <br><br>

                    <label for="course">Course Name:</label>
                    <br>
                    <input type="text"
                        id="course"
                        placeholder="e.g. Java, HTML, Data Structures">
                    <br><br>

                    <label for="myFile">Upload Assignment File:</label>
                    <br>
                    <input type="file"
                        id="myFile">
                    <br><br>

                    <input type="submit" value="Submit Assignment">
                    <input type="reset" value="Clear Form">

                </form>`,

        image: "../img/html 37.3.png"
    },

    38: {
        title: "HTML Tutorials - What is Datalist - How to add datalist - ChiPi Technologies",
        notes: `<datalist> provides a list of predefined suggestions for an input field.
                It works together with the <input> tag using the list attribute.
                Users can either select a suggested option or type their own value.
                It is useful for autocomplete and recommended choices.
                `,

        code: `
                <form>

                    <label for="name">Student Name:</label>
                    <br>
                    <input type="text"
                        id="name"
                        name="studentName"
                        placeholder="e.g. Ramesh, Kavya">
                    <br><br>

                    <label for="course">Select or Type a Course Name:</label>
                    <br>

                    <select id="course" name="course">
                        <option>e.g. Java</option>
                        <option>Java Programming</option>
                        <option>Web Development with HTML</option>
                        <option>React with Projects</option>
                        <option>Data Structures and Algorithms</option>
                        <option>Python for Beginners</option>
                        <option>SQL and Database Design</option>
                        <option>C Programming</option>
                    </select>

                    <br><br>

                    <input type="submit" value="Register">

                </form>`,

        image: "../img/html 38.2.png"
    },

    39: {
        title: "HTML Tutorials - Progress bar - ChiPi technologies - Affordable Education For All",
        notes: `<progress> displays the progress or completion status of a task.
                It is commonly shown as a progress bar.
                The value attribute specifies the current progress.
                The max attribute specifies the total value or maximum progress.
                `,

        code: `
                <label>HTML Course Progress:</label>
                <progress value="70" max="100"></progress>
                `,

        image: "../img/html 39.2.png"
    },

    40: {
        title: "HTML Input Type Date Explained | Date Picker Tutorial in HTML | Affordable Education For All",
        notes: `<input type="date"> creates a date picker that allows users to select a date.
                min sets the earliest date that can be selected.
                max sets the latest date that can be selected.
                value sets the default selected date.
                required makes date selection mandatory.
                readonly allows the date to be viewed but not changed.`,

        code: `
                <form>
                    <label for="dob">Date of Birth:</label>

                    <input type="date"
                        id="dob"
                        min="2000-01-01"
                        max="2030-12-31"
                        value="2025-06-03"
                        required>

                    <br><br>

                    <input type="submit" value="Submit">

                </form>`,

        image: "../img/html 40.1.png"
    },

    41: {
        title: `HTML Tutorials - Input Type="Week" - ChiPi Technologies - Affordable Education For All`,
        notes: `<input type="week"> allows users to select a specific week and year.
                disabled disables the input field completely.
                `,

        code: ` 
                <form>

                    <label for="week">Select Week:</label>
                    <input type="week" id="week">

                    <br><br>

                    <label for="disabledWeek">Disabled Week:</label>
                    <input type="week" id="disabledWeek" disabled>

                </form>`,

        image: "../img/html 41.2.png"
    },

    42: {
        title: `HTML Tutorials - Input Type="Month" - ChiPi Technologies - Affordable Education For All`,
        notes: `<input type="month"> allows users to select a specific month and year.
                The value is stored in the format YYYY-MM.
                It is useful for selecting billing periods, expiry dates, or monthly reports.
                Users can choose a month without selecting a specific day.
                `,

        code: `
                <form>

                    <label for="month">Select Month:</label>
                    <input type="month" id="month">

                    <br><br>

                    <label for="disabledMonth">Disabled Month:</label>
                    <input type="month" id="disabledMonth" disabled>

                </form>`,

        image: "../img/html 42.2.png"
    },

    43: {
        title: "HTML Tutorials – Input Type Number – Affordable Education For All – ChiPi Technologies",
        notes: `<input type="number"> is used to allow users to enter numeric values only.
                It includes built-in validation to reject non-numeric input.
                `,

        code: `
                <form>

                <label for="age">Enter Age:</label>
                <input type="number" id="age" min="1" max="100">

                <br><br>

                <label for="disabledNumber">Disabled Number:</label>
                <input type="number" id="disabledNumber" disabled>

            </form>`,
        image: "../img/html 43.2.png"
    },

    44: {
        title: "HTML Tutorials – Input Type Range – Affordable Education For All – ChiPi Technologies",
        notes: `<input type="range"> creates a slider that allows users to select a numeric value within a specified range.
               `,
        code: `
                <form>

                    <label for="volume">Volume:</label>
                    <input type="range" id="volume" min="0" max="100" value="50">

                    <br><br>

                    <label for="disabledRange">Disabled Range:</label>
                    <input type="range" id="disabledRange" disabled>

                </form>`,
        image: "../img/html 44.2.png"
    },

    45: {
        title: "HTML Tutorials - FieldSet and Legend Tags - Affordable Education For All - ChiPi Technologies",
        notes: `<fieldset> is used to group related form elements together inside a form.
                It helps organize forms and makes them easier to read.
                <legend> provides a caption or title for the <fieldset>.
                The legend appears at the top border of the fieldset.
                `,

        code: `
                <form>
                    <fieldset>

                        <legend>Student Information</legend>

                        <label>Name:</label>
                        <input type="text">

                        <br><br>

                        <label>Email:</label>
                        <input type="email">

                    </fieldset>

                    <br>

                    <input type="submit" value="Submit">

                </form>`,

        image: "../img/html 45.3.png"
    },

    46: {
        title: "HTML Tutorials - Details and Summary Tag - Affordable Education For All - ChiPi Technologies",
        notes: `<details> creates a collapsible section that can be expanded or hidden by the user.
                <summary> provides the visible heading or label for the <details> element.
                Clicking the summary shows or hides the content inside the details section.
                These tags are useful for FAQs, help sections, and additional information.
                `,

        code: `
                <details>
                    <summary>
                        Show Class Guidelines
                    </summary>

                    <h3>Java Full Stack Course Modules</h3>

                    <ul>
                        <li>HTML, CSS, JavaScript</li>
                        <li>React + Redux</li>
                        <li>Basic Java Programming</li>
                        <li>OOP using Java</li>
                        <li>JDBC (Java Database Connectivity)</li>
                        <li>Hibernate Framework</li>
                        <li>Spring Core and Spring MVC</li>
                        <li>Spring Boot</li>
                        <li>RESTful Web Services</li>
                        <li>Project Deployment</li>
                    </ul>

                </details>`,

        image: "../img/html 46.2.png"
    },

    47: {
        title: "HTML Tutorials - Progress and Range Tags - When to use - Key differences -ChiPi Technologies",
        notes: `The <progress> tag is used to display the completion status of a task and is usually controlled by the system or JavaScript.
                The <input type="range"> tag creates a slider that allows users to select a value.
                A progress bar is read-only, while a range input is interactive.
                <progress> is used for tracking progress, whereas range is used for collecting user input.
                `,

        code: `
                <body>

                    <h1>ChiPi Technologies - Student Dashboard</h1>

                    <p>
                        <b>Student Name:</b> Deepak Sharma
                    </p>

                    <p>
                        <b>Course:</b> Full Stack Web Development
                    </p>

                    <p>
                        <b>Progress:</b> 70% completed
                    </p>

                    <label>Course Completion:</label>
                    <br>

                    <progress value="70" max="100"></progress>

                    <br><br>

                    <p>&copy; 2025 ChiPi Technologies. All rights reserved.</p>

                </body>`,

        image: "../img/html 47.2.png"
    },

    48: {
        title: "HTML Tutorials Mini Project - How to create Contact Us Form - ChiPi Technologies",
        notes: "no notes for this video",
        code: `
                <body>

                    <h1>ChiPi Technologies - Contact Us</h1>

                    <p>
                        If you have any inquiries, complaints, or need support,
                        please fill out the form below or use the contact options provided.
                    </p>

                    <form>

                        <label for="fullname">Full Name:</label><br>
                        <input type="text"
                            id="fullname"
                            placeholder="e.g., Priya Verma">
                        <br><br>

                        <label for="email">Email Address:</label><br>
                        <input type="email"
                            id="email"
                            placeholder="e.g., priya@example.com">
                        <br><br>

                        <label for="mobile">Mobile Number:</label><br>
                        <input type="tel"
                            id="mobile"
                            placeholder="e.g., 9876543210">
                        <br><br>

                        <label for="message">Your Message:</label><br>
                        <textarea id="message"
                                rows="6"
                                cols="50"
                                placeholder="Write your inquiry or complaint here..."></textarea>
                        <br><br>

                        <input type="submit" value="Send Message">
                        <input type="reset" value="Clear Form">

                    </form>

                    <hr>

                    <h2>Other Ways to Contact ChiPi Technologies</h2>

                    <p>
                        Email:
                        <a href="mailto:support@chipitechnologies.com">
                            support@chipitechnologies.com
                        </a>
                        <br>

                        Phone:
                        <a href="tel:+919876543210">
                            +91-9876543210
                        </a>
                        <br>

                        WhatsApp:
                        <a href="https://wa.me/919876543210">
                            Message Us on WhatsApp
                        </a>
                        <br>

                        Facebook:
                        <a href="#">ChiPi Technologies on Facebook</a>
                        <br>

                        LinkedIn:
                        <a href="#">ChiPi Technologies on LinkedIn</a>
                    </p>

                    <p>
                        &copy; 2025 ChiPi Technologies. All rights reserved.
                    </p>

                </body>`,
        image: "../img/html 48.1.png"
    },

    49: {
        title: "HTML Tutorials Mini Project - Develop Register User/Login Form - ChiPi Technologies",
        notes: "no notes for this video",
        code: `
                <body>
                    <h1>ChiPi Technologies - Login / Sign-Up Form</h1>

                    <form>

                        <label for="email">Email Address:</label><br>
                        <input type="email"
                            id="email"
                            placeholder="e.g., ayush@example.com">
                        <br><br>

                        <label for="password">Password:</label><br>
                        <input type="password"
                            id="password"
                            placeholder="Enter your password">
                        <br><br>

                        <label for="confirmPassword">Confirm Password:</label><br>
                        <input type="password"
                            id="confirmPassword"
                            placeholder="Re-enter your password">
                        <br><br>

                        <label for="role">I am a:</label><br>

                        <select id="role">
                            <option>-- Select Role --</option>
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Admin</option>
                        </select>

                        <br><br>

                        <input type="submit" value="Sign Up / Login">
                        <input type="reset" value="Clear Form">

                    </form>

                    <br>

                    <p>
                        &copy; 2025 ChiPi Technologies. All rights reserved.
                    </p>

                </body>`,
        image: "../img/html 49.1.png"
    },

    50: {
        title: "HTML Tutorials - Mini Project - Student Registration Form - ChiPi Technologies",
        notes: "no notes for this video",
        code: `
                <body>
                    <h1>ChiPi Technologies - Student Registration Form</h1>

                    <form>

                        <label for="fullname">Full Name:</label><br>
                        <input type="text"
                            id="fullname"
                            placeholder="e.g. Ayush Raj">
                        <br><br>

                        <label for="email">Email Address:</label><br>
                        <input type="email"
                            id="email"
                            placeholder="e.g. ayush@example.com">
                        <br><br>

                        <label for="mobile">Mobile Number:</label><br>
                        <input type="tel"
                            id="mobile"
                            placeholder="e.g. 9876543210">
                        <br><br>

                        <label>Gender:</label><br>

                        <input type="radio" id="male" name="gender">
                        <label for="male">Male</label><br>

                        <input type="radio" id="female" name="gender">
                        <label for="female">Female</label><br>

                        <input type="radio" id="other" name="gender">
                        <label for="other">Other</label>

                        <br><br>

                        <label for="course">Select Course:</label><br>

                        <select id="course">
                            <option>-- Please choose an option --</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>JavaScript</option>
                            <option>Python</option>
                            <option>Java</option>
                        </select>

                        <br><br>

                        <label for="batch">Preferred Batch Timing:</label><br>

                        <input type="text"
                            id="batch"
                            placeholder="e.g. Weekend Morning / Evening">
                        <br><br>

                        <label for="comments">Any Comments or Questions:</label><br>

                        <textarea id="comments"
                                rows="5"
                                cols="40"
                                placeholder="Write here..."></textarea>

                        <br><br>

                        <input type="submit" value="Register">
                        <input type="reset" value="Clear Form">

                    </form>

                </body>`,   

        image: "../img/html 50.3.png"
    }

};