import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const quizData = {
  cybersecurity: [
    {
      question: "What does a firewall do?",
      options: [
        "Blocks unauthorized access",
        "Speeds up internet",
        "Monitors CPU usage",
        "Optimizes memory",
      ],
      answer: "Blocks unauthorized access",
    },
    {
      question: "What is phishing?",
      options: [
        "A type of malware",
        "A hacking technique",
        "A social engineering attack",
        "An encryption method",
      ],
      answer: "A social engineering attack",
    },
    {
      question: "Which of the following is a strong password?",
      options: ["password123", "qwerty", "P@ssw0rd!2024", "123456"],
      answer: "P@ssw0rd!2024",
    },
    {
      question: "What does HTTPS stand for?",
      options: [
        "HyperText Transfer Protocol Secure",
        "Highly Trusted Protocol System",
        "Hyperlink Transfer Processing System",
        "Host Transfer Protection Service",
      ],
      answer: "HyperText Transfer Protocol Secure",
    },
    {
      question: "What is a common sign of a phishing email?",
      options: [
        "Contains spelling errors",
        "Requests sensitive information",
        "Comes from an unknown sender",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "Which of these is a type of malware?",
      options: ["Firewall", "Trojan Horse", "HTTP", "Proxy Server"],
      answer: "Trojan Horse",
    },
    {
      question: "What is two-factor authentication (2FA)?",
      options: [
        "Using two passwords",
        "A security measure that requires two forms of verification",
        "An antivirus software",
        "A type of encryption",
      ],
      answer: "A security measure that requires two forms of verification",
    },
    {
      question: "Which of these is an example of social engineering?",
      options: [
        "Using brute-force attacks",
        "Tricking someone into giving their password",
        "Scanning networks for vulnerabilities",
        "Installing an antivirus program",
      ],
      answer: "Tricking someone into giving their password",
    },
    {
      question: "What is ransomware?",
      options: [
        "Software that speeds up your computer",
        "A virus that destroys hardware",
        "Malware that locks files and demands payment",
        "A type of firewall",
      ],
      answer: "Malware that locks files and demands payment",
    },
    {
      question: "What is a VPN used for?",
      options: [
        "Blocking pop-ups",
        "Encrypting internet traffic and masking your IP address",
        "Increasing download speeds",
        "Scanning for malware",
      ],
      answer: "Encrypting internet traffic and masking your IP address",
    },
    {
      question: "Which of these is NOT a cybersecurity best practice?",
      options: [
        "Using strong, unique passwords",
        "Clicking on links in emails without verifying them",
        "Enabling 2FA",
        "Keeping software up to date",
      ],
      answer: "Clicking on links in emails without verifying them",
    },
    {
      question: "What does an antivirus program do?",
      options: [
        "Blocks ads",
        "Detects and removes malware",
        "Monitors network traffic",
        "Encrypts data",
      ],
      answer: "Detects and removes malware",
    },
    {
      question: "Which of the following is an example of a brute force attack?",
      options: [
        "Tricking a user into revealing their password",
        "Guessing passwords repeatedly until the correct one is found",
        "Sending a phishing email",
        "Intercepting network traffic",
      ],
      answer: "Guessing passwords repeatedly until the correct one is found",
    },
    {
      question: "Which of the following is NOT a type of cyber attack?",
      options: [
        "SQL Injection",
        "Denial of Service (DoS)",
        "Phishing",
        "Cloud Computing",
      ],
      answer: "Cloud Computing",
    },
    {
      question: "What is the purpose of encryption?",
      options: [
        "Speeding up network traffic",
        "Protecting data by converting it into a secure format",
        "Detecting malware",
        "Blocking ads on websites",
      ],
      answer: "Protecting data by converting it into a secure format",
    },
    {
      question: "What is a common goal of a Denial of Service (DoS) attack?",
      options: [
        "Stealing credit card information",
        "Overloading a system to make it unavailable",
        "Installing a backdoor",
        "Encrypting files",
      ],
      answer: "Overloading a system to make it unavailable",
    },
    {
      question: "Which of these is an example of a strong password?",
      options: ["john123", "abcdefg", "Qw!6@zY7*9dP", "password"],
      answer: "Qw!6@zY7*9dP",
    },
    {
      question: "What is the purpose of a security patch?",
      options: [
        "To add new features to software",
        "To fix security vulnerabilities",
        "To increase internet speed",
        "To remove viruses",
      ],
      answer: "To fix security vulnerabilities",
    },
    {
      question: "Which of these is NOT a safe practice when browsing the web?",
      options: [
        "Using HTTPS websites",
        "Clicking on unknown links in emails",
        "Avoiding public Wi-Fi for sensitive transactions",
        "Keeping your browser updated",
      ],
      answer: "Clicking on unknown links in emails",
    },
    {
      question: "Which of these is a secure way to store passwords?",
      options: [
        "Writing them down on paper",
        "Using a password manager",
        "Saving them in a text file",
        "Using the same password for all accounts",
      ],
      answer: "Using a password manager",
    },
    {
      question: "What does a security breach mean?",
      options: [
        "A hacker gains unauthorized access to a system",
        "A company releases a new security update",
        "A network connection fails",
        "A computer runs out of storage",
      ],
      answer: "A hacker gains unauthorized access to a system",
    },
    {
      question: "What is spyware?",
      options: [
        "A type of software that monitors and collects user activity",
        "A security program",
        "An internet browser extension",
        "A type of antivirus",
      ],
      answer: "A type of software that monitors and collects user activity",
    },
    {
      question: "What is a botnet?",
      options: [
        "A security tool",
        "A network of infected computers controlled remotely",
        "An AI system for cybersecurity",
        "A type of firewall",
      ],
      answer: "A network of infected computers controlled remotely",
    },
    {
      question: "What is a keylogger?",
      options: [
        "A security feature in browsers",
        "A tool that records keystrokes to steal information",
        "A software update",
        "A network firewall",
      ],
      answer: "A tool that records keystrokes to steal information",
    },
    {
      question: "What is ethical hacking?",
      options: [
        "Hacking with criminal intent",
        "Hacking for fun",
        "Testing security systems legally to find vulnerabilities",
        "A type of malware attack",
      ],
      answer: "Testing security systems legally to find vulnerabilities",
    },
  ],
  ai: [
    {
      question: "What is machine learning?",
      options: [
        "A type of AI",
        "A programming language",
        "A web framework",
        "A database",
      ],
      answer: "A type of AI",
    },
    {
      question: "Who is known as the father of AI?",
      options: ["Alan Turing", "Elon Musk", "Mark Zuckerberg", "Bill Gates"],
      answer: "Alan Turing",
    },
    {
      question: "Which of the following is an AI-powered virtual assistant?",
      options: ["Alexa", "Photoshop", "Excel", "Google Chrome"],
      answer: "Alexa",
    },
    {
      question: "What does NLP stand for in AI?",
      options: [
        "Neural Learning Process",
        "Natural Language Processing",
        "Network Layer Protocol",
        "Non-Linear Programming",
      ],
      answer: "Natural Language Processing",
    },
    {
      question: "Which company developed ChatGPT?",
      options: ["OpenAI", "Google", "Microsoft", "Facebook"],
      answer: "OpenAI",
    },
    {
      question: "Which of the following is an example of supervised learning?",
      options: [
        "K-Means Clustering",
        "Neural Networks trained with labeled data",
        "Reinforcement Learning",
        "Genetic Algorithms",
      ],
      answer: "Neural Networks trained with labeled data",
    },
    {
      question: "What is deep learning?",
      options: [
        "A subset of machine learning",
        "A cloud storage technique",
        "A software development methodology",
        "A cybersecurity strategy",
      ],
      answer: "A subset of machine learning",
    },
    {
      question: "Which of the following is a common deep learning framework?",
      options: ["TensorFlow", "Django", "Bootstrap", "Spring Boot"],
      answer: "TensorFlow",
    },
    {
      question: "Which AI technique is used in self-driving cars?",
      options: [
        "Rule-based programming",
        "Reinforcement learning",
        "Blockchain",
        "Database indexing",
      ],
      answer: "Reinforcement learning",
    },
    {
      question: "What is the Turing Test used for?",
      options: [
        "Testing AI's ability to mimic human intelligence",
        "Measuring software performance",
        "Testing processor speed",
        "Identifying malware",
      ],
      answer: "Testing AI's ability to mimic human intelligence",
    },
    {
      question: "Which algorithm is commonly used for image recognition?",
      options: [
        "K-Nearest Neighbors",
        "Convolutional Neural Networks (CNNs)",
        "Random Forest",
        "Decision Trees",
      ],
      answer: "Convolutional Neural Networks (CNNs)",
    },
    {
      question: "What is a chatbot?",
      options: [
        "A robotic vacuum cleaner",
        "An AI program that simulates conversation",
        "A type of cryptocurrency",
        "A software testing tool",
      ],
      answer: "An AI program that simulates conversation",
    },
    {
      question: "Which of the following is NOT an AI application?",
      options: [
        "Facial recognition",
        "Spam email filtering",
        "Sorting files alphabetically",
        "Speech-to-text conversion",
      ],
      answer: "Sorting files alphabetically",
    },
    {
      question: "Which type of AI can perform tasks but lacks consciousness?",
      options: ["Narrow AI", "General AI", "Super AI", "Quantum AI"],
      answer: "Narrow AI",
    },
    {
      question: "Which AI system defeated the world champion in chess?",
      options: ["DeepMind", "IBM Watson", "AlphaGo", "Deep Blue"],
      answer: "Deep Blue",
    },
    {
      question: "What does GAN stand for in AI?",
      options: [
        "General AI Networks",
        "Generative Adversarial Networks",
        "Graphical Algorithm Nodes",
        "Global AI Notation",
      ],
      answer: "Generative Adversarial Networks",
    },
    {
      question: "What is the primary goal of reinforcement learning?",
      options: [
        "Minimizing errors in data",
        "Making decisions through trial and error",
        "Identifying patterns in text",
        "Storing large amounts of data",
      ],
      answer: "Making decisions through trial and error",
    },
    {
      question:
        "Which AI field focuses on enabling computers to understand images?",
      options: [
        "Speech Recognition",
        "Computer Vision",
        "Natural Language Processing",
        "Cybersecurity",
      ],
      answer: "Computer Vision",
    },
    {
      question: "Which AI model is commonly used for language translation?",
      options: [
        "CNNs",
        "Recurrent Neural Networks (RNNs)",
        "Decision Trees",
        "Linear Regression",
      ],
      answer: "Recurrent Neural Networks (RNNs)",
    },
    {
      question: "What is an artificial neural network inspired by?",
      options: [
        "Human brain structure",
        "Computer circuits",
        "Mathematical equations",
        "Geometric patterns",
      ],
      answer: "Human brain structure",
    },
    {
      question:
        "Which of the following is an example of an AI-powered recommendation system?",
      options: [
        "Netflix's movie suggestions",
        "A traditional calculator",
        "Microsoft Word spell check",
        "An analog watch",
      ],
      answer: "Netflix's movie suggestions",
    },
    {
      question: "Which of these is a major ethical concern in AI?",
      options: [
        "Low internet speed",
        "Bias in algorithms",
        "Slow computer boot time",
        "Insufficient RAM",
      ],
      answer: "Bias in algorithms",
    },
    {
      question: "Which AI concept is used to generate deepfake videos?",
      options: [
        "Reinforcement learning",
        "Generative Adversarial Networks (GANs)",
        "Decision trees",
        "K-Means Clustering",
      ],
      answer: "Generative Adversarial Networks (GANs)",
    },
    {
      question: "What is a major challenge in training AI models?",
      options: [
        "Lack of computing power",
        "Too many programmers",
        "Not enough programming languages",
        "High internet speed",
      ],
      answer: "Lack of computing power",
    },
    {
      question:
        "Which of the following is a famous AI that defeated human players in Go?",
      options: ["Siri", "AlphaGo", "Deep Blue", "Tesla Autopilot"],
      answer: "AlphaGo",
    },
    {
      question: "What is the difference between AI and Machine Learning?",
      options: [
        "Machine Learning is a subset of AI",
        "AI is a subset of Machine Learning",
        "Both are completely unrelated",
        "Machine Learning is hardware-based while AI is software-based",
      ],
      answer: "Machine Learning is a subset of AI",
    },
    {
      question: "Which AI application is used in fraud detection?",
      options: [
        "Reinforcement Learning",
        "Anomaly Detection",
        "Generative AI",
        "Computer Vision",
      ],
      answer: "Anomaly Detection",
    },
    {
      question: "Which AI-based assistant is developed by Apple?",
      options: ["Alexa", "Google Assistant", "Siri", "Cortana"],
      answer: "Siri",
    },
  ],
  blockchain: [
    {
      question: "What is blockchain?",
      options: [
        "A centralized database",
        "A type of cryptocurrency",
        "A decentralized digital ledger",
        "An AI algorithm",
      ],
      answer: "A decentralized digital ledger",
    },
    {
      question: "Who is the creator of Bitcoin?",
      options: [
        "Elon Musk",
        "Vitalik Buterin",
        "Satoshi Nakamoto",
        "Mark Zuckerberg",
      ],
      answer: "Satoshi Nakamoto",
    },
    {
      question: "Which is the first cryptocurrency?",
      options: ["Ethereum", "Bitcoin", "Litecoin", "Ripple"],
      answer: "Bitcoin",
    },
    {
      question: "What is a smart contract?",
      options: [
        "A physical agreement signed digitally",
        "A self-executing contract with predefined rules",
        "An agreement that requires manual approval",
        "A document stored on the blockchain",
      ],
      answer: "A self-executing contract with predefined rules",
    },
    {
      question: "Which blockchain platform introduced smart contracts?",
      options: ["Bitcoin", "Ethereum", "Cardano", "Solana"],
      answer: "Ethereum",
    },
    {
      question: "What does 'mining' mean in blockchain?",
      options: [
        "Physically extracting digital coins",
        "Verifying transactions and adding them to the blockchain",
        "Hacking into blockchain networks",
        "Storing cryptocurrencies in a wallet",
      ],
      answer: "Verifying transactions and adding them to the blockchain",
    },
    {
      question: "What is a blockchain node?",
      options: [
        "A single transaction on the blockchain",
        "A computer participating in the blockchain network",
        "A cryptocurrency wallet",
        "An encrypted file on the blockchain",
      ],
      answer: "A computer participating in the blockchain network",
    },
    {
      question: "What is the purpose of consensus mechanisms in blockchain?",
      options: [
        "To ensure network participants agree on valid transactions",
        "To encrypt blockchain transactions",
        "To prevent users from creating wallets",
        "To slow down the mining process",
      ],
      answer: "To ensure network participants agree on valid transactions",
    },
    {
      question: "Which of the following is a common consensus mechanism?",
      options: [
        "Proof of Play",
        "Proof of Transaction",
        "Proof of Work",
        "Proof of Stake",
      ],
      answer: "Proof of Work",
    },
    {
      question: "Which consensus mechanism does Bitcoin use?",
      options: [
        "Proof of Stake",
        "Proof of Work",
        "Delegated Proof of Stake",
        "Byzantine Fault Tolerance",
      ],
      answer: "Proof of Work",
    },
    {
      question: "What is the purpose of a cryptocurrency wallet?",
      options: [
        "To store physical money",
        "To store and manage digital assets",
        "To mine cryptocurrencies",
        "To track stock market investments",
      ],
      answer: "To store and manage digital assets",
    },
    {
      question: "What is a private key in blockchain?",
      options: [
        "A public identifier for a wallet",
        "A secret code that allows access to a cryptocurrency wallet",
        "A mining tool",
        "An encrypted blockchain file",
      ],
      answer: "A secret code that allows access to a cryptocurrency wallet",
    },
    {
      question: "Which of the following is an example of a public blockchain?",
      options: ["Hyperledger", "Ethereum", "Quorum", "Corda"],
      answer: "Ethereum",
    },
    {
      question: "What is a hash function in blockchain?",
      options: [
        "A method for encrypting transactions",
        "A function that maps data to a fixed-length output",
        "A technique for hacking the blockchain",
        "A way to reduce transaction fees",
      ],
      answer: "A function that maps data to a fixed-length output",
    },
    {
      question: "What is the primary advantage of blockchain technology?",
      options: [
        "Centralized control",
        "Immutability and transparency",
        "Lower electricity consumption",
        "Faster internet speed",
      ],
      answer: "Immutability and transparency",
    },
    {
      question: "What is the maximum supply of Bitcoin?",
      options: ["1 Million", "21 Million", "50 Million", "Unlimited"],
      answer: "21 Million",
    },
    {
      question: "What does DeFi stand for?",
      options: [
        "Decentralized Finance",
        "Digital Fiat",
        "Distributed Funds",
        "Data Finance",
      ],
      answer: "Decentralized Finance",
    },
    {
      question: "Which blockchain feature makes it resistant to modification?",
      options: [
        "Centralized database",
        "Encryption",
        "Immutability",
        "Smart contracts",
      ],
      answer: "Immutability",
    },
    {
      question: "What is gas in Ethereum?",
      options: [
        "A fuel used in mining rigs",
        "A transaction fee required for computations",
        "A term for blockchain bugs",
        "A layer-2 scaling solution",
      ],
      answer: "A transaction fee required for computations",
    },
    {
      question:
        "Which of the following is a Layer-2 scaling solution for Ethereum?",
      options: [
        "Binance Smart Chain",
        "Lightning Network",
        "Polygon (MATIC)",
        "Solana",
      ],
      answer: "Polygon (MATIC)",
    },
    {
      question:
        "What is the difference between a private and a public blockchain?",
      options: [
        "Private blockchains require permission to join, while public blockchains are open to all",
        "Public blockchains are faster than private blockchains",
        "Private blockchains use more electricity",
        "Public blockchains store more transactions",
      ],
      answer:
        "Private blockchains require permission to join, while public blockchains are open to all",
    },
    {
      question: "Which of the following is an example of a blockchain oracle?",
      options: [
        "Bitcoin Core",
        "Ethereum Virtual Machine",
        "Chainlink",
        "Binance Chain",
      ],
      answer: "Chainlink",
    },
    {
      question: "Which of the following is NOT a use case of blockchain?",
      options: [
        "Supply chain management",
        "Voting systems",
        "Social media marketing",
        "Healthcare records",
      ],
      answer: "Social media marketing",
    },
    {
      question: "What is a fork in blockchain?",
      options: [
        "A split in the blockchain protocol",
        "A new type of blockchain wallet",
        "A hardware component for mining",
        "A security vulnerability",
      ],
      answer: "A split in the blockchain protocol",
    },
    {
      question: "What is NFT short for?",
      options: [
        "Non-Fungible Token",
        "New Financial Technology",
        "Next-Generation Financial Transaction",
        "Non-Fixed Treasury",
      ],
      answer: "Non-Fungible Token",
    },
    {
      question: "Which blockchain is most commonly used for NFTs?",
      options: ["Bitcoin", "Ethereum", "Ripple", "Cardano"],
      answer: "Ethereum",
    },
    {
      question: "What is staking in blockchain?",
      options: [
        "Betting on cryptocurrency prices",
        "Locking up cryptocurrency to support the network",
        "Mining Bitcoin",
        "Selling NFTs",
      ],
      answer: "Locking up cryptocurrency to support the network",
    },
    {
      question:
        "What is the primary purpose of a decentralized exchange (DEX)?",
      options: [
        "To buy and sell stocks",
        "To allow peer-to-peer trading of cryptocurrencies",
        "To mine cryptocurrencies",
        "To create smart contracts",
      ],
      answer: "To allow peer-to-peer trading of cryptocurrencies",
    },
  ],
  cloud: [
    {
      question: "What is cloud computing?",
      options: [
        "A type of software",
        "A method of data storage and computing over the internet",
        "A computer virus",
        "A physical hard drive",
      ],
      answer: "A method of data storage and computing over the internet",
    },
    {
      question: "Which of the following is NOT a cloud service model?",
      options: [
        "Infrastructure as a Service (IaaS)",
        "Platform as a Service (PaaS)",
        "Software as a Service (SaaS)",
        "Hardware as a Service (HaaS)",
      ],
      answer: "Hardware as a Service (HaaS)",
    },
    {
      question: "Which company provides AWS cloud services?",
      options: ["Microsoft", "Google", "Amazon", "IBM"],
      answer: "Amazon",
    },
    {
      question: "Which of the following is a cloud storage service?",
      options: ["Dropbox", "MySQL", "Photoshop", "Windows Explorer"],
      answer: "Dropbox",
    },
    {
      question: "What is the primary benefit of cloud computing?",
      options: [
        "Faster local network speed",
        "Unlimited access to physical servers",
        "On-demand resources and scalability",
        "Lower internet costs",
      ],
      answer: "On-demand resources and scalability",
    },
    {
      question: "What does SaaS stand for?",
      options: [
        "Storage as a Service",
        "Software as a Service",
        "Security as a Service",
        "System as a Service",
      ],
      answer: "Software as a Service",
    },
    {
      question:
        "Which cloud model provides the highest level of control over resources?",
      options: ["IaaS", "PaaS", "SaaS", "FaaS"],
      answer: "IaaS",
    },
    {
      question: "What is a private cloud?",
      options: [
        "A cloud service used only by one organization",
        "A cloud service shared by multiple companies",
        "A cloud service for personal use only",
        "A type of security system",
      ],
      answer: "A cloud service used only by one organization",
    },
    {
      question:
        "Which of the following is a key characteristic of cloud computing?",
      options: [
        "Fixed storage limits",
        "On-demand self-service",
        "Limited internet access",
        "Manual scalability",
      ],
      answer: "On-demand self-service",
    },
    {
      question: "Which of these is an example of IaaS?",
      options: [
        "Google Docs",
        "Microsoft Azure Virtual Machines",
        "Dropbox",
        "Gmail",
      ],
      answer: "Microsoft Azure Virtual Machines",
    },
    {
      question: "What is hybrid cloud?",
      options: [
        "A cloud model that combines private and public cloud environments",
        "A new type of internet connection",
        "A high-speed data processing system",
        "A cloud model that stores data on physical hard drives",
      ],
      answer:
        "A cloud model that combines private and public cloud environments",
    },
    {
      question:
        "Which cloud computing deployment model is used by multiple organizations sharing a common goal?",
      options: [
        "Public Cloud",
        "Private Cloud",
        "Community Cloud",
        "Hybrid Cloud",
      ],
      answer: "Community Cloud",
    },
    {
      question: "Which of the following is a public cloud provider?",
      options: ["Google Cloud", "Oracle", "Dell", "Intel"],
      answer: "Google Cloud",
    },
    {
      question:
        "Which of the following is NOT an advantage of cloud computing?",
      options: [
        "Scalability",
        "Flexibility",
        "High maintenance cost",
        "Remote access",
      ],
      answer: "High maintenance cost",
    },
    {
      question:
        "Which cloud model provides the most control over networking, storage, and computing?",
      options: ["PaaS", "SaaS", "IaaS", "FaaS"],
      answer: "IaaS",
    },
    {
      question: "Which of these is NOT a feature of cloud computing?",
      options: [
        "Resource pooling",
        "On-demand self-service",
        "High maintenance requirements",
        "Broad network access",
      ],
      answer: "High maintenance requirements",
    },
    {
      question: "What does virtualization allow in cloud computing?",
      options: [
        "Physical hardware to be directly accessed by users",
        "Multiple virtual machines to run on a single physical machine",
        "Faster internet speed",
        "Manual resource scaling",
      ],
      answer: "Multiple virtual machines to run on a single physical machine",
    },
    {
      question:
        "Which type of cloud computing service is used for hosting applications?",
      options: ["IaaS", "PaaS", "SaaS", "DaaS"],
      answer: "PaaS",
    },
    {
      question: "Which of the following is a challenge in cloud computing?",
      options: [
        "High initial costs",
        "Security and data privacy",
        "Limited software options",
        "Restricted hardware usage",
      ],
      answer: "Security and data privacy",
    },
    {
      question: "What does cloud elasticity mean?",
      options: [
        "Ability to expand and contract resources as needed",
        "Permanent increase in cloud resources",
        "Limited scalability",
        "Fixed computing capacity",
      ],
      answer: "Ability to expand and contract resources as needed",
    },
    {
      question:
        "Which cloud computing model is most suitable for startups with limited resources?",
      options: ["SaaS", "PaaS", "IaaS", "Hybrid Cloud"],
      answer: "SaaS",
    },
    {
      question: "What is serverless computing?",
      options: [
        "Running applications without using a server",
        "A cloud computing execution model where cloud providers manage the infrastructure",
        "A local computing environment",
        "A type of cloud storage",
      ],
      answer:
        "A cloud computing execution model where cloud providers manage the infrastructure",
    },
    {
      question: "What is the main purpose of cloud load balancing?",
      options: [
        "To store large amounts of data",
        "To distribute network traffic across multiple servers",
        "To increase server speed",
        "To enhance internet security",
      ],
      answer: "To distribute network traffic across multiple servers",
    },
    {
      question: "Which cloud computing provider offers Google Cloud Functions?",
      options: ["Amazon", "Google", "Microsoft", "IBM"],
      answer: "Google",
    },
    {
      question: "What does the term 'multi-tenancy' mean in cloud computing?",
      options: [
        "Multiple users sharing the same computing resources securely",
        "A single user having multiple cloud accounts",
        "Storing data in multiple locations",
        "Using multiple operating systems on one cloud server",
      ],
      answer: "Multiple users sharing the same computing resources securely",
    },
    {
      question:
        "Which type of cloud service allows users to develop, manage, and run applications without managing the underlying infrastructure?",
      options: ["IaaS", "PaaS", "SaaS", "FaaS"],
      answer: "PaaS",
    },
    {
      question:
        "Which cloud computing model provides end-users with applications over the internet?",
      options: ["IaaS", "PaaS", "SaaS", "DaaS"],
      answer: "SaaS",
    },
    {
      question:
        "Which cloud security measure ensures only authorized users can access cloud resources?",
      options: [
        "Firewalls",
        "Identity and Access Management (IAM)",
        "Load balancing",
        "Network redundancy",
      ],
      answer: "Identity and Access Management (IAM)",
    },
  ],
  data_science: [
    {
      question: "What is Data Science?",
      options: [
        "A branch of computer science",
        "A field that uses scientific methods to extract knowledge from data",
        "A type of artificial intelligence",
        "A database management system",
      ],
      answer:
        "A field that uses scientific methods to extract knowledge from data",
    },
    {
      question: "Which language is most commonly used for Data Science?",
      options: ["Java", "Python", "C++", "HTML"],
      answer: "Python",
    },
    {
      question: "What is the first step in a data science project?",
      options: [
        "Model training",
        "Data visualization",
        "Data collection",
        "Deploying the model",
      ],
      answer: "Data collection",
    },
    {
      question: "Which of the following is NOT a type of machine learning?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Instructed Learning",
      ],
      answer: "Instructed Learning",
    },
    {
      question: "What is the role of a data scientist?",
      options: [
        "Building websites",
        "Analyzing and interpreting complex data to aid decision-making",
        "Developing video games",
        "Managing social media accounts",
      ],
      answer: "Analyzing and interpreting complex data to aid decision-making",
    },
    {
      question:
        "Which of the following is a data visualization library in Python?",
      options: ["NumPy", "Matplotlib", "TensorFlow", "Django"],
      answer: "Matplotlib",
    },
    {
      question: "Which algorithm is used for classification problems?",
      options: [
        "K-Means Clustering",
        "Linear Regression",
        "Decision Tree",
        "Apriori",
      ],
      answer: "Decision Tree",
    },
    {
      question: "What does 'Big Data' refer to?",
      options: [
        "A large spreadsheet",
        "Extremely large datasets that require advanced tools for processing",
        "Data stored in relational databases",
        "Small structured datasets",
      ],
      answer:
        "Extremely large datasets that require advanced tools for processing",
    },
    {
      question: "Which of the following is an unsupervised learning algorithm?",
      options: [
        "Linear Regression",
        "Random Forest",
        "K-Means Clustering",
        "Logistic Regression",
      ],
      answer: "K-Means Clustering",
    },
    {
      question: "What is feature engineering?",
      options: [
        "Creating new input variables from raw data to improve model performance",
        "Testing machine learning models",
        "Cleaning the dataset",
        "Running SQL queries",
      ],
      answer:
        "Creating new input variables from raw data to improve model performance",
    },
    {
      question: "Which type of machine learning uses labeled data?",
      options: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Reinforcement Learning",
        "Self-learning AI",
      ],
      answer: "Supervised Learning",
    },
    {
      question: "What is overfitting in machine learning?",
      options: [
        "When a model performs well on training data but poorly on new data",
        "When a model is too simple",
        "When a model has too little data",
        "When a model is trained using reinforcement learning",
      ],
      answer:
        "When a model performs well on training data but poorly on new data",
    },
    {
      question: "What is a confusion matrix used for?",
      options: [
        "Calculating regression errors",
        "Evaluating the performance of a classification model",
        "Checking missing values",
        "Optimizing deep learning models",
      ],
      answer: "Evaluating the performance of a classification model",
    },
    {
      question: "What is the purpose of cross-validation?",
      options: [
        "To improve model accuracy by testing it on different subsets of data",
        "To speed up model training",
        "To clean raw data",
        "To tune hyperparameters",
      ],
      answer:
        "To improve model accuracy by testing it on different subsets of data",
    },
    {
      question: "Which of the following is a deep learning framework?",
      options: ["Pandas", "TensorFlow", "Matplotlib", "Seaborn"],
      answer: "TensorFlow",
    },
    {
      question: "What is Natural Language Processing (NLP)?",
      options: [
        "A technique to process numbers in machine learning",
        "A method for making databases faster",
        "A field of AI that focuses on human language processing",
        "A type of neural network",
      ],
      answer: "A field of AI that focuses on human language processing",
    },
    {
      question: "Which of the following is an example of supervised learning?",
      options: [
        "Clustering customers based on spending patterns",
        "Predicting house prices using past sales data",
        "Finding hidden patterns in data",
        "Analyzing stock market fluctuations without labeled data",
      ],
      answer: "Predicting house prices using past sales data",
    },
    {
      question: "What does PCA (Principal Component Analysis) do?",
      options: [
        "Increases the number of features in a dataset",
        "Reduces the dimensionality of data while retaining important information",
        "Performs classification",
        "Finds missing values in datasets",
      ],
      answer:
        "Reduces the dimensionality of data while retaining important information",
    },
    {
      question: "Which type of chart is best for showing trends over time?",
      options: ["Bar chart", "Pie chart", "Line chart", "Scatter plot"],
      answer: "Line chart",
    },
    {
      question: "Which metric is used to evaluate regression models?",
      options: [
        "Accuracy",
        "Precision",
        "Mean Squared Error (MSE)",
        "F1-score",
      ],
      answer: "Mean Squared Error (MSE)",
    },
    {
      question: "What is the goal of exploratory data analysis (EDA)?",
      options: [
        "To clean data",
        "To summarize main characteristics of a dataset",
        "To build machine learning models",
        "To remove missing values",
      ],
      answer: "To summarize main characteristics of a dataset",
    },
    {
      question: "What is an outlier in a dataset?",
      options: [
        "A data point that differs significantly from other observations",
        "A missing value",
        "A duplicated row in a dataset",
        "A categorical variable",
      ],
      answer: "A data point that differs significantly from other observations",
    },
    {
      question:
        "Which of the following techniques can be used to handle missing values?",
      options: [
        "Deleting rows with missing values",
        "Filling missing values with the mean",
        "Using predictive models to estimate missing values",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What is the main advantage of using cloud computing for data science?",
      options: [
        "Faster coding",
        "Unlimited data storage and processing power",
        "Better visualization tools",
        "Easier debugging",
      ],
      answer: "Unlimited data storage and processing power",
    },
    {
      question:
        "Which of the following is a common big data processing framework?",
      options: ["Hadoop", "Excel", "Django", "Bootstrap"],
      answer: "Hadoop",
    },
    {
      question: "What is sentiment analysis?",
      options: [
        "Analyzing numerical data in stock markets",
        "Determining the emotional tone of text data",
        "Creating graphs for data visualization",
        "Finding missing values in a dataset",
      ],
      answer: "Determining the emotional tone of text data",
    },
  ],
  networking: [
    {
      question: "What does IP stand for?",
      options: [
        "Internet Protocol",
        "Internal Process",
        "Intelligent Program",
        "Integrated Platform",
      ],
      answer: "Internet Protocol",
    },
    {
      question: "What is the purpose of a router in networking?",
      options: [
        "To connect multiple networks and direct traffic",
        "To store website data",
        "To provide antivirus protection",
        "To increase computer speed",
      ],
      answer: "To connect multiple networks and direct traffic",
    },
    {
      question: "What is a subnet mask used for?",
      options: [
        "To identify network and host portions of an IP address",
        "To encrypt data packets",
        "To detect unauthorized access",
        "To convert IP addresses to domain names",
      ],
      answer: "To identify network and host portions of an IP address",
    },
    {
      question: "Which protocol is used to send emails?",
      options: ["HTTP", "SMTP", "FTP", "DNS"],
      answer: "SMTP",
    },
    {
      question: "Which of the following is a private IP address?",
      options: ["192.168.1.1", "8.8.8.8", "172.217.14.206", "123.45.67.89"],
      answer: "192.168.1.1",
    },
    {
      question: "What does DNS stand for?",
      options: [
        "Domain Name System",
        "Data Network Service",
        "Digital Network Security",
        "Dynamic Node Setup",
      ],
      answer: "Domain Name System",
    },
    {
      question:
        "Which device operates at the Data Link Layer of the OSI model?",
      options: ["Router", "Switch", "Hub", "Firewall"],
      answer: "Switch",
    },
    {
      question: "Which protocol is used for secure web browsing?",
      options: ["HTTP", "HTTPS", "FTP", "SSH"],
      answer: "HTTPS",
    },
    {
      question: "What is the default port number for HTTP?",
      options: ["21", "53", "80", "443"],
      answer: "80",
    },
    {
      question:
        "Which layer of the OSI model deals with encryption and compression?",
      options: ["Data Link", "Transport", "Presentation", "Session"],
      answer: "Presentation",
    },
    {
      question: "What does MAC address stand for?",
      options: [
        "Media Access Control",
        "Memory Address Configuration",
        "Multiple Access Channel",
        "Modular Address Circuit",
      ],
      answer: "Media Access Control",
    },
    {
      question: "Which protocol is used for file transfers over the internet?",
      options: ["SMTP", "FTP", "DNS", "POP3"],
      answer: "FTP",
    },
    {
      question: "What is the function of a firewall in a network?",
      options: [
        "To monitor and control incoming and outgoing network traffic",
        "To physically connect computers",
        "To increase internet speed",
        "To prevent data loss",
      ],
      answer: "To monitor and control incoming and outgoing network traffic",
    },
    {
      question: "What does VPN stand for?",
      options: [
        "Virtual Private Network",
        "Verified Protocol Node",
        "Variable Processing Network",
        "Visual Processing Notation",
      ],
      answer: "Virtual Private Network",
    },
    {
      question: "Which IP version uses 128-bit addresses?",
      options: ["IPv4", "IPv6", "IPv5", "IPv3"],
      answer: "IPv6",
    },
    {
      question: "What is the purpose of ARP (Address Resolution Protocol)?",
      options: [
        "To resolve IP addresses to MAC addresses",
        "To encrypt network data",
        "To configure network firewalls",
        "To establish VPN connections",
      ],
      answer: "To resolve IP addresses to MAC addresses",
    },
    {
      question:
        "Which networking topology connects all devices to a central hub?",
      options: ["Bus", "Star", "Mesh", "Ring"],
      answer: "Star",
    },
    {
      question:
        "Which network type covers a small geographic area such as an office?",
      options: ["WAN", "LAN", "MAN", "PAN"],
      answer: "LAN",
    },
    {
      question: "What does TCP stand for?",
      options: [
        "Transmission Control Protocol",
        "Transfer Communication Process",
        "Temporary Connection Protocol",
        "Technical Computing Program",
      ],
      answer: "Transmission Control Protocol",
    },
    {
      question:
        "Which command is used to check network connectivity between two devices?",
      options: ["ping", "trace", "netstat", "connect"],
      answer: "ping",
    },
    {
      question:
        "Which protocol is used to resolve domain names to IP addresses?",
      options: ["FTP", "SMTP", "DNS", "ARP"],
      answer: "DNS",
    },
    {
      question: "What is the role of an access point in a wireless network?",
      options: [
        "To connect wired and wireless networks",
        "To store data files",
        "To create an encrypted VPN connection",
        "To assign IP addresses",
      ],
      answer: "To connect wired and wireless networks",
    },
    {
      question:
        "Which networking device works only at the Physical Layer of the OSI model?",
      options: ["Router", "Switch", "Hub", "Firewall"],
      answer: "Hub",
    },
    {
      question: "What does ICMP stand for?",
      options: [
        "Internet Control Message Protocol",
        "International Communication Management Protocol",
        "Interconnected Circuit Management Process",
        "Information Control and Management Procedure",
      ],
      answer: "Internet Control Message Protocol",
    },
    {
      question: "Which of these is a characteristic of a mesh network?",
      options: [
        "All nodes are connected to a central server",
        "Each node is connected to multiple other nodes",
        "Devices are connected in a straight line",
        "All communication goes through a single switch",
      ],
      answer: "Each node is connected to multiple other nodes",
    },
    {
      question: "Which protocol is responsible for reliable data transmission?",
      options: ["TCP", "UDP", "ICMP", "ARP"],
      answer: "TCP",
    },
    {
      question: "What is the function of a proxy server?",
      options: [
        "To act as an intermediary between clients and servers",
        "To store and forward email messages",
        "To directly connect two remote devices",
        "To manage network routing",
      ],
      answer: "To act as an intermediary between clients and servers",
    },
    {
      question: "Which network device assigns IP addresses dynamically?",
      options: ["Switch", "Router", "DHCP Server", "Firewall"],
      answer: "DHCP Server",
    },
    {
      question: "What does the netstat command display?",
      options: [
        "Network statistics and active connections",
        "Current CPU usage",
        "List of installed applications",
        "Disk usage information",
      ],
      answer: "Network statistics and active connections",
    },
  ],
};

