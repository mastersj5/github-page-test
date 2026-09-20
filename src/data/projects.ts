export type Category = 'all' | 'active' | 'systems' | 'web' | 'ai' | 'games' | 'ideas';

export interface Project {
    id: string;
    title: string;
    category: Category[];
    description: string;
    status: string;
    tech: string[];
    repoUrl?: string;
    liveUrl?: string;
    accent?: 'blue' | 'maroon';
}

export const projects: Project[] = [
    {
        id: 'iceberg-exchange',
        title: 'Iceberg – Financial Exchange',
        category: ['systems', 'web'],
        description: 'A robust, deterministic trading platform built for speed and auditability. Features an order book matching engine, secure client access, and transaction verification.',
        status: 'Flagship',
        tech: ['C++', 'TypeScript', 'WebSockets', 'Financial Systems'],
        repoUrl: 'https://github.com/mastersj5/fin-exch-documentation',
        accent: 'maroon'
    },
    {
        id: 'space-invaders-rust',
        title: 'Space Invaders Engine',
        category: ['systems', 'games'],
        description: 'High-performance arcade recreation written in Rust exploring systems programming, memory safety, sprite rendering, and game loops.',
        status: 'Completed',
        tech: ['Rust', 'Cargo', 'Game Loops', 'Systems'],
        repoUrl: 'https://github.com/mastersj5/space-invaders',
        accent: 'maroon'
    },
    {
        id: 'pong-ai-neon',
        title: 'Pong AI Test: Neon Edition',
        category: ['web', 'games'],
        description: 'A 2026 synthwave modernization of the classic Pong game built with JavaScript and Canvas, featuring AI vs. AI autoplay and reactive particle dynamics.',
        status: 'Live Demo',
        tech: ['JavaScript', 'HTML5 Canvas', 'Game AI', 'CSS Glow'],
        repoUrl: 'https://github.com/mastersj5/pong-ai-test',
        liveUrl: 'https://mastersj5.github.io/projects/pong_game/',
        accent: 'blue'
    },
    {
        id: 'fake-news-detector',
        title: 'Neural Fake News Classifier',
        category: ['ai'],
        description: 'Natural language processing classifier utilizing a TensorFlow neural network to analyze linguistic cues and flag misleading articles with high accuracy.',
        status: 'Research',
        tech: ['Python', 'TensorFlow', 'NLP', 'Jupyter', 'Scikit-Learn'],
        repoUrl: 'https://github.com/mastersj5/fake-news-detection',
        accent: 'blue'
    },
    {
        id: 'react-job-board',
        title: 'RapidAPI Job Board Engine',
        category: ['web'],
        description: 'Aggregates multi-platform tech job listings via RapidAPI JSearch with dynamic filtering, salary parsing, and responsive job details.',
        status: 'Completed',
        tech: ['React', 'RapidAPI', 'JavaScript', 'REST APIs'],
        repoUrl: 'https://github.com/mastersj5/react-job-board',
        accent: 'blue'
    },
    {
        id: 'pirate-software-jam',
        title: 'Pirate Software Game Jam',
        category: ['games'],
        description: 'Rapidly prototyped game submission developed during the Summer 2024 Pirate Software Game Jam under strict theme constraints and tight deadlines.',
        status: 'Jam Entry',
        tech: ['Game Dev', 'Mechanics Design', 'Iterative Prototyping'],
        repoUrl: 'https://github.com/mastersj5/GameJam',
        accent: 'maroon'
    },
    {
        id: 'svelte5-portfolio',
        title: 'Svelte 5 Portfolio & Lab',
        category: ['web', 'systems'],
        description: 'The next generation of mastersj5.github.io. Built with Svelte 5 runes, Vite, and GitHub Actions CI/CD to replace the legacy Jekyll theme.',
        status: 'Active Lab',
        tech: ['Svelte 5', 'TypeScript', 'Vite 8', 'GitHub Actions'],
        repoUrl: 'https://github.com/mastersj5/github-page-test',
        accent: 'blue'
    }
]