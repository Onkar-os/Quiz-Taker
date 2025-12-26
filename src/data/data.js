const quizData = {
  JavaScript: [
    {
      question: "What is JavaScript?",
      options: [
        "A programming language",
        "A database",
        "An operating system",
        "A browser"
      ],
      correctAnswer: "A programming language"
    },
    {
      question: "Which keyword is used to declare a variable?",
      options: ["var", "int", "string", "float"],
      correctAnswer: "var"
    },
    {
      question: "Which symbol is used for comments?",
      options: ["//", "<!-- -->", "#", "**"],
      correctAnswer: "//"
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Google", "Microsoft", "Apple"],
      correctAnswer: "Netscape"
    },
    {
      question: "Which method converts JSON to object?",
      options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.object()"],
      correctAnswer: "JSON.parse()"
    },
    {
      question: "Which keyword defines constant?",
      options: ["const", "var", "let", "static"],
      correctAnswer: "const"
    },
    {
      question: "Which operator compares value & type?",
      options: ["===", "==", "=", "!="],
      correctAnswer: "==="
    },
    {
      question: "Which function runs after page load?",
      options: ["onload", "ready", "start", "loadPage"],
      correctAnswer: "onload"
    },
    {
      question: "Which loop runs at least once?",
      options: ["do-while", "for", "while", "foreach"],
      correctAnswer: "do-while"
    },
    {
      question: "Which keyword stops a loop?",
      options: ["break", "stop", "exit", "end"],
      correctAnswer: "break"
    }
  ],

  React: [
    {
      question: "What is React?",
      options: ["Library", "Framework", "Language", "Database"],
      correctAnswer: "Library"
    },
    {
      question: "Who developed React?",
      options: ["Facebook", "Google", "Microsoft", "Amazon"],
      correctAnswer: "Facebook"
    },
    {
      question: "What is JSX?",
      options: ["JavaScript XML", "JSON", "HTML", "CSS"],
      correctAnswer: "JavaScript XML"
    },
    {
      question: "Which hook manages state?",
      options: ["useState", "useEffect", "useRef", "useMemo"],
      correctAnswer: "useState"
    },
    {
      question: "Which hook handles lifecycle?",
      options: ["useEffect", "useState", "useContext", "useReducer"],
      correctAnswer: "useEffect"
    },
    {
      question: "React uses ____ architecture",
      options: ["Component-based", "MVC", "Layered", "Monolithic"],
      correctAnswer: "Component-based"
    },
    {
      question: "Props are _____",
      options: ["Read-only", "Mutable", "Global", "Private"],
      correctAnswer: "Read-only"
    },
    {
      question: "Which method renders UI?",
      options: ["render()", "display()", "show()", "print()"],
      correctAnswer: "render()"
    },
    {
      question: "Virtual DOM improves?",
      options: ["Performance", "Security", "Storage", "Speed only"],
      correctAnswer: "Performance"
    },
    {
      question: "React file extension?",
      options: [".jsx", ".js", ".react", ".tsx"],
      correctAnswer: ".jsx"
    }
  ],

  HTML: [
    {
      question: "HTML stands for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyperlink Text Language",
        "Markup Hyper Language"
      ],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag creates hyperlink?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      correctAnswer: "<a>"
    },
    {
      question: "Which tag inserts image?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      correctAnswer: "<img>"
    },
    {
      question: "HTML is?",
      options: ["Markup Language", "Programming Language", "Database", "Framework"],
      correctAnswer: "Markup Language"
    },
    {
      question: "Which tag creates table row?",
      options: ["<tr>", "<td>", "<table>", "<th>"],
      correctAnswer: "<tr>"
    },
    {
      question: "Which tag makes text bold?",
      options: ["<b>", "<strong>", "Both", "None"],
      correctAnswer: "Both"
    },
    {
      question: "Which tag is root element?",
      options: ["<html>", "<body>", "<head>", "<root>"],
      correctAnswer: "<html>"
    },
    {
      question: "Which tag is used for lists?",
      options: ["<ul>", "<ol>", "Both", "None"],
      correctAnswer: "Both"
    },
    {
      question: "Which tag creates form?",
      options: ["<form>", "<input>", "<button>", "<fieldset>"],
      correctAnswer: "<form>"
    },
    {
      question: "HTML file extension?",
      options: [".html", ".htm", "Both", ".web"],
      correctAnswer: "Both"
    }
  ],

  CSS: [
    {
      question: "CSS stands for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style System",
        "Color Style Sheet",
        "Computer Style Sheet"
      ],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "Which symbol selects class?",
      options: [".", "#", "*", "&"],
      correctAnswer: "."
    },
    {
      question: "Which symbol selects id?",
      options: ["#", ".", "*", "%"],
      correctAnswer: "#"
    },
    {
      question: "Which property changes text color?",
      options: ["color", "font-color", "text-color", "style"],
      correctAnswer: "color"
    },
    {
      question: "Which property controls layout?",
      options: ["display", "float", "position", "All"],
      correctAnswer: "All"
    },
    {
      question: "Flexbox is used for?",
      options: ["Layout", "Color", "Animation", "Font"],
      correctAnswer: "Layout"
    },
    {
      question: "Which unit is relative?",
      options: ["%", "px", "cm", "mm"],
      correctAnswer: "%"
    },
    {
      question: "Which property adds space inside?",
      options: ["padding", "margin", "border", "gap"],
      correctAnswer: "padding"
    },
    {
      question: "Which property adds shadow?",
      options: ["box-shadow", "shadow", "text-shadow", "filter"],
      correctAnswer: "box-shadow"
    },
    {
      question: "CSS file extension?",
      options: [".css", ".style", ".scss", ".sass"],
      correctAnswer: ".css"
    }
  ],

  NodeJS: [
    {
      question: "Node.js is?",
      options: ["Runtime environment", "Framework", "Library", "Language"],
      correctAnswer: "Runtime environment"
    },
    {
      question: "Node.js runs on?",
      options: ["Chrome V8", "Firefox", "Edge", "Safari"],
      correctAnswer: "Chrome V8"
    },
    {
      question: "Which keyword imports module?",
      options: ["require", "import", "include", "use"],
      correctAnswer: "require"
    },
    {
      question: "Node.js is _____",
      options: ["Single-threaded", "Multi-threaded", "Both", "None"],
      correctAnswer: "Single-threaded"
    },
    {
      question: "Which package manager?",
      options: ["npm", "yarn", "pnpm", "All"],
      correctAnswer: "All"
    },
    {
      question: "Which framework used with Node?",
      options: ["Express", "Django", "Laravel", "Spring"],
      correctAnswer: "Express"
    },
    {
      question: "Node.js is best for?",
      options: ["Real-time apps", "Heavy computation", "Desktop apps", "Games"],
      correctAnswer: "Real-time apps"
    },
    {
      question: "Which file defines dependencies?",
      options: ["package.json", "config.json", "node.json", "dep.json"],
      correctAnswer: "package.json"
    },
    {
      question: "Which module handles file system?",
      options: ["fs", "http", "path", "os"],
      correctAnswer: "fs"
    },
    {
      question: "Node.js file extension?",
      options: [".js", ".node", ".jsx", ".ts"],
      correctAnswer: ".js"
    }
  ]
};

export default quizData;
