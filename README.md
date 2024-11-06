#Initial Set up

The application is written in Javascript using the following items:

1. Langchain
2. Ollma Mistral AI

Here are the steps for project set up

1. Download and install Ollama
2. Pull Mistral locally:
   ollama pull mistral
3. Start the Ollama Server:
   ollama serve

Set up for the application

1. Create an application folder if you are starting from fresh
2. Install langchain's community version
   npm install --save langchain @langchain/community cheerio
3. Install the dotenv package to use environment variables
   npm install dotenv
4. Set up your environment variables. In this application we use LangSmith to view the LLM outputs. To use Langsmith, you will need to install dependencies
   npm install -S langchain

Set up your .env file with the variables from LangSmith

5. Install the following packages:
   npm install cheerio
   npm install langchain
   npm install @langchain/community
   npm install @langchain/ollama

6. Pull the embedding model
   ollama pull mxbai-embed-large

7. Check for spelling errors - they will get you every time!
