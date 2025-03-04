import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function Home() {
  return (
    <>
      <Button variant="destructive">CP</Button>
      <Calendar date={new Date()} />
    </>
  );
}
