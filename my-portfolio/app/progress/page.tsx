import { redirect } from "next/navigation";

export default function ProgressRedirect() {
  // Legacy route preserved to avoid 404s after rename.
  redirect("/journey");
  return null;
}
