import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

export default async function Home() {
  await db.set("name", "abbenezer");
  return (
    <div>
      <Button size="lg" variant="ghost">
        {process.env.UPSTASH_REDIS_REST_URL}
      </Button>
    </div>
  );
}
