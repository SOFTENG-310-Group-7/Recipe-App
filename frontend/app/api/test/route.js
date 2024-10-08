export const runtime = 'nodejs';

export async function GET() {
  const mongoUri = process.env.MONGO_URI;

  return new Response(`MONGO_URI is: ${mongoUri}`, {
    status: 200,
  });
}
