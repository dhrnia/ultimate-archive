const aiTools = [
    {
        "id": 1,
        "name": "ChatGPT",
        "description": "Advanced conversational AI model by OpenAI. Capable of generating human-like text, coding, and more.",
        "categories": [
            "Text",
            "Code",
            "Data",
            "Image"
        ],
        "pricing": "Freemium",
        "url": "https://chatgpt.com/"
    },
    {
        "id": 2,
        "name": "Claude",
        "description": "Helpful, honest, and harmless AI assistant by Anthropic. Excellent for long context windows and coding.",
        "categories": [
            "Text",
            "Code",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://claude.ai/"
    },
    {
        "id": 3,
        "name": "Gemini",
        "description": "Google's multimodal AI model, deeply integrated with Google Workspace and search.",
        "categories": [
            "Text",
            "Image",
            "Data",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://gemini.google.com/"
    },
    {
        "id": 4,
        "name": "Midjourney",
        "description": "Highly artistic text-to-image generator operating via Discord.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Subscription",
        "url": "https://www.midjourney.com/"
    },
    {
        "id": 5,
        "name": "DALL-E 3",
        "description": "OpenAI's image generation model built into ChatGPT. Great for prompt adherence.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Subscription",
        "url": "https://openai.com/dall-e-3"
    },
    {
        "id": 6,
        "name": "Stable Diffusion",
        "description": "Open-source image generation model that you can run locally or via API.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Free",
        "url": "https://stability.ai/"
    },
    {
        "id": 7,
        "name": "GitHub Copilot",
        "description": "Your AI pair programmer built right into your code editor by GitHub & OpenAI.",
        "categories": [
            "Code"
        ],
        "pricing": "Subscription",
        "url": "https://github.com/features/copilot"
    },
    {
        "id": 8,
        "name": "Cursor",
        "description": "An AI-first code editor that natively integrates advanced code generation models.",
        "categories": [
            "Code",
            "App Dev"
        ],
        "pricing": "Freemium",
        "url": "https://cursor.sh/"
    },
    {
        "id": 9,
        "name": "Perplexity AI",
        "description": "An AI search engine that provides cited conversational answers.",
        "categories": [
            "Productivity",
            "Text"
        ],
        "pricing": "Freemium",
        "url": "https://www.perplexity.ai/"
    },
    {
        "id": 10,
        "name": "Runway",
        "description": "Advanced video generation platform, including Gen-1 and Gen-2 models.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Limited Prompts",
        "url": "https://runwayml.com/"
    },
    {
        "id": 11,
        "name": "Sora",
        "description": "OpenAI's upcoming highly realistic text-to-video generation tool.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Subscription",
        "url": "https://openai.com/sora"
    },
    {
        "id": 12,
        "name": "ElevenLabs",
        "description": "Highly realistic text-to-speech AI voice generator.",
        "categories": [
            "Audio"
        ],
        "pricing": "Limited Prompts",
        "url": "https://elevenlabs.io/"
    },
    {
        "id": 13,
        "name": "Suno",
        "description": "AI that generates complete songs including vocals from text prompts.",
        "categories": [
            "Audio"
        ],
        "pricing": "Limited Prompts",
        "url": "https://suno.com/"
    },
    {
        "id": 14,
        "name": "HeyGen",
        "description": "Create realistic AI avatar videos for marketing and presentations.",
        "categories": [
            "Video",
            "Freelance"
        ],
        "pricing": "Subscription",
        "url": "https://www.heygen.com/"
    },
    {
        "id": 15,
        "name": "Notion AI",
        "description": "AI assistant inside Notion for note-taking, brainstorming, and writing.",
        "categories": [
            "Productivity",
            "Text"
        ],
        "pricing": "Subscription",
        "url": "https://www.notion.so/product/ai"
    },
    {
        "id": 16,
        "name": "Hugging Face Chat",
        "description": "Open-source alternative to ChatGPT, hosting various models like Llama.",
        "categories": [
            "Text",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://huggingface.co/chat/"
    },
    {
        "id": 17,
        "name": "Phind",
        "description": "AI search engine specifically optimized for developers and coding questions.",
        "categories": [
            "Code",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://www.phind.com/"
    },
    {
        "id": 18,
        "name": "Pika Labs",
        "description": "Fast growing idea-to-video platform.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Free",
        "url": "https://pika.art/"
    },
    {
        "id": 19,
        "name": "ChatPDF",
        "description": "Upload a PDF and ask the AI questions based directly on its contents.",
        "categories": [
            "Data",
            "Productivity"
        ],
        "pricing": "Limited Prompts",
        "url": "https://www.chatpdf.com/"
    },
    {
        "id": 20,
        "name": "Vercel v0",
        "description": "Generative UI system that builds React components from text prompts.",
        "categories": [
            "Code",
            "UI/UX",
            "App Dev"
        ],
        "pricing": "Freemium",
        "url": "https://v0.dev/"
    },
    {
        "id": 21,
        "name": "Blackbox AI",
        "description": "AI coding assistant built for fast code search and completions.",
        "categories": [
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://www.blackbox.ai/"
    },
    {
        "id": 22,
        "name": "Gamma",
        "description": "AI presentation and webpage generator.",
        "categories": [
            "Productivity",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://gamma.app/"
    },
    {
        "id": 23,
        "name": "Leonardo AI",
        "description": "Feature-rich platform for creating AI generative art and game assets.",
        "categories": [
            "Image",
            "3D Modelling",
            "Graphic Design"
        ],
        "pricing": "Limited Prompts",
        "url": "https://leonardo.ai/"
    },
    {
        "id": 24,
        "name": "Julius AI",
        "description": "AI data analyst that helps you analyze and visualize structured data like CSVs.",
        "categories": [
            "Data"
        ],
        "pricing": "Freemium",
        "url": "https://julius.ai/"
    },
    {
        "id": 25,
        "name": "Grok",
        "description": "Conversational AI by xAI, integrated into X (formerly Twitter) with real-time knowledge.",
        "categories": [
            "Text"
        ],
        "pricing": "Subscription",
        "url": "https://grok.x.ai/"
    },
    {
        "id": 26,
        "name": "Llama 3",
        "description": "Meta's highly capable open-source large language model.",
        "categories": [
            "Text",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://llama.meta.com/"
    },
    {
        "id": 27,
        "name": "AutoGPT",
        "description": "An experimental open-source attempt to make GPT-4 fully autonomous.",
        "categories": [
            "Productivity",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://github.com/Significant-Gravitas/AutoGPT"
    },
    {
        "id": 28,
        "name": "Codeium",
        "description": "Free AI code completion and chat tool similar to Copilot.",
        "categories": [
            "Code"
        ],
        "pricing": "Free",
        "url": "https://codeium.com/"
    },
    {
        "id": 29,
        "name": "Magnific AI",
        "description": "Incredible AI image upscaler and enhancer capable of adding mind-blowing details.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Subscription",
        "url": "https://magnific.ai/"
    },
    {
        "id": 30,
        "name": "Krea AI",
        "description": "Real-time AI generation that updates instantly as you draw or type.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://www.krea.ai/"
    },
    {
        "id": 31,
        "name": "Luma Dream Machine",
        "description": "High quality next-generation AI video generator capable of complex continuous scenes.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Limited Prompts",
        "url": "https://lumalabs.ai/dream-machine"
    },
    {
        "id": 32,
        "name": "Mubert",
        "description": "Generative AI music platform producing royalty-free streaming soundtracks, loops, and samples.",
        "categories": [
            "Audio"
        ],
        "pricing": "Freemium",
        "url": "https://mubert.com/"
    },
    {
        "id": 33,
        "name": "Udio",
        "description": "Creates high-fidelity AI music with deep control over song structure and instrumentation.",
        "categories": [
            "Audio"
        ],
        "pricing": "Freemium",
        "url": "https://www.udio.com/"
    },
    {
        "id": 34,
        "name": "Devin",
        "description": "The world's first fully autonomous AI software engineer, capable of taking entire projects.",
        "categories": [
            "Code",
            "App Dev",
            "Productivity"
        ],
        "pricing": "Subscription",
        "url": "https://www.cognition.ai/"
    },
    {
        "id": 35,
        "name": "Hume AI",
        "description": "Empathic Voice Interface that can understand and respond with human emotions.",
        "categories": [
            "Audio",
            "Text"
        ],
        "pricing": "Free",
        "url": "https://hume.ai/"
    },
    {
        "id": 36,
        "name": "Tome",
        "description": "Generative storytelling platform to create stunning presentations fast.",
        "categories": [
            "Productivity",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://tome.app/"
    },
    {
        "id": 37,
        "name": "Poe",
        "description": "Aggregator app by Quora lets you chat with many AI models in one place.",
        "categories": [
            "Text",
            "Image"
        ],
        "pricing": "Freemium",
        "url": "https://poe.com/"
    },
    {
        "id": 38,
        "name": "Opus Clip",
        "description": "Repurpose long talking videos into viral shorts in one click.",
        "categories": [
            "Video",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.opus.pro/"
    },
    {
        "id": 39,
        "name": "Descript",
        "description": "Edit audio and video visually by editing text. Includes AI voice cloning (Overdub).",
        "categories": [
            "Audio",
            "Video",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.descript.com/"
    },
    {
        "id": 40,
        "name": "Mistral",
        "description": "High-performance open-weight models challenging the major proprietary AIs.",
        "categories": [
            "Text",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://mistral.ai/"
    },
    {
        "id": 41,
        "name": "WebSim AI",
        "description": "Generates entire interactive websites layout and function purely based on a URL prompt.",
        "categories": [
            "Code",
            "App Dev",
            "UI/UX"
        ],
        "pricing": "Free",
        "url": "https://websim.ai/"
    },
    {
        "id": 42,
        "name": "Rose AI",
        "description": "Find, visualize, and transform massive financial and economic data simply by asking.",
        "categories": [
            "Data",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://rose.ai/"
    },
    {
        "id": 43,
        "name": "Pi by Inflection",
        "description": "A highly conversational, empathetic personal AI designed to be supportive.",
        "categories": [
            "Text"
        ],
        "pricing": "Free",
        "url": "https://pi.ai/"
    },
    {
        "id": 44,
        "name": "Ideogram",
        "description": "An AI image generator highly skilled at rendering accurate typography and text.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Free",
        "url": "https://ideogram.ai/"
    },
    {
        "id": 45,
        "name": "Figma AI",
        "description": "AI-integrated design tools built directly into Figma for UI/UX prototyping and ideation.",
        "categories": [
            "UI/UX",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://www.figma.com/ai/"
    },
    {
        "id": 46,
        "name": "Relume",
        "description": "AI site builder that generates sitemaps and wireframes in seconds, exportable to Webflow and Figma.",
        "categories": [
            "UI/UX",
            "App Dev",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://www.relume.io/"
    },
    {
        "id": 47,
        "name": "Canva Magic Studio",
        "description": "All-in-one AI design suite for graphic design, presentations, and social media.",
        "categories": [
            "Graphic Design",
            "Image",
            "Video",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://www.canva.com/magic/"
    },
    {
        "id": 48,
        "name": "Spline AI",
        "description": "Create 3D objects, animations, and textures using AI prompts right in the browser.",
        "categories": [
            "3D Modelling",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://spline.design/ai"
    },
    {
        "id": 49,
        "name": "Meshy",
        "description": "Fast 3D AI generator that turns text and images into high-quality 3D assets.",
        "categories": [
            "3D Modelling",
            "Image"
        ],
        "pricing": "Limited Prompts",
        "url": "https://www.meshy.ai/"
    },
    {
        "id": 50,
        "name": "CSM AI",
        "description": "Generates fully realized game-ready 3D models with animations from a single image or text.",
        "categories": [
            "3D Modelling",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://csm.ai/"
    },
    {
        "id": 51,
        "name": "Kaiber",
        "description": "Generative AI animation tool designed for artists to make reactive music videos and 2D/3D animations.",
        "categories": [
            "Animation",
            "Video",
            "Audio"
        ],
        "pricing": "Subscription",
        "url": "https://kaiber.ai/"
    },
    {
        "id": 52,
        "name": "DeepMotion",
        "description": "AI motion capture from video. Extract 3D animations from standard 2D videos.",
        "categories": [
            "Animation",
            "Video",
            "3D Modelling"
        ],
        "pricing": "Freemium",
        "url": "https://deepmotion.com/"
    },
    {
        "id": 53,
        "name": "Moxion",
        "description": "AI-powered creative workflows for 2D animation and storyboarding.",
        "categories": [
            "Animation",
            "UI/UX"
        ],
        "pricing": "Subscription",
        "url": "https://www.autodesk.com/products/moxion/overview"
    },
    {
        "id": 54,
        "name": "Upwork Uma",
        "description": "AI assistant designed to help freelancers write proposals, structure projects, and analyze client needs.",
        "categories": [
            "Freelance",
            "Productivity",
            "Text"
        ],
        "pricing": "Free",
        "url": "https://www.upwork.com/"
    },
    {
        "id": 55,
        "name": "TurboLearn AI",
        "description": "Helps freelance students and content creators instantly summarize video courses and lectures.",
        "categories": [
            "Freelance",
            "Productivity",
            "Audio"
        ],
        "pricing": "Freemium",
        "url": "https://www.turbolearn.ai/"
    },
    {
        "id": 56,
        "name": "Mixo",
        "description": "AI website builder perfect for freelancers looking to quickly validate a business idea with a stunning landing page.",
        "categories": [
            "Freelance",
            "Code",
            "UI/UX"
        ],
        "pricing": "Freemium",
        "url": "https://www.mixo.io/"
    },
    {
        "id": 57,
        "name": "FlutterFlow AI",
        "description": "AI-assisted low-code app builder for creating stunning cross-platform mobile apps.",
        "categories": [
            "App Dev",
            "Code",
            "UI/UX"
        ],
        "pricing": "Freemium",
        "url": "https://flutterflow.io/ai"
    },
    {
        "id": 58,
        "name": "Bravo Studio",
        "description": "Instantly turn Figma designs into native iOS and Android apps using AI.",
        "categories": [
            "App Dev",
            "UI/UX"
        ],
        "pricing": "Freemium",
        "url": "https://www.bravostudio.app/"
    },
    {
        "id": 59,
        "name": "Galileo AI",
        "description": "Generates fully editable, complex mobile UI designs directly from natural language prompts.",
        "categories": [
            "UI/UX",
            "App Dev",
            "Graphic Design"
        ],
        "pricing": "Subscription",
        "url": "https://www.usegalileo.ai/"
    },
    {
        "id": 60,
        "name": "Draftbit AI",
        "description": "Build native mobile apps visually and let AI handle the tricky logic and component generation.",
        "categories": [
            "App Dev",
            "Code",
            "UI/UX"
        ],
        "pricing": "Subscription",
        "url": "https://draftbit.com/"
    },
    {
        "id": 61,
        "name": "Bolt.new",
        "description": "Prompt, run, edit, and deploy full-stack web applications directly in your browser using AI.",
        "categories": [
            "Code",
            "App Dev",
            "UI/UX"
        ],
        "pricing": "Freemium",
        "url": "https://bolt.new/"
    },
    {
        "id": 62,
        "name": "Lovable",
        "description": "An AI coding assistant capable of instantly generating interactive full-stack applications.",
        "categories": [
            "Code",
            "App Dev",
            "UI/UX"
        ],
        "pricing": "Freemium",
        "url": "https://lovable.dev/"
    },
    {
        "id": 63,
        "name": "DeepSeek",
        "description": "Incredibly capable and efficient open-source AI models available for chat and advanced coding.",
        "categories": [
            "Text",
            "Code",
            "Data"
        ],
        "pricing": "Free",
        "url": "https://chat.deepseek.com/"
    },
    {
        "id": 64,
        "name": "Eraser AI",
        "description": "AI co-pilot for technical design and diagramming. Perfect for software architecture and wireframes.",
        "categories": [
            "Code",
            "Productivity",
            "UI/UX"
        ],
        "pricing": "Freemium",
        "url": "https://www.eraser.io/"
    },
    {
        "id": 65,
        "name": "Excalidraw AI",
        "description": "Text-to-diagram generation and UI wireframing directly on a limitless collaborative whiteboard.",
        "categories": [
            "UI/UX",
            "Productivity",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://excalidraw.com/"
    },
    {
        "id": 66,
        "name": "tldraw (Make Real)",
        "description": "Turn sketchy hand-drawn UI wireframes into functional code instantly.",
        "categories": [
            "UI/UX",
            "Code",
            "App Dev"
        ],
        "pricing": "Free",
        "url": "https://makereal.tldraw.com/"
    },
    {
        "id": 67,
        "name": "Jasper AI",
        "description": "An incredibly powerful AI enterprise copilot for marketing, brand voice, and blog post creation.",
        "categories": [
            "Text",
            "Freelance",
            "Productivity"
        ],
        "pricing": "Subscription",
        "url": "https://www.jasper.ai/"
    },
    {
        "id": 68,
        "name": "Murf AI",
        "description": "High-quality realistic text-to-speech studio, perfect for podcast intro and corporate video voiceovers.",
        "categories": [
            "Audio",
            "Video"
        ],
        "pricing": "Freemium",
        "url": "https://murf.ai/"
    },
    {
        "id": 69,
        "name": "Veed.io",
        "description": "Online video editor packed with AI tools like auto-subtitling, background noise removal, and eye contact correction.",
        "categories": [
            "Video",
            "Audio",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.veed.io/"
    },
    {
        "id": 70,
        "name": "Superhuman AI",
        "description": "The fastest email experience made faster with AI that can draft, reply, and summarize your inbox.",
        "categories": [
            "Productivity",
            "Text"
        ],
        "pricing": "Subscription",
        "url": "https://superhuman.com/"
    },
    {
        "id": 71,
        "name": "Khanmigo",
        "description": "Khan Academy's personal AI tutor that deeply guides students rather than just providing answers.",
        "categories": [
            "Education"
        ],
        "pricing": "Subscription",
        "url": "https://www.khanacademy.org/khan-labs"
    },
    {
        "id": 72,
        "name": "Socratic",
        "description": "Google's learning app that uses AI to scan math problems and provide step-by-step guidance.",
        "categories": [
            "Education"
        ],
        "pricing": "Free",
        "url": "https://socratic.org/"
    },
    {
        "id": 73,
        "name": "Duolingo Max",
        "description": "Engage in AI roleplay and get precise explanations on your language mistakes.",
        "categories": [
            "Education",
            "Text",
            "Audio"
        ],
        "pricing": "Subscription",
        "url": "https://blog.duolingo.com/duolingo-max/"
    },
    {
        "id": 74,
        "name": "Microsoft Security Copilot",
        "description": "Generative AI security solution that helps defenders catch threats and reverse-engineer malware.",
        "categories": [
            "Cybersecurity",
            "Code"
        ],
        "pricing": "Subscription",
        "url": "https://www.microsoft.com/en-us/security/business/ai-machine-learning/microsoft-security-copilot"
    },
    {
        "id": 75,
        "name": "PentestGPT",
        "description": "An AI-powered penetration testing assistant built to find vulnerabilities automatically.",
        "categories": [
            "Cybersecurity",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://github.com/GreyDGL/PentestGPT"
    },
    {
        "id": 76,
        "name": "Darktrace AI",
        "description": "Self-learning cyber defense that responds to zero-day threats in real-time autonomously.",
        "categories": [
            "Cybersecurity"
        ],
        "pricing": "Subscription",
        "url": "https://darktrace.com/"
    },
    {
        "id": 77,
        "name": "Surfer SEO",
        "description": "AI that drafts, outlines, and optimizes articles specifically to rank highly on Google.",
        "categories": [
            "Marketing",
            "Text"
        ],
        "pricing": "Subscription",
        "url": "https://surferseo.com/"
    },
    {
        "id": 78,
        "name": "Mutiny",
        "description": "Uses AI to hyper-personalize B2B webpages to visitors in real time to increase conversions.",
        "categories": [
            "Marketing",
            "Data"
        ],
        "pricing": "Subscription",
        "url": "https://www.mutinyhq.com/"
    },
    {
        "id": 79,
        "name": "MarketMuse",
        "description": "AI competitive content planning software that analyzes full topics.",
        "categories": [
            "Marketing",
            "Productivity"
        ],
        "pricing": "Subscription",
        "url": "https://www.marketmuse.com/"
    },
    {
        "id": 80,
        "name": "Inworld AI",
        "description": "Gives non-player characters (NPCs) human-like brains, voices, and contextual dialogue.",
        "categories": [
            "Game Dev",
            "Audio",
            "Text"
        ],
        "pricing": "Freemium",
        "url": "https://inworld.ai/"
    },
    {
        "id": 81,
        "name": "Scenario",
        "description": "AI trained entirely on a specific game studio's art style to generate thousands of cohesive game assets.",
        "categories": [
            "Game Dev",
            "Image",
            "3D Modelling"
        ],
        "pricing": "Freemium",
        "url": "https://www.scenario.com/"
    },
    {
        "id": 82,
        "name": "Promethean AI",
        "description": "Automatically populates 3D game environments through simple voice commands.",
        "categories": [
            "Game Dev",
            "3D Modelling",
            "Productivity"
        ],
        "pricing": "Subscription",
        "url": "https://www.prometheanai.com/"
    },
    {
        "id": 83,
        "name": "Consensus",
        "description": "An AI search engine that pulls data and answers directly from peer-reviewed scientific journals.",
        "categories": [
            "Research",
            "Text",
            "Data"
        ],
        "pricing": "Freemium",
        "url": "https://consensus.app/"
    },
    {
        "id": 84,
        "name": "Elicit",
        "description": "Automates systematic literature reviews and extracts raw data points cleanly from research PDFs.",
        "categories": [
            "Research",
            "Data"
        ],
        "pricing": "Freemium",
        "url": "https://elicit.com/"
    },
    {
        "id": 85,
        "name": "AlphaFold",
        "description": "Google DeepMind's revolutionary open AI that predicts 3D protein structures instantly.",
        "categories": [
            "Research",
            "Data"
        ],
        "pricing": "Free",
        "url": "https://alphafold.com/"
    },
    {
        "id": 86,
        "name": "Teal",
        "description": "AI resume builder and job tracker that matches your resume against specific job descriptions.",
        "categories": [
            "HR",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://www.tealhq.com/"
    },
    {
        "id": 87,
        "name": "Kickresume",
        "description": "AI heavily assists in writing compelling resumes and cover letters to beat automated ATS systems.",
        "categories": [
            "HR",
            "Text"
        ],
        "pricing": "Freemium",
        "url": "https://www.kickresume.com/"
    },
    {
        "id": 88,
        "name": "Eightfold AI",
        "description": "AI talent intelligence platform used by major enterprises to match candidates precisely.",
        "categories": [
            "HR",
            "Data"
        ],
        "pricing": "Subscription",
        "url": "https://eightfold.ai/"
    },
    {
        "id": 89,
        "name": "Photoroom",
        "description": "Automatically removes backgrounds and drops your products into gorgeous, realistic AI studio lighting.",
        "categories": [
            "Photography",
            "Image",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.photoroom.com/"
    },
    {
        "id": 90,
        "name": "Topaz Photo AI",
        "description": "Unparalleled noise reduction, sharpening, and ultra-high-resolution upscaling.",
        "categories": [
            "Photography",
            "Image"
        ],
        "pricing": "Subscription",
        "url": "https://www.topazlabs.com/topaz-photo-ai"
    },
    {
        "id": 91,
        "name": "DragGAN",
        "description": "Revolutionary AI that allows you to literally click and drag points on an image to manipulate a subject's pose or facial expression.",
        "categories": [
            "Photography",
            "Image"
        ],
        "pricing": "Free",
        "url": "https://vcai.mpi-inf.mpg.de/projects/DragGAN/"
    },
    {
        "id": 92,
        "name": "FinChat.io",
        "description": "The ChatGPT designed explicitly for finance, plotting verified stock data and tracking company KPIs safely.",
        "categories": [
            "Finance",
            "Data"
        ],
        "pricing": "Freemium",
        "url": "https://finchat.io/"
    },
    {
        "id": 93,
        "name": "AlphaSense",
        "description": "AI-powered market intelligence that parses thousands of corporate filings and earnings calls in seconds.",
        "categories": [
            "Finance",
            "Data",
            "Research"
        ],
        "pricing": "Subscription",
        "url": "https://www.alpha-sense.com/"
    },
    {
        "id": 94,
        "name": "Cleo",
        "description": "An extremely popular, humorous AI financial assistant that roasts your spending habits and helps you budget.",
        "categories": [
            "Finance",
            "Text"
        ],
        "pricing": "Freemium",
        "url": "https://web.meetcleo.com/"
    },
    {
        "id": 95,
        "name": "Lalal.ai",
        "description": "The industry standard AI stem splitter that perfectly separates vocals, drums, and bass from a single audio track.",
        "categories": [
            "Audio",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.lalal.ai/"
    },
    {
        "id": 96,
        "name": "Moises.ai",
        "description": "The ultimate app for musicians that isolates tracks, magically detects chords, and alters pitch/speed.",
        "categories": [
            "Audio",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://moises.ai/"
    },
    {
        "id": 97,
        "name": "Boomy",
        "description": "Generates complete, original songs in seconds that you can actually instantly upload to Spotify and monetize.",
        "categories": [
            "Audio"
        ],
        "pricing": "Freemium",
        "url": "https://boomy.com/"
    },
    {
        "id": 98,
        "name": "Kling AI",
        "description": "A highly realistic text-to-video generation model that is renowned for simulating real-world physics perfectly.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Limited Prompts",
        "url": "https://kling.kuaishou.com/"
    },
    {
        "id": 99,
        "name": "Haiper",
        "description": "A hugely capable free-to-try video generation model excelling in vivid, surreal generations.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://haiper.ai/"
    },
    {
        "id": 100,
        "name": "Viggle",
        "description": "An insane AI character animation tool where you can swap people in dancing videos and the AI seamlessly matches the movement.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Free",
        "url": "https://viggle.ai/"
    },
    {
        "id": 101,
        "name": "Arc Search",
        "description": "A mobile browser where instead of giving you links, the AI reads 6 webpages simultaneously and builds a custom website just for your answer.",
        "categories": [
            "Productivity",
            "Text",
            "Data"
        ],
        "pricing": "Free",
        "url": "https://arc.net/blog/arc-search"
    },
    {
        "id": 102,
        "name": "Harpa AI",
        "description": "A powerful browser automation agent that can summarize YouTube videos, track price drops on Amazon, and reply to emails.",
        "categories": [
            "Productivity",
            "Freelance",
            "Video"
        ],
        "pricing": "Freemium",
        "url": "https://harpa.ai/"
    },
    {
        "id": 103,
        "name": "Google Interview Warmup",
        "description": "A quick way to practice answering interview questions and get transcribed insights on your answers.",
        "categories": [
            "HR",
            "Education"
        ],
        "pricing": "Free",
        "url": "https://grow.google/certificates/interview-warmup/"
    },
    {
        "id": 104,
        "name": "Yoodli",
        "description": "AI-powered speech coaching that listens to you speak and provides real-time feedback on filler words, pacing, and eye contact for interviews.",
        "categories": [
            "HR",
            "Audio",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://app.yoodli.ai/"
    },
    {
        "id": 105,
        "name": "Huru",
        "description": "AI interview preparation app that conducts simulated mock interviews targeting hundreds of different job titles.",
        "categories": [
            "HR",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://www.huru.ai/"
    },
    {
        "id": 106,
        "name": "GrammarlyGO",
        "description": "On-demand, context-aware AI writing assistant natively integrated directly into your text fields and documents.",
        "categories": [
            "Text",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://www.grammarly.com/ai"
    },
    {
        "id": 107,
        "name": "Copy.ai",
        "description": "GTM AI platform that automates sales and marketing workflows from drafting copy to entire outbound campaigns.",
        "categories": [
            "Marketing",
            "Text",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.copy.ai/"
    },
    {
        "id": 108,
        "name": "Writesonic",
        "description": "Generative AI platform designed heavily around writing factual, SEO-optimized articles and marketing material.",
        "categories": [
            "Marketing",
            "Text",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://writesonic.com/"
    },
    {
        "id": 109,
        "name": "Character.ai",
        "description": "Explore and interact with millions of user-created AI personalities spanning from historical figures to fictional companions.",
        "categories": [
            "Text",
            "Game Dev"
        ],
        "pricing": "Freemium",
        "url": "https://character.ai/"
    },
    {
        "id": 110,
        "name": "Taskade",
        "description": "AI-powered collaborative workspace that builds out bulleted lists, mind maps, and project workflows instantly.",
        "categories": [
            "Productivity",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.taskade.com/"
    },
    {
        "id": 111,
        "name": "Adobe Firefly",
        "description": "Commercially safe generative AI models tightly integrated into Photoshop for generative fill and text-to-image workflows.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://firefly.adobe.com/"
    },
    {
        "id": 112,
        "name": "Kittl",
        "description": "Intuitive graphic design AI platform heavily optimized for merchandise, typography, and print-on-demand.",
        "categories": [
            "Graphic Design",
            "Image",
            "Freelance"
        ],
        "pricing": "Freemium",
        "url": "https://www.kittl.com/"
    },
    {
        "id": 113,
        "name": "Whisper",
        "description": "OpenAI's exceptionally robust, open-source automatic speech recognition (ASR) system.",
        "categories": [
            "Audio",
            "Data",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://github.com/openai/whisper"
    },
    {
        "id": 114,
        "name": "Tabnine",
        "description": "A secure, privacy-focused AI code assistant that learns your coding patterns and speeds up development.",
        "categories": [
            "Code",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://www.tabnine.com/"
    },
    {
        "name": "Replit Agent",
        "description": "Autonomous software building assistant that plans, codes, debugs, and deploys full-stack apps.",
        "categories": [
            "Code",
            "Productivity",
            "App Dev"
        ],
        "pricing": "Subscription",
        "url": "https://replit.com",
        "id": 115
    },
    {
        "name": "Continue.dev",
        "description": "Leading open-source AI code assistant for VS Code and JetBrains that connects to any LLM.",
        "categories": [
            "Code"
        ],
        "pricing": "Free",
        "url": "https://continue.dev",
        "id": 116
    },
    {
        "name": "Aider",
        "description": "Command-line AI pair programmer that edits code in your local git repository.",
        "categories": [
            "Code"
        ],
        "pricing": "Free",
        "url": "https://aider.chat",
        "id": 117
    },
    {
        "name": "Sourcegraph Cody",
        "description": "Context-aware AI coding assistant for enterprise codebases using entire repo search.",
        "categories": [
            "Code",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://sourcegraph.com/cody",
        "id": 118
    },
    {
        "name": "Mintlify",
        "description": "AI-powered automated code documentation platform that generates beautiful dev docs.",
        "categories": [
            "Code",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://mintlify.com",
        "id": 119
    },
    {
        "name": "Qodo",
        "description": "AI code integrity platform focusing on unit testing, pull request reviews, and code verification.",
        "categories": [
            "Code",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://qodo.ai",
        "id": 120
    },
    {
        "name": "Supermaven",
        "description": "Ultra-fast code completion engine featuring a 1-million-token context window.",
        "categories": [
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://supermaven.com",
        "id": 121
    },
    {
        "name": "Sweep AI",
        "description": "AI junior developer that turns GitHub bug reports and feature requests directly into pull requests.",
        "categories": [
            "Code",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://sweep.dev",
        "id": 122
    },
    {
        "name": "Augment Code",
        "description": "High-performance AI developer platform with deep understanding of massive codebases.",
        "categories": [
            "Code"
        ],
        "pricing": "Subscription",
        "url": "https://augmentcode.com",
        "id": 123
    },
    {
        "name": "Pieces for Developers",
        "description": "On-device contextual AI snippet manager and workflow assistant for programmers.",
        "categories": [
            "Code",
            "Productivity"
        ],
        "pricing": "Free",
        "url": "https://pieces.app",
        "id": 124
    },
    {
        "name": "Tabby",
        "description": "Self-hosted, open-source alternative to GitHub Copilot with full privacy and on-prem deployment.",
        "categories": [
            "Code"
        ],
        "pricing": "Free",
        "url": "https://tabby.tabbyml.com",
        "id": 125
    },
    {
        "name": "Flux.1",
        "description": "State-of-the-art open-weights image generation model by Black Forest Labs with incredible prompt adherence.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Free",
        "url": "https://blackforestlabs.ai",
        "id": 126
    },
    {
        "name": "Recraft.ai",
        "description": "Infinite canvas generative design tool creating vector graphics, 3D icons, and brand illustrations.",
        "categories": [
            "Graphic Design",
            "Image",
            "UI/UX"
        ],
        "pricing": "Freemium",
        "url": "https://recraft.ai",
        "id": 127
    },
    {
        "name": "Playground AI",
        "description": "Online AI image generator and creative canvas editor with mixed styling presets.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://playground.com",
        "id": 128
    },
    {
        "name": "Clipdrop",
        "description": "Suite of AI photo editing tools for background removal, relighting, upscaling, and object replacement.",
        "categories": [
            "Photography",
            "Graphic Design",
            "Image"
        ],
        "pricing": "Freemium",
        "url": "https://clipdrop.co",
        "id": 129
    },
    {
        "name": "Vectorizer.ai",
        "description": "Deep learning vectorizer that converts raster PNG and JPEG images into clean, editable SVG vectors.",
        "categories": [
            "Graphic Design",
            "Image"
        ],
        "pricing": "Subscription",
        "url": "https://vectorizer.ai",
        "id": 130
    },
    {
        "name": "Freepik Pikaso",
        "description": "Real-time AI sketch-to-image generator that renders illustrations as you draw.",
        "categories": [
            "Graphic Design",
            "Image"
        ],
        "pricing": "Freemium",
        "url": "https://freepik.com/pikaso",
        "id": 131
    },
    {
        "name": "Tensor.art",
        "description": "Free online AI image generator and model hosting platform for creators.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://tensor.art",
        "id": 132
    },
    {
        "name": "Civitai",
        "description": "Open-source ecosystem and hub for downloading and exploring AI image models and LoRAs.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Free",
        "url": "https://civitai.com",
        "id": 133
    },
    {
        "name": "Artbreeder",
        "description": "Generative art platform that blends images and genetic portraits to create characters and landscapes.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://artbreeder.com",
        "id": 134
    },
    {
        "name": "Stylar AI",
        "description": "Controllable AI image composition tool with predefined art styles and layered object insertion.",
        "categories": [
            "Graphic Design",
            "Image"
        ],
        "pricing": "Freemium",
        "url": "https://stylar.ai",
        "id": 135
    },
    {
        "name": "SeaArt AI",
        "description": "Versatile AI digital art studio equipped with rich model libraries, prompt expansion, and painting tools.",
        "categories": [
            "Image",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://seaart.ai",
        "id": 136
    },
    {
        "name": "Vidu AI",
        "description": "High-speed generative video foundation model generating realistic 1080p dynamic scenes.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://vidu.studio",
        "id": 137
    },
    {
        "name": "Hailuo AI",
        "description": "Minimax video foundation model renowned for cinematic camera moves and realistic physics.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://hailuoai.video",
        "id": 138
    },
    {
        "name": "Hedra",
        "description": "Character-1 video foundation model creating expressive, controllable talking human avatars with custom audio.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://hedra.com",
        "id": 139
    },
    {
        "name": "Synthesia",
        "description": "AI video generation platform converting text scripts into presentations with realistic human avatars.",
        "categories": [
            "Video",
            "Marketing"
        ],
        "pricing": "Subscription",
        "url": "https://synthesia.io",
        "id": 140
    },
    {
        "name": "InVideo AI",
        "description": "Generative text-to-video tool that scripts, voices, captions, and edits entire videos from a single prompt.",
        "categories": [
            "Video",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://invideo.io",
        "id": 141
    },
    {
        "name": "Captions.ai",
        "description": "Full-service AI video studio for creators featuring AI voice dubbing, auto-captions, and eye contact correction.",
        "categories": [
            "Video",
            "Marketing"
        ],
        "pricing": "Subscription",
        "url": "https://captions.ai",
        "id": 142
    },
    {
        "name": "Fliki",
        "description": "Text to video generator that turns blog posts, scripts, and tweets into videos with lifelike AI voices.",
        "categories": [
            "Video",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://fliki.ai",
        "id": 143
    },
    {
        "name": "DeepBrain AI",
        "description": "Photorealistic AI avatar video generator designed for training videos, news, and presentations.",
        "categories": [
            "Video",
            "Education"
        ],
        "pricing": "Subscription",
        "url": "https://deepbrain.io",
        "id": 144
    },
    {
        "name": "Wonder Dynamics",
        "description": "AI tool that automatically animates, lights, and composites 3D characters into live-action video scenes.",
        "categories": [
            "Video",
            "Animation",
            "3D Modelling"
        ],
        "pricing": "Subscription",
        "url": "https://wonderdynamics.com",
        "id": 145
    },
    {
        "name": "Submagic",
        "description": "AI-powered captioning and B-roll video generator designed for viral TikToks and YouTube Shorts.",
        "categories": [
            "Video",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://submagic.co",
        "id": 146
    },
    {
        "name": "Morph Studio",
        "description": "AI storyboard-to-video production studio for generating cinematic sequences shot by shot.",
        "categories": [
            "Video",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://morphstudio.com",
        "id": 147
    },
    {
        "name": "Fish Audio",
        "description": "Lightning-fast voice cloning and multilingual speech synthesis platform built for developers.",
        "categories": [
            "Audio"
        ],
        "pricing": "Freemium",
        "url": "https://fish.audio",
        "id": 148
    },
    {
        "name": "Cartesia",
        "description": "Ultra-low-latency real-time voice intelligence engine powering conversational voice bots.",
        "categories": [
            "Audio",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://cartesia.ai",
        "id": 149
    },
    {
        "name": "Play.ht",
        "description": "Generative text-to-speech platform with 900+ natural voices and real-time voice cloning.",
        "categories": [
            "Audio"
        ],
        "pricing": "Freemium",
        "url": "https://play.ht",
        "id": 150
    },
    {
        "name": "Speechify",
        "description": "AI text-to-speech reading assistant that reads books, PDFs, and web pages out loud in natural voices.",
        "categories": [
            "Audio",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://speechify.com",
        "id": 151
    },
    {
        "name": "AudioCraft",
        "description": "Open-source PyTorch library by Meta for generative audio and music models (MusicGen and AudioGen).",
        "categories": [
            "Audio",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://audiocraft.metademolab.com",
        "id": 152
    },
    {
        "name": "Beatoven.ai",
        "description": "Royalty-free background music generator tailored for video creators and podcast editors.",
        "categories": [
            "Audio",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://beatoven.ai",
        "id": 153
    },
    {
        "name": "Soundraw",
        "description": "Customizable AI music generation software allowing creators to adjust tempo, moods, and instruments.",
        "categories": [
            "Audio"
        ],
        "pricing": "Freemium",
        "url": "https://soundraw.io",
        "id": 154
    },
    {
        "name": "Cleanvoice AI",
        "description": "AI audio editor that removes filler sounds, mouth clicks, stuttering, and background noise from podcasts.",
        "categories": [
            "Audio",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://cleanvoice.ai",
        "id": 155
    },
    {
        "name": "Resemble AI",
        "description": "Enterprise generative voice cloning platform featuring real-time speech-to-speech and deepfake detection.",
        "categories": [
            "Audio",
            "Cybersecurity"
        ],
        "pricing": "Subscription",
        "url": "https://resemble.ai",
        "id": 156
    },
    {
        "name": "Voicemod",
        "description": "Real-time AI voice changer, soundboard, and avatar voice transformer for streaming and gaming.",
        "categories": [
            "Audio",
            "Game Dev"
        ],
        "pricing": "Freemium",
        "url": "https://voicemod.net",
        "id": 157
    },
    {
        "name": "Granola",
        "description": "AI-assisted meeting notepad that combines your rough typed notes with transcribed conversations.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://granola.ai",
        "id": 158
    },
    {
        "name": "Otter.ai",
        "description": "AI meeting assistant that records audio, writes notes, captures slides, and generates summary takeaways.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://otter.ai",
        "id": 159
    },
    {
        "name": "Fireflies.ai",
        "description": "AI note-taker that transcribes and analyzes voice conversations across Zoom, Teams, and Google Meet.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://fireflies.ai",
        "id": 160
    },
    {
        "name": "Limitless AI",
        "description": "Personalized memory assistant (formerly Rewind) that captures meetings and conversations you have had.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://limitless.ai",
        "id": 161
    },
    {
        "name": "Readwise Reader",
        "description": "Read-it-later app featuring Ghostreader AI for summarizing, explaining, and testing your retention.",
        "categories": [
            "Productivity",
            "Education"
        ],
        "pricing": "Subscription",
        "url": "https://readwise.io/read",
        "id": 162
    },
    {
        "name": "AudioPen",
        "description": "Dictation tool that listens to your rambling voice notes and converts them into structured, clear text.",
        "categories": [
            "Productivity",
            "Text"
        ],
        "pricing": "Freemium",
        "url": "https://audiopen.ai",
        "id": 163
    },
    {
        "name": "Fathom",
        "description": "Free AI meeting assistant that records, transcribes, and highlights key moments during video calls.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Free",
        "url": "https://fathom.video",
        "id": 164
    },
    {
        "name": "Mem.ai",
        "description": "Self-organizing digital notebook that automatically connects related ideas and notes using AI.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://mem.ai",
        "id": 165
    },
    {
        "name": "Fabric.so",
        "description": "Smart workspace that organizes your bookmarks, documents, and notes into an associative knowledge graph.",
        "categories": [
            "Productivity",
            "Data"
        ],
        "pricing": "Freemium",
        "url": "https://fabric.so",
        "id": 166
    },
    {
        "name": "Saner.ai",
        "description": "Clean AI notepad and task manager built for deep thinkers and fast context switching.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://saner.ai",
        "id": 167
    },
    {
        "name": "Reflect Notes",
        "description": "Fast networked note-taking app with built-in GPT-4 assistant, voice transcription, and calendar sync.",
        "categories": [
            "Productivity"
        ],
        "pricing": "Subscription",
        "url": "https://reflect.app",
        "id": 168
    },
    {
        "name": "Raycast AI",
        "description": "Blazing fast Mac launcher supercharged with system-wide AI actions, prompts, and code generation.",
        "categories": [
            "Productivity",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://raycast.com",
        "id": 169
    },
    {
        "name": "Sloth AI",
        "description": "Framework to chain AI tasks together into automated endpoints and data enrichment pipelines.",
        "categories": [
            "Productivity",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://slothai.co",
        "id": 170
    },
    {
        "name": "Scite.ai",
        "description": "Award-winning citation platform showing if scientific claims have been supported or contrasted by literature.",
        "categories": [
            "Research",
            "Education"
        ],
        "pricing": "Subscription",
        "url": "https://scite.ai",
        "id": 171
    },
    {
        "name": "Semantic Scholar",
        "description": "Free AI-powered academic discovery engine created by the Allen Institute for AI.",
        "categories": [
            "Research",
            "Education"
        ],
        "pricing": "Free",
        "url": "https://semanticscholar.org",
        "id": 172
    },
    {
        "name": "Connected Papers",
        "description": "Visual citation mapping tool that surfaces related academic papers in an interactive graph.",
        "categories": [
            "Research",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://connectedpapers.com",
        "id": 173
    },
    {
        "name": "ResearchRabbit",
        "description": "Discovery app for academic papers that maps citation networks and authors like music playlists.",
        "categories": [
            "Research",
            "Education"
        ],
        "pricing": "Free",
        "url": "https://researchrabbit.ai",
        "id": 174
    },
    {
        "name": "SciSpace",
        "description": "Research platform that breaks down complex scientific papers with inline AI explanations and citation search.",
        "categories": [
            "Research",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://scispace.com",
        "id": 175
    },
    {
        "name": "NotebookLM",
        "description": "Google AI notebook that grounds language model reasoning directly in your uploaded source documents.",
        "categories": [
            "Research",
            "Productivity",
            "Education"
        ],
        "pricing": "Free",
        "url": "https://notebooklm.google",
        "id": 176
    },
    {
        "name": "OpenRead",
        "description": "Interactive AI reading platform that breaks down scientific preprints and technical whitepapers.",
        "categories": [
            "Research",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://openread.academy",
        "id": 177
    },
    {
        "name": "Scholarcy",
        "description": "Automated study tool that turns dense academic research and books into bite-sized summary flashcards.",
        "categories": [
            "Research",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://scholarcy.com",
        "id": 178
    },
    {
        "name": "Jenni AI",
        "description": "AI research and writing assistant that offers in-text citations, paraphrase checks, and academic suggestions.",
        "categories": [
            "Research",
            "Text",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://jenni.ai",
        "id": 179
    },
    {
        "name": "Cohere Coral",
        "description": "Enterprise conversational assistant powered by Command R+ with verifiable citations from company data.",
        "categories": [
            "Text",
            "Productivity"
        ],
        "pricing": "Subscription",
        "url": "https://cohere.com",
        "id": 180
    },
    {
        "name": "Jan.ai",
        "description": "Open-source local alternative to ChatGPT that runs on your computer 100% offline with complete privacy.",
        "categories": [
            "Text",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://jan.ai",
        "id": 181
    },
    {
        "name": "LM Studio",
        "description": "Desktop application to discover, download, and chat with local open-weight LLMs without cloud servers.",
        "categories": [
            "Text",
            "Code"
        ],
        "pricing": "Free",
        "url": "https://lmstudio.ai",
        "id": 182
    },
    {
        "name": "Ollama",
        "description": "CLI tool and API server to get up and running with Llama 3, Mistral, and other local models easily.",
        "categories": [
            "Code",
            "Text"
        ],
        "pricing": "Free",
        "url": "https://ollama.com",
        "id": 183
    },
    {
        "name": "Open WebUI",
        "description": "Extensible, self-hosted web user interface for managing and chatting with Ollama and OpenAI-compatible models.",
        "categories": [
            "Code",
            "Text"
        ],
        "pricing": "Free",
        "url": "https://openwebui.com",
        "id": 184
    },
    {
        "name": "TypingMind",
        "description": "Advanced web UI for interacting with ChatGPT, Claude, and Gemini with web search, plugins, and AI characters.",
        "categories": [
            "Text",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://typingmind.com",
        "id": 185
    },
    {
        "name": "Sudowrite",
        "description": "Creative writing companion designed specifically for fiction writers, novelists, and worldbuilders.",
        "categories": [
            "Text"
        ],
        "pricing": "Subscription",
        "url": "https://sudowrite.com",
        "id": 186
    },
    {
        "name": "QuillBot",
        "description": "AI paraphrasing tool, grammar checker, and citation generator that helps polish written prose.",
        "categories": [
            "Text",
            "Education"
        ],
        "pricing": "Freemium",
        "url": "https://quillbot.com",
        "id": 187
    },
    {
        "name": "Wordtune",
        "description": "Generative writing assistant that offers multiple rephrasing options, tone adjustments, and summaries.",
        "categories": [
            "Text",
            "Productivity"
        ],
        "pricing": "Freemium",
        "url": "https://wordtune.com",
        "id": 188
    },
    {
        "name": "Rytr",
        "description": "Budget-friendly AI writing assistant that drafts emails, blogs, ad copy, and social media posts.",
        "categories": [
            "Text",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://rytr.me",
        "id": 189
    },
    {
        "name": "Anyword",
        "description": "Performance-driven marketing AI platform that scores and optimizes copy based on expected conversions.",
        "categories": [
            "Text",
            "Marketing"
        ],
        "pricing": "Subscription",
        "url": "https://anyword.com",
        "id": 190
    },
    {
        "name": "Uizard",
        "description": "AI-powered UI design tool that turns hand-drawn sketches and text prompts into clickable app prototypes.",
        "categories": [
            "UI/UX",
            "App Dev",
            "Graphic Design"
        ],
        "pricing": "Freemium",
        "url": "https://uizard.io",
        "id": 191
    },
    {
        "name": "Visily",
        "description": "Rapid UI design platform that uses AI to convert screenshots and rough drafts into clean editable mockups.",
        "categories": [
            "UI/UX",
            "Productivity"
        ],
        "pricing": "Free",
        "url": "https://visily.ai",
        "id": 192
    },
    {
        "name": "Creatie",
        "description": "Modern collaborative UI design tool with built-in AI for style guide generation, icons, and layout magic.",
        "categories": [
            "UI/UX",
            "Graphic Design"
        ],
        "pricing": "Free",
        "url": "https://creatie.ai",
        "id": 193
    },
    {
        "name": "Marblism",
        "description": "AI web app generation platform that crafts full-stack boilerplate code with frontend, backend, and database.",
        "categories": [
            "App Dev",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://marblism.com",
        "id": 194
    },
    {
        "name": "Locofy.ai",
        "description": "Design-to-code tool that turns Figma prototypes into production-ready React, React Native, and Flutter code.",
        "categories": [
            "App Dev",
            "UI/UX",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://locofy.ai",
        "id": 195
    },
    {
        "name": "Webflow AI",
        "description": "Native generative design and copywriting tools built directly into the Webflow visual site builder.",
        "categories": [
            "UI/UX",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://webflow.com/ai",
        "id": 196
    },
    {
        "name": "Framer AI",
        "description": "Generate, style, and publish high-performance landing pages and portfolios instantly from text prompts.",
        "categories": [
            "UI/UX",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://framer.com",
        "id": 197
    },
    {
        "name": "Durable",
        "description": "AI website builder and business launcher that generates an entire small business website with images and copy in 30 seconds.",
        "categories": [
            "Freelance",
            "Marketing"
        ],
        "pricing": "Freemium",
        "url": "https://durable.co",
        "id": 198
    },
    {
        "name": "Tripo AI",
        "description": "Fast generative 3D modeling tool that produces textured 3D meshes from text prompts or single images.",
        "categories": [
            "3D Modelling",
            "Game Dev"
        ],
        "pricing": "Freemium",
        "url": "https://tripo3d.ai",
        "id": 199
    },
    {
        "name": "Rodin 3D",
        "description": "Deemos generative foundation model producing ultra-detailed 3D digital avatars and sculpted game assets.",
        "categories": [
            "3D Modelling",
            "Game Dev"
        ],
        "pricing": "Freemium",
        "url": "https://hyperhuman.deemos.com/rodin",
        "id": 200
    },
    {
        "name": "Luma Genie",
        "description": "Generative 3D creation platform that turns words into textured 3D objects with Quad remeshing.",
        "categories": [
            "3D Modelling",
            "Game Dev"
        ],
        "pricing": "Free",
        "url": "https://lumalabs.ai/genie",
        "id": 201
    },
    {
        "name": "Sloyd",
        "description": "3D game asset generator that uses generative AI and parametric sliders to create real-time optimized props.",
        "categories": [
            "3D Modelling",
            "Game Dev"
        ],
        "pricing": "Freemium",
        "url": "https://sloyd.ai",
        "id": 202
    },
    {
        "name": "3DFY.ai",
        "description": "AI solution for high-volume 3D model generation for games, AR, and e-commerce product catalogs.",
        "categories": [
            "3D Modelling",
            "Game Dev"
        ],
        "pricing": "Freemium",
        "url": "https://3dfy.ai",
        "id": 203
    },
    {
        "name": "Masterpiece Studio",
        "description": "VR and browser 3D generative suite that creates, rigs, skins, and animates 3D models using AI.",
        "categories": [
            "3D Modelling",
            "Animation"
        ],
        "pricing": "Freemium",
        "url": "https://masterpiecestudio.com",
        "id": 204
    },
    {
        "name": "Rows AI",
        "description": "Next-generation spreadsheet platform featuring AI data extraction, formula builders, and web scraping.",
        "categories": [
            "Data",
            "Finance"
        ],
        "pricing": "Freemium",
        "url": "https://rows.com",
        "id": 205
    },
    {
        "name": "Hex Magic",
        "description": "Collaborative data science notebook with AI code generation for SQL, Python, and automated chart building.",
        "categories": [
            "Data",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://hex.tech",
        "id": 206
    },
    {
        "name": "Akkio",
        "description": "Generative analytics and predictive machine learning tool designed for non-technical business teams.",
        "categories": [
            "Data",
            "Finance"
        ],
        "pricing": "Subscription",
        "url": "https://akkio.com",
        "id": 207
    },
    {
        "name": "Polymer",
        "description": "Business intelligence tool that uses AI to transform raw spreadsheets into interactive visual dashboards.",
        "categories": [
            "Data",
            "Finance"
        ],
        "pricing": "Subscription",
        "url": "https://polymersearch.com",
        "id": 208
    },
    {
        "name": "Finpilot",
        "description": "AI copilot for financial analysts that reads SEC filings, writes memos, and audits financial statements.",
        "categories": [
            "Finance",
            "Data"
        ],
        "pricing": "Subscription",
        "url": "https://finpilot.ai",
        "id": 209
    },
    {
        "name": "Finta",
        "description": "Automated personal and business financial sync that connects bank transactions into Notion and Airtable.",
        "categories": [
            "Finance",
            "Productivity"
        ],
        "pricing": "Subscription",
        "url": "https://finta.com",
        "id": 210
    },
    {
        "name": "Snyk Code",
        "description": "Real-time AI-powered static application security testing (SAST) tool that detects code vulnerabilities.",
        "categories": [
            "Cybersecurity",
            "Code"
        ],
        "pricing": "Freemium",
        "url": "https://snyk.io",
        "id": 211
    },
    {
        "name": "Deep Instinct",
        "description": "Deep learning cybersecurity platform that prevents unknown malware and zero-day attacks before execution.",
        "categories": [
            "Cybersecurity"
        ],
        "pricing": "Subscription",
        "url": "https://deepinstinct.com",
        "id": 212
    },
    {
        "name": "Talent500",
        "description": "AI-driven talent discovery and workforce management platform for remote engineering teams.",
        "categories": [
            "HR",
            "Freelance"
        ],
        "pricing": "Subscription",
        "url": "https://talent500.co",
        "id": 213
    },
    {
        "name": "Textio",
        "description": "Inclusive recruiting AI platform that optimizes job descriptions and performance evaluations for equity.",
        "categories": [
            "HR",
            "Text"
        ],
        "pricing": "Subscription",
        "url": "https://textio.com",
        "id": 214
    }
];
