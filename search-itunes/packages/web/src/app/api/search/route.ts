import { SearchResult } from "@/app/interfaces/search.interface";
import { NextApiRequest, NextApiResponse } from "next";
const env = process.env;

export async function GET(req: NextApiRequest, res: NextApiResponse<SearchResult>) {
  try {
    // Get the term from the query string
    const { searchParams } = new URL(req.url!);
    const term = searchParams.get('term');

    // If the term is missing, return a 400 Bad Request
    if (!term)
      return new Response(JSON.stringify({
        message: 'Missing query parameter: term',
      }), { status: 400, statusText: 'Bad Request' });

    // Fetch the data from the API
    const data = await fetch(`${env.API_URL}/search?term=${term}}`);

    if (!data.ok)
      return new Response(JSON.stringify({
        message: `Error from API: ${term}`,
      }), { status: 500, statusText: 'Failed to fetch the data' });

    const json = await data.json();

    return new Response(JSON.stringify(json), { status: 200, statusText: 'OK' });
  } catch (error) {
    return new Response(JSON.stringify({
      message: `Error from API: ${error}`,
    }), { status: 500, statusText: 'Internal Server Error' });
  }
}