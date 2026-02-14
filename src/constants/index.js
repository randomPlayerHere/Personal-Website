export const myProjects = [
  {
    id: 1,
    title: "Deep CNN-Based Network Intrusion Detection System",
    description:
      "A high-accuracy Deep CNN model for detecting malicious network traffic using the CICIDS2017 dataset.",
    subDescription: [
      "Built a Deep CNN architecture in TensorFlow/Keras for attack vs normal traffic classification. Performed flow-level preprocessing, feature scaling, and dataset balancing.",
      "Achieved >99% detection accuracy and evaluated using Precision, Recall, and F1-score.",
      "Benchmarked performance against a baseline DNN model.",
    ],
    href: "https://github.com/randomPlayerHere/nids",
    logo: "",
    image: "/assets/projects/nids.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.svg" },
      { id: 2, name: "TensorFlow", path: "/assets/logos/TensorFlow.svg" },
      { id: 3, name: "scikit-learn", path: "/assets/logos/scikit-learn.svg" },
    ],
  },
  {
    id: 2,
    title: "SMA Crossover Strategy Backtester",
    description:
      "A quantitative trading strategy backtester using Simple Moving Averages on historical stock data.",
    subDescription: [
      "Implemented buy/sell signal logic using SMA crossover strategy.",
      "Analyzed cumulative returns and drawdowns using pandas.",
      "Visualized performance metrics using Matplotlib.",
      "Built a Streamlit interface for interactive backtesting.",
    ],
    href: "https://github.com/randomPlayerHere/backtestSMA",
    logo: "",
    image: "/assets/projects/trading.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.svg" },
      { id: 2, name: "pandas", path: "/assets/logos/Pandas.svg" },
      { id: 3, name: "Matplotlib", path: "/assets/logos/Matplotlib.svg" },
      { id: 4, name: "Streamlit", path: "/assets/logos/Streamlit.svg" },
    ],
  },
  {
    id: 3,
    title: "HyprFit - AI Fitness Coach",
    description:
      "An adaptive fitness planner using clustering and rule-based personalization.",
    subDescription: [
      "Applied clustering algorithms to user activity data for workout personalization.",
      "Designed rule-based recommendation logic for adaptive plans.",
      "Built an interactive UI using Streamlit.",
      "Focused on lightweight, interpretable ML models.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/hyprfit.jpeg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.svg" },
      { id: 2, name: "scikit-learn", path: "/assets/logos/scikit-learn.svg" },
      { id: 4, name: "Streamlit", path: "/assets/logos/Streamlit.svg" }
    ],
  }
];


export const experiences = [
  {
    title: "AI/ML Executive Member",
    job: "ELabs (Electronics Labs), KIIT",
    date: "2025 - Present",
    contents: [
      "Conducted hands-on machine learning workshops (regression, clustering, model evaluation) for 100+ students.",
      "Mentored junior members in building end-to-end ML projects using Python, scikit-learn, and Streamlit.",
      "Built and demonstrated GenAI prototypes using LangChain and OpenAI APIs during ELabs Tech Week.",
      "Strengthened technical communication and leadership through collaborative AI initiatives.",
    ],
  },
  {
    title: "Freelance Data & ML Developer",
    job: "Independent Projects",
    date: "2022 - 2024",
    contents: [
      "Built automated data extraction pipelines using Python (BeautifulSoup, requests, Selenium).",
      "Performed large-scale web scraping, cleaning, and preprocessing for structured analytics workflows.",
      "Applied exploratory data analysis (EDA) and feature engineering using pandas and NumPy.",
      "Developed machine learning models for classification and forecasting tasks.",
      "Delivered reproducible notebooks and lightweight dashboards for client insights.",
    ],
  },
];
