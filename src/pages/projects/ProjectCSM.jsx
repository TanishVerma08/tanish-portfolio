import { Helmet } from "react-helmet-async";

export default function ProjectCSM() {
  return (
    <>
      <Helmet>
        <title>Cyber School Manager - Tanish Verma Project</title>
        <meta name="description" content="Learn about Cyber School Manager, an ERP-based school management system developed by Tanish Verma. Features academic records, staff management, and visitor tracking." />
        <meta name="keywords" content="Cyber School Manager, ERP, school management system, Tanish Verma project" />
        <meta property="og:title" content="Cyber School Manager - Tanish Verma Project" />
        <meta property="og:description" content="Learn about Cyber School Manager, an ERP-based school management system developed by Tanish Verma." />
        <meta property="og:url" content="https://tanishverma.dev/projects/csm" />
        <meta property="twitter:title" content="Cyber School Manager - Tanish Verma Project" />
        <meta property="twitter:description" content="Learn about Cyber School Manager, an ERP-based school management system developed by Tanish Verma." />
      </Helmet>
      <section className="max-w-3xl">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        Cyber School Manager
      </h1>
      <p className="leading-relaxed">
        An ERP-based school management system handling academics,
        administration, reporting, and secure visitor entry.
      </p>
    </section>
    </>
  );
}
