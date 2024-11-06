import * as cheerio from "cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";
import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
// Load environment variables from the .env file
import dotenv from "dotenv";

//load env
dotenv.config();

(async () => {
    try {
        const loader = new CheerioWebBaseLoader(
            "https://lilianweng.github.io/posts/2023-06-23-agent/"
        );
        //load the documents using the loader
        const docs = await loader.load();

        //initialize the recursivecharactertextsplitter
        const textSplitter = new RecursiveCharacterTextSplitter({
            chunkSize: 500,
            chunkOverlap: 0,
        });

        //split the loaded documents into chunks
        const allSplits = await textSplitter.splitDocuments(docs);
        console.log("Number of chunks: ", allSplits.length);

        //Use OllamaEmbeddings with MisralAI Locally
        const embeddings = new OllamaEmbeddings();

        //Create a vector store with Mistral embeddings
        const vectorStore = await MemoryVectorStore.fromDocuments(allSplits, embeddings);

        //Test simularity search
        const question = "What are the approaches to Task Decomposition?";
        const searchResult = await vectorStore.similaritySearch(question);
        console.log("Number of search results: ", searchResult.length);
    } catch (error) {
        //catch and log any errors 
        console.error(error);

    }
})();