export default function QuizSubjectPage() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);

  const questions = quizData[subject] || [];

  // Load leaderboard from localStorage when the component mounts
  useEffect(() => {
    const storedLeaderboard =
      JSON.parse(localStorage.getItem("leaderboard")) || [];
    setLeaderboard(storedLeaderboard);
  }, []);

  const handleAnswer = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);

    if (option === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setQuizCompleted(true);
    alert(`Quiz completed! Your score: ${score}/${questions.length}`);

    // Store score in the leaderboard
    const playerName = prompt("Enter your name for the leaderboard:");
    if (playerName) {
      const newLeaderboard = [...leaderboard, { name: playerName, score }];
      newLeaderboard.sort((a, b) => b.score - a.score); // Sort by highest score
      const top10 = newLeaderboard.slice(0, 10); // Keep only top 10 scores

      setLeaderboard(top10);
      localStorage.setItem("leaderboard", JSON.stringify(top10)); // Save to localStorage
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center p-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl h-32 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 my-10"
      >
        {subject.toUpperCase()} QUIZ 🎯
      </motion.h1>

      {!quizStarted ? (
        // Start Button
        <motion.button
          onClick={() => setQuizStarted(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all right-1"
        >
          Start Quiz 🚀
        </motion.button>
      ) : !quizCompleted ? (
        // Quiz Section
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            {questions[currentQuestion].question}
          </h2>

          <div className="flex flex-col space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleAnswer(option)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  answers[currentQuestion] === option
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            {/* Previous Button */}
            <motion.button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg shadow-lg transition-all ${
                currentQuestion === 0
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              Previous
            </motion.button>

            {/* Next or Submit Button */}
            {currentQuestion === questions.length - 1 ? (
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500 transition-all"
              >
                Submit Quiz 🎯
              </motion.button>
            ) : (
              <motion.button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition-all"
              >
                Next
              </motion.button>
            )}
          </div>
        </motion.div>
      ) : (
        // Quiz Completed & Leaderboard
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
            🎉 Quiz Completed!
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Your Score: <strong>{score}</strong> / {questions.length}
          </p>

          <h3 className="mt-4 text-xl font-bold text-gray-800 dark:text-white">
            🏆 Leaderboard
          </h3>
          <ul className="mt-2 space-y-2">
            {leaderboard.map((entry, index) => (
              <li
                key={index}
                className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-white"
              >
                {index + 1}. {entry.name} - {entry.score}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl flex justify-between items-center mb-6"
      >
        <motion.button
          onClick={() => navigate("/games")}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-all my-20"
        >
          <ArrowLeft size={24} />
          <span> Back to Subjects</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
