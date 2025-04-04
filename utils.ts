import {OpenAIEmbeddings} from '@langchain/openai';
import {RecursiveCharacterTextSplitter} from '@langchain/textsplitters';
import {loadQAStuffChain} from 'langchain/chains';
import {Document} from 'langchain/document';
import { timeout } from './config';

export const createPinceconeIndex = async (
    client,
    indexName,
    vectorDimension
) => {
    //1.Initiate index existence check
    console.log('Checking "${indexName');
}