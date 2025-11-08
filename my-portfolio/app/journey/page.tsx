import React from "react";

interface Milestone {
  id: number;
  title: string;
  description: string;
  status: "planned" | "in-progress" | "done";
  period?: string;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: "High School Graduation",
    description: "Completed senior secondary education with focus on mathematics & physics fundamentals.",
    status: "done",
    period: "2019",
  },
  {
    id: 2,
    title: "Bachelor of Computer Science",
    description: "Core coursework: algorithms, data structures, operating systems, networks, databases. Built several academic projects and strengthened low-level foundations.",
    status: "in-progress",
    period: "2021 - 2025",
  },
  {
    id: 3,
    title: "Internship: Backend Engineering (Company A)",
    description: "Implemented REST APIs, added caching layer (Redis) for latency reduction, wrote integration tests, participated in code reviews.",
    status: "done",
    period: "Summer 2023",
  },
  {
    id: 4,
    title: "Internship: Data Engineering (Company B)",
    description: "Designed ingestion pipelines, optimized SQL transformations, introduced monitoring dashboards for data freshness SLAs.",
    status: "planned",
    period: "Summer 2024",
  },
  {
    id: 5,
    title: "Capstone Project",
    description: "Design and build a production-grade microservice system integrating ML inference, observability, and CI/CD automation.",
    status: "planned",
    period: "Final Year",
  },
  {
    id: 6,
    title: "Open Source Contributions",
    description: "Consistent PRs to performance / developer tooling repositories (goal: merged contributions + maintainer trust).",
    status: "in-progress",
    period: "Ongoing",
  },
  {
    id: 7,
    title: "Full-Time SWE/Systems Role",
    description: "Transition into a role emphasizing distributed systems reliability, scalability, and developer productivity impact.",
    status: "planned",
    period: "Post-Graduation",
  },
  {
    id: 8,
    title: "Conference / Publication",
    description: "Prepare a technical talk or paper on an applied systems + ML efficiency topic; submit to a reputable venue.",
    status: "planned",
    period: "1-2 Years After Graduation",
  },
];

const statusBadge: Record<Milestone["status"], string> = {
  done: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "in-progress":
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  planned:
    "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
};

const dotColor: Record<Milestone["status"], string> = {
  done: "bg-green-500 dark:bg-green-400",
  "in-progress": "bg-yellow-500 dark:bg-yellow-400",
  planned: "bg-slate-400 dark:bg-slate-600",
};

export default function JourneyPage() {
  return (
    <div className="pt-24 pb-32 container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-2">Journey</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
        A mapped journey of academic milestones, internships, and forward-looking
        career goals. The central dashed path shows progression; cards alternate
        sides to mark each stage.
      </p>

      <div className="relative">
        {/* Central dashed vertical path */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-full border-l-4 border-dashed border-slate-300 dark:border-slate-700"
          aria-hidden="true"
        />

        <ul className="space-y-20">
          {milestones.map((m, idx) => {
            const side = idx % 2 === 0 ? "left" : "right";
            return (
              <li
                key={m.id}
                className={`relative flex ${
                  side === "left"
                    ? "justify-start pr-[52%]"
                    : "justify-end pl-[52%]"
                }`}
              >
                {/* Connector dot */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-6 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-300 dark:border-slate-700 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span
                    className={`block w-2.5 h-2.5 rounded-full ${dotColor[m.status]}`}
                  />
                </div>

                <div className="group bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl p-5 max-w-md hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h2 className="font-semibold text-lg">{m.title}</h2>
                      {m.period && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {m.period}
                        </p>
                      )}
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium shrink-0 ${statusBadge[m.status]}`}
                    >
                      {m.status.replace("-", " ")}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-20 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
        <p>
          Legend: Green = completed, Yellow = in progress, Gray = planned. Edit
          the <code>milestones</code> array in <code>app/journey/page.tsx</code>{" "}
          to replace dummy data.
        </p>
      </div>
    </div>
  );
}
